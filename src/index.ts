import { buildPrompt, buildPresetSelect, ExtensionSettingsManager, Generator } from 'sillytavern-utils-lib';
import {
  characters,
  selected_group,
  st_echo,
  st_runCommandCallback,
  system_avatar,
  systemUserName,
} from 'sillytavern-utils-lib/config';
import { ChatMessage, EventNames, ExtractedData, StreamResponse } from 'sillytavern-utils-lib/types';
import { ChatCompletionPreset } from 'sillytavern-utils-lib/types/chat-completion';
import { TextCompletionPreset } from 'sillytavern-utils-lib/types/text-completion';

const extensionName = 'SillyTavern-Roadway';
const VERSION = '0.4.0';
const FORMAT_VERSION = 'F_1.0';
const globalContext = SillyTavern.getContext();

const KEYS = {
  EXTENSION: 'roadway',
  EXTRA: {
    TARGET: 'roadway_target_chat',
    RAW_CONTENT: 'roadway_raw_content',
    OPTIONS: 'roadway_options',
  },
} as const;

interface PromptPreset {
  content: string;
  extractionStrategy: 'bullet' | 'none';
  impersonate?: string;
}

interface ExtensionSettings {
  version: string;
  formatVersion: string;
  profileId: string;
  maxContextType: 'profile' | 'sampler' | 'custom';
  maxContextValue: number;
  maxResponseToken: number;
  promptPreset: string;
  autoTrigger: boolean;
  autoOpen: boolean;
  promptPresets: Record<string, PromptPreset>;
  impersonateApi: 'main' | 'profile';
  impersonateProfileId: string;
  showUseActionIcon: boolean;
  autoSubmitUseAction: boolean;
  messageRole: 'user' | 'system' | 'assistant';
}

const DEFAULT_IMPERSONATE = `Your task this time is to write your response as if you were {{user}}, impersonating their style. Use {{user}}'s dialogue and actions so far as a guideline for how they would likely act. Don't ever write as {{char}}. Only talk and act as {{user}}. This is what {{user}}'s focus:

{{roadwaySelected}}`;

const DEFAULT_PROMPT = `You are an AI brainstorming partner, helping to create immersive and surprising roleplaying experiences, **building upon the established context from our previous conversation.** Your task is to generate an *unpredictable* and *engaging* list of options for **{{user}}**, specifically tailored to their character, the world, and the current situation as established in our previous dialogue. These should be framed as possible actions that **{{user}}** *could* take.

Output ONLY a numbered list of possible actions. Each action should be a clear, actionable, concise, and *creative* sentence written in plain text suggesting an action **{{user}}** can perform in the game.

Prioritize *varied* actions that span multiple domains:

{Observation/Investigation; Dialogue/Persuasion; Stealth/Intrigue; Combat/Conflict; Crafting/Repair; Knowledge/Lore; Movement/Traversal; Deception/Manipulation; Performance/Entertainment; Technical/Mechanical}.

Avoid obvious or repetitive actions **that {{user}} has already explored or are contrary to the established character/world.** Push the boundaries of the situation. Challenge **{{user}}'s** expectations. Do not include greetings, farewells, polite thanks, or options that break character. Generate *exactly* 6 actions. The actions must be written in plain text.

Here are a few example actions to inspire creativity:

1. Attempt to communicate with the forest creatures to learn the location of hidden trails.
2. Bribe the corrupt city guard with a song and a dance.
3. Stage a fake ambush to draw out a hidden enemy.`;

const DEFAULT_SETTINGS: ExtensionSettings = {
  version: VERSION,
  formatVersion: FORMAT_VERSION,
  profileId: '',
  maxContextType: 'profile',
  maxContextValue: 16384,
  maxResponseToken: 500,
  promptPreset: 'default',
  autoTrigger: false,
  autoOpen: true,
  impersonateApi: 'main',
  impersonateProfileId: '',
  showUseActionIcon: true,
  autoSubmitUseAction: false,
  messageRole: 'system',
  promptPresets: {
    default: {
      content: DEFAULT_PROMPT,
      extractionStrategy: 'bullet',
      impersonate: DEFAULT_IMPERSONATE,
    },
  },
};

const settingsManager = new ExtensionSettingsManager<ExtensionSettings>(KEYS.EXTENSION, DEFAULT_SETTINGS);

async function handleUIChanges(): Promise<void> {
  const settingsHtml: string = await globalContext.renderExtensionTemplateAsync(
    `third-party/${extensionName}`,
    'templates/settings',
  );
  $('#extensions_settings').append(settingsHtml);

  const settingsContainer = $('.roadway_settings');

  const settings = settingsManager.getSettings();
  globalContext.ConnectionManagerRequestService.handleDropdown(
    '.roadway_settings .connection_profile',
    settings.profileId,
    (profile) => {
      settings.profileId = profile?.id ?? '';
      settingsManager.saveSettings();
    },
  );

  const promptElement = settingsContainer.find('textarea.prompt');
  const extractionStrategyElement = settingsContainer.find('select.extraction_strategy');
  const impersonateSection = settingsContainer.find('.impersonate_section');
  const impersonateElement = settingsContainer.find('textarea.impersonate');

  const { select } = buildPresetSelect('.roadway_settings select.prompt', {
    initialValue: settings.promptPreset,
    initialList: Object.keys(settings.promptPresets),
    readOnlyValues: ['default'],
    onSelectChange: async (_previousValue, newValue) => {
      const newPresetValue = newValue ?? 'default';
      settings.promptPreset = newPresetValue;
      settingsManager.saveSettings();
      promptElement.val(settings.promptPresets[newPresetValue]?.content ?? '');
      extractionStrategyElement.val(settings.promptPresets[newPresetValue]?.extractionStrategy);
      impersonateElement.val(settings.promptPresets[newPresetValue]?.impersonate ?? '');
      impersonateSection.css(
        'display',
        settings.promptPresets[newPresetValue]?.extractionStrategy === 'none' ? 'none' : 'block',
      );
    },
    create: {
      onAfterCreate: (value) => {
        const currentPreset = settings.promptPresets[settings.promptPreset];
        settings.promptPresets[value] = {
          content: currentPreset?.content ?? DEFAULT_PROMPT,
          extractionStrategy: currentPreset?.extractionStrategy ?? 'bullet',
          impersonate: currentPreset?.impersonate ?? DEFAULT_IMPERSONATE,
        };
      },
    },
    rename: {
      onAfterRename: (previousValue, newValue) => {
        settings.promptPresets[newValue] = settings.promptPresets[previousValue];
        delete settings.promptPresets[previousValue];
      },
    },
    delete: {
      onAfterDelete: (value) => {
        delete settings.promptPresets[value];
      },
    },
  });

  promptElement.val(settings.promptPresets[settings.promptPreset]?.content ?? '');
  promptElement.on('change', function () {
    const template = promptElement.val() as string;
    settings.promptPresets[settings.promptPreset].content = template;
    settingsManager.saveSettings();
  });

  function updateExtractionStrategy() {
    const preset = settings.promptPresets[settings.promptPreset];
    extractionStrategyElement.val(preset?.extractionStrategy);
    const isNone = preset?.extractionStrategy === 'none';
    impersonateSection.toggle(!isNone);
    impersonateElement.val(preset?.impersonate ?? '');
  }
  updateExtractionStrategy();

  extractionStrategyElement.on('change', function () {
    const value = $(this).val() as 'bullet' | 'none';
    settings.promptPresets[settings.promptPreset].extractionStrategy = value;
    settingsManager.saveSettings();
    const isNone = value === 'none';
    impersonateSection.toggle(!isNone);
  });

  impersonateElement.on('change', function () {
    settings.promptPresets[settings.promptPreset].impersonate = $(this).val() as string;
    settingsManager.saveSettings();
  });

  // Update extraction strategy when preset changes
  select.addEventListener('change', updateExtractionStrategy);

  settingsContainer.find('.restore_default').on('click', async function () {
    const confirm = await globalContext.Popup.show.confirm(
      'Are you sure you want to restore the default prompt?',
      'Restore default',
    );
    if (!confirm) {
      return;
    }

    settings.promptPresets['default'] = {
      content: DEFAULT_PROMPT,
      extractionStrategy: 'bullet',
      impersonate: DEFAULT_IMPERSONATE,
    };
    promptElement.val(DEFAULT_PROMPT);
    extractionStrategyElement.val('bullet');
    impersonateElement.val(DEFAULT_IMPERSONATE);
    if (select.value !== 'default') {
      select.value = 'default';
      select.dispatchEvent(new Event('change'));
    } else {
      settingsManager.saveSettings();
    }
  });

  const maxContextTypeElement = settingsContainer.find('.max_context_type');
  const maxContextValueElement = settingsContainer.find('.max_context_value');
  const maxContextCustomDiv = settingsContainer.find('.max_context_custom');

  maxContextTypeElement.val(settings.maxContextType);
  maxContextValueElement.val(settings.maxContextValue);

  if (settings.maxContextType === 'custom') {
    maxContextCustomDiv.show();
  }

  maxContextTypeElement.on('change', function () {
    const newType = $(this).val() as 'profile' | 'sampler' | 'custom';
    settings.maxContextType = newType;
    settingsManager.saveSettings();
    maxContextCustomDiv.toggle(newType === 'custom');
  });

  maxContextValueElement.on('change', function () {
    settings.maxContextValue = Number($(this).val());
    settingsManager.saveSettings();
  });

  const maxResponseTokenElement = settingsContainer.find('.max_response_tokens');
  maxResponseTokenElement.val(settings.maxResponseToken);
  maxResponseTokenElement.on('change', function () {
    settings.maxResponseToken = Number($(this).val());
    settingsManager.saveSettings();
  });

  const autoTriggerElement = settingsContainer.find('.auto_trigger');
  autoTriggerElement.prop('checked', settings.autoTrigger);
  autoTriggerElement.on('change', function () {
    settings.autoTrigger = $(this).prop('checked');
    settingsManager.saveSettings();
  });

  const autoOpenElement = settingsContainer.find('.auto_open');
  autoOpenElement.prop('checked', settings.autoOpen);
  autoOpenElement.on('change', function () {
    settings.autoOpen = $(this).prop('checked');
    settingsManager.saveSettings();
  });

  const showUseActionElement = settingsContainer.find('.show_use_action');
  showUseActionElement.prop('checked', settings.showUseActionIcon);

  showUseActionElement.on('change', function () {
    settings.showUseActionIcon = $(this).prop('checked');
    settingsManager.saveSettings();

    // Update visibility of all existing use buttons
    $('.custom-roadway_options .custom-use_action').toggle(settings.showUseActionIcon);
  });

  const autoSubmitUseActionElement = settingsContainer.find('.auto_submit_use_action');
  autoSubmitUseActionElement.prop('checked', settings.autoSubmitUseAction);
  autoSubmitUseActionElement.on('change', function () {
    settings.autoSubmitUseAction = $(this).prop('checked');
    settingsManager.saveSettings();
  });

  const messageRoleElement = settingsContainer.find('.message_role');
  messageRoleElement.val(settings.messageRole);
  messageRoleElement.on('change', function () {
    settings.messageRole = $(this).val() as 'user' | 'system' | 'assistant';
    settingsManager.saveSettings();
  });
  const impersonateApiElement = settingsContainer.find('select.impersonate_api');
  const impersonateProfileSection = settingsContainer.find('.impersonate_profile_section');
  impersonateApiElement.val(settings.impersonateApi);
  if (settings.impersonateApi === 'profile') {
    impersonateProfileSection.show();
  }
  impersonateApiElement.on('change', function () {
    const value = $(this).val() as 'main' | 'profile';
    settings.impersonateApi = value;
    settingsManager.saveSettings();
    impersonateProfileSection.toggle(value === 'profile');
  });

  globalContext.ConnectionManagerRequestService.handleDropdown(
    '.roadway_settings .impersonate_connection_profile',
    settings.impersonateProfileId,
    (profile) => {
      settings.impersonateProfileId = profile?.id ?? '';
      settingsManager.saveSettings();
    },
  );

  const roadwayButton = $(
    `<div title="Generate Roadway" class="mes_button mes_magic_roadway_button fa-solid fa-road interactable" tabindex="0"></div>`,
  );
  $('#message_template .mes_buttons .extraMesButtons').prepend(roadwayButton);
  const pendingRequests = new Set<number>();
  $(document).on('click', '.mes_magic_roadway_button', async function () {
    const context = SillyTavern.getContext();
    if (!settings.profileId) {
      await st_echo('error', 'Please select a connection profile first in the settings.');
      return;
    }
    if (!settings.promptPreset) {
      await st_echo('error', 'Please enter a prompt first in the settings.');
      return;
    }
    const messageBlock = $(this).closest('.mes');
    const targetMessageId = Number(messageBlock.attr('mesid'));
    const profile = context.extensionSettings.connectionManager?.profiles?.find(
      (profile) => profile.id === settings.profileId,
    );

    const apiMap = profile?.api ? context.CONNECT_API_MAP[profile.api] : null;
    const targetMessage = context.chat.find((_mes, index) => index === targetMessageId);
    if (!targetMessage) {
      return;
    }
    let characterId: number | undefined = characters.findIndex(
      (char: any) => char.avatar === targetMessage.original_avatar,
    );
    characterId = characterId !== -1 ? characterId : undefined;

    try {
      if (pendingRequests.has(targetMessageId)) {
        await st_echo('warning', 'A request for this message is already in progress. Please wait.');
        return;
      }

      pendingRequests.add(targetMessageId);
      $(this).addClass('spinning');

      const promptResult = await buildPrompt(apiMap?.selected!, {
        targetCharacterId: characterId,
        messageIndexesBetween: {
          end: targetMessageId,
        },
        presetName: profile?.preset,
        contextName: profile?.context,
        instructName: profile?.instruct,
        syspromptName: profile?.sysprompt,
        maxContext:
          settings.maxContextType === 'custom'
            ? settings.maxContextValue
            : settings.maxContextType === 'profile'
              ? 'preset'
              : 'active',
        includeNames: !!selected_group,
      });
      const messages = promptResult.result;
      messages.push({
        content: context.substituteParams(settings.promptPresets[settings.promptPreset].content),
        role: settings.messageRole,
      });
      const rest = (await context.ConnectionManagerRequestService.sendRequest(
        settings.profileId,
        messages,
        settings.maxResponseToken,
      )) as ExtractedData;

      let actions: string[] = [];
      const extractionStrategy = settings.promptPresets[settings.promptPreset]?.extractionStrategy;
      if (extractionStrategy === 'bullet') {
        actions = extractBulletPoints(rest.content);
        if (actions.length === 0) {
          await st_echo('warning', 'Could not extract any bullet points from the response. Using original response.');
        }
      }

      const innerText = actions?.length
        ? actions.map((action, index) => `${index + 1}. ${action}`).join('\n')
        : rest.content;

      const existMessage = context.chat.find((mes) => mes.extra?.[KEYS.EXTRA.TARGET] === targetMessageId);
      let newMessage: ChatMessage = existMessage ?? {
        mes: formatResponse(innerText, extractionStrategy === 'bullet' ? actions : undefined),
        name: systemUserName,
        force_avatar: system_avatar,
        is_system: true,
        is_user: false,
        extra: {
          isSmallSys: true,
          [KEYS.EXTRA.TARGET]: targetMessageId,
          [KEYS.EXTRA.RAW_CONTENT]: innerText,
          [KEYS.EXTRA.OPTIONS]: actions,
        },
      };

      if (existMessage) {
        newMessage.mes = formatResponse(innerText, extractionStrategy === 'bullet' ? actions : undefined);
        newMessage.extra![KEYS.EXTRA.RAW_CONTENT] = rest.content;
        newMessage.extra![KEYS.EXTRA.OPTIONS] = actions;
        const detailsElement = $(`[mesid="${targetMessageId + 1}"] .mes_text`);
        detailsElement.html(
          formatResponse(innerText, extractionStrategy === 'bullet' ? actions : undefined, 'custom-'),
        );
      } else {
        context.chat.push(newMessage);
        context.addOneMessage(newMessage, { insertAfter: targetMessageId });
      }
      const detailsElement = $(`[mesid="${targetMessageId + 1}"] .mes_text details`);
      if (settings.autoOpen && !detailsElement.attr('open')) {
        detailsElement.attr('open', '');
      }
      attachRoadwayOptionHandlers(targetMessageId + 1);

      await context.saveChat();
    } catch (error) {
      console.error(error);
      await st_echo('error', `Error: ${error}`);
    } finally {
      pendingRequests.delete(targetMessageId);
      $('.mes_magic_roadway_button').removeClass('spinning');
    }
  });

  function formatResponse(response: string, options?: string[], classPrefix = ''): string {
    const detailsElement = document.createElement('details');
    const summaryElement = document.createElement('summary');
    summaryElement.textContent = 'Roadway';
    detailsElement.appendChild(summaryElement);

    if (options?.length) {
      const optionsDiv = document.createElement('div');
      optionsDiv.classList.add(`${classPrefix}roadway_options`);

      options.forEach((option, _index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add(`${classPrefix}roadway_option`);

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add(`${classPrefix}option_actions`);

        // Create impersonate button
        const impersonateButton = document.createElement('div');
        impersonateButton.classList.add(`${classPrefix}action_button`, `${classPrefix}impersonate_action`);
        impersonateButton.innerHTML = '✍️';
        impersonateButton.title = 'Impersonate';

        // Create edit button
        const editButton = document.createElement('div');
        editButton.classList.add(`${classPrefix}action_button`, `${classPrefix}edit_action`);
        editButton.innerHTML = '✏️';
        editButton.title = 'Edit';

        // Create use button (only if enabled in settings)
        const settings = settingsManager.getSettings();
        const useButton = document.createElement('div');
        useButton.classList.add(`${classPrefix}action_button`, `${classPrefix}use_action`);
        useButton.innerHTML = '▶️';
        useButton.title = 'Use option';
        useButton.style.display = settings.showUseActionIcon ? 'inline-block' : 'none';
        actionsDiv.appendChild(useButton);

        actionsDiv.appendChild(impersonateButton);
        actionsDiv.appendChild(editButton);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add(`${classPrefix}option_content`);
        contentDiv.textContent = option;

        optionDiv.appendChild(actionsDiv);
        optionDiv.appendChild(contentDiv);
        optionsDiv.appendChild(optionDiv);
      });

      detailsElement.appendChild(optionsDiv);
    } else {
      const preElement = document.createElement('pre');
      preElement.classList.add(`${classPrefix}roadway_pre`);
      preElement.textContent = response;
      detailsElement.appendChild(preElement);
    }

    return detailsElement.outerHTML;
  }
}

function extractBulletPoints(text: string): string[] {
  const matches = text.match(/^(?:\d+\.(?:\s+|(?=\S))|-\s+)(.*)$/gm) || [];
  return matches.map((line) => {
    return line.replace(/^(?:\d+\.(?:\s+|(?=\S))|-\s+)/, '').trim();
  });
}

const generator = new Generator();
let lastRequestId: string | undefined;
function attachRoadwayOptionHandlers(roadwayMessageId: number) {
  const optionsContainer = $(`[mesid="${roadwayMessageId}"] .custom-roadway_options`);
  optionsContainer.find('.custom-action_button').off();

  const context = SillyTavern.getContext();

  // Handle impersonate action
  optionsContainer.find('.custom-impersonate_action').on('click', async function () {
    const parentOption = $(this).closest('.custom-roadway_option');
    const index = optionsContainer.find('.custom-roadway_option').index(parentOption);

    const message = context.chat.find((mes, index) => roadwayMessageId === index);
    if (!message) {
      return;
    }

    const settings = settingsManager.getSettings();
    const preset = settings.promptPresets[context.extensionSettings[KEYS.EXTENSION].promptPreset];
    if (!preset || !preset.impersonate) {
      await st_echo('error', 'Preset not found. Please check the extension settings.');
      return;
    }

    const impersonate = globalContext.substituteParams(
      preset.impersonate,
      {
        dynamicMacros: { roadwaySelected: message.extra?.[KEYS.EXTRA.OPTIONS]?.[index] },
      },
    );
    if (settings.impersonateApi === 'profile') {
      if (!settings.impersonateProfileId) {
        await st_echo('error', 'Please select an impersonation connection profile in the settings.');
        return;
      }

      const profile = context.extensionSettings.connectionManager?.profiles?.find(
        (profile) => profile.id === settings.impersonateProfileId,
      );

      const apiMap = profile?.api ? context.CONNECT_API_MAP[profile.api] : null;
      if (!apiMap?.selected) {
        st_echo('error', 'Please select an API in the connection profile.');
        return;
      }

      globalContext.deactivateSendButtons();
      try {
        const promptResult = await buildPrompt(apiMap.selected, {
          presetName: profile?.preset,
          contextName: profile?.context,
          instructName: profile?.instruct,
          syspromptName: profile?.sysprompt,
          maxContext:
            settings.maxContextType === 'custom'
              ? settings.maxContextValue
              : settings.maxContextType === 'profile'
                ? 'preset'
                : 'active',
          includeNames: !!selected_group,
        });
        const messages = promptResult.result;
        messages.push({
          role: 'system',
          content: impersonate,
        });

        let streamingEnabled = true;
        let maxResponseToken = settings.maxResponseToken;
        if (apiMap.selected === 'openai') {
          const preset = globalContext.getPresetManager('openai').getCompletionPresetByName(profile?.preset) as
            | ChatCompletionPreset
            | undefined;
          if (preset) {
            streamingEnabled = preset.stream_openai;
            maxResponseToken = preset.openai_max_tokens;
          }
        } else if (apiMap.selected === 'textgenerationwebui') {
          const preset = globalContext
            .getPresetManager('textgenerationwebui')
            .getCompletionPresetByName(profile?.preset) as TextCompletionPreset | undefined;
          if (preset) {
            streamingEnabled = preset.streaming ?? context.textCompletionSettings.streaming ?? false;
            maxResponseToken = preset.genamt ?? maxResponseToken;
          }
        }

        const textInputElement = $('#send_textarea');
        const abortController = new AbortController();
        await generator.generateRequest(
          {
            profileId: settings.impersonateProfileId,
            prompt: messages,
            maxTokens: maxResponseToken,
            custom: {
              stream: streamingEnabled,
              signal: streamingEnabled ? abortController.signal : undefined,
            },
          },
          {
            abortController: streamingEnabled ? abortController : undefined,
            onStart(uuid) {
              lastRequestId = uuid;
              globalContext.eventSource.emit(EventNames.GENERATION_STARTED, 'impersonate', {
                signal: streamingEnabled ? abortController.signal : undefined,
              });
            },
            onEntry(data) {
              if (streamingEnabled && data) {
                textInputElement.val((data as StreamResponse).text);
                textInputElement.trigger('input');
                textInputElement.trigger('change');
              }
            },
            onFinish(data, error) {
              if (!streamingEnabled && data) {
                textInputElement.val((data as ExtractedData).content);
                textInputElement.trigger('input');
                textInputElement.trigger('change');
              }

              if (error) {
                st_echo('error', `Error: ${error}`);
              }

              globalContext.activateSendButtons();
            },
          },
        );
      } catch (error) {
        console.error(error);
        await st_echo('error', `Error: ${error}`);
      } finally {
        globalContext.activateSendButtons();
        lastRequestId = undefined;
      }
    } else {
      st_runCommandCallback('impersonate', undefined, impersonate);
    }
  });

  // Handle use action
  optionsContainer.find('.custom-use_action').on('click', function () {
    const parentOption = $(this).closest('.custom-roadway_option');
    const contentDiv = parentOption.find('.custom-option_content');
    const text = contentDiv.text();

    if (text) {
      $('#send_textarea').val(text);
      $('#send_textarea').trigger('input');

      if (settingsManager.getSettings().autoSubmitUseAction) {
        $('#send_but').trigger('click');
      }

      const useButton = $(this);
      useButton.html('✓');
      setTimeout(() => {
        useButton.html('▶️');
      }, 1000);
    }
  });

  // Handle edit action
  optionsContainer.find('.custom-edit_action').on('click', async function () {
    const parentOption = $(this).closest('.custom-roadway_option');
    const contentDiv = parentOption.find('.custom-option_content');
    const originalText = contentDiv.text();

    // Create input for editing
    const input = $('<textarea>').val(originalText).css({
      width: '100%',
      minHeight: '50px',
      resize: 'vertical',
      backgroundColor: 'var(--SmartThemeBlurTintColor)',
      color: 'var(--SmartThemeBodyColor)',
      border: '1px solid var(--SmartThemeBorderColor)',
      borderRadius: 'var(--avatar-base-border-radius)',
      padding: 'calc(var(--mainFontSize) * 0.5)',
    });

    contentDiv.empty().append(input);
    input.trigger('focus');

    // Handle save on blur
    input.on('blur', function () {
      const newText = input.val() as string;
      contentDiv.text(newText);

      // Update the stored options
      const message = context.chat.find((_mes, index) => roadwayMessageId === index);
      if (message?.extra?.[KEYS.EXTRA.OPTIONS]) {
        const index = optionsContainer.find('.custom-roadway_option').index(parentOption);
        message.extra[KEYS.EXTRA.OPTIONS][index] = newText;
        context.saveChat();
      }
    });

    // Handle save on enter (shift+enter for new line)
    input.on('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        input.trigger('blur');
      }
    });
  });
}

function initializeEvents() {
  // If last message is roadway, add event listener
  globalContext.eventSource.on(EventNames.CHAT_CHANGED, () => {
    const context = SillyTavern.getContext();
    if (!context.chat.length) {
      return;
    }

    $('.custom-roadway_options .custom-use_action').toggle(settingsManager.getSettings().showUseActionIcon);
    const lastMessage = context.chat[context.chat.length - 1];
    if (typeof lastMessage.extra?.[KEYS.EXTRA.TARGET] === 'number') {
      attachRoadwayOptionHandlers(context.chat.length - 1);
    }
  });

  let lastRenderedMessageId = -1;
  // Auto trigger when new character message is received
  // @ts-ignore
  globalContext.eventSource.makeFirst(EventNames.CHARACTER_MESSAGE_RENDERED, (messageId: number, type?: string) => {
    lastRenderedMessageId = messageId;
    const settings = settingsManager.getSettings();
    if (!settings.autoTrigger || type === 'group_chat' || selected_group) {
      return;
    }

    // Simulate clicking the roadway button for this message
    const messageBlock = $(`[mesid="${messageId}"]`);
    messageBlock.find('.mes_magic_roadway_button').trigger('click');
  });

  const allowed_group_types: (string | undefined)[] = ['normal', 'continue', 'swipe'];
  // @ts-ignore
  globalContext.eventSource.makeFirst(
    EventNames.GROUP_WRAPPER_FINISHED,
    (params: { groupId: string; type?: string }) => {
      const settings = settingsManager.getSettings();
      if (!settings.autoTrigger || lastRenderedMessageId === -1 || !allowed_group_types.includes(params.type)) {
        return;
      }

      // Simulate clicking the roadway button for this message
      const messageBlock = $(`[mesid="${lastRenderedMessageId}"]`);
      messageBlock.find('.mes_magic_roadway_button').trigger('click');
    },
  );

  $('#mes_stop').on('click', () => {
    if (lastRequestId) {
      generator.abortRequest(lastRequestId);
    }
  });
}

function importCheck(): boolean {
  if (!globalContext.ConnectionManagerRequestService) {
    return false;
  }

  if (!globalContext.getCharacterCardFields) {
    return false;
  }

  if (!globalContext.getWorldInfoPrompt) {
    return false;
  }

  return true;
}

function main() {
  handleUIChanges();
  initializeEvents();
}

if (!importCheck()) {
  const errorStr = '[Roadway Error] Make sure ST is updated.';
  st_echo('error', errorStr);
} else {
  settingsManager
    .initializeSettings()
    .then((result) => {
      if (result.version.changed) {
        // 0.3.0 to 0.4.0
        if (result.oldSettings.version < '0.4.0' && result.newSettings.version === '0.4.0') {
          st_echo('info', '[Roadway] Added impersonate with connection profile api. Check extension settings.');
        }
      }
      main();
    })
    .catch((error) => {
      st_echo('error', error);
      globalContext.Popup.show
        .confirm('Data migration failed. Do you want to reset the roadway data?', 'Roadway')
        .then((result) => {
          if (result) {
            settingsManager.resetSettings();
            main();
          }
        });
    });
}
