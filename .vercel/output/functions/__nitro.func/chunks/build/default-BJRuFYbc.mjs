import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { createVNode, defineComponent, shallowRef, watch, onUnmounted, nextTick, Transition, withDirectives, vShow, ref, computed, inject, provide, useSSRContext, mergeProps, withCtx, renderSlot, unref, isRef, toDisplayString, openBlock, createBlock, Fragment, renderList, resolveComponent, createTextVNode, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as __nuxt_component_0$3 } from './nuxt-link-D3GYj0JH.mjs';
import { DownOutlined, MobileOutlined, MailOutlined } from '@ant-design/icons-vue';
import { g as useMainStore, s as storeToRefs, l as useI18n, m as useSwitchLocalePath, f as useRoute } from './server.mjs';
import { _ as __nuxt_component_0$2, S as SelectOption } from './index-Bpj8YU6d.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-BrQUnAzb.mjs';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { c as classNames, v as initDefaultProps, u as useConfigInject, ag as isNumeric, w as withInstall, P as PropTypes, d as genComponentStyleHook, D as objectType, x as getPropsSlot, a2 as defaultConfig, ah as derivative$2, j as arrayType, k as functionType, J as useToken$1, ai as defaultPresetColors, aj as genColorMapToken, ak as genFontMapToken, al as genControlHeight, m as merge, am as LayoutFooter } from './index-C3iUBhQ2.mjs';
import { T as Typography, _ as __nuxt_component_4, B as Base$1, f as baseProps, K as KeyCode } from './Title-C9T3KzZV.mjs';
import { o as omit, k as Portal } from './index-shETwSNC.mjs';
import { C as CloseOutlined } from '../_/CloseOutlined.mjs';
import { d as devWarning } from './useState-DiUvnW6I.mjs';
import { N as NoCompactStyle } from './Compact-B2HWyowC.mjs';
import { g as getTransitionProps, a as getTransitionName } from './Portal-B4Q6mTXn.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { generate } from '@ant-design/colors';
import { TinyColor } from '@ctrl/tinycolor';
import { _ as __nuxt_component_0$1 } from './index-BoKtI3Qq.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-google-map';
import '../_/DownOutlined.mjs';
import '../_/LoadingOutlined.mjs';
import '../_/CloseCircleFilled.mjs';
import 'stylis';
import 'vue-types';
import './createContext-DErE1G0Y.mjs';
import 'resize-observer-polyfill';
import 'dom-align';
import 'lodash-es/isEqual.js';
import 'lodash-es';

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
  } = _a, restProps = __rest$3(_a, ["ellipsis", "rel"]);
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
Typography.Text = Text$1;
Typography.Title = __nuxt_component_4;
Typography.Paragraph = __nuxt_component_3;
Typography.Link = Link$1;
Typography.Base = Base$1;
Typography.install = function(app) {
  app.component(Typography.name, Typography);
  app.component(Typography.Text.displayName, Text$1);
  app.component(Typography.Title.displayName, __nuxt_component_4);
  app.component(Typography.Paragraph.displayName, __nuxt_component_3);
  app.component(Typography.Link.displayName, Link$1);
  return app;
};

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
        getContainer,
        scrollLocker,
        showMask,
        autofocus
      } = props2;
      const container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
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
        getContainer,
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
      return createVNode("div", _objectSpread(_objectSpread({}, omit(otherProps, ["autofocus"])), {}, {
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
      }), createVNode(Transition, _objectSpread(_objectSpread({}, motionProps), {}, {
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
        getContainer,
        wrapperClassName,
        rootClassName,
        rootStyle,
        forceRender
      } = props2, otherProps = __rest$1(props2, ["getContainer", "wrapperClassName", "rootClassName", "rootStyle", "forceRender"]);
      let portal = null;
      if (!getContainer) {
        return createVNode(Child, _objectSpread(_objectSpread({}, otherProps), {}, {
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
          "getContainer": getContainer,
          "wrapperClassName": wrapperClassName
        }, {
          default: (_a) => {
            var {
              visible,
              afterClose
            } = _a, rest = __rest$1(_a, ["visible", "afterClose"]);
            return createVNode(Child, _objectSpread(_objectSpread(_objectSpread({
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
    const getContainer = computed(() => (
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
        default: () => [createVNode(Drawer$2, _objectSpread(_objectSpread({}, vcDrawerProps), {}, {
          "maskMotion": maskMotion.value,
          "motion": panelMotion,
          "width": mergedWidth.value,
          "height": mergedHeight.value,
          "getContainer": getContainer.value,
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
const _imports_0$1 = "" + buildAssetsURL("logo-dansavanh4.DJUvXTKr.png");
const enImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQfSURBVHja1JZdbJNlFMd/b1va9X03ugGDsVRYoqgJII6NCCjimJuwkUAYbmEZKIqEmMxoQBwGTIwSRV2EgA4YcAGRIB8BBDaBMAGHBj9QHGQITAZky7qVtuv6tmvfj8eLFrYr8GJceJLn5jnnOf/zP/mfnEcSQvAwzcJDtocOIAE2IAkYNMC5NaDXBiT7v9nvTy0v4cLFNr5YV4fPFwDs/eIMDhxajre8FIBhu/dSMrcasParS2Pw8HSWFj/K+J/rkUaOZERVZZoNUGKXmuk5eJSJxQVs3b6YuiN/0trakSBnAAKbVUKZPh0Am1VixoyxiQZYAUHm6BHkZ0LK1ctYF5bizJkAVZWKBbDVuiYRc8gENtaS1H6bl0tzGf9UFh5PNx6PH48niBCgd3Whd3YiBHg8QTo6/Hh8YR4fk0GRuIXz919wznwRe84EamsbAWwWgJP1F9h1YxCdTzyNumc/4eMNzJo5jsVLXkDTrKhqFCFAqCoiHEYIUNUoMYtM2XNu8lsasUYipFYuIZCcxrYtZ9iz52yfijTN4HpzC59818oPo6bQc/4PvNVfM26UzMqqIkKhXkBgqiqmqgKCUKiXN8dZGXPueyw52bgWL+D0Tzd5b/lumppuYBhSvJ0Aum7S06Ph93ezY98d5Ldn87wcRP2tCff0qayrXogpwAgGATAFbF+Vh+71YS98A5/DxbmGv9m0/hgAaWkymha9J9PRdwKhVkeSgwcNtbdkTlxFBw7fX/sSRHtjDE1VsmwAnlkFOIcMweju/k8C9xTk3ddvdbmIJHLZAAxdR2trwwgEBmTCzFAI0+HoA0ivO4FTlh/4sP3JxwDIvHL9gbGRcBjS0+IAz+SuRtclgsEIABs3L+OV8lz0Ti/qmXPYMzPQsrMRptnXpi6VMaPT6N53GHtmBntvWqlcthmAwYOd2O30l6mEYZggBrFqTRmLynMJHTtJ55wFXDv7F+kvbU1wN+MHyB67gstXPLiKZ3Bny06m1XxI9Vt5JI9wo+sGmmbpAzCMKFlZbhoaV7Pq3QK8q9eirv2MptkLKTlFAhyEacZZiPjds5M/5uiZW7h3fsXQV8sorqulvnwYU/MnoWlaH0Bh4UTqG1aSmy7RXlSGdu0fduQtpXTTJTparmKaAtGPgQBMUxCJdDN/7gZWVh0k6fUKhu+qYeipOjYmX+K1iil9AOs3lGFraKBt3iJC2ZNYIefxeU0j1mgURUlBURxIElhkGYssI0mgKA4URUFWFLZtPU5R/pe0pmTg/vEI1hSZil+/vacirevTDYRPnKZlbgUfHG3nVvOphEsCYoCB3+cj0BufTqfPRywWTtRnAHD+/EWmTV7DR2vnM+/9d5AP1cPZY5oEuIBHgNQBXjgB4Pbdjea4OxMDaDoQlf73v4p/BwAgir62/ncsQQAAAABJRU5ErkJggg==";
const thImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFSSURBVHja1JaxTgJBEIa/3TsVOCOS2FgYjJWllYWJ8RVsbHw7OyufQt/CwkBBpbAHRI7bmbU4LweUZDHxb3Z3ivkn88+fWRNCYJew7Bg7JzBACrSAvci5S2CRAoej+4cxNole/enLcy8FMoylfXcbNfn36xtAlgKpihKKAnU5hADGVCdUd1iPb8bqey1st0sQBUgN0BeRD2vj6q2qJElybivy+F6oc6YAN49PXF6cMM4XUZL3jlq8Dz4bAu89+awgnxUV++/8bovEGnzpVwmEyXSBmxZxzGVg6bUhKEthMJoyidSifN6ivU9DsPSCFxDVKATeK0sj6y2SYFCNM02iivdNsX3nXIgN51wA+n/jg+HVNc4k6HweZwdkGTkrU6ReILXYTidW+QRpRC7VC19ettsmYeO97tTSAF3gDDiOLMMEGNYb7aBuV0R4oDD//lfxMwBSb/PbrcWoTQAAAABJRU5ErkJggg==";
const cnImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHiSURBVHja1Ja/jtNAEMZ/Y2/icBdxXAMSEu/A1dBR0NJQ8CS8AQ0tb4CQgEegPgQFOh7ixJUX4vgSx96ZoUgOO3+KRDgFX7Or0Wg+f7PzeVfcnUMi4cA4OIEAARgAvY5r10AZgOGvl69Gkm4Xk9w3fJTg9f4MDz9+OA3AsSTC4OmThaQE3Bp9w+eRmy+hie2I8us3gOMABFNFkjlW5PTPIvOLAO7YVMjfC/Sd4YuK4nOGuyMiABv7v6pP7mKmACEAeK1YPuPoWU52FgkPUiaf+ngFDjCD+Q/Fproo1vrSbUPuvR4eF7kBwDRi4ynlzxkyUMrvKTZabbrPFb9Jd2qPh7BK4DGiRYFeTJmdC8nAsVKaUes72eOK6Xm2G0GaYhpXCTzPsXEBgOZN8unrktHbAddvAKrdCESwqmoItI74eILlkw0bjt4Zltdg+5hL8NhSYLGmurrCxuPN7Mv951+LAh1kLQWxBlUw68bDGtEqaStQiB0SRMWlbh1yXWPu+MIc/wzTiC0dslBQR0TArfWPwJdr21KyttLKaeJijvmaD0gTMF/z57pPt8W37E1xaylwU0iE5OhON2fgjreMVmuMXC/ntus7QYAT4BFwr+Piv4HL2xstu21Xh4jAXP77V8WfAQAixA0rudAk0AAAAABJRU5ErkJggg==";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const { selectedIdx } = storeToRefs(store);
    const { locale, setLocale } = useI18n();
    useSwitchLocalePath();
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
      }
    ]);
    const selectedLanguage = ref("EN");
    const onChanged = () => {
      const key = selectedLanguage.value.toLowerCase();
      setLocale(key);
      switch (key) {
        case "en": {
          selectedIdx.value = 0;
          return;
        }
        case "th": {
          selectedIdx.value = 1;
          return;
        }
        case "cn": {
          selectedIdx.value = 2;
          return;
        }
      }
    };
    const fetchLang = () => {
      switch (selectedIdx.value) {
        case 0: {
          selectedLanguage.value = locale.value.toUpperCase();
          return;
        }
        case 1: {
          selectedLanguage.value = locale.value.toUpperCase();
          return;
        }
        case 2: {
          selectedLanguage.value = locale.value.toUpperCase();
          return;
        }
      }
    };
    fetchLang();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_select = __nuxt_component_0$2;
      const _component_a_select_option = SelectOption;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      _push(ssrRenderComponent(_component_a_select, mergeProps({
        ref: "select",
        value: unref(selectedLanguage),
        "onUpdate:value": ($event) => isRef(selectedLanguage) ? selectedLanguage.value = $event : null,
        onChange: onChanged
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
                      gutter: 20
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_col, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", i.image)} style="${ssrRenderStyle({ "padding-right": "10px" })}" alt=""${_scopeId4}><span${_scopeId4}>${ssrInterpolate(i.key)}</span>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: i.image,
                                    style: { "padding-right": "10px" },
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
                                  style: { "padding-right": "10px" },
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
                        gutter: 20
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_col, null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: i.image,
                                style: { "padding-right": "10px" },
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
                      gutter: 20
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_col, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: i.image,
                              style: { "padding-right": "10px" },
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-cc321959>`);
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
              to: "/",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("home"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("home")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-cc321959${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/casino",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("casino"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("casino")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-cc321959${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/hotels",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("hotels"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("hotels")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" })}" data-v-cc321959${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/hotels/numngum",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("hotelTab1"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab1")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-cc321959${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/hotels/golf",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("hotelTab2"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab2")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-cc321959${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/hotels/vientaine-hotel",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("hotelTab3"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab3")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/experience",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("experience"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("experience")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-cc321959${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/events",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("events"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("events")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-cc321959${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/offer",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("offer"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("offer")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-cc321959${_scopeId}><p class="line-hover" data-v-cc321959${_scopeId}>${ssrInterpolate(_ctx.$t("more"))}</p><div style="${ssrRenderStyle({ "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" })}" data-v-cc321959${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/more/career",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("careerTitle"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("careerTitle")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-cc321959${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/gallery",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("gallery"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("gallery")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-cc321959${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/news",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover small-text" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("newsTitle"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("newsTitle")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/contact",
              onClose: ($event) => emit("onClose")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="line-hover" data-v-cc321959${_scopeId2}>${ssrInterpolate(_ctx.$t("contact"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("contact")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h3 class="text-white" style="${ssrRenderStyle({ "margin-top": "40px" })}" data-v-cc321959${_scopeId}>ABOUT DANSAVANH</h3><p class="text-white" data-v-cc321959${_scopeId}>Either you look for a luxurious experience or a remarkable on the go experience, Dansavanh Resort is the place to visit and spend the time at. We offer quality services.</p><p class="text-white" data-v-cc321959${_scopeId}>VIP hotline : +856-20-58276666</p><p class="text-white" data-v-cc321959${_scopeId}>Tour hotline: +856-20-52241111</p><p class="text-white" data-v-cc321959${_scopeId}>Thai hotline: +66-92193-7777</p><p class="text-white" data-v-cc321959${_scopeId}>info@dansavanh.com</p>`);
          } else {
            return [
              createVNode(_sfc_main$4, { style: { "position": "absolute", "top": "8px", "right": "10px" } }),
              createVNode(_component_NuxtLink, {
                to: "/",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("home")), 1)
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: "/casino",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("casino")), 1)
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: "/hotels",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("hotels")), 1)
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("div", { style: { "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" } }, [
                createVNode(_component_NuxtLink, {
                  to: "/hotels/numngum",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab1")), 1)
                  ]),
                  _: 1
                }, 8, ["onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: "/hotels/golf",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab2")), 1)
                  ]),
                  _: 1
                }, 8, ["onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: "/hotels/vientaine-hotel",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("hotelTab3")), 1)
                  ]),
                  _: 1
                }, 8, ["onClose"])
              ]),
              createVNode(_component_NuxtLink, {
                to: "/experience",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("experience")), 1)
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: "/events",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("events")), 1)
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("br"),
              createVNode(_component_NuxtLink, {
                to: "/offer",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("offer")), 1)
                ]),
                _: 1
              }, 8, ["onClose"]),
              createVNode("br"),
              createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("more")), 1),
              createVNode("div", { style: { "border-left": "1px solid white", "padding": "10px", "margin": "10px 0 10px" } }, [
                createVNode(_component_NuxtLink, {
                  to: "/more/career",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("careerTitle")), 1)
                  ]),
                  _: 1
                }, 8, ["onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: "/gallery",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("gallery")), 1)
                  ]),
                  _: 1
                }, 8, ["onClose"]),
                createVNode("br"),
                createVNode(_component_NuxtLink, {
                  to: "/news",
                  onClose: ($event) => emit("onClose")
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "line-hover small-text" }, toDisplayString(_ctx.$t("newsTitle")), 1)
                  ]),
                  _: 1
                }, 8, ["onClose"])
              ]),
              createVNode(_component_NuxtLink, {
                to: "/contact",
                onClose: ($event) => emit("onClose")
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "line-hover" }, toDisplayString(_ctx.$t("contact")), 1)
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
const Drawer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cc321959"]]);
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
      visible.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$3;
      const _component_DownOutlined = DownOutlined;
      const _component_dividerProps = resolveComponent("dividerProps");
      _push(`<nav${ssrRenderAttrs(_attrs)} data-v-af20b75e><div class="navbar" data-v-af20b75e><div class="navbar-start" data-v-af20b75e><div class="navbar-brand" data-v-af20b75e><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-af20b75e></div></div><div class="navbar-item is-desktop" data-v-af20b75e>`);
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
      _push(`<div class="has-dropdrown" data-v-af20b75e>`);
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
        _push(`<ul class="dropdrown" style="${ssrRenderStyle({ "width": "310px !important" })}" data-v-af20b75e><li data-v-af20b75e>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/hotels/numngum",
          onClick: ($event) => drowdownToggle.value = !unref(drowdownToggle),
          class: "line-hover"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("hotelTab1"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("hotelTab1")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-af20b75e>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/hotels/golf",
          class: "line-hover",
          onClick: ($event) => drowdownToggle.value = !unref(drowdownToggle)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("hotelTab2"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("hotelTab2")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-af20b75e>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/hotels/vientaine-hotel",
          class: "line-hover",
          onClick: ($event) => drowdownToggle.value = !unref(drowdownToggle)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("hotelTab3"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("hotelTab3")), 1)
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
              _push2(`<ul class="dropdrown" style="${ssrRenderStyle({ "width": "180px !important" })}" data-v-af20b75e${_scopeId}><li data-v-af20b75e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                class: "line-hover",
                to: "/gallery"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("gallery"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("gallery")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li data-v-af20b75e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: "/more/career",
                class: "line-hover"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("careerTitle"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("careerTitle")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li data-v-af20b75e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: "/news",
                class: "line-hover"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("newsTitle"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("newsTitle")), 1)
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
                style: { "width": "180px !important" },
                onMouseleave: ($event) => showMoreDropDown.value = false
              }, [
                createVNode("li", null, [
                  createVNode(_component_nuxt_link, {
                    class: "line-hover",
                    to: "/gallery"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("gallery")), 1)
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
                      createTextVNode(toDisplayString(_ctx.$t("careerTitle")), 1)
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
                      createTextVNode(toDisplayString(_ctx.$t("newsTitle")), 1)
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
      _push(`</div><div class="is-desktop" data-v-af20b75e>`);
      _push(ssrRenderComponent(_sfc_main$4, { style: { "position": "absolute", "right": "0", "top": "15px" } }, null, _parent));
      _push(`</div><div class="is-mobile" data-v-af20b75e><i style="${ssrRenderStyle({ "padding": "10px", "cursor": "pointer", "color": "white" })}" class="fa-solid fa-bars fa-xl" data-v-af20b75e></i>`);
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
const NavBarVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-af20b75e"]]);
const _imports_0 = "" + buildAssetsURL("logo-dansavanh2.2csl0PJe.png");
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
                    _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Image" style="${ssrRenderStyle({ "max-width": "120px" })}" data-v-ae36216d${_scopeId3}>`);
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
                    _push4(`<ul class="footer-nav" data-v-ae36216d${_scopeId3}><li data-v-ae36216d${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate(_ctx.$t("home"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("home")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate(_ctx.$t("contact"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
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
                              createTextVNode(toDisplayString(_ctx.$t("home")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_nuxt_link, { to: "/contact" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
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
                            createTextVNode(toDisplayString(_ctx.$t("home")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_nuxt_link, { to: "/contact" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
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
                          createTextVNode(toDisplayString(_ctx.$t("home")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_nuxt_link, { to: "/contact" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
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
const FooterVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ae36216d"]]);
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
//# sourceMappingURL=default-BJRuFYbc.mjs.map
