import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { createVNode, defineComponent, reactive, provide, watch, computed, onUnmounted, Teleport, ref, TransitionGroup, shallowRef, render, watchEffect, nextTick, Transition, withDirectives, vShow, inject, useSSRContext, mergeProps, withCtx, renderSlot, unref, isRef, toDisplayString, openBlock, createBlock, Fragment, renderList, resolveComponent, createTextVNode, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0$3 } from './nuxt-link-nvHjMUuE.mjs';
import { DownOutlined, MobileOutlined, MailOutlined } from '@ant-design/icons-vue';
import { e as warning, w as withInstall, i as useStyleRegister, o as objectType, j as useI18n, u as useRoute, _ as _export_sfc, c as arrayType, f as functionType } from '../server.mjs';
import { C as CloseOutlined, _ as __nuxt_component_0$2, S as SelectOption } from './index-QDwLyBdt.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-5qJONfuq.mjs';
import _objectSpread$7 from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { A as AntdIcon, B as localeValues, c as classNames, C as useConfigContextInject, u as useConfigInject, D as configProviderProps, E as defaultIconPrefixCls, F as createTheme, G as defaultSeedToken, H as useConfigContextProvider, I as useProvideGlobalForm, J as useProviderSize, K as useProviderDisabled, M as LocaleReceiver, n as initDefaultProps, N as isNumeric, g as genComponentStyleHook, O as renderHelper, x as useToken$1, w as resetIcon, Q as defaultConfig, T as renderEmpty, U as DesignTokenProvider, P as PropTypes, o as getPropsSlot, V as derivative$2, m as merge, r as resetComponent, W as defaultPresetColors, X as genColorMapToken, Y as genFontMapToken, Z as genControlHeight, $ as LayoutFooter, a0 as wrapPromiseFn } from './index-j6mHhOx5.mjs';
import { T as Typography$1, _ as __nuxt_component_4, B as Base$1, c as baseProps, C as CloseCircleFilled, K as KeyCode } from './Title-3mhyISKB.mjs';
import { o as omit, h as Portal$1, j as Portal, k as getMotion$1, K as Keyframe } from './index-nRVkJx5M.mjs';
import { L as LoadingOutlined, d as devWarning, N as NoCompactStyle } from '../../LoadingOutlined.mjs';
import { d as getTransitionGroupProps, g as getTransitionProps, a as getTransitionName } from './compact-item-0fAWjO3D.mjs';
import { generate } from '@ant-design/colors';
import { TinyColor } from '@ctrl/tinycolor';
import 'vue-bundle-renderer/runtime';
import '../../nitro/vercel.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@yeger/vue-masonry-wall';
import 'stylis';
import '../../DownOutlined.mjs';
import 'vue-types';
import 'resize-observer-polyfill';
import 'dom-align';
import 'lodash-es/isEqual.js';
import 'lodash-es';

var __rest$8 = function(s, e) {
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
const linkProps = () => omit(_extends(_extends({}, baseProps()), {
  ellipsis: {
    type: Boolean,
    default: void 0
  }
}), ["component"]);
const Link = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const _a = _extends(_extends({}, props), attrs), {
    ellipsis,
    rel
  } = _a, restProps = __rest$8(_a, ["ellipsis", "rel"]);
  const mergedProps = _extends(_extends({}, restProps), {
    rel: rel === void 0 && restProps.target === "_blank" ? "noopener noreferrer" : rel,
    ellipsis: !!ellipsis,
    component: "a"
  });
  delete mergedProps.navigate;
  return createVNode(Base$1, mergedProps, slots);
};
Link.displayName = "ATypographyLink";
Link.inheritAttrs = false;
Link.props = linkProps();
const Link$1 = Link;
const paragraphProps = () => omit(baseProps(), ["component"]);
const Paragraph = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const paragraphProps2 = _extends(_extends(_extends({}, props), {
    component: "div"
  }), attrs);
  return createVNode(Base$1, paragraphProps2, slots);
};
Paragraph.displayName = "ATypographyParagraph";
Paragraph.inheritAttrs = false;
Paragraph.props = paragraphProps();
const __nuxt_component_3 = Paragraph;
const textProps = () => _extends(_extends({}, omit(baseProps(), ["component"])), {
  ellipsis: {
    type: [Boolean, Object],
    default: void 0
  }
});
const Text = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const {
    ellipsis
  } = props;
  const textProps2 = _extends(_extends(_extends({}, props), {
    ellipsis: ellipsis && typeof ellipsis === "object" ? omit(ellipsis, ["expandable", "rows"]) : ellipsis,
    component: "span"
  }), attrs);
  return createVNode(Base$1, textProps2, slots);
};
Text.displayName = "ATypographyText";
Text.inheritAttrs = false;
Text.props = textProps();
const Text$1 = Text;
Typography$1.Text = Text$1;
Typography$1.Title = __nuxt_component_4;
Typography$1.Paragraph = __nuxt_component_3;
Typography$1.Link = Link$1;
Typography$1.Base = Base$1;
Typography$1.install = function(app) {
  app.component(Typography$1.name, Typography$1);
  app.component(Typography$1.Text.displayName, Text$1);
  app.component(Typography$1.Title.displayName, __nuxt_component_4);
  app.component(Typography$1.Paragraph.displayName, __nuxt_component_3);
  app.component(Typography$1.Link.displayName, Link$1);
  return app;
};

// This icon file is generated automatically.
var ExclamationCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
const ExclamationCircleFilledSvg = ExclamationCircleFilled$2;

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExclamationCircleFilled = function ExclamationCircleFilled(props, context) {
  var p = _objectSpread$6({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$6({}, p, {
    "icon": ExclamationCircleFilledSvg
  }), null);
};

ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';
ExclamationCircleFilled.inheritAttrs = false;
const ExclamationCircleFilled$1 = ExclamationCircleFilled;

// This icon file is generated automatically.
var CheckCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
const CheckCircleFilledSvg = CheckCircleFilled$2;

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckCircleFilled = function CheckCircleFilled(props, context) {
  var p = _objectSpread$5({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$5({}, p, {
    "icon": CheckCircleFilledSvg
  }), null);
};

CheckCircleFilled.displayName = 'CheckCircleFilled';
CheckCircleFilled.inheritAttrs = false;
const CheckCircleFilled$1 = CheckCircleFilled;

// This icon file is generated automatically.
var InfoCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };
const InfoCircleFilledSvg = InfoCircleFilled$2;

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InfoCircleFilled = function InfoCircleFilled(props, context) {
  var p = _objectSpread$4({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$4({}, p, {
    "icon": InfoCircleFilledSvg
  }), null);
};

InfoCircleFilled.displayName = 'InfoCircleFilled';
InfoCircleFilled.inheritAttrs = false;
const InfoCircleFilled$1 = InfoCircleFilled;

// This icon file is generated automatically.
var CheckCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "check-circle", "theme": "outlined" };
const CheckCircleOutlinedSvg = CheckCircleOutlined$2;

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckCircleOutlined = function CheckCircleOutlined(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$3({}, p, {
    "icon": CheckCircleOutlinedSvg
  }), null);
};

CheckCircleOutlined.displayName = 'CheckCircleOutlined';
CheckCircleOutlined.inheritAttrs = false;
const CheckCircleOutlined$1 = CheckCircleOutlined;

// This icon file is generated automatically.
var InfoCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, "name": "info-circle", "theme": "outlined" };
const InfoCircleOutlinedSvg = InfoCircleOutlined$2;

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InfoCircleOutlined = function InfoCircleOutlined(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": InfoCircleOutlinedSvg
  }), null);
};

InfoCircleOutlined.displayName = 'InfoCircleOutlined';
InfoCircleOutlined.inheritAttrs = false;
const InfoCircleOutlined$1 = InfoCircleOutlined;

// This icon file is generated automatically.
var CloseCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, "name": "close-circle", "theme": "outlined" };
const CloseCircleOutlinedSvg = CloseCircleOutlined$2;

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloseCircleOutlined = function CloseCircleOutlined(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": CloseCircleOutlinedSvg
  }), null);
};

CloseCircleOutlined.displayName = 'CloseCircleOutlined';
CloseCircleOutlined.inheritAttrs = false;
const CloseCircleOutlined$1 = CloseCircleOutlined;

// This icon file is generated automatically.
var ExclamationCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, "name": "exclamation-circle", "theme": "outlined" };
const ExclamationCircleOutlinedSvg = ExclamationCircleOutlined$2;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExclamationCircleOutlined = function ExclamationCircleOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": ExclamationCircleOutlinedSvg
  }), null);
};

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';
ExclamationCircleOutlined.inheritAttrs = false;
const ExclamationCircleOutlined$1 = ExclamationCircleOutlined;

let runtimeLocale = _extends({}, localeValues.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends(_extends({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = _extends({}, localeValues.Modal);
  }
}
const ANT_MARK = "internalMark";
const LocaleProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    warning(props2.ANT_MARK__ === ANT_MARK);
    const state = reactive({
      antLocale: _extends(_extends({}, props2.locale), {
        exist: true
      }),
      ANT_MARK__: ANT_MARK
    });
    provide("localeData", state);
    watch(() => props2.locale, (locale2) => {
      changeConfirmLocale(locale2 && locale2.Modal);
      state.antLocale = _extends(_extends({}, locale2), {
        exist: true
      });
    }, {
      immediate: true
    });
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
LocaleProvider.install = function(app) {
  app.component(LocaleProvider.name, LocaleProvider);
  return app;
};
const locale = withInstall(LocaleProvider);
const Notice = defineComponent({
  name: "Notice",
  inheritAttrs: false,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    let closeTimer;
    let isUnMounted = false;
    const duration = computed(() => props2.duration === void 0 ? 4.5 : props2.duration);
    const startCloseTimer = () => {
      if (duration.value && !isUnMounted) {
        closeTimer = setTimeout(() => {
          close();
        }, duration.value * 1e3);
      }
    };
    const clearCloseTimer = () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
    };
    const close = (e) => {
      if (e) {
        e.stopPropagation();
      }
      clearCloseTimer();
      const {
        onClose,
        noticeKey
      } = props2;
      if (onClose) {
        onClose(noticeKey);
      }
    };
    const restartCloseTimer = () => {
      clearCloseTimer();
      startCloseTimer();
    };
    onUnmounted(() => {
      isUnMounted = true;
      clearCloseTimer();
    });
    watch([duration, () => props2.updateMark, () => props2.visible], (_ref2, _ref3) => {
      let [preDuration, preUpdateMark, preVisible] = _ref2;
      let [newDuration, newUpdateMark, newVisible] = _ref3;
      if (preDuration !== newDuration || preUpdateMark !== newUpdateMark || preVisible !== newVisible && newVisible) {
        restartCloseTimer();
      }
    }, {
      flush: "post"
    });
    return () => {
      var _a, _b;
      const {
        prefixCls,
        closable,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots),
        onClick,
        holder
      } = props2;
      const {
        class: className,
        style
      } = attrs;
      const componentClass = `${prefixCls}-notice`;
      const dataOrAriaAttributeProps = Object.keys(attrs).reduce((acc, key2) => {
        if (key2.startsWith("data-") || key2.startsWith("aria-") || key2 === "role") {
          acc[key2] = attrs[key2];
        }
        return acc;
      }, {});
      const node = createVNode("div", _objectSpread$7({
        "class": classNames(componentClass, className, {
          [`${componentClass}-closable`]: closable
        }),
        "style": style,
        "onMouseenter": clearCloseTimer,
        "onMouseleave": startCloseTimer,
        "onClick": onClick
      }, dataOrAriaAttributeProps), [createVNode("div", {
        "class": `${componentClass}-content`
      }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)]), closable ? createVNode("a", {
        "tabindex": 0,
        "onClick": close,
        "class": `${componentClass}-close`
      }, [closeIcon || createVNode("span", {
        "class": `${componentClass}-close-x`
      }, null)]) : null]);
      if (holder) {
        return createVNode(Teleport, {
          "to": holder
        }, {
          default: () => node
        });
      }
      return node;
    };
  }
});
var __rest$7 = function(s, e) {
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
let seed$1 = 0;
const now$1 = Date.now();
function getUuid$1() {
  const id = seed$1;
  seed$1 += 1;
  return `rcNotification_${now$1}_${id}`;
}
const Notification$1 = defineComponent({
  name: "Notification",
  inheritAttrs: false,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(props2, _ref) {
    let {
      attrs,
      expose,
      slots
    } = _ref;
    const hookRefs = /* @__PURE__ */ new Map();
    const notices = ref([]);
    const transitionProps = computed(() => {
      const {
        prefixCls,
        animation = "fade"
      } = props2;
      let name = props2.transitionName;
      if (!name && animation) {
        name = `${prefixCls}-${animation}`;
      }
      return getTransitionGroupProps(name);
    });
    const add = (originNotice, holderCallback) => {
      const key2 = originNotice.key || getUuid$1();
      const notice2 = _extends(_extends({}, originNotice), {
        key: key2
      });
      const {
        maxCount: maxCount2
      } = props2;
      const noticeIndex = notices.value.map((v) => v.notice.key).indexOf(key2);
      const updatedNotices = notices.value.concat();
      if (noticeIndex !== -1) {
        updatedNotices.splice(noticeIndex, 1, {
          notice: notice2,
          holderCallback
        });
      } else {
        if (maxCount2 && notices.value.length >= maxCount2) {
          notice2.key = updatedNotices[0].notice.key;
          notice2.updateMark = getUuid$1();
          notice2.userPassKey = key2;
          updatedNotices.shift();
        }
        updatedNotices.push({
          notice: notice2,
          holderCallback
        });
      }
      notices.value = updatedNotices;
    };
    const remove = (removeKey) => {
      notices.value = notices.value.filter((_ref2) => {
        let {
          notice: {
            key: key2,
            userPassKey
          }
        } = _ref2;
        const mergedKey = userPassKey || key2;
        return mergedKey !== removeKey;
      });
    };
    expose({
      add,
      remove,
      notices
    });
    return () => {
      var _a;
      const {
        prefixCls,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots, {
          prefixCls
        })
      } = props2;
      const noticeNodes = notices.value.map((_ref3, index) => {
        let {
          notice: notice2,
          holderCallback
        } = _ref3;
        const updateMark = index === notices.value.length - 1 ? notice2.updateMark : void 0;
        const {
          key: key2,
          userPassKey
        } = notice2;
        const {
          content
        } = notice2;
        const noticeProps = _extends(_extends(_extends({
          prefixCls,
          closeIcon: typeof closeIcon === "function" ? closeIcon({
            prefixCls
          }) : closeIcon
        }, notice2), notice2.props), {
          key: key2,
          noticeKey: userPassKey || key2,
          updateMark,
          onClose: (noticeKey) => {
            var _a2;
            remove(noticeKey);
            (_a2 = notice2.onClose) === null || _a2 === void 0 ? void 0 : _a2.call(notice2);
          },
          onClick: notice2.onClick
        });
        if (holderCallback) {
          return createVNode("div", {
            "key": key2,
            "class": `${prefixCls}-hook-holder`,
            "ref": (div) => {
              if (typeof key2 === "undefined") {
                return;
              }
              if (div) {
                hookRefs.set(key2, div);
                holderCallback(div, noticeProps);
              } else {
                hookRefs.delete(key2);
              }
            }
          }, null);
        }
        return createVNode(Notice, _objectSpread$7(_objectSpread$7({}, noticeProps), {}, {
          "class": classNames(noticeProps.class, props2.hashId)
        }), {
          default: () => [typeof content === "function" ? content({
            prefixCls
          }) : content]
        });
      });
      const className = {
        [prefixCls]: 1,
        [attrs.class]: !!attrs.class,
        [props2.hashId]: true
      };
      return createVNode("div", {
        "class": className,
        "style": attrs.style || {
          top: "65px",
          left: "50%"
        }
      }, [createVNode(TransitionGroup, _objectSpread$7({
        "tag": "div"
      }, transitionProps.value), {
        default: () => [noticeNodes]
      })]);
    };
  }
});
Notification$1.newInstance = function newNotificationInstance(properties, callback) {
  const _a = properties || {}, {
    name = "notification",
    getContainer: getContainer2,
    appContext,
    prefixCls: customizePrefixCls,
    rootPrefixCls: customRootPrefixCls,
    transitionName: customTransitionName,
    hasTransitionName: hasTransitionName2,
    useStyle: useStyle2
  } = _a, props2 = __rest$7(_a, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]);
  const div = (void 0).createElement("div");
  if (getContainer2) {
    const root = getContainer2();
    root.appendChild(div);
  } else {
    (void 0).body.appendChild(div);
  }
  const Wrapper = defineComponent({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(_props, _ref4) {
      let {
        attrs
      } = _ref4;
      const notiRef = shallowRef();
      const prefixCls = computed(() => globalConfigForApi.getPrefixCls(name, customizePrefixCls));
      const [, hashId] = useStyle2(prefixCls);
      return () => {
        const global = globalConfigForApi;
        const rootPrefixCls = global.getRootPrefixCls(customRootPrefixCls, prefixCls.value);
        const transitionName2 = hasTransitionName2 ? customTransitionName : `${prefixCls.value}-${customTransitionName}`;
        return createVNode(__nuxt_component_0$1, _objectSpread$7(_objectSpread$7({}, global), {}, {
          "prefixCls": rootPrefixCls
        }), {
          default: () => [createVNode(Notification$1, _objectSpread$7(_objectSpread$7({
            "ref": notiRef
          }, attrs), {}, {
            "prefixCls": prefixCls.value,
            "transitionName": transitionName2,
            "hashId": hashId.value
          }), null)]
        });
      };
    }
  });
  const vm = createVNode(Wrapper, props2);
  vm.appContext = appContext || vm.appContext;
  render(vm, div);
};
const Notification$2 = Notification$1;
let seed = 0;
const now = Date.now();
function getUuid() {
  const id = seed;
  seed += 1;
  return `rcNotification_${now}_${id}`;
}
const Notification = defineComponent({
  name: "HookNotification",
  inheritAttrs: false,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const hookRefs = /* @__PURE__ */ new Map();
    const notices = computed(() => props2.notices);
    const transitionProps = computed(() => {
      let name = props2.transitionName;
      if (!name && props2.animation) {
        switch (typeof props2.animation) {
          case "string":
            name = props2.animation;
            break;
          case "function":
            name = props2.animation().name;
            break;
          case "object":
            name = props2.animation.name;
            break;
          default:
            name = `${props2.prefixCls}-fade`;
            break;
        }
      }
      return getTransitionGroupProps(name);
    });
    const remove = (key2) => props2.remove(key2);
    const placements = ref({});
    watch(notices, () => {
      const nextPlacements = {};
      Object.keys(placements.value).forEach((placement) => {
        nextPlacements[placement] = [];
      });
      props2.notices.forEach((config) => {
        const {
          placement = "topRight"
        } = config.notice;
        if (placement) {
          nextPlacements[placement] = nextPlacements[placement] || [];
          nextPlacements[placement].push(config);
        }
      });
      placements.value = nextPlacements;
    });
    const placementList = computed(() => Object.keys(placements.value));
    return () => {
      var _a;
      const {
        prefixCls,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots, {
          prefixCls
        })
      } = props2;
      const noticeNodes = placementList.value.map((placement) => {
        var _a2, _b;
        const noticesForPlacement = placements.value[placement];
        const classes = (_a2 = props2.getClassName) === null || _a2 === void 0 ? void 0 : _a2.call(props2, placement);
        const styles = (_b = props2.getStyles) === null || _b === void 0 ? void 0 : _b.call(props2, placement);
        const noticeNodesForPlacement = noticesForPlacement.map((_ref2, index) => {
          let {
            notice: notice2,
            holderCallback
          } = _ref2;
          const updateMark = index === notices.value.length - 1 ? notice2.updateMark : void 0;
          const {
            key: key2,
            userPassKey
          } = notice2;
          const {
            content
          } = notice2;
          const noticeProps = _extends(_extends(_extends({
            prefixCls,
            closeIcon: typeof closeIcon === "function" ? closeIcon({
              prefixCls
            }) : closeIcon
          }, notice2), notice2.props), {
            key: key2,
            noticeKey: userPassKey || key2,
            updateMark,
            onClose: (noticeKey) => {
              var _a3;
              remove(noticeKey);
              (_a3 = notice2.onClose) === null || _a3 === void 0 ? void 0 : _a3.call(notice2);
            },
            onClick: notice2.onClick
          });
          if (holderCallback) {
            return createVNode("div", {
              "key": key2,
              "class": `${prefixCls}-hook-holder`,
              "ref": (div) => {
                if (typeof key2 === "undefined") {
                  return;
                }
                if (div) {
                  hookRefs.set(key2, div);
                  holderCallback(div, noticeProps);
                } else {
                  hookRefs.delete(key2);
                }
              }
            }, null);
          }
          return createVNode(Notice, _objectSpread$7(_objectSpread$7({}, noticeProps), {}, {
            "class": classNames(noticeProps.class, props2.hashId)
          }), {
            default: () => [typeof content === "function" ? content({
              prefixCls
            }) : content]
          });
        });
        const className = {
          [prefixCls]: 1,
          [`${prefixCls}-${placement}`]: 1,
          [attrs.class]: !!attrs.class,
          [props2.hashId]: true,
          [classes]: !!classes
        };
        function onAfterLeave() {
          var _a3;
          if (noticesForPlacement.length > 0) {
            return;
          }
          Reflect.deleteProperty(placements.value, placement);
          (_a3 = props2.onAllRemoved) === null || _a3 === void 0 ? void 0 : _a3.call(props2);
        }
        return createVNode("div", {
          "key": placement,
          "class": className,
          "style": attrs.style || styles || {
            top: "65px",
            left: "50%"
          }
        }, [createVNode(TransitionGroup, _objectSpread$7(_objectSpread$7({
          "tag": "div"
        }, transitionProps.value), {}, {
          "onAfterLeave": onAfterLeave
        }), {
          default: () => [noticeNodesForPlacement]
        })]);
      });
      return createVNode(Portal$1, {
        "getContainer": props2.getContainer
      }, {
        default: () => [noticeNodes]
      });
    };
  }
});
const HookNotification = Notification;
var __rest$6 = function(s, e) {
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
const defaultGetContainer$1 = () => (void 0).body;
let uniqueKey = 0;
function mergeConfig() {
  const clone = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key2) => {
        const val = obj[key2];
        if (val !== void 0) {
          clone[key2] = val;
        }
      });
    }
  });
  return clone;
}
function useNotification$1() {
  let rootConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: getContainer2 = defaultGetContainer$1,
    motion,
    prefixCls,
    maxCount: maxCount2,
    getClassName,
    getStyles,
    onAllRemoved
  } = rootConfig, shareConfig = __rest$6(rootConfig, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]);
  const notices = shallowRef([]);
  const notificationsRef = shallowRef();
  const add = (originNotice, holderCallback) => {
    const key2 = originNotice.key || getUuid();
    const notice2 = _extends(_extends({}, originNotice), {
      key: key2
    });
    const noticeIndex = notices.value.map((v) => v.notice.key).indexOf(key2);
    const updatedNotices = notices.value.concat();
    if (noticeIndex !== -1) {
      updatedNotices.splice(noticeIndex, 1, {
        notice: notice2,
        holderCallback
      });
    } else {
      if (maxCount2 && notices.value.length >= maxCount2) {
        notice2.key = updatedNotices[0].notice.key;
        notice2.updateMark = getUuid();
        notice2.userPassKey = key2;
        updatedNotices.shift();
      }
      updatedNotices.push({
        notice: notice2,
        holderCallback
      });
    }
    notices.value = updatedNotices;
  };
  const removeNotice = (removeKey) => {
    notices.value = notices.value.filter((_ref) => {
      let {
        notice: {
          key: key2,
          userPassKey
        }
      } = _ref;
      const mergedKey = userPassKey || key2;
      return mergedKey !== removeKey;
    });
  };
  const destroy = () => {
    notices.value = [];
  };
  const contextHolder = () => createVNode(HookNotification, {
    "ref": notificationsRef,
    "prefixCls": prefixCls,
    "maxCount": maxCount2,
    "notices": notices.value,
    "remove": removeNotice,
    "getClassName": getClassName,
    "getStyles": getStyles,
    "animation": motion,
    "hashId": rootConfig.hashId,
    "onAllRemoved": onAllRemoved,
    "getContainer": getContainer2
  }, null);
  const taskQueue = shallowRef([]);
  const api2 = {
    open: (config) => {
      const mergedConfig = mergeConfig(shareConfig, config);
      if (mergedConfig.key === null || mergedConfig.key === void 0) {
        mergedConfig.key = `vc-notification-${uniqueKey}`;
        uniqueKey += 1;
      }
      taskQueue.value = [...taskQueue.value, {
        type: "open",
        config: mergedConfig
      }];
    },
    close: (key2) => {
      taskQueue.value = [...taskQueue.value, {
        type: "close",
        key: key2
      }];
    },
    destroy: () => {
      taskQueue.value = [...taskQueue.value, {
        type: "destroy"
      }];
    }
  };
  watch(taskQueue, () => {
    if (taskQueue.value.length) {
      taskQueue.value.forEach((task) => {
        switch (task.type) {
          case "open":
            add(task.config);
            break;
          case "close":
            removeNotice(task.key);
            break;
          case "destroy":
            destroy();
            break;
        }
      });
      taskQueue.value = [];
    }
  });
  return [api2, contextHolder];
}
const genMessageStyle = (token) => {
  const {
    componentCls,
    iconCls,
    boxShadowSecondary,
    colorBgElevated,
    colorSuccess,
    colorError,
    colorWarning,
    colorInfo,
    fontSizeLG,
    motionEaseInOutCirc,
    motionDurationSlow,
    marginXS,
    paddingXS,
    borderRadiusLG,
    zIndexPopup,
    // Custom token
    messageNoticeContentPadding
  } = token;
  const messageMoveIn = new Keyframe("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: paddingXS,
      transform: "translateY(0)",
      opacity: 1
    }
  });
  const messageMoveOut = new Keyframe("MessageMoveOut", {
    "0%": {
      maxHeight: token.height,
      padding: paddingXS,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        position: "fixed",
        top: marginXS,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: zIndexPopup,
        [`${componentCls}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
          animationName: messageMoveIn,
          animationDuration: motionDurationSlow,
          animationPlayState: "paused",
          animationTimingFunction: motionEaseInOutCirc
        },
        [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${componentCls}-move-up-leave`]: {
          animationName: messageMoveOut,
          animationDuration: motionDurationSlow,
          animationPlayState: "paused",
          animationTimingFunction: motionEaseInOutCirc
        },
        [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [`${componentCls}-notice`]: {
        padding: paddingXS,
        textAlign: "center",
        [iconCls]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: marginXS,
          fontSize: fontSizeLG
        },
        [`${componentCls}-notice-content`]: {
          display: "inline-block",
          padding: messageNoticeContentPadding,
          background: colorBgElevated,
          borderRadius: borderRadiusLG,
          boxShadow: boxShadowSecondary,
          pointerEvents: "all"
        },
        [`${componentCls}-success ${iconCls}`]: {
          color: colorSuccess
        },
        [`${componentCls}-error ${iconCls}`]: {
          color: colorError
        },
        [`${componentCls}-warning ${iconCls}`]: {
          color: colorWarning
        },
        [`
        ${componentCls}-info ${iconCls},
        ${componentCls}-loading ${iconCls}`]: {
          color: colorInfo
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${componentCls}-notice-pure-panel`]: {
        padding: 0,
        textAlign: "start"
      }
    }
  ];
};
const useStyle$3 = genComponentStyleHook("Message", (token) => {
  const combinedToken = merge(token, {
    messageNoticeContentPadding: `${(token.controlHeightLG - token.fontSize * token.lineHeight) / 2}px ${token.paddingSM}px`
  });
  return [genMessageStyle(combinedToken)];
}, (token) => ({
  height: 150,
  zIndexPopup: token.zIndexPopupBase + 10
}));
const TypeIcon = {
  info: createVNode(InfoCircleFilled$1, null, null),
  success: createVNode(CheckCircleFilled$1, null, null),
  error: createVNode(CloseCircleFilled, null, null),
  warning: createVNode(ExclamationCircleFilled$1, null, null),
  loading: createVNode(LoadingOutlined, null, null)
};
const PureContent$1 = defineComponent({
  name: "PureContent",
  inheritAttrs: false,
  props: ["prefixCls", "type", "icon"],
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      var _a;
      return createVNode("div", {
        "class": classNames(`${props2.prefixCls}-custom-content`, `${props2.prefixCls}-${props2.type}`)
      }, [props2.icon || TypeIcon[props2.type], createVNode("span", null, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
    };
  }
});
defineComponent({
  name: "PurePanel",
  inheritAttrs: false,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(props2, _ref2) {
    let {
      slots,
      attrs
    } = _ref2;
    var _a;
    const {
      getPrefixCls
    } = useConfigContextInject();
    const prefixCls = computed(() => props2.prefixCls || getPrefixCls("message"));
    const [, hashId] = useStyle$3(prefixCls);
    return createVNode(Notice, _objectSpread$7(_objectSpread$7({}, attrs), {}, {
      "prefixCls": prefixCls.value,
      "class": classNames(hashId.value, `${prefixCls.value}-notice-pure-panel`),
      "noticeKey": "pure",
      "duration": null
    }), {
      default: () => [createVNode(PureContent$1, {
        "prefixCls": prefixCls.value,
        "type": props2.type,
        "icon": props2.icon
      }, {
        default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
      })]
    });
  }
});
var __rest$5 = function(s, e) {
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
const DEFAULT_OFFSET$1 = 8;
const DEFAULT_DURATION$1 = 3;
const Holder$1 = defineComponent({
  name: "Holder",
  inheritAttrs: false,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved"],
  setup(props2, _ref) {
    let {
      expose
    } = _ref;
    var _a, _b;
    const {
      getPrefixCls,
      getPopupContainer
    } = useConfigInject("message", props2);
    const prefixCls = computed(() => getPrefixCls("message", props2.prefixCls));
    const [, hashId] = useStyle$3(prefixCls);
    const getStyles = () => {
      var _a2;
      const top = (_a2 = props2.top) !== null && _a2 !== void 0 ? _a2 : DEFAULT_OFFSET$1;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof top === "number" ? `${top}px` : top
      };
    };
    const getClassName = () => classNames(hashId.value, props2.rtl ? `${prefixCls.value}-rtl` : "");
    const getNotificationMotion = () => {
      var _a2;
      return getMotion$1({
        prefixCls: prefixCls.value,
        animation: (_a2 = props2.animation) !== null && _a2 !== void 0 ? _a2 : `move-up`,
        transitionName: props2.transitionName
      });
    };
    const mergedCloseIcon = createVNode("span", {
      "class": `${prefixCls.value}-close-x`
    }, [createVNode(CloseOutlined, {
      "class": `${prefixCls.value}-close-icon`
    }, null)]);
    const [api2, holder] = useNotification$1({
      //@ts-ignore
      getStyles,
      prefixCls: prefixCls.value,
      getClassName,
      motion: getNotificationMotion,
      closable: false,
      closeIcon: mergedCloseIcon,
      duration: (_a = props2.duration) !== null && _a !== void 0 ? _a : DEFAULT_DURATION$1,
      getContainer: (_b = props2.staticGetContainer) !== null && _b !== void 0 ? _b : getPopupContainer.value,
      maxCount: props2.maxCount,
      onAllRemoved: props2.onAllRemoved
    });
    expose(_extends(_extends({}, api2), {
      prefixCls,
      hashId
    }));
    return holder;
  }
});
let keyIndex = 0;
function useInternalMessage(messageConfig) {
  const holderRef = shallowRef(null);
  const holderKey = Symbol("messageHolderKey");
  const close = (key2) => {
    var _a;
    (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.close(key2);
  };
  const open = (config) => {
    if (!holderRef.value) {
      const fakeResult = () => {
      };
      fakeResult.then = () => {
      };
      return fakeResult;
    }
    const {
      open: originOpen,
      prefixCls,
      hashId
    } = holderRef.value;
    const noticePrefixCls = `${prefixCls}-notice`;
    const {
      content,
      icon,
      type,
      key: key2,
      class: className,
      onClose
    } = config, restConfig = __rest$5(config, ["content", "icon", "type", "key", "class", "onClose"]);
    let mergedKey = key2;
    if (mergedKey === void 0 || mergedKey === null) {
      keyIndex += 1;
      mergedKey = `antd-message-${keyIndex}`;
    }
    return wrapPromiseFn((resolve) => {
      originOpen(_extends(_extends({}, restConfig), {
        key: mergedKey,
        content: () => createVNode(PureContent$1, {
          "prefixCls": prefixCls,
          "type": type,
          "icon": typeof icon === "function" ? icon() : icon
        }, {
          default: () => [typeof content === "function" ? content() : content]
        }),
        placement: "top",
        // @ts-ignore
        class: classNames(type && `${noticePrefixCls}-${type}`, hashId, className),
        onClose: () => {
          onClose === null || onClose === void 0 ? void 0 : onClose();
          resolve();
        }
      }));
      return () => {
        close(mergedKey);
      };
    });
  };
  const destroy = (key2) => {
    var _a;
    if (key2 !== void 0) {
      close(key2);
    } else {
      (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.destroy();
    }
  };
  const wrapAPI = {
    open,
    destroy
  };
  const keys = ["info", "success", "warning", "error", "loading"];
  keys.forEach((type) => {
    const typeOpen = (jointContent, duration, onClose) => {
      let config;
      if (jointContent && typeof jointContent === "object" && "content" in jointContent) {
        config = jointContent;
      } else {
        config = {
          content: jointContent
        };
      }
      let mergedDuration;
      let mergedOnClose;
      if (typeof duration === "function") {
        mergedOnClose = duration;
      } else {
        mergedDuration = duration;
        mergedOnClose = onClose;
      }
      const mergedConfig = _extends(_extends({
        onClose: mergedOnClose,
        duration: mergedDuration
      }, config), {
        type
      });
      return open(mergedConfig);
    };
    wrapAPI[type] = typeOpen;
  });
  return [wrapAPI, () => createVNode(Holder$1, _objectSpread$7(_objectSpread$7({
    "key": holderKey
  }, messageConfig), {}, {
    "ref": holderRef
  }), null)];
}
function useMessage(messageConfig) {
  return useInternalMessage(messageConfig);
}
let defaultDuration$1 = 3;
let defaultTop$1;
let messageInstance;
let key = 1;
let localPrefixCls = "";
let transitionName = "move-up";
let hasTransitionName = false;
let getContainer = () => (void 0).body;
let maxCount$1;
let rtl$1 = false;
function getKeyThenIncreaseKey() {
  return key++;
}
function setMessageConfig(options) {
  if (options.top !== void 0) {
    defaultTop$1 = options.top;
    messageInstance = null;
  }
  if (options.duration !== void 0) {
    defaultDuration$1 = options.duration;
  }
  if (options.prefixCls !== void 0) {
    localPrefixCls = options.prefixCls;
  }
  if (options.getContainer !== void 0) {
    getContainer = options.getContainer;
    messageInstance = null;
  }
  if (options.transitionName !== void 0) {
    transitionName = options.transitionName;
    messageInstance = null;
    hasTransitionName = true;
  }
  if (options.maxCount !== void 0) {
    maxCount$1 = options.maxCount;
    messageInstance = null;
  }
  if (options.rtl !== void 0) {
    rtl$1 = options.rtl;
  }
}
function getMessageInstance(args, callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  Notification$2.newInstance({
    appContext: args.appContext,
    prefixCls: args.prefixCls || localPrefixCls,
    rootPrefixCls: args.rootPrefixCls,
    transitionName,
    hasTransitionName,
    style: {
      top: defaultTop$1
    },
    getContainer: getContainer || args.getPopupContainer,
    maxCount: maxCount$1,
    name: "message",
    useStyle: useStyle$3
  }, (instance) => {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  });
}
const typeToIcon$2 = {
  info: InfoCircleFilled$1,
  success: CheckCircleFilled$1,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled$1,
  loading: LoadingOutlined
};
const typeList = Object.keys(typeToIcon$2);
function notice$1(args) {
  const duration = args.duration !== void 0 ? args.duration : defaultDuration$1;
  const target = args.key || getKeyThenIncreaseKey();
  const closePromise = new Promise((resolve) => {
    const callback = () => {
      if (typeof args.onClose === "function") {
        args.onClose();
      }
      return resolve(true);
    };
    getMessageInstance(args, (instance) => {
      instance.notice({
        key: target,
        duration,
        style: args.style || {},
        class: args.class,
        content: (_ref) => {
          let {
            prefixCls
          } = _ref;
          const Icon = typeToIcon$2[args.type];
          const iconNode = Icon ? createVNode(Icon, null, null) : "";
          const messageClass = classNames(`${prefixCls}-custom-content`, {
            [`${prefixCls}-${args.type}`]: args.type,
            [`${prefixCls}-rtl`]: rtl$1 === true
          });
          return createVNode("div", {
            "class": messageClass
          }, [typeof args.icon === "function" ? args.icon() : args.icon || iconNode, createVNode("span", null, [typeof args.content === "function" ? args.content() : args.content])]);
        },
        onClose: callback,
        onClick: args.onClick
      });
    });
  });
  const result = () => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}
function isArgsProps(content) {
  return Object.prototype.toString.call(content) === "[object Object]" && !!content.content;
}
const api$1 = {
  open: notice$1,
  config: setMessageConfig,
  destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        const {
          removeNotice
        } = messageInstance;
        removeNotice(messageKey);
      } else {
        const {
          destroy
        } = messageInstance;
        destroy();
        messageInstance = null;
      }
    }
  }
};
function attachTypeApi(originalApi, type) {
  originalApi[type] = (content, duration, onClose) => {
    if (isArgsProps(content)) {
      return originalApi.open(_extends(_extends({}, content), {
        type
      }));
    }
    if (typeof duration === "function") {
      onClose = duration;
      duration = void 0;
    }
    return originalApi.open({
      content,
      duration,
      type,
      onClose
    });
  };
}
typeList.forEach((type) => attachTypeApi(api$1, type));
api$1.warn = api$1.warning;
api$1.useMessage = useMessage;
const message = api$1;
const genNotificationPlacementStyle = (token) => {
  const {
    componentCls,
    width,
    notificationMarginEdge
  } = token;
  const notificationTopFadeIn = new Keyframe("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  });
  const notificationBottomFadeIn = new Keyframe("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  });
  const notificationLeftFadeIn = new Keyframe("antNotificationLeftFadeIn", {
    "0%": {
      right: {
        _skip_check_: true,
        value: width
      },
      opacity: 0
    },
    "100%": {
      right: {
        _skip_check_: true,
        value: 0
      },
      opacity: 1
    }
  });
  return {
    [`&${componentCls}-top, &${componentCls}-bottom`]: {
      marginInline: 0
    },
    [`&${componentCls}-top`]: {
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationName: notificationTopFadeIn
      }
    },
    [`&${componentCls}-bottom`]: {
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationName: notificationBottomFadeIn
      }
    },
    [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: notificationMarginEdge,
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationName: notificationLeftFadeIn
      }
    }
  };
};
const genNotificationStyle = (token) => {
  const {
    iconCls,
    componentCls,
    // .ant-notification
    boxShadowSecondary,
    fontSizeLG,
    notificationMarginBottom,
    borderRadiusLG,
    colorSuccess,
    colorInfo,
    colorWarning,
    colorError,
    colorTextHeading,
    notificationBg,
    notificationPadding,
    notificationMarginEdge,
    motionDurationMid,
    motionEaseInOut,
    fontSize,
    lineHeight,
    width,
    notificationIconSize
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const notificationFadeIn = new Keyframe("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: true,
        value: width
      },
      opacity: 0
    },
    "100%": {
      left: {
        _skip_check_: true,
        value: 0
      },
      opacity: 1
    }
  });
  const notificationFadeOut = new Keyframe("antNotificationFadeOut", {
    "0%": {
      maxHeight: token.animationMaxHeight,
      marginBottom: notificationMarginBottom,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token)), {
        position: "fixed",
        zIndex: token.zIndexPopup,
        marginInlineEnd: notificationMarginEdge,
        [`${componentCls}-hook-holder`]: {
          position: "relative"
        },
        [`&${componentCls}-top, &${componentCls}-bottom`]: {
          [`${componentCls}-notice`]: {
            marginInline: "auto auto"
          }
        },
        [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
          [`${componentCls}-notice`]: {
            marginInlineEnd: "auto",
            marginInlineStart: 0
          }
        },
        //  animation
        [`${componentCls}-fade-enter, ${componentCls}-fade-appear`]: {
          animationDuration: token.motionDurationMid,
          animationTimingFunction: motionEaseInOut,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${componentCls}-fade-leave`]: {
          animationTimingFunction: motionEaseInOut,
          animationFillMode: "both",
          animationDuration: motionDurationMid,
          animationPlayState: "paused"
        },
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: notificationFadeIn,
          animationPlayState: "running"
        },
        [`${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
          animationName: notificationFadeOut,
          animationPlayState: "running"
        }
      }), genNotificationPlacementStyle(token)), {
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${componentCls}-notice-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [noticeCls]: {
        position: "relative",
        width,
        maxWidth: `calc(100vw - ${notificationMarginEdge * 2}px)`,
        marginBottom: notificationMarginBottom,
        marginInlineStart: "auto",
        padding: notificationPadding,
        overflow: "hidden",
        lineHeight,
        wordWrap: "break-word",
        background: notificationBg,
        borderRadius: borderRadiusLG,
        boxShadow: boxShadowSecondary,
        [`${componentCls}-close-icon`]: {
          fontSize,
          cursor: "pointer"
        },
        [`${noticeCls}-message`]: {
          marginBottom: token.marginXS,
          color: colorTextHeading,
          fontSize: fontSizeLG,
          lineHeight: token.lineHeightLG
        },
        [`${noticeCls}-description`]: {
          fontSize
        },
        [`&${noticeCls}-closable ${noticeCls}-message`]: {
          paddingInlineEnd: token.paddingLG
        },
        [`${noticeCls}-with-icon ${noticeCls}-message`]: {
          marginBottom: token.marginXS,
          marginInlineStart: token.marginSM + notificationIconSize,
          fontSize: fontSizeLG
        },
        [`${noticeCls}-with-icon ${noticeCls}-description`]: {
          marginInlineStart: token.marginSM + notificationIconSize,
          fontSize
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${noticeCls}-icon`]: {
          position: "absolute",
          fontSize: notificationIconSize,
          lineHeight: 0,
          // icon-font
          [`&-success${iconCls}`]: {
            color: colorSuccess
          },
          [`&-info${iconCls}`]: {
            color: colorInfo
          },
          [`&-warning${iconCls}`]: {
            color: colorWarning
          },
          [`&-error${iconCls}`]: {
            color: colorError
          }
        },
        [`${noticeCls}-close`]: {
          position: "absolute",
          top: token.notificationPaddingVertical,
          insetInlineEnd: token.notificationPaddingHorizontal,
          color: token.colorIcon,
          outline: "none",
          width: token.notificationCloseButtonSize,
          height: token.notificationCloseButtonSize,
          borderRadius: token.borderRadiusSM,
          transition: `background-color ${token.motionDurationMid}, color ${token.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: token.colorIconHover,
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContent
          }
        },
        [`${noticeCls}-btn`]: {
          float: "right",
          marginTop: token.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${noticeCls}-pure-panel`]: {
        margin: 0
      }
    }
  ];
};
const useStyle$2 = genComponentStyleHook("Notification", (token) => {
  const notificationPaddingVertical = token.paddingMD;
  const notificationPaddingHorizontal = token.paddingLG;
  const notificationToken = merge(token, {
    // default.less variables
    notificationBg: token.colorBgElevated,
    notificationPaddingVertical,
    notificationPaddingHorizontal,
    // index.less variables
    notificationPadding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`,
    notificationMarginBottom: token.margin,
    notificationMarginEdge: token.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: token.fontSizeLG * token.lineHeightLG,
    notificationCloseButtonSize: token.controlHeightLG * 0.55
  });
  return [genNotificationStyle(notificationToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase + 50,
  width: 384
}));
function getCloseIcon(prefixCls, closeIcon) {
  return closeIcon || createVNode("span", {
    "class": `${prefixCls}-close-x`
  }, [createVNode(CloseOutlined, {
    "class": `${prefixCls}-close-icon`
  }, null)]);
}
({
  info: createVNode(InfoCircleFilled$1, null, null),
  success: createVNode(CheckCircleFilled$1, null, null),
  error: createVNode(CloseCircleFilled, null, null),
  warning: createVNode(ExclamationCircleFilled$1, null, null),
  loading: createVNode(LoadingOutlined, null, null)
});
const typeToIcon$1 = {
  success: CheckCircleFilled$1,
  info: InfoCircleFilled$1,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled$1
};
function PureContent(_ref) {
  let {
    prefixCls,
    icon,
    type,
    message: message2,
    description,
    btn
  } = _ref;
  let iconNode = null;
  if (icon) {
    iconNode = createVNode("span", {
      "class": `${prefixCls}-icon`
    }, [renderHelper(icon)]);
  } else if (type) {
    const Icon = typeToIcon$1[type];
    iconNode = createVNode(Icon, {
      "class": `${prefixCls}-icon ${prefixCls}-icon-${type}`
    }, null);
  }
  return createVNode("div", {
    "class": classNames({
      [`${prefixCls}-with-icon`]: iconNode
    }),
    "role": "alert"
  }, [iconNode, createVNode("div", {
    "class": `${prefixCls}-message`
  }, [message2]), createVNode("div", {
    "class": `${prefixCls}-description`
  }, [description]), btn && createVNode("div", {
    "class": `${prefixCls}-btn`
  }, [btn])]);
}
defineComponent({
  name: "PurePanel",
  inheritAttrs: false,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(props2) {
    const {
      getPrefixCls
    } = useConfigInject("notification", props2);
    const prefixCls = computed(() => props2.prefixCls || getPrefixCls("notification"));
    const noticePrefixCls = computed(() => `${prefixCls.value}-notice`);
    const [, hashId] = useStyle$2(prefixCls);
    return () => {
      return createVNode(Notice, _objectSpread$7(_objectSpread$7({}, props2), {}, {
        "prefixCls": prefixCls.value,
        "class": classNames(hashId.value, `${noticePrefixCls.value}-pure-panel`),
        "noticeKey": "pure",
        "duration": null,
        "closable": props2.closable,
        "closeIcon": getCloseIcon(prefixCls.value, props2.closeIcon)
      }), {
        default: () => [createVNode(PureContent, {
          "prefixCls": noticePrefixCls.value,
          "icon": props2.icon,
          "type": props2.type,
          "message": props2.message,
          "description": props2.description,
          "btn": props2.btn
        }, null)]
      });
    };
  }
});
function getPlacementStyle(placement, top, bottom) {
  let style;
  top = typeof top === "number" ? `${top}px` : top;
  bottom = typeof bottom === "number" ? `${bottom}px` : bottom;
  switch (placement) {
    case "top":
      style = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top,
        bottom: "auto"
      };
      break;
    case "topLeft":
      style = {
        left: 0,
        top,
        bottom: "auto"
      };
      break;
    case "topRight":
      style = {
        right: 0,
        top,
        bottom: "auto"
      };
      break;
    case "bottom":
      style = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom
      };
      break;
    case "bottomLeft":
      style = {
        left: 0,
        top: "auto",
        bottom
      };
      break;
    default:
      style = {
        right: 0,
        top: "auto",
        bottom
      };
      break;
  }
  return style;
}
function getMotion(prefixCls) {
  return {
    name: `${prefixCls}-fade`
  };
}
var __rest$4 = function(s, e) {
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
const DEFAULT_OFFSET = 24;
const DEFAULT_DURATION = 4.5;
const Holder = defineComponent({
  name: "Holder",
  inheritAttrs: false,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(props2, _ref) {
    let {
      expose
    } = _ref;
    const {
      getPrefixCls,
      getPopupContainer
    } = useConfigInject("notification", props2);
    const prefixCls = computed(() => props2.prefixCls || getPrefixCls("notification"));
    const getStyles = (placement) => {
      var _a, _b;
      return getPlacementStyle(placement, (_a = props2.top) !== null && _a !== void 0 ? _a : DEFAULT_OFFSET, (_b = props2.bottom) !== null && _b !== void 0 ? _b : DEFAULT_OFFSET);
    };
    const [, hashId] = useStyle$2(prefixCls);
    const getClassName = () => classNames(hashId.value, {
      [`${prefixCls.value}-rtl`]: props2.rtl
    });
    const getNotificationMotion = () => getMotion(prefixCls.value);
    const [api2, holder] = useNotification$1({
      prefixCls: prefixCls.value,
      getStyles,
      getClassName,
      motion: getNotificationMotion,
      closable: true,
      closeIcon: getCloseIcon(prefixCls.value),
      duration: DEFAULT_DURATION,
      getContainer: () => {
        var _a, _b;
        return ((_a = props2.getPopupContainer) === null || _a === void 0 ? void 0 : _a.call(props2)) || ((_b = getPopupContainer.value) === null || _b === void 0 ? void 0 : _b.call(getPopupContainer)) || (void 0).body;
      },
      maxCount: props2.maxCount,
      hashId: hashId.value,
      onAllRemoved: props2.onAllRemoved
    });
    expose(_extends(_extends({}, api2), {
      prefixCls: prefixCls.value,
      hashId
    }));
    return holder;
  }
});
function useInternalNotification(notificationConfig) {
  const holderRef = shallowRef(null);
  const holderKey = Symbol("notificationHolderKey");
  const open = (config) => {
    if (!holderRef.value) {
      return;
    }
    const {
      open: originOpen,
      prefixCls,
      hashId
    } = holderRef.value;
    const noticePrefixCls = `${prefixCls}-notice`;
    const {
      message: message2,
      description,
      icon,
      type,
      btn,
      class: className
    } = config, restConfig = __rest$4(config, ["message", "description", "icon", "type", "btn", "class"]);
    return originOpen(_extends(_extends({
      placement: "topRight"
    }, restConfig), {
      content: () => createVNode(PureContent, {
        "prefixCls": noticePrefixCls,
        "icon": typeof icon === "function" ? icon() : icon,
        "type": type,
        "message": typeof message2 === "function" ? message2() : message2,
        "description": typeof description === "function" ? description() : description,
        "btn": typeof btn === "function" ? btn() : btn
      }, null),
      // @ts-ignore
      class: classNames(type && `${noticePrefixCls}-${type}`, hashId, className)
    }));
  };
  const destroy = (key2) => {
    var _a, _b;
    if (key2 !== void 0) {
      (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.close(key2);
    } else {
      (_b = holderRef.value) === null || _b === void 0 ? void 0 : _b.destroy();
    }
  };
  const wrapAPI = {
    open,
    destroy
  };
  const keys = ["success", "info", "warning", "error"];
  keys.forEach((type) => {
    wrapAPI[type] = (config) => open(_extends(_extends({}, config), {
      type
    }));
  });
  return [wrapAPI, () => createVNode(Holder, _objectSpread$7(_objectSpread$7({
    "key": holderKey
  }, notificationConfig), {}, {
    "ref": holderRef
  }), null)];
}
function useNotification(notificationConfig) {
  return useInternalNotification(notificationConfig);
}
const notificationInstance = {};
let defaultDuration = 4.5;
let defaultTop = "24px";
let defaultBottom = "24px";
let defaultPrefixCls$1 = "";
let defaultPlacement = "topRight";
let defaultGetContainer = () => (void 0).body;
let defaultCloseIcon = null;
let rtl = false;
let maxCount;
function setNotificationConfig(options) {
  const {
    duration,
    placement,
    bottom,
    top,
    getContainer: getContainer2,
    closeIcon,
    prefixCls
  } = options;
  if (prefixCls !== void 0) {
    defaultPrefixCls$1 = prefixCls;
  }
  if (duration !== void 0) {
    defaultDuration = duration;
  }
  if (placement !== void 0) {
    defaultPlacement = placement;
  }
  if (bottom !== void 0) {
    defaultBottom = typeof bottom === "number" ? `${bottom}px` : bottom;
  }
  if (top !== void 0) {
    defaultTop = typeof top === "number" ? `${top}px` : top;
  }
  if (getContainer2 !== void 0) {
    defaultGetContainer = getContainer2;
  }
  if (closeIcon !== void 0) {
    defaultCloseIcon = closeIcon;
  }
  if (options.rtl !== void 0) {
    rtl = options.rtl;
  }
  if (options.maxCount !== void 0) {
    maxCount = options.maxCount;
  }
}
function getNotificationInstance(_ref, callback) {
  let {
    prefixCls: customizePrefixCls,
    placement = defaultPlacement,
    getContainer: getContainer2 = defaultGetContainer,
    top,
    bottom,
    closeIcon = defaultCloseIcon,
    appContext
  } = _ref;
  const {
    getPrefixCls
  } = globalConfig();
  const prefixCls = getPrefixCls("notification", customizePrefixCls || defaultPrefixCls$1);
  const cacheKey = `${prefixCls}-${placement}-${rtl}`;
  const cacheInstance = notificationInstance[cacheKey];
  if (cacheInstance) {
    Promise.resolve(cacheInstance).then((instance) => {
      callback(instance);
    });
    return;
  }
  const notificationClass = classNames(`${prefixCls}-${placement}`, {
    [`${prefixCls}-rtl`]: rtl === true
  });
  Notification$2.newInstance({
    name: "notification",
    prefixCls: customizePrefixCls || defaultPrefixCls$1,
    useStyle: useStyle$2,
    class: notificationClass,
    style: getPlacementStyle(placement, top !== null && top !== void 0 ? top : defaultTop, bottom !== null && bottom !== void 0 ? bottom : defaultBottom),
    appContext,
    getContainer: getContainer2,
    closeIcon: (_ref2) => {
      let {
        prefixCls: prefixCls2
      } = _ref2;
      const closeIconToRender = createVNode("span", {
        "class": `${prefixCls2}-close-x`
      }, [renderHelper(closeIcon, {}, createVNode(CloseOutlined, {
        "class": `${prefixCls2}-close-icon`
      }, null))]);
      return closeIconToRender;
    },
    maxCount,
    hasTransitionName: true
  }, (notification2) => {
    notificationInstance[cacheKey] = notification2;
    callback(notification2);
  });
}
const typeToIcon = {
  success: CheckCircleOutlined$1,
  info: InfoCircleOutlined$1,
  error: CloseCircleOutlined$1,
  warning: ExclamationCircleOutlined$1
};
function notice(args) {
  const {
    icon,
    type,
    description,
    message: message2,
    btn
  } = args;
  const duration = args.duration === void 0 ? defaultDuration : args.duration;
  getNotificationInstance(args, (notification2) => {
    notification2.notice({
      content: (_ref3) => {
        let {
          prefixCls: outerPrefixCls
        } = _ref3;
        const prefixCls = `${outerPrefixCls}-notice`;
        let iconNode = null;
        if (icon) {
          iconNode = () => createVNode("span", {
            "class": `${prefixCls}-icon`
          }, [renderHelper(icon)]);
        } else if (type) {
          const Icon = typeToIcon[type];
          iconNode = () => createVNode(Icon, {
            "class": `${prefixCls}-icon ${prefixCls}-icon-${type}`
          }, null);
        }
        return createVNode("div", {
          "class": iconNode ? `${prefixCls}-with-icon` : ""
        }, [iconNode && iconNode(), createVNode("div", {
          "class": `${prefixCls}-message`
        }, [!description && iconNode ? createVNode("span", {
          "class": `${prefixCls}-message-single-line-auto-margin`
        }, null) : null, renderHelper(message2)]), createVNode("div", {
          "class": `${prefixCls}-description`
        }, [renderHelper(description)]), btn ? createVNode("span", {
          "class": `${prefixCls}-btn`
        }, [renderHelper(btn)]) : null]);
      },
      duration,
      closable: true,
      onClose: args.onClose,
      onClick: args.onClick,
      key: args.key,
      style: args.style || {},
      class: args.class
    });
  });
}
const api = {
  open: notice,
  close(key2) {
    Object.keys(notificationInstance).forEach((cacheKey) => Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
      instance.removeNotice(key2);
    }));
  },
  config: setNotificationConfig,
  destroy() {
    Object.keys(notificationInstance).forEach((cacheKey) => {
      Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
        instance.destroy();
      });
      delete notificationInstance[cacheKey];
    });
  }
};
const iconTypes = ["success", "info", "warning", "error"];
iconTypes.forEach((type) => {
  api[type] = (args) => api.open(_extends(_extends({}, args), {
    type
  }));
});
api.warn = api.warning;
api.useNotification = useNotification;
const notification = api;
function getStyle(globalPrefixCls, theme2) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  if (theme2.primaryColor) {
    fillColor(theme2.primaryColor, "primary");
    const primaryColor = new TinyColor(theme2.primaryColor);
    const primaryColors = generate(primaryColor.toRgbString());
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c) => c.lighten(35));
    variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c) => c.lighten(20));
    variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c) => c.tint(20));
    variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c) => c.tint(50));
    variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c) => c.setAlpha(c.getAlpha() * 0.3));
    variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c) => c.darken(2));
  }
  if (theme2.successColor) {
    fillColor(theme2.successColor, "success");
  }
  if (theme2.warningColor) {
    fillColor(theme2.warningColor, "warning");
  }
  if (theme2.errorColor) {
    fillColor(theme2.errorColor, "error");
  }
  if (theme2.infoColor) {
    fillColor(theme2.infoColor, "info");
  }
  const cssList = Object.keys(variables).map((key2) => `--${globalPrefixCls}-${key2}: ${variables[key2]};`);
  return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme2) {
  getStyle(globalPrefixCls, theme2);
}
const useStyle$1 = (iconPrefixCls) => {
  const [theme2, token] = useToken$1();
  return useStyleRegister(computed(() => ({
    theme: theme2.value,
    token: token.value,
    hashId: "",
    path: ["ant-design-icons", iconPrefixCls.value]
  })), () => [{
    [`.${iconPrefixCls.value}`]: _extends(_extends({}, resetIcon()), {
      [`.${iconPrefixCls.value} .${iconPrefixCls.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function useTheme(theme2, parentTheme) {
  const themeConfig = computed(() => (theme2 === null || theme2 === void 0 ? void 0 : theme2.value) || {});
  const parentThemeConfig = computed(() => themeConfig.value.inherit === false || !(parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.value) ? defaultConfig : parentTheme.value);
  const mergedTheme = computed(() => {
    if (!(theme2 === null || theme2 === void 0 ? void 0 : theme2.value)) {
      return parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.value;
    }
    const mergedComponents = _extends({}, parentThemeConfig.value.components);
    Object.keys(theme2.value.components || {}).forEach((componentName) => {
      mergedComponents[componentName] = _extends(_extends({}, mergedComponents[componentName]), theme2.value.components[componentName]);
    });
    return _extends(_extends(_extends({}, parentThemeConfig.value), themeConfig.value), {
      token: _extends(_extends({}, parentThemeConfig.value.token), themeConfig.value.token),
      components: mergedComponents
    });
  });
  return mergedTheme;
}
var __rest$3 = function(s, e) {
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
const defaultPrefixCls = "ant";
function getGlobalPrefixCls() {
  return globalConfigForApi.prefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalConfigForApi.iconPrefixCls || defaultIconPrefixCls;
}
const globalConfigBySet = reactive({});
const globalConfigForApi = reactive({});
watchEffect(() => {
  _extends(globalConfigForApi, globalConfigBySet);
  globalConfigForApi.prefixCls = getGlobalPrefixCls();
  globalConfigForApi.iconPrefixCls = getGlobalIconPrefixCls();
  globalConfigForApi.getPrefixCls = (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? `${globalConfigForApi.prefixCls}-${suffixCls}` : globalConfigForApi.prefixCls;
  };
  globalConfigForApi.getRootPrefixCls = () => {
    if (globalConfigForApi.prefixCls) {
      return globalConfigForApi.prefixCls;
    }
    return getGlobalPrefixCls();
  };
});
let stopWatchEffect;
const setGlobalConfig = (params) => {
  if (stopWatchEffect) {
    stopWatchEffect();
  }
  stopWatchEffect = watchEffect(() => {
    _extends(globalConfigBySet, reactive(params));
    _extends(globalConfigForApi, reactive(params));
  });
  if (params.theme) {
    registerTheme(getGlobalPrefixCls(), params.theme);
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    if (globalConfigForApi.prefixCls) {
      return globalConfigForApi.prefixCls;
    }
    return getGlobalPrefixCls();
  }
});
const ConfigProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: false,
  props: configProviderProps(),
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const parentContext = useConfigContextInject();
    const getPrefixCls = (suffixCls, customizePrefixCls) => {
      const {
        prefixCls = "ant"
      } = props2;
      if (customizePrefixCls)
        return customizePrefixCls;
      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    };
    const iconPrefixCls = computed(() => props2.iconPrefixCls || parentContext.iconPrefixCls.value || defaultIconPrefixCls);
    const shouldWrapSSR = computed(() => iconPrefixCls.value !== parentContext.iconPrefixCls.value);
    const csp = computed(() => {
      var _a;
      return props2.csp || ((_a = parentContext.csp) === null || _a === void 0 ? void 0 : _a.value);
    });
    const wrapSSR = useStyle$1(iconPrefixCls);
    const mergedTheme = useTheme(computed(() => props2.theme), computed(() => {
      var _a;
      return (_a = parentContext.theme) === null || _a === void 0 ? void 0 : _a.value;
    }));
    const renderEmptyComponent = (name) => {
      const renderEmpty$1 = props2.renderEmpty || slots.renderEmpty || parentContext.renderEmpty || renderEmpty;
      return renderEmpty$1(name);
    };
    const autoInsertSpaceInButton = computed(() => {
      var _a, _b;
      return (_a = props2.autoInsertSpaceInButton) !== null && _a !== void 0 ? _a : (_b = parentContext.autoInsertSpaceInButton) === null || _b === void 0 ? void 0 : _b.value;
    });
    const locale$1 = computed(() => {
      var _a;
      return props2.locale || ((_a = parentContext.locale) === null || _a === void 0 ? void 0 : _a.value);
    });
    watch(locale$1, () => {
      globalConfigBySet.locale = locale$1.value;
    }, {
      immediate: true
    });
    const direction = computed(() => {
      var _a;
      return props2.direction || ((_a = parentContext.direction) === null || _a === void 0 ? void 0 : _a.value);
    });
    const space = computed(() => {
      var _a, _b;
      return (_a = props2.space) !== null && _a !== void 0 ? _a : (_b = parentContext.space) === null || _b === void 0 ? void 0 : _b.value;
    });
    const virtual = computed(() => {
      var _a, _b;
      return (_a = props2.virtual) !== null && _a !== void 0 ? _a : (_b = parentContext.virtual) === null || _b === void 0 ? void 0 : _b.value;
    });
    const dropdownMatchSelectWidth = computed(() => {
      var _a, _b;
      return (_a = props2.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = parentContext.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
    });
    const getTargetContainer = computed(() => {
      var _a;
      return props2.getTargetContainer !== void 0 ? props2.getTargetContainer : (_a = parentContext.getTargetContainer) === null || _a === void 0 ? void 0 : _a.value;
    });
    const getPopupContainer = computed(() => {
      var _a;
      return props2.getPopupContainer !== void 0 ? props2.getPopupContainer : (_a = parentContext.getPopupContainer) === null || _a === void 0 ? void 0 : _a.value;
    });
    const pageHeader = computed(() => {
      var _a;
      return props2.pageHeader !== void 0 ? props2.pageHeader : (_a = parentContext.pageHeader) === null || _a === void 0 ? void 0 : _a.value;
    });
    const input = computed(() => {
      var _a;
      return props2.input !== void 0 ? props2.input : (_a = parentContext.input) === null || _a === void 0 ? void 0 : _a.value;
    });
    const pagination = computed(() => {
      var _a;
      return props2.pagination !== void 0 ? props2.pagination : (_a = parentContext.pagination) === null || _a === void 0 ? void 0 : _a.value;
    });
    const form = computed(() => {
      var _a;
      return props2.form !== void 0 ? props2.form : (_a = parentContext.form) === null || _a === void 0 ? void 0 : _a.value;
    });
    const select = computed(() => {
      var _a;
      return props2.select !== void 0 ? props2.select : (_a = parentContext.select) === null || _a === void 0 ? void 0 : _a.value;
    });
    const componentSize = computed(() => props2.componentSize);
    const componentDisabled = computed(() => props2.componentDisabled);
    const wave = computed(() => {
      var _a, _b;
      return (_a = props2.wave) !== null && _a !== void 0 ? _a : (_b = parentContext.wave) === null || _b === void 0 ? void 0 : _b.value;
    });
    const configProvider = {
      csp,
      autoInsertSpaceInButton,
      locale: locale$1,
      direction,
      space,
      virtual,
      dropdownMatchSelectWidth,
      getPrefixCls,
      iconPrefixCls,
      theme: computed(() => {
        var _a, _b;
        return (_a = mergedTheme.value) !== null && _a !== void 0 ? _a : (_b = parentContext.theme) === null || _b === void 0 ? void 0 : _b.value;
      }),
      renderEmpty: renderEmptyComponent,
      getTargetContainer,
      getPopupContainer,
      pageHeader,
      input,
      pagination,
      form,
      select,
      componentSize,
      componentDisabled,
      transformCellText: computed(() => props2.transformCellText),
      wave
    };
    const memoTheme = computed(() => {
      const _a = mergedTheme.value || {}, {
        algorithm,
        token
      } = _a, rest = __rest$3(_a, ["algorithm", "token"]);
      const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : void 0;
      return _extends(_extends({}, rest), {
        theme: themeObj,
        token: _extends(_extends({}, defaultSeedToken), token)
      });
    });
    const validateMessagesRef = computed(() => {
      var _a, _b;
      let validateMessages = {};
      if (locale$1.value) {
        validateMessages = ((_a = locale$1.value.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = localeValues.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
      }
      if (props2.form && props2.form.validateMessages) {
        validateMessages = _extends(_extends({}, validateMessages), props2.form.validateMessages);
      }
      return validateMessages;
    });
    useConfigContextProvider(configProvider);
    useProvideGlobalForm({
      validateMessages: validateMessagesRef
    });
    useProviderSize(componentSize);
    useProviderDisabled(componentDisabled);
    const renderProvider = (legacyLocale) => {
      var _a, _b;
      let childNode = shouldWrapSSR.value ? wrapSSR((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) : (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots);
      if (props2.theme) {
        const _childNode = /* @__PURE__ */ function() {
          return childNode;
        }();
        childNode = createVNode(DesignTokenProvider, {
          "value": memoTheme.value
        }, {
          default: () => [_childNode]
        });
      }
      return createVNode(locale, {
        "locale": locale$1.value || legacyLocale,
        "ANT_MARK__": ANT_MARK
      }, {
        default: () => [childNode]
      });
    };
    watchEffect(() => {
      if (direction.value) {
        message.config({
          rtl: direction.value === "rtl"
        });
        notification.config({
          rtl: direction.value === "rtl"
        });
      }
    });
    return () => createVNode(LocaleReceiver, {
      "children": (_, __, legacyLocale) => renderProvider(legacyLocale)
    }, null);
  }
});
ConfigProvider.config = setGlobalConfig;
ConfigProvider.install = function(app) {
  app.component(ConfigProvider.name, ConfigProvider);
};
const __nuxt_component_0$1 = ConfigProvider;
const props = () => ({
  prefixCls: String,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: {
    type: Object,
    default: void 0
  },
  class: String,
  rootClassName: String,
  rootStyle: objectType(),
  placement: {
    type: String
  },
  wrapperClassName: String,
  level: {
    type: [String, Array]
  },
  levelMove: {
    type: [Number, Function, Array]
  },
  duration: String,
  ease: String,
  showMask: {
    type: Boolean,
    default: void 0
  },
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  maskStyle: {
    type: Object,
    default: void 0
  },
  afterVisibleChange: Function,
  keyboard: {
    type: Boolean,
    default: void 0
  },
  contentWrapperStyle: arrayType(),
  autofocus: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  // Motion
  motion: functionType(),
  maskMotion: objectType()
});
const drawerProps$1 = () => _extends(_extends({}, props()), {
  forceRender: {
    type: Boolean,
    default: void 0
  },
  getContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object, PropTypes.looseBool])
});
const drawerChildProps = () => _extends(_extends({}, props()), {
  getContainer: Function,
  getOpenCount: Function,
  scrollLocker: PropTypes.any,
  inline: Boolean
});
var __rest$2 = function(s, e) {
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
const DrawerChild = defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: drawerChildProps(),
  emits: ["close", "handleClick", "change"],
  setup(props2, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const contentWrapper = shallowRef();
    const dom = shallowRef();
    const maskDom = shallowRef();
    const handlerDom = shallowRef();
    const contentDom = shallowRef();
    `drawer_id_${Number((Date.now() + Math.random()).toString().replace(".", Math.round(Math.random() * 9).toString())).toString(16)}`;
    watch(() => props2.level, () => {
      getLevelDom();
    }, {
      flush: "post"
    });
    watch(() => props2.open, () => {
      const {
        open,
        getContainer: getContainer2,
        scrollLocker,
        showMask,
        autofocus
      } = props2;
      const container = getContainer2 === null || getContainer2 === void 0 ? void 0 : getContainer2();
      if (container && container.parentNode === (void 0).body)
        ;
      if (open) {
        if (autofocus) {
          domFocus();
        }
        if (showMask) {
          scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
        }
      } else {
        scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
      }
    }, {
      flush: "post"
    });
    onUnmounted(() => {
      var _a;
      const {
        open
      } = props2;
      if (open) {
        (void 0).body.style.touchAction = "";
      }
      (_a = props2.scrollLocker) === null || _a === void 0 ? void 0 : _a.unLock();
    });
    watch(() => props2.placement, (val) => {
      if (val) {
        contentDom.value = null;
      }
    });
    const domFocus = () => {
      var _a, _b;
      (_b = (_a = dom.value) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    const onClose = (e) => {
      emit("close", e);
    };
    const onKeyDown = (e) => {
      if (e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        onClose(e);
      }
    };
    const onAfterVisibleChange = () => {
      const {
        open,
        afterVisibleChange
      } = props2;
      if (afterVisibleChange) {
        afterVisibleChange(!!open);
      }
    };
    const getLevelDom = (_ref2) => {
      {
        return;
      }
    };
    const onHandleClick = (e) => {
      emit("handleClick", e);
    };
    const canOpen = shallowRef(false);
    watch(dom, () => {
      nextTick(() => {
        canOpen.value = true;
      });
    });
    return () => {
      var _a, _b;
      const {
        width,
        height,
        open: $open,
        prefixCls,
        placement,
        level,
        levelMove,
        ease,
        duration,
        getContainer: getContainer2,
        onChange,
        afterVisibleChange,
        showMask,
        maskClosable,
        maskStyle,
        keyboard,
        getOpenCount,
        scrollLocker,
        contentWrapperStyle,
        style,
        class: className,
        rootClassName,
        rootStyle,
        maskMotion,
        motion,
        inline
      } = props2, otherProps = __rest$2(props2, ["width", "height", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "keyboard", "getOpenCount", "scrollLocker", "contentWrapperStyle", "style", "class", "rootClassName", "rootStyle", "maskMotion", "motion", "inline"]);
      const open = $open && canOpen.value;
      const wrapperClassName = classNames(prefixCls, {
        [`${prefixCls}-${placement}`]: true,
        [`${prefixCls}-open`]: open,
        [`${prefixCls}-inline`]: inline,
        "no-mask": !showMask,
        [rootClassName]: true
      });
      const motionProps = typeof motion === "function" ? motion(placement) : motion;
      return createVNode("div", _objectSpread$7(_objectSpread$7({}, omit(otherProps, ["autofocus"])), {}, {
        "tabindex": -1,
        "class": wrapperClassName,
        "style": rootStyle,
        "ref": dom,
        "onKeydown": open && keyboard ? onKeyDown : void 0
      }), [createVNode(Transition, maskMotion, {
        default: () => [showMask && withDirectives(createVNode("div", {
          "class": `${prefixCls}-mask`,
          "onClick": maskClosable ? onClose : void 0,
          "style": maskStyle,
          "ref": maskDom
        }, null), [[vShow, open]])]
      }), createVNode(Transition, _objectSpread$7(_objectSpread$7({}, motionProps), {}, {
        "onAfterEnter": onAfterVisibleChange,
        "onAfterLeave": onAfterVisibleChange
      }), {
        default: () => [withDirectives(createVNode("div", {
          "class": `${prefixCls}-content-wrapper`,
          "style": [contentWrapperStyle],
          "ref": contentWrapper
        }, [createVNode("div", {
          "class": [`${prefixCls}-content`, className],
          "style": style,
          "ref": contentDom
        }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), slots.handler ? createVNode("div", {
          "onClick": onHandleClick,
          "ref": handlerDom
        }, [(_b = slots.handler) === null || _b === void 0 ? void 0 : _b.call(slots)]) : null]), [[vShow, open]])]
      })]);
    };
  }
});
const Child = DrawerChild;
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
const DrawerWrapper = defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: initDefaultProps(drawerProps$1(), {
    prefixCls: "drawer",
    placement: "left",
    getContainer: "body",
    level: "all",
    duration: ".3s",
    ease: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    afterVisibleChange: () => {
    },
    showMask: true,
    maskClosable: true,
    maskStyle: {},
    wrapperClassName: "",
    keyboard: true,
    forceRender: false,
    autofocus: true
  }),
  emits: ["handleClick", "close"],
  setup(props2, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const dom = ref(null);
    const onHandleClick = (e) => {
      emit("handleClick", e);
    };
    const onClose = (e) => {
      emit("close", e);
    };
    return () => {
      const {
        getContainer: getContainer2,
        wrapperClassName,
        rootClassName,
        rootStyle,
        forceRender
      } = props2, otherProps = __rest$1(props2, ["getContainer", "wrapperClassName", "rootClassName", "rootStyle", "forceRender"]);
      let portal = null;
      if (!getContainer2) {
        return createVNode(Child, _objectSpread$7(_objectSpread$7({}, otherProps), {}, {
          "rootClassName": rootClassName,
          "rootStyle": rootStyle,
          "open": props2.open,
          "onClose": onClose,
          "onHandleClick": onHandleClick,
          "inline": true
        }), slots);
      }
      const $forceRender = !!slots.handler || forceRender;
      if ($forceRender || props2.open || dom.value) {
        portal = createVNode(Portal, {
          "autoLock": true,
          "visible": props2.open,
          "forceRender": $forceRender,
          "getContainer": getContainer2,
          "wrapperClassName": wrapperClassName
        }, {
          default: (_a) => {
            var {
              visible,
              afterClose
            } = _a, rest = __rest$1(_a, ["visible", "afterClose"]);
            return createVNode(Child, _objectSpread$7(_objectSpread$7(_objectSpread$7({
              "ref": dom
            }, otherProps), rest), {}, {
              "rootClassName": rootClassName,
              "rootStyle": rootStyle,
              "open": visible !== void 0 ? visible : props2.open,
              "afterVisibleChange": afterClose !== void 0 ? afterClose : props2.afterVisibleChange,
              "onClose": onClose,
              "onHandleClick": onHandleClick
            }), slots);
          }
        });
      }
      return portal;
    };
  }
});
const Drawer$2 = DrawerWrapper;
const genMotionStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  const sharedPanelMotion = {
    "&-enter, &-appear, &-leave": {
      "&-start": {
        transition: "none"
      },
      "&-active": {
        transition: `all ${motionDurationSlow}`
      }
    }
  };
  return {
    [componentCls]: {
      // ======================== Mask ========================
      [`${componentCls}-mask-motion`]: {
        "&-enter, &-appear, &-leave": {
          "&-active": {
            transition: `all ${motionDurationSlow}`
          }
        },
        "&-enter, &-appear": {
          opacity: 0,
          "&-active": {
            opacity: 1
          }
        },
        "&-leave": {
          opacity: 1,
          "&-active": {
            opacity: 0
          }
        }
      },
      // ======================= Panel ========================
      [`${componentCls}-panel-motion`]: {
        // Left
        "&-left": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateX(-100%) !important"
            },
            "&-active": {
              transform: "translateX(0)"
            }
          },
          "&-leave": {
            transform: "translateX(0)",
            "&-active": {
              transform: "translateX(-100%)"
            }
          }
        }],
        // Right
        "&-right": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateX(100%) !important"
            },
            "&-active": {
              transform: "translateX(0)"
            }
          },
          "&-leave": {
            transform: "translateX(0)",
            "&-active": {
              transform: "translateX(100%)"
            }
          }
        }],
        // Top
        "&-top": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateY(-100%) !important"
            },
            "&-active": {
              transform: "translateY(0)"
            }
          },
          "&-leave": {
            transform: "translateY(0)",
            "&-active": {
              transform: "translateY(-100%)"
            }
          }
        }],
        // Bottom
        "&-bottom": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateY(100%) !important"
            },
            "&-active": {
              transform: "translateY(0)"
            }
          },
          "&-leave": {
            transform: "translateY(0)",
            "&-active": {
              transform: "translateY(100%)"
            }
          }
        }]
      }
    }
  };
};
const genDrawerStyle = (token) => {
  const {
    componentCls,
    zIndexPopup,
    colorBgMask,
    colorBgElevated,
    motionDurationSlow,
    motionDurationMid,
    padding,
    paddingLG,
    fontSizeLG,
    lineHeightLG,
    lineWidth,
    lineType,
    colorSplit,
    marginSM,
    colorIcon,
    colorIconHover,
    colorText,
    fontWeightStrong,
    drawerFooterPaddingVertical,
    drawerFooterPaddingHorizontal
  } = token;
  const wrapperCls = `${componentCls}-content-wrapper`;
  return {
    [componentCls]: {
      position: "fixed",
      inset: 0,
      zIndex: zIndexPopup,
      pointerEvents: "none",
      "&-pure": {
        position: "relative",
        background: colorBgElevated,
        [`&${componentCls}-left`]: {
          boxShadow: token.boxShadowDrawerLeft
        },
        [`&${componentCls}-right`]: {
          boxShadow: token.boxShadowDrawerRight
        },
        [`&${componentCls}-top`]: {
          boxShadow: token.boxShadowDrawerUp
        },
        [`&${componentCls}-bottom`]: {
          boxShadow: token.boxShadowDrawerDown
        }
      },
      "&-inline": {
        position: "absolute"
      },
      // ====================== Mask ======================
      [`${componentCls}-mask`]: {
        position: "absolute",
        inset: 0,
        zIndex: zIndexPopup,
        background: colorBgMask,
        pointerEvents: "auto"
      },
      // ==================== Content =====================
      [wrapperCls]: {
        position: "absolute",
        zIndex: zIndexPopup,
        transition: `all ${motionDurationSlow}`,
        "&-hidden": {
          display: "none"
        }
      },
      // Placement
      [`&-left > ${wrapperCls}`]: {
        top: 0,
        bottom: 0,
        left: {
          _skip_check_: true,
          value: 0
        },
        boxShadow: token.boxShadowDrawerLeft
      },
      [`&-right > ${wrapperCls}`]: {
        top: 0,
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: 0,
        boxShadow: token.boxShadowDrawerRight
      },
      [`&-top > ${wrapperCls}`]: {
        top: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerUp
      },
      [`&-bottom > ${wrapperCls}`]: {
        bottom: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerDown
      },
      [`${componentCls}-content`]: {
        width: "100%",
        height: "100%",
        overflow: "auto",
        background: colorBgElevated,
        pointerEvents: "auto"
      },
      // ===================== Panel ======================
      [`${componentCls}-wrapper-body`]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
      },
      // Header
      [`${componentCls}-header`]: {
        display: "flex",
        flex: 0,
        alignItems: "center",
        padding: `${padding}px ${paddingLG}px`,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
        "&-title": {
          display: "flex",
          flex: 1,
          alignItems: "center",
          minWidth: 0,
          minHeight: 0
        }
      },
      [`${componentCls}-extra`]: {
        flex: "none"
      },
      [`${componentCls}-close`]: {
        display: "inline-block",
        marginInlineEnd: marginSM,
        color: colorIcon,
        fontWeight: fontWeightStrong,
        fontSize: fontSizeLG,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        textDecoration: "none",
        background: "transparent",
        border: 0,
        outline: 0,
        cursor: "pointer",
        transition: `color ${motionDurationMid}`,
        textRendering: "auto",
        "&:focus, &:hover": {
          color: colorIconHover,
          textDecoration: "none"
        }
      },
      [`${componentCls}-title`]: {
        flex: 1,
        margin: 0,
        color: colorText,
        fontWeight: token.fontWeightStrong,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG
      },
      // Body
      [`${componentCls}-body`]: {
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        padding: paddingLG,
        overflow: "auto"
      },
      // Footer
      [`${componentCls}-footer`]: {
        flexShrink: 0,
        padding: `${drawerFooterPaddingVertical}px ${drawerFooterPaddingHorizontal}px`,
        borderTop: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
};
const useStyle = genComponentStyleHook("Drawer", (token) => {
  const drawerToken = merge(token, {
    drawerFooterPaddingVertical: token.paddingXS,
    drawerFooterPaddingHorizontal: token.padding
  });
  return [genDrawerStyle(drawerToken), genMotionStyle(drawerToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase
}));
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
const PlacementTypes = ["top", "right", "bottom", "left"];
const defaultPushState = {
  distance: 180
};
const drawerProps = () => ({
  autofocus: {
    type: Boolean,
    default: void 0
  },
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: PropTypes.any,
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  mask: {
    type: Boolean,
    default: void 0
  },
  maskStyle: objectType(),
  rootClassName: String,
  rootStyle: objectType(),
  size: {
    type: String
  },
  drawerStyle: objectType(),
  headerStyle: objectType(),
  bodyStyle: objectType(),
  contentWrapperStyle: {
    type: Object,
    default: void 0
  },
  title: PropTypes.any,
  /** @deprecated Please use `open` instead */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zIndex: Number,
  prefixCls: String,
  push: PropTypes.oneOfType([PropTypes.looseBool, {
    type: Object
  }]),
  placement: PropTypes.oneOf(PlacementTypes),
  keyboard: {
    type: Boolean,
    default: void 0
  },
  extra: PropTypes.any,
  footer: PropTypes.any,
  footerStyle: objectType(),
  level: PropTypes.any,
  levelMove: {
    type: [Number, Array, Function]
  },
  handle: PropTypes.any,
  /** @deprecated Use `@afterVisibleChange` instead */
  afterVisibleChange: Function,
  /** @deprecated Please use `@afterOpenChange` instead */
  onAfterVisibleChange: Function,
  onAfterOpenChange: Function,
  /** @deprecated Please use `onUpdate:open` instead */
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onClose: Function
});
const Drawer$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ADrawer",
  inheritAttrs: false,
  props: initDefaultProps(drawerProps(), {
    closable: true,
    placement: "right",
    maskClosable: true,
    mask: true,
    level: null,
    keyboard: true,
    push: defaultPushState
  }),
  slots: Object,
  // emits: ['update:visible', 'close', 'afterVisibleChange'],
  setup(props2, _ref) {
    let {
      emit,
      slots,
      attrs
    } = _ref;
    const sPush = shallowRef(false);
    const destroyClose = shallowRef(false);
    const vcDrawer = shallowRef(null);
    const load = shallowRef(false);
    const visible = shallowRef(false);
    const mergedOpen = computed(() => {
      var _a;
      return (_a = props2.open) !== null && _a !== void 0 ? _a : props2.visible;
    });
    watch(mergedOpen, () => {
      if (mergedOpen.value) {
        load.value = true;
      } else {
        visible.value = false;
      }
    }, {
      immediate: true
    });
    watch([mergedOpen, load], () => {
      if (mergedOpen.value && load.value) {
        visible.value = true;
      }
    }, {
      immediate: true
    });
    const parentDrawerOpts = inject("parentDrawerOpts", null);
    const {
      prefixCls,
      getPopupContainer,
      direction
    } = useConfigInject("drawer", props2);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const getContainer2 = computed(() => (
      // 有可能为 false，所以不能直接判断
      props2.getContainer === void 0 && (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value) ? () => getPopupContainer.value((void 0).body) : props2.getContainer
    ));
    devWarning(!props2.afterVisibleChange, "Drawer", "`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead");
    const setPush = () => {
      sPush.value = true;
    };
    const setPull = () => {
      sPush.value = false;
      nextTick(() => {
        domFocus();
      });
    };
    provide("parentDrawerOpts", {
      setPush,
      setPull
    });
    onUnmounted(() => {
      if (parentDrawerOpts) {
        parentDrawerOpts.setPull();
      }
    });
    watch(visible, () => {
      if (parentDrawerOpts) {
        if (visible.value) {
          parentDrawerOpts.setPush();
        } else {
          parentDrawerOpts.setPull();
        }
      }
    }, {
      flush: "post"
    });
    const domFocus = () => {
      var _a, _b;
      (_b = (_a = vcDrawer.value) === null || _a === void 0 ? void 0 : _a.domFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    const close = (e) => {
      emit("update:visible", false);
      emit("update:open", false);
      emit("close", e);
    };
    const afterVisibleChange = (open) => {
      var _a;
      if (!open) {
        if (destroyClose.value === false) {
          destroyClose.value = true;
        }
        if (props2.destroyOnClose) {
          load.value = false;
        }
      }
      (_a = props2.afterVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props2, open);
      emit("afterVisibleChange", open);
      emit("afterOpenChange", open);
    };
    const pushTransform = computed(() => {
      const {
        push,
        placement
      } = props2;
      let distance;
      if (typeof push === "boolean") {
        distance = push ? defaultPushState.distance : 0;
      } else {
        distance = push.distance;
      }
      distance = parseFloat(String(distance || 0));
      if (placement === "left" || placement === "right") {
        return `translateX(${placement === "left" ? distance : -distance}px)`;
      }
      if (placement === "top" || placement === "bottom") {
        return `translateY(${placement === "top" ? distance : -distance}px)`;
      }
      return null;
    });
    const mergedWidth = computed(() => {
      var _a;
      return (_a = props2.width) !== null && _a !== void 0 ? _a : props2.size === "large" ? 736 : 378;
    });
    const mergedHeight = computed(() => {
      var _a;
      return (_a = props2.height) !== null && _a !== void 0 ? _a : props2.size === "large" ? 736 : 378;
    });
    const offsetStyle = computed(() => {
      const {
        mask,
        placement
      } = props2;
      if (!visible.value && !mask) {
        return {};
      }
      const val = {};
      if (placement === "left" || placement === "right") {
        val.width = isNumeric(mergedWidth.value) ? `${mergedWidth.value}px` : mergedWidth.value;
      } else {
        val.height = isNumeric(mergedHeight.value) ? `${mergedHeight.value}px` : mergedHeight.value;
      }
      return val;
    });
    const wrapperStyle = computed(() => {
      const {
        zIndex,
        contentWrapperStyle
      } = props2;
      const val = offsetStyle.value;
      return [{
        zIndex,
        transform: sPush.value ? pushTransform.value : void 0
      }, _extends({}, contentWrapperStyle), val];
    });
    const renderHeader = (prefixCls2) => {
      const {
        closable,
        headerStyle
      } = props2;
      const extra = getPropsSlot(slots, props2, "extra");
      const title = getPropsSlot(slots, props2, "title");
      if (!title && !closable) {
        return null;
      }
      return createVNode("div", {
        "class": classNames(`${prefixCls2}-header`, {
          [`${prefixCls2}-header-close-only`]: closable && !title && !extra
        }),
        "style": headerStyle
      }, [createVNode("div", {
        "class": `${prefixCls2}-header-title`
      }, [renderCloseIcon(prefixCls2), title && createVNode("div", {
        "class": `${prefixCls2}-title`
      }, [title])]), extra && createVNode("div", {
        "class": `${prefixCls2}-extra`
      }, [extra])]);
    };
    const renderCloseIcon = (prefixCls2) => {
      var _a;
      const {
        closable
      } = props2;
      const $closeIcon = slots.closeIcon ? (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots) : props2.closeIcon;
      return closable && createVNode("button", {
        "key": "closer",
        "onClick": close,
        "aria-label": "Close",
        "class": `${prefixCls2}-close`
      }, [$closeIcon === void 0 ? createVNode(CloseOutlined, null, null) : $closeIcon]);
    };
    const renderBody = (prefixCls2) => {
      var _a;
      if (destroyClose.value && !props2.forceRender && !load.value) {
        return null;
      }
      const {
        bodyStyle,
        drawerStyle
      } = props2;
      return createVNode("div", {
        "class": `${prefixCls2}-wrapper-body`,
        "style": drawerStyle
      }, [renderHeader(prefixCls2), createVNode("div", {
        "key": "body",
        "class": `${prefixCls2}-body`,
        "style": bodyStyle
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), renderFooter(prefixCls2)]);
    };
    const renderFooter = (prefixCls2) => {
      const footer = getPropsSlot(slots, props2, "footer");
      if (!footer) {
        return null;
      }
      const footerClassName = `${prefixCls2}-footer`;
      return createVNode("div", {
        "class": footerClassName,
        "style": props2.footerStyle
      }, [footer]);
    };
    const drawerClassName = computed(() => classNames({
      "no-mask": !props2.mask,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl"
    }, props2.rootClassName, hashId.value));
    const maskMotion = computed(() => {
      return getTransitionProps(getTransitionName(prefixCls.value, "mask-motion"));
    });
    const panelMotion = (motionPlacement) => {
      return getTransitionProps(getTransitionName(prefixCls.value, `panel-motion-${motionPlacement}`));
    };
    return () => {
      const {
        width,
        height,
        placement,
        mask,
        forceRender
      } = props2, rest = __rest(props2, ["width", "height", "placement", "mask", "forceRender"]);
      const vcDrawerProps = _extends(_extends(_extends({}, attrs), omit(rest, ["size", "closeIcon", "closable", "destroyOnClose", "drawerStyle", "headerStyle", "bodyStyle", "title", "push", "onAfterVisibleChange", "onClose", "onUpdate:visible", "onUpdate:open", "visible"])), {
        forceRender,
        onClose: close,
        afterVisibleChange,
        handler: false,
        prefixCls: prefixCls.value,
        open: visible.value,
        showMask: mask,
        placement,
        ref: vcDrawer
      });
      return wrapSSR(createVNode(NoCompactStyle, null, {
        default: () => [createVNode(Drawer$2, _objectSpread$7(_objectSpread$7({}, vcDrawerProps), {}, {
          "maskMotion": maskMotion.value,
          "motion": panelMotion,
          "width": mergedWidth.value,
          "height": mergedHeight.value,
          "getContainer": getContainer2.value,
          "rootClassName": drawerClassName.value,
          "rootStyle": props2.rootStyle,
          "contentWrapperStyle": wrapperStyle.value
        }), {
          handler: props2.handle ? () => props2.handle : slots.handle,
          default: () => renderBody(prefixCls.value)
        })]
      }));
    };
  }
});
const __nuxt_component_0 = withInstall(Drawer$1);
const getAlphaColor = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};
const generateColorPalettes = (baseColor) => {
  const colors = generate(baseColor, {
    theme: "dark"
  });
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[6],
    6: colors[5],
    7: colors[4],
    8: colors[6],
    9: colors[5],
    10: colors[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#000";
  const colorTextBase = textBaseColor || "#fff";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.85),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.18),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.12),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.08),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.04),
    colorBgElevated: getSolidColor(colorBgBase, 12),
    colorBgContainer: getSolidColor(colorBgBase, 8),
    colorBgLayout: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getSolidColor(colorBgBase, 26),
    colorBorder: getSolidColor(colorBgBase, 26),
    colorBorderSecondary: getSolidColor(colorBgBase, 19)
  };
};
const derivative$1 = (token, mapToken) => {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = generate(token[colorKey], {
      theme: "dark"
    });
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = _extends(_extends({}, prev), cur);
    return prev;
  }, {});
  const mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : derivative$2(token);
  return _extends(_extends(_extends({}, mergedMapToken), colorPalettes), genColorMapToken(token, {
    generateColorPalettes,
    generateNeutralColorPalettes
  }));
};
const darkAlgorithm = derivative$1;
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  const compactSizeStep = sizeStep - 2;
  return {
    sizeXXL: sizeUnit * (compactSizeStep + 10),
    sizeXL: sizeUnit * (compactSizeStep + 6),
    sizeLG: sizeUnit * (compactSizeStep + 2),
    sizeMD: sizeUnit * (compactSizeStep + 2),
    sizeMS: sizeUnit * (compactSizeStep + 1),
    size: sizeUnit * compactSizeStep,
    sizeSM: sizeUnit * compactSizeStep,
    sizeXS: sizeUnit * (compactSizeStep - 1),
    sizeXXS: sizeUnit * (compactSizeStep - 1)
  };
}
const derivative = (token, mapToken) => {
  const mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : derivative$2(token);
  const fontSize = mergedMapToken.fontSizeSM;
  const controlHeight = mergedMapToken.controlHeight - 4;
  return _extends(_extends(_extends(_extends(_extends({}, mergedMapToken), genSizeMapToken(mapToken !== null && mapToken !== void 0 ? mapToken : token)), genFontMapToken(fontSize)), {
    // controlHeight
    controlHeight
  }), genControlHeight(_extends(_extends({}, mergedMapToken), {
    controlHeight
  })));
};
const compactAlgorithm = derivative;
function useToken() {
  const [theme2, token, hashId] = useToken$1();
  return {
    theme: theme2,
    token,
    hashId
  };
}
const theme = {
  /** @private Test Usage. Do not use in production. */
  defaultConfig,
  /** Default seedToken */
  defaultSeed: defaultConfig.token,
  useToken,
  defaultAlgorithm: derivative$2,
  darkAlgorithm,
  compactAlgorithm
};
const _imports_0$1 = "" + buildAssetsURL("logo-dansavanh4.yVL10yqx.png");
const enImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQfSURBVHja1JZdbJNlFMd/b1va9X03ugGDsVRYoqgJII6NCCjimJuwkUAYbmEZKIqEmMxoQBwGTIwSRV2EgA4YcAGRIB8BBDaBMAGHBj9QHGQITAZky7qVtuv6tmvfj8eLFrYr8GJceJLn5jnnOf/zP/mfnEcSQvAwzcJDtocOIAE2IAkYNMC5NaDXBiT7v9nvTy0v4cLFNr5YV4fPFwDs/eIMDhxajre8FIBhu/dSMrcasParS2Pw8HSWFj/K+J/rkUaOZERVZZoNUGKXmuk5eJSJxQVs3b6YuiN/0trakSBnAAKbVUKZPh0Am1VixoyxiQZYAUHm6BHkZ0LK1ctYF5bizJkAVZWKBbDVuiYRc8gENtaS1H6bl0tzGf9UFh5PNx6PH48niBCgd3Whd3YiBHg8QTo6/Hh8YR4fk0GRuIXz919wznwRe84EamsbAWwWgJP1F9h1YxCdTzyNumc/4eMNzJo5jsVLXkDTrKhqFCFAqCoiHEYIUNUoMYtM2XNu8lsasUYipFYuIZCcxrYtZ9iz52yfijTN4HpzC59818oPo6bQc/4PvNVfM26UzMqqIkKhXkBgqiqmqgKCUKiXN8dZGXPueyw52bgWL+D0Tzd5b/lumppuYBhSvJ0Aum7S06Ph93ezY98d5Ldn87wcRP2tCff0qayrXogpwAgGATAFbF+Vh+71YS98A5/DxbmGv9m0/hgAaWkymha9J9PRdwKhVkeSgwcNtbdkTlxFBw7fX/sSRHtjDE1VsmwAnlkFOIcMweju/k8C9xTk3ddvdbmIJHLZAAxdR2trwwgEBmTCzFAI0+HoA0ivO4FTlh/4sP3JxwDIvHL9gbGRcBjS0+IAz+SuRtclgsEIABs3L+OV8lz0Ti/qmXPYMzPQsrMRptnXpi6VMaPT6N53GHtmBntvWqlcthmAwYOd2O30l6mEYZggBrFqTRmLynMJHTtJ55wFXDv7F+kvbU1wN+MHyB67gstXPLiKZ3Bny06m1XxI9Vt5JI9wo+sGmmbpAzCMKFlZbhoaV7Pq3QK8q9eirv2MptkLKTlFAhyEacZZiPjds5M/5uiZW7h3fsXQV8sorqulvnwYU/MnoWlaH0Bh4UTqG1aSmy7RXlSGdu0fduQtpXTTJTparmKaAtGPgQBMUxCJdDN/7gZWVh0k6fUKhu+qYeipOjYmX+K1iil9AOs3lGFraKBt3iJC2ZNYIefxeU0j1mgURUlBURxIElhkGYssI0mgKA4URUFWFLZtPU5R/pe0pmTg/vEI1hSZil+/vacirevTDYRPnKZlbgUfHG3nVvOphEsCYoCB3+cj0BufTqfPRywWTtRnAHD+/EWmTV7DR2vnM+/9d5AP1cPZY5oEuIBHgNQBXjgB4Pbdjea4OxMDaDoQlf73v4p/BwAgir62/ncsQQAAAABJRU5ErkJggg==";
const thImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFSSURBVHja1JaxTgJBEIa/3TsVOCOS2FgYjJWllYWJ8RVsbHw7OyufQt/CwkBBpbAHRI7bmbU4LweUZDHxb3Z3ivkn88+fWRNCYJew7Bg7JzBACrSAvci5S2CRAoej+4cxNole/enLcy8FMoylfXcbNfn36xtAlgKpihKKAnU5hADGVCdUd1iPb8bqey1st0sQBUgN0BeRD2vj6q2qJElybivy+F6oc6YAN49PXF6cMM4XUZL3jlq8Dz4bAu89+awgnxUV++/8bovEGnzpVwmEyXSBmxZxzGVg6bUhKEthMJoyidSifN6ivU9DsPSCFxDVKATeK0sj6y2SYFCNM02iivdNsX3nXIgN51wA+n/jg+HVNc4k6HweZwdkGTkrU6ReILXYTidW+QRpRC7VC19ettsmYeO97tTSAF3gDDiOLMMEGNYb7aBuV0R4oDD//lfxMwBSb/PbrcWoTQAAAABJRU5ErkJggg==";
const cnImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHiSURBVHja1Ja/jtNAEMZ/Y2/icBdxXAMSEu/A1dBR0NJQ8CS8AQ0tb4CQgEegPgQFOh7ixJUX4vgSx96ZoUgOO3+KRDgFX7Or0Wg+f7PzeVfcnUMi4cA4OIEAARgAvY5r10AZgOGvl69Gkm4Xk9w3fJTg9f4MDz9+OA3AsSTC4OmThaQE3Bp9w+eRmy+hie2I8us3gOMABFNFkjlW5PTPIvOLAO7YVMjfC/Sd4YuK4nOGuyMiABv7v6pP7mKmACEAeK1YPuPoWU52FgkPUiaf+ngFDjCD+Q/Fproo1vrSbUPuvR4eF7kBwDRi4ynlzxkyUMrvKTZabbrPFb9Jd2qPh7BK4DGiRYFeTJmdC8nAsVKaUes72eOK6Xm2G0GaYhpXCTzPsXEBgOZN8unrktHbAddvAKrdCESwqmoItI74eILlkw0bjt4Zltdg+5hL8NhSYLGmurrCxuPN7Mv951+LAh1kLQWxBlUw68bDGtEqaStQiB0SRMWlbh1yXWPu+MIc/wzTiC0dslBQR0TArfWPwJdr21KyttLKaeJijvmaD0gTMF/z57pPt8W37E1xaylwU0iE5OhON2fgjreMVmuMXC/ntus7QYAT4BFwr+Piv4HL2xstu21Xh4jAXP77V8WfAQAixA0rudAk0AAAAABJRU5ErkJggg==";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale: locale2 } = useI18n();
    const languages = ref([
      {
        key: "EN",
        image: enImage
      },
      {
        key: "TH",
        image: thImage
      },
      {
        key: "CN",
        image: cnImage
        //image: require('../../assets/image/lang/cn.png')
      }
    ]);
    const selectedLanguage = ref("EN");
    watch(selectedLanguage, (value) => {
      locale2.value = value.toLowerCase();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_select = __nuxt_component_0$2;
      const _component_a_select_option = SelectOption;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      _push(ssrRenderComponent(_component_a_select, mergeProps({
        ref: "select",
        value: unref(selectedLanguage),
        "onUpdate:value": ($event) => isRef(selectedLanguage) ? selectedLanguage.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(languages), (i) => {
              _push2(ssrRenderComponent(_component_a_select_option, {
                key: i.key,
                value: i.key
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_row, {
                      justify: "center",
                      align: "middle"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_col, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", i.image)} alt=""${_scopeId4}><span${_scopeId4}>${ssrInterpolate(i.key)}</span>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: i.image,
                                    alt: ""
                                  }, null, 8, ["src"]),
                                  createVNode("span", null, toDisplayString(i.key), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_col, null, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: i.image,
                                  alt: ""
                                }, null, 8, ["src"]),
                                createVNode("span", null, toDisplayString(i.key), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_row, {
                        justify: "center",
                        align: "middle"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_col, null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: i.image,
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("span", null, toDisplayString(i.key), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (i) => {
                return openBlock(), createBlock(_component_a_select_option, {
                  key: i.key,
                  value: i.key
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_row, {
                      justify: "center",
                      align: "middle"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_col, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: i.image,
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("span", null, toDisplayString(i.key), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/LanguageSwitcher.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props2, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  props: ["visible"],
  emits: ["onClose"],
  setup(__props, { emit: __emit }) {
    ref("");
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_drawer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ba504dc7>`);
      _push(ssrRenderComponent(_component_a_drawer, {
        width: 320,
        title: "",
        placement: "right",
        visible: __props.visible,
        onClose: ($event) => _ctx.$emit("onClose")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, { style: { "position": "absolute", "top": "8px", "right": "10px" } }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/check",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-ba504dc7${_scopeId2}>HOME</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, "HOME")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-ba504dc7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/check",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-ba504dc7${_scopeId2}>CASINO</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, "CASINO")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-ba504dc7${_scopeId}><p class="line-hover" data-v-ba504dc7${_scopeId}>HOTELS</p><div style="${ssrRenderStyle({ "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" })}" data-v-ba504dc7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/check",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-ba504dc7${_scopeId2}>DANSAVANH RESORT &amp; CASINO</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, "DANSAVANH RESORT & CASINO")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/check",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-ba504dc7${_scopeId2}>DANSAVANH GOLF &amp; COUNTRY CLUB</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, "DANSAVANH GOLF & COUNTRY CLUB")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/check",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-ba504dc7${_scopeId2}>DANSAVANH RESORT &amp; CASINO</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, "DANSAVANH RESORT & CASINO")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/check",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-ba504dc7${_scopeId2}>EXPERIENCE</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, "EXPERIENCE")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-ba504dc7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/check",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-ba504dc7${_scopeId2}>EVENTS</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, "EVENTS")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-ba504dc7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/check",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-ba504dc7${_scopeId2}>OFFER</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, "OFFER")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-ba504dc7${_scopeId}><p class="line-hover" data-v-ba504dc7${_scopeId}>MORE</p><div style="${ssrRenderStyle({ "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" })}" data-v-ba504dc7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/more/career",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-ba504dc7${_scopeId2}>CAREER</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, "CAREER")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-ba504dc7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/gallery",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-ba504dc7${_scopeId2}>GALLERY</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, "GALLERY")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-ba504dc7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/more/news",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-ba504dc7${_scopeId2}>NEWS</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, "NEWS")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/check",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-ba504dc7${_scopeId2}>CONTACT</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, "CONTACT")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h3 class="text-white" style="${ssrRenderStyle({ "margin-top": "40px" })}" data-v-ba504dc7${_scopeId}>ABOUT DANSAVANH</h3><p class="text-white" data-v-ba504dc7${_scopeId}>Either you look for a luxurious experience or a remarkable on the go experience, Dansavanh Resort is the place to visit and spend the time at. We offer quality services.</p><p class="text-white" data-v-ba504dc7${_scopeId}>VIP hotline : +856-20-58276666</p><p class="text-white" data-v-ba504dc7${_scopeId}>Tour hotline: +856-20-52241111</p><p class="text-white" data-v-ba504dc7${_scopeId}>Thai hotline: +66-92193-7777</p><p class="text-white" data-v-ba504dc7${_scopeId}>info@dansavanh.com</p>`);
          } else {
            return [
              createVNode(_sfc_main$4, { style: { "position": "absolute", "top": "8px", "right": "10px" } }),
              createVNode(_component_NuxtLink, {
                to: "/check",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, "HOME")
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: "/check",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, "CASINO")
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("br"),
              createVNode("p", { class: "line-hover" }, "HOTELS"),
              createVNode("div", { style: { "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" } }, [
                createVNode(_component_NuxtLink, {
                  to: "/check",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, "DANSAVANH RESORT & CASINO")
                  ]),
                  _: 1
                }, 8, ["onClose"]),
                createVNode(_component_NuxtLink, {
                  to: "/check",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, "DANSAVANH GOLF & COUNTRY CLUB")
                  ]),
                  _: 1
                }, 8, ["onClose"]),
                createVNode(_component_NuxtLink, {
                  to: "/check",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, "DANSAVANH RESORT & CASINO")
                  ]),
                  _: 1
                }, 8, ["onClose"])
              ]),
              createVNode(_component_NuxtLink, {
                to: "/check",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, "EXPERIENCE")
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: "/check",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, "EVENTS")
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: "/check",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, "OFFER")
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("br"),
              createVNode("p", { class: "line-hover" }, "MORE"),
              createVNode("div", { style: { "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" } }, [
                createVNode(_component_NuxtLink, {
                  to: "/more/career",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, "CAREER")
                  ]),
                  _: 1
                }, 8, ["onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: "/gallery",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, "GALLERY")
                  ]),
                  _: 1
                }, 8, ["onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: "/more/news",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, "NEWS")
                  ]),
                  _: 1
                }, 8, ["onClose"])
              ]),
              createVNode(_component_NuxtLink, {
                to: "/check",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, "CONTACT")
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("h3", {
                class: "text-white",
                style: { "margin-top": "40px" }
              }, "ABOUT DANSAVANH"),
              createVNode("p", { class: "text-white" }, "Either you look for a luxurious experience or a remarkable on the go experience, Dansavanh Resort is the place to visit and spend the time at. We offer quality services."),
              createVNode("p", { class: "text-white" }, "VIP hotline : +856-20-58276666"),
              createVNode("p", { class: "text-white" }, "Tour hotline: +856-20-52241111"),
              createVNode("p", { class: "text-white" }, "Thai hotline: +66-92193-7777"),
              createVNode("p", { class: "text-white" }, "info@dansavanh.com")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Drawer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props2, ctx) : void 0;
};
const Drawer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ba504dc7"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const showMoreDropDown = ref(false);
    const drowdownToggle = ref(false);
    const visible = ref(false);
    const route = useRoute();
    watch(() => route.name, () => {
      showMoreDropDown.value = false;
      drowdownToggle.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$3;
      const _component_DownOutlined = DownOutlined;
      const _component_dividerProps = resolveComponent("dividerProps");
      _push(`<nav${ssrRenderAttrs(_attrs)} data-v-ab197d03><div class="navbar" data-v-ab197d03><div class="burger" data-v-ab197d03><i class="fa-solid fa-bars" data-v-ab197d03></i></div><div class="navbar-start" data-v-ab197d03><div class="navbar-brand" data-v-ab197d03><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-ab197d03></div></div><div class="navbar-item is-desktop" data-v-ab197d03>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "line-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "line-hover",
        to: "/casino"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("casino"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("casino")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="has-dropdrown" data-v-ab197d03>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "line-hover cursor",
        to: "/hotels"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hotels"))} `);
            if (unref(drowdownToggle)) {
              _push2(ssrRenderComponent(_component_DownOutlined, { style: { "position": "absolute", "top": "3px", "right": "-18px" } }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hotels")) + " ", 1),
              unref(drowdownToggle) ? (openBlock(), createBlock(_component_DownOutlined, {
                key: 0,
                style: { "position": "absolute", "top": "3px", "right": "-18px" }
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(drowdownToggle)) {
        _push(`<ul class="dropdrown" style="${ssrRenderStyle({ "width": "310px !important" })}" data-v-ab197d03><li data-v-ab197d03>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/hotels/numngum",
          onClick: ($event) => drowdownToggle.value = !unref(drowdownToggle),
          class: "line-hover"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Dansavanh Resort &amp; Casino`);
            } else {
              return [
                createTextVNode("Dansavanh Resort & Casino")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-ab197d03>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/hotels/golf",
          class: "line-hover",
          onClick: ($event) => drowdownToggle.value = !unref(drowdownToggle)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Dansavanh Golf &amp; Country Club`);
            } else {
              return [
                createTextVNode("Dansavanh Golf & Country Club")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-ab197d03>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/hotels/vientaine-hotel",
          class: "line-hover",
          onClick: ($event) => drowdownToggle.value = !unref(drowdownToggle)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Dansavanh Vientiane Hotel`);
            } else {
              return [
                createTextVNode("Dansavanh Vientiane Hotel")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/experience",
        class: "line-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("experience"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("experience")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/events",
        class: "line-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("events"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("events")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/offer",
        class: "line-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("offer"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("offer")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_dividerProps, { class: "has-dropdrown" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_link, {
              onMouseover: ($event) => {
                showMoreDropDown.value = true;
                drowdownToggle.value = false;
              },
              class: "line-hover"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("more"))} `);
                  if (unref(showMoreDropDown)) {
                    _push3(ssrRenderComponent(_component_DownOutlined, { style: { "position": "absolute", "top": "3px", "right": "-18px" } }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("more")) + " ", 1),
                    unref(showMoreDropDown) ? (openBlock(), createBlock(_component_DownOutlined, {
                      key: 0,
                      style: { "position": "absolute", "top": "3px", "right": "-18px" }
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(showMoreDropDown)) {
              _push2(`<ul class="dropdrown" style="${ssrRenderStyle({ "width": "150px !important" })}" data-v-ab197d03${_scopeId}><li data-v-ab197d03${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                class: "line-hover",
                to: "/gallery"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Gallery`);
                  } else {
                    return [
                      createTextVNode("Gallery")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li data-v-ab197d03${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: "/more/career",
                class: "line-hover"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Career`);
                  } else {
                    return [
                      createTextVNode("Career")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li data-v-ab197d03${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: "/news",
                class: "line-hover"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`News`);
                  } else {
                    return [
                      createTextVNode("News")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li></ul>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_nuxt_link, {
                onMouseover: ($event) => {
                  showMoreDropDown.value = true;
                  drowdownToggle.value = false;
                },
                class: "line-hover"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("more")) + " ", 1),
                  unref(showMoreDropDown) ? (openBlock(), createBlock(_component_DownOutlined, {
                    key: 0,
                    style: { "position": "absolute", "top": "3px", "right": "-18px" }
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onMouseover"]),
              unref(showMoreDropDown) ? (openBlock(), createBlock("ul", {
                key: 0,
                class: "dropdrown",
                style: { "width": "150px !important" },
                onMouseleave: ($event) => showMoreDropDown.value = false
              }, [
                createVNode("li", null, [
                  createVNode(_component_nuxt_link, {
                    class: "line-hover",
                    to: "/gallery"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Gallery")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("li", null, [
                  createVNode(_component_nuxt_link, {
                    to: "/more/career",
                    class: "line-hover"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Career")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("li", null, [
                  createVNode(_component_nuxt_link, {
                    to: "/news",
                    class: "line-hover"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("News")
                    ]),
                    _: 1
                  })
                ])
              ], 40, ["onMouseleave"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/contact",
        class: "line-hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="is-desktop" data-v-ab197d03>`);
      _push(ssrRenderComponent(_sfc_main$4, { style: { "position": "absolute", "right": "0", "top": "15px" } }, null, _parent));
      _push(`</div><div data-v-ab197d03><i style="${ssrRenderStyle({ "padding": "10px", "cursor": "pointer", "color": "white" })}" class="fa-solid fa-bars fa-xl is-mobile" data-v-ab197d03></i>`);
      _push(ssrRenderComponent(Drawer, {
        visible: unref(visible),
        onOnClose: ($event) => visible.value = false
      }, null, _parent));
      _push(`</div></div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props2, ctx) : void 0;
};
const NavBarVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ab197d03"]]);
const _imports_0 = "" + buildAssetsURL("logo-dansavanh2.NnLJdDyX.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_a_layout_footer = LayoutFooter;
  const _component_a_row = __nuxt_component_1;
  const _component_a_col = __nuxt_component_2;
  const _component_a_typography_paragraph = __nuxt_component_3;
  const _component_MobileOutlined = MobileOutlined;
  const _component_MailOutlined = MailOutlined;
  const _component_nuxt_link = __nuxt_component_0$3;
  _push(ssrRenderComponent(_component_a_layout_footer, mergeProps({ style: { "background-color": "#13131b", "color": "#fdfdfd" } }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_a_row, {
          justify: "center",
          style: { "padding": "100px 80px 100px 80px" },
          sm: 10,
          md: 8,
          lg: 6,
          xl: 2,
          offset: 6
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, {
                xs: 24,
                sm: 24,
                md: 14,
                lg: 14
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_a_typography_paragraph, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_MobileOutlined, null, null, _parent5, _scopeId4));
                          _push5(` VIP hotline: +856-20-58276666 - Tour hotline: +856-20-52241111 - Thai hotline: +66-92193-7777 `);
                        } else {
                          return [
                            createVNode(_component_MobileOutlined),
                            createTextVNode(" VIP hotline: +856-20-58276666 - Tour hotline: +856-20-52241111 - Thai hotline: +66-92193-7777 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_a_typography_paragraph, null, {
                        default: withCtx(() => [
                          createVNode(_component_MobileOutlined),
                          createTextVNode(" VIP hotline: +856-20-58276666 - Tour hotline: +856-20-52241111 - Thai hotline: +66-92193-7777 ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                xs: 24,
                sm: 24,
                md: 6,
                xl: 6
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_a_typography_paragraph, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_MailOutlined, null, null, _parent5, _scopeId4));
                          _push5(` info@dansavanh.com `);
                        } else {
                          return [
                            createVNode(_component_MailOutlined),
                            createTextVNode(" info@dansavanh.com ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_a_typography_paragraph, null, {
                        default: withCtx(() => [
                          createVNode(_component_MailOutlined),
                          createTextVNode(" info@dansavanh.com ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, {
                  xs: 24,
                  sm: 24,
                  md: 14,
                  lg: 14
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_typography_paragraph, null, {
                      default: withCtx(() => [
                        createVNode(_component_MobileOutlined),
                        createTextVNode(" VIP hotline: +856-20-58276666 - Tour hotline: +856-20-52241111 - Thai hotline: +66-92193-7777 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  xs: 24,
                  sm: 24,
                  md: 6,
                  xl: 6
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_typography_paragraph, null, {
                      default: withCtx(() => [
                        createVNode(_component_MailOutlined),
                        createTextVNode(" info@dansavanh.com ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_a_row, {
          justify: "space-between",
          style: { "padding": "0 20px 0 20px" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, {
                xs: 24,
                sm: 24,
                md: 6,
                lg: 8
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_a_typography_paragraph, {
                      type: "secondary",
                      style: { "font-size": "12px", "padding": "0 10px" }
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` COPYRIGHT \xA9 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS `);
                        } else {
                          return [
                            createTextVNode(" COPYRIGHT \xA9 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_a_typography_paragraph, {
                        type: "secondary",
                        style: { "font-size": "12px", "padding": "0 10px" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" COPYRIGHT \xA9 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                xs: 24,
                sm: 24,
                md: 6,
                lg: 8,
                style: { "text-align": "center" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Image" style="${ssrRenderStyle({ "max-width": "120px" })}" data-v-de46d2dc${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "Image",
                        style: { "max-width": "120px" }
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 8
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<ul class="footer-nav" data-v-de46d2dc${_scopeId3}><li data-v-de46d2dc${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`HOME`);
                        } else {
                          return [
                            createTextVNode("HOME")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`CONTACT`);
                        } else {
                          return [
                            createTextVNode("CONTACT")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</li></ul>`);
                  } else {
                    return [
                      createVNode("ul", { class: "footer-nav" }, [
                        createVNode("li", null, [
                          createVNode(_component_nuxt_link, { to: "/" }, {
                            default: withCtx(() => [
                              createTextVNode("HOME")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_nuxt_link, { to: "/" }, {
                            default: withCtx(() => [
                              createTextVNode("CONTACT")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, {
                  xs: 24,
                  sm: 24,
                  md: 6,
                  lg: 8
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_typography_paragraph, {
                      type: "secondary",
                      style: { "font-size": "12px", "padding": "0 10px" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" COPYRIGHT \xA9 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  xs: 24,
                  sm: 24,
                  md: 6,
                  lg: 8,
                  style: { "text-align": "center" }
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "Image",
                      style: { "max-width": "120px" }
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  xs: 3,
                  sm: 3,
                  md: 3,
                  lg: 8
                }, {
                  default: withCtx(() => [
                    createVNode("ul", { class: "footer-nav" }, [
                      createVNode("li", null, [
                        createVNode(_component_nuxt_link, { to: "/" }, {
                          default: withCtx(() => [
                            createTextVNode("HOME")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_nuxt_link, { to: "/" }, {
                          default: withCtx(() => [
                            createTextVNode("CONTACT")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_a_row, {
            justify: "center",
            style: { "padding": "100px 80px 100px 80px" },
            sm: 10,
            md: 8,
            lg: 6,
            xl: 2,
            offset: 6
          }, {
            default: withCtx(() => [
              createVNode(_component_a_col, {
                xs: 24,
                sm: 24,
                md: 14,
                lg: 14
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_typography_paragraph, null, {
                    default: withCtx(() => [
                      createVNode(_component_MobileOutlined),
                      createTextVNode(" VIP hotline: +856-20-58276666 - Tour hotline: +856-20-52241111 - Thai hotline: +66-92193-7777 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                xs: 24,
                sm: 24,
                md: 6,
                xl: 6
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_typography_paragraph, null, {
                    default: withCtx(() => [
                      createVNode(_component_MailOutlined),
                      createTextVNode(" info@dansavanh.com ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_a_row, {
            justify: "space-between",
            style: { "padding": "0 20px 0 20px" }
          }, {
            default: withCtx(() => [
              createVNode(_component_a_col, {
                xs: 24,
                sm: 24,
                md: 6,
                lg: 8
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_typography_paragraph, {
                    type: "secondary",
                    style: { "font-size": "12px", "padding": "0 10px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" COPYRIGHT \xA9 2024 ALL RIGHTS RESERVED DANSAVANH RESORT | DANSAVANH CASINO LAOS ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                xs: 24,
                sm: 24,
                md: 6,
                lg: 8,
                style: { "text-align": "center" }
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "Image",
                    style: { "max-width": "120px" }
                  })
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 8
              }, {
                default: withCtx(() => [
                  createVNode("ul", { class: "footer-nav" }, [
                    createVNode("li", null, [
                      createVNode(_component_nuxt_link, { to: "/" }, {
                        default: withCtx(() => [
                          createTextVNode("HOME")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_nuxt_link, { to: "/" }, {
                        default: withCtx(() => [
                          createTextVNode("CONTACT")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const FooterVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-de46d2dc"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const themeConfig = {
      algorithm: theme.darkAlgorithm,
      token: {
        // colorPrimary: '#ffff',
        colorPrimary: "#722ed1"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_config_provider = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_a_config_provider, mergeProps({ theme: themeConfig }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavBarVue, null, null, _parent2, _scopeId));
            _push2(`<div p-20px${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            _push2(ssrRenderComponent(FooterVue, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(NavBarVue),
              createVNode("div", { "p-20px": "" }, [
                renderSlot(_ctx.$slots, "default")
              ]),
              createVNode(FooterVue)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default--CUQd_qe.mjs.map
