import _extends from '@babel/runtime/helpers/esm/extends';
import { inject, ref, h, getCurrentInstance, nextTick, reactive, defineComponent, createVNode, provide, computed, shallowRef, watch } from 'vue';
import { u as useConfigInject, c as classNames, d as genComponentStyleHook, t as tuple, m as merge } from './useConfigInject-BiTbSa3p.mjs';
import _objectSpread$6 from '@babel/runtime/helpers/esm/objectSpread2';
import { createTypes } from 'vue-types';
import { generate as generate$1, blue } from '@ant-design/colors';

// This icon file is generated automatically.
var BarsOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };

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
function warning(valid, message) {
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

  warning(isIconDefinition(icon));

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

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

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
  }), [createVNode(IconBase, {
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

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BarsOutlined = function BarsOutlined(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$2({}, p, {
    "icon": BarsOutlined$1
  }), null);
};

BarsOutlined.displayName = 'BarsOutlined';
BarsOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var RightOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RightOutlined = function RightOutlined(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$1({}, p, {
    "icon": RightOutlined$1
  }), null);
};

RightOutlined.displayName = 'RightOutlined';
RightOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var LeftOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LeftOutlined = function LeftOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": LeftOutlined$1
  }), null);
};

LeftOutlined.displayName = 'LeftOutlined';
LeftOutlined.inheritAttrs = false;

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
      color: colorText,
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
      }, [trigger || createVNode(BarsOutlined, null, null)]) : null;
      const iconObj = {
        expanded: reverseArrow ? createVNode(RightOutlined, null, null) : createVNode(LeftOutlined, null, null),
        collapsed: reverseArrow ? createVNode(LeftOutlined, null, null) : createVNode(RightOutlined, null, null)
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
const __nuxt_component_0 = _extends(Layout, {
  Header,
  Footer,
  Content,
  Sider,
  install: (app) => {
    app.component(Layout.name, Layout);
    app.component(Header.name, Header);
    app.component(Footer.name, Footer);
    app.component(Sider.name, Sider);
    app.component(Content.name, Content);
    return app;
  }
});

export { Icon as I, LayoutContent as L, PropTypes as P, RightOutlined as R, SiderCollapsedKey as S, __nuxt_component_0 as _, LeftOutlined as a, isNumeric as b, LayoutFooter as c, initDefaultProps as i };
//# sourceMappingURL=index-DJmKUcFc.mjs.map
