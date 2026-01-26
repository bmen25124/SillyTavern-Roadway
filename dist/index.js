import * as __WEBPACK_EXTERNAL_MODULE__script_js_588e7203__ from "../../../../../script.js";
import * as __WEBPACK_EXTERNAL_MODULE__authors_note_js_59167e8d__ from "../../../../authors-note.js";
import * as __WEBPACK_EXTERNAL_MODULE__chats_js_c244506c__ from "../../../../chats.js";
import * as __WEBPACK_EXTERNAL_MODULE__group_chats_js_678c16bd__ from "../../../../group-chats.js";
import * as __WEBPACK_EXTERNAL_MODULE__instruct_mode_js_e7f3531a__ from "../../../../instruct-mode.js";
import * as __WEBPACK_EXTERNAL_MODULE__openai_js_bf183548__ from "../../../../openai.js";
import * as __WEBPACK_EXTERNAL_MODULE__power_user_js_3c7cfb8b__ from "../../../../power-user.js";
import * as __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandCommonEnumsProvider_js_4453b111__ from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import * as __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandEnumValue_js_20f1c506__ from "../../../../slash-commands/SlashCommandEnumValue.js";
import * as __WEBPACK_EXTERNAL_MODULE__utils_js_d605cabe__ from "../../../../utils.js";
import * as __WEBPACK_EXTERNAL_MODULE__world_info_js_83198f57__ from "../../../../world-info.js";
import * as __WEBPACK_EXTERNAL_MODULE__regex_engine_js_683beba0__ from "../../../regex/engine.js";
/******/ var __webpack_modules__ = ({

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDrag: () => (/* binding */ MultiDragPlugin),
/* harmony export */   Sortable: () => (/* binding */ Sortable),
/* harmony export */   Swap: () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version = "1.15.6";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches( /**HTMLElement*/el, /**String*/selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest( /**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }
      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = '';
  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');
      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
      i = 0,
      n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}

/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode;

    // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect();

          // Set relative to edges of padding box of container
          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
      scaleX = elMatrix && elMatrix.a,
      scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}

/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
    elSideVal = getRect(el)[elSide];

  /* jshint boss:true */
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
      visible = void 0;
    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}

/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
    i = 0,
    children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}

/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}

/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */
function index(el, selector) {
  var index = 0;
  if (!el || !el.parentNode) {
    return -1;
  }

  /* jshint boss:true */
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }
  return index;
}

/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */
function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
    offsetTop = 0,
    winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el),
        scaleX = elMatrix.a,
        scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}

/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
        _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}
function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}
function getChildContainingRectFromElement(container, options, ghostEl) {
  var rect = {};
  Array.from(container.children).forEach(function (child) {
    var _rect$left, _rect$top, _rect$right, _rect$bottom;
    if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl) return;
    var childRect = getRect(child);
    rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
    rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
    rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
    rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
    animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);

        // If animating: compensate for current animation
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }
      var animating = false,
        animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
          target = state.target,
          fromRect = target.fromRect,
          toRect = getRect(target),
          prevFromRect = target.prevFromRect,
          prevToRect = target.prevToRect,
          animatingRect = state.rect,
          targetMatrix = matrix(target, true);
        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) &&
          // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }

        // if fromRect != toRect: animate
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
          scaleX = elMatrix && elMatrix.a,
          scaleY = elMatrix && elMatrix.d,
          translateX = (currentRect.left - toRect.left) / (scaleX || 1),
          translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }
    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function () {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return;
      // Fire global events if it exists in this sortable
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      }

      // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;

      // Add default options from plugin
      _extends(defaults, initialized.defaults);
    });
    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);
      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return;

      // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
    rootEl = _ref.rootEl,
    name = _ref.name,
    targetEl = _ref.targetEl,
    cloneEl = _ref.cloneEl,
    toEl = _ref.toEl,
    fromEl = _ref.fromEl,
    oldIndex = _ref.oldIndex,
    newIndex = _ref.newIndex,
    oldDraggableIndex = _ref.oldDraggableIndex,
    newDraggableIndex = _ref.newDraggableIndex,
    originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
    options = sortable.options,
    onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }
  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];
var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    originalEvent = _ref.evt,
    data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}
var dragEl,
  parentEl,
  ghostEl,
  rootEl,
  nextEl,
  lastDownEl,
  cloneEl,
  cloneHidden,
  oldIndex,
  newIndex,
  oldDraggableIndex,
  newDraggableIndex,
  activeGroup,
  putSortable,
  awaitingDragStarted = false,
  ignoreNextClick = false,
  sortables = [],
  tapEvt,
  touchEvt,
  lastDx,
  lastDy,
  tapDistanceLeft,
  tapDistanceTop,
  moved,
  lastTarget,
  lastDirection,
  pastFirstInvertThresh = false,
  isCircumstantialInvert = false,
  targetMoveDistance,
  // For positioning ghost absolutely
  ghostRelativeParent,
  ghostRelativeParentInitialScroll = [],
  // (left, top)

  _silent = false,
  savedInputChecked = [];

/** @const */
var documentExists = typeof document !== 'undefined',
  PositionGhostAbsolutely = IOS,
  CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
  // This will not pass for IE9, because IE9 DnD only works on anchors
  supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
  supportCssPointerEvents = function () {
    if (!documentExists) return;
    // false when <= IE11
    if (IE11OrLess) {
      return false;
    }
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
  }(),
  _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === 'flex') {
      return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    }
    if (elCSS.display === 'grid') {
      return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    }
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
      var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
      return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
  },
  _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
  },
  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function (sortable) {
      var threshold = sortable[expando].options.emptyInsertThreshold;
      if (!threshold || lastChild(sortable)) return;
      var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
      if (insideHorizontally && insideVertically) {
        return ret = sortable;
      }
    });
    return ret;
  },
  _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
      return function (to, from, dragEl, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
        if (value == null && (pull || sameGroup)) {
          // Default pull value
          // Default pull and put value if same group
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === 'clone') {
          return value;
        } else if (typeof value === 'function') {
          return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != 'object') {
      originalGroup = {
        name: originalGroup
      };
    }
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  },
  _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', 'none');
    }
  },
  _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', '');
    }
  };

// #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      // Create imitation event
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};

/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el; // root element
  this.options = options = _extends({}, options);

  // Export instance
  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && (!Safari || IOS),
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults);

  // Set default options
  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }
  _prepareGroup(options);

  // Bind all private methods
  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  }

  // Setup drag mode
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  }

  // Bind events
  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }
  sortables.push(this.el);

  // Restore sorting
  options.store && options.store.get && this.sort(options.store.get(this) || []);

  // Add animation state manager
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart( /** Event|TouchEvent */evt) {
    if (!evt.cancelable) return;
    var _this = this,
      el = this.el,
      options = this.options,
      preventOnFilter = options.preventOnFilter,
      type = evt.type,
      touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
      target = (touch || evt).target,
      originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
      filter = options.filter;
    _saveInputCheckedState(el);

    // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    }

    // cancel dnd if original target is content editable
    if (originalTarget.isContentEditable) {
      return;
    }

    // Safari ignores further event handling after mousedown
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    }

    // Get the index of the dragged element within its parent
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);

    // Check filter
    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.preventDefault();
        return; // cancel dnd
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }

    // Prepare `dragstart`
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart( /** Event */evt, /** Touch */touch, /** HTMLElement */target) {
    var _this = this,
      el = _this.el,
      options = _this.options,
      ownerDocument = el.ownerDocument,
      dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';
      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }

        // Bind the events: dragstart/dragend
        _this._triggerDragStart(evt, touch);

        // Drag start event
        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        });

        // Chosen item
        toggleClass(dragEl, options.chosenClass, true);
      };

      // Disable "draggable"
      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      if (options.supportPointer) {
        on(ownerDocument, 'pointerup', _this._onDrop);
        // Native D&D triggers pointercancel
        !this.nativeDraggable && on(ownerDocument, 'pointercancel', _this._onDrop);
      } else {
        on(ownerDocument, 'mouseup', _this._onDrop);
        on(ownerDocument, 'touchend', _this._onDrop);
        on(ownerDocument, 'touchcancel', _this._onDrop);
      }

      // Make dragEl draggable (must be before delay for FireFox)
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent('delayStart', this, {
        evt: evt
      });

      // Delay is impossible for native DnD in Edge or IE
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag
        if (options.supportPointer) {
          on(ownerDocument, 'pointerup', _this._disableDelayedDrag);
          on(ownerDocument, 'pointercancel', _this._disableDelayedDrag);
        } else {
          on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
          on(ownerDocument, 'touchend', _this._disableDelayedDrag);
          on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        }
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler( /** TouchEvent|PointerEvent **/e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'pointerup', this._disableDelayedDrag);
    off(ownerDocument, 'pointercancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart( /** Event */evt, /** Touch */touch) {
    touch = touch || evt.pointerType == 'touch' && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });
      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }
      var options = this.options;

      // Apply effect
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();

      // Drag start event
      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent; // store last element
        }
        /* jshint boss:true */ while (parent = getParentOrHost(parent));
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove( /**TouchEvent*/evt) {
    if (tapEvt) {
      var options = this.options,
        fallbackTolerance = options.fallbackTolerance,
        fallbackOffset = options.fallbackOffset,
        touch = evt.touches ? evt.touches[0] : evt,
        ghostMatrix = ghostEl && matrix(ghostEl, true),
        scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
        scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
        relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
        dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
        dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);

      // only set the status to dragging, when we are actually dragging
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
        rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
        options = this.options;

      // Position absolutely
      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);

      // Set transform-origin
      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart( /**Event*/evt, /**boolean*/fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent('setupClone', this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }

    // #1143: IFrame support workaround
    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);

    // Set proper drop events
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, 'drop', _this);

      // #1276 fix:
      css(dragEl, 'transform', 'translateZ(0)');
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;
    window.getSelection().removeAllRanges();
    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver( /**Event*/evt) {
    var el = this.el,
      target = evt.target,
      dragRect,
      targetRect,
      revert,
      options = this.options,
      group = options.group,
      activeSortable = Sortable.active,
      isOwner = activeGroup === group,
      canSort = options.sort,
      fromSortable = putSortable || activeSortable,
      vertical,
      _this = this,
      completedFired = false;
    if (_silent) return;
    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    }

    // Capture animation state
    function capture() {
      dragOverEvent('dragOverAnimationCapture');
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }

    // Return invocation when dragEl is inserted (or completed)
    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }

        // Animation
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }

      // Null lastTarget if it is not inside a previously swapped element
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }

      // no bubbling and not fallback
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);

        // Do not detect for empty insert if already inserted
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }

    // Call when dragEl has been inserted
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;
      if (revert) {
        parentEl = rootEl; // actualization
        capture();
        this._hideClone();
        dragOverEvent('revert');
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list

        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        }

        // if there is a last element, it is the target
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
          targetBeforeFirstSwap,
          differentLevel = dragEl.parentNode !== el,
          differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
          side1 = vertical ? 'top' : 'left',
          scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
          scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        }
        // If dragEl is already beside target: Do not insert
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
          after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }

          // Undo chrome's scroll adjustment (has no effect on other browsers)
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode; // actualization

          // must be done before animation
          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'pointercancel', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop( /**Event*/evt) {
    var el = this.el,
      options = this.options;

    // Get the index of the dragged element within its parent
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode;

    // Get again after plugin event
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);

    // Unbind events
    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, 'user-select', '');
    }
    css(dragEl, 'transform', '');
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }
        _disableDraggable(dragEl);
        dragEl.style['will-change'] = '';

        // Remove classes
        // ghostClass is added in dragStarted
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);

        // Drag stop event
        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            // Remove event
            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            });

            // drag from one list and drop into another
            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          });

          // Save sorting
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent( /**Event*/evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);
        break;
      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
      el,
      children = this.el.children,
      i = 0,
      n = children.length,
      options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
      rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];
      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);
    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    }
    // Remove draggable attributes
    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return;

      // show clone at dragEl or original position
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};
function _globalDragOver( /**Event*/evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
    sortable = fromEl[expando],
    onMoveFn = sortable.options.onMove,
    retVal;
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
    targetLength = vertical ? targetRect.height : targetRect.width,
    targetS1 = vertical ? targetRect.top : targetRect.left,
    targetS2 = vertical ? targetRect.bottom : targetRect.right,
    invert = false;
  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}

/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}

/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
    i = str.length,
    sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}

// Fixed #973:
if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}

// Export utils
Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild,
  expando: expando
};

/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */
Sortable.get = function (element) {
  return element[expando];
};

/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */
Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }
  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};

/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */
Sortable.create = function (el, options) {
  return new Sortable(el, options);
};

// Export
Sortable.version = version;

var autoScrolls = [],
  scrollEl,
  scrollRootEl,
  scrolling = false,
  lastAutoScrollX,
  lastAutoScrollY,
  touchEvt$1,
  pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };

    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX,
        y = (evt.touches ? evt.touches[0] : evt).clientY,
        elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;

      // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);

        // Listener for pointer element change
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          // Detect for pointer elem change, emulating native DnD behaviour
          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
    y = (evt.touches ? evt.touches[0] : evt).clientY,
    sens = options.scrollSensitivity,
    speed = options.scrollSpeed,
    winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
    scrollCustomFn;

  // New scroll root, set scrollEl
  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent,
      rect = getRect(el),
      top = rect.top,
      bottom = rect.bottom,
      left = rect.left,
      right = rect.right,
      width = rect.width,
      height = rect.height,
      canScrollX = void 0,
      canScrollY = void 0,
      scrollWidth = el.scrollWidth,
      scrollHeight = el.scrollHeight,
      elCSS = css(el),
      scrollPosX = el.scrollLeft,
      scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */
        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    dragEl = _ref.dragEl,
    activeSortable = _ref.activeSortable,
    dispatchSortableEvent = _ref.dispatchSortableEvent,
    hideGhostForTarget = _ref.hideGhostForTarget,
    unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};
function Revert() {}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
      putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable) {
      putSortable.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }
    this.sortable.animateAll();
    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};
_extends(Revert, {
  pluginName: 'revertOnSpill'
});
function Remove() {}
Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
      putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};
_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;
function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }
  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
        target = _ref2.target,
        onMove = _ref2.onMove,
        activeSortable = _ref2.activeSortable,
        changed = _ref2.changed,
        cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
        options = this.options;
      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;
        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }
        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }
      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
        putSortable = _ref3.putSortable,
        dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}
function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
    p2 = n2.parentNode,
    i1,
    i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);
  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }
  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
  multiDragClones = [],
  lastMultiDragSelect,
  // for selection with modifier key down (SHIFT)
  multiDragSortable,
  initialFolding = false,
  // Initial multi-drag fold when drag started
  folding = false,
  // Folding any other time
  dragStarted = false,
  dragEl$1,
  clonesFromRect,
  clonesHidden;
function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
    if (!sortable.options.avoidImplicitDeselect) {
      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }
    }
    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      avoidImplicitDeselect: false,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';
        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }
        dataTransfer.setData('Text', data);
      }
    };
  }
  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
        cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;
      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }
      sortable._hideClone();
      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
        rootEl = _ref3.rootEl,
        dispatchSortableEvent = _ref3.dispatchSortableEvent,
        cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;
      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
        rootEl = _ref4.rootEl,
        cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;
      var sortable = _ref5.sortable,
        cloneNowHidden = _ref5.cloneNowHidden,
        cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');
        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;
      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      });

      // Sort multi-drag elements
      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;
      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;
      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM

        sortable.captureAnimationState();
        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }
      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;
        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        }

        // Remove all auxiliary multidrag items from el, if sorting enabled
        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
        completed = _ref8.completed,
        cancel = _ref8.cancel;
      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
        rootEl = _ref9.rootEl,
        sortable = _ref9.sortable,
        dragRect = _ref9.dragRect;
      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
        isOwner = _ref10.isOwner,
        insertion = _ref10.insertion,
        activeSortable = _ref10.activeSortable,
        parentEl = _ref10.parentEl,
        putSortable = _ref10.putSortable;
      var options = this.options;
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }
        initialFolding = false;
        // If leaving sort:false root, or already folding - Fold to new location
        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute);

            // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        }

        // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }
          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;
            activeSortable._showClone(sortable);

            // Unfold animation for clones if showing from hidden
            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
        isOwner = _ref11.isOwner,
        activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });
      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
        rootEl = _ref12.rootEl,
        parentEl = _ref12.parentEl,
        sortable = _ref12.sortable,
        dispatchSortableEvent = _ref12.dispatchSortableEvent,
        oldIndex = _ref12.oldIndex,
        putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
        children = parentEl.children;

      // Multi-drag selection
      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }
        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvent: evt
          });

          // Modifier activated, select from last to dragEl
          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
              currentIndex = index(dragEl$1);
            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              (function () {
                // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                // (but previous selection existed)
                var n, i;
                if (currentIndex > lastIndex) {
                  i = lastIndex;
                  n = currentIndex;
                } else {
                  i = currentIndex;
                  n = lastIndex + 1;
                }
                var filter = options.filter;
                for (; i < n; i++) {
                  if (~multiDragElements.indexOf(children[i])) continue;
                  // Check if element is draggable
                  if (!closest(children[i], options.draggable, parentEl, false)) continue;
                  // Check if element is filtered
                  var filtered = filter && (typeof filter === 'function' ? filter.call(sortable, evt, children[i], sortable) : filter.split(',').some(function (criteria) {
                    return closest(children[i], criteria.trim(), parentEl, false);
                  }));
                  if (filtered) continue;
                  toggleClass(children[i], options.selectedClass, true);
                  multiDragElements.push(children[i]);
                  dispatchEvent({
                    sortable: sortable,
                    rootEl: rootEl,
                    name: 'select',
                    targetEl: children[i],
                    originalEvent: evt
                  });
                }
              })();
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }
          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvent: evt
          });
        }
      }

      // Multi-drag drop
      if (dragStarted && this.isMultiDrag) {
        folding = false;
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
            multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();
          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect;

                  // Prepare unfold animation
                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            }

            // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed
            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }
              multiDragIndex++;
            });

            // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.
            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });
              if (update) {
                dispatchSortableEvent('update');
                dispatchSortableEvent('sort');
              }
            }
          }

          // Must be done after capturing individual rects (scroll bar)
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }
        multiDragSortable = toSortable;
      }

      // Remove clones if necessary
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();
      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return;

      // Only deselect if selection is in this sortable
      if (multiDragSortable !== this.sortable) return;

      // Only deselect if target is not item in this sortable
      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return;

      // Only deselect if left click
      if (evt && evt.button !== 0) return;
      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvent: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
          multiDragSortable = sortable;
        }
        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
          index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;
      var oldIndicies = [],
        newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        });

        // multiDragElements will already be sorted if folding
        var newIndex;
        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }
        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();
        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }
        return key;
      }
    }
  });
}
function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}

/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */
function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}
function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ }),

/***/ "../../../../../script.js":
/*!*******************************************!*\
  !*** external "../../../../../script.js" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__script_js_588e7203__;

/***/ }),

/***/ "../../../../authors-note.js":
/*!**********************************************!*\
  !*** external "../../../../authors-note.js" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__authors_note_js_59167e8d__;

/***/ }),

/***/ "../../../../chats.js":
/*!***************************************!*\
  !*** external "../../../../chats.js" ***!
  \***************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__chats_js_c244506c__;

/***/ }),

/***/ "../../../../group-chats.js":
/*!*********************************************!*\
  !*** external "../../../../group-chats.js" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__group_chats_js_678c16bd__;

/***/ }),

/***/ "../../../../instruct-mode.js":
/*!***********************************************!*\
  !*** external "../../../../instruct-mode.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__instruct_mode_js_e7f3531a__;

/***/ }),

/***/ "../../../../openai.js":
/*!****************************************!*\
  !*** external "../../../../openai.js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__openai_js_bf183548__;

/***/ }),

/***/ "../../../../power-user.js":
/*!********************************************!*\
  !*** external "../../../../power-user.js" ***!
  \********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__power_user_js_3c7cfb8b__;

/***/ }),

/***/ "../../../../slash-commands/SlashCommandCommonEnumsProvider.js":
/*!********************************************************************************!*\
  !*** external "../../../../slash-commands/SlashCommandCommonEnumsProvider.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandCommonEnumsProvider_js_4453b111__;

/***/ }),

/***/ "../../../../slash-commands/SlashCommandEnumValue.js":
/*!**********************************************************************!*\
  !*** external "../../../../slash-commands/SlashCommandEnumValue.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandEnumValue_js_20f1c506__;

/***/ }),

/***/ "../../../../utils.js":
/*!***************************************!*\
  !*** external "../../../../utils.js" ***!
  \***************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__utils_js_d605cabe__;

/***/ }),

/***/ "../../../../world-info.js":
/*!********************************************!*\
  !*** external "../../../../world-info.js" ***!
  \********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__world_info_js_83198f57__;

/***/ }),

/***/ "../../../regex/engine.js":
/*!*******************************************!*\
  !*** external "../../../regex/engine.js" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__regex_engine_js_683beba0__;

/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.mjs":
/*!********************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Fuse)
/* harmony export */ });
/**
 * Fuse.js v7.1.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2025 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }

  return { path, id, weight, src, getFn }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(weight = 1, mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      // Default function is 1/sqrt(x), weight makes that variable
      const norm = 1 / Math.pow(numTokens, 0.5 * weight);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(
  keys,
  docs,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(
  data,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore$1(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

const stripDiacritics = String.prototype.normalize
    ? ((str) => str.normalize('NFD').replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, ''))
    : ((str) => str);

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    };

    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, ignoreDiacritics, includeMatches } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive, ignoreDiacritics } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) {}

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return []
        }
      }
      return res
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '7.1.0';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}




/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/character-utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/character-utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomError: () => (/* binding */ CustomError),
/* harmony export */   createCharacter: () => (/* binding */ createCharacter),
/* harmony export */   saveCharacter: () => (/* binding */ saveCharacter)
/* harmony export */ });
class CustomError extends Error {
    data;
    constructor(message, data) {
        super(message);
        this.data = data;
    }
    toString() {
        return this.message;
    }
}
/**
 * @throws {CustomError<Response>}
 */
async function createCharacter(data, updateUI) {
    const context = SillyTavern.getContext();
    const formData = new FormData();
    formData.append('avatar', new Blob([JSON.stringify(data)], { type: 'application/json' }), 'character.json');
    formData.append('file_type', 'json');
    const headers = context.getRequestHeaders();
    // @ts-ignore
    delete headers['Content-Type'];
    const response = await fetch('/api/characters/import', {
        method: 'POST',
        headers,
        body: formData,
        cache: 'no-cache',
    });
    if (!response.ok) {
        throw new CustomError(response.statusText, response);
    }
    if (updateUI) {
        await context.getCharacters();
    }
}
/**
 * @throws {CustomError<Response>}
 */
async function saveCharacter(data, updateUI) {
    const context = SillyTavern.getContext();
    const formData = new FormData();
    formData.append('ch_name', data.name);
    formData.append('avatar_url', data.avatar ?? '');
    formData.append('description', data.description ?? '');
    formData.append('first_mes', data.first_mes ?? '');
    formData.append('scenario', data.scenario ?? '');
    formData.append('personality', data.personality ?? '');
    formData.append('mes_example', data.mes_example ?? '');
    formData.append('creatorcomment', data.creatorcomment ?? '');
    formData.append('tags', (data.tags ?? []).join(','));
    const avatarUrl = context.getThumbnailUrl('avatar', data.avatar);
    const avatarBlob = await fetch(avatarUrl).then((res) => res.blob());
    const avatarFile = new File([avatarBlob], 'avatar.png', { type: 'image/png' });
    formData.append('avatar', avatarFile);
    const charInnerData = data.data || {};
    formData.append('creator', charInnerData.creator ?? '');
    formData.append('character_version', charInnerData.character_version ?? '');
    formData.append('creator_notes', charInnerData.creator_notes ?? '');
    formData.append('system_prompt', charInnerData.system_prompt ?? '');
    formData.append('post_history_instructions', charInnerData.post_history_instructions ?? '');
    const extensions = charInnerData.extensions || {};
    formData.append('chat', data.chat ?? '');
    formData.append('create_date', data.create_date ?? '');
    formData.append('last_mes', data.last_mes ?? '');
    formData.append('talkativeness', extensions.talkativeness ?? '');
    formData.append('fav', String(extensions.fav ?? false));
    formData.append('world', extensions.world ?? '');
    const depthPrompt = extensions.depth_prompt || {};
    formData.append('depth_prompt_prompt', depthPrompt.prompt ?? '');
    formData.append('depth_prompt_depth', String(depthPrompt.depth ?? 0));
    formData.append('depth_prompt_role', depthPrompt.role ?? '');
    if (Array.isArray(charInnerData.alternate_greetings)) {
        for (const value of charInnerData.alternate_greetings) {
            formData.append('alternate_greetings', value);
        }
    }
    formData.append('json_data', JSON.stringify(data));
    const headers = context.getRequestHeaders();
    // @ts-ignore
    delete headers['Content-Type'];
    const response = await fetch('/api/characters/edit', {
        method: 'POST',
        headers,
        body: formData,
        cache: 'no-cache',
    });
    if (!response.ok) {
        throw new CustomError(response.statusText, response);
    }
    if (updateUI) {
        await context.getCharacters();
    }
}
//# sourceMappingURL=character-utils.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/config.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlashCommandEnumValue: () => (/* reexport safe */ _slash_commands_SlashCommandEnumValue_js__WEBPACK_IMPORTED_MODULE_11__.SlashCommandEnumValue),
/* harmony export */   WI_METADATA_KEY: () => (/* reexport safe */ _world_info_js__WEBPACK_IMPORTED_MODULE_2__.METADATA_KEY),
/* harmony export */   characters: () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.characters),
/* harmony export */   commonEnumProviders: () => (/* reexport safe */ _slash_commands_SlashCommandCommonEnumsProvider_js__WEBPACK_IMPORTED_MODULE_10__.commonEnumProviders),
/* harmony export */   depth_prompt_depth_default: () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.depth_prompt_depth_default),
/* harmony export */   depth_prompt_role_default: () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.depth_prompt_role_default),
/* harmony export */   enumIcons: () => (/* reexport safe */ _slash_commands_SlashCommandCommonEnumsProvider_js__WEBPACK_IMPORTED_MODULE_10__.enumIcons),
/* harmony export */   enumTypes: () => (/* reexport safe */ _slash_commands_SlashCommandEnumValue_js__WEBPACK_IMPORTED_MODULE_11__.enumTypes),
/* harmony export */   extension_prompt_types: () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.extension_prompt_types),
/* harmony export */   groups: () => (/* reexport safe */ _group_chats_js__WEBPACK_IMPORTED_MODULE_7__.groups),
/* harmony export */   is_group_generating: () => (/* reexport safe */ _group_chats_js__WEBPACK_IMPORTED_MODULE_7__.is_group_generating),
/* harmony export */   main_api: () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.main_api),
/* harmony export */   name1: () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.name1),
/* harmony export */   name2: () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.name2),
/* harmony export */   persona_description_positions: () => (/* reexport safe */ _power_user_js__WEBPACK_IMPORTED_MODULE_0__.persona_description_positions),
/* harmony export */   regex_placement: () => (/* reexport safe */ _regex_engine_js__WEBPACK_IMPORTED_MODULE_8__.regex_placement),
/* harmony export */   selected_group: () => (/* reexport safe */ _group_chats_js__WEBPACK_IMPORTED_MODULE_7__.selected_group),
/* harmony export */   selected_world_info: () => (/* reexport safe */ _world_info_js__WEBPACK_IMPORTED_MODULE_2__.selected_world_info),
/* harmony export */   st_appendFileContent: () => (/* binding */ st_appendFileContent),
/* harmony export */   st_baseChatReplace: () => (/* binding */ st_baseChatReplace),
/* harmony export */   st_createWorldInfoEntry: () => (/* binding */ st_createWorldInfoEntry),
/* harmony export */   st_echo: () => (/* binding */ st_echo),
/* harmony export */   st_formatInstructModeExamples: () => (/* binding */ st_formatInstructModeExamples),
/* harmony export */   st_formatInstructModeSystemPrompt: () => (/* binding */ st_formatInstructModeSystemPrompt),
/* harmony export */   st_formatWorldInfo: () => (/* binding */ st_formatWorldInfo),
/* harmony export */   st_getAuthorNote: () => (/* binding */ st_getAuthorNote),
/* harmony export */   st_getCharaFilename: () => (/* binding */ st_getCharaFilename),
/* harmony export */   st_getGroupDepthPrompts: () => (/* binding */ st_getGroupDepthPrompts),
/* harmony export */   st_getMaxContextSize: () => (/* binding */ st_getMaxContextSize),
/* harmony export */   st_getPromptPosition: () => (/* binding */ st_getPromptPosition),
/* harmony export */   st_getPromptRole: () => (/* binding */ st_getPromptRole),
/* harmony export */   st_getRegexedString: () => (/* binding */ st_getRegexedString),
/* harmony export */   st_parseMesExamples: () => (/* binding */ st_parseMesExamples),
/* harmony export */   st_prepareOpenAIMessages: () => (/* binding */ st_prepareOpenAIMessages),
/* harmony export */   st_renderStoryString: () => (/* binding */ st_renderStoryString),
/* harmony export */   st_runCommandCallback: () => (/* binding */ st_runCommandCallback),
/* harmony export */   st_runRegexScript: () => (/* binding */ st_runRegexScript),
/* harmony export */   st_setOpenAIMessageExamples: () => (/* binding */ st_setOpenAIMessageExamples),
/* harmony export */   st_setOpenAIMessages: () => (/* binding */ st_setOpenAIMessages),
/* harmony export */   systemUserName: () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.systemUserName),
/* harmony export */   system_avatar: () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.system_avatar),
/* harmony export */   this_chid: () => (/* reexport safe */ _script_js__WEBPACK_IMPORTED_MODULE_1__.this_chid),
/* harmony export */   wi_anchor_position: () => (/* reexport safe */ _world_info_js__WEBPACK_IMPORTED_MODULE_2__.wi_anchor_position),
/* harmony export */   world_info: () => (/* reexport safe */ _world_info_js__WEBPACK_IMPORTED_MODULE_2__.world_info),
/* harmony export */   world_info_include_names: () => (/* reexport safe */ _world_info_js__WEBPACK_IMPORTED_MODULE_2__.world_info_include_names),
/* harmony export */   world_names: () => (/* reexport safe */ _world_info_js__WEBPACK_IMPORTED_MODULE_2__.world_names)
/* harmony export */ });
/* harmony import */ var _power_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../power-user.js */ "../../../../power-user.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../script.js */ "../../../../../script.js");
/* harmony import */ var _world_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../world-info.js */ "../../../../world-info.js");
/* harmony import */ var _instruct_mode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../instruct-mode.js */ "../../../../instruct-mode.js");
/* harmony import */ var _chats_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chats.js */ "../../../../chats.js");
/* harmony import */ var _openai_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../openai.js */ "../../../../openai.js");
/* harmony import */ var _authors_note_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../authors-note.js */ "../../../../authors-note.js");
/* harmony import */ var _group_chats_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../group-chats.js */ "../../../../group-chats.js");
/* harmony import */ var _regex_engine_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../regex/engine.js */ "../../../regex/engine.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils.js */ "../../../../utils.js");
/* harmony import */ var _slash_commands_SlashCommandCommonEnumsProvider_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../slash-commands/SlashCommandCommonEnumsProvider.js */ "../../../../slash-commands/SlashCommandCommonEnumsProvider.js");
/* harmony import */ var _slash_commands_SlashCommandEnumValue_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../slash-commands/SlashCommandEnumValue.js */ "../../../../slash-commands/SlashCommandEnumValue.js");
// @ts-ignore



// @ts-ignore

// @ts-ignore


// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

async function st_runCommandCallback(command, ...args) {
    // @ts-ignore
    await SillyTavern.getContext().SlashCommandParser.commands[command].callback(...args);
}
/**
 * Sends an echo message using the SlashCommandParser's echo command.
 */
async function st_echo(severity, message, { escapeHtml = true } = {}) {
    await st_runCommandCallback('echo', { severity: severity, escapeHtml: Boolean(escapeHtml).toString() }, message);
}
function st_getMaxContextSize(overrideResponseLength) {
    return (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.getMaxContextSize)(overrideResponseLength);
}
function st_parseMesExamples(examplesStr, isInstruct) {
    return (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.parseMesExamples)(examplesStr, isInstruct);
}
function st_baseChatReplace(value, name1, name2) {
    return (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.baseChatReplace)(value, name1, name2);
}
function st_formatInstructModeExamples(mesExamplesArray, name1, name2) {
    return (0,_instruct_mode_js__WEBPACK_IMPORTED_MODULE_3__.formatInstructModeExamples)(mesExamplesArray, name1, name2);
}
function st_formatInstructModeSystemPrompt(systemPrompt, customInstruct) {
    return (0,_instruct_mode_js__WEBPACK_IMPORTED_MODULE_3__.formatInstructModeSystemPrompt)(systemPrompt, customInstruct);
}
function st_renderStoryString(params, { customStoryString, customInstructSettings, } = {}) {
    return (0,_power_user_js__WEBPACK_IMPORTED_MODULE_0__.renderStoryString)(params, { customStoryString, customInstructSettings });
}
function st_getPromptRole(role) {
    return (0,_openai_js__WEBPACK_IMPORTED_MODULE_5__.getPromptRole)(role);
}
function st_getAuthorNote() {
    return {
        prompt: _script_js__WEBPACK_IMPORTED_MODULE_1__.chat_metadata[_authors_note_js__WEBPACK_IMPORTED_MODULE_6__.metadata_keys.prompt],
        interval: _script_js__WEBPACK_IMPORTED_MODULE_1__.chat_metadata[_authors_note_js__WEBPACK_IMPORTED_MODULE_6__.metadata_keys.interval],
        position: _script_js__WEBPACK_IMPORTED_MODULE_1__.chat_metadata[_authors_note_js__WEBPACK_IMPORTED_MODULE_6__.metadata_keys.position],
        depth: _script_js__WEBPACK_IMPORTED_MODULE_1__.chat_metadata[_authors_note_js__WEBPACK_IMPORTED_MODULE_6__.metadata_keys.depth],
        role: _script_js__WEBPACK_IMPORTED_MODULE_1__.chat_metadata[_authors_note_js__WEBPACK_IMPORTED_MODULE_6__.metadata_keys.role],
    };
}
function st_getGroupDepthPrompts(groupId, characterId) {
    return (0,_group_chats_js__WEBPACK_IMPORTED_MODULE_7__.getGroupDepthPrompts)(groupId, characterId);
}
function st_prepareOpenAIMessages({ name2, charDescription, charPersonality, Scenario, worldInfoBefore, worldInfoAfter, bias, type, quietPrompt, quietImage, extensionPrompts, cyclePrompt, systemPromptOverride, jailbreakPromptOverride, personaDescription, messages, messageExamples, }, dryRun) {
    return (0,_openai_js__WEBPACK_IMPORTED_MODULE_5__.prepareOpenAIMessages)({
        name2,
        charDescription,
        charPersonality,
        Scenario,
        worldInfoBefore,
        worldInfoAfter,
        bias,
        type,
        quietPrompt,
        quietImage,
        cyclePrompt,
        systemPromptOverride,
        jailbreakPromptOverride,
        personaDescription,
        extensionPrompts,
        messages,
        messageExamples,
    }, dryRun);
}
function st_setOpenAIMessages(chat) {
    return (0,_openai_js__WEBPACK_IMPORTED_MODULE_5__.setOpenAIMessages)(chat);
}
function st_setOpenAIMessageExamples(mesExamplesArray) {
    return (0,_openai_js__WEBPACK_IMPORTED_MODULE_5__.setOpenAIMessageExamples)(mesExamplesArray);
}
function st_getRegexedString(rawString, placement, { characterOverride, isMarkdown, isPrompt, isEdit, depth, }) {
    return (0,_regex_engine_js__WEBPACK_IMPORTED_MODULE_8__.getRegexedString)(rawString, placement, { characterOverride, isMarkdown, isPrompt, isEdit, depth });
}
function st_runRegexScript(regexScript, rawString, { characterOverride = null } = {}) {
    return (0,_regex_engine_js__WEBPACK_IMPORTED_MODULE_8__.runRegexScript)(regexScript, rawString, { characterOverride });
}
async function st_appendFileContent(message, messageText) {
    return await (0,_chats_js__WEBPACK_IMPORTED_MODULE_4__.appendFileContent)(message, messageText);
}
function st_formatWorldInfo(value, { wiFormat, } = {}) {
    return (0,_openai_js__WEBPACK_IMPORTED_MODULE_5__.formatWorldInfo)(value, { wiFormat });
}
function st_getPromptPosition(position) {
    return (0,_openai_js__WEBPACK_IMPORTED_MODULE_5__.getPromptPosition)(position);
}
function st_getCharaFilename(chid, { manualAvatarKey, } = {}) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.getCharaFilename)(chid, { manualAvatarKey });
}
function st_createWorldInfoEntry(_name, data) {
    return (0,_world_info_js__WEBPACK_IMPORTED_MODULE_2__.createWorldInfoEntry)(_name, data);
}

//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/extension-settings-manager.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/extension-settings-manager.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionSettingsManager: () => (/* binding */ ExtensionSettingsManager)
/* harmony export */ });
class ExtensionSettingsManager {
    settingsKey;
    defaultSettings;
    constructor(key, defaultSettings) {
        this.settingsKey = key;
        this.defaultSettings = defaultSettings;
    }
    /**
     * If defaultSettings has "version" and "formatVersion" properties, they will be used to track version and format version changes.
     *
     * For example, if you want to show a notification when a new version is released, you can check "result.version.changed".
     *
     * @param [options={}]
     * @param [options.strategy='recursive'] - 'recursive' will migrate old settings with the default settings.
     *
     * For complex settings, you can specify a custom migration strategy. For example, if you change the field name from "old" to "new", you can use:
     * @example
     * [
     *   {
     *     from: 'FORMAT-0.1.0',
     *     to: 'FORMAT-0.1.1',
     *     action: (previous) => {
     *       const data = {
     *         ...previous,
     *         new: previous.old,
     *       };
     *       delete data.old;
     *       return data;
     *     },
     *   },
     * ]
     */
    async initializeSettings(options = {}) {
        const { strategy = 'recursive' } = options;
        const version = this.defaultSettings.version;
        const formatVersion = this.defaultSettings.formatVersion;
        const settings = SillyTavern.getContext().extensionSettings[this.settingsKey];
        const defaultResult = {
            version: {
                changed: false,
                new: version ?? '',
            },
            formatVersion: {
                changed: false,
                new: formatVersion ?? '',
            },
            oldSettings: null,
            newSettings: this.defaultSettings,
        };
        if (!settings) {
            SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings;
            this.saveSettings();
            return defaultResult;
        }
        const result = {
            ...defaultResult,
            oldSettings: structuredClone(settings),
            version: {
                changed: false,
                old: settings.version,
                new: settings.version,
            },
            formatVersion: {
                changed: false,
                old: settings.formatVersion,
                new: settings.formatVersion,
            },
        };
        if (strategy === 'recursive') {
            if (version && settings.version !== version) {
                result.version.changed = true;
                result.version.new = version;
                settings.version = version;
            }
            if (formatVersion && formatVersion !== '*' && settings.formatVersion !== formatVersion) {
                result.formatVersion.changed = true;
                result.formatVersion.new = formatVersion;
                settings.formatVersion = formatVersion;
            }
            function initializeRecursively(target, defaults) {
                let anyChange = false;
                // Initialize undefined values from defaults and handle nested objects
                for (const key of Object.keys(defaults)) {
                    if (target[key] === undefined) {
                        target[key] = defaults[key];
                        anyChange = true;
                    }
                    else if (typeof defaults[key] === 'object' && defaults[key] !== null) {
                        target[key] = target[key] || {};
                        if (initializeRecursively(target[key], defaults[key])) {
                            anyChange = true;
                        }
                    }
                }
                return anyChange;
            }
            if (initializeRecursively(settings, this.defaultSettings) ||
                result.version.changed ||
                result.formatVersion.changed) {
                this.saveSettings();
            }
        }
        else if (Array.isArray(strategy)) {
            if (version && !settings.version) {
                settings.version = version;
                result.version.changed = true;
                result.version.new = version;
            }
            if (formatVersion && !settings.formatVersion) {
                settings.formatVersion = formatVersion;
                result.formatVersion.changed = true;
                result.formatVersion.new = formatVersion;
            }
            let currentSettings = structuredClone(settings);
            let currentFormatVersion = settings.formatVersion;
            try {
                let upgraded;
                do {
                    upgraded = false;
                    // First try to find an exact version match
                    let exactMatch = strategy.find((change) => change.from === currentFormatVersion);
                    if (exactMatch && exactMatch.to > currentFormatVersion) {
                        currentSettings = await exactMatch.action(currentSettings);
                        currentFormatVersion = exactMatch.to;
                        // @ts-ignore
                        currentSettings.formatVersion = exactMatch.to;
                        upgraded = true;
                    }
                    else {
                        // If no exact match found, try wildcard
                        for (const change of strategy) {
                            if (change.from === '*' && change.to > currentFormatVersion && currentFormatVersion !== change.to) {
                                currentSettings = await change.action(currentSettings);
                                currentFormatVersion = change.to;
                                // @ts-ignore
                                currentSettings.formatVersion = change.to;
                                upgraded = true;
                                break; // Only take the first wildcard match per iteration
                            }
                        }
                    }
                } while (upgraded); // Continue upgrading while changes are being made
                // Only mark as changed if any upgrades occurred
                if (currentFormatVersion !== settings.formatVersion) {
                    result.formatVersion.changed = true;
                    result.formatVersion.new = currentFormatVersion;
                    const defaultVersion = this.defaultSettings.version;
                    if (defaultVersion) {
                        // @ts-ignore
                        currentSettings.version = defaultVersion;
                    }
                }
                if (result.formatVersion.changed) {
                    for (const key of Object.keys(settings)) {
                        delete settings[key];
                    }
                    Object.assign(settings, currentSettings);
                    this.saveSettings();
                }
            }
            catch (error) {
                console.error(`Failed to apply version changes:`, error);
                throw new Error(`Version migration failed: ${error instanceof Error ? error.message : error}`, {
                    cause: error,
                });
            }
        }
        result.newSettings = settings;
        return result;
    }
    getSettings() {
        return SillyTavern.getContext().extensionSettings[this.settingsKey];
    }
    updateSetting(key, value) {
        SillyTavern.getContext().extensionSettings[this.settingsKey][key] = value;
        this.saveSettings();
    }
    saveSettings() {
        SillyTavern.getContext().saveSettingsDebounced();
    }
    resetSettings() {
        SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings;
        this.saveSettings();
    }
}
//# sourceMappingURL=extension-settings-manager.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/fancy-dropdown.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/fancy-dropdown.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFancyDropdown: () => (/* binding */ buildFancyDropdown)
/* harmony export */ });
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.mjs");

/**
 * Builds a collapsing dropdown menu that allows multiple selections with checkmarks and optional fuzzy search.
 */
function buildFancyDropdown(selector, options = {}) {
    const container = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!container) {
        throw new Error(`Could not find container: ${selector}`);
    }
    // --- Options & Defaults ---
    const placeholder = options.placeholderText || 'Select items...';
    const closeOnSelect = options.closeOnSelect ?? false;
    const enableSearch = options.enableSearch ?? false;
    const multiple = options.multiple ?? true;
    const searchPlaceholder = options.searchPlaceholderText || 'Search...';
    const searchNoResults = options.searchNoResultsText || 'No results found';
    const searchDebounceMs = options.searchDebounceMs ?? 200;
    let internalInitialList = [...(options.initialList || [])]; // Modifiable internal copy
    // Clear container and apply base styles
    container.innerHTML = ''; // Clear existing content
    container.classList.add('fancy-dropdown-container');
    Object.assign(container.style, {
        position: 'relative',
        userSelect: 'none', // Note: 'user-select' becomes 'userSelect'
    });
    // --- Create Dropdown Trigger ---
    const dropdownTrigger = document.createElement('div');
    dropdownTrigger.className = 'fancy-dropdown-trigger';
    Object.assign(dropdownTrigger.style, {
        padding: '8px 12px',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    });
    const triggerText = document.createElement('span');
    triggerText.className = 'fancy-dropdown-trigger-text';
    triggerText.textContent = placeholder;
    const triggerIcon = document.createElement('i');
    triggerIcon.className = 'fas fa-chevron-down'; // Assuming FontAwesome 5/6 setup
    triggerIcon.style.marginLeft = '8px';
    dropdownTrigger.append(triggerText, triggerIcon);
    container.append(dropdownTrigger);
    // --- Create Dropdown List (Options Panel) ---
    const dropdownList = document.createElement('div');
    dropdownList.className = 'fancy-dropdown-list';
    Object.assign(dropdownList.style, {
        position: 'absolute',
        top: '100%',
        left: '0',
        right: '0',
        maxHeight: '300px',
        display: 'none', // Hidden by default
        zIndex: '1050',
        border: '1px solid var(--border-color)',
        borderTop: 'none',
        backgroundColor: 'var(--bg-color-popup, var(--bg-color-secondary, var(--greyCAIbg, var(--grey30))))',
        color: 'var(--text-color)',
        borderRadius: '0 0 4px 4px',
        boxShadow: '0 4px 8px var(--black50a)',
        overflowY: 'auto',
    });
    container.append(dropdownList);
    // --- Create Search Input (if enabled) ---
    let searchInput = null;
    let searchContainer = null;
    let noResultsMessage = null;
    let searchDebounceTimeout = null;
    if (enableSearch) {
        searchContainer = document.createElement('div');
        searchContainer.className = 'fancy-dropdown-search-wrapper';
        Object.assign(searchContainer.style, {
            padding: '8px',
            borderBottom: '1px solid var(--border-color)', // Separator
            position: 'sticky', // Keep search bar visible while scrolling options
            top: '0', // Stick to the top of the list container
            backgroundColor: 'inherit', // Inherit background from list
        });
        searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.className = 'fancy-dropdown-search-input';
        searchInput.placeholder = searchPlaceholder;
        Object.assign(searchInput.style, {
            width: '100%',
            padding: '6px 10px',
            border: '1px solid var(--border-color)',
            borderRadius: '3px',
            boxSizing: 'border-box', // Include padding/border in width
            backgroundColor: 'var(--bg-color)', // Use main bg for input
            color: 'var(--text-color)',
        });
        // Prevent closing dropdown when clicking inside search input
        searchInput.addEventListener('click', (e) => e.stopPropagation());
        searchContainer.append(searchInput);
        dropdownList.append(searchContainer); // Add search bar to the top of the list
        // Message for no results
        noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'fancy-dropdown-no-results';
        noResultsMessage.textContent = searchNoResults;
        Object.assign(noResultsMessage.style, {
            padding: '8px 12px',
            textAlign: 'center',
            color: 'var(--text-color-secondary, var(--grey50))', // Dimmer text color
            display: 'none', // Hidden initially
        });
        dropdownList.append(noResultsMessage);
    }
    // --- State and Helper Functions ---
    let isOpen = false;
    let fuse = null;
    // Helper to get the display label for an item
    const getItemLabel = (item) => (typeof item === 'string' ? item : item.label);
    // Helper to get the value for an item
    const getItemValue = (item) => (typeof item === 'string' ? item : item.value);
    // Filter initial values to only include those that exist in the list
    let selectedValues = (options.initialValues || []).filter((v) => internalInitialList.some((item) => getItemValue(item) === v));
    // Helper to create the Fuse.js index
    const initializeFuse = () => {
        if (!enableSearch)
            return;
        const fuseOptions = {
            // Default Fuse.js options - allow overriding
            includeScore: false,
            threshold: 0.4,
            isCaseSensitive: false,
            findAllMatches: true,
            ...(options.searchFuseOptions || {}),
            // Ensure keys handle both string and object types if not overridden
            keys: options.searchFuseOptions?.keys || [
                { name: 'label', weight: 0.7 },
                { name: 'value', weight: 0.3 },
            ],
        };
        const listForFuse = internalInitialList.map((item) => typeof item === 'string' ? { value: item, label: item } : item);
        if (!options.searchFuseOptions?.keys && internalInitialList.every((item) => typeof item === 'string')) {
            fuseOptions.keys = ['label'];
        }
        // Type assertion needed as Fuse constructor expects a consistent type,
        // but our transformation makes it technically mixed.
        fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_0__["default"](listForFuse, fuseOptions);
    };
    const updateTriggerText = () => {
        if (selectedValues.length === 0) {
            triggerText.textContent = placeholder;
        }
        else if (selectedValues.length === 1) {
            const selectedValue = selectedValues[0];
            const selectedItem = internalInitialList.find((item) => getItemValue(item) === selectedValue);
            const displayText = selectedItem ? getItemLabel(selectedItem) : selectedValue;
            triggerText.textContent = displayText;
        }
        else {
            triggerText.textContent = `${selectedValues.length} items selected`;
        }
    };
    const updateUI = (filteredValues) => {
        let hasVisibleItems = false;
        const items = dropdownList.querySelectorAll('.fancy-dropdown-item');
        items.forEach((itemElement) => {
            const value = itemElement.dataset.value;
            const isSelected = selectedValues.includes(value);
            const checkmark = itemElement.querySelector('.checkmark');
            // Update selection state
            if (isSelected) {
                itemElement.classList.add('selected');
                if (checkmark)
                    checkmark.style.display = 'inline-block';
            }
            else {
                itemElement.classList.remove('selected');
                if (checkmark)
                    checkmark.style.display = 'none';
            }
            // Update visibility based on search filter (if provided)
            if (filteredValues !== undefined) {
                if (filteredValues.includes(value)) {
                    itemElement.style.display = 'flex'; // Assuming items use flex
                    hasVisibleItems = true;
                }
                else {
                    itemElement.style.display = 'none';
                }
            }
            else {
                // If no filter, ensure item is visible
                itemElement.style.display = 'flex'; // Assuming items use flex
                hasVisibleItems = true; // Assume items exist if no filter
            }
        });
        // Show/hide "No results" message based on search
        if (enableSearch && noResultsMessage) {
            if (filteredValues !== undefined && !hasVisibleItems) {
                noResultsMessage.style.display = 'block';
            }
            else {
                noResultsMessage.style.display = 'none';
            }
        }
        updateTriggerText();
    };
    // Function to perform search and update list visibility
    const performSearch = (searchTerm) => {
        if (!enableSearch || !fuse) {
            updateUI(); // No search, just ensure UI is correct
            return;
        }
        const trimmedSearchTerm = searchTerm.trim();
        if (trimmedSearchTerm === '') {
            updateUI(undefined); // Empty search, show all
            return;
        }
        const results = fuse.search(trimmedSearchTerm);
        // Extract the 'value' from the original item structure Fuse returns
        const matchedValues = results.map((result) => {
            // Fuse returns the item it was initialized with in result.item
            const originalItem = result.item; // Cast based on how we initialize fuse
            return originalItem.value;
        });
        updateUI(matchedValues);
    };
    // Debounced search handler
    const handleSearchInput = () => {
        if (!searchInput)
            return;
        if (searchDebounceTimeout) {
            clearTimeout(searchDebounceTimeout);
        }
        searchDebounceTimeout = window.setTimeout(() => {
            if (searchInput) {
                // Check again inside timeout
                performSearch(searchInput.value);
            }
        }, searchDebounceMs);
    };
    const openDropdown = () => {
        if (isOpen)
            return;
        isOpen = true;
        // Replace slideDown with simple display change
        dropdownList.style.display = 'block'; // Or 'flex' if list itself is a flex container
        triggerIcon.classList.remove('fa-chevron-down');
        triggerIcon.classList.add('fa-chevron-up');
        // Focus search input if enabled and visible
        if (enableSearch && searchInput) {
            // Small delay might still be needed depending on browser rendering
            setTimeout(() => searchInput?.focus(), 50); // Reduced delay
        }
    };
    const closeDropdown = () => {
        if (!isOpen)
            return;
        isOpen = false;
        // Replace slideUp with simple display change
        dropdownList.style.display = 'none';
        // Reset search after closing (immediately, as no animation)
        if (enableSearch && searchInput) {
            searchInput.value = ''; // Clear search input
            performSearch(''); // Reset list visibility
        }
        triggerIcon.classList.remove('fa-chevron-up');
        triggerIcon.classList.add('fa-chevron-down');
        if (searchDebounceTimeout) {
            clearTimeout(searchDebounceTimeout); // Clear any pending debounce on close
        }
    };
    // --- Event Handlers ---
    dropdownTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        isOpen ? closeDropdown() : openDropdown();
    });
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (isOpen && container && !container.contains(e.target)) {
            closeDropdown();
        }
    });
    // Attach search handler if enabled
    if (enableSearch && searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
    }
    // --- Option Item Creation ---
    const addOptionItem = (item, initiallySelected) => {
        const value = getItemValue(item);
        const label = getItemLabel(item);
        const itemElement = document.createElement('div');
        itemElement.className = 'fancy-dropdown-item';
        itemElement.dataset.value = value; // Use dataset for data attributes
        Object.assign(itemElement.style, {
            padding: '8px 12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        });
        // Hover effect using mouseenter/mouseleave
        itemElement.addEventListener('mouseenter', () => {
            itemElement.style.backgroundColor = 'var(--hover-color, var(--white20a))';
        });
        itemElement.addEventListener('mouseleave', () => {
            itemElement.style.backgroundColor = ''; // Reset to default
        });
        const itemLabelSpan = document.createElement('span');
        itemLabelSpan.textContent = label;
        itemElement.append(itemLabelSpan);
        const checkmark = document.createElement('i');
        checkmark.className = 'checkmark fa-solid fa-check'; // FontAwesome 6 solid check
        Object.assign(checkmark.style, {
            marginLeft: '8px',
            display: initiallySelected ? 'inline-block' : 'none',
        });
        itemElement.append(checkmark);
        itemElement.addEventListener('click', function (e) {
            e.stopPropagation();
            // Use currentTarget to ensure we get the element the listener was attached to
            const clickedValue = e.currentTarget.dataset.value;
            const previousValues = [...selectedValues];
            let newValues;
            if (!multiple) {
                // Single selection mode
                if (selectedValues.includes(clickedValue)) {
                    newValues = []; // Deselecting
                }
                else {
                    newValues = [clickedValue];
                }
            }
            else {
                // Multiple selection mode
                if (selectedValues.includes(clickedValue)) {
                    newValues = selectedValues.filter((v) => v !== clickedValue);
                }
                else {
                    newValues = [...selectedValues, clickedValue];
                }
            }
            // If onBeforeSelection is defined, check if we can proceed with the change
            const proceedWithChange = async () => {
                if (options.onBeforeSelection) {
                    try {
                        const canProceed = await Promise.resolve(options.onBeforeSelection(previousValues, newValues));
                        if (!canProceed) {
                            return false;
                        }
                    }
                    catch (err) {
                        console.error('onBeforeSelection callback failed:', err);
                        return false;
                    }
                }
                return true;
            };
            proceedWithChange().then((canProceed) => {
                if (!canProceed)
                    return;
                selectedValues = newValues;
                // Re-render checkmarks while preserving search state
                if (enableSearch && searchInput && searchInput.value.trim() !== '') {
                    performSearch(searchInput.value);
                }
                else {
                    updateUI(undefined);
                }
                if (options.onSelectChange) {
                    Promise.resolve(options.onSelectChange(previousValues, selectedValues)).catch((err) => console.error('onSelectChange callback failed:', err));
                }
                if (closeOnSelect) {
                    closeDropdown();
                }
            });
        });
        // Append before the 'no results' message if it exists
        if (noResultsMessage) {
            dropdownList.insertBefore(itemElement, noResultsMessage);
        }
        else {
            dropdownList.append(itemElement);
        }
        return itemElement; // Return the created element if needed later
    };
    // --- Initialization ---
    if (internalInitialList.length > 0) {
        internalInitialList.forEach((item) => {
            const value = getItemValue(item);
            addOptionItem(item, selectedValues.includes(value));
        });
    }
    initializeFuse(); // Initialize Fuse.js after initial items are added
    updateUI(); // Initial UI state
    // --- Public API ---
    const api = {
        container, // Expose the main container element
        dropdownTrigger, // Expose trigger element
        dropdownList, // Expose list element
        getValues: () => [...selectedValues],
        setValues: (values) => {
            const previousValues = [...selectedValues];
            // Ensure values exist in the list
            const validValues = values.filter((v) => internalInitialList.some((item) => getItemValue(item) === v));
            selectedValues = [...validValues];
            // Reset search when setting values externally
            if (enableSearch && searchInput && searchInput.value !== '') {
                searchInput.value = '';
                performSearch(''); // Show all items after setting
            }
            else {
                updateUI(); // Just update checkmarks and trigger
            }
            // Avoid triggering callback if values didn't actually change
            const changed = JSON.stringify(previousValues.sort()) !== JSON.stringify(selectedValues.sort());
            if (changed && options.onSelectChange) {
                Promise.resolve(options.onSelectChange(previousValues, selectedValues)).catch((err) => console.error('onSelectChange callback failed:', err));
            }
        },
        getOptions: () => internalInitialList.map((item) => (typeof item === 'string' ? { value: item, label: item } : item)),
        addOption: (value, select = false) => {
            const itemValue = getItemValue(value);
            // Check for duplicates
            if (internalInitialList.some((item) => getItemValue(item) === itemValue))
                return;
            internalInitialList.push(value);
            addOptionItem(value, select); // Add to DOM
            initializeFuse(); // Re-initialize Fuse
            let changed = false;
            const previousValues = [...selectedValues];
            if (select && !selectedValues.includes(itemValue)) {
                if (multiple) {
                    selectedValues.push(itemValue);
                }
                else {
                    selectedValues = [itemValue]; // Replace in single select mode
                }
                changed = true;
            }
            else if (select && !multiple && selectedValues.length > 0 && selectedValues[0] !== itemValue) {
                // If single select mode and trying to select a different item
                selectedValues = [itemValue];
                changed = true;
            }
            // Refresh UI potentially filtering if search is active
            if (enableSearch && searchInput && searchInput.value !== '') {
                performSearch(searchInput.value);
            }
            else {
                updateUI();
            }
            if (changed && options.onSelectChange) {
                Promise.resolve(options.onSelectChange(previousValues, selectedValues)).catch((err) => console.error('onSelectChange callback failed:', err));
            }
        },
        removeOption: (valueToRemove) => {
            const initialLength = internalInitialList.length;
            internalInitialList = internalInitialList.filter((item) => getItemValue(item) !== valueToRemove);
            if (internalInitialList.length === initialLength)
                return; // Nothing removed
            let selectionChanged = false;
            const previousValues = [...selectedValues];
            const indexToRemove = selectedValues.indexOf(valueToRemove);
            if (indexToRemove > -1) {
                selectedValues.splice(indexToRemove, 1);
                selectionChanged = true;
            }
            // Remove from DOM
            const itemToRemove = dropdownList.querySelector(`.fancy-dropdown-item[data-value="${valueToRemove}"]`);
            itemToRemove?.remove();
            initializeFuse(); // Re-initialize Fuse
            if (enableSearch && searchInput && searchInput.value !== '') {
                performSearch(searchInput.value);
            }
            else {
                updateUI();
            }
            if (selectionChanged && options.onSelectChange) {
                Promise.resolve(options.onSelectChange(previousValues, selectedValues)).catch((err) => console.error('onSelectChange callback failed:', err));
            }
        },
        selectAll: () => {
            if (!multiple)
                return; // Select all only makes sense for multiple mode
            const previousValues = [...selectedValues];
            const allValues = internalInitialList.map(getItemValue);
            selectedValues = [...new Set([...selectedValues, ...allValues])]; // Use Set to avoid duplicates if some were already selected
            const changed = JSON.stringify(previousValues.sort()) !== JSON.stringify(selectedValues.sort());
            if (enableSearch && searchInput && searchInput.value !== '') {
                performSearch(searchInput.value); // Re-apply filter, but update checks
            }
            else {
                updateUI();
            }
            if (changed && options.onSelectChange) {
                Promise.resolve(options.onSelectChange(previousValues, selectedValues)).catch((err) => console.error('onSelectChange callback failed:', err));
            }
        },
        deselectAll: () => {
            const previousValues = [...selectedValues];
            if (selectedValues.length > 0) {
                selectedValues = [];
                if (enableSearch && searchInput && searchInput.value !== '') {
                    performSearch(searchInput.value); // Re-apply filter, update checks
                }
                else {
                    updateUI();
                }
                if (options.onSelectChange) {
                    Promise.resolve(options.onSelectChange(previousValues, selectedValues)).catch((err) => console.error('onSelectChange callback failed:', err));
                }
            }
        },
        disable: () => {
            container.style.pointerEvents = 'none';
            container.style.opacity = '0.6';
            if (isOpen)
                closeDropdown(); // Ensure it's closed when disabled
        },
        enable: () => {
            container.style.pointerEvents = 'auto';
            container.style.opacity = '1';
        },
        open: openDropdown,
        close: closeDropdown,
        toggle: () => (isOpen ? closeDropdown() : openDropdown()),
    };
    return api;
}
//# sourceMappingURL=fancy-dropdown.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/generate.js":
/*!*************************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/generate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Generator: () => (/* binding */ Generator)
/* harmony export */ });
class Generator {
    requestMap;
    constructor() {
        this.requestMap = new Map();
    }
    abortRequest(requestId) {
        const state = this.requestMap.get(requestId);
        if (!state)
            return;
        if (state.abortController) {
            try {
                state.abortController.abort();
            }
            catch (error) { }
        }
        if (state.options?.onFinish) {
            state.options.onFinish();
        }
        this.requestMap.delete(requestId);
    }
    /**
     * @returns return value is not important because request would be finished anyway. So use "options".
     */
    async generateRequest(requestParams, options) {
        const context = SillyTavern.getContext();
        const requestId = context.uuidv4();
        const isStream = requestParams?.custom?.stream ?? false;
        this.requestMap.set(requestId, {
            abortController: options?.abortController,
            isStream,
            options,
        });
        if (!isStream) {
            try {
                if (options?.onStart) {
                    options.onStart(requestId);
                }
                const response = await context.ConnectionManagerRequestService.sendRequest(requestParams.profileId, requestParams.prompt, requestParams.maxTokens, requestParams.custom);
                if (this.requestMap.get(requestId)) {
                    if (options?.onEntry) {
                        options.onEntry(response);
                    }
                    if (options?.onFinish) {
                        options.onFinish(response);
                    }
                }
            }
            catch (error) {
                if (options?.onFinish) {
                    options.onFinish(undefined, error);
                }
            }
            finally {
                this.requestMap.delete(requestId);
            }
        }
        else {
            try {
                const responseGen = await context.ConnectionManagerRequestService.sendRequest(requestParams.profileId, requestParams.prompt, requestParams.maxTokens, requestParams.custom);
                if (options?.onStart) {
                    options.onStart(requestId);
                }
                let lastChunk;
                for await (const chunk of responseGen()) {
                    lastChunk = chunk;
                    if (options?.onEntry) {
                        options.onEntry(chunk);
                    }
                }
                if (options?.onFinish) {
                    options.onFinish(lastChunk);
                }
            }
            catch (error) {
                if (options?.onFinish) {
                    options.onFinish(undefined, error);
                }
            }
            finally {
                this.requestMap.delete(requestId);
            }
        }
        return requestId;
    }
    getActiveRequest(requestId) {
        return this.requestMap.get(requestId)?.abortController;
    }
    getAllActiveRequests() {
        const activeRequests = new Map();
        for (const [id, state] of this.requestMap) {
            activeRequests.set(id, state.abortController);
        }
        return activeRequests;
    }
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionSettingsManager: () => (/* reexport safe */ _extension_settings_manager_js__WEBPACK_IMPORTED_MODULE_1__.ExtensionSettingsManager),
/* harmony export */   Generator: () => (/* reexport safe */ _generate_js__WEBPACK_IMPORTED_MODULE_3__.Generator),
/* harmony export */   applyWorldInfoEntry: () => (/* reexport safe */ _world_info_utils_js__WEBPACK_IMPORTED_MODULE_7__.applyWorldInfoEntry),
/* harmony export */   buildFancyDropdown: () => (/* reexport safe */ _fancy_dropdown_js__WEBPACK_IMPORTED_MODULE_2__.buildFancyDropdown),
/* harmony export */   buildPresetSelect: () => (/* reexport safe */ _preset_select_js__WEBPACK_IMPORTED_MODULE_4__.buildPresetSelect),
/* harmony export */   buildPrompt: () => (/* reexport safe */ _prompt_builder_js__WEBPACK_IMPORTED_MODULE_5__.buildPrompt),
/* harmony export */   buildSortableList: () => (/* reexport safe */ _sortable_list_js__WEBPACK_IMPORTED_MODULE_6__.buildSortableList),
/* harmony export */   createCharacter: () => (/* reexport safe */ _character_utils_js__WEBPACK_IMPORTED_MODULE_0__.createCharacter),
/* harmony export */   getActiveWorldInfo: () => (/* reexport safe */ _world_info_utils_js__WEBPACK_IMPORTED_MODULE_7__.getActiveWorldInfo),
/* harmony export */   saveCharacter: () => (/* reexport safe */ _character_utils_js__WEBPACK_IMPORTED_MODULE_0__.saveCharacter)
/* harmony export */ });
/* harmony import */ var _character_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character-utils.js */ "./node_modules/sillytavern-utils-lib/dist/character-utils.js");
/* harmony import */ var _extension_settings_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extension-settings-manager.js */ "./node_modules/sillytavern-utils-lib/dist/extension-settings-manager.js");
/* harmony import */ var _fancy_dropdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fancy-dropdown.js */ "./node_modules/sillytavern-utils-lib/dist/fancy-dropdown.js");
/* harmony import */ var _generate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate.js */ "./node_modules/sillytavern-utils-lib/dist/generate.js");
/* harmony import */ var _preset_select_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preset-select.js */ "./node_modules/sillytavern-utils-lib/dist/preset-select.js");
/* harmony import */ var _prompt_builder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prompt-builder.js */ "./node_modules/sillytavern-utils-lib/dist/prompt-builder.js");
/* harmony import */ var _sortable_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sortable-list.js */ "./node_modules/sillytavern-utils-lib/dist/sortable-list.js");
/* harmony import */ var _world_info_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./world-info-utils.js */ "./node_modules/sillytavern-utils-lib/dist/world-info-utils.js");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/preset-select.js":
/*!******************************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/preset-select.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPresetSelect: () => (/* binding */ buildPresetSelect)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./node_modules/sillytavern-utils-lib/dist/config.js");

function buildPresetSelect(selector, options = {}) {
    const context = SillyTavern.getContext();
    const readOnlyValues = options.readOnlyValues || [];
    const select = document.querySelector(selector);
    if (!select) {
        throw new Error(`Could not find preset select: ${selector}`);
    }
    const getLabel = (value) => (options.label ? options.label(value) : value);
    const container = document.createElement('div');
    container.className = 'preset-select-container';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    const isReadOnly = (value) => {
        return readOnlyValues.includes(value);
    };
    // Wrap the select in the container
    select.parentNode?.insertBefore(container, select);
    container.appendChild(select);
    // Add initial options if provided
    if (options.initialList && options.initialList.length > 0) {
        // Clear existing options first
        select.innerHTML = '';
        const getItemValue = (item) => (typeof item === 'string' ? item : item.value);
        // Add new options from the list
        for (const item of options.initialList) {
            const option = document.createElement('option');
            const value = getItemValue(item);
            option.value = value;
            option.textContent = getLabel(value);
            if (isReadOnly(value)) {
                option.dataset.readonly = 'true';
            }
            select.appendChild(option);
        }
    }
    // Set initial value if provided
    if (options.initialValue) {
        // Find option with matching value
        const option = Array.from(select.options).find((opt) => opt.value === options.initialValue);
        if (option) {
            select.value = option.value;
        }
    }
    // Track previous value for onSelectChange
    let previousValue = select.value;
    // Set up change event handler for the select
    select.addEventListener('change', async () => {
        const newValue = select.value;
        if (options.onSelectChange && previousValue !== newValue) {
            await options.onSelectChange(previousValue, newValue);
        }
        previousValue = newValue;
    });
    // Add Create button if enabled
    if (options.create) {
        const createButton = document.createElement('i');
        createButton.className = 'menu_button fa-solid fa-file-circle-plus';
        const createLabel = getLabel('');
        createButton.title = `Create a new ${createLabel}`;
        createButton.setAttribute('data-i18n', `[title]Create a new ${createLabel}`);
        createButton.addEventListener('click', async () => {
            if (options.create?.onPopupOpen) {
                await options.create.onPopupOpen();
            }
            const popupLabel = getLabel('');
            const newValue = await context.Popup.show.input(`Create a new ${popupLabel}`, `Please enter a name for the new ${popupLabel}:`, '');
            if (newValue === null || newValue.trim() === '')
                return;
            let trimmedValue = newValue.trim();
            // Check if a preset with this name already exists
            const exists = Array.from(select.options).some((option) => option.value === trimmedValue);
            if (exists) {
                await (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_echo)('warning', `A ${getLabel(trimmedValue)} with this name already exists.`);
                return;
            }
            // Run before create hook
            if (options.create?.onBeforeCreate) {
                const shouldProceed = await options.create.onBeforeCreate(trimmedValue);
                if (!shouldProceed)
                    return;
            }
            // Run after create hook and potentially update the value
            if (options.create?.onAfterCreate) {
                const result = await options.create.onAfterCreate(trimmedValue);
                if (typeof result === 'string') {
                    trimmedValue = result;
                }
            }
            // Create new option
            const newOption = document.createElement('option');
            newOption.value = trimmedValue;
            newOption.textContent = getLabel(trimmedValue);
            select.appendChild(newOption);
            // Store previous value before changing
            const prevValue = select.value;
            // Select the new option
            select.value = trimmedValue;
            // Trigger onSelectChange if the value actually changed
            if (options.onSelectChange && prevValue !== trimmedValue) {
                await options.onSelectChange(prevValue, trimmedValue);
            }
            previousValue = trimmedValue;
        });
        container.appendChild(createButton);
    }
    // Add Rename button if enabled
    if (options.rename) {
        const renameButton = document.createElement('i');
        renameButton.className = 'menu_button fa-solid fa-pencil';
        const renameLabel = getLabel('');
        renameButton.title = `Rename a ${renameLabel}`;
        renameButton.setAttribute('data-i18n', `[title]Rename a ${renameLabel}`);
        renameButton.addEventListener('click', async () => {
            if (select.selectedIndex === -1) {
                await (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_echo)('warning', `Please select a ${getLabel('')} to rename.`);
                return;
            }
            const selectedOption = select.options[select.selectedIndex];
            let selectedValue = selectedOption.value;
            // Check if the selected value is read-only
            if (isReadOnly(selectedValue)) {
                await (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_echo)('warning', `This ${getLabel(selectedValue)} cannot be renamed as it is read-only.`);
                return;
            }
            if (options.rename?.onPopupOpen) {
                await options.rename.onPopupOpen();
            }
            const newValue = await context.Popup.show.input(`Rename ${getLabel(selectedValue)}`, `Please enter a new name for "${selectedValue}":`, selectedValue);
            if (newValue === null || newValue.trim() === '' || newValue === selectedValue)
                return;
            let trimmedValue = newValue.trim();
            // Check if a preset with this name already exists
            const exists = Array.from(select.options).some((option) => option.value === trimmedValue && option !== selectedOption);
            if (exists) {
                await (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_echo)('warning', `A ${getLabel(trimmedValue)} with this name already exists.`);
                return;
            }
            // Run before rename hook
            if (options.rename?.onBeforeRename) {
                const shouldProceed = await options.rename.onBeforeRename(selectedValue, trimmedValue);
                if (!shouldProceed)
                    return;
            }
            // Run after rename hook and potentially update the value
            if (options.rename?.onAfterRename) {
                const result = await options.rename.onAfterRename(selectedValue, trimmedValue);
                if (typeof result === 'string') {
                    trimmedValue = result;
                }
            }
            // Rename the option
            selectedOption.value = trimmedValue;
            selectedOption.textContent = getLabel(trimmedValue);
            // Update the previous value tracker
            if (selectedValue === previousValue) {
                previousValue = trimmedValue;
            }
            // Trigger onSelectChange since the currently selected option changed its value
            if (options.onSelectChange && select.value === trimmedValue) {
                await options.onSelectChange(selectedValue, trimmedValue);
            }
        });
        container.appendChild(renameButton);
    }
    // Add Delete button if enabled
    if (options.delete) {
        const deleteButton = document.createElement('i');
        deleteButton.className = 'menu_button fa-solid fa-trash-can';
        const deleteLabel = getLabel('');
        deleteButton.title = `Delete a ${deleteLabel}`;
        deleteButton.setAttribute('data-i18n', `[title]Delete a ${deleteLabel}`);
        deleteButton.addEventListener('click', async () => {
            if (select.selectedIndex === -1) {
                await (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_echo)('warning', `Please select a ${getLabel('')} to delete.`);
                return;
            }
            const selectedOption = select.options[select.selectedIndex];
            const valueToDelete = selectedOption.value;
            const selectedIndex = select.selectedIndex;
            // Check if the selected value is read-only
            if (isReadOnly(valueToDelete)) {
                await (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_echo)('warning', `This ${getLabel(valueToDelete)} cannot be deleted as it is read-only.`);
                return;
            }
            if (options.delete?.onPopupOpen) {
                await options.delete.onPopupOpen();
            }
            const confirmed = await context.Popup.show.confirm(`Delete ${getLabel(valueToDelete)}`, `Are you sure you want to delete "${valueToDelete}"?`);
            if (!confirmed)
                return;
            // Run before delete hook
            if (options.delete?.onBeforeDelete) {
                const shouldProceed = await options.delete.onBeforeDelete(valueToDelete);
                if (!shouldProceed)
                    return;
            }
            // Store the value to delete for later reference
            const deletedValue = valueToDelete;
            // Determine the next option to select after deletion
            let nextSelectedIndex = -1;
            let nextValue = undefined;
            if (select.options.length > 1) {
                // Try to select the next option, or the previous if we're at the end
                nextSelectedIndex = selectedIndex < select.options.length - 1 ? selectedIndex : selectedIndex - 1;
                nextValue = select.options[nextSelectedIndex].value;
            }
            // Remove the option
            select.removeChild(selectedOption);
            // Select the next available option if there is one
            if (nextSelectedIndex >= 0) {
                select.selectedIndex = nextSelectedIndex;
                previousValue = nextValue;
                // Trigger onSelectChange
                if (options.onSelectChange) {
                    await options.onSelectChange(deletedValue, nextValue);
                }
            }
            else {
                // No options left, trigger onSelectChange with undefined as new value
                if (options.onSelectChange) {
                    await options.onSelectChange(deletedValue, undefined);
                }
                previousValue = undefined;
            }
            // Run after delete hook
            if (options.delete?.onAfterDelete) {
                await options.delete.onAfterDelete(deletedValue);
            }
        });
        container.appendChild(deleteButton);
    }
    return {
        select,
        container,
    };
}
//# sourceMappingURL=preset-select.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/prompt-builder.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/prompt-builder.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPrompt: () => (/* binding */ buildPrompt)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./node_modules/sillytavern-utils-lib/dist/config.js");
/* harmony import */ var _tokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenizer.js */ "./node_modules/sillytavern-utils-lib/dist/tokenizer.js");


class TokenAwarePromptBuilder {
    messages = [];
    tokenizer;
    maxContext;
    currentTokenCount = 0;
    constructor(maxContext) {
        this.tokenizer = new _tokenizer_js__WEBPACK_IMPORTED_MODULE_1__.Tokenizer();
        this.maxContext = maxContext;
    }
    getTokenCount(message) {
        if (!message.content)
            return 0;
        return message.source?.extra?.token_count ?? this.tokenizer.encode(message.content).length;
    }
    canFit(message) {
        return this.currentTokenCount + this.getTokenCount(message) <= this.maxContext;
    }
    add(message) {
        if (!message.content)
            return true;
        const tokenCount = this.getTokenCount(message);
        if (this.currentTokenCount + tokenCount > this.maxContext) {
            return false;
        }
        this.messages.push(message);
        this.currentTokenCount += tokenCount;
        return true;
    }
    addFront(message) {
        if (!message.content)
            return true;
        const tokenCount = this.getTokenCount(message);
        if (this.currentTokenCount + tokenCount > this.maxContext) {
            return false;
        }
        this.messages.unshift(message);
        this.currentTokenCount += tokenCount;
        return true;
    }
    addMany(messages) {
        const validMessages = messages.filter((msg) => msg.content);
        const tokenCounts = validMessages.map((msg) => this.getTokenCount(msg));
        // Check if all messages can fit
        const totalMessageTokens = tokenCounts.reduce((sum, count) => sum + count, 0);
        if (this.currentTokenCount + totalMessageTokens <= this.maxContext) {
            // All messages fit, add them all
            this.messages.push(...validMessages);
            this.currentTokenCount += totalMessageTokens;
            return true;
        }
        // Not all messages fit, so we need to select the most recent ones that fit
        // Process messages from newest to oldest (reverse order)
        let accumulatedTokens = 0;
        const messagesToAdd = [];
        for (let i = validMessages.length - 1; i >= 0; i--) {
            const message = validMessages[i];
            const tokenCount = tokenCounts[i];
            if (this.currentTokenCount + accumulatedTokens + tokenCount <= this.maxContext) {
                messagesToAdd.unshift(message); // Add to front to maintain chronological order
                accumulatedTokens += tokenCount;
            }
            else {
                // Can't fit this message or any older messages
                break;
            }
        }
        if (messagesToAdd.length > 0) {
            this.messages.push(...messagesToAdd);
            this.currentTokenCount += accumulatedTokens;
        }
        return messagesToAdd.length === validMessages.length;
    }
    insert(index, message) {
        if (!message.content)
            return true;
        const tokenCount = this.getTokenCount(message);
        if (this.currentTokenCount + tokenCount > this.maxContext) {
            return false;
        }
        this.messages.splice(index, 0, message);
        this.currentTokenCount += tokenCount;
        return true;
    }
    getMessages() {
        return this.messages;
    }
}
/**
 * Builds chat prompt. Don't expect a perfect chat prompt like ST. But I would give guarantee that it will cover 98% of the cases.
 *
 * Token calculation is crippled. We only calculating tokens for the chat history. For example, If your max context is 16k, total token will be 16k + world info, author note, extensionPrompts, etc. Better than nothing.
 * @param targetMessageIndex - Last message index to include in prompt
 * @param [param1={}] - Options
 */
async function buildPrompt(api, { targetCharacterId, presetName, instructName, contextName, syspromptName, maxContext, includeNames, ignoreCharacterFields, ignoreAuthorNote, ignoreWorldInfo, messageIndexesBetween, } = {}) {
    if (!['textgenerationwebui', 'openai'].includes(api)) {
        throw new Error('Unsupported API');
    }
    const context = SillyTavern.getContext();
    let { description, personality, persona, scenario, mesExamples, system, jailbreak } = !ignoreCharacterFields
        ? context.getCharacterCardFields({
            chid: targetCharacterId,
        })
        : {
            description: '',
            personality: '',
            persona: '',
            scenario: '',
            mesExamples: '',
            system: '',
            jailbreak: '',
        };
    const instructPreset = api === 'textgenerationwebui'
        ? context.getPresetManager('instruct')?.getCompletionPresetByName(instructName)
        : undefined;
    const isInstruct = !!instructPreset?.enabled;
    let mesExamplesArray = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_parseMesExamples)(mesExamples, isInstruct);
    function getMaxContext() {
        if (typeof maxContext === 'number') {
            return maxContext;
        }
        if (!maxContext) {
            return (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getMaxContextSize)();
        }
        if (maxContext === 'active' || !presetName) {
            return (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getMaxContextSize)();
        }
        if (typeof maxContext === 'number') {
            return maxContext;
        }
        let response;
        if (api === 'textgenerationwebui') {
            const preset = context.getPresetManager('textgenerationwebui')?.getCompletionPresetByName(presetName);
            response = preset?.max_length;
        }
        else {
            const preset = context.getPresetManager('openai')?.getCompletionPresetByName(presetName);
            response = preset?.openai_max_context;
        }
        return typeof response === 'number' ? response : (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getMaxContextSize)();
    }
    let warnings = [];
    const currentMaxContext = getMaxContext();
    if (currentMaxContext <= 0) {
        return { result: [], warnings };
    }
    const promptBuilder = new TokenAwarePromptBuilder(currentMaxContext);
    const canUseTools = context.ToolManager.isToolCallingSupported();
    const startIndex = messageIndexesBetween?.start ?? 0;
    const endIndex = messageIndexesBetween?.end ? messageIndexesBetween.end + 1 : undefined;
    let coreChat = startIndex === -1 && endIndex === 0
        ? []
        : context.chat
            .slice(startIndex, endIndex)
            .filter((x) => !x.is_system || (canUseTools && Array.isArray(x.extra?.tool_invocations)));
    coreChat = await Promise.all(coreChat.map(async (chatItem, index) => {
        let message = chatItem.mes;
        let regexType = chatItem.is_user ? _config_js__WEBPACK_IMPORTED_MODULE_0__.regex_placement.USER_INPUT : _config_js__WEBPACK_IMPORTED_MODULE_0__.regex_placement.AI_OUTPUT;
        const isContinue = false;
        let options = { isPrompt: true, depth: coreChat.length - index - (isContinue ? 2 : 1) };
        let regexedMessage = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getRegexedString)(message, regexType, options);
        regexedMessage = await (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_appendFileContent)(chatItem, regexedMessage);
        if (chatItem?.extra?.append_title && chatItem?.extra?.title) {
            regexedMessage = `${regexedMessage}\n\n${chatItem.extra.title}`;
        }
        return {
            ...chatItem,
            mes: regexedMessage,
            index,
        };
    }));
    const chatForWI = coreChat.map((x) => (_config_js__WEBPACK_IMPORTED_MODULE_0__.world_info_include_names ? `${x.name}: ${x.mes}` : x.mes)).reverse();
    const { worldInfoString, worldInfoBefore, worldInfoAfter, worldInfoExamples, worldInfoDepth, anBefore, anAfter } = !ignoreWorldInfo
        ? await context.getWorldInfoPrompt(chatForWI, currentMaxContext, false)
        : {
            worldInfoString: '',
            worldInfoBefore: '',
            worldInfoAfter: '',
            worldInfoExamples: [],
            worldInfoDepth: [],
            anBefore: [],
            anAfter: [],
        };
    // Add message example WI
    for (const example of worldInfoExamples) {
        const exampleMessage = example.content;
        if (exampleMessage.length === 0) {
            continue;
        }
        const formattedExample = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_baseChatReplace)(exampleMessage, _config_js__WEBPACK_IMPORTED_MODULE_0__.name1, _config_js__WEBPACK_IMPORTED_MODULE_0__.name2);
        const cleanedExample = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_parseMesExamples)(formattedExample, isInstruct);
        // Insert depending on before or after position
        if (example.position === _config_js__WEBPACK_IMPORTED_MODULE_0__.wi_anchor_position.before) {
            mesExamplesArray.unshift(...cleanedExample);
        }
        else {
            mesExamplesArray.push(...cleanedExample);
        }
    }
    function addChatToMessages() {
        // Add messages starting from most recent to respect context limits
        const chatMessages = [];
        for (let i = coreChat.length - 1; i >= 0; i--) {
            const message = coreChat[i];
            const role = message.name === 'System' && !message.is_user ? 'system' : message.is_user ? 'user' : 'assistant';
            chatMessages.unshift({
                role,
                content: includeNames && role != 'system' ? `${message.name}: ${message.mes}` : message.mes,
                source: message,
            });
        }
        promptBuilder.addMany(chatMessages);
    }
    const textCompletion = api === 'textgenerationwebui';
    if (textCompletion) {
        // At this point, the raw message examples can be created
        const mesExamplesRawArray = [...mesExamplesArray];
        if (mesExamplesArray) {
            mesExamplesArray = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_formatInstructModeExamples)(mesExamplesArray, _config_js__WEBPACK_IMPORTED_MODULE_0__.name1, _config_js__WEBPACK_IMPORTED_MODULE_0__.name2);
        }
        const syspromptPreset = context.getPresetManager('sysprompt')?.getCompletionPresetByName(syspromptName);
        if (syspromptPreset) {
            system =
                context.powerUserSettings.prefer_character_prompt && system
                    ? system
                    : (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_baseChatReplace)(syspromptPreset.content, _config_js__WEBPACK_IMPORTED_MODULE_0__.name1, _config_js__WEBPACK_IMPORTED_MODULE_0__.name2);
            system = isInstruct
                ? (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_formatInstructModeSystemPrompt)(context.substituteParams(system, _config_js__WEBPACK_IMPORTED_MODULE_0__.name1, _config_js__WEBPACK_IMPORTED_MODULE_0__.name2, syspromptPreset.content), instructPreset)
                : system;
        }
        // Build story string
        const storyStringParams = {
            description: description,
            personality: personality,
            persona: context.powerUserSettings.persona_description_position == _config_js__WEBPACK_IMPORTED_MODULE_0__.persona_description_positions.IN_PROMPT
                ? persona
                : '',
            scenario: scenario,
            system: system,
            char: _config_js__WEBPACK_IMPORTED_MODULE_0__.name2,
            user: _config_js__WEBPACK_IMPORTED_MODULE_0__.name1,
            wiBefore: worldInfoBefore,
            wiAfter: worldInfoAfter,
            loreBefore: worldInfoBefore,
            loreAfter: worldInfoAfter,
            mesExamples: mesExamplesArray.join(''),
            mesExamplesRaw: mesExamplesRawArray.join(''),
        };
        const contextPreset = context.getPresetManager('context')?.getCompletionPresetByName(contextName);
        let storyString = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_renderStoryString)(storyStringParams, {
            customInstructSettings: instructPreset,
            customStoryString: contextPreset?.story_string,
        });
        if (storyString) {
            promptBuilder.add({ role: 'system', content: storyString, ignoreInstruct: true });
        }
        addChatToMessages();
    }
    else {
        let oaiMessages = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_setOpenAIMessages)(coreChat);
        let oaiMessageExamples = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_setOpenAIMessageExamples)(mesExamplesArray);
        async function addDefaultPreset() {
            let [prompt, _counts] = await (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_prepareOpenAIMessages)({
                name2: _config_js__WEBPACK_IMPORTED_MODULE_0__.name2,
                charDescription: description,
                charPersonality: personality,
                Scenario: scenario,
                worldInfoBefore: worldInfoBefore,
                worldInfoAfter: worldInfoAfter,
                extensionPrompts: context.extensionPrompts,
                bias: '',
                type: 'normal',
                quietPrompt: undefined,
                quietImage: undefined,
                cyclePrompt: '',
                systemPromptOverride: system,
                jailbreakPromptOverride: jailbreak,
                personaDescription: persona,
                messages: oaiMessages,
                messageExamples: oaiMessageExamples,
            }, false);
            promptBuilder.addMany(prompt);
        }
        if (!presetName) {
            warnings.push('No preset name provided. Using default preset.');
            await addDefaultPreset();
            return { result: promptBuilder.getMessages(), warnings };
        }
        const preset = context.getPresetManager('openai')?.getCompletionPresetByName(presetName);
        if (!preset) {
            console.warn(`Preset not found: ${presetName}. Using current preset.`);
            warnings.push(`Preset not found: ${presetName}. Using current preset.`);
            addDefaultPreset();
            return { result: promptBuilder.getMessages(), warnings };
        }
        let promptOrder = preset.prompt_order?.find((prompt) => prompt.character_id === _config_js__WEBPACK_IMPORTED_MODULE_0__.this_chid);
        if (!promptOrder && preset.prompt_order && preset.prompt_order.length > 0) {
            promptOrder = preset.prompt_order[0];
        }
        if (!promptOrder) {
            console.warn(`No prompt order found for preset: ${presetName}. Using current preset.`);
            warnings.push(`No prompt order found for preset: ${presetName}. Using current preset.`);
            addDefaultPreset();
            return { result: promptBuilder.getMessages(), warnings };
        }
        const scenarioText = scenario && preset.scenario_format ? context.substituteParams(preset.scenario_format) : '';
        const charPersonalityText = personality && preset.personality_format ? context.substituteParams(preset.personality_format) : '';
        const groupNudge = context.substituteParams(preset.group_nudge_prompt);
        const impersonationPrompt = preset.impersonation_prompt
            ? context.substituteParams(preset.impersonation_prompt)
            : '';
        const systemPrompts = [];
        // Create entries for system prompts
        if (!ignoreWorldInfo) {
            systemPrompts.push(...[
                {
                    role: 'system',
                    content: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_formatWorldInfo)(worldInfoBefore, { wiFormat: preset.wi_format }),
                    identifier: 'worldInfoBefore',
                },
                {
                    role: 'system',
                    content: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_formatWorldInfo)(worldInfoAfter, { wiFormat: preset.wi_format }),
                    identifier: 'worldInfoAfter',
                },
            ]);
        }
        if (!ignoreCharacterFields) {
            systemPrompts.push(...[
                { role: 'system', content: description, identifier: 'charDescription' },
                { role: 'system', content: charPersonalityText, identifier: 'charPersonality' },
                { role: 'system', content: scenarioText, identifier: 'scenario' },
            ]);
        }
        systemPrompts.push(...[
            { role: 'system', content: impersonationPrompt, identifier: 'impersonate' },
            { role: 'system', content: groupNudge, identifier: 'groupNudge' },
        ]);
        // Tavern Extras - Summary
        const summary = context.extensionPrompts['1_memory'];
        if (summary && summary.value)
            systemPrompts.push({
                role: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptRole)(summary.role),
                content: summary.value,
                identifier: 'summary',
                position: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptPosition)(summary.position),
            });
        // Authors Note
        const authorsNote = context.extensionPrompts['2_floating_prompt'];
        if (!ignoreAuthorNote && authorsNote && authorsNote.value)
            systemPrompts.push({
                role: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptRole)(authorsNote.role),
                content: authorsNote.value,
                identifier: 'authorsNote',
                position: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptPosition)(authorsNote.position),
            });
        // Vectors Memory
        const vectorsMemory = context.extensionPrompts['3_vectors'];
        if (vectorsMemory && vectorsMemory.value)
            systemPrompts.push({
                role: 'system',
                content: vectorsMemory.value,
                identifier: 'vectorsMemory',
                position: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptPosition)(vectorsMemory.position),
            });
        const vectorsDataBank = context.extensionPrompts['4_vectors_data_bank'];
        if (vectorsDataBank && vectorsDataBank.value)
            systemPrompts.push({
                role: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptRole)(vectorsDataBank.role),
                content: vectorsDataBank.value,
                identifier: 'vectorsDataBank',
                position: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptPosition)(vectorsDataBank.position),
            });
        // Smart Context (ChromaDB)
        const smartContext = context.extensionPrompts['chromadb'];
        if (smartContext && smartContext.value)
            systemPrompts.push({
                role: 'system',
                content: smartContext.value,
                identifier: 'smartContext',
                position: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptPosition)(smartContext.position),
            });
        // Persona Description
        if (!ignoreCharacterFields &&
            context.powerUserSettings.persona_description &&
            context.powerUserSettings.persona_description_position === _config_js__WEBPACK_IMPORTED_MODULE_0__.persona_description_positions.IN_PROMPT) {
            systemPrompts.push({
                role: 'system',
                content: context.powerUserSettings.persona_description,
                identifier: 'personaDescription',
            });
        }
        function getPrompt(identifier) {
            const sysPrompt = systemPrompts.find((prompt) => prompt.identifier === identifier);
            if (sysPrompt) {
                return sysPrompt;
            }
            const presetPrompt = preset.prompts.find((prompt) => prompt.identifier === identifier);
            if (presetPrompt) {
                return presetPrompt;
            }
            return undefined;
        }
        promptOrder.order.forEach((prompt) => {
            if (!prompt.enabled) {
                return;
            }
            const collectionPrompt = getPrompt(prompt.identifier);
            if (collectionPrompt && collectionPrompt.content) {
                promptBuilder.add({
                    role: collectionPrompt.role ?? 'system',
                    content: context.substituteParams(collectionPrompt.content),
                });
                return;
            }
            if (prompt.identifier === 'chatHistory') {
                addChatToMessages();
            }
        });
    }
    const knownExtensionPrompts = [
        '1_memory',
        '2_floating_prompt',
        '3_vectors',
        '4_vectors_data_bank',
        'chromadb',
        'PERSONA_DESCRIPTION',
        'QUIET_PROMPT',
        'DEPTH_PROMPT',
    ];
    // Anything that is not a known extension prompt
    for (const key in context.extensionPrompts) {
        if (Object.hasOwn(context.extensionPrompts, key)) {
            const prompt = context.extensionPrompts[key];
            if (knownExtensionPrompts.includes(key))
                continue;
            if (!context.extensionPrompts[key].value)
                continue;
            if (![_config_js__WEBPACK_IMPORTED_MODULE_0__.extension_prompt_types.BEFORE_PROMPT, _config_js__WEBPACK_IMPORTED_MODULE_0__.extension_prompt_types.IN_PROMPT].includes(prompt.position))
                continue;
            const hasFilter = typeof prompt.filter === 'function';
            if (hasFilter && !(await prompt.filter()))
                continue;
            const message = {
                role: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptRole)(prompt.role) ?? 'system',
                content: prompt.value,
            };
            if (prompt.position === _config_js__WEBPACK_IMPORTED_MODULE_0__.extension_prompt_types.BEFORE_PROMPT) {
                promptBuilder.insert(prompt.depth, message);
            }
            else if (prompt.position === _config_js__WEBPACK_IMPORTED_MODULE_0__.extension_prompt_types.IN_PROMPT) {
                const messages = promptBuilder.getMessages();
                promptBuilder.insert(messages.length - prompt.depth, message);
            }
        }
    }
    // Inject world info depth.
    for (const worldInfo of worldInfoDepth) {
        const messages = promptBuilder.getMessages();
        promptBuilder.insert(messages.length - worldInfo.depth, {
            role: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptRole)(worldInfo.role),
            content: worldInfo.entries.join('\n'),
        });
    }
    if (!ignoreCharacterFields) {
        const groupDepthPrompts = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getGroupDepthPrompts)(_config_js__WEBPACK_IMPORTED_MODULE_0__.selected_group, Number(_config_js__WEBPACK_IMPORTED_MODULE_0__.this_chid));
        if (_config_js__WEBPACK_IMPORTED_MODULE_0__.selected_group && Array.isArray(groupDepthPrompts) && groupDepthPrompts.length > 0) {
            groupDepthPrompts
                .filter((value) => value.text)
                .forEach((value, _index) => {
                const messages = promptBuilder.getMessages();
                promptBuilder.insert(messages.length - value.depth, { role: value.role, content: value.text });
            });
        }
        else {
            const depthPromptText = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_baseChatReplace)(context.characters[_config_js__WEBPACK_IMPORTED_MODULE_0__.this_chid]?.data?.extensions?.depth_prompt?.prompt?.trim(), _config_js__WEBPACK_IMPORTED_MODULE_0__.name1, _config_js__WEBPACK_IMPORTED_MODULE_0__.name2) || '';
            if (depthPromptText) {
                const depthPromptDepth = _config_js__WEBPACK_IMPORTED_MODULE_0__.depth_prompt_depth_default;
                const depthPromptRole = context.characters[_config_js__WEBPACK_IMPORTED_MODULE_0__.this_chid]?.data?.extensions?.depth_prompt?.role ?? _config_js__WEBPACK_IMPORTED_MODULE_0__.depth_prompt_role_default;
                const messages = promptBuilder.getMessages();
                promptBuilder.insert(messages.length - depthPromptDepth, {
                    role: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptRole)(depthPromptRole),
                    content: depthPromptText,
                });
            }
        }
    }
    let authorNoteIndex = -1;
    if (!ignoreAuthorNote) {
        // TODO: We should respect interval and world info scanning
        const authorNote = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getAuthorNote)();
        if (authorNote.prompt) {
            authorNote.prompt = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_baseChatReplace)(authorNote.prompt, _config_js__WEBPACK_IMPORTED_MODULE_0__.name1, _config_js__WEBPACK_IMPORTED_MODULE_0__.name2);
            const message = { role: (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getPromptRole)(authorNote.role), content: authorNote.prompt };
            switch (authorNote.position) {
                case _config_js__WEBPACK_IMPORTED_MODULE_0__.extension_prompt_types.IN_PROMPT: // After first message
                    promptBuilder.insert(1, message);
                    authorNoteIndex = 1;
                    break;
                case _config_js__WEBPACK_IMPORTED_MODULE_0__.extension_prompt_types.IN_CHAT: // Depth + role in chat
                    const messages = promptBuilder.getMessages();
                    authorNoteIndex = messages.length - authorNote.depth;
                    promptBuilder.insert(authorNoteIndex, message);
                    break;
                case _config_js__WEBPACK_IMPORTED_MODULE_0__.extension_prompt_types.BEFORE_PROMPT: // Before first message
                    promptBuilder.addFront(message);
                    authorNoteIndex = 0;
                    break;
                default:
                    break;
            }
        }
    }
    // Add world info to author note
    if (authorNoteIndex >= 0) {
        if (anBefore.length > 0) {
            promptBuilder.insert(authorNoteIndex, { role: 'system', content: anBefore.join('\n') });
            authorNoteIndex++;
        }
        if (anAfter.length > 0) {
            promptBuilder.insert(authorNoteIndex + 1, { role: 'system', content: anAfter.join('\n') });
        }
    }
    return { result: promptBuilder.getMessages(), warnings };
}
//# sourceMappingURL=prompt-builder.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/sortable-list.js":
/*!******************************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/sortable-list.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSortableList: () => (/* binding */ buildSortableList)
/* harmony export */ });
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");

// --- Component Builder ---
function buildSortableList(selector, options = {}) {
    const container = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!container) {
        throw new Error(`Could not find container: ${selector}`);
    }
    // --- Options & Defaults ---
    const showToggleButton = options.showToggleButton ?? false;
    const showDeleteButton = options.showDeleteButton ?? false;
    const showSelectInput = options.showSelectInput ?? false;
    let internalList = [...(options.initialList || [])];
    let sortableInstance = null;
    // --- Clear Container & Apply Base Styles ---
    container.innerHTML = '';
    container.classList.add('sortable-list-container');
    const listElement = document.createElement('ul');
    listElement.className = 'sortable-list';
    Object.assign(listElement.style, {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    });
    container.appendChild(listElement);
    // --- Helper Functions ---
    const getItemData = (itemId) => {
        return internalList.find((item) => item.id === itemId);
    };
    const getItemElement = (itemId) => {
        return listElement.querySelector(`li[data-id="${itemId}"]`);
    };
    // Function to create the DOM for a single list item
    const createItemElement = (itemData) => {
        const listItem = document.createElement('li');
        listItem.className = 'sortable-list-item';
        listItem.dataset.id = itemData.id;
        Object.assign(listItem.style, {
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            border: '1px solid var(--SmartThemeBorderColor, #ccc)',
            color: 'var(--SmartThemeBodyColor, #333)',
            marginBottom: '2px',
        });
        // 1. Drag Handle
        const dragHandle = document.createElement('span');
        dragHandle.className = 'drag-handle';
        dragHandle.innerHTML = '<i class="fas fa-bars"></i>';
        Object.assign(dragHandle.style, {
            cursor: 'grab',
            marginRight: '10px',
            color: 'var(--SmartThemeBodyColor, #555)',
            flexShrink: '0',
        });
        listItem.appendChild(dragHandle);
        // 2. Label Container
        const labelContainer = document.createElement('span');
        labelContainer.className = 'item-label';
        labelContainer.style.flexGrow = '1';
        labelContainer.style.marginRight = '10px';
        labelContainer.style.overflow = 'hidden';
        labelContainer.style.textOverflow = 'ellipsis';
        labelContainer.style.whiteSpace = 'nowrap';
        if (options.renderLabel) {
            options.renderLabel(labelContainer, itemData);
        }
        else {
            labelContainer.textContent = itemData.label;
        }
        listItem.appendChild(labelContainer);
        const defaultRightMargin = '10px';
        // 3. Select Input
        const shouldShowSelectForItem = itemData.showSelect ?? true;
        const canSelect = itemData.canSelect ?? true;
        let selectElement = null;
        if (showSelectInput && shouldShowSelectForItem) {
            if (canSelect) {
                selectElement = document.createElement('select');
                selectElement.className = 'select-input text_pole';
                selectElement.style.marginRight = defaultRightMargin;
                selectElement.style.flexShrink = '0';
                selectElement.style.width = 'unset';
                if (itemData.selectOptions && itemData.selectOptions.length > 0) {
                    itemData.selectOptions.forEach((opt) => {
                        const optionElement = document.createElement('option');
                        optionElement.value = opt.value;
                        optionElement.textContent = opt.label;
                        if (opt.value === itemData.selectValue) {
                            optionElement.selected = true;
                        }
                        selectElement.appendChild(optionElement);
                    });
                }
                else {
                    // Add a default placeholder option if no options provided
                    const placeholderOption = document.createElement('option');
                    placeholderOption.textContent = '--'; // Simple placeholder
                    placeholderOption.disabled = true;
                    placeholderOption.selected = true; // Show placeholder initially
                    selectElement.appendChild(placeholderOption);
                    selectElement.disabled = true; // Also disable the select itself
                }
                selectElement.addEventListener('change', (e) => {
                    e.stopPropagation(); // Prevent interference with drag/other clicks
                    handleSelectChange(itemData.id, e);
                });
                listItem.appendChild(selectElement);
            }
            else {
                // Render simple placeholder span for spacing if select is disabled for item
                const placeholder = document.createElement('span');
                placeholder.style.marginRight = defaultRightMargin;
                // Add width/content if text_pole doesn't provide enough default spacing
                // placeholder.style.width = '...'; // Example if needed
                placeholder.style.display = 'inline-block';
                placeholder.style.flexShrink = '0';
                listItem.appendChild(placeholder);
            }
        }
        else if (showSelectInput && !shouldShowSelectForItem) {
            // Render placeholder if globally enabled but hidden for this item
            const placeholder = document.createElement('span');
            placeholder.style.marginRight = defaultRightMargin;
            placeholder.style.display = 'inline-block';
            placeholder.style.flexShrink = '0';
            listItem.appendChild(placeholder);
        }
        // 4. Toggle Button (Optional)
        const canToggle = itemData.canToggle ?? true;
        if (showToggleButton && canToggle) {
            const toggleButtonElement = document.createElement('span');
            toggleButtonElement.className = 'toggle-button';
            toggleButtonElement.innerHTML = `<i class="fas ${itemData.enabled ? 'fa-toggle-on' : 'fa-toggle-off'}"></i>`;
            Object.assign(toggleButtonElement.style, {
                cursor: 'pointer',
                marginRight: defaultRightMargin,
                fontSize: '1.2em',
                color: itemData.enabled ? 'var(--success-color, #4CAF50)' : 'var(--SmartThemeBodyColor, #555)',
                flexShrink: '0', // Prevent shrinking
                // Optional: width: '24px', textAlign: 'center' for alignment
            });
            toggleButtonElement.addEventListener('click', (e) => {
                e.stopPropagation();
                handleToggle(itemData.id);
            });
            listItem.appendChild(toggleButtonElement);
        }
        else if (showToggleButton && !canToggle) {
            const placeholder = document.createElement('span');
            placeholder.style.marginRight = defaultRightMargin;
            // placeholder.style.width = '24px'; // Example if needed for alignment
            placeholder.style.display = 'inline-block';
            placeholder.style.flexShrink = '0';
            listItem.appendChild(placeholder);
        }
        // 5. Delete Button (Optional)
        const canDelete = itemData.canDelete ?? true;
        if (showDeleteButton && canDelete) {
            const deleteButtonElement = document.createElement('span');
            deleteButtonElement.className = 'delete-button';
            deleteButtonElement.innerHTML = '<i class="fas fa-trash-can"></i>';
            Object.assign(deleteButtonElement.style, {
                cursor: 'pointer',
                color: 'var(--error-color, #f44336)',
                // No margin needed if it's the last element
                flexShrink: '0', // Prevent shrinking
                // Optional: width: '18px', textAlign: 'center' for alignment
            });
            deleteButtonElement.addEventListener('click', (e) => {
                e.stopPropagation();
                handleDelete(itemData.id);
            });
            listItem.appendChild(deleteButtonElement);
        }
        else if (showDeleteButton && !canDelete) {
            const placeholder = document.createElement('span');
            // No margin needed if it's the last element
            // placeholder.style.width = '18px'; // Example if needed for alignment
            placeholder.style.display = 'inline-block';
            placeholder.style.flexShrink = '0';
            listItem.appendChild(placeholder);
        }
        // Apply enabled/disabled visual state to the whole item
        if (showToggleButton) {
            listItem.style.opacity = itemData.enabled ? '1' : '0.6';
        }
        return listItem;
    };
    // Function to render the entire list
    const renderList = () => {
        listElement.innerHTML = '';
        internalList.forEach((itemData) => {
            const itemElement = createItemElement(itemData);
            listElement.appendChild(itemElement);
        });
    };
    // Function to update a single item's visuals
    const updateItemVisuals = (itemId, updatedFields = {}) => {
        const itemData = getItemData(itemId);
        const itemElement = getItemElement(itemId);
        if (!itemData || !itemElement)
            return;
        // Determine if a full re-render of the item is safer/required
        const requiresFullReRender = ('label' in updatedFields && options.renderLabel) ||
            'selectOptions' in updatedFields ||
            'showSelect' in updatedFields ||
            'canSelect' in updatedFields ||
            'canToggle' in updatedFields ||
            'canDelete' in updatedFields;
        if (requiresFullReRender) {
            const newItemElement = createItemElement(itemData);
            itemElement.replaceWith(newItemElement);
            return;
        }
        // --- Update specific parts ---
        if ('label' in updatedFields && !options.renderLabel) {
            const labelEl = itemElement.querySelector('.item-label');
            if (labelEl)
                labelEl.textContent = itemData.label;
        }
        if ('selectValue' in updatedFields && showSelectInput) {
            const selectEl = itemElement.querySelector('.select-input');
            if (selectEl) {
                // Ensure value exists, fall back to empty string if null/undefined
                selectEl.value = itemData.selectValue ?? '';
                // If the new value isn't actually an option, the browser might select nothing
                // or the first option. Consider adding validation or handling here if needed.
            }
        }
        if ('enabled' in updatedFields && showToggleButton && (itemData.canToggle ?? true)) {
            const toggleIcon = itemElement.querySelector('.toggle-button i');
            const toggleButtonSpan = itemElement.querySelector('.toggle-button');
            if (toggleIcon) {
                toggleIcon.className = `fas ${itemData.enabled ? 'fa-toggle-on' : 'fa-toggle-off'}`;
            }
            if (toggleButtonSpan) {
                toggleButtonSpan.style.color = itemData.enabled
                    ? 'var(--success-color, #4CAF50)'
                    : 'var(--SmartThemeBodyColor, #555)';
            }
        }
        if ('enabled' in updatedFields && showToggleButton) {
            itemElement.style.opacity = itemData.enabled ? '1' : '0.6';
            const selectEl = itemElement.querySelector('.select-input');
            if (selectEl) {
                selectEl.disabled = !itemData.enabled || !(itemData.canSelect ?? true);
            }
        }
    };
    // --- Event Handlers ---
    const handleToggle = async (itemId) => {
        const itemIndex = internalList.findIndex((item) => item.id === itemId);
        if (itemIndex === -1 || !(internalList[itemIndex].canToggle ?? true))
            return;
        const item = internalList[itemIndex];
        const newState = !item.enabled;
        if (options.onToggle) {
            try {
                await Promise.resolve(options.onToggle(itemId, newState));
            }
            catch (err) {
                console.error('onToggle callback failed:', err);
                return;
            }
        }
        const updates = { enabled: newState };
        internalList[itemIndex] = { ...item, ...updates };
        updateItemVisuals(itemId, updates);
    };
    const handleDelete = async (itemId) => {
        const itemIndex = internalList.findIndex((item) => item.id === itemId);
        if (itemIndex === -1 || !(internalList[itemIndex].canDelete ?? true))
            return;
        let shouldRemove = true;
        if (options.onDelete) {
            try {
                shouldRemove = await Promise.resolve(options.onDelete(itemId));
            }
            catch (err) {
                console.error('onDelete callback failed:', err);
                shouldRemove = false;
            }
        }
        if (shouldRemove) {
            internalList.splice(itemIndex, 1);
            getItemElement(itemId)?.remove();
        }
    };
    const handleSelectChange = async (itemId, event) => {
        const itemIndex = internalList.findIndex((item) => item.id === itemId);
        if (itemIndex === -1 || !(internalList[itemIndex].canSelect ?? true))
            return;
        const item = internalList[itemIndex];
        const selectElement = event.target;
        const newValue = selectElement.value;
        if (options.onSelectChange) {
            try {
                await Promise.resolve(options.onSelectChange(itemId, newValue));
            }
            catch (err) {
                console.error('onSelectChange callback failed:', err);
                selectElement.value = item.selectValue ?? ''; // Revert UI
                return;
            }
        }
        const updates = { selectValue: newValue };
        internalList[itemIndex] = { ...item, ...updates };
        // Don't need updateItemVisuals here unless select change affects other parts visually
    };
    // --- SortableJS Initialization ---
    const initializeSortable = () => {
        if (sortableInstance) {
            sortableInstance.destroy();
        }
        const sortableOptions = {
            handle: '.drag-handle',
            animation: 150,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            filter: '.select-input, .toggle-button, .delete-button', // Prevent drag on controls
            preventOnFilter: false,
            onEnd: (event) => {
                const { oldIndex, newIndex } = event;
                if (oldIndex === undefined || newIndex === undefined || oldIndex === newIndex) {
                    return;
                }
                // Reorder internalList based on the final DOM order
                const currentIdsOrder = Array.from(listElement.children)
                    .map((el) => el.dataset.id)
                    .filter((id) => id !== undefined);
                internalList.sort((a, b) => {
                    const indexA = currentIdsOrder.indexOf(a.id);
                    const indexB = currentIdsOrder.indexOf(b.id);
                    return indexA - indexB;
                });
                const newOrderIds = internalList.map((listItemData) => listItemData.id);
                if (options.onOrderChange) {
                    Promise.resolve(options.onOrderChange(newOrderIds)).catch((err) => console.error('onOrderChange callback failed:', err));
                }
            },
            ...(options.sortableJsOptions || {}),
        };
        sortableInstance = sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"].create(listElement, sortableOptions);
    };
    // --- Initial Render & Setup ---
    renderList();
    initializeSortable();
    // --- Public API ---
    const api = {
        /** Gets the current list of items with their data. */
        getList: () => [...internalList],
        /** Gets the current order of item IDs. */
        getOrder: () => internalList.map((item) => item.id),
        /** Adds a new item to the list. */
        addItem: (itemData, index) => {
            // Prevent duplicate IDs
            if (internalList.some((item) => item.id === itemData.id)) {
                console.warn(`SortableList: Item with ID "${itemData.id}" already exists. Skipping add.`);
                return;
            }
            const effectiveIndex = index === undefined || index < 0 || index > internalList.length ? internalList.length : index;
            internalList.splice(effectiveIndex, 0, itemData);
            const newItemElement = createItemElement(itemData);
            const elementAtIndex = listElement.children[effectiveIndex];
            listElement.insertBefore(newItemElement, elementAtIndex ?? null); // Handles appending if index is out of bounds
            // SortableJS usually adapts, re-init rarely needed for adds/removes unless issues arise
        },
        removeItem: (itemId) => {
            const itemIndex = internalList.findIndex((item) => item.id === itemId);
            if (itemIndex > -1) {
                internalList.splice(itemIndex, 1);
                getItemElement(itemId)?.remove();
            }
        },
        /** Updates the data and visuals for an existing item. */
        updateItem: (itemId, updates) => {
            const itemIndex = internalList.findIndex((item) => item.id === itemId);
            if (itemIndex > -1) {
                const currentItem = internalList[itemIndex];
                if ('id' in updates) {
                    console.warn('SortableList: Cannot change item ID via updateItem.');
                    delete updates.id;
                }
                internalList[itemIndex] = { ...currentItem, ...updates };
                updateItemVisuals(itemId, updates);
            }
        },
        /** Replaces the entire list content. */
        setList: (newListData) => {
            internalList = [...newListData];
            renderList();
            initializeSortable();
        },
        /** Destroys the SortableJS instance and removes elements. */
        destroy: () => {
            if (sortableInstance) {
                sortableInstance.destroy();
                sortableInstance = null;
            }
            container.innerHTML = '';
            container.classList.remove('sortable-list-container');
            internalList = [];
        },
        /** Gets the underlying SortableJS instance for advanced manipulation (use with caution). */
        getSortableInstance: () => sortableInstance,
    };
    return api;
}
//# sourceMappingURL=sortable-list.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/tokenizer.js":
/*!**************************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/tokenizer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tokenizer: () => (/* binding */ Tokenizer)
/* harmony export */ });
class Tokenizer {
    /**
     * Encodes a string into a sequence of tokens using a simple heuristic.
     * This is a placeholder for a real tokenizer.
     */
    encode(text) {
        // Simple heuristic: 1 token is roughly 4 characters
        const estimatedTokens = Math.ceil(text.length / 4);
        return new Array(estimatedTokens).fill(' ');
    }
    /**
     * Decodes a sequence of tokens back into a string.
     * This is a placeholder and doesn't actually decode.
     */
    decode(tokens) {
        return tokens.join('');
    }
}
//# sourceMappingURL=tokenizer.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/types/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/types/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventNames: () => (/* binding */ EventNames)
/* harmony export */ });
var EventNames;
(function (EventNames) {
    EventNames["APP_READY"] = "app_ready";
    EventNames["EXTRAS_CONNECTED"] = "extras_connected";
    EventNames["MESSAGE_SWIPED"] = "message_swiped";
    EventNames["MESSAGE_SENT"] = "message_sent";
    EventNames["MESSAGE_RECEIVED"] = "message_received";
    EventNames["MESSAGE_EDITED"] = "message_edited";
    EventNames["MESSAGE_DELETED"] = "message_deleted";
    EventNames["MESSAGE_UPDATED"] = "message_updated";
    EventNames["MESSAGE_FILE_EMBEDDED"] = "message_file_embedded";
    EventNames["MORE_MESSAGES_LOADED"] = "more_messages_loaded";
    EventNames["IMPERSONATE_READY"] = "impersonate_ready";
    EventNames["CHAT_CHANGED"] = "chat_id_changed";
    EventNames["GENERATION_AFTER_COMMANDS"] = "GENERATION_AFTER_COMMANDS";
    EventNames["GENERATION_STARTED"] = "generation_started";
    EventNames["GENERATION_STOPPED"] = "generation_stopped";
    EventNames["GENERATION_ENDED"] = "generation_ended";
    EventNames["EXTENSIONS_FIRST_LOAD"] = "extensions_first_load";
    EventNames["EXTENSION_SETTINGS_LOADED"] = "extension_settings_loaded";
    EventNames["SETTINGS_LOADED"] = "settings_loaded";
    EventNames["SETTINGS_UPDATED"] = "settings_updated";
    EventNames["GROUP_UPDATED"] = "group_updated";
    EventNames["MOVABLE_PANELS_RESET"] = "movable_panels_reset";
    EventNames["SETTINGS_LOADED_BEFORE"] = "settings_loaded_before";
    EventNames["SETTINGS_LOADED_AFTER"] = "settings_loaded_after";
    EventNames["CHATCOMPLETION_SOURCE_CHANGED"] = "chatcompletion_source_changed";
    EventNames["CHATCOMPLETION_MODEL_CHANGED"] = "chatcompletion_model_changed";
    EventNames["OAI_PRESET_CHANGED_BEFORE"] = "oai_preset_changed_before";
    EventNames["OAI_PRESET_CHANGED_AFTER"] = "oai_preset_changed_after";
    EventNames["OAI_PRESET_EXPORT_READY"] = "oai_preset_export_ready";
    EventNames["OAI_PRESET_IMPORT_READY"] = "oai_preset_import_ready";
    EventNames["WORLDINFO_SETTINGS_UPDATED"] = "worldinfo_settings_updated";
    EventNames["WORLDINFO_UPDATED"] = "worldinfo_updated";
    EventNames["CHARACTER_EDITED"] = "character_edited";
    EventNames["CHARACTER_PAGE_LOADED"] = "character_page_loaded";
    EventNames["CHARACTER_GROUP_OVERLAY_STATE_CHANGE_BEFORE"] = "character_group_overlay_state_change_before";
    EventNames["CHARACTER_GROUP_OVERLAY_STATE_CHANGE_AFTER"] = "character_group_overlay_state_change_after";
    EventNames["USER_MESSAGE_RENDERED"] = "user_message_rendered";
    EventNames["CHARACTER_MESSAGE_RENDERED"] = "character_message_rendered";
    EventNames["FORCE_SET_BACKGROUND"] = "force_set_background";
    EventNames["CHAT_DELETED"] = "chat_deleted";
    EventNames["CHAT_CREATED"] = "chat_created";
    EventNames["GROUP_CHAT_DELETED"] = "group_chat_deleted";
    EventNames["GROUP_CHAT_CREATED"] = "group_chat_created";
    EventNames["GENERATE_BEFORE_COMBINE_PROMPTS"] = "generate_before_combine_prompts";
    EventNames["GENERATE_AFTER_COMBINE_PROMPTS"] = "generate_after_combine_prompts";
    EventNames["GENERATE_AFTER_DATA"] = "generate_after_data";
    EventNames["GROUP_MEMBER_DRAFTED"] = "group_member_drafted";
    EventNames["GROUP_WRAPPER_STARTED"] = "group_wrapper_started";
    EventNames["GROUP_WRAPPER_FINISHED"] = "group_wrapper_finished";
    EventNames["WORLD_INFO_ACTIVATED"] = "world_info_activated";
    EventNames["TEXT_COMPLETION_SETTINGS_READY"] = "text_completion_settings_ready";
    EventNames["CHAT_COMPLETION_SETTINGS_READY"] = "chat_completion_settings_ready";
    EventNames["CHAT_COMPLETION_PROMPT_READY"] = "chat_completion_prompt_ready";
    EventNames["CHARACTER_FIRST_MESSAGE_SELECTED"] = "character_first_message_selected";
    // TODO: Naming convention is inconsistent with other events
    EventNames["CHARACTER_DELETED"] = "characterDeleted";
    EventNames["CHARACTER_DUPLICATED"] = "character_duplicated";
    EventNames["CHARACTER_RENAMED"] = "character_renamed";
    /** @deprecated The event is aliased to STREAM_TOKEN_RECEIVED. */
    EventNames["SMOOTH_STREAM_TOKEN_RECEIVED"] = "stream_token_received";
    EventNames["STREAM_TOKEN_RECEIVED"] = "stream_token_received";
    EventNames["STREAM_REASONING_DONE"] = "stream_reasoning_done";
    EventNames["FILE_ATTACHMENT_DELETED"] = "file_attachment_deleted";
    EventNames["WORLDINFO_FORCE_ACTIVATE"] = "worldinfo_force_activate";
    EventNames["OPEN_CHARACTER_LIBRARY"] = "open_character_library";
    EventNames["ONLINE_STATUS_CHANGED"] = "online_status_changed";
    EventNames["IMAGE_SWIPED"] = "image_swiped";
    EventNames["CONNECTION_PROFILE_LOADED"] = "connection_profile_loaded";
    EventNames["TOOL_CALLS_PERFORMED"] = "tool_calls_performed";
    EventNames["TOOL_CALLS_RENDERED"] = "tool_calls_rendered";
})(EventNames || (EventNames = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/sillytavern-utils-lib/dist/world-info-utils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sillytavern-utils-lib/dist/world-info-utils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyWorldInfoEntry: () => (/* binding */ applyWorldInfoEntry),
/* harmony export */   getActiveWorldInfo: () => (/* binding */ getActiveWorldInfo)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./node_modules/sillytavern-utils-lib/dist/config.js");

/**
 * @returns Entries by world name. <worldName, entries[]>
 */
async function getActiveWorldInfo(include, targetCharacterIndex) {
    function includedType(type) {
        return include.includes('all') || include.includes(type);
    }
    const context = SillyTavern.getContext();
    let entries = {};
    const isGlobal = includedType('global');
    if (isGlobal && _config_js__WEBPACK_IMPORTED_MODULE_0__.selected_world_info?.length) {
        for (const worldName of _config_js__WEBPACK_IMPORTED_MODULE_0__.selected_world_info) {
            const worldInfo = await context.loadWorldInfo(worldName);
            if (!worldInfo) {
                continue;
            }
            if (!entries[worldName]) {
                entries[worldName] = [];
            }
            Object.values(worldInfo.entries).forEach((entry) => {
                entries[worldName].push(entry);
            });
        }
    }
    const isChat = includedType('chat');
    if (isChat) {
        const worldName = context.chatMetadata[_config_js__WEBPACK_IMPORTED_MODULE_0__.WI_METADATA_KEY];
        if (worldName && !entries[worldName]) {
            entries[worldName] = [];
            const worldInfo = await context.loadWorldInfo(worldName);
            if (worldInfo) {
                Object.values(worldInfo.entries).forEach((entry) => {
                    entries[worldName].push(entry);
                });
            }
        }
    }
    const isCharacter = includedType('character');
    if (isCharacter && targetCharacterIndex) {
        const character = context.characters[targetCharacterIndex];
        let worldsToSearch = new Set();
        const baseWorldName = character?.data?.extensions?.world;
        if (baseWorldName) {
            worldsToSearch.add(baseWorldName);
        }
        const fileName = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_getCharaFilename)(targetCharacterIndex);
        const extraCharLore = _config_js__WEBPACK_IMPORTED_MODULE_0__.world_info.charLore?.find((e) => e.name === fileName);
        if (extraCharLore) {
            worldsToSearch = new Set([...worldsToSearch, ...extraCharLore.extraBooks]);
        }
        for (const worldName of worldsToSearch) {
            const worldInfo = await context.loadWorldInfo(worldName);
            if (!worldInfo || entries[worldName]) {
                continue;
            }
            entries[worldName] = [];
            Object.values(worldInfo.entries).forEach((entry) => {
                entries[worldName].push(entry);
            });
        }
    }
    const isPersona = includedType('persona');
    if (isPersona) {
        const worldName = context.powerUserSettings.persona_description_lorebook;
        if (worldName && !entries[worldName]) {
            entries[worldName] = [];
            const worldInfo = await context.loadWorldInfo(worldName);
            if (worldInfo) {
                Object.values(worldInfo.entries).forEach((entry) => {
                    entries[worldName].push(entry);
                });
            }
        }
    }
    return entries;
}
/**
 * @throws {Error} if entry/world not found
 */
async function applyWorldInfoEntry({ entry, selectedWorldName, skipSave = false, skipReload = false, operation = 'auto', }) {
    const context = SillyTavern.getContext();
    const worldInfo = await context.loadWorldInfo(selectedWorldName);
    if (!worldInfo) {
        throw new Error('Failed to load world info');
    }
    const values = Object.values(worldInfo.entries);
    const lastEntry = values.length > 0 ? values[values.length - 1] : undefined;
    // Find existing entry with the same key if needed
    let targetEntry;
    if (operation === 'update' || operation === 'auto') {
        const existingEntry = Object.values(worldInfo.entries).find((e) => e.uid === entry.uid);
        if (existingEntry) {
            if (operation === 'auto') {
                // In auto mode, update existing entry
                targetEntry = existingEntry;
            }
            else if (operation === 'update') {
                targetEntry = existingEntry;
            }
        }
        else if (operation === 'update') {
            throw new Error('Entry not found for update operation');
        }
    }
    const operationResult = targetEntry ? 'update' : 'add';
    // Create new entry if needed
    if (!targetEntry) {
        targetEntry = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.st_createWorldInfoEntry)(selectedWorldName, worldInfo);
        if (!targetEntry) {
            throw new Error('Failed to create entry');
        }
        if (lastEntry) {
            const newId = targetEntry.uid;
            Object.assign(targetEntry, lastEntry);
            targetEntry.uid = newId;
            targetEntry;
        }
    }
    // Update entry properties
    targetEntry.key = entry.key;
    targetEntry.content = entry.content;
    targetEntry.comment = entry.comment;
    // Save and update UI only if not skipping
    if (!skipSave) {
        await context.saveWorldInfo(selectedWorldName, worldInfo);
    }
    if (!skipReload) {
        context.reloadWorldInfoEditor(selectedWorldName, true);
    }
    return {
        entry: targetEntry,
        operation: operationResult,
    };
}
//# sourceMappingURL=world-info-utils.js.map

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var sillytavern_utils_lib_1 = __webpack_require__(/*! sillytavern-utils-lib */ "./node_modules/sillytavern-utils-lib/dist/index.js");
var config_1 = __webpack_require__(/*! sillytavern-utils-lib/config */ "./node_modules/sillytavern-utils-lib/dist/config.js");
var types_1 = __webpack_require__(/*! sillytavern-utils-lib/types */ "./node_modules/sillytavern-utils-lib/dist/types/index.js");
var extensionName = 'SillyTavern-Roadway';
var VERSION = '0.4.0';
var FORMAT_VERSION = 'F_1.0';
var globalContext = SillyTavern.getContext();
var KEYS = {
  EXTENSION: 'roadway',
  EXTRA: {
    TARGET: 'roadway_target_chat',
    RAW_CONTENT: 'roadway_raw_content',
    OPTIONS: 'roadway_options'
  }
};
var DEFAULT_IMPERSONATE = "Your task this time is to write your response as if you were {{user}}, impersonating their style. Use {{user}}'s dialogue and actions so far as a guideline for how they would likely act. Don't ever write as {{char}}. Only talk and act as {{user}}. This is what {{user}}'s focus:\n\n{{roadwaySelected}}";
var DEFAULT_PROMPT = "You are an AI brainstorming partner, helping to create immersive and surprising roleplaying experiences, **building upon the established context from our previous conversation.** Your task is to generate an *unpredictable* and *engaging* list of options for **{{user}}**, specifically tailored to their character, the world, and the current situation as established in our previous dialogue. These should be framed as possible actions that **{{user}}** *could* take.\n\nOutput ONLY a numbered list of possible actions. Each action should be a clear, actionable, concise, and *creative* sentence written in plain text suggesting an action **{{user}}** can perform in the game.\n\nPrioritize *varied* actions that span multiple domains:\n\n{Observation/Investigation; Dialogue/Persuasion; Stealth/Intrigue; Combat/Conflict; Crafting/Repair; Knowledge/Lore; Movement/Traversal; Deception/Manipulation; Performance/Entertainment; Technical/Mechanical}.\n\nAvoid obvious or repetitive actions **that {{user}} has already explored or are contrary to the established character/world.** Push the boundaries of the situation. Challenge **{{user}}'s** expectations. Do not include greetings, farewells, polite thanks, or options that break character. Generate *exactly* 6 actions. The actions must be written in plain text.\n\nHere are a few example actions to inspire creativity:\n\n1. Attempt to communicate with the forest creatures to learn the location of hidden trails.\n2. Bribe the corrupt city guard with a song and a dance.\n3. Stage a fake ambush to draw out a hidden enemy.";
var DEFAULT_SETTINGS = {
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
    "default": {
      content: DEFAULT_PROMPT,
      extractionStrategy: 'bullet',
      impersonate: DEFAULT_IMPERSONATE
    }
  }
};
var settingsManager = new sillytavern_utils_lib_1.ExtensionSettingsManager(KEYS.EXTENSION, DEFAULT_SETTINGS);
function handleUIChanges() {
  return _handleUIChanges.apply(this, arguments);
}
function _handleUIChanges() {
  _handleUIChanges = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var _settings$promptPrese7, _settings$promptPrese8;
    var settingsHtml, settingsContainer, settings, promptElement, extractionStrategyElement, impersonateSection, impersonateElement, _ref4, select, updateExtractionStrategy, maxContextTypeElement, maxContextValueElement, maxContextCustomDiv, maxResponseTokenElement, autoTriggerElement, autoOpenElement, showUseActionElement, autoSubmitUseActionElement, messageRoleElement, impersonateApiElement, impersonateProfileSection, roadwayButton, pendingRequests, formatResponse;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          formatResponse = function _formatResponse(response, options) {
            var classPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var detailsElement = document.createElement('details');
            var summaryElement = document.createElement('summary');
            summaryElement.textContent = 'Roadway';
            detailsElement.appendChild(summaryElement);
            if (options !== null && options !== void 0 && options.length) {
              var optionsDiv = document.createElement('div');
              optionsDiv.classList.add("".concat(classPrefix, "roadway_options"));
              options.forEach(function (option, _index) {
                var optionDiv = document.createElement('div');
                optionDiv.classList.add("".concat(classPrefix, "roadway_option"));
                var actionsDiv = document.createElement('div');
                actionsDiv.classList.add("".concat(classPrefix, "option_actions"));
                // Create impersonate button
                var impersonateButton = document.createElement('div');
                impersonateButton.classList.add("".concat(classPrefix, "action_button"), "".concat(classPrefix, "impersonate_action"));
                impersonateButton.innerHTML = '✍️';
                impersonateButton.title = 'Impersonate';
                // Create edit button
                var editButton = document.createElement('div');
                editButton.classList.add("".concat(classPrefix, "action_button"), "".concat(classPrefix, "edit_action"));
                editButton.innerHTML = '✏️';
                editButton.title = 'Edit';
                // Create use button (only if enabled in settings)
                var settings = settingsManager.getSettings();
                var useButton = document.createElement('div');
                useButton.classList.add("".concat(classPrefix, "action_button"), "".concat(classPrefix, "use_action"));
                useButton.innerHTML = '▶️';
                useButton.title = 'Use option';
                useButton.style.display = settings.showUseActionIcon ? 'inline-block' : 'none';
                actionsDiv.appendChild(useButton);
                actionsDiv.appendChild(impersonateButton);
                actionsDiv.appendChild(editButton);
                var contentDiv = document.createElement('div');
                contentDiv.classList.add("".concat(classPrefix, "option_content"));
                contentDiv.textContent = option;
                optionDiv.appendChild(actionsDiv);
                optionDiv.appendChild(contentDiv);
                optionsDiv.appendChild(optionDiv);
              });
              detailsElement.appendChild(optionsDiv);
            } else {
              var preElement = document.createElement('pre');
              preElement.classList.add("".concat(classPrefix, "roadway_pre"));
              preElement.textContent = response;
              detailsElement.appendChild(preElement);
            }
            return detailsElement.outerHTML;
          };
          updateExtractionStrategy = function _updateExtractionStra() {
            var _preset$impersonate;
            var preset = settings.promptPresets[settings.promptPreset];
            extractionStrategyElement.val(preset === null || preset === void 0 ? void 0 : preset.extractionStrategy);
            var isNone = (preset === null || preset === void 0 ? void 0 : preset.extractionStrategy) === 'none';
            impersonateSection.toggle(!isNone);
            impersonateElement.val((_preset$impersonate = preset === null || preset === void 0 ? void 0 : preset.impersonate) !== null && _preset$impersonate !== void 0 ? _preset$impersonate : '');
          };
          _context6.next = 4;
          return globalContext.renderExtensionTemplateAsync("third-party/".concat(extensionName), 'templates/settings');
        case 4:
          settingsHtml = _context6.sent;
          $('#extensions_settings').append(settingsHtml);
          settingsContainer = $('.roadway_settings');
          settings = settingsManager.getSettings();
          globalContext.ConnectionManagerRequestService.handleDropdown('.roadway_settings .connection_profile', settings.profileId, function (profile) {
            var _profile$id;
            settings.profileId = (_profile$id = profile === null || profile === void 0 ? void 0 : profile.id) !== null && _profile$id !== void 0 ? _profile$id : '';
            settingsManager.saveSettings();
          });
          promptElement = settingsContainer.find('textarea.prompt');
          extractionStrategyElement = settingsContainer.find('select.extraction_strategy');
          impersonateSection = settingsContainer.find('.impersonate_section');
          impersonateElement = settingsContainer.find('textarea.impersonate');
          _ref4 = (0, sillytavern_utils_lib_1.buildPresetSelect)('.roadway_settings select.prompt', {
            initialValue: settings.promptPreset,
            initialList: Object.keys(settings.promptPresets),
            readOnlyValues: ['default'],
            onSelectChange: function () {
              var _onSelectChange = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_previousValue, newValue) {
                var _settings$promptPrese, _settings$promptPrese2, _settings$promptPrese3, _settings$promptPrese4, _settings$promptPrese5, _settings$promptPrese6;
                var newPresetValue;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      newPresetValue = newValue !== null && newValue !== void 0 ? newValue : 'default';
                      settings.promptPreset = newPresetValue;
                      settingsManager.saveSettings();
                      promptElement.val((_settings$promptPrese = (_settings$promptPrese2 = settings.promptPresets[newPresetValue]) === null || _settings$promptPrese2 === void 0 ? void 0 : _settings$promptPrese2.content) !== null && _settings$promptPrese !== void 0 ? _settings$promptPrese : '');
                      extractionStrategyElement.val((_settings$promptPrese3 = settings.promptPresets[newPresetValue]) === null || _settings$promptPrese3 === void 0 ? void 0 : _settings$promptPrese3.extractionStrategy);
                      impersonateElement.val((_settings$promptPrese4 = (_settings$promptPrese5 = settings.promptPresets[newPresetValue]) === null || _settings$promptPrese5 === void 0 ? void 0 : _settings$promptPrese5.impersonate) !== null && _settings$promptPrese4 !== void 0 ? _settings$promptPrese4 : '');
                      impersonateSection.css('display', ((_settings$promptPrese6 = settings.promptPresets[newPresetValue]) === null || _settings$promptPrese6 === void 0 ? void 0 : _settings$promptPrese6.extractionStrategy) === 'none' ? 'none' : 'block');
                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              function onSelectChange(_x, _x2) {
                return _onSelectChange.apply(this, arguments);
              }
              return onSelectChange;
            }(),
            create: {
              onAfterCreate: function onAfterCreate(value) {
                var _currentPreset$conten, _currentPreset$extrac, _currentPreset$impers;
                var currentPreset = settings.promptPresets[settings.promptPreset];
                settings.promptPresets[value] = {
                  content: (_currentPreset$conten = currentPreset === null || currentPreset === void 0 ? void 0 : currentPreset.content) !== null && _currentPreset$conten !== void 0 ? _currentPreset$conten : DEFAULT_PROMPT,
                  extractionStrategy: (_currentPreset$extrac = currentPreset === null || currentPreset === void 0 ? void 0 : currentPreset.extractionStrategy) !== null && _currentPreset$extrac !== void 0 ? _currentPreset$extrac : 'bullet',
                  impersonate: (_currentPreset$impers = currentPreset === null || currentPreset === void 0 ? void 0 : currentPreset.impersonate) !== null && _currentPreset$impers !== void 0 ? _currentPreset$impers : DEFAULT_IMPERSONATE
                };
              }
            },
            rename: {
              onAfterRename: function onAfterRename(previousValue, newValue) {
                settings.promptPresets[newValue] = settings.promptPresets[previousValue];
                delete settings.promptPresets[previousValue];
              }
            },
            "delete": {
              onAfterDelete: function onAfterDelete(value) {
                delete settings.promptPresets[value];
              }
            }
          }), select = _ref4.select;
          promptElement.val((_settings$promptPrese7 = (_settings$promptPrese8 = settings.promptPresets[settings.promptPreset]) === null || _settings$promptPrese8 === void 0 ? void 0 : _settings$promptPrese8.content) !== null && _settings$promptPrese7 !== void 0 ? _settings$promptPrese7 : '');
          promptElement.on('change', function () {
            var template = promptElement.val();
            settings.promptPresets[settings.promptPreset].content = template;
            settingsManager.saveSettings();
          });
          updateExtractionStrategy();
          extractionStrategyElement.on('change', function () {
            var value = $(this).val();
            settings.promptPresets[settings.promptPreset].extractionStrategy = value;
            settingsManager.saveSettings();
            var isNone = value === 'none';
            impersonateSection.toggle(!isNone);
          });
          impersonateElement.on('change', function () {
            settings.promptPresets[settings.promptPreset].impersonate = $(this).val();
            settingsManager.saveSettings();
          });
          // Update extraction strategy when preset changes
          select.addEventListener('change', updateExtractionStrategy);
          settingsContainer.find('.restore_default').on('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var confirm;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return globalContext.Popup.show.confirm('Are you sure you want to restore the default prompt?', 'Restore default');
                case 2:
                  confirm = _context4.sent;
                  if (confirm) {
                    _context4.next = 5;
                    break;
                  }
                  return _context4.abrupt("return");
                case 5:
                  settings.promptPresets['default'] = {
                    content: DEFAULT_PROMPT,
                    extractionStrategy: 'bullet',
                    impersonate: DEFAULT_IMPERSONATE
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
                case 10:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          })));
          maxContextTypeElement = settingsContainer.find('.max_context_type');
          maxContextValueElement = settingsContainer.find('.max_context_value');
          maxContextCustomDiv = settingsContainer.find('.max_context_custom');
          maxContextTypeElement.val(settings.maxContextType);
          maxContextValueElement.val(settings.maxContextValue);
          if (settings.maxContextType === 'custom') {
            maxContextCustomDiv.show();
          }
          maxContextTypeElement.on('change', function () {
            var newType = $(this).val();
            settings.maxContextType = newType;
            settingsManager.saveSettings();
            maxContextCustomDiv.toggle(newType === 'custom');
          });
          maxContextValueElement.on('change', function () {
            settings.maxContextValue = Number($(this).val());
            settingsManager.saveSettings();
          });
          maxResponseTokenElement = settingsContainer.find('.max_response_tokens');
          maxResponseTokenElement.val(settings.maxResponseToken);
          maxResponseTokenElement.on('change', function () {
            settings.maxResponseToken = Number($(this).val());
            settingsManager.saveSettings();
          });
          autoTriggerElement = settingsContainer.find('.auto_trigger');
          autoTriggerElement.prop('checked', settings.autoTrigger);
          autoTriggerElement.on('change', function () {
            settings.autoTrigger = $(this).prop('checked');
            settingsManager.saveSettings();
          });
          autoOpenElement = settingsContainer.find('.auto_open');
          autoOpenElement.prop('checked', settings.autoOpen);
          autoOpenElement.on('change', function () {
            settings.autoOpen = $(this).prop('checked');
            settingsManager.saveSettings();
          });
          showUseActionElement = settingsContainer.find('.show_use_action');
          showUseActionElement.prop('checked', settings.showUseActionIcon);
          showUseActionElement.on('change', function () {
            settings.showUseActionIcon = $(this).prop('checked');
            settingsManager.saveSettings();
            // Update visibility of all existing use buttons
            $('.custom-roadway_options .custom-use_action').toggle(settings.showUseActionIcon);
          });
          autoSubmitUseActionElement = settingsContainer.find('.auto_submit_use_action');
          autoSubmitUseActionElement.prop('checked', settings.autoSubmitUseAction);
          autoSubmitUseActionElement.on('change', function () {
            settings.autoSubmitUseAction = $(this).prop('checked');
            settingsManager.saveSettings();
          });
          messageRoleElement = settingsContainer.find('.message_role');
          messageRoleElement.val(settings.messageRole);
          messageRoleElement.on('change', function () {
            settings.messageRole = $(this).val();
            settingsManager.saveSettings();
          });
          impersonateApiElement = settingsContainer.find('select.impersonate_api');
          impersonateProfileSection = settingsContainer.find('.impersonate_profile_section');
          impersonateApiElement.val(settings.impersonateApi);
          if (settings.impersonateApi === 'profile') {
            impersonateProfileSection.show();
          }
          impersonateApiElement.on('change', function () {
            var value = $(this).val();
            settings.impersonateApi = value;
            settingsManager.saveSettings();
            impersonateProfileSection.toggle(value === 'profile');
          });
          globalContext.ConnectionManagerRequestService.handleDropdown('.roadway_settings .impersonate_connection_profile', settings.impersonateProfileId, function (profile) {
            var _profile$id2;
            settings.impersonateProfileId = (_profile$id2 = profile === null || profile === void 0 ? void 0 : profile.id) !== null && _profile$id2 !== void 0 ? _profile$id2 : '';
            settingsManager.saveSettings();
          });
          roadwayButton = $("<div title=\"Generate Roadway\" class=\"mes_button mes_magic_roadway_button fa-solid fa-road interactable\" tabindex=\"0\"></div>");
          $('#message_template .mes_buttons .extraMesButtons').prepend(roadwayButton);
          pendingRequests = new Set();
          $(document).on('click', '.mes_magic_roadway_button', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _context$extensionSet2;
            var context, messageBlock, targetMessageId, profile, apiMap, targetMessage, characterId, _settings$promptPrese9, _actions, promptResult, messages, rest, actions, extractionStrategy, innerText, existMessage, newMessage, _detailsElement, detailsElement;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  context = SillyTavern.getContext();
                  if (settings.profileId) {
                    _context5.next = 5;
                    break;
                  }
                  _context5.next = 4;
                  return (0, config_1.st_echo)('error', 'Please select a connection profile first in the settings.');
                case 4:
                  return _context5.abrupt("return");
                case 5:
                  if (settings.promptPreset) {
                    _context5.next = 9;
                    break;
                  }
                  _context5.next = 8;
                  return (0, config_1.st_echo)('error', 'Please enter a prompt first in the settings.');
                case 8:
                  return _context5.abrupt("return");
                case 9:
                  messageBlock = $(this).closest('.mes');
                  targetMessageId = Number(messageBlock.attr('mesid'));
                  profile = (_context$extensionSet2 = context.extensionSettings.connectionManager) === null || _context$extensionSet2 === void 0 || (_context$extensionSet2 = _context$extensionSet2.profiles) === null || _context$extensionSet2 === void 0 ? void 0 : _context$extensionSet2.find(function (profile) {
                    return profile.id === settings.profileId;
                  });
                  apiMap = profile !== null && profile !== void 0 && profile.api ? context.CONNECT_API_MAP[profile.api] : null;
                  targetMessage = context.chat.find(function (_mes, index) {
                    return index === targetMessageId;
                  });
                  if (targetMessage) {
                    _context5.next = 16;
                    break;
                  }
                  return _context5.abrupt("return");
                case 16:
                  characterId = config_1.characters.findIndex(function (_char) {
                    return _char.avatar === targetMessage.original_avatar;
                  });
                  characterId = characterId !== -1 ? characterId : undefined;
                  _context5.prev = 18;
                  if (!pendingRequests.has(targetMessageId)) {
                    _context5.next = 23;
                    break;
                  }
                  _context5.next = 22;
                  return (0, config_1.st_echo)('warning', 'A request for this message is already in progress. Please wait.');
                case 22:
                  return _context5.abrupt("return");
                case 23:
                  pendingRequests.add(targetMessageId);
                  $(this).addClass('spinning');
                  _context5.next = 27;
                  return (0, sillytavern_utils_lib_1.buildPrompt)(apiMap === null || apiMap === void 0 ? void 0 : apiMap.selected, {
                    targetCharacterId: characterId,
                    messageIndexesBetween: {
                      end: targetMessageId
                    },
                    presetName: profile === null || profile === void 0 ? void 0 : profile.preset,
                    contextName: profile === null || profile === void 0 ? void 0 : profile.context,
                    instructName: profile === null || profile === void 0 ? void 0 : profile.instruct,
                    syspromptName: profile === null || profile === void 0 ? void 0 : profile.sysprompt,
                    maxContext: settings.maxContextType === 'custom' ? settings.maxContextValue : settings.maxContextType === 'profile' ? 'preset' : 'active',
                    includeNames: !!config_1.selected_group
                  });
                case 27:
                  promptResult = _context5.sent;
                  messages = promptResult.result;
                  messages.push({
                    content: context.substituteParams(settings.promptPresets[settings.promptPreset].content),
                    role: settings.messageRole
                  });
                  _context5.next = 32;
                  return context.ConnectionManagerRequestService.sendRequest(settings.profileId, messages, settings.maxResponseToken);
                case 32:
                  rest = _context5.sent;
                  actions = [];
                  extractionStrategy = (_settings$promptPrese9 = settings.promptPresets[settings.promptPreset]) === null || _settings$promptPrese9 === void 0 ? void 0 : _settings$promptPrese9.extractionStrategy;
                  if (!(extractionStrategy === 'bullet')) {
                    _context5.next = 40;
                    break;
                  }
                  actions = extractBulletPoints(rest.content);
                  if (!(actions.length === 0)) {
                    _context5.next = 40;
                    break;
                  }
                  _context5.next = 40;
                  return (0, config_1.st_echo)('warning', 'Could not extract any bullet points from the response. Using original response.');
                case 40:
                  innerText = (_actions = actions) !== null && _actions !== void 0 && _actions.length ? actions.map(function (action, index) {
                    return "".concat(index + 1, ". ").concat(action);
                  }).join('\n') : rest.content;
                  existMessage = context.chat.find(function (mes) {
                    var _mes$extra;
                    return ((_mes$extra = mes.extra) === null || _mes$extra === void 0 ? void 0 : _mes$extra[KEYS.EXTRA.TARGET]) === targetMessageId;
                  });
                  newMessage = existMessage !== null && existMessage !== void 0 ? existMessage : {
                    mes: formatResponse(innerText, extractionStrategy === 'bullet' ? actions : undefined),
                    name: config_1.systemUserName,
                    force_avatar: config_1.system_avatar,
                    is_system: true,
                    is_user: false,
                    extra: _defineProperty(_defineProperty(_defineProperty({
                      isSmallSys: true
                    }, KEYS.EXTRA.TARGET, targetMessageId), KEYS.EXTRA.RAW_CONTENT, innerText), KEYS.EXTRA.OPTIONS, actions)
                  };
                  if (existMessage) {
                    newMessage.mes = formatResponse(innerText, extractionStrategy === 'bullet' ? actions : undefined);
                    newMessage.extra[KEYS.EXTRA.RAW_CONTENT] = rest.content;
                    newMessage.extra[KEYS.EXTRA.OPTIONS] = actions;
                    _detailsElement = $("[mesid=\"".concat(targetMessageId + 1, "\"] .mes_text"));
                    _detailsElement.html(formatResponse(innerText, extractionStrategy === 'bullet' ? actions : undefined, 'custom-'));
                  } else {
                    context.chat.push(newMessage);
                    context.addOneMessage(newMessage, {
                      insertAfter: targetMessageId
                    });
                  }
                  detailsElement = $("[mesid=\"".concat(targetMessageId + 1, "\"] .mes_text details"));
                  if (settings.autoOpen && !detailsElement.attr('open')) {
                    detailsElement.attr('open', '');
                  }
                  attachRoadwayOptionHandlers(targetMessageId + 1);
                  _context5.next = 49;
                  return context.saveChat();
                case 49:
                  _context5.next = 56;
                  break;
                case 51:
                  _context5.prev = 51;
                  _context5.t0 = _context5["catch"](18);
                  console.error(_context5.t0);
                  _context5.next = 56;
                  return (0, config_1.st_echo)('error', "Error: ".concat(_context5.t0));
                case 56:
                  _context5.prev = 56;
                  pendingRequests["delete"](targetMessageId);
                  $('.mes_magic_roadway_button').removeClass('spinning');
                  return _context5.finish(56);
                case 60:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this, [[18, 51, 56, 60]]);
          })));
        case 57:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _handleUIChanges.apply(this, arguments);
}
function extractBulletPoints(text) {
  var matches = text.match(/^(?:\d+\.(?:\s+|(?=\S))|-\s+)(.*)$/gm) || [];
  return matches.map(function (line) {
    return line.replace(/^(?:\d+\.(?:\s+|(?=\S))|-\s+)/, '').trim();
  });
}
var generator = new sillytavern_utils_lib_1.Generator();
var lastRequestId;
function attachRoadwayOptionHandlers(roadwayMessageId) {
  var optionsContainer = $("[mesid=\"".concat(roadwayMessageId, "\"] .custom-roadway_options"));
  optionsContainer.find('.custom-action_button').off();
  var context = SillyTavern.getContext();
  // Handle impersonate action
  optionsContainer.find('.custom-impersonate_action').on('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _message$extra;
    var parentOption, index, message, settings, preset, impersonate, _context$extensionSet, profile, apiMap, promptResult, messages, streamingEnabled, maxResponseToken, _preset, _preset2, _ref2, _preset2$streaming, _preset2$genamt, textInputElement, abortController;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          parentOption = $(this).closest('.custom-roadway_option');
          index = optionsContainer.find('.custom-roadway_option').index(parentOption);
          message = context.chat.find(function (mes, index) {
            return roadwayMessageId === index;
          });
          if (message) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return");
        case 5:
          settings = settingsManager.getSettings();
          preset = settings.promptPresets[context.extensionSettings[KEYS.EXTENSION].promptPreset];
          if (!(!preset || !preset.impersonate)) {
            _context.next = 11;
            break;
          }
          _context.next = 10;
          return (0, config_1.st_echo)('error', 'Preset not found. Please check the extension settings.');
        case 10:
          return _context.abrupt("return");
        case 11:
          impersonate = globalContext.substituteParams(preset.impersonate, {
            dynamicMacros: {
              roadwaySelected: (_message$extra = message.extra) === null || _message$extra === void 0 || (_message$extra = _message$extra[KEYS.EXTRA.OPTIONS]) === null || _message$extra === void 0 ? void 0 : _message$extra[index]
            }
          });
          if (!(settings.impersonateApi === 'profile')) {
            _context.next = 49;
            break;
          }
          if (settings.impersonateProfileId) {
            _context.next = 17;
            break;
          }
          _context.next = 16;
          return (0, config_1.st_echo)('error', 'Please select an impersonation connection profile in the settings.');
        case 16:
          return _context.abrupt("return");
        case 17:
          profile = (_context$extensionSet = context.extensionSettings.connectionManager) === null || _context$extensionSet === void 0 || (_context$extensionSet = _context$extensionSet.profiles) === null || _context$extensionSet === void 0 ? void 0 : _context$extensionSet.find(function (profile) {
            return profile.id === settings.impersonateProfileId;
          });
          apiMap = profile !== null && profile !== void 0 && profile.api ? context.CONNECT_API_MAP[profile.api] : null;
          if (apiMap !== null && apiMap !== void 0 && apiMap.selected) {
            _context.next = 22;
            break;
          }
          (0, config_1.st_echo)('error', 'Please select an API in the connection profile.');
          return _context.abrupt("return");
        case 22:
          globalContext.deactivateSendButtons();
          _context.prev = 23;
          _context.next = 26;
          return (0, sillytavern_utils_lib_1.buildPrompt)(apiMap.selected, {
            presetName: profile === null || profile === void 0 ? void 0 : profile.preset,
            contextName: profile === null || profile === void 0 ? void 0 : profile.context,
            instructName: profile === null || profile === void 0 ? void 0 : profile.instruct,
            syspromptName: profile === null || profile === void 0 ? void 0 : profile.sysprompt,
            maxContext: settings.maxContextType === 'custom' ? settings.maxContextValue : settings.maxContextType === 'profile' ? 'preset' : 'active',
            includeNames: !!config_1.selected_group
          });
        case 26:
          promptResult = _context.sent;
          messages = promptResult.result;
          messages.push({
            role: 'system',
            content: impersonate
          });
          streamingEnabled = true;
          maxResponseToken = settings.maxResponseToken;
          if (apiMap.selected === 'openai') {
            _preset = globalContext.getPresetManager('openai').getCompletionPresetByName(profile === null || profile === void 0 ? void 0 : profile.preset);
            if (_preset) {
              streamingEnabled = _preset.stream_openai;
              maxResponseToken = _preset.openai_max_tokens;
            }
          } else if (apiMap.selected === 'textgenerationwebui') {
            _preset2 = globalContext.getPresetManager('textgenerationwebui').getCompletionPresetByName(profile === null || profile === void 0 ? void 0 : profile.preset);
            if (_preset2) {
              streamingEnabled = (_ref2 = (_preset2$streaming = _preset2.streaming) !== null && _preset2$streaming !== void 0 ? _preset2$streaming : context.textCompletionSettings.streaming) !== null && _ref2 !== void 0 ? _ref2 : false;
              maxResponseToken = (_preset2$genamt = _preset2.genamt) !== null && _preset2$genamt !== void 0 ? _preset2$genamt : maxResponseToken;
            }
          }
          textInputElement = $('#send_textarea');
          abortController = new AbortController();
          _context.next = 36;
          return generator.generateRequest({
            profileId: settings.impersonateProfileId,
            prompt: messages,
            maxTokens: maxResponseToken,
            custom: {
              stream: streamingEnabled,
              signal: streamingEnabled ? abortController.signal : undefined
            }
          }, {
            abortController: streamingEnabled ? abortController : undefined,
            onStart: function onStart(uuid) {
              lastRequestId = uuid;
              globalContext.eventSource.emit(types_1.EventNames.GENERATION_STARTED, 'impersonate', {
                signal: streamingEnabled ? abortController.signal : undefined
              });
            },
            onEntry: function onEntry(data) {
              if (streamingEnabled && data) {
                textInputElement.val(data.text);
                textInputElement.trigger('input');
                textInputElement.trigger('change');
              }
            },
            onFinish: function onFinish(data, error) {
              if (!streamingEnabled && data) {
                textInputElement.val(data.content);
                textInputElement.trigger('input');
                textInputElement.trigger('change');
              }
              if (error) {
                (0, config_1.st_echo)('error', "Error: ".concat(error));
              }
              globalContext.activateSendButtons();
            }
          });
        case 36:
          _context.next = 43;
          break;
        case 38:
          _context.prev = 38;
          _context.t0 = _context["catch"](23);
          console.error(_context.t0);
          _context.next = 43;
          return (0, config_1.st_echo)('error', "Error: ".concat(_context.t0));
        case 43:
          _context.prev = 43;
          globalContext.activateSendButtons();
          lastRequestId = undefined;
          return _context.finish(43);
        case 47:
          _context.next = 50;
          break;
        case 49:
          (0, config_1.st_runCommandCallback)('impersonate', undefined, impersonate);
        case 50:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[23, 38, 43, 47]]);
  })));
  // Handle use action
  optionsContainer.find('.custom-use_action').on('click', function () {
    var parentOption = $(this).closest('.custom-roadway_option');
    var contentDiv = parentOption.find('.custom-option_content');
    var text = contentDiv.text();
    if (text) {
      $('#send_textarea').val(text);
      $('#send_textarea').trigger('input');
      if (settingsManager.getSettings().autoSubmitUseAction) {
        $('#send_but').trigger('click');
      }
      var useButton = $(this);
      useButton.html('✓');
      setTimeout(function () {
        useButton.html('▶️');
      }, 1000);
    }
  });
  // Handle edit action
  optionsContainer.find('.custom-edit_action').on('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var parentOption, contentDiv, originalText, input;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          parentOption = $(this).closest('.custom-roadway_option');
          contentDiv = parentOption.find('.custom-option_content');
          originalText = contentDiv.text(); // Create input for editing
          input = $('<textarea>').val(originalText).css({
            width: '100%',
            minHeight: '50px',
            resize: 'vertical',
            backgroundColor: 'var(--SmartThemeBlurTintColor)',
            color: 'var(--SmartThemeBodyColor)',
            border: '1px solid var(--SmartThemeBorderColor)',
            borderRadius: 'var(--avatar-base-border-radius)',
            padding: 'calc(var(--mainFontSize) * 0.5)'
          });
          contentDiv.empty().append(input);
          input.trigger('focus');
          // Handle save on blur
          input.on('blur', function () {
            var _message$extra2;
            var newText = input.val();
            contentDiv.text(newText);
            // Update the stored options
            var message = context.chat.find(function (_mes, index) {
              return roadwayMessageId === index;
            });
            if (message !== null && message !== void 0 && (_message$extra2 = message.extra) !== null && _message$extra2 !== void 0 && _message$extra2[KEYS.EXTRA.OPTIONS]) {
              var index = optionsContainer.find('.custom-roadway_option').index(parentOption);
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
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  })));
}
function initializeEvents() {
  // If last message is roadway, add event listener
  globalContext.eventSource.on(types_1.EventNames.CHAT_CHANGED, function () {
    var _lastMessage$extra;
    var context = SillyTavern.getContext();
    if (!context.chat.length) {
      return;
    }
    $('.custom-roadway_options .custom-use_action').toggle(settingsManager.getSettings().showUseActionIcon);
    var lastMessage = context.chat[context.chat.length - 1];
    if (typeof ((_lastMessage$extra = lastMessage.extra) === null || _lastMessage$extra === void 0 ? void 0 : _lastMessage$extra[KEYS.EXTRA.TARGET]) === 'number') {
      attachRoadwayOptionHandlers(context.chat.length - 1);
    }
  });
  var lastRenderedMessageId = -1;
  // Auto trigger when new character message is received
  // @ts-ignore
  globalContext.eventSource.makeFirst(types_1.EventNames.CHARACTER_MESSAGE_RENDERED, function (messageId, type) {
    lastRenderedMessageId = messageId;
    var settings = settingsManager.getSettings();
    if (!settings.autoTrigger || type === 'group_chat' || config_1.selected_group) {
      return;
    }
    // Simulate clicking the roadway button for this message
    var messageBlock = $("[mesid=\"".concat(messageId, "\"]"));
    messageBlock.find('.mes_magic_roadway_button').trigger('click');
  });
  var allowed_group_types = ['normal', 'continue', 'swipe'];
  // @ts-ignore
  globalContext.eventSource.makeFirst(types_1.EventNames.GROUP_WRAPPER_FINISHED, function (params) {
    var settings = settingsManager.getSettings();
    if (!settings.autoTrigger || lastRenderedMessageId === -1 || !allowed_group_types.includes(params.type)) {
      return;
    }
    // Simulate clicking the roadway button for this message
    var messageBlock = $("[mesid=\"".concat(lastRenderedMessageId, "\"]"));
    messageBlock.find('.mes_magic_roadway_button').trigger('click');
  });
  $('#mes_stop').on('click', function () {
    if (lastRequestId) {
      generator.abortRequest(lastRequestId);
    }
  });
}
function importCheck() {
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
  var errorStr = '[Roadway Error] Make sure ST is updated.';
  (0, config_1.st_echo)('error', errorStr);
} else {
  settingsManager.initializeSettings().then(function (result) {
    if (result.version.changed) {
      // 0.3.0 to 0.4.0
      if (result.oldSettings.version < '0.4.0' && result.newSettings.version === '0.4.0') {
        (0, config_1.st_echo)('info', '[Roadway] Added impersonate with connection profile api. Check extension settings.');
      }
    }
    main();
  })["catch"](function (error) {
    (0, config_1.st_echo)('error', error);
    globalContext.Popup.show.confirm('Data migration failed. Do you want to reset the roadway data?', 'Roadway').then(function (result) {
      if (result) {
        settingsManager.resetSettings();
        main();
      }
    });
  });
}
})();

var __webpack_exports___esModule = __webpack_exports__.__esModule;
export { __webpack_exports___esModule as __esModule };

//# sourceMappingURL=index.js.map