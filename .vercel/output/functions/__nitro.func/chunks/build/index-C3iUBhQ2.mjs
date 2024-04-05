import _extends from '@babel/runtime/helpers/esm/extends';
import { inject, ref, h, getCurrentInstance, nextTick, reactive, defineComponent, createVNode, computed, shallowRef, provide, watch, Fragment, isVNode, Comment, Text, unref, triggerRef, watchEffect } from 'vue';
import _objectSpread$6 from '@babel/runtime/helpers/esm/objectSpread2';
import { generate as generate$1, blue } from '@ant-design/colors';
import { TinyColor } from '@ctrl/tinycolor';
import { serialize, compile, stringify } from 'stylis';
import { createTypes } from 'vue-types';

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// This icon file is generated automatically.
var BarsOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };
const BarsOutlinedSvg = BarsOutlined$2;

var contextKey = Symbol('iconContext');
var useInjectIconContext = function useInjectIconContext() {
  return inject(contextKey, {
    prefixCls: ref('anticon'),
    rootClassName: ref(''),
    csp: ref()
  });
};

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function warning$2(valid, message) {
}


function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return h(node.tag, _objectSpread$5({
      key: key
    }, node.attrs), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return h(node.tag, _objectSpread$5({
    key: key
  }, rootProps, node.attrs), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";

var useInsertStyles = function useInsertStyles() {
  var _useInjectIconContext = useInjectIconContext(),
      prefixCls = _useInjectIconContext.prefixCls;
      _useInjectIconContext.csp;

  getCurrentInstance();
  var mergedStyleStr = iconStyles;

  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls.value);
  }

  nextTick(function () {
    {
      return;
    }
  });
};

var _excluded$1 = ["icon", "primaryColor", "secondaryColor"];

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var twoToneColorPalette = reactive({
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
});

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread$4({}, twoToneColorPalette);
}

var IconBase = function IconBase(props, context) {
  var _props$context$attrs = _objectSpread$4({}, props, context.attrs),
      icon = _props$context$attrs.icon,
      primaryColor = _props$context$attrs.primaryColor,
      secondaryColor = _props$context$attrs.secondaryColor,
      restProps = _objectWithoutProperties$1(_props$context$attrs, _excluded$1);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  warning$2(isIconDefinition(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread$4({}, target, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate(target.icon, "svg-".concat(target.name), _objectSpread$4({}, restProps, {
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  })); // },
};

IconBase.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
IconBase.inheritAttrs = false;
IconBase.displayName = 'IconBase';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
const VueIcon = IconBase;

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return VueIcon.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = VueIcon.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

var InsertStyles = defineComponent({
  name: 'InsertStyles',
  setup: function setup() {
    useInsertStyles();
    return function () {
      return null;
    };
  }
});

var _excluded = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

setTwoToneColor(blue.primary);

var Icon = function Icon(props, context) {
  var _classObj;

  var _props$context$attrs = _objectSpread$3({}, props, context.attrs),
      cls = _props$context$attrs["class"],
      icon = _props$context$attrs.icon,
      spin = _props$context$attrs.spin,
      rotate = _props$context$attrs.rotate,
      tabindex = _props$context$attrs.tabindex,
      twoToneColor = _props$context$attrs.twoToneColor,
      onClick = _props$context$attrs.onClick,
      restProps = _objectWithoutProperties(_props$context$attrs, _excluded);

  var _useInjectIconContext = useInjectIconContext(),
      prefixCls = _useInjectIconContext.prefixCls,
      rootClassName = _useInjectIconContext.rootClassName;

  var classObj = (_classObj = {}, _defineProperty$3(_classObj, rootClassName.value, !!rootClassName.value), _defineProperty$3(_classObj, prefixCls.value, true), _defineProperty$3(_classObj, "".concat(prefixCls.value, "-").concat(icon.name), Boolean(icon.name)), _defineProperty$3(_classObj, "".concat(prefixCls.value, "-spin"), !!spin || icon.name === 'loading'), _classObj);
  var iconTabIndex = tabindex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return createVNode("span", _objectSpread$3({
    "role": "img",
    "aria-label": icon.name
  }, restProps, {
    "onClick": onClick,
    "class": [classObj, cls],
    "tabindex": iconTabIndex
  }), [createVNode(VueIcon, {
    "icon": icon,
    "primaryColor": primaryColor,
    "secondaryColor": secondaryColor,
    "style": svgStyle
  }, null), createVNode(InsertStyles, null, null)]);
};

Icon.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Icon.displayName = 'AntdIcon';
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
const AntdIcon = Icon;

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BarsOutlined = function BarsOutlined(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": BarsOutlinedSvg
  }), null);
};

BarsOutlined.displayName = 'BarsOutlined';
BarsOutlined.inheritAttrs = false;
const BarsOutlined$1 = BarsOutlined;

// This icon file is generated automatically.
var RightOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
const RightOutlinedSvg = RightOutlined$2;

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RightOutlined = function RightOutlined(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": RightOutlinedSvg
  }), null);
};

RightOutlined.displayName = 'RightOutlined';
RightOutlined.inheritAttrs = false;
const RightOutlined$1 = RightOutlined;

// This icon file is generated automatically.
var LeftOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };
const LeftOutlinedSvg = LeftOutlined$2;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LeftOutlined = function LeftOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": LeftOutlinedSvg
  }), null);
};

LeftOutlined.displayName = 'LeftOutlined';
LeftOutlined.inheritAttrs = false;
const LeftOutlined$1 = LeftOutlined;

const isFunction = (val) => typeof val === "function";
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
function resolvePropValue(options, props, key, value) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      value = opt.type !== Function && isFunction(defaultValue) ? defaultValue() : defaultValue;
    }
    if (opt.type === Boolean) {
      if (!hasOwn(props, key) && !hasDefault) {
        value = false;
      } else if (value === "") {
        value = true;
      }
    }
  }
  return value;
}
function renderHelper(v) {
  let props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let defaultV = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof v === "function") {
    return v(props);
  }
  return v !== null && v !== void 0 ? v : defaultV;
}
function wrapPromiseFn(openFn) {
  let closeFn;
  const closePromise = new Promise((resolve) => {
    closeFn = openFn(() => {
      resolve(true);
    });
  });
  const result = () => {
    closeFn === null || closeFn === void 0 ? void 0 : closeFn();
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}
function classNames() {
  const classes = [];
  for (let i = 0; i < arguments.length; i++) {
    const value = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (!value)
      continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray(value)) {
      for (let i2 = 0; i2 < value.length; i2++) {
        const inner = classNames(value[i2]);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }
  return classes.join(" ");
}
const isValid = (value) => {
  return value !== void 0 && value !== null && value !== "";
};
const initDefaultProps = (types, defaultProps) => {
  const propTypes = _extends({}, types);
  Object.keys(defaultProps).forEach((k) => {
    const prop = propTypes[k];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultProps[k];
      } else if (prop.def) {
        prop.def(defaultProps[k]);
      } else {
        propTypes[k] = {
          type: prop,
          default: defaultProps[k]
        };
      }
    } else {
      throw new Error(`not have ${k} prop`);
    }
  });
  return propTypes;
};
const splitAttrs = (attrs) => {
  const allAttrs = Object.keys(attrs);
  const eventAttrs = {};
  const onEvents = {};
  const extraAttrs = {};
  for (let i = 0, l = allAttrs.length; i < l; i++) {
    const key = allAttrs[i];
    if (isOn(key)) {
      eventAttrs[key[2].toLowerCase() + key.slice(3)] = attrs[key];
      onEvents[key] = attrs[key];
    } else {
      extraAttrs[key] = attrs[key];
    }
  }
  return {
    onEvents,
    events: eventAttrs,
    extraAttrs
  };
};
const parseStyleText = function() {
  let cssText = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  let camel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const res = {};
  const listDelimiter = /;(?![^(]*\))/g;
  const propertyDelimiter = /:(.+)/;
  if (typeof cssText === "object")
    return cssText;
  cssText.split(listDelimiter).forEach(function(item) {
    if (item) {
      const tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        const k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};
const hasProp = (instance, prop) => {
  return instance[prop] !== void 0;
};
const skipFlattenKey = Symbol("skipFlatten");
const flattenChildren = function() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  let filterEmpty2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const temp = Array.isArray(children) ? children : [children];
  const res = [];
  temp.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...flattenChildren(child, filterEmpty2));
    } else if (child && child.type === Fragment) {
      if (child.key === skipFlattenKey) {
        res.push(child);
      } else {
        res.push(...flattenChildren(child.children, filterEmpty2));
      }
    } else if (child && isVNode(child)) {
      if (filterEmpty2 && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty2) {
        res.push(child);
      }
    } else if (isValid(child)) {
      res.push(child);
    }
  });
  return res;
};
const getSlot = function(self) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (isVNode(self)) {
    if (self.type === Fragment) {
      return name === "default" ? flattenChildren(self.children) : [];
    } else if (self.children && self.children[name]) {
      return flattenChildren(self.children[name](options));
    } else {
      return [];
    }
  } else {
    const res = self.$slots[name] && self.$slots[name](options);
    return flattenChildren(res);
  }
};
const findDOMNode = (instance) => {
  var _a;
  let node = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);
  while (node && !node.tagName) {
    node = node.nextSibling;
  }
  return node;
};
const getOptionProps = (instance) => {
  const res = {};
  if (instance.$ && instance.$.vnode) {
    const props = instance.$.vnode.props || {};
    Object.keys(instance.$props).forEach((k) => {
      const v = instance.$props[k];
      const hyphenateKey = hyphenate(k);
      if (v !== void 0 || hyphenateKey in props) {
        res[k] = v;
      }
    });
  } else if (isVNode(instance) && typeof instance.type === "object") {
    const originProps = instance.props || {};
    const props = {};
    Object.keys(originProps).forEach((key) => {
      props[camelize(key)] = originProps[key];
    });
    const options = instance.type.props || {};
    Object.keys(options).forEach((k) => {
      const v = resolvePropValue(options, props, k, props[k]);
      if (v !== void 0 || k in props) {
        res[k] = v;
      }
    });
  }
  return res;
};
const getComponent = function(instance) {
  let prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : instance;
  let execute = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  let com = void 0;
  if (instance.$) {
    const temp = instance[prop];
    if (temp !== void 0) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else {
      com = instance.$slots[prop];
      com = execute && com ? com(options) : com;
    }
  } else if (isVNode(instance)) {
    const temp = instance.props && instance.props[prop];
    if (temp !== void 0 && instance.props !== null) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else if (instance.type === Fragment) {
      com = instance.children;
    } else if (instance.children && instance.children[prop]) {
      com = instance.children[prop];
      com = execute && com ? com(options) : com;
    }
  }
  if (Array.isArray(com)) {
    com = flattenChildren(com);
    com = com.length === 1 ? com[0] : com;
    com = com.length === 0 ? void 0 : com;
  }
  return com;
};
function getEvents() {
  let ele = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let on = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  let props = {};
  if (ele.$) {
    props = _extends(_extends({}, props), ele.$attrs);
  } else {
    props = _extends(_extends({}, props), ele.props);
  }
  return splitAttrs(props)[on ? "onEvents" : "events"];
}
function getStyle(ele, camel) {
  const props = (isVNode(ele) ? ele.props : ele.$attrs) || {};
  let style = props.style || {};
  if (typeof style === "string") {
    style = parseStyleText(style, camel);
  } else if (camel && style) {
    const res = {};
    Object.keys(style).forEach((k) => res[camelize(k)] = style[k]);
    return res;
  }
  return style;
}
function isFragment(c) {
  return c.length === 1 && c[0].type === Fragment;
}
function isEmptyElement(c) {
  return c && (c.type === Comment || c.type === Fragment && c.children.length === 0 || c.type === Text && c.children.trim() === "");
}
function filterEmpty() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const res = [];
  children.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if ((child === null || child === void 0 ? void 0 : child.type) === Fragment) {
      res.push(...filterEmpty(child.children));
    } else {
      res.push(child);
    }
  });
  return res.filter((c) => !isEmptyElement(c));
}
function isValidElement(element) {
  if (Array.isArray(element) && element.length === 1) {
    element = element[0];
  }
  return element && element.__v_isVNode && typeof element.type !== "symbol";
}
function getPropsSlot(slots, props) {
  let prop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var _a, _b;
  return (_a = props[prop]) !== null && _a !== void 0 ? _a : (_b = slots[prop]) === null || _b === void 0 ? void 0 : _b.call(slots);
}
const tuple = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
const tupleNum = function() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return args;
};
const withInstall = (comp) => {
  const c = comp;
  c.install = function(app) {
    app.component(c.displayName || c.name, comp);
  };
  return comp;
};
function eventType() {
  return {
    type: [Function, Array]
  };
}
function objectType(defaultVal) {
  return {
    type: Object,
    default: defaultVal
  };
}
function booleanType(defaultVal) {
  return {
    type: Boolean,
    default: defaultVal
  };
}
function functionType(defaultVal) {
  return {
    type: Function,
    default: defaultVal
  };
}
function anyType(defaultVal, required) {
  const type = {
    validator: () => true,
    default: defaultVal
  };
  return required ? type : type;
}
function arrayType(defaultVal) {
  return {
    type: Array,
    default: defaultVal
  };
}
function stringType(defaultVal) {
  return {
    type: String,
    default: defaultVal
  };
}
function someType(types, defaultVal) {
  return types ? {
    type: types,
    default: defaultVal
  } : anyType(defaultVal);
}
const defaultIconPrefixCls = "anticon";
const GlobalFormContextKey = Symbol("GlobalFormContextKey");
const useProvideGlobalForm = (state) => {
  provide(GlobalFormContextKey, state);
};
const configProviderProps = () => ({
  iconPrefixCls: String,
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: objectType(),
  input: objectType(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: objectType(),
  pageHeader: objectType(),
  componentSize: {
    type: String
  },
  componentDisabled: {
    type: Boolean,
    default: void 0
  },
  direction: {
    type: String,
    default: "ltr"
  },
  space: objectType(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: true
  },
  form: objectType(),
  pagination: objectType(),
  theme: objectType(),
  select: objectType(),
  wave: objectType()
});
const configProviderKey = Symbol("configProvider");
const defaultConfigProvider = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? `ant-${suffixCls}` : "ant";
  },
  iconPrefixCls: computed(() => defaultIconPrefixCls),
  getPopupContainer: computed(() => () => (void 0).body),
  direction: computed(() => "ltr")
};
const useConfigContextInject = () => {
  return inject(configProviderKey, defaultConfigProvider);
};
const useConfigContextProvider = (props) => {
  return provide(configProviderKey, props);
};
const DisabledContextKey = Symbol("DisabledContextKey");
const useInjectDisabled = () => {
  return inject(DisabledContextKey, ref(void 0));
};
const useProviderDisabled = (disabled) => {
  const parentDisabled = useInjectDisabled();
  provide(DisabledContextKey, computed(() => {
    var _a;
    return (_a = disabled.value) !== null && _a !== void 0 ? _a : parentDisabled.value;
  }));
  return disabled;
};
const enUS$1 = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
const locale$2 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const CalendarLocale = locale$2;
const locale$1 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const TimePicker = locale$1;
const locale = {
  lang: _extends({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePicker)
};
const enUS = locale;
const typeTemplate = "${label} is not a valid ${type}";
const localeValues = {
  locale: "en",
  Pagination: enUS$1,
  DatePicker: enUS,
  TimePicker,
  Calendar: enUS,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
};
const LocaleReceiver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const localeData = inject("localeData", {});
    const locale2 = computed(() => {
      const {
        componentName = "global",
        defaultLocale
      } = props;
      const locale3 = defaultLocale || localeValues[componentName || "global"];
      const {
        antLocale
      } = localeData;
      const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends(_extends({}, typeof locale3 === "function" ? locale3() : locale3), localeFromContext || {});
    });
    const localeCode = computed(() => {
      const {
        antLocale
      } = localeData;
      const localeCode2 = antLocale && antLocale.locale;
      if (antLocale && antLocale.exist && !localeCode2) {
        return localeValues.locale;
      }
      return localeCode2;
    });
    return () => {
      const children = props.children || slots.default;
      const {
        antLocale
      } = localeData;
      return children === null || children === void 0 ? void 0 : children(locale2.value, localeCode.value, antLocale);
    };
  }
});
function useLocaleReceiver(componentName, defaultLocale, propsLocale) {
  const localeData = inject("localeData", {});
  const componentLocale = computed(() => {
    const {
      antLocale
    } = localeData;
    const locale2 = unref(defaultLocale) || localeValues[componentName || "global"];
    const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _extends(_extends(_extends({}, typeof locale2 === "function" ? locale2() : locale2), localeFromContext || {}), unref(propsLocale) || {});
  });
  return [componentLocale];
}
const SPLIT = "%";
class Entity {
  constructor(instanceId) {
    this.cache = /* @__PURE__ */ new Map();
    this.instanceId = instanceId;
  }
  get(keys) {
    return this.cache.get(Array.isArray(keys) ? keys.join(SPLIT) : keys) || null;
  }
  update(keys, valueFn) {
    const path = Array.isArray(keys) ? keys.join(SPLIT) : keys;
    const prevValue = this.cache.get(path);
    const nextValue = valueFn(prevValue);
    if (nextValue === null) {
      this.cache.delete(path);
    } else {
      this.cache.set(path, nextValue);
    }
  }
}
const CacheEntity = Entity;
const ATTR_MARK = "data-css-hash";
function createCache() {
  const cssinjsInstanceId = Math.random().toString(12).slice(2);
  return new CacheEntity(cssinjsInstanceId);
}
const StyleContextKey = Symbol("StyleContextKey");
const getCache = () => {
  var _a, _b, _c;
  const instance = getCurrentInstance();
  let cache;
  if (instance && instance.appContext) {
    const globalCache = (_c = (_b = (_a = instance.appContext) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.globalProperties) === null || _c === void 0 ? void 0 : _c.__ANTDV_CSSINJS_CACHE__;
    if (globalCache) {
      cache = globalCache;
    } else {
      cache = createCache();
      if (instance.appContext.config.globalProperties) {
        instance.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = cache;
      }
    }
  } else {
    cache = createCache();
  }
  return cache;
};
const defaultStyleContext = {
  cache: createCache(),
  defaultCache: true,
  hashPriority: "low"
};
const useStyleInject = () => {
  const cache = getCache();
  return inject(StyleContextKey, shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache
  })));
};
const useStyleProvider = (props) => {
  const parentContext = useStyleInject();
  const context = shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache: createCache()
  }));
  watch([() => unref(props), parentContext], () => {
    const mergedContext = _extends({}, parentContext.value);
    const propsValue = unref(props);
    Object.keys(propsValue).forEach((key) => {
      const value = propsValue[key];
      if (propsValue[key] !== void 0) {
        mergedContext[key] = value;
      }
    });
    const {
      cache
    } = propsValue;
    mergedContext.cache = mergedContext.cache || createCache();
    mergedContext.defaultCache = !cache && parentContext.value.defaultCache;
    context.value = mergedContext;
  }, {
    immediate: true
  });
  provide(StyleContextKey, context);
  return context;
};
const styleProviderProps = () => ({
  autoClear: booleanType(),
  /** @private Test only. Not work in production. */
  mock: stringType(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: objectType(),
  /** Tell children that this context is default generated context */
  defaultCache: booleanType(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: stringType(),
  /** Tell cssinjs where to inject style in */
  container: someType(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: booleanType(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: arrayType(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: arrayType()
});
withInstall(defineComponent({
  name: "AStyleProvider",
  inheritAttrs: false,
  props: styleProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useStyleProvider(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
}));
function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
  const styleContext = useStyleInject();
  const fullPathStr = shallowRef("");
  const res = shallowRef();
  watchEffect(() => {
    fullPathStr.value = [prefix, ...keyPath.value].join("%");
  });
  const clearCache = (pathStr) => {
    styleContext.value.cache.update(pathStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      const nextCount = times - 1;
      if (nextCount === 0) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
        return null;
      }
      return [times - 1, cache];
    });
  };
  watch(fullPathStr, (newStr, oldStr) => {
    if (oldStr)
      clearCache(oldStr);
    styleContext.value.cache.update(newStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      let tmpCache = cache;
      const mergedCache = tmpCache || cacheFn();
      return [times + 1, mergedCache];
    });
    res.value = styleContext.value.cache.get(fullPathStr.value)[1];
  }, {
    immediate: true
  });
  return res;
}
function canUseDom() {
  return false;
}
function contains(root, n) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n);
  }
  return false;
}
const MARK_KEY = `vc-util-key`;
const containerCache = /* @__PURE__ */ new Map();
function getMark() {
  let {
    mark
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  if (mark) {
    return mark.startsWith("data-") ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = (void 0).querySelector("head");
  return head || (void 0).body;
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter((node) => node.tagName === "STYLE");
}
function findExistNode(key) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const container = getContainer(option);
  return findStyles(container).find((node) => node.getAttribute(getMark(option)) === key);
}
function removeCSS(key) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const existNode = findExistNode(key, option);
  if (existNode) {
    const container = getContainer(option);
    container.removeChild(existNode);
  }
}
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
class ThemeCache {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(derivativeOption) {
    let updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let cache = {
      map: this.cache
    };
    derivativeOption.forEach((derivative2) => {
      var _a;
      if (!cache) {
        cache = void 0;
      } else {
        cache = (_a = cache === null || cache === void 0 ? void 0 : cache.map) === null || _a === void 0 ? void 0 : _a.get(derivative2);
      }
    });
    if ((cache === null || cache === void 0 ? void 0 : cache.value) && updateCallTimes) {
      cache.value[1] = this.cacheCallTimes++;
    }
    return cache === null || cache === void 0 ? void 0 : cache.value;
  }
  get(derivativeOption) {
    var _a;
    return (_a = this.internalGet(derivativeOption, true)) === null || _a === void 0 ? void 0 : _a[0];
  }
  has(derivativeOption) {
    return !!this.internalGet(derivativeOption);
  }
  set(derivativeOption, value) {
    if (!this.has(derivativeOption)) {
      if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
        const [targetKey] = this.keys.reduce((result, key) => {
          const [, callTimes] = result;
          if (this.internalGet(key)[1] < callTimes) {
            return [key, this.internalGet(key)[1]];
          }
          return result;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(targetKey);
      }
      this.keys.push(derivativeOption);
    }
    let cache = this.cache;
    derivativeOption.forEach((derivative2, index) => {
      if (index === derivativeOption.length - 1) {
        cache.set(derivative2, {
          value: [value, this.cacheCallTimes++]
        });
      } else {
        const cacheValue = cache.get(derivative2);
        if (!cacheValue) {
          cache.set(derivative2, {
            map: /* @__PURE__ */ new Map()
          });
        } else if (!cacheValue.map) {
          cacheValue.map = /* @__PURE__ */ new Map();
        }
        cache = cache.get(derivative2).map;
      }
    });
  }
  deleteByPath(currentCache, derivatives) {
    var _a;
    const cache = currentCache.get(derivatives[0]);
    if (derivatives.length === 1) {
      if (!cache.map) {
        currentCache.delete(derivatives[0]);
      } else {
        currentCache.set(derivatives[0], {
          map: cache.map
        });
      }
      return (_a = cache.value) === null || _a === void 0 ? void 0 : _a[0];
    }
    const result = this.deleteByPath(cache.map, derivatives.slice(1));
    if ((!cache.map || cache.map.size === 0) && !cache.value) {
      currentCache.delete(derivatives[0]);
    }
    return result;
  }
  delete(derivativeOption) {
    if (this.has(derivativeOption)) {
      this.keys = this.keys.filter((item) => !sameDerivativeOption(item, derivativeOption));
      return this.deleteByPath(this.cache, derivativeOption);
    }
    return void 0;
  }
}
ThemeCache.MAX_CACHE_SIZE = 20;
ThemeCache.MAX_CACHE_OFFSET = 5;
let warned = {};
function warning$1(valid, message) {
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$1, valid, message);
}
function noop$1() {
}
let warning = noop$1;
let uuid = 0;
class Theme {
  constructor(derivatives) {
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      warning(derivatives.length > 0);
    }
    uuid += 1;
  }
  getDerivativeToken(token) {
    return this.derivatives.reduce((result, derivative2) => derivative2(token, result), void 0);
  }
}
const cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}
const flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token) {
  let str = flattenTokenCache.get(token) || "";
  if (!str) {
    Object.keys(token).forEach((key) => {
      const value = token[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && typeof value === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    flattenTokenCache.set(token, str);
  }
  return str;
}
function token2key(token, salt) {
  return murmur2(`${salt}_${flattenToken(token)}`);
}
function supportSelector(styleStr, handleElement, supportCheck) {
  return false;
}
let canLayer = void 0;
function supportLayer() {
  if (canLayer === void 0) {
    canLayer = supportSelector();
  }
  return canLayer;
}
const EMPTY_OVERRIDE = {};
const hashPrefix = "css";
const tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
const TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  const tokenKeyList = Array.from(tokenKeys.keys());
  const cleanableKeyList = tokenKeyList.filter((key) => {
    const count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach((key) => {
      tokenKeys.delete(key);
    });
  }
}
const getComputedToken = (originToken, overrideToken, theme, format) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  let mergedDerivativeToken = _extends(_extends({}, derivativeToken), overrideToken);
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
function useCacheToken(theme, tokens) {
  let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ref({});
  const style = useStyleInject();
  const mergedToken = computed(() => _extends({}, ...tokens.value));
  const tokenStr = computed(() => flattenToken(mergedToken.value));
  const overrideTokenStr = computed(() => flattenToken(option.value.override || EMPTY_OVERRIDE));
  const cachedToken = useClientCache("token", computed(() => [option.value.salt || "", theme.value.id, tokenStr.value, overrideTokenStr.value]), () => {
    const {
      salt = "",
      override = EMPTY_OVERRIDE,
      formatToken: formatToken2,
      getComputedToken: compute
    } = option.value;
    const mergedDerivativeToken = compute ? compute(mergedToken.value, override, theme.value) : getComputedToken(mergedToken.value, override, theme.value, formatToken2);
    const tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    recordCleanToken(tokenKey);
    const hashId = `${hashPrefix}-${murmur2(tokenKey)}`;
    mergedDerivativeToken._hashId = hashId;
    return [mergedDerivativeToken, hashId];
  }, (cache) => {
    var _a;
    cleanTokenStyle(cache[0]._tokenKey, (_a = style.value) === null || _a === void 0 ? void 0 : _a.cache.instanceId);
  });
  return cachedToken;
}
const CSS_FILE_STYLE = "_FILE_STYLE__";
let cachePathMap;
function prepare() {
  if (!cachePathMap) {
    cachePathMap = {};
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  const hash2 = cachePathMap[path];
  let styleStr = null;
  if (hash2 && canUseDom()) {
    {
      styleStr = CSS_FILE_STYLE;
    }
  }
  return [styleStr, hash2];
}
const isClientSide = canUseDom();
const SKIP_CHECK = "_skip_check_";
const MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr) {
  const serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return typeof value === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  const hashClassName = `.${hashId}`;
  const hashSelector = hashPriority === "low" ? `:where(${hashClassName})` : hashClassName;
  const keys = key.split(",").map((k) => {
    var _a;
    const fullPath = k.trim().split(/\s+/);
    let firstPath = fullPath[0] || "";
    const htmlElement = ((_a = firstPath.match(/^\w+/)) === null || _a === void 0 ? void 0 : _a[0]) || "";
    firstPath = `${htmlElement}${hashSelector}${firstPath.slice(htmlElement.length)}`;
    return [firstPath, ...fullPath.slice(1)].join(" ");
  });
  return keys.join(",");
}
const parseStyle = function(interpolation) {
  let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let {
    root,
    injectHash,
    parentSelectors
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: true,
    parentSelectors: []
  };
  const {
    hashId,
    layer,
    path,
    hashPriority,
    transformers = [],
    linters = []
  } = config;
  let styleStr = "";
  let effectStyle = {};
  function parseKeyframes(keyframes) {
    const animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      const [parsedStr] = parseStyle(keyframes.style, config, {
        root: false,
        parentSelectors
      });
      effectStyle[animationName] = `@keyframes ${keyframes.getName(hashId)}${parsedStr}`;
    }
  }
  function flattenList(list) {
    let fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach((item) => {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  const flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach((originStyle) => {
    const style = typeof originStyle === "string" && !root ? {} : originStyle;
    if (typeof style === "string") {
      styleStr += `${style}
`;
    } else if (style._keyframe) {
      parseKeyframes(style);
    } else {
      const mergedStyle = transformers.reduce((prev, trans) => {
        var _a;
        return ((_a = trans === null || trans === void 0 ? void 0 : trans.visit) === null || _a === void 0 ? void 0 : _a.call(trans, prev)) || prev;
      }, style);
      Object.keys(mergedStyle).forEach((key) => {
        var _a;
        const value = mergedStyle[key];
        if (typeof value === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          let subInjectHash = false;
          let mergedKey = key.trim();
          let nextRoot = false;
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          const [parsedStr, childEffectStyle] = parseStyle(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [...parentSelectors, mergedKey]
          });
          effectStyle = _extends(_extends({}, effectStyle), childEffectStyle);
          styleStr += `${mergedKey}${parsedStr}`;
        } else {
          let appendStyle = function(cssKey, cssValue) {
            const styleName = cssKey.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
            let formatValue = cssValue;
            if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = `${formatValue}px`;
            }
            if (cssKey === "animationName" && (cssValue === null || cssValue === void 0 ? void 0 : cssValue._keyframe)) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += `${styleName}:${formatValue};`;
          };
          const actualValue = (_a = value === null || value === void 0 ? void 0 : value.value) !== null && _a !== void 0 ? _a : value;
          if (typeof value === "object" && (value === null || value === void 0 ? void 0 : value[MULTI_VALUE]) && Array.isArray(actualValue)) {
            actualValue.forEach((item) => {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = `{${styleStr}}`;
  } else if (layer && supportLayer()) {
    const layerCells = layer.split(",");
    const layerName = layerCells[layerCells.length - 1].trim();
    styleStr = `@layer ${layerName} {${styleStr}}`;
    if (layerCells.length > 1) {
      styleStr = `@layer ${layer}{%%%:%}${styleStr}`;
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return murmur2(`${path.join("%")}${styleStr}`);
}
function useStyleRegister(info, styleFn) {
  const styleContext = useStyleInject();
  const tokenKey = computed(() => info.value.token._tokenKey);
  const fullPath = computed(() => [tokenKey.value, ...info.value.path]);
  useClientCache(
    "style",
    fullPath,
    // Create cache if needed
    () => {
      const {
        path,
        hashId,
        layer,
        nonce,
        clientOnly,
        order = 0
      } = info.value;
      const cachePath = fullPath.value.join("|");
      if (existPath(cachePath)) {
        const [inlineCacheStyleStr, styleHash] = getStyleAndHash(cachePath);
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey.value, styleHash, {}, clientOnly, order];
        }
      }
      const styleObj = styleFn();
      const {
        hashPriority,
        container,
        transformers,
        linters,
        cache
      } = styleContext.value;
      const [parsedStyle, effectStyle] = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer,
        path: path.join("-"),
        transformers,
        linters
      });
      const styleStr = normalizeStyle(parsedStyle);
      const styleId = uniqueHash(fullPath.value, styleStr);
      return [styleStr, tokenKey.value, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    (_ref, fromHMR) => {
      let [, , styleId] = _ref;
      if ((fromHMR || styleContext.value.autoClear) && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    }
  );
  return (node) => {
    return node;
  };
}
const version = "4.1.2";
const genControlHeight = (token) => {
  const {
    controlHeight
  } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    sizeXL: sizeUnit * (sizeStep + 4),
    sizeLG: sizeUnit * (sizeStep + 2),
    sizeMD: sizeUnit * (sizeStep + 1),
    sizeMS: sizeUnit * sizeStep,
    size: sizeUnit * sizeStep,
    sizeSM: sizeUnit * (sizeStep - 1),
    sizeXS: sizeUnit * (sizeStep - 2),
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}
const defaultPresetColors = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
const seedToken = _extends(_extends({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false
});
const defaultSeedToken = seedToken;
function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes: generateColorPalettes2,
    generateNeutralColorPalettes: generateNeutralColorPalettes2
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  return _extends(_extends({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase > 16 ? 16 : radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
function genCommonMapToken(token) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token;
  return _extends({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, genRadius(borderRadius));
}
const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
const generateColorPalettes = (baseColor) => {
  const colors = generate$1(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor$1(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
    colorFill: getAlphaColor$1(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.pow(2.71828, i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}
const genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
function derivative(token) {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = generate$1(token[colorKey]);
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = _extends(_extends({}, prev), cur);
    return prev;
  }, {});
  return _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, token), colorPalettes), genColorMapToken(token, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken(token.fontSize)), genSizeMapToken(token)), genControlHeight(token)), genCommonMapToken(token));
}
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new TinyColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function formatToken(derivativeToken) {
  const {
    override
  } = derivativeToken, restToken = __rest$1(derivativeToken, ["override"]);
  const overrideTokens = _extends({}, override);
  Object.keys(defaultSeedToken).forEach((token) => {
    delete overrideTokens[token];
  });
  const mergedToken = _extends(_extends({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  const screenXXXL = 2e3;
  const aliasToken = _extends(_extends(_extends({}, mergedToken), {
    colorLink: mergedToken.colorInfoText,
    colorLinkHover: mergedToken.colorInfoHover,
    colorLinkActive: mergedToken.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    screenXXLMax: screenXXXL - 1,
    screenXXXL,
    screenXXXLMin: screenXXXL,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), overrideTokens);
  return aliasToken;
}
const textEllipsis = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
const resetComponent = (token) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: token.fontFamily
});
const resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
});
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
});
const genLinkStyle = (token) => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${token.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: token.colorLinkHover
    },
    "&:active": {
      color: token.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
const genCommonStyle = (token, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [rootPrefixSelector]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
const genFocusOutline = (token) => ({
  outline: `${token.lineWidthBold}px solid ${token.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
});
const genFocusStyle = (token) => ({
  "&:focus-visible": _extends({}, genFocusOutline(token))
});
function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return (_prefixCls) => {
    const prefixCls = computed(() => _prefixCls === null || _prefixCls === void 0 ? void 0 : _prefixCls.value);
    const [theme, token, hashId] = useToken();
    const {
      getPrefixCls,
      iconPrefixCls
    } = useConfigContextInject();
    const rootPrefixCls = computed(() => getPrefixCls());
    const sharedInfo = computed(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: ["Shared", rootPrefixCls.value]
      };
    });
    useStyleRegister(sharedInfo, () => [{
      // Link
      "&": genLinkStyle(token.value)
    }]);
    const componentInfo = computed(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: [component, prefixCls.value, iconPrefixCls.value]
      };
    });
    return [useStyleRegister(componentInfo, () => {
      const {
        token: proxyToken,
        flush
      } = statisticToken(token.value);
      const defaultComponentToken = typeof getDefaultToken === "function" ? getDefaultToken(proxyToken) : getDefaultToken;
      const mergedComponentToken = _extends(_extends({}, defaultComponentToken), token.value[component]);
      const componentCls = `.${prefixCls.value}`;
      const mergedToken = merge(proxyToken, {
        componentCls,
        prefixCls: prefixCls.value,
        iconCls: `.${iconPrefixCls.value}`,
        antCls: `.${rootPrefixCls.value}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId: hashId.value,
        prefixCls: prefixCls.value,
        rootPrefixCls: rootPrefixCls.value,
        iconPrefixCls: iconPrefixCls.value,
        overrideComponentToken: token.value[component]
      });
      flush(component, mergedComponentToken);
      return [genCommonStyle(token.value, prefixCls.value), styleInterpolation];
    }), hashId];
  };
}
const enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
let recording = true;
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return _extends({}, ...objs);
  }
  recording = false;
  const ret = {};
  objs.forEach((obj) => {
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
function noop() {
}
function statisticToken(token) {
  let tokenKeys2;
  let proxy = token;
  let flush = noop;
  if (enableStatistic) {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys2.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      ({
        global: Array.from(tokenKeys2),
        component: componentToken
      });
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush
  };
}
const defaultTheme = createTheme(derivative);
const defaultConfig = {
  token: defaultSeedToken,
  hashed: true
};
const DesignTokenContextKey = Symbol("DesignTokenContext");
const globalDesignTokenApi = shallowRef();
const useDesignTokenProvider = (value) => {
  provide(DesignTokenContextKey, value);
  watch(value, () => {
    globalDesignTokenApi.value = unref(value);
    triggerRef(globalDesignTokenApi);
  }, {
    immediate: true,
    deep: true
  });
};
const DesignTokenProvider = defineComponent({
  props: {
    value: objectType()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useDesignTokenProvider(computed(() => props.value));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
function useToken() {
  const designTokenContext = inject(DesignTokenContextKey, computed(() => globalDesignTokenApi.value || defaultConfig));
  const salt = computed(() => `${version}-${designTokenContext.value.hashed || ""}`);
  const mergedTheme = computed(() => designTokenContext.value.theme || defaultTheme);
  const cacheToken = useCacheToken(mergedTheme, computed(() => [defaultSeedToken, designTokenContext.value.token]), computed(() => ({
    salt: salt.value,
    override: _extends({
      override: designTokenContext.value.token
    }, designTokenContext.value.components),
    formatToken
  })));
  return [mergedTheme, computed(() => cacheToken.value[0]), computed(() => designTokenContext.value.hashed ? cacheToken.value[1] : "")];
}
const Empty$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token] = useToken();
    const themeStyle = computed(() => {
      const bgColor = new TinyColor(token.value.colorBgBase);
      if (bgColor.toHsl().l < 0.5) {
        return {
          opacity: 0.65
        };
      }
      return {};
    });
    return () => createVNode("svg", {
      "style": themeStyle.value,
      "width": "184",
      "height": "152",
      "viewBox": "0 0 184 152",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("g", {
      "transform": "translate(24 31.67)"
    }, [createVNode("ellipse", {
      "fill-opacity": ".8",
      "fill": "#F5F5F7",
      "cx": "67.797",
      "cy": "106.89",
      "rx": "67.797",
      "ry": "12.668"
    }, null), createVNode("path", {
      "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      "fill": "#AEB8C2"
    }, null), createVNode("path", {
      "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      "fill": "url(#linearGradient-1)",
      "transform": "translate(13.56)"
    }, null), createVNode("path", {
      "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      "fill": "#F5F5F7"
    }, null), createVNode("path", {
      "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      "fill": "#DCE0E6"
    }, null)]), createVNode("path", {
      "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      "fill": "#DCE0E6"
    }, null), createVNode("g", {
      "transform": "translate(149.65 15.383)",
      "fill": "#FFF"
    }, [createVNode("ellipse", {
      "cx": "20.654",
      "cy": "3.167",
      "rx": "2.849",
      "ry": "2.815"
    }, null), createVNode("path", {
      "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Empty$2.PRESENTED_IMAGE_DEFAULT = true;
const DefaultEmptyImg = Empty$2;
const Simple = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token] = useToken();
    const color = computed(() => {
      const {
        colorFill,
        colorFillTertiary,
        colorFillQuaternary,
        colorBgContainer
      } = token.value;
      return {
        borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexString(),
        shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexString(),
        contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexString()
      };
    });
    return () => createVNode("svg", {
      "width": "64",
      "height": "41",
      "viewBox": "0 0 64 41",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      "transform": "translate(0 1)",
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("ellipse", {
      "fill": color.value.shadowColor,
      "cx": "32",
      "cy": "33",
      "rx": "32",
      "ry": "7"
    }, null), createVNode("g", {
      "fill-rule": "nonzero",
      "stroke": color.value.borderColor
    }, [createVNode("path", {
      "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), createVNode("path", {
      "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      "fill": color.value.contentColor
    }, null)])])]);
  }
});
Simple.PRESENTED_IMAGE_SIMPLE = true;
const SimpleEmptyImg = Simple;
const genSharedEmptyStyle = (token) => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      "&-normal": {
        marginBlock: marginXL,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: marginXS,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
const useStyle$1 = genComponentStyleHook("Empty", (token) => {
  const {
    componentCls,
    controlHeightLG
  } = token;
  const emptyToken = merge(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const defaultEmptyImg = createVNode(DefaultEmptyImg, null, null);
const simpleEmptyImg = createVNode(SimpleEmptyImg, null, null);
const emptyProps = () => ({
  prefixCls: String,
  imageStyle: objectType(),
  image: anyType(),
  description: anyType()
});
const Empty = defineComponent({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: emptyProps(),
  setup(props, _ref) {
    let {
      slots = {},
      attrs
    } = _ref;
    const {
      direction,
      prefixCls: prefixClsRef
    } = useConfigInject("empty", props);
    const [wrapSSR, hashId] = useStyle$1(prefixClsRef);
    return () => {
      var _a, _b;
      const prefixCls = prefixClsRef.value;
      const _c = _extends(_extends({}, props), attrs), {
        image = ((_a = slots.image) === null || _a === void 0 ? void 0 : _a.call(slots)) || defaultEmptyImg,
        description = ((_b = slots.description) === null || _b === void 0 ? void 0 : _b.call(slots)) || void 0,
        imageStyle,
        class: className = ""
      } = _c, restProps = __rest(_c, ["image", "description", "imageStyle", "class"]);
      return wrapSSR(createVNode(LocaleReceiver, {
        "componentName": "Empty",
        "children": (locale2) => {
          const des = typeof description !== "undefined" ? description : locale2.description;
          const alt = typeof des === "string" ? des : "empty";
          let imageNode = null;
          if (typeof image === "string") {
            imageNode = createVNode("img", {
              "alt": alt,
              "src": image
            }, null);
          } else {
            imageNode = image;
          }
          return createVNode("div", _objectSpread$6({
            "class": classNames(prefixCls, className, hashId.value, {
              [`${prefixCls}-normal`]: image === simpleEmptyImg,
              [`${prefixCls}-rtl`]: direction.value === "rtl"
            })
          }, restProps), [createVNode("div", {
            "class": `${prefixCls}-image`,
            "style": imageStyle
          }, [imageNode]), des && createVNode("p", {
            "class": `${prefixCls}-description`
          }, [des]), slots.default && createVNode("div", {
            "class": `${prefixCls}-footer`
          }, [filterEmpty(slots.default())])]);
        }
      }, null));
    };
  }
});
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
const Empty$1 = withInstall(Empty);
const DefaultRenderEmpty = (props) => {
  const {
    prefixCls
  } = useConfigInject("empty", props);
  const renderHtml = (componentName) => {
    switch (componentName) {
      case "Table":
      case "List":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE,
          "class": `${prefixCls.value}-small`
        }, null);
      default:
        return createVNode(Empty$1, null, null);
    }
  };
  return renderHtml(props.componentName);
};
function renderEmpty(componentName) {
  return createVNode(DefaultRenderEmpty, {
    "componentName": componentName
  }, null);
}
const SizeContextKey = Symbol("SizeContextKey");
const useInjectSize = () => {
  return inject(SizeContextKey, ref(void 0));
};
const useProviderSize = (size) => {
  const parentSize = useInjectSize();
  provide(SizeContextKey, computed(() => size.value || parentSize.value));
  return size;
};
const useConfigInject = (name, props) => {
  const sizeContext = useInjectSize();
  const disabledContext = useInjectDisabled();
  const configProvider = inject(configProviderKey, _extends(_extends({}, defaultConfigProvider), {
    renderEmpty: (name2) => h(DefaultRenderEmpty, {
      componentName: name2
    })
  }));
  const prefixCls = computed(() => configProvider.getPrefixCls(name, props.prefixCls));
  const direction = computed(() => {
    var _a, _b;
    return (_a = props.direction) !== null && _a !== void 0 ? _a : (_b = configProvider.direction) === null || _b === void 0 ? void 0 : _b.value;
  });
  const iconPrefixCls = computed(() => {
    var _a;
    return (_a = props.iconPrefixCls) !== null && _a !== void 0 ? _a : configProvider.iconPrefixCls.value;
  });
  const rootPrefixCls = computed(() => configProvider.getPrefixCls());
  const autoInsertSpaceInButton = computed(() => {
    var _a;
    return (_a = configProvider.autoInsertSpaceInButton) === null || _a === void 0 ? void 0 : _a.value;
  });
  const renderEmpty2 = configProvider.renderEmpty;
  const space = configProvider.space;
  const pageHeader = configProvider.pageHeader;
  const form = configProvider.form;
  const getTargetContainer = computed(() => {
    var _a, _b;
    return (_a = props.getTargetContainer) !== null && _a !== void 0 ? _a : (_b = configProvider.getTargetContainer) === null || _b === void 0 ? void 0 : _b.value;
  });
  const getPopupContainer = computed(() => {
    var _a, _b, _c;
    return (_b = (_a = props.getContainer) !== null && _a !== void 0 ? _a : props.getPopupContainer) !== null && _b !== void 0 ? _b : (_c = configProvider.getPopupContainer) === null || _c === void 0 ? void 0 : _c.value;
  });
  const dropdownMatchSelectWidth = computed(() => {
    var _a, _b;
    return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = configProvider.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
  });
  const virtual = computed(() => {
    var _a;
    return (props.virtual === void 0 ? ((_a = configProvider.virtual) === null || _a === void 0 ? void 0 : _a.value) !== false : props.virtual !== false) && dropdownMatchSelectWidth.value !== false;
  });
  const size = computed(() => props.size || sizeContext.value);
  const autocomplete = computed(() => {
    var _a, _b, _c;
    return (_a = props.autocomplete) !== null && _a !== void 0 ? _a : (_c = (_b = configProvider.input) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.autocomplete;
  });
  const disabled = computed(() => {
    var _a;
    return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
  });
  const csp = computed(() => {
    var _a;
    return (_a = props.csp) !== null && _a !== void 0 ? _a : configProvider.csp;
  });
  const wave = computed(() => {
    var _a, _b;
    return (_a = props.wave) !== null && _a !== void 0 ? _a : (_b = configProvider.wave) === null || _b === void 0 ? void 0 : _b.value;
  });
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    getPopupContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty: renderEmpty2,
    virtual,
    dropdownMatchSelectWidth,
    rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete,
    csp,
    iconPrefixCls,
    disabled,
    select: configProvider.select,
    wave
  };
};
const PropTypes = createTypes({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
PropTypes.extend([{
  name: "looseBool",
  getter: true,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: true,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: true,
  type: null
}]);
const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
const SiderCollapsedKey = Symbol("siderCollapsed");
const SiderHookProviderKey = Symbol("siderHookProvider");
const genLayoutLightStyle = (token) => {
  const {
    componentCls,
    colorBgContainer,
    colorBgBody,
    colorText
  } = token;
  return {
    [`${componentCls}-sider-light`]: {
      background: colorBgContainer,
      [`${componentCls}-sider-trigger`]: {
        color: colorText,
        background: colorBgContainer
      },
      [`${componentCls}-sider-zero-width-trigger`]: {
        color: colorText,
        background: colorBgContainer,
        border: `1px solid ${colorBgBody}`,
        borderInlineStart: 0
      }
    }
  };
};
const genLayoutStyle = (token) => {
  const {
    antCls,
    // .ant
    componentCls,
    // .ant-layout
    colorText,
    colorTextLightSolid,
    colorBgHeader,
    colorBgBody,
    colorBgTrigger,
    layoutHeaderHeight,
    layoutHeaderPaddingInline,
    layoutHeaderColor,
    layoutFooterPadding,
    layoutTriggerHeight,
    layoutZeroTriggerSize,
    motionDurationMid,
    motionDurationSlow,
    fontSize,
    borderRadius
  } = token;
  return {
    [componentCls]: _extends(_extends({
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: colorBgBody,
      "&, *": {
        boxSizing: "border-box"
      },
      [`&${componentCls}-has-sider`]: {
        flexDirection: "row",
        [`> ${componentCls}, > ${componentCls}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${componentCls}-header, &${componentCls}-footer`]: {
        flex: "0 0 auto"
      },
      [`${componentCls}-header`]: {
        height: layoutHeaderHeight,
        paddingInline: layoutHeaderPaddingInline,
        color: layoutHeaderColor,
        lineHeight: `${layoutHeaderHeight}px`,
        background: colorBgHeader,
        // Other components/menu/style/index.less line:686
        // Integration with header element so menu items have the same height
        [`${antCls}-menu`]: {
          lineHeight: "inherit"
        }
      },
      [`${componentCls}-footer`]: {
        padding: layoutFooterPadding,
        color: colorText,
        fontSize,
        background: colorBgBody
      },
      [`${componentCls}-content`]: {
        flex: "auto",
        // fix firefox can't set height smaller than content on flex item
        minHeight: 0
      },
      [`${componentCls}-sider`]: {
        position: "relative",
        // fix firefox can't set width smaller than content on flex item
        minWidth: 0,
        background: colorBgHeader,
        transition: `all ${motionDurationMid}, background 0s`,
        "&-children": {
          height: "100%",
          // Hack for fixing margin collapse bug
          // https://github.com/ant-design/ant-design/issues/7967
          // solution from https://stackoverflow.com/a/33132624/3040605
          marginTop: -0.1,
          paddingTop: 0.1,
          [`${antCls}-menu${antCls}-menu-inline-collapsed`]: {
            width: "auto"
          }
        },
        "&-has-trigger": {
          paddingBottom: layoutTriggerHeight
        },
        "&-right": {
          order: 1
        },
        "&-trigger": {
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          height: layoutTriggerHeight,
          color: colorTextLightSolid,
          lineHeight: `${layoutTriggerHeight}px`,
          textAlign: "center",
          background: colorBgTrigger,
          cursor: "pointer",
          transition: `all ${motionDurationMid}`
        },
        "&-zero-width": {
          "> *": {
            overflow: "hidden"
          },
          "&-trigger": {
            position: "absolute",
            top: layoutHeaderHeight,
            insetInlineEnd: -layoutZeroTriggerSize,
            zIndex: 1,
            width: layoutZeroTriggerSize,
            height: layoutZeroTriggerSize,
            color: colorTextLightSolid,
            fontSize: token.fontSizeXL,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: colorBgHeader,
            borderStartStartRadius: 0,
            borderStartEndRadius: borderRadius,
            borderEndEndRadius: borderRadius,
            borderEndStartRadius: 0,
            cursor: "pointer",
            transition: `background ${motionDurationSlow} ease`,
            "&::after": {
              position: "absolute",
              inset: 0,
              background: "transparent",
              transition: `all ${motionDurationSlow}`,
              content: '""'
            },
            "&:hover::after": {
              // FIXME: Hardcode, but seems no need to create a token for this
              background: `rgba(255, 255, 255, 0.2)`
            },
            "&-right": {
              insetInlineStart: -layoutZeroTriggerSize,
              borderStartStartRadius: borderRadius,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: borderRadius
            }
          }
        }
      }
    }, genLayoutLightStyle(token)), {
      // RTL
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
};
const useStyle = genComponentStyleHook("Layout", (token) => {
  const {
    colorText,
    controlHeightSM,
    controlHeight,
    controlHeightLG,
    marginXXS
  } = token;
  const layoutHeaderPaddingInline = controlHeightLG * 1.25;
  const layoutToken = merge(token, {
    // Layout
    layoutHeaderHeight: controlHeight * 2,
    layoutHeaderPaddingInline,
    layoutHeaderColor: colorText,
    layoutFooterPadding: `${controlHeightSM}px ${layoutHeaderPaddingInline}px`,
    layoutTriggerHeight: controlHeightLG + marginXXS * 2,
    layoutZeroTriggerSize: controlHeightLG
  });
  return [genLayoutStyle(layoutToken)];
}, (token) => {
  const {
    colorBgLayout
  } = token;
  return {
    colorBgHeader: "#001529",
    colorBgBody: colorBgLayout,
    colorBgTrigger: "#002140"
  };
});
const basicProps = () => ({
  prefixCls: String,
  hasSider: {
    type: Boolean,
    default: void 0
  },
  tagName: String
});
function generator(_ref) {
  let {
    suffixCls,
    tagName,
    name
  } = _ref;
  return (BasicComponent) => {
    const Adapter = defineComponent({
      compatConfig: {
        MODE: 3
      },
      name,
      props: basicProps(),
      setup(props, _ref2) {
        let {
          slots
        } = _ref2;
        const {
          prefixCls
        } = useConfigInject(suffixCls, props);
        return () => {
          const basicComponentProps = _extends(_extends({}, props), {
            prefixCls: prefixCls.value,
            tagName
          });
          return createVNode(BasicComponent, basicComponentProps, slots);
        };
      }
    });
    return Adapter;
  };
}
const Basic = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: basicProps(),
  setup(props, _ref3) {
    let {
      slots
    } = _ref3;
    return () => createVNode(props.tagName, {
      class: props.prefixCls
    }, slots);
  }
});
const BasicLayout = defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: basicProps(),
  setup(props, _ref4) {
    let {
      slots,
      attrs
    } = _ref4;
    const {
      prefixCls,
      direction
    } = useConfigInject("", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const siders = ref([]);
    const siderHookProvider = {
      addSider: (id) => {
        siders.value = [...siders.value, id];
      },
      removeSider: (id) => {
        siders.value = siders.value.filter((currentId) => currentId !== id);
      }
    };
    provide(SiderHookProviderKey, siderHookProvider);
    const divCls = computed(() => {
      const {
        prefixCls: prefixCls2,
        hasSider
      } = props;
      return {
        [hashId.value]: true,
        [`${prefixCls2}`]: true,
        [`${prefixCls2}-has-sider`]: typeof hasSider === "boolean" ? hasSider : siders.value.length > 0,
        [`${prefixCls2}-rtl`]: direction.value === "rtl"
      };
    });
    return () => {
      const {
        tagName
      } = props;
      return wrapSSR(createVNode(tagName, _extends(_extends({}, attrs), {
        class: [divCls.value, attrs.class]
      }), slots));
    };
  }
});
const Layout = generator({
  suffixCls: "layout",
  tagName: "section",
  name: "ALayout"
})(BasicLayout);
const Header = generator({
  suffixCls: "layout-header",
  tagName: "header",
  name: "ALayoutHeader"
})(Basic);
const Footer = generator({
  suffixCls: "layout-footer",
  tagName: "footer",
  name: "ALayoutFooter"
})(Basic);
const Content = generator({
  suffixCls: "layout-content",
  tagName: "main",
  name: "ALayoutContent"
})(Basic);
const Layout$1 = Layout;
const siderProps = () => ({
  prefixCls: String,
  collapsible: {
    type: Boolean,
    default: void 0
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  defaultCollapsed: {
    type: Boolean,
    default: void 0
  },
  reverseArrow: {
    type: Boolean,
    default: void 0
  },
  zeroWidthTriggerStyle: {
    type: Object,
    default: void 0
  },
  trigger: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  breakpoint: PropTypes.oneOf(tuple("xs", "sm", "md", "lg", "xl", "xxl", "xxxl")),
  theme: PropTypes.oneOf(tuple("light", "dark")).def("dark"),
  onBreakpoint: Function,
  onCollapse: Function
});
const generateId = /* @__PURE__ */ (() => {
  let i = 0;
  return function() {
    let prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    i += 1;
    return `${prefix}${i}`;
  };
})();
const Sider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ALayoutSider",
  inheritAttrs: false,
  props: initDefaultProps(siderProps(), {
    collapsible: false,
    defaultCollapsed: false,
    reverseArrow: false,
    width: 200,
    collapsedWidth: 80
  }),
  emits: ["breakpoint", "update:collapsed", "collapse"],
  setup(props, _ref) {
    let {
      emit,
      attrs,
      slots
    } = _ref;
    const {
      prefixCls
    } = useConfigInject("layout-sider", props);
    const siderHook = inject(SiderHookProviderKey, void 0);
    const collapsed = shallowRef(!!(props.collapsed !== void 0 ? props.collapsed : props.defaultCollapsed));
    const below = shallowRef(false);
    watch(() => props.collapsed, () => {
      collapsed.value = !!props.collapsed;
    });
    provide(SiderCollapsedKey, collapsed);
    const handleSetCollapsed = (value, type) => {
      if (props.collapsed === void 0) {
        collapsed.value = value;
      }
      emit("update:collapsed", value);
      emit("collapse", value, type);
    };
    shallowRef((mql2) => {
      below.value = mql2.matches;
      emit("breakpoint", mql2.matches);
      if (collapsed.value !== mql2.matches) {
        handleSetCollapsed(mql2.matches, "responsive");
      }
    });
    const uniqueId = generateId("ant-sider-");
    siderHook && siderHook.addSider(uniqueId);
    const toggle = () => {
      handleSetCollapsed(!collapsed.value, "clickTrigger");
    };
    return () => {
      var _a, _b;
      const pre = prefixCls.value;
      const {
        collapsedWidth,
        width,
        reverseArrow,
        zeroWidthTriggerStyle,
        trigger = (_a = slots.trigger) === null || _a === void 0 ? void 0 : _a.call(slots),
        collapsible,
        theme
      } = props;
      const rawWidth = collapsed.value ? collapsedWidth : width;
      const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
      const zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? createVNode("span", {
        "onClick": toggle,
        "class": classNames(`${pre}-zero-width-trigger`, `${pre}-zero-width-trigger-${reverseArrow ? "right" : "left"}`),
        "style": zeroWidthTriggerStyle
      }, [trigger || createVNode(BarsOutlined$1, null, null)]) : null;
      const iconObj = {
        expanded: reverseArrow ? createVNode(RightOutlined$1, null, null) : createVNode(LeftOutlined$1, null, null),
        collapsed: reverseArrow ? createVNode(LeftOutlined$1, null, null) : createVNode(RightOutlined$1, null, null)
      };
      const status = collapsed.value ? "collapsed" : "expanded";
      const defaultTrigger = iconObj[status];
      const triggerDom = trigger !== null ? zeroWidthTrigger || createVNode("div", {
        "class": `${pre}-trigger`,
        "onClick": toggle,
        "style": {
          width: siderWidth
        }
      }, [trigger || defaultTrigger]) : null;
      const divStyle = [attrs.style, {
        flex: `0 0 ${siderWidth}`,
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      }];
      const siderCls = classNames(pre, `${pre}-${theme}`, {
        [`${pre}-collapsed`]: !!collapsed.value,
        [`${pre}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
        [`${pre}-below`]: !!below.value,
        [`${pre}-zero-width`]: parseFloat(siderWidth) === 0
      }, attrs.class);
      return createVNode("aside", _objectSpread$6(_objectSpread$6({}, attrs), {}, {
        "class": siderCls,
        "style": divStyle
      }), [createVNode("div", {
        "class": `${pre}-children`
      }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)]), collapsible || below.value && zeroWidthTrigger ? triggerDom : null]);
    };
  }
});
const LayoutFooter = Footer;
const LayoutContent = Content;
const __nuxt_component_0 = _extends(Layout$1, {
  Header,
  Footer,
  Content,
  Sider,
  install: (app) => {
    app.component(Layout$1.name, Layout$1);
    app.component(Header.name, Header);
    app.component(Footer.name, Footer);
    app.component(Sider.name, Sider);
    app.component(Content.name, Content);
    return app;
  }
});

export { LocaleReceiver as $, AntdIcon as A, warning as B, skipFlattenKey as C, objectType as D, eventType as E, textEllipsis as F, clearFix as G, resetIcon as H, anyType as I, useToken as J, useInjectDisabled as K, LayoutContent as L, findDOMNode as M, localeValues as N, useConfigContextInject as O, PropTypes as P, configProviderProps as Q, RightOutlined$1 as R, SiderCollapsedKey as S, defaultIconPrefixCls as T, createTheme as U, defaultSeedToken as V, useConfigContextProvider as W, useProvideGlobalForm as X, useProviderSize as Y, useProviderDisabled as Z, __nuxt_component_0 as _, useLocaleReceiver as a, renderHelper as a0, useStyleRegister as a1, defaultConfig as a2, renderEmpty as a3, DesignTokenProvider as a4, wrapPromiseFn as a5, tupleNum as a6, canUseDom as a7, contains as a8, getEvents as a9, getSlot as aa, isFragment as ab, getOptionProps as ac, getStyle as ad, warningOnce as ae, DefaultRenderEmpty as af, isNumeric as ag, derivative as ah, defaultPresetColors as ai, genColorMapToken as aj, genFontMapToken as ak, genControlHeight as al, LayoutFooter as am, booleanType as b, classNames as c, genComponentStyleHook as d, enUS$1 as e, filterEmpty as f, getComponent as g, hasProp as h, isValidElement as i, arrayType as j, functionType as k, someType as l, merge as m, stringType as n, LeftOutlined$1 as o, genFocusOutline as p, genFocusStyle as q, resetComponent as r, splitAttrs as s, tuple as t, useConfigInject as u, initDefaultProps as v, withInstall as w, getPropsSlot as x, flattenChildren as y, isValid as z };
//# sourceMappingURL=index-C3iUBhQ2.mjs.map
