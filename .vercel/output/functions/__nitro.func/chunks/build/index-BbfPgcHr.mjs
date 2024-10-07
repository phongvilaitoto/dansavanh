import { _ as __nuxt_component_0$1 } from './nuxt-link-BN-11g_h.mjs';
import { DesktopOutlined, WifiOutlined, CoffeeOutlined } from '@ant-design/icons-vue';
import { createVNode, defineComponent, ref, computed, watch, toRef, provide, getCurrentInstance, shallowRef, Transition, withDirectives, vShow, Fragment, inject, watchEffect, unref, Teleport, cloneVNode, toRaw, nextTick, withCtx, createTextVNode, openBlock, createBlock, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-KlcFkPXq.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { t as tooltipDefaultProps, d as Tooltip, o as omit, e as Trigger, c as cloneElement, h as getPlacements, w as wrapperRaf, j as initZoomMotion, k as abstractTooltipProps, K as KeyCode, l as getArrowStyle, P as PresetColors, r as roundedArrow, m as getArrowOffset, T as Title } from './Title-YJvE5ZjV.mjs';
import _objectSpread$1 from '@babel/runtime/helpers/esm/objectSpread2';
import { I as Icon, i as initDefaultProps, P as PropTypes, R as RightOutlined, S as SiderCollapsedKey, _ as __nuxt_component_0, L as LayoutContent } from './index-DJmKUcFc.mjs';
import { q as warning, u as useConfigInject, c as classNames, w as withInstall, v as getPropsSlot, x as flattenChildren, y as isValid, d as genComponentStyleHook, m as merge, z as anyType, f as filterEmpty, A as skipFlattenKey, l as someType, B as objectType, b as booleanType, C as eventType, i as isValidElement, r as resetComponent, p as genFocusStyle, D as textEllipsis, E as clearFix, o as genFocusOutline, F as resetIcon } from './useConfigInject-BiTbSa3p.mjs';
import _extends from '@babel/runtime/helpers/esm/extends';
import { b as buttonProps, B as Button } from './index-KC68-Ln1.mjs';
import { d as devWarning, O as Overflow, D as DownOutlined, s as slideUpIn, a as slideDownIn, b as slideUpOut, c as slideDownOut, i as initSlideMotion, e as initMoveMotion } from '../_/DownOutlined.mjs';
import uniq from 'lodash-es/uniq.js';
import { g as getTransitionName, a as getTransitionProps } from '../_/CloseCircleFilled.mjs';
import { TinyColor } from '@ctrl/tinycolor';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-B566YWDZ.mjs';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-google-map';
import './createContext-DErE1G0Y.mjs';
import 'resize-observer-polyfill';
import '@ant-design/colors';
import 'dom-align';
import 'vue-types';
import 'stylis';
import '../_/LoadingOutlined.mjs';
import './Compact-mi0kmuGg.mjs';
import 'lodash-es';

// This icon file is generated automatically.
var EllipsisOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "ellipsis", "theme": "outlined" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EllipsisOutlined = function EllipsisOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": EllipsisOutlined$1
  }), null);
};

EllipsisOutlined.displayName = 'EllipsisOutlined';
EllipsisOutlined.inheritAttrs = false;

const genCollapseMotion = (token) => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});
const genBaseStyle$1 = (token) => {
  const {
    componentCls,
    popoverBg,
    popoverColor,
    width,
    fontWeightStrong,
    popoverPadding,
    boxShadowSecondary,
    colorTextHeading,
    borderRadiusLG: borderRadius,
    zIndexPopup,
    marginXS,
    colorBgElevated
  } = token;
  return [
    {
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        position: "absolute",
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: true,
          value: 0
        },
        zIndex: zIndexPopup,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        "--antd-arrow-background-color": colorBgElevated,
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${componentCls}-content`]: {
          position: "relative"
        },
        [`${componentCls}-inner`]: {
          backgroundColor: popoverBg,
          backgroundClip: "padding-box",
          borderRadius,
          boxShadow: boxShadowSecondary,
          padding: popoverPadding
        },
        [`${componentCls}-title`]: {
          minWidth: width,
          marginBottom: marginXS,
          color: colorTextHeading,
          fontWeight: fontWeightStrong
        },
        [`${componentCls}-inner-content`]: {
          color: popoverColor
        }
      })
    },
    // Arrow Style
    getArrowStyle(token, {
      colorBg: "var(--antd-arrow-background-color)"
    }),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none",
        [`${componentCls}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
};
const genColorStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: PresetColors.map((colorKey) => {
      const lightColor = token[`${colorKey}-6`];
      return {
        [`&${componentCls}-${colorKey}`]: {
          "--antd-arrow-background-color": lightColor,
          [`${componentCls}-inner`]: {
            backgroundColor: lightColor
          },
          [`${componentCls}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
};
const genWireframeStyle = (token) => {
  const {
    componentCls,
    lineWidth,
    lineType,
    colorSplit,
    paddingSM,
    controlHeight,
    fontSize,
    lineHeight,
    padding
  } = token;
  const titlePaddingBlockDist = controlHeight - Math.round(fontSize * lineHeight);
  const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
  const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
  const popoverPaddingHorizontal = padding;
  return {
    [componentCls]: {
      [`${componentCls}-inner`]: {
        padding: 0
      },
      [`${componentCls}-title`]: {
        margin: 0,
        padding: `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px`,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      [`${componentCls}-inner-content`]: {
        padding: `${paddingSM}px ${popoverPaddingHorizontal}px`
      }
    }
  };
};
const useStyle$3 = genComponentStyleHook("Popover", (token) => {
  const {
    colorBgElevated,
    colorText,
    wireframe
  } = token;
  const popoverToken = merge(token, {
    popoverBg: colorBgElevated,
    popoverColor: colorText,
    popoverPadding: 12
    // Fixed Value
  });
  return [genBaseStyle$1(popoverToken), genColorStyle(popoverToken), wireframe && genWireframeStyle(popoverToken), initZoomMotion(popoverToken, "zoom-big")];
}, (_ref) => {
  let {
    zIndexPopupBase
  } = _ref;
  return {
    zIndexPopup: zIndexPopupBase + 30,
    width: 177
  };
});
const popoverProps = () => _extends(_extends({}, abstractTooltipProps()), {
  content: anyType(),
  title: anyType()
});
const Popover = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "APopover",
  inheritAttrs: false,
  props: initDefaultProps(popoverProps(), _extends(_extends({}, tooltipDefaultProps()), {
    trigger: "hover",
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  })),
  setup(props, _ref) {
    let {
      expose,
      slots,
      attrs
    } = _ref;
    const tooltipRef = ref();
    warning(props.visible === void 0);
    expose({
      getPopupDomNode: () => {
        var _a, _b;
        return (_b = (_a = tooltipRef.value) === null || _a === void 0 ? void 0 : _a.getPopupDomNode) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    });
    const {
      prefixCls,
      configProvider
    } = useConfigInject("popover", props);
    const [wrapSSR, hashId] = useStyle$3(prefixCls);
    const rootPrefixCls = computed(() => configProvider.getPrefixCls());
    const getOverlay = () => {
      var _a, _b;
      const {
        title = filterEmpty((_a = slots.title) === null || _a === void 0 ? void 0 : _a.call(slots)),
        content = filterEmpty((_b = slots.content) === null || _b === void 0 ? void 0 : _b.call(slots))
      } = props;
      const hasTitle = !!(Array.isArray(title) ? title.length : title);
      const hasContent = !!(Array.isArray(content) ? content.length : title);
      if (!hasTitle && !hasContent)
        return null;
      return createVNode(Fragment, null, [hasTitle && createVNode("div", {
        "class": `${prefixCls.value}-title`
      }, [title]), createVNode("div", {
        "class": `${prefixCls.value}-inner-content`
      }, [content])]);
    };
    return () => {
      const overlayCls = classNames(props.overlayClassName, hashId.value);
      return wrapSSR(createVNode(Tooltip, _objectSpread$1(_objectSpread$1(_objectSpread$1({}, omit(props, ["title", "content"])), attrs), {}, {
        "prefixCls": prefixCls.value,
        "ref": tooltipRef,
        "overlayClassName": overlayCls,
        "transitionName": getTransitionName(rootPrefixCls.value, "zoom-big", props.transitionName),
        "data-popover-inject": true
      }), {
        title: getOverlay,
        default: slots.default
      }));
    };
  }
});
const __nuxt_component_8 = withInstall(Popover);
const autoAdjustOverflow$1 = {
  adjustX: 1,
  adjustY: 1
};
const targetOffset = [0, 0];
const placements$1 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  }
};
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
const Dropdown$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: {
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    arrow: {
      type: Boolean,
      default: false
    },
    prefixCls: PropTypes.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: PropTypes.string.def(""),
    openClassName: String,
    animation: PropTypes.any,
    align: PropTypes.object,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    placement: PropTypes.string.def("bottomLeft"),
    overlay: PropTypes.any,
    trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).def("hover"),
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    showAction: PropTypes.array,
    hideAction: PropTypes.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    mouseEnterDelay: PropTypes.number.def(0.15),
    mouseLeaveDelay: PropTypes.number.def(0.1)
  },
  emits: ["visibleChange", "overlayClick"],
  setup(props, _ref) {
    let {
      slots,
      emit,
      expose
    } = _ref;
    const triggerVisible = ref(!!props.visible);
    watch(() => props.visible, (val) => {
      if (val !== void 0) {
        triggerVisible.value = val;
      }
    });
    const triggerRef = ref();
    expose({
      triggerRef
    });
    const onClick = (e) => {
      if (props.visible === void 0) {
        triggerVisible.value = false;
      }
      emit("overlayClick", e);
    };
    const onVisibleChange = (visible) => {
      if (props.visible === void 0) {
        triggerVisible.value = visible;
      }
      emit("visibleChange", visible);
    };
    const getMenuElement = () => {
      var _a;
      const overlayElement = (_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots);
      const extraOverlayProps = {
        prefixCls: `${props.prefixCls}-menu`,
        onClick
      };
      return createVNode(Fragment, {
        "key": skipFlattenKey
      }, [props.arrow && createVNode("div", {
        "class": `${props.prefixCls}-arrow`
      }, null), cloneElement(overlayElement, extraOverlayProps, false)]);
    };
    const minOverlayWidthMatchTrigger = computed(() => {
      const {
        minOverlayWidthMatchTrigger: matchTrigger = !props.alignPoint
      } = props;
      return matchTrigger;
    });
    const renderChildren = () => {
      var _a;
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      return triggerVisible.value && children ? cloneElement(children[0], {
        class: props.openClassName || `${props.prefixCls}-open`
      }, false) : children;
    };
    const triggerHideAction = computed(() => {
      if (!props.hideAction && props.trigger.indexOf("contextmenu") !== -1) {
        return ["click"];
      }
      return props.hideAction;
    });
    return () => {
      const {
        prefixCls,
        arrow,
        showAction,
        overlayStyle,
        trigger,
        placement,
        align,
        getPopupContainer,
        transitionName,
        animation,
        overlayClassName
      } = props, otherProps = __rest$4(props, ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"]);
      return createVNode(Trigger, _objectSpread$1(_objectSpread$1({}, otherProps), {}, {
        "prefixCls": prefixCls,
        "ref": triggerRef,
        "popupClassName": classNames(overlayClassName, {
          [`${prefixCls}-show-arrow`]: arrow
        }),
        "popupStyle": overlayStyle,
        "builtinPlacements": placements$1,
        "action": trigger,
        "showAction": showAction,
        "hideAction": triggerHideAction.value || [],
        "popupPlacement": placement,
        "popupAlign": align,
        "popupTransitionName": transitionName,
        "popupAnimation": animation,
        "popupVisible": triggerVisible.value,
        "stretch": minOverlayWidthMatchTrigger.value ? "minWidth" : "",
        "onPopupVisibleChange": onVisibleChange,
        "getPopupContainer": getPopupContainer
      }), {
        popup: getMenuElement,
        default: renderChildren
      });
    };
  }
});
const dropdownProps = () => ({
  arrow: someType([Boolean, Object]),
  trigger: {
    type: [Array, String]
  },
  menu: objectType(),
  overlay: PropTypes.any,
  /** @deprecated Please use `open` instead */
  visible: booleanType(),
  open: booleanType(),
  disabled: booleanType(),
  danger: booleanType(),
  autofocus: booleanType(),
  align: objectType(),
  getPopupContainer: Function,
  prefixCls: String,
  transitionName: String,
  placement: String,
  overlayClassName: String,
  overlayStyle: objectType(),
  forceRender: booleanType(),
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  openClassName: String,
  minOverlayWidthMatchTrigger: booleanType(),
  destroyPopupOnHide: booleanType(),
  /** @deprecated Please use `onOpenChange` instead */
  onVisibleChange: {
    type: Function
  },
  /** @deprecated Please use `onUpdate:open` instead */
  "onUpdate:visible": {
    type: Function
  },
  onOpenChange: {
    type: Function
  },
  "onUpdate:open": {
    type: Function
  }
});
const buttonTypesProps = buttonProps();
const dropdownButtonProps = () => _extends(_extends({}, dropdownProps()), {
  type: buttonTypesProps.type,
  size: String,
  htmlType: buttonTypesProps.htmlType,
  href: String,
  disabled: booleanType(),
  prefixCls: String,
  icon: PropTypes.any,
  title: String,
  loading: buttonTypesProps.loading,
  onClick: eventType()
});
const genButtonStyle = (token) => {
  const {
    componentCls,
    antCls,
    paddingXS,
    opacityLoading
  } = token;
  return {
    [`${componentCls}-button`]: {
      whiteSpace: "nowrap",
      [`&${antCls}-btn-group > ${antCls}-btn`]: {
        [`&-loading, &-loading + ${antCls}-btn`]: {
          cursor: "default",
          pointerEvents: "none",
          opacity: opacityLoading
        },
        [`&:last-child:not(:first-child):not(${antCls}-btn-icon-only)`]: {
          paddingInline: paddingXS
        }
      }
    }
  };
};
const genStatusStyle = (token) => {
  const {
    componentCls,
    menuCls,
    colorError,
    colorTextLightSolid
  } = token;
  const itemCls = `${menuCls}-item`;
  return {
    [`${componentCls}, ${componentCls}-menu-submenu`]: {
      [`${menuCls} ${itemCls}`]: {
        [`&${itemCls}-danger:not(${itemCls}-disabled)`]: {
          color: colorError,
          "&:hover": {
            color: colorTextLightSolid,
            backgroundColor: colorError
          }
        }
      }
    }
  };
};
const genBaseStyle = (token) => {
  const {
    componentCls,
    menuCls,
    zIndexPopup,
    dropdownArrowDistance,
    dropdownArrowOffset,
    sizePopupArrow,
    antCls,
    iconCls,
    motionDurationMid,
    dropdownPaddingVertical,
    fontSize,
    dropdownEdgeChildPadding,
    colorTextDisabled,
    fontSizeIcon,
    controlPaddingHorizontal,
    colorBgElevated,
    boxShadowPopoverArrow
  } = token;
  return [
    {
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        position: "absolute",
        top: -9999,
        left: {
          _skip_check_: true,
          value: -9999
        },
        zIndex: zIndexPopup,
        display: "block",
        // A placeholder out of dropdown visible range to avoid close when user moving
        "&::before": {
          position: "absolute",
          insetBlock: -dropdownArrowDistance + sizePopupArrow / 2,
          // insetInlineStart: -7, // FIXME: Seems not work for hidden element
          zIndex: -9999,
          opacity: 1e-4,
          content: '""'
        },
        [`${componentCls}-wrap`]: {
          position: "relative",
          [`${antCls}-btn > ${iconCls}-down`]: {
            fontSize: fontSizeIcon
          },
          [`${iconCls}-down::before`]: {
            transition: `transform ${motionDurationMid}`
          }
        },
        [`${componentCls}-wrap-open`]: {
          [`${iconCls}-down::before`]: {
            transform: `rotate(180deg)`
          }
        },
        [`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]: {
          display: "none"
        },
        // =============================================================
        // ==                          Arrow                          ==
        // =============================================================
        // Offset the popover to account for the dropdown arrow
        [`
        &-show-arrow${componentCls}-placement-topLeft,
        &-show-arrow${componentCls}-placement-top,
        &-show-arrow${componentCls}-placement-topRight
      `]: {
          paddingBottom: dropdownArrowDistance
        },
        [`
        &-show-arrow${componentCls}-placement-bottomLeft,
        &-show-arrow${componentCls}-placement-bottom,
        &-show-arrow${componentCls}-placement-bottomRight
      `]: {
          paddingTop: dropdownArrowDistance
        },
        // Note: .popover-arrow is outer, .popover-arrow:after is inner
        [`${componentCls}-arrow`]: _extends({
          position: "absolute",
          zIndex: 1,
          display: "block"
        }, roundedArrow(sizePopupArrow, token.borderRadiusXS, token.borderRadiusOuter, colorBgElevated, boxShadowPopoverArrow)),
        [`
        &-placement-top > ${componentCls}-arrow,
        &-placement-topLeft > ${componentCls}-arrow,
        &-placement-topRight > ${componentCls}-arrow
      `]: {
          bottom: dropdownArrowDistance,
          transform: "translateY(100%) rotate(180deg)"
        },
        [`&-placement-top > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateX(-50%) translateY(100%) rotate(180deg)"
        },
        [`&-placement-topLeft > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: dropdownArrowOffset
          }
        },
        [`&-placement-topRight > ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: dropdownArrowOffset
          }
        },
        [`
          &-placement-bottom > ${componentCls}-arrow,
          &-placement-bottomLeft > ${componentCls}-arrow,
          &-placement-bottomRight > ${componentCls}-arrow
        `]: {
          top: dropdownArrowDistance,
          transform: `translateY(-100%)`
        },
        [`&-placement-bottom > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: `translateY(-100%) translateX(-50%)`
        },
        [`&-placement-bottomLeft > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: dropdownArrowOffset
          }
        },
        [`&-placement-bottomRight > ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: dropdownArrowOffset
          }
        },
        // =============================================================
        // ==                         Motion                          ==
        // =============================================================
        // When position is not enough for dropdown, the placement will revert.
        // We will handle this with revert motion name.
        [`&${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottomRight,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottomRight`]: {
          animationName: slideUpIn
        },
        [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-top,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-top,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-topRight,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-topRight`]: {
          animationName: slideDownIn
        },
        [`&${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottomRight`]: {
          animationName: slideUpOut
        },
        [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-top,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-topRight`]: {
          animationName: slideDownOut
        }
      })
    },
    {
      // =============================================================
      // ==                          Menu                           ==
      // =============================================================
      [`${componentCls} ${menuCls}`]: {
        position: "relative",
        margin: 0
      },
      [`${menuCls}-submenu-popup`]: {
        position: "absolute",
        zIndex: zIndexPopup,
        background: "transparent",
        boxShadow: "none",
        transformOrigin: "0 0",
        "ul,li": {
          listStyle: "none"
        },
        ul: {
          marginInline: "0.3em"
        }
      },
      [`${componentCls}, ${componentCls}-menu-submenu`]: {
        [menuCls]: _extends(_extends({
          padding: dropdownEdgeChildPadding,
          listStyleType: "none",
          backgroundColor: colorBgElevated,
          backgroundClip: "padding-box",
          borderRadius: token.borderRadiusLG,
          outline: "none",
          boxShadow: token.boxShadowSecondary
        }, genFocusStyle(token)), {
          [`${menuCls}-item-group-title`]: {
            padding: `${dropdownPaddingVertical}px ${controlPaddingHorizontal}px`,
            color: token.colorTextDescription,
            transition: `all ${motionDurationMid}`
          },
          // ======================= Item Content =======================
          [`${menuCls}-item`]: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            borderRadius: token.borderRadiusSM
          },
          [`${menuCls}-item-icon`]: {
            minWidth: fontSize,
            marginInlineEnd: token.marginXS,
            fontSize: token.fontSizeSM
          },
          [`${menuCls}-title-content`]: {
            flex: "auto",
            "> a": {
              color: "inherit",
              transition: `all ${motionDurationMid}`,
              "&:hover": {
                color: "inherit"
              },
              "&::after": {
                position: "absolute",
                inset: 0,
                content: '""'
              }
            }
          },
          // =========================== Item ===========================
          [`${menuCls}-item, ${menuCls}-submenu-title`]: _extends(_extends({
            clear: "both",
            margin: 0,
            padding: `${dropdownPaddingVertical}px ${controlPaddingHorizontal}px`,
            color: token.colorText,
            fontWeight: "normal",
            fontSize,
            lineHeight: token.lineHeight,
            cursor: "pointer",
            transition: `all ${motionDurationMid}`,
            [`&:hover, &-active`]: {
              backgroundColor: token.controlItemBgHover
            }
          }, genFocusStyle(token)), {
            "&-selected": {
              color: token.colorPrimary,
              backgroundColor: token.controlItemBgActive,
              "&:hover, &-active": {
                backgroundColor: token.controlItemBgActiveHover
              }
            },
            "&-disabled": {
              color: colorTextDisabled,
              cursor: "not-allowed",
              "&:hover": {
                color: colorTextDisabled,
                backgroundColor: colorBgElevated,
                cursor: "not-allowed"
              },
              a: {
                pointerEvents: "none"
              }
            },
            "&-divider": {
              height: 1,
              margin: `${token.marginXXS}px 0`,
              overflow: "hidden",
              lineHeight: 0,
              backgroundColor: token.colorSplit
            },
            [`${componentCls}-menu-submenu-expand-icon`]: {
              position: "absolute",
              insetInlineEnd: token.paddingXS,
              [`${componentCls}-menu-submenu-arrow-icon`]: {
                marginInlineEnd: "0 !important",
                color: token.colorTextDescription,
                fontSize: fontSizeIcon,
                fontStyle: "normal"
              }
            }
          }),
          [`${menuCls}-item-group-list`]: {
            margin: `0 ${token.marginXS}px`,
            padding: 0,
            listStyle: "none"
          },
          [`${menuCls}-submenu-title`]: {
            paddingInlineEnd: controlPaddingHorizontal + token.fontSizeSM
          },
          [`${menuCls}-submenu-vertical`]: {
            position: "relative"
          },
          [`${menuCls}-submenu${menuCls}-submenu-disabled ${componentCls}-menu-submenu-title`]: {
            [`&, ${componentCls}-menu-submenu-arrow-icon`]: {
              color: colorTextDisabled,
              backgroundColor: colorBgElevated,
              cursor: "not-allowed"
            }
          },
          // https://github.com/ant-design/ant-design/issues/19264
          [`${menuCls}-submenu-selected ${componentCls}-menu-submenu-title`]: {
            color: token.colorPrimary
          }
        })
      }
    },
    // Follow code may reuse in other components
    [initSlideMotion(token, "slide-up"), initSlideMotion(token, "slide-down"), initMoveMotion(token, "move-up"), initMoveMotion(token, "move-down"), initZoomMotion(token, "zoom-big")]
  ];
};
const useStyle$2 = genComponentStyleHook("Dropdown", (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const {
    marginXXS,
    sizePopupArrow,
    controlHeight,
    fontSize,
    lineHeight,
    paddingXXS,
    componentCls,
    borderRadiusOuter,
    borderRadiusLG
  } = token;
  const dropdownPaddingVertical = (controlHeight - fontSize * lineHeight) / 2;
  const {
    dropdownArrowOffset
  } = getArrowOffset({
    sizePopupArrow,
    contentRadius: borderRadiusLG,
    borderRadiusOuter
  });
  const dropdownToken = merge(token, {
    menuCls: `${componentCls}-menu`,
    rootPrefixCls,
    dropdownArrowDistance: sizePopupArrow / 2 + marginXXS,
    dropdownArrowOffset,
    dropdownPaddingVertical,
    dropdownEdgeChildPadding: paddingXXS
  });
  return [genBaseStyle(dropdownToken), genButtonStyle(dropdownToken), genStatusStyle(dropdownToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase + 50
}));
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
const ButtonGroup = Button.Group;
const DropdownButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ADropdownButton",
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps(dropdownButtonProps(), {
    trigger: "hover",
    placement: "bottomRight",
    type: "default"
  }),
  // emits: ['click', 'visibleChange', 'update:visible'],s
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const handleVisibleChange = (val) => {
      emit("update:visible", val);
      emit("visibleChange", val);
      emit("update:open", val);
      emit("openChange", val);
    };
    const {
      prefixCls,
      direction,
      getPopupContainer
    } = useConfigInject("dropdown", props);
    const buttonPrefixCls = computed(() => `${prefixCls.value}-button`);
    const [wrapSSR, hashId] = useStyle$2(prefixCls);
    return () => {
      var _a, _b;
      const _c = _extends(_extends({}, props), attrs), {
        type = "default",
        disabled,
        danger,
        loading,
        htmlType,
        class: className = "",
        overlay = (_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots),
        trigger,
        align,
        open,
        visible,
        onVisibleChange: _onVisibleChange,
        placement = direction.value === "rtl" ? "bottomLeft" : "bottomRight",
        href,
        title,
        icon = ((_b = slots.icon) === null || _b === void 0 ? void 0 : _b.call(slots)) || createVNode(EllipsisOutlined, null, null),
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayClassName,
        overlayStyle,
        destroyPopupOnHide,
        onClick,
        "onUpdate:open": _updateVisible
      } = _c, restProps = __rest$3(_c, ["type", "disabled", "danger", "loading", "htmlType", "class", "overlay", "trigger", "align", "open", "visible", "onVisibleChange", "placement", "href", "title", "icon", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "onClick", "onUpdate:open"]);
      const dropdownProps2 = {
        align,
        disabled,
        trigger: disabled ? [] : trigger,
        placement,
        getPopupContainer: getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value,
        onOpenChange: handleVisibleChange,
        mouseEnterDelay,
        mouseLeaveDelay,
        open: open !== null && open !== void 0 ? open : visible,
        overlayClassName,
        overlayStyle,
        destroyPopupOnHide
      };
      const leftButton = createVNode(Button, {
        "danger": danger,
        "type": type,
        "disabled": disabled,
        "loading": loading,
        "onClick": onClick,
        "htmlType": htmlType,
        "href": href,
        "title": title
      }, {
        default: slots.default
      });
      const rightButton = createVNode(Button, {
        "danger": danger,
        "type": type,
        "icon": icon
      }, null);
      return wrapSSR(createVNode(ButtonGroup, _objectSpread$1(_objectSpread$1({}, restProps), {}, {
        "class": classNames(buttonPrefixCls.value, className, hashId.value)
      }), {
        default: () => [slots.leftButton ? slots.leftButton({
          button: leftButton
        }) : leftButton, createVNode(Dropdown, dropdownProps2, {
          default: () => [slots.rightButton ? slots.rightButton({
            button: rightButton
          }) : rightButton],
          overlay: () => overlay
        })]
      }));
    };
  }
});
const OverrideContextKey = Symbol("OverrideContextKey");
const useInjectOverride = () => {
  return inject(OverrideContextKey, void 0);
};
const useProvideOverride = (props) => {
  var _a, _b, _c;
  const {
    prefixCls,
    mode,
    selectable,
    validator,
    onClick,
    expandIcon
  } = useInjectOverride() || {};
  provide(OverrideContextKey, {
    prefixCls: computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.prefixCls) === null || _a2 === void 0 ? void 0 : _a2.value) !== null && _b2 !== void 0 ? _b2 : prefixCls === null || prefixCls === void 0 ? void 0 : prefixCls.value;
    }),
    mode: computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.mode) === null || _a2 === void 0 ? void 0 : _a2.value) !== null && _b2 !== void 0 ? _b2 : mode === null || mode === void 0 ? void 0 : mode.value;
    }),
    selectable: computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.selectable) === null || _a2 === void 0 ? void 0 : _a2.value) !== null && _b2 !== void 0 ? _b2 : selectable === null || selectable === void 0 ? void 0 : selectable.value;
    }),
    validator: (_a = props.validator) !== null && _a !== void 0 ? _a : validator,
    onClick: (_b = props.onClick) !== null && _b !== void 0 ? _b : onClick,
    expandIcon: (_c = props.expandIcon) !== null && _c !== void 0 ? _c : expandIcon === null || expandIcon === void 0 ? void 0 : expandIcon.value
  });
};
const Dropdown = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ADropdown",
  inheritAttrs: false,
  props: initDefaultProps(dropdownProps(), {
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: "bottomLeft",
    trigger: "hover"
  }),
  // emits: ['visibleChange', 'update:visible'],
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const {
      prefixCls,
      rootPrefixCls,
      direction,
      getPopupContainer
    } = useConfigInject("dropdown", props);
    const [wrapSSR, hashId] = useStyle$2(prefixCls);
    const transitionName = computed(() => {
      const {
        placement: placement2 = "",
        transitionName: transitionName2
      } = props;
      if (transitionName2 !== void 0) {
        return transitionName2;
      }
      if (placement2.includes("top")) {
        return `${rootPrefixCls.value}-slide-down`;
      }
      return `${rootPrefixCls.value}-slide-up`;
    });
    useProvideOverride({
      prefixCls: computed(() => `${prefixCls.value}-menu`),
      expandIcon: computed(() => {
        return createVNode("span", {
          "class": `${prefixCls.value}-menu-submenu-arrow`
        }, [createVNode(RightOutlined, {
          "class": `${prefixCls.value}-menu-submenu-arrow-icon`
        }, null)]);
      }),
      mode: computed(() => "vertical"),
      selectable: computed(() => false),
      onClick: () => {
      },
      validator: (_ref3) => {
      }
    });
    const renderOverlay = () => {
      var _a, _b, _c;
      const overlay = props.overlay || ((_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots));
      const overlayNode = Array.isArray(overlay) ? overlay[0] : overlay;
      if (!overlayNode)
        return null;
      const overlayProps = overlayNode.props || {};
      devWarning(!overlayProps.mode || overlayProps.mode === "vertical", "Dropdown", `mode="${overlayProps.mode}" is not supported for Dropdown's Menu.`);
      const {
        selectable = false,
        expandIcon = (_c = (_b = overlayNode.children) === null || _b === void 0 ? void 0 : _b.expandIcon) === null || _c === void 0 ? void 0 : _c.call(_b)
      } = overlayProps;
      const overlayNodeExpandIcon = typeof expandIcon !== "undefined" && isValidElement(expandIcon) ? expandIcon : createVNode("span", {
        "class": `${prefixCls.value}-menu-submenu-arrow`
      }, [createVNode(RightOutlined, {
        "class": `${prefixCls.value}-menu-submenu-arrow-icon`
      }, null)]);
      const fixedModeOverlay = isValidElement(overlayNode) ? cloneElement(overlayNode, {
        mode: "vertical",
        selectable,
        expandIcon: () => overlayNodeExpandIcon
      }) : overlayNode;
      return fixedModeOverlay;
    };
    const placement = computed(() => {
      const placement2 = props.placement;
      if (!placement2) {
        return direction.value === "rtl" ? "bottomRight" : "bottomLeft";
      }
      if (placement2.includes("Center")) {
        const newPlacement = placement2.slice(0, placement2.indexOf("Center"));
        devWarning(!placement2.includes("Center"), "Dropdown", `You are using '${placement2}' placement in Dropdown, which is deprecated. Try to use '${newPlacement}' instead.`);
        return newPlacement;
      }
      return placement2;
    });
    const mergedVisible = computed(() => {
      return typeof props.visible === "boolean" ? props.visible : props.open;
    });
    const handleVisibleChange = (val) => {
      emit("update:visible", val);
      emit("visibleChange", val);
      emit("update:open", val);
      emit("openChange", val);
    };
    return () => {
      var _a, _b;
      const {
        arrow,
        trigger,
        disabled,
        overlayClassName
      } = props;
      const child = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
      const dropdownTrigger = cloneElement(child, _extends({
        class: classNames((_b = child === null || child === void 0 ? void 0 : child.props) === null || _b === void 0 ? void 0 : _b.class, {
          [`${prefixCls.value}-rtl`]: direction.value === "rtl"
        }, `${prefixCls.value}-trigger`)
      }, disabled ? {
        disabled
      } : {}));
      const overlayClassNameCustomized = classNames(overlayClassName, hashId.value, {
        [`${prefixCls.value}-rtl`]: direction.value === "rtl"
      });
      const triggerActions = disabled ? [] : trigger;
      let alignPoint;
      if (triggerActions && triggerActions.includes("contextmenu")) {
        alignPoint = true;
      }
      const builtinPlacements = getPlacements({
        arrowPointAtCenter: typeof arrow === "object" && arrow.pointAtCenter,
        autoAdjustOverflow: true
      });
      const dropdownProps2 = omit(_extends(_extends(_extends({}, props), attrs), {
        visible: mergedVisible.value,
        builtinPlacements,
        overlayClassName: overlayClassNameCustomized,
        arrow: !!arrow,
        alignPoint,
        prefixCls: prefixCls.value,
        getPopupContainer: getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value,
        transitionName: transitionName.value,
        trigger: triggerActions,
        onVisibleChange: handleVisibleChange,
        placement: placement.value
      }), ["overlay", "onUpdate:visible"]);
      return wrapSSR(createVNode(Dropdown$1, dropdownProps2, {
        default: () => [dropdownTrigger],
        overlay: renderOverlay
      }));
    };
  }
});
Dropdown.Button = DropdownButton;
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
const breadcrumbItemProps = () => ({
  prefixCls: String,
  href: String,
  separator: PropTypes.any,
  dropdownProps: objectType(),
  overlay: PropTypes.any,
  onClick: eventType()
});
const __nuxt_component_6 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ABreadcrumbItem",
  inheritAttrs: false,
  __ANT_BREADCRUMB_ITEM: true,
  props: breadcrumbItemProps(),
  // emits: ['click'],
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const {
      prefixCls
    } = useConfigInject("breadcrumb", props);
    const renderBreadcrumbNode = (breadcrumbItem, prefixCls2) => {
      const overlay = getPropsSlot(slots, props, "overlay");
      if (overlay) {
        return createVNode(Dropdown, _objectSpread$1(_objectSpread$1({}, props.dropdownProps), {}, {
          "overlay": overlay,
          "placement": "bottom"
        }), {
          default: () => [createVNode("span", {
            "class": `${prefixCls2}-overlay-link`
          }, [breadcrumbItem, createVNode(DownOutlined, null, null)])]
        });
      }
      return breadcrumbItem;
    };
    const handleClick = (e) => {
      emit("click", e);
    };
    return () => {
      var _a;
      const separator = (_a = getPropsSlot(slots, props, "separator")) !== null && _a !== void 0 ? _a : "/";
      const children = getPropsSlot(slots, props);
      const {
        class: cls,
        style
      } = attrs, restAttrs = __rest$2(attrs, ["class", "style"]);
      let link;
      if (props.href !== void 0) {
        link = createVNode("a", _objectSpread$1({
          "class": `${prefixCls.value}-link`,
          "onClick": handleClick
        }, restAttrs), [children]);
      } else {
        link = createVNode("span", _objectSpread$1({
          "class": `${prefixCls.value}-link`,
          "onClick": handleClick
        }, restAttrs), [children]);
      }
      link = renderBreadcrumbNode(link, prefixCls.value);
      if (children !== void 0 && children !== null) {
        return createVNode("li", {
          "class": cls,
          "style": style
        }, [link, separator && createVNode("span", {
          "class": `${prefixCls.value}-separator`
        }, [separator])]);
      }
      return null;
    };
  }
});
function shallowEqual(objA, objB, compare, compareContext) {
  let ret = void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    ret = void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function shallowequal(value, other) {
  return shallowEqual(toRaw(value), toRaw(other));
}
const MenuContextKey = Symbol("menuContextKey");
const useProvideMenu = (props) => {
  provide(MenuContextKey, props);
};
const useInjectMenu = () => {
  return inject(MenuContextKey);
};
const ForceRenderKey = Symbol("ForceRenderKey");
const useProvideForceRender = (forceRender) => {
  provide(ForceRenderKey, forceRender);
};
const useInjectForceRender = () => {
  return inject(ForceRenderKey, false);
};
const MenuFirstLevelContextKey = Symbol("menuFirstLevelContextKey");
const useProvideFirstLevel = (firstLevel) => {
  provide(MenuFirstLevelContextKey, firstLevel);
};
const useInjectFirstLevel = () => {
  return inject(MenuFirstLevelContextKey, true);
};
const MenuContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "MenuContextProvider",
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: void 0
    },
    overflowDisabled: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const menuContext = useInjectMenu();
    const newContext = _extends({}, menuContext);
    if (props.mode !== void 0) {
      newContext.mode = toRef(props, "mode");
    }
    if (props.overflowDisabled !== void 0) {
      newContext.overflowDisabled = toRef(props, "overflowDisabled");
    }
    useProvideMenu(newContext);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const useProvideMenu$1 = useProvideMenu;
const OVERFLOW_KEY = "$$__vc-menu-more__key";
const KeyPathContext = Symbol("KeyPathContext");
const useInjectKeyPath = () => {
  return inject(KeyPathContext, {
    parentEventKeys: computed(() => []),
    parentKeys: computed(() => []),
    parentInfo: {}
  });
};
const useProvideKeyPath = (eventKey, key, menuInfo) => {
  const {
    parentEventKeys,
    parentKeys
  } = useInjectKeyPath();
  const eventKeys = computed(() => [...parentEventKeys.value, eventKey]);
  const keys = computed(() => [...parentKeys.value, key]);
  provide(KeyPathContext, {
    parentEventKeys: eventKeys,
    parentKeys: keys,
    parentInfo: menuInfo
  });
  return keys;
};
const measure = Symbol("measure");
const PathContext = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup(_props, _ref) {
    let {
      slots
    } = _ref;
    provide(measure, true);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const useMeasure = () => {
  return inject(measure, false);
};
const useProvideKeyPath$1 = useProvideKeyPath;
function useDirectionStyle(level) {
  const {
    mode,
    rtl,
    inlineIndent
  } = useInjectMenu();
  return computed(() => mode.value !== "inline" ? null : rtl.value ? {
    paddingRight: `${level.value * inlineIndent.value}px`
  } : {
    paddingLeft: `${level.value * inlineIndent.value}px`
  });
}
let indexGuid$1 = 0;
const menuItemProps = () => ({
  id: String,
  role: String,
  disabled: Boolean,
  danger: Boolean,
  title: {
    type: [String, Boolean],
    default: void 0
  },
  icon: PropTypes.any,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  // Internal user prop
  originItemValue: objectType()
});
const MenuItem = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItem",
  inheritAttrs: false,
  props: menuItemProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const instance = getCurrentInstance();
    const isMeasure = useMeasure();
    const key = typeof instance.vnode.key === "symbol" ? String(instance.vnode.key) : instance.vnode.key;
    devWarning(typeof instance.vnode.key !== "symbol", "MenuItem", `MenuItem \`:key="${String(key)}"\` not support Symbol type`);
    const eventKey = `menu_item_${++indexGuid$1}_$$_${key}`;
    const {
      parentEventKeys,
      parentKeys
    } = useInjectKeyPath();
    const {
      prefixCls,
      activeKeys,
      disabled,
      changeActiveKeys,
      rtl,
      inlineCollapsed,
      siderCollapsed,
      onItemClick,
      selectedKeys,
      registerMenuInfo,
      unRegisterMenuInfo
    } = useInjectMenu();
    const firstLevel = useInjectFirstLevel();
    const isActive = shallowRef(false);
    const keysPath = computed(() => {
      return [...parentKeys.value, key];
    });
    const menuInfo = {
      eventKey,
      key,
      parentEventKeys,
      parentKeys,
      isLeaf: true
    };
    registerMenuInfo(eventKey, menuInfo);
    watch(activeKeys, () => {
      isActive.value = !!activeKeys.value.find((val) => val === key);
    }, {
      immediate: true
    });
    const mergedDisabled = computed(() => disabled.value || props.disabled);
    const selected = computed(() => selectedKeys.value.includes(key));
    const classNames2 = computed(() => {
      const itemCls = `${prefixCls.value}-item`;
      return {
        [`${itemCls}`]: true,
        [`${itemCls}-danger`]: props.danger,
        [`${itemCls}-active`]: isActive.value,
        [`${itemCls}-selected`]: selected.value,
        [`${itemCls}-disabled`]: mergedDisabled.value
      };
    });
    const getEventInfo = (e) => {
      return {
        key,
        eventKey,
        keyPath: keysPath.value,
        eventKeyPath: [...parentEventKeys.value, eventKey],
        domEvent: e,
        item: _extends(_extends({}, props), attrs)
      };
    };
    const onInternalClick = (e) => {
      if (mergedDisabled.value) {
        return;
      }
      const info = getEventInfo(e);
      emit("click", e);
      onItemClick(info);
    };
    const onMouseEnter = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit("mouseenter", event);
      }
    };
    const onMouseLeave = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit("mouseleave", event);
      }
    };
    const onInternalKeyDown = (e) => {
      emit("keydown", e);
      if (e.which === KeyCode.ENTER) {
        const info = getEventInfo(e);
        emit("click", e);
        onItemClick(info);
      }
    };
    const onInternalFocus = (e) => {
      changeActiveKeys(keysPath.value);
      emit("focus", e);
    };
    const renderItemChildren = (icon, children) => {
      const wrapNode = createVNode("span", {
        "class": `${prefixCls.value}-title-content`
      }, [children]);
      if (!icon || isValidElement(children) && children.type === "span") {
        if (children && inlineCollapsed.value && firstLevel && typeof children === "string") {
          return createVNode("div", {
            "class": `${prefixCls.value}-inline-collapsed-noicon`
          }, [children.charAt(0)]);
        }
      }
      return wrapNode;
    };
    const directionStyle = useDirectionStyle(computed(() => keysPath.value.length));
    return () => {
      var _a, _b, _c, _d, _e;
      if (isMeasure)
        return null;
      const title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      const children = flattenChildren((_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots));
      const childrenLength = children.length;
      let tooltipTitle = title;
      if (typeof title === "undefined") {
        tooltipTitle = firstLevel && childrenLength ? children : "";
      } else if (title === false) {
        tooltipTitle = "";
      }
      const tooltipProps = {
        title: tooltipTitle
      };
      if (!siderCollapsed.value && !inlineCollapsed.value) {
        tooltipProps.title = null;
        tooltipProps.open = false;
      }
      const optionRoleProps = {};
      if (props.role === "option") {
        optionRoleProps["aria-selected"] = selected.value;
      }
      const icon = (_d = props.icon) !== null && _d !== void 0 ? _d : (_e = slots.icon) === null || _e === void 0 ? void 0 : _e.call(slots, props);
      return createVNode(Tooltip, _objectSpread$1(_objectSpread$1({}, tooltipProps), {}, {
        "placement": rtl.value ? "left" : "right",
        "overlayClassName": `${prefixCls.value}-inline-collapsed-tooltip`
      }), {
        default: () => [createVNode(Overflow.Item, _objectSpread$1(_objectSpread$1(_objectSpread$1({
          "component": "li"
        }, attrs), {}, {
          "id": props.id,
          "style": _extends(_extends({}, attrs.style || {}), directionStyle.value),
          "class": [classNames2.value, {
            [`${attrs.class}`]: !!attrs.class,
            [`${prefixCls.value}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1
          }],
          "role": props.role || "menuitem",
          "tabindex": props.disabled ? null : -1,
          "data-menu-id": key,
          "aria-disabled": props.disabled
        }, optionRoleProps), {}, {
          "onMouseenter": onMouseEnter,
          "onMouseleave": onMouseLeave,
          "onClick": onInternalClick,
          "onKeydown": onInternalKeyDown,
          "onFocus": onInternalFocus,
          "title": typeof title === "string" ? title : void 0
        }), {
          default: () => [cloneElement(typeof icon === "function" ? icon(props.originItemValue) : icon, {
            class: `${prefixCls.value}-item-icon`
          }, false), renderItemChildren(icon, children)]
        })]
      });
    };
  }
});
const autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
const placements = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
const placementsRtl = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
const popupPlacementMap = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
const PopupTrigger = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PopupTrigger",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    mode: String,
    visible: Boolean,
    // popup: React.ReactNode;
    popupClassName: String,
    popupOffset: Array,
    disabled: Boolean,
    onVisibleChange: Function
  },
  slots: Object,
  emits: ["visibleChange"],
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const innerVisible = shallowRef(false);
    const {
      getPopupContainer,
      rtl,
      subMenuOpenDelay,
      subMenuCloseDelay,
      builtinPlacements,
      triggerSubMenuAction,
      forceSubMenuRender,
      motion,
      defaultMotions,
      rootClassName
    } = useInjectMenu();
    const forceRender = useInjectForceRender();
    const placement = computed(() => rtl.value ? _extends(_extends({}, placementsRtl), builtinPlacements.value) : _extends(_extends({}, placements), builtinPlacements.value));
    const popupPlacement = computed(() => popupPlacementMap[props.mode]);
    const visibleRef = shallowRef();
    watch(() => props.visible, (visible) => {
      wrapperRaf.cancel(visibleRef.value);
      visibleRef.value = wrapperRaf(() => {
        innerVisible.value = visible;
      });
    }, {
      immediate: true
    });
    const onVisibleChange = (visible) => {
      emit("visibleChange", visible);
    };
    const mergedMotion = computed(() => {
      var _a, _b;
      const m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[props.mode]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      const res = typeof m === "function" ? m() : m;
      return res ? getTransitionProps(res.name, {
        css: true
      }) : void 0;
    });
    return () => {
      const {
        prefixCls,
        popupClassName,
        mode,
        popupOffset,
        disabled
      } = props;
      return createVNode(Trigger, {
        "prefixCls": prefixCls,
        "popupClassName": classNames(`${prefixCls}-popup`, {
          [`${prefixCls}-rtl`]: rtl.value
        }, popupClassName, rootClassName.value),
        "stretch": mode === "horizontal" ? "minWidth" : null,
        "getPopupContainer": getPopupContainer.value,
        "builtinPlacements": placement.value,
        "popupPlacement": popupPlacement.value,
        "popupVisible": innerVisible.value,
        "popupAlign": popupOffset && {
          offset: popupOffset
        },
        "action": disabled ? [] : [triggerSubMenuAction.value],
        "mouseEnterDelay": subMenuOpenDelay.value,
        "mouseLeaveDelay": subMenuCloseDelay.value,
        "onPopupVisibleChange": onVisibleChange,
        "forceRender": forceRender || forceSubMenuRender.value,
        "popupAnimation": mergedMotion.value
      }, {
        popup: slots.popup,
        default: slots.default
      });
    };
  }
});
const InternalSubMenuList = (_props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  var _a;
  const {
    prefixCls,
    mode
  } = useInjectMenu();
  return createVNode("ul", _objectSpread$1(_objectSpread$1({}, attrs), {}, {
    "class": classNames(prefixCls.value, `${prefixCls.value}-sub`, `${prefixCls.value}-${mode.value === "inline" ? "inline" : "vertical"}`),
    "data-menu-list": true
  }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
InternalSubMenuList.displayName = "SubMenuList";
const InlineSubMenuList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "InlineSubMenuList",
  inheritAttrs: false,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const fixedMode = computed(() => "inline");
    const {
      motion,
      mode,
      defaultMotions
    } = useInjectMenu();
    const sameModeRef = computed(() => mode.value === fixedMode.value);
    const destroy = ref(!sameModeRef.value);
    const mergedOpen = computed(() => sameModeRef.value ? props.open : false);
    watch(mode, () => {
      if (sameModeRef.value) {
        destroy.value = false;
      }
    }, {
      flush: "post"
    });
    const mergedMotion = computed(() => {
      var _a, _b;
      const m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[fixedMode.value]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      const res = typeof m === "function" ? m() : m;
      return _extends(_extends({}, res), {
        appear: props.keyPath.length <= 1
      });
    });
    return () => {
      var _a;
      if (destroy.value) {
        return null;
      }
      return createVNode(MenuContextProvider, {
        "mode": fixedMode.value
      }, {
        default: () => [createVNode(Transition, mergedMotion.value, {
          default: () => [withDirectives(createVNode(InternalSubMenuList, {
            "id": props.id
          }, {
            default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
          }), [[vShow, mergedOpen.value]])]
        })]
      });
    };
  }
});
let indexGuid = 0;
const subMenuProps = () => ({
  icon: PropTypes.any,
  title: PropTypes.any,
  disabled: Boolean,
  level: Number,
  popupClassName: String,
  popupOffset: Array,
  internalPopupClose: Boolean,
  eventKey: String,
  expandIcon: Function,
  theme: String,
  onMouseenter: Function,
  onMouseleave: Function,
  onTitleClick: Function,
  // Internal user prop
  originItemValue: objectType()
});
const SubMenu = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ASubMenu",
  inheritAttrs: false,
  props: subMenuProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    var _a, _b;
    useProvideFirstLevel(false);
    const isMeasure = useMeasure();
    const instance = getCurrentInstance();
    const vnodeKey = typeof instance.vnode.key === "symbol" ? String(instance.vnode.key) : instance.vnode.key;
    devWarning(typeof instance.vnode.key !== "symbol", "SubMenu", `SubMenu \`:key="${String(vnodeKey)}"\` not support Symbol type`);
    const key = isValid(vnodeKey) ? vnodeKey : `sub_menu_${++indexGuid}_$$_not_set_key`;
    const eventKey = (_a = props.eventKey) !== null && _a !== void 0 ? _a : isValid(vnodeKey) ? `sub_menu_${++indexGuid}_$$_${vnodeKey}` : key;
    const {
      parentEventKeys,
      parentInfo,
      parentKeys
    } = useInjectKeyPath();
    const keysPath = computed(() => [...parentKeys.value, key]);
    const childrenEventKeys = shallowRef([]);
    const menuInfo = {
      eventKey,
      key,
      parentEventKeys,
      childrenEventKeys,
      parentKeys
    };
    (_b = parentInfo.childrenEventKeys) === null || _b === void 0 ? void 0 : _b.value.push(eventKey);
    useProvideKeyPath$1(eventKey, key, menuInfo);
    const {
      prefixCls,
      activeKeys,
      disabled: contextDisabled,
      changeActiveKeys,
      mode,
      inlineCollapsed,
      openKeys,
      overflowDisabled,
      onOpenChange,
      registerMenuInfo,
      unRegisterMenuInfo,
      selectedSubMenuKeys,
      expandIcon: menuExpandIcon,
      theme
    } = useInjectMenu();
    const hasKey = vnodeKey !== void 0 && vnodeKey !== null;
    const forceRender = !isMeasure && (useInjectForceRender() || !hasKey);
    useProvideForceRender(forceRender);
    if (isMeasure && hasKey || !isMeasure && !hasKey || forceRender) {
      registerMenuInfo(eventKey, menuInfo);
    }
    const subMenuPrefixCls = computed(() => `${prefixCls.value}-submenu`);
    const mergedDisabled = computed(() => contextDisabled.value || props.disabled);
    const elementRef = shallowRef();
    const popupRef = shallowRef();
    const originOpen = computed(() => openKeys.value.includes(key));
    const open = computed(() => !overflowDisabled.value && originOpen.value);
    const childrenSelected = computed(() => {
      return selectedSubMenuKeys.value.includes(key);
    });
    const isActive = shallowRef(false);
    watch(activeKeys, () => {
      isActive.value = !!activeKeys.value.find((val) => val === key);
    }, {
      immediate: true
    });
    const onInternalTitleClick = (e) => {
      if (mergedDisabled.value) {
        return;
      }
      emit("titleClick", e, key);
      if (mode.value === "inline") {
        onOpenChange(key, !originOpen.value);
      }
    };
    const onMouseEnter = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit("mouseenter", event);
      }
    };
    const onMouseLeave = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit("mouseleave", event);
      }
    };
    const directionStyle = useDirectionStyle(computed(() => keysPath.value.length));
    const onPopupVisibleChange = (newVisible) => {
      if (mode.value !== "inline") {
        onOpenChange(key, newVisible);
      }
    };
    const onInternalFocus = () => {
      changeActiveKeys(keysPath.value);
    };
    const popupId = eventKey && `${eventKey}-popup`;
    const popupClassName = computed(() => classNames(prefixCls.value, `${prefixCls.value}-${props.theme || theme.value}`, props.popupClassName));
    const renderTitle = (title, icon) => {
      if (!icon) {
        return inlineCollapsed.value && !parentKeys.value.length && title && typeof title === "string" ? createVNode("div", {
          "class": `${prefixCls.value}-inline-collapsed-noicon`
        }, [title.charAt(0)]) : createVNode("span", {
          "class": `${prefixCls.value}-title-content`
        }, [title]);
      }
      const titleIsSpan = isValidElement(title) && title.type === "span";
      return createVNode(Fragment, null, [cloneElement(typeof icon === "function" ? icon(props.originItemValue) : icon, {
        class: `${prefixCls.value}-item-icon`
      }, false), titleIsSpan ? title : createVNode("span", {
        "class": `${prefixCls.value}-title-content`
      }, [title])]);
    };
    const triggerModeRef = computed(() => {
      return mode.value !== "inline" && keysPath.value.length > 1 ? "vertical" : mode.value;
    });
    const renderMode = computed(() => mode.value === "horizontal" ? "vertical" : mode.value);
    const subMenuTriggerModeRef = computed(() => triggerModeRef.value === "horizontal" ? "vertical" : triggerModeRef.value);
    const baseTitleNode = () => {
      var _a2, _b2;
      const subMenuPrefixClsValue = subMenuPrefixCls.value;
      const icon = (_a2 = props.icon) !== null && _a2 !== void 0 ? _a2 : (_b2 = slots.icon) === null || _b2 === void 0 ? void 0 : _b2.call(slots, props);
      const expandIcon = props.expandIcon || slots.expandIcon || menuExpandIcon.value;
      const title = renderTitle(getPropsSlot(slots, props, "title"), icon);
      return createVNode("div", {
        "style": directionStyle.value,
        "class": `${subMenuPrefixClsValue}-title`,
        "tabindex": mergedDisabled.value ? null : -1,
        "ref": elementRef,
        "title": typeof title === "string" ? title : null,
        "data-menu-id": key,
        "aria-expanded": open.value,
        "aria-haspopup": true,
        "aria-controls": popupId,
        "aria-disabled": mergedDisabled.value,
        "onClick": onInternalTitleClick,
        "onFocus": onInternalFocus
      }, [title, mode.value !== "horizontal" && expandIcon ? expandIcon(_extends(_extends({}, props), {
        isOpen: open.value
      })) : createVNode("i", {
        "class": `${subMenuPrefixClsValue}-arrow`
      }, null)]);
    };
    return () => {
      var _a2;
      if (isMeasure) {
        if (!hasKey) {
          return null;
        }
        return (_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
      }
      const subMenuPrefixClsValue = subMenuPrefixCls.value;
      let titleNode = () => null;
      if (!overflowDisabled.value && mode.value !== "inline") {
        const popupOffset = mode.value === "horizontal" ? [0, 8] : [10, 0];
        titleNode = () => createVNode(PopupTrigger, {
          "mode": triggerModeRef.value,
          "prefixCls": subMenuPrefixClsValue,
          "visible": !props.internalPopupClose && open.value,
          "popupClassName": popupClassName.value,
          "popupOffset": props.popupOffset || popupOffset,
          "disabled": mergedDisabled.value,
          "onVisibleChange": onPopupVisibleChange
        }, {
          default: () => [baseTitleNode()],
          popup: () => createVNode(MenuContextProvider, {
            "mode": subMenuTriggerModeRef.value
          }, {
            default: () => [createVNode(InternalSubMenuList, {
              "id": popupId,
              "ref": popupRef
            }, {
              default: slots.default
            })]
          })
        });
      } else {
        titleNode = () => createVNode(PopupTrigger, null, {
          default: baseTitleNode
        });
      }
      return createVNode(MenuContextProvider, {
        "mode": renderMode.value
      }, {
        default: () => [createVNode(Overflow.Item, _objectSpread$1(_objectSpread$1({
          "component": "li"
        }, attrs), {}, {
          "role": "none",
          "class": classNames(subMenuPrefixClsValue, `${subMenuPrefixClsValue}-${mode.value}`, attrs.class, {
            [`${subMenuPrefixClsValue}-open`]: open.value,
            [`${subMenuPrefixClsValue}-active`]: isActive.value,
            [`${subMenuPrefixClsValue}-selected`]: childrenSelected.value,
            [`${subMenuPrefixClsValue}-disabled`]: mergedDisabled.value
          }),
          "onMouseenter": onMouseEnter,
          "onMouseleave": onMouseLeave,
          "data-submenu-id": key
        }), {
          default: () => {
            return createVNode(Fragment, null, [titleNode(), !overflowDisabled.value && createVNode(InlineSubMenuList, {
              "id": popupId,
              "open": open.value,
              "keyPath": keysPath.value
            }, {
              default: slots.default
            })]);
          }
        })]
      });
    };
  }
});
function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }
  const originClass = node.className;
  return ` ${originClass} `.indexOf(` ${className} `) > -1;
}
function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    if (!hasClass(node, className)) {
      node.className = `${node.className} ${className}`;
    }
  }
}
function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    if (hasClass(node, className)) {
      const originClass = node.className;
      node.className = ` ${originClass} `.replace(` ${className} `, " ");
    }
  }
}
const collapseMotion = function() {
  let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse";
  let appear = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return {
    name,
    appear,
    css: true,
    onBeforeEnter: (node) => {
      node.style.height = "0px";
      node.style.opacity = "0";
      addClass(node, name);
    },
    onEnter: (node) => {
      nextTick(() => {
        node.style.height = `${node.scrollHeight}px`;
        node.style.opacity = "1";
      });
    },
    onAfterEnter: (node) => {
      if (node) {
        removeClass(node, name);
        node.style.height = null;
        node.style.opacity = null;
      }
    },
    onBeforeLeave: (node) => {
      addClass(node, name);
      node.style.height = `${node.offsetHeight}px`;
      node.style.opacity = null;
    },
    onLeave: (node) => {
      setTimeout(() => {
        node.style.height = "0px";
        node.style.opacity = "0";
      });
    },
    onAfterLeave: (node) => {
      if (node) {
        removeClass(node, name);
        if (node.style) {
          node.style.height = null;
          node.style.opacity = null;
        }
      }
    }
  };
};
const menuItemGroupProps = () => ({
  title: PropTypes.any,
  // Internal user prop
  originItemValue: objectType()
});
const ItemGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItemGroup",
  inheritAttrs: false,
  props: menuItemGroupProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls
    } = useInjectMenu();
    const groupPrefixCls = computed(() => `${prefixCls.value}-item-group`);
    const isMeasure = useMeasure();
    return () => {
      var _a, _b;
      if (isMeasure)
        return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      return createVNode("li", _objectSpread$1(_objectSpread$1({}, attrs), {}, {
        "onClick": (e) => e.stopPropagation(),
        "class": groupPrefixCls.value
      }), [createVNode("div", {
        "title": typeof props.title === "string" ? props.title : void 0,
        "class": `${groupPrefixCls.value}-title`
      }, [getPropsSlot(slots, props, "title")]), createVNode("ul", {
        "class": `${groupPrefixCls.value}-list`
      }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)])]);
    };
  }
});
const menuDividerProps = () => ({
  prefixCls: String,
  dashed: Boolean
});
const Divider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuDivider",
  props: menuDividerProps(),
  setup(props) {
    const {
      prefixCls
    } = useInjectMenu();
    const cls = computed(() => {
      return {
        [`${prefixCls.value}-item-divider`]: true,
        [`${prefixCls.value}-item-divider-dashed`]: !!props.dashed
      };
    });
    return () => {
      return createVNode("li", {
        "class": cls.value
      }, null);
    };
  }
});
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
function convertItemsToNodes(list, store, parentMenuInfo) {
  return (list || []).map((opt, index2) => {
    if (opt && typeof opt === "object") {
      const _a = opt, {
        label,
        children,
        key,
        type
      } = _a, restProps = __rest$1(_a, ["label", "children", "key", "type"]);
      const mergedKey = key !== null && key !== void 0 ? key : `tmp-${index2}`;
      const parentKeys = parentMenuInfo ? parentMenuInfo.parentKeys.slice() : [];
      const childrenEventKeys = [];
      const menuInfo = {
        eventKey: mergedKey,
        key: mergedKey,
        parentEventKeys: ref(parentKeys),
        parentKeys: ref(parentKeys),
        childrenEventKeys: ref(childrenEventKeys),
        isLeaf: false
      };
      if (children || type === "group") {
        if (type === "group") {
          const childrenNodes2 = convertItemsToNodes(children, store, parentMenuInfo);
          return createVNode(ItemGroup, _objectSpread$1(_objectSpread$1({
            "key": mergedKey
          }, restProps), {}, {
            "title": label,
            "originItemValue": opt
          }), {
            default: () => [childrenNodes2]
          });
        }
        store.set(mergedKey, menuInfo);
        if (parentMenuInfo) {
          parentMenuInfo.childrenEventKeys.push(mergedKey);
        }
        const childrenNodes = convertItemsToNodes(children, store, {
          childrenEventKeys,
          parentKeys: [].concat(parentKeys, mergedKey)
        });
        return createVNode(SubMenu, _objectSpread$1(_objectSpread$1({
          "key": mergedKey
        }, restProps), {}, {
          "title": label,
          "originItemValue": opt
        }), {
          default: () => [childrenNodes]
        });
      }
      if (type === "divider") {
        return createVNode(Divider, _objectSpread$1({
          "key": mergedKey
        }, restProps), null);
      }
      menuInfo.isLeaf = true;
      store.set(mergedKey, menuInfo);
      return createVNode(MenuItem, _objectSpread$1(_objectSpread$1({
        "key": mergedKey
      }, restProps), {}, {
        "originItemValue": opt
      }), {
        default: () => [label]
      });
    }
    return null;
  }).filter((opt) => opt);
}
function useItems(props) {
  const itemsNodes = shallowRef([]);
  const hasItmes = shallowRef(false);
  const store = shallowRef(/* @__PURE__ */ new Map());
  watch(() => props.items, () => {
    const newStore = /* @__PURE__ */ new Map();
    hasItmes.value = false;
    if (props.items) {
      hasItmes.value = true;
      itemsNodes.value = convertItemsToNodes(props.items, newStore);
    } else {
      itemsNodes.value = void 0;
    }
    store.value = newStore;
  }, {
    immediate: true,
    deep: true
  });
  return {
    itemsNodes,
    store,
    hasItmes
  };
}
const getHorizontalStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    menuHorizontalHeight,
    colorSplit,
    lineWidth,
    lineType,
    menuItemPaddingInline
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      lineHeight: `${menuHorizontalHeight}px`,
      border: 0,
      borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
      boxShadow: "none",
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${componentCls}-item, ${componentCls}-submenu`]: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        paddingInline: menuItemPaddingInline
      },
      [`> ${componentCls}-item:hover,
        > ${componentCls}-item-active,
        > ${componentCls}-submenu ${componentCls}-submenu-title:hover`]: {
        backgroundColor: "transparent"
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`].join(",")
      },
      // ===================== Sub Menu =====================
      [`${componentCls}-submenu-arrow`]: {
        display: "none"
      }
    }
  };
};
const getRTLStyle = (_ref) => {
  let {
    componentCls,
    menuArrowOffset
  } = _ref;
  return {
    [`${componentCls}-rtl`]: {
      direction: "rtl"
    },
    [`${componentCls}-submenu-rtl`]: {
      transformOrigin: "100% 0"
    },
    // Vertical Arrow
    [`${componentCls}-rtl${componentCls}-vertical,
    ${componentCls}-submenu-rtl ${componentCls}-vertical`]: {
      [`${componentCls}-submenu-arrow`]: {
        "&::before": {
          transform: `rotate(-45deg) translateY(-${menuArrowOffset})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${menuArrowOffset})`
        }
      }
    }
  };
};
const accessibilityFocus = (token) => _extends({}, genFocusOutline(token));
const getThemeStyle = (token, themeSuffix) => {
  const {
    componentCls,
    colorItemText,
    colorItemTextSelected,
    colorGroupTitle,
    colorItemBg,
    colorSubItemBg,
    colorItemBgSelected,
    colorActiveBarHeight,
    colorActiveBarWidth,
    colorActiveBarBorderSize,
    motionDurationSlow,
    motionEaseInOut,
    motionEaseOut,
    menuItemPaddingInline,
    motionDurationMid,
    colorItemTextHover,
    lineType,
    colorSplit,
    // Disabled
    colorItemTextDisabled,
    // Danger
    colorDangerItemText,
    colorDangerItemTextHover,
    colorDangerItemTextSelected,
    colorDangerItemBgActive,
    colorDangerItemBgSelected,
    colorItemBgHover,
    menuSubMenuBg,
    // Horizontal
    colorItemTextSelectedHorizontal,
    colorItemBgSelectedHorizontal
  } = token;
  return {
    [`${componentCls}-${themeSuffix}`]: {
      color: colorItemText,
      background: colorItemBg,
      [`&${componentCls}-root:focus-visible`]: _extends({}, accessibilityFocus(token)),
      // ======================== Item ========================
      [`${componentCls}-item-group-title`]: {
        color: colorGroupTitle
      },
      [`${componentCls}-submenu-selected`]: {
        [`> ${componentCls}-submenu-title`]: {
          color: colorItemTextSelected
        }
      },
      // Disabled
      [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
        color: `${colorItemTextDisabled} !important`
      },
      // Hover
      [`${componentCls}-item:hover, ${componentCls}-submenu-title:hover`]: {
        [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
          color: colorItemTextHover
        }
      },
      [`&:not(${componentCls}-horizontal)`]: {
        [`${componentCls}-item:not(${componentCls}-item-selected)`]: {
          "&:hover": {
            backgroundColor: colorItemBgHover
          },
          "&:active": {
            backgroundColor: colorItemBgSelected
          }
        },
        [`${componentCls}-submenu-title`]: {
          "&:hover": {
            backgroundColor: colorItemBgHover
          },
          "&:active": {
            backgroundColor: colorItemBgSelected
          }
        }
      },
      // Danger - only Item has
      [`${componentCls}-item-danger`]: {
        color: colorDangerItemText,
        [`&${componentCls}-item:hover`]: {
          [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
            color: colorDangerItemTextHover
          }
        },
        [`&${componentCls}-item:active`]: {
          background: colorDangerItemBgActive
        }
      },
      [`${componentCls}-item a`]: {
        "&, &:hover": {
          color: "inherit"
        }
      },
      [`${componentCls}-item-selected`]: {
        color: colorItemTextSelected,
        // Danger
        [`&${componentCls}-item-danger`]: {
          color: colorDangerItemTextSelected
        },
        [`a, a:hover`]: {
          color: "inherit"
        }
      },
      [`& ${componentCls}-item-selected`]: {
        backgroundColor: colorItemBgSelected,
        // Danger
        [`&${componentCls}-item-danger`]: {
          backgroundColor: colorDangerItemBgSelected
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        [`&:not(${componentCls}-item-disabled):focus-visible`]: _extends({}, accessibilityFocus(token))
      },
      [`&${componentCls}-submenu > ${componentCls}`]: {
        backgroundColor: menuSubMenuBg
      },
      [`&${componentCls}-popup > ${componentCls}`]: {
        backgroundColor: colorItemBg
      },
      // ====================== Horizontal ======================
      [`&${componentCls}-horizontal`]: _extends(_extends({}, themeSuffix === "dark" ? {
        borderBottom: 0
      } : {}), {
        [`> ${componentCls}-item, > ${componentCls}-submenu`]: {
          top: colorActiveBarBorderSize,
          marginTop: -colorActiveBarBorderSize,
          marginBottom: 0,
          borderRadius: 0,
          "&::after": {
            position: "absolute",
            insetInline: menuItemPaddingInline,
            bottom: 0,
            borderBottom: `${colorActiveBarHeight}px solid transparent`,
            transition: `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            content: '""'
          },
          [`&:hover, &-active, &-open`]: {
            "&::after": {
              borderBottomWidth: colorActiveBarHeight,
              borderBottomColor: colorItemTextSelectedHorizontal
            }
          },
          [`&-selected`]: {
            color: colorItemTextSelectedHorizontal,
            backgroundColor: colorItemBgSelectedHorizontal,
            "&::after": {
              borderBottomWidth: colorActiveBarHeight,
              borderBottomColor: colorItemTextSelectedHorizontal
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${componentCls}-root`]: {
        [`&${componentCls}-inline, &${componentCls}-vertical`]: {
          borderInlineEnd: `${colorActiveBarBorderSize}px ${lineType} ${colorSplit}`
        }
      },
      // ======================== Inline ========================
      [`&${componentCls}-inline`]: {
        // Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          background: colorSubItemBg
        },
        // Item
        [`${componentCls}-item, ${componentCls}-submenu-title`]: colorActiveBarBorderSize && colorActiveBarWidth ? {
          width: `calc(100% + ${colorActiveBarBorderSize}px)`
        } : {},
        [`${componentCls}-item`]: {
          position: "relative",
          "&::after": {
            position: "absolute",
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${colorActiveBarWidth}px solid ${colorItemTextSelected}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${motionDurationMid} ${motionEaseOut}`, `opacity ${motionDurationMid} ${motionEaseOut}`].join(","),
            content: '""'
          },
          // Danger
          [`&${componentCls}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: colorDangerItemTextSelected
            }
          }
        },
        [`${componentCls}-selected, ${componentCls}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [`transform ${motionDurationMid} ${motionEaseInOut}`, `opacity ${motionDurationMid} ${motionEaseInOut}`].join(",")
          }
        }
      }
    }
  };
};
const getVerticalInlineStyle = (token) => {
  const {
    componentCls,
    menuItemHeight,
    itemMarginInline,
    padding,
    menuArrowSize,
    marginXS,
    marginXXS
  } = token;
  const paddingWithArrow = padding + menuArrowSize + marginXS;
  return {
    [`${componentCls}-item`]: {
      position: "relative"
    },
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      height: menuItemHeight,
      lineHeight: `${menuItemHeight}px`,
      paddingInline: padding,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: itemMarginInline,
      marginBlock: marginXXS,
      width: `calc(100% - ${itemMarginInline * 2}px)`
    },
    // disable margin collapsed
    [`${componentCls}-submenu`]: {
      paddingBottom: 0.02
    },
    [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
      height: menuItemHeight,
      lineHeight: `${menuItemHeight}px`
    },
    [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
      paddingInlineEnd: paddingWithArrow
    }
  };
};
const getVerticalStyle = (token) => {
  const {
    componentCls,
    iconCls,
    menuItemHeight,
    colorTextLightSolid,
    dropdownWidth,
    controlHeightLG,
    motionDurationMid,
    motionEaseOut,
    paddingXL,
    fontSizeSM,
    fontSizeLG,
    motionDurationSlow,
    paddingXS,
    boxShadowSecondary
  } = token;
  const inlineItemStyle = {
    height: menuItemHeight,
    lineHeight: `${menuItemHeight}px`,
    listStylePosition: "inside",
    listStyleType: "disc"
  };
  return [
    {
      [componentCls]: {
        [`&-inline, &-vertical`]: _extends({
          [`&${componentCls}-root`]: {
            boxShadow: "none"
          }
        }, getVerticalInlineStyle(token))
      },
      [`${componentCls}-submenu-popup`]: {
        [`${componentCls}-vertical`]: _extends(_extends({}, getVerticalInlineStyle(token)), {
          boxShadow: boxShadowSecondary
        })
      }
    },
    // Vertical only
    {
      [`${componentCls}-submenu-popup ${componentCls}-vertical${componentCls}-sub`]: {
        minWidth: dropdownWidth,
        maxHeight: `calc(100vh - ${controlHeightLG * 2.5}px)`,
        padding: "0",
        overflow: "hidden",
        borderInlineEnd: 0,
        // https://github.com/ant-design/ant-design/issues/22244
        // https://github.com/ant-design/ant-design/issues/26812
        "&:not([class*='-active'])": {
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    // Inline Only
    {
      [`${componentCls}-inline`]: {
        width: "100%",
        // Motion enhance for first level
        [`&${componentCls}-root`]: {
          [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            display: "flex",
            alignItems: "center",
            transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationMid} ${motionEaseOut}`].join(","),
            [`> ${componentCls}-title-content`]: {
              flex: "auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            "> *": {
              flex: "none"
            }
          }
        },
        // >>>>> Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          [`& > ${componentCls}-submenu > ${componentCls}-submenu-title`]: inlineItemStyle,
          [`& ${componentCls}-item-group-title`]: {
            paddingInlineStart: paddingXL
          }
        },
        // >>>>> Item
        [`${componentCls}-item`]: inlineItemStyle
      }
    },
    // Inline Collapse Only
    {
      [`${componentCls}-inline-collapsed`]: {
        width: menuItemHeight * 2,
        [`&${componentCls}-root`]: {
          [`${componentCls}-item, ${componentCls}-submenu ${componentCls}-submenu-title`]: {
            [`> ${componentCls}-inline-collapsed-noicon`]: {
              fontSize: fontSizeLG,
              textAlign: "center"
            }
          }
        },
        [`> ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-submenu > ${componentCls}-submenu-title,
          > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
          insetInlineStart: 0,
          paddingInline: `calc(50% - ${fontSizeSM}px)`,
          textOverflow: "clip",
          [`
            ${componentCls}-submenu-arrow,
            ${componentCls}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${componentCls}-item-icon, ${iconCls}`]: {
            margin: 0,
            fontSize: fontSizeLG,
            lineHeight: `${menuItemHeight}px`,
            "+ span": {
              display: "inline-block",
              opacity: 0
            }
          }
        },
        [`${componentCls}-item-icon, ${iconCls}`]: {
          display: "inline-block"
        },
        "&-tooltip": {
          pointerEvents: "none",
          [`${componentCls}-item-icon, ${iconCls}`]: {
            display: "none"
          },
          "a, a:hover": {
            color: colorTextLightSolid
          }
        },
        [`${componentCls}-item-group-title`]: _extends(_extends({}, textEllipsis), {
          paddingInline: paddingXS
        })
      }
    }
  ];
};
const genMenuItemStyle = (token) => {
  const {
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseOut,
    iconCls,
    controlHeightSM
  } = token;
  return {
    // >>>>> Item
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      position: "relative",
      display: "block",
      margin: 0,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(","),
      [`${componentCls}-item-icon, ${iconCls}`]: {
        minWidth: fontSize,
        fontSize,
        transition: [`font-size ${motionDurationMid} ${motionEaseOut}`, `margin ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow}`].join(","),
        "+ span": {
          marginInlineStart: controlHeightSM - fontSize,
          opacity: 1,
          transition: [`opacity ${motionDurationSlow} ${motionEaseInOut}`, `margin ${motionDurationSlow}`, `color ${motionDurationSlow}`].join(",")
        }
      },
      [`${componentCls}-item-icon`]: _extends({}, resetIcon()),
      [`&${componentCls}-item-only-child`]: {
        [`> ${iconCls}, > ${componentCls}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
      background: "none !important",
      cursor: "not-allowed",
      "&::after": {
        borderColor: "transparent !important"
      },
      a: {
        color: "inherit !important"
      },
      [`> ${componentCls}-submenu-title`]: {
        color: "inherit !important",
        cursor: "not-allowed"
      }
    }
  };
};
const genSubMenuArrowStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    motionEaseInOut,
    borderRadius,
    menuArrowSize,
    menuArrowOffset
  } = token;
  return {
    [`${componentCls}-submenu`]: {
      [`&-expand-icon, &-arrow`]: {
        position: "absolute",
        top: "50%",
        insetInlineEnd: token.margin,
        width: menuArrowSize,
        color: "currentcolor",
        transform: "translateY(-50%)",
        transition: `transform ${motionDurationSlow} ${motionEaseInOut}, opacity ${motionDurationSlow}`
      },
      "&-arrow": {
        // →
        "&::before, &::after": {
          position: "absolute",
          width: menuArrowSize * 0.6,
          height: menuArrowSize * 0.15,
          backgroundColor: "currentcolor",
          borderRadius,
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `transform ${motionDurationSlow} ${motionEaseInOut}`, `top ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow} ${motionEaseInOut}`].join(","),
          content: '""'
        },
        "&::before": {
          transform: `rotate(45deg) translateY(-${menuArrowOffset})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${menuArrowOffset})`
        }
      }
    }
  };
};
const getBaseStyle = (token) => {
  const {
    antCls,
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    lineHeight,
    paddingXS,
    padding,
    colorSplit,
    lineWidth,
    zIndexPopup,
    borderRadiusLG,
    radiusSubMenuItem,
    menuArrowSize,
    menuArrowOffset,
    lineType,
    menuPanelMaskInset
  } = token;
  return [
    // Misc
    {
      "": {
        [`${componentCls}`]: _extends(_extends({}, clearFix()), {
          // Hidden
          [`&-hidden`]: {
            display: "none"
          }
        })
      },
      [`${componentCls}-submenu-hidden`]: {
        display: "none"
      }
    },
    {
      [componentCls]: _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), clearFix()), {
        marginBottom: 0,
        paddingInlineStart: 0,
        // Override default ul/ol
        fontSize,
        lineHeight: 0,
        listStyle: "none",
        outline: "none",
        transition: `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`,
        [`ul, ol`]: {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        // Overflow ellipsis
        [`&-overflow`]: {
          display: "flex",
          [`${componentCls}-item`]: {
            flex: "none"
          }
        },
        [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
          borderRadius: token.radiusItem
        },
        [`${componentCls}-item-group-title`]: {
          padding: `${paddingXS}px ${padding}px`,
          fontSize,
          lineHeight,
          transition: `all ${motionDurationSlow}`
        },
        [`&-horizontal ${componentCls}-submenu`]: {
          transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
          transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationMid} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-submenu ${componentCls}-sub`]: {
          cursor: "initial",
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-title-content`]: {
          transition: `color ${motionDurationSlow}`
        },
        [`${componentCls}-item a`]: {
          "&::before": {
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            content: '""'
          }
        },
        // Removed a Badge related style seems it's safe
        // https://github.com/ant-design/ant-design/issues/19809
        // >>>>> Divider
        [`${componentCls}-item-divider`]: {
          overflow: "hidden",
          lineHeight: 0,
          borderColor: colorSplit,
          borderStyle: lineType,
          borderWidth: 0,
          borderTopWidth: lineWidth,
          marginBlock: lineWidth,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        }
      }), genMenuItemStyle(token)), {
        [`${componentCls}-item-group`]: {
          [`${componentCls}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${componentCls}-item, ${componentCls}-submenu-title`]: {
              paddingInline: `${fontSize * 2}px ${padding}px`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: zIndexPopup,
            background: "transparent",
            borderRadius: borderRadiusLG,
            boxShadow: "none",
            transformOrigin: "0 0",
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: `${menuPanelMaskInset}px 0 0`,
              zIndex: -1,
              width: "100%",
              height: "100%",
              opacity: 0,
              content: '""'
            }
          },
          // https://github.com/ant-design/ant-design/issues/13955
          "&-placement-rightTop::before": {
            top: 0,
            insetInlineStart: menuPanelMaskInset
          },
          [`> ${componentCls}`]: _extends(_extends(_extends({
            borderRadius: borderRadiusLG
          }, genMenuItemStyle(token)), genSubMenuArrowStyle(token)), {
            [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
              borderRadius: radiusSubMenuItem
            },
            [`${componentCls}-submenu-title::after`]: {
              transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
            }
          })
        }
      }), genSubMenuArrowStyle(token)), {
        [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${menuArrowOffset})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(-${menuArrowOffset})`
          }
        },
        [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]: {
          // ↑
          transform: `translateY(-${menuArrowSize * 0.2}px)`,
          "&::after": {
            transform: `rotate(-45deg) translateX(-${menuArrowOffset})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${menuArrowOffset})`
          }
        }
      })
    },
    // Integration with header element so menu items have the same height
    {
      [`${antCls}-layout-header`]: {
        [componentCls]: {
          lineHeight: "inherit"
        }
      }
    }
  ];
};
const useStyle$1 = (prefixCls, injectStyle) => {
  const useOriginHook = genComponentStyleHook("Menu", (token, _ref) => {
    let {
      overrideComponentToken
    } = _ref;
    if ((injectStyle === null || injectStyle === void 0 ? void 0 : injectStyle.value) === false) {
      return [];
    }
    const {
      colorBgElevated,
      colorPrimary,
      colorError,
      colorErrorHover,
      colorTextLightSolid
    } = token;
    const {
      controlHeightLG,
      fontSize
    } = token;
    const menuArrowSize = fontSize / 7 * 5;
    const menuToken = merge(token, {
      menuItemHeight: controlHeightLG,
      menuItemPaddingInline: token.margin,
      menuArrowSize,
      menuHorizontalHeight: controlHeightLG * 1.15,
      menuArrowOffset: `${menuArrowSize * 0.25}px`,
      menuPanelMaskInset: -7,
      menuSubMenuBg: colorBgElevated
    });
    const colorTextDark = new TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString();
    const menuDarkToken = merge(menuToken, {
      colorItemText: colorTextDark,
      colorItemTextHover: colorTextLightSolid,
      colorGroupTitle: colorTextDark,
      colorItemTextSelected: colorTextLightSolid,
      colorItemBg: "#001529",
      colorSubItemBg: "#000c17",
      colorItemBgActive: "transparent",
      colorItemBgSelected: colorPrimary,
      colorActiveBarWidth: 0,
      colorActiveBarHeight: 0,
      colorActiveBarBorderSize: 0,
      // Disabled
      colorItemTextDisabled: new TinyColor(colorTextLightSolid).setAlpha(0.25).toRgbString(),
      // Danger
      colorDangerItemText: colorError,
      colorDangerItemTextHover: colorErrorHover,
      colorDangerItemTextSelected: colorTextLightSolid,
      colorDangerItemBgActive: colorError,
      colorDangerItemBgSelected: colorError,
      menuSubMenuBg: "#001529",
      // Horizontal
      colorItemTextSelectedHorizontal: colorTextLightSolid,
      colorItemBgSelectedHorizontal: colorPrimary
    }, _extends({}, overrideComponentToken));
    return [
      // Basic
      getBaseStyle(menuToken),
      // Horizontal
      getHorizontalStyle(menuToken),
      // Vertical
      getVerticalStyle(menuToken),
      // Theme
      getThemeStyle(menuToken, "light"),
      getThemeStyle(menuDarkToken, "dark"),
      // RTL
      getRTLStyle(menuToken),
      // Motion
      genCollapseMotion(menuToken),
      initSlideMotion(menuToken, "slide-up"),
      initSlideMotion(menuToken, "slide-down"),
      initZoomMotion(menuToken, "zoom-big")
    ];
  }, (token) => {
    const {
      colorPrimary,
      colorError,
      colorTextDisabled,
      colorErrorBg,
      colorText,
      colorTextDescription,
      colorBgContainer,
      colorFillAlter,
      colorFillContent,
      lineWidth,
      lineWidthBold,
      controlItemBgActive,
      colorBgTextHover
    } = token;
    return {
      dropdownWidth: 160,
      zIndexPopup: token.zIndexPopupBase + 50,
      radiusItem: token.borderRadiusLG,
      radiusSubMenuItem: token.borderRadiusSM,
      colorItemText: colorText,
      colorItemTextHover: colorText,
      colorItemTextHoverHorizontal: colorPrimary,
      colorGroupTitle: colorTextDescription,
      colorItemTextSelected: colorPrimary,
      colorItemTextSelectedHorizontal: colorPrimary,
      colorItemBg: colorBgContainer,
      colorItemBgHover: colorBgTextHover,
      colorItemBgActive: colorFillContent,
      colorSubItemBg: colorFillAlter,
      colorItemBgSelected: controlItemBgActive,
      colorItemBgSelectedHorizontal: "transparent",
      colorActiveBarWidth: 0,
      colorActiveBarHeight: lineWidthBold,
      colorActiveBarBorderSize: lineWidth,
      // Disabled
      colorItemTextDisabled: colorTextDisabled,
      // Danger
      colorDangerItemText: colorError,
      colorDangerItemTextHover: colorError,
      colorDangerItemTextSelected: colorError,
      colorDangerItemBgActive: colorErrorBg,
      colorDangerItemBgSelected: colorErrorBg,
      itemMarginInline: token.marginXXS
    };
  });
  return useOriginHook(prefixCls);
};
const menuProps = () => ({
  id: String,
  prefixCls: String,
  // donot use items, now only support inner use
  items: Array,
  disabled: Boolean,
  inlineCollapsed: Boolean,
  disabledOverflow: Boolean,
  forceSubMenuRender: Boolean,
  openKeys: Array,
  selectedKeys: Array,
  activeKey: String,
  selectable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  tabindex: {
    type: [Number, String]
  },
  motion: Object,
  role: String,
  theme: {
    type: String,
    default: "light"
  },
  mode: {
    type: String,
    default: "vertical"
  },
  inlineIndent: {
    type: Number,
    default: 24
  },
  subMenuOpenDelay: {
    type: Number,
    default: 0
  },
  subMenuCloseDelay: {
    type: Number,
    default: 0.1
  },
  builtinPlacements: {
    type: Object
  },
  triggerSubMenuAction: {
    type: String,
    default: "hover"
  },
  getPopupContainer: Function,
  expandIcon: Function,
  onOpenChange: Function,
  onSelect: Function,
  onDeselect: Function,
  onClick: [Function, Array],
  onFocus: Function,
  onBlur: Function,
  onMousedown: Function,
  "onUpdate:openKeys": Function,
  "onUpdate:selectedKeys": Function,
  "onUpdate:activeKey": Function
});
const EMPTY_LIST = [];
const Menu = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenu",
  inheritAttrs: false,
  props: menuProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const {
      direction,
      getPrefixCls
    } = useConfigInject("menu", props);
    const override = useInjectOverride();
    const prefixCls = computed(() => {
      var _a;
      return getPrefixCls("menu", props.prefixCls || ((_a = override === null || override === void 0 ? void 0 : override.prefixCls) === null || _a === void 0 ? void 0 : _a.value));
    });
    const [wrapSSR, hashId] = useStyle$1(prefixCls, computed(() => {
      return !override;
    }));
    const store = shallowRef(/* @__PURE__ */ new Map());
    const siderCollapsed = inject(SiderCollapsedKey, ref(void 0));
    const inlineCollapsed = computed(() => {
      if (siderCollapsed.value !== void 0) {
        return siderCollapsed.value;
      }
      return props.inlineCollapsed;
    });
    const {
      itemsNodes
    } = useItems(props);
    const isMounted = shallowRef(false);
    watchEffect(() => {
      devWarning(!(props.inlineCollapsed === true && props.mode !== "inline"), "Menu", "`inlineCollapsed` should only be used when `mode` is inline.");
      devWarning(!(siderCollapsed.value !== void 0 && props.inlineCollapsed === true), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.");
    });
    const activeKeys = ref([]);
    const mergedSelectedKeys = ref([]);
    const keyMapStore = ref({});
    watch(store, () => {
      const newKeyMapStore = {};
      for (const menuInfo of store.value.values()) {
        newKeyMapStore[menuInfo.key] = menuInfo;
      }
      keyMapStore.value = newKeyMapStore;
    }, {
      flush: "post"
    });
    watchEffect(() => {
      if (props.activeKey !== void 0) {
        let keys = [];
        const menuInfo = props.activeKey ? keyMapStore.value[props.activeKey] : void 0;
        if (menuInfo && props.activeKey !== void 0) {
          keys = uniq([].concat(unref(menuInfo.parentKeys), props.activeKey));
        } else {
          keys = [];
        }
        if (!shallowequal(activeKeys.value, keys)) {
          activeKeys.value = keys;
        }
      }
    });
    watch(() => props.selectedKeys, (selectedKeys) => {
      if (selectedKeys) {
        mergedSelectedKeys.value = selectedKeys.slice();
      }
    }, {
      immediate: true,
      deep: true
    });
    const selectedSubMenuKeys = ref([]);
    watch([keyMapStore, mergedSelectedKeys], () => {
      let subMenuParentKeys = [];
      mergedSelectedKeys.value.forEach((key) => {
        const menuInfo = keyMapStore.value[key];
        if (menuInfo) {
          subMenuParentKeys = subMenuParentKeys.concat(unref(menuInfo.parentKeys));
        }
      });
      subMenuParentKeys = uniq(subMenuParentKeys);
      if (!shallowequal(selectedSubMenuKeys.value, subMenuParentKeys)) {
        selectedSubMenuKeys.value = subMenuParentKeys;
      }
    }, {
      immediate: true
    });
    const triggerSelection = (info) => {
      if (props.selectable) {
        const {
          key: targetKey
        } = info;
        const exist = mergedSelectedKeys.value.includes(targetKey);
        let newSelectedKeys;
        if (props.multiple) {
          if (exist) {
            newSelectedKeys = mergedSelectedKeys.value.filter((key) => key !== targetKey);
          } else {
            newSelectedKeys = [...mergedSelectedKeys.value, targetKey];
          }
        } else {
          newSelectedKeys = [targetKey];
        }
        const selectInfo = _extends(_extends({}, info), {
          selectedKeys: newSelectedKeys
        });
        if (!shallowequal(newSelectedKeys, mergedSelectedKeys.value)) {
          if (props.selectedKeys === void 0) {
            mergedSelectedKeys.value = newSelectedKeys;
          }
          emit("update:selectedKeys", newSelectedKeys);
          if (exist && props.multiple) {
            emit("deselect", selectInfo);
          } else {
            emit("select", selectInfo);
          }
        }
      }
      if (mergedMode.value !== "inline" && !props.multiple && mergedOpenKeys.value.length) {
        triggerOpenKeys(EMPTY_LIST);
      }
    };
    const mergedOpenKeys = ref([]);
    watch(() => props.openKeys, function() {
      let openKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mergedOpenKeys.value;
      if (!shallowequal(mergedOpenKeys.value, openKeys)) {
        mergedOpenKeys.value = openKeys.slice();
      }
    }, {
      immediate: true,
      deep: true
    });
    let timeout;
    const changeActiveKeys = (keys) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (props.activeKey === void 0) {
          activeKeys.value = keys;
        }
        emit("update:activeKey", keys[keys.length - 1]);
      });
    };
    const disabled = computed(() => !!props.disabled);
    const isRtl = computed(() => direction.value === "rtl");
    const mergedMode = ref("vertical");
    const mergedInlineCollapsed = shallowRef(false);
    watchEffect(() => {
      var _a;
      if ((props.mode === "inline" || props.mode === "vertical") && inlineCollapsed.value) {
        mergedMode.value = "vertical";
        mergedInlineCollapsed.value = inlineCollapsed.value;
      } else {
        mergedMode.value = props.mode;
        mergedInlineCollapsed.value = false;
      }
      if ((_a = override === null || override === void 0 ? void 0 : override.mode) === null || _a === void 0 ? void 0 : _a.value) {
        mergedMode.value = override.mode.value;
      }
    });
    const isInlineMode = computed(() => mergedMode.value === "inline");
    const triggerOpenKeys = (keys) => {
      mergedOpenKeys.value = keys;
      emit("update:openKeys", keys);
      emit("openChange", keys);
    };
    const inlineCacheOpenKeys = ref(mergedOpenKeys.value);
    const mountRef = shallowRef(false);
    watch(mergedOpenKeys, () => {
      if (isInlineMode.value) {
        inlineCacheOpenKeys.value = mergedOpenKeys.value;
      }
    }, {
      immediate: true
    });
    watch(isInlineMode, () => {
      if (!mountRef.value) {
        mountRef.value = true;
        return;
      }
      if (isInlineMode.value) {
        mergedOpenKeys.value = inlineCacheOpenKeys.value;
      } else {
        triggerOpenKeys(EMPTY_LIST);
      }
    }, {
      immediate: true
    });
    const className = computed(() => {
      return {
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-root`]: true,
        [`${prefixCls.value}-${mergedMode.value}`]: true,
        [`${prefixCls.value}-inline-collapsed`]: mergedInlineCollapsed.value,
        [`${prefixCls.value}-rtl`]: isRtl.value,
        [`${prefixCls.value}-${props.theme}`]: true
      };
    });
    const rootPrefixCls = computed(() => getPrefixCls());
    const defaultMotions = computed(() => ({
      horizontal: {
        name: `${rootPrefixCls.value}-slide-up`
      },
      inline: collapseMotion(`${rootPrefixCls.value}-motion-collapse`),
      other: {
        name: `${rootPrefixCls.value}-zoom-big`
      }
    }));
    useProvideFirstLevel(true);
    const getChildrenKeys = function() {
      let eventKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const keys = [];
      const storeValue = store.value;
      eventKeys.forEach((eventKey) => {
        const {
          key,
          childrenEventKeys
        } = storeValue.get(eventKey);
        keys.push(key, ...getChildrenKeys(unref(childrenEventKeys)));
      });
      return keys;
    };
    const onInternalClick = (info) => {
      var _a;
      emit("click", info);
      triggerSelection(info);
      (_a = override === null || override === void 0 ? void 0 : override.onClick) === null || _a === void 0 ? void 0 : _a.call(override);
    };
    const onInternalOpenChange = (key, open) => {
      var _a;
      const childrenEventKeys = ((_a = keyMapStore.value[key]) === null || _a === void 0 ? void 0 : _a.childrenEventKeys) || [];
      let newOpenKeys = mergedOpenKeys.value.filter((k) => k !== key);
      if (open) {
        newOpenKeys.push(key);
      } else if (mergedMode.value !== "inline") {
        const subPathKeys = getChildrenKeys(unref(childrenEventKeys));
        newOpenKeys = uniq(newOpenKeys.filter((k) => !subPathKeys.includes(k)));
      }
      if (!shallowequal(mergedOpenKeys, newOpenKeys)) {
        triggerOpenKeys(newOpenKeys);
      }
    };
    const registerMenuInfo = (key, info) => {
      store.value.set(key, info);
      store.value = new Map(store.value);
    };
    const unRegisterMenuInfo = (key) => {
      store.value.delete(key);
      store.value = new Map(store.value);
    };
    const lastVisibleIndex = ref(0);
    const expandIcon = computed(() => {
      var _a;
      return props.expandIcon || slots.expandIcon || ((_a = override === null || override === void 0 ? void 0 : override.expandIcon) === null || _a === void 0 ? void 0 : _a.value) ? (opt) => {
        let icon = props.expandIcon || slots.expandIcon;
        icon = typeof icon === "function" ? icon(opt) : icon;
        return cloneElement(icon, {
          class: `${prefixCls.value}-submenu-expand-icon`
        }, false);
      } : null;
    });
    useProvideMenu$1({
      prefixCls,
      activeKeys,
      openKeys: mergedOpenKeys,
      selectedKeys: mergedSelectedKeys,
      changeActiveKeys,
      disabled,
      rtl: isRtl,
      mode: mergedMode,
      inlineIndent: computed(() => props.inlineIndent),
      subMenuCloseDelay: computed(() => props.subMenuCloseDelay),
      subMenuOpenDelay: computed(() => props.subMenuOpenDelay),
      builtinPlacements: computed(() => props.builtinPlacements),
      triggerSubMenuAction: computed(() => props.triggerSubMenuAction),
      getPopupContainer: computed(() => props.getPopupContainer),
      inlineCollapsed: mergedInlineCollapsed,
      theme: computed(() => props.theme),
      siderCollapsed,
      defaultMotions: computed(() => isMounted.value ? defaultMotions.value : null),
      motion: computed(() => isMounted.value ? props.motion : null),
      overflowDisabled: shallowRef(void 0),
      onOpenChange: onInternalOpenChange,
      onItemClick: onInternalClick,
      registerMenuInfo,
      unRegisterMenuInfo,
      selectedSubMenuKeys,
      expandIcon,
      forceSubMenuRender: computed(() => props.forceSubMenuRender),
      rootClassName: hashId
    });
    const getChildrenList = () => {
      var _a;
      return itemsNodes.value || flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
    return () => {
      var _a;
      const childList = getChildrenList();
      const allVisible = lastVisibleIndex.value >= childList.length - 1 || mergedMode.value !== "horizontal" || props.disabledOverflow;
      const getWrapperList = (childList2) => {
        return mergedMode.value !== "horizontal" || props.disabledOverflow ? childList2 : (
          // Need wrap for overflow dropdown that do not response for open
          childList2.map((child, index2) => (
            // Always wrap provider to avoid sub node re-mount
            createVNode(MenuContextProvider, {
              "key": child.key,
              "overflowDisabled": index2 > lastVisibleIndex.value
            }, {
              default: () => child
            })
          ))
        );
      };
      const overflowedIndicator = ((_a = slots.overflowedIndicator) === null || _a === void 0 ? void 0 : _a.call(slots)) || createVNode(EllipsisOutlined, null, null);
      return wrapSSR(createVNode(Overflow, _objectSpread$1(_objectSpread$1({}, attrs), {}, {
        "onMousedown": props.onMousedown,
        "prefixCls": `${prefixCls.value}-overflow`,
        "component": "ul",
        "itemComponent": MenuItem,
        "class": [className.value, attrs.class, hashId.value],
        "role": "menu",
        "id": props.id,
        "data": getWrapperList(childList),
        "renderRawItem": (node) => node,
        "renderRawRest": (omitItems) => {
          const len = omitItems.length;
          const originOmitItems = len ? childList.slice(-len) : null;
          return createVNode(Fragment, null, [createVNode(SubMenu, {
            "eventKey": OVERFLOW_KEY,
            "key": OVERFLOW_KEY,
            "title": overflowedIndicator,
            "disabled": allVisible,
            "internalPopupClose": len === 0
          }, {
            default: () => originOmitItems
          }), createVNode(PathContext, null, {
            default: () => [createVNode(SubMenu, {
              "eventKey": OVERFLOW_KEY,
              "key": OVERFLOW_KEY,
              "title": overflowedIndicator,
              "disabled": allVisible,
              "internalPopupClose": len === 0
            }, {
              default: () => originOmitItems
            })]
          })]);
        },
        "maxCount": mergedMode.value !== "horizontal" || props.disabledOverflow ? Overflow.INVALIDATE : Overflow.RESPONSIVE,
        "ssr": "full",
        "data-menu-list": true,
        "onVisibleChange": (newLastIndex) => {
          lastVisibleIndex.value = newLastIndex;
        }
      }), {
        default: () => [createVNode(Teleport, {
          "to": "body"
        }, {
          default: () => [createVNode("div", {
            "style": {
              display: "none"
            },
            "aria-hidden": true
          }, [createVNode(PathContext, null, {
            default: () => [getWrapperList(getChildrenList())]
          })])]
        })]
      }));
    };
  }
});
Menu.install = function(app) {
  app.component(Menu.name, Menu);
  app.component(MenuItem.name, MenuItem);
  app.component(SubMenu.name, SubMenu);
  app.component(Divider.name, Divider);
  app.component(ItemGroup.name, ItemGroup);
  return app;
};
Menu.Item = MenuItem;
Menu.Divider = Divider;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
const genBreadcrumbStyle = (token) => {
  const {
    componentCls,
    iconCls
  } = token;
  return {
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      color: token.breadcrumbBaseColor,
      fontSize: token.breadcrumbFontSize,
      [iconCls]: {
        fontSize: token.breadcrumbIconFontSize
      },
      ol: {
        display: "flex",
        flexWrap: "wrap",
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      a: _extends({
        color: token.breadcrumbLinkColor,
        transition: `color ${token.motionDurationMid}`,
        padding: `0 ${token.paddingXXS}px`,
        borderRadius: token.borderRadiusSM,
        height: token.lineHeight * token.fontSize,
        display: "inline-block",
        marginInline: -token.marginXXS,
        "&:hover": {
          color: token.breadcrumbLinkColorHover,
          backgroundColor: token.colorBgTextHover
        }
      }, genFocusStyle(token)),
      [`li:last-child`]: {
        color: token.breadcrumbLastItemColor,
        [`& > ${componentCls}-separator`]: {
          display: "none"
        }
      },
      [`${componentCls}-separator`]: {
        marginInline: token.breadcrumbSeparatorMargin,
        color: token.breadcrumbSeparatorColor
      },
      [`${componentCls}-link`]: {
        [`
          > ${iconCls} + span,
          > ${iconCls} + a
        `]: {
          marginInlineStart: token.marginXXS
        }
      },
      [`${componentCls}-overlay-link`]: {
        borderRadius: token.borderRadiusSM,
        height: token.lineHeight * token.fontSize,
        display: "inline-block",
        padding: `0 ${token.paddingXXS}px`,
        marginInline: -token.marginXXS,
        [`> ${iconCls}`]: {
          marginInlineStart: token.marginXXS,
          fontSize: token.fontSizeIcon
        },
        "&:hover": {
          color: token.breadcrumbLinkColorHover,
          backgroundColor: token.colorBgTextHover,
          a: {
            color: token.breadcrumbLinkColorHover
          }
        },
        a: {
          "&:hover": {
            backgroundColor: "transparent"
          }
        }
      },
      // rtl style
      [`&${token.componentCls}-rtl`]: {
        direction: "rtl"
      }
    })
  };
};
const useStyle = genComponentStyleHook("Breadcrumb", (token) => {
  const BreadcrumbToken = merge(token, {
    breadcrumbBaseColor: token.colorTextDescription,
    breadcrumbFontSize: token.fontSize,
    breadcrumbIconFontSize: token.fontSize,
    breadcrumbLinkColor: token.colorTextDescription,
    breadcrumbLinkColorHover: token.colorText,
    breadcrumbLastItemColor: token.colorText,
    breadcrumbSeparatorMargin: token.marginXS,
    breadcrumbSeparatorColor: token.colorTextDescription
  });
  return [genBreadcrumbStyle(BreadcrumbToken)];
});
const breadcrumbProps = () => ({
  prefixCls: String,
  routes: {
    type: Array
  },
  params: PropTypes.any,
  separator: PropTypes.any,
  itemRender: {
    type: Function
  }
});
function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }
  const paramsKeys = Object.keys(params).join("|");
  const name = route.breadcrumbName.replace(new RegExp(`:(${paramsKeys})`, "g"), (replacement, key) => params[key] || replacement);
  return name;
}
function defaultItemRender(opt) {
  const {
    route,
    params,
    routes,
    paths
  } = opt;
  const isLastItem = routes.indexOf(route) === routes.length - 1;
  const name = getBreadcrumbName(route, params);
  return isLastItem ? createVNode("span", null, [name]) : createVNode("a", {
    "href": `#/${paths.join("/")}`
  }, [name]);
}
const Breadcrumb = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ABreadcrumb",
  inheritAttrs: false,
  props: breadcrumbProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("breadcrumb", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const getPath = (path, params) => {
      path = (path || "").replace(/^\//, "");
      Object.keys(params).forEach((key) => {
        path = path.replace(`:${key}`, params[key]);
      });
      return path;
    };
    const addChildPath = (paths, childPath, params) => {
      const originalPaths = [...paths];
      const path = getPath(childPath || "", params);
      if (path) {
        originalPaths.push(path);
      }
      return originalPaths;
    };
    const genForRoutes = (_ref2) => {
      let {
        routes = [],
        params = {},
        separator,
        itemRender = defaultItemRender
      } = _ref2;
      const paths = [];
      return routes.map((route) => {
        const path = getPath(route.path, params);
        if (path) {
          paths.push(path);
        }
        const tempPaths = [...paths];
        let overlay = null;
        if (route.children && route.children.length) {
          overlay = createVNode(Menu, {
            "items": route.children.map((child) => ({
              key: child.path || child.breadcrumbName,
              label: itemRender({
                route: child,
                params,
                routes,
                paths: addChildPath(tempPaths, child.path, params)
              })
            }))
          }, null);
        }
        const itemProps = {
          separator
        };
        if (overlay) {
          itemProps.overlay = overlay;
        }
        return createVNode(__nuxt_component_6, _objectSpread$1(_objectSpread$1({}, itemProps), {}, {
          "key": path || route.breadcrumbName
        }), {
          default: () => [itemRender({
            route,
            params,
            routes,
            paths: tempPaths
          })]
        });
      });
    };
    return () => {
      var _a;
      let crumbs;
      const {
        routes,
        params = {}
      } = props;
      const children = flattenChildren(getPropsSlot(slots, props));
      const separator = (_a = getPropsSlot(slots, props, "separator")) !== null && _a !== void 0 ? _a : "/";
      const itemRender = props.itemRender || slots.itemRender || defaultItemRender;
      if (routes && routes.length > 0) {
        crumbs = genForRoutes({
          routes,
          params,
          separator,
          itemRender
        });
      } else if (children.length) {
        crumbs = children.map((element, index2) => {
          warning(typeof element.type === "object" && (element.type.__ANT_BREADCRUMB_ITEM || element.type.__ANT_BREADCRUMB_SEPARATOR));
          return cloneVNode(element, {
            separator,
            key: index2
          });
        });
      }
      const breadcrumbClassName = {
        [prefixCls.value]: true,
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [`${attrs.class}`]: !!attrs.class,
        [hashId.value]: true
      };
      return wrapSSR(createVNode("nav", _objectSpread$1(_objectSpread$1({}, attrs), {}, {
        "class": breadcrumbClassName
      }), [createVNode("ol", null, [crumbs])]));
    };
  }
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
const breadcrumbSeparatorProps = () => ({
  prefixCls: String
});
const BreadcrumbSeparator = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ABreadcrumbSeparator",
  __ANT_BREADCRUMB_SEPARATOR: true,
  inheritAttrs: false,
  props: breadcrumbSeparatorProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls
    } = useConfigInject("breadcrumb", props);
    return () => {
      var _a;
      const {
        separator,
        class: className
      } = attrs, restAttrs = __rest(attrs, ["separator", "class"]);
      const children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      return createVNode("span", _objectSpread$1({
        "class": [`${prefixCls.value}-separator`, className]
      }, restAttrs), [children.length > 0 ? children : "/"]);
    };
  }
});
Breadcrumb.Item = __nuxt_component_6;
Breadcrumb.Separator = BreadcrumbSeparator;
Breadcrumb.install = function(app) {
  app.component(Breadcrumb.name, Breadcrumb);
  app.component(__nuxt_component_6.name, __nuxt_component_6);
  app.component(BreadcrumbSeparator.name, BreadcrumbSeparator);
  return app;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_a_layout = __nuxt_component_0;
  const _component_a_row = __nuxt_component_1;
  const _component_a_col = __nuxt_component_2;
  const _component_a_typography_title = Title;
  const _component_a_layout_content = LayoutContent;
  const _component_a_breadcrumb = Breadcrumb;
  const _component_a_breadcrumb_item = __nuxt_component_6;
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_a_popover = __nuxt_component_8;
  const _component_a_button = Button;
  const _component_DesktopOutlined = DesktopOutlined;
  const _component_WifiOutlined = WifiOutlined;
  const _component_CoffeeOutlined = CoffeeOutlined;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_a_layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="cover" data-v-11b94073${_scopeId}>`);
        _push2(ssrRenderComponent(_component_a_row, {
          justify: "center",
          style: { "padding-top": "116px", "padding-bottom": "62px", "text-align": "center", "justify-content": "center", "background-color": "transparent" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, { span: 20 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_a_typography_title, { class: "t1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`DANSAVANH NAM NGUM RESORT AND CASINO`);
                        } else {
                          return [
                            createTextVNode("DANSAVANH NAM NGUM RESORT AND CASINO")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_a_typography_title, { class: "t1" }, {
                        default: withCtx(() => [
                          createTextVNode("DANSAVANH NAM NGUM RESORT AND CASINO")
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
                createVNode(_component_a_col, { span: 20 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_typography_title, { class: "t1" }, {
                      default: withCtx(() => [
                        createTextVNode("DANSAVANH NAM NGUM RESORT AND CASINO")
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
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "cover" }, [
            createVNode(_component_a_row, {
              justify: "center",
              style: { "padding-top": "116px", "padding-bottom": "62px", "text-align": "center", "justify-content": "center", "background-color": "transparent" }
            }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 20 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_typography_title, { class: "t1" }, {
                      default: withCtx(() => [
                        createTextVNode("DANSAVANH NAM NGUM RESORT AND CASINO")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_a_layout_content, { style: { "padding-bottom": "20px" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-11b94073${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                span: 16,
                style: { "text-align": "center" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p style="${ssrRenderStyle({ "font-size": "19px", "font-weight": "300", "margin-top": "24px" })}" data-v-11b94073${_scopeId3}> Peak of Buffalo Mountain\uFF08Phou Khao Khouay\uFF09 facing the biggest freshwater lake in Laos, 60km from Vientiane. You will find varieties of excitement awaits you in this one of a kind hill top location with pampering spa services after a daylong of water activities; or even sumptuous dining experience at the lake side restaurants. If you are one that loves watching over a sky of glazing stars at night from your room or at our open air beer garden, you will find the clock clicks too fast. The thrill of excitement at our internationally rated casino is just a step away and you could be hitting a jackpot that makes you plan your next trip here in advance. </p>`);
                  } else {
                    return [
                      createVNode("p", { style: { "font-size": "19px", "font-weight": "300", "margin-top": "24px" } }, " Peak of Buffalo Mountain\uFF08Phou Khao Khouay\uFF09 facing the biggest freshwater lake in Laos, 60km from Vientiane. You will find varieties of excitement awaits you in this one of a kind hill top location with pampering spa services after a daylong of water activities; or even sumptuous dining experience at the lake side restaurants. If you are one that loves watching over a sky of glazing stars at night from your room or at our open air beer garden, you will find the clock clicks too fast. The thrill of excitement at our internationally rated casino is just a step away and you could be hitting a jackpot that makes you plan your next trip here in advance. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                span: 24,
                style: { "align-content": "center", "justify-content": "center", "display": "flex" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-11b94073${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "",
                        style: { height: "50px", display: "block" }
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  span: 16,
                  style: { "text-align": "center" }
                }, {
                  default: withCtx(() => [
                    createVNode("p", { style: { "font-size": "19px", "font-weight": "300", "margin-top": "24px" } }, " Peak of Buffalo Mountain\uFF08Phou Khao Khouay\uFF09 facing the biggest freshwater lake in Laos, 60km from Vientiane. You will find varieties of excitement awaits you in this one of a kind hill top location with pampering spa services after a daylong of water activities; or even sumptuous dining experience at the lake side restaurants. If you are one that loves watching over a sky of glazing stars at night from your room or at our open air beer garden, you will find the clock clicks too fast. The thrill of excitement at our internationally rated casino is just a step away and you could be hitting a jackpot that makes you plan your next trip here in advance. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  span: 24,
                  style: { "align-content": "center", "justify-content": "center", "display": "flex" }
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "",
                      style: { height: "50px", display: "block" }
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_a_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_breadcrumb, { style: { "margin": "16px 10px" } }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_a_breadcrumb_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Home`);
                              } else {
                                return [
                                  createTextVNode("Home")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_nuxt_link, { to: "/" }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_a_breadcrumb_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_nuxt_link, { to: "/hotels" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Hotels`);
                              } else {
                                return [
                                  createTextVNode("Hotels")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_nuxt_link, { to: "/hotels" }, {
                              default: withCtx(() => [
                                createTextVNode("Hotels")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_a_breadcrumb_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`NUM NGUM`);
                        } else {
                          return [
                            createTextVNode("NUM NGUM")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_a_breadcrumb_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_nuxt_link, { to: "/" }, {
                            default: withCtx(() => [
                              createTextVNode("Home")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_breadcrumb_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_nuxt_link, { to: "/hotels" }, {
                            default: withCtx(() => [
                              createTextVNode("Hotels")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_breadcrumb_item, null, {
                        default: withCtx(() => [
                          createTextVNode("NUM NGUM")
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
                createVNode(_component_a_breadcrumb, { style: { "margin": "16px 10px" } }, {
                  default: withCtx(() => [
                    createVNode(_component_a_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_link, { to: "/" }, {
                          default: withCtx(() => [
                            createTextVNode("Home")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_link, { to: "/hotels" }, {
                          default: withCtx(() => [
                            createTextVNode("Hotels")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createTextVNode("NUM NGUM")
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
        _push2(`<div style="${ssrRenderStyle({ background: "#fff", padding: "24px", minHeight: "280px" })}" data-v-11b94073${_scopeId}>`);
        _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, { span: 18 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)" } }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` FACILITIES `);
                        } else {
                          return [
                            createTextVNode(" FACILITIES ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)" } }, {
                        default: withCtx(() => [
                          createTextVNode(" FACILITIES ")
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
                createVNode(_component_a_col, { span: 18 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)" } }, {
                      default: withCtx(() => [
                        createTextVNode(" FACILITIES ")
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
          justify: "center",
          style: { "display": "flex", "gap": "10px" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(4, (i) => {
                _push3(ssrRenderComponent(_component_a_col, {
                  span: 4,
                  class: "facility-card",
                  key: i
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img${ssrRenderAttr("src", "")} alt="" data-v-11b94073${_scopeId3}><span data-v-11b94073${_scopeId3}>FACILITIES1</span>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: "",
                          alt: ""
                        }),
                        createVNode("span", null, "FACILITIES1")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                  return createVNode(_component_a_col, {
                    span: 4,
                    class: "facility-card",
                    key: i
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "",
                        alt: ""
                      }),
                      createVNode("span", null, "FACILITIES1")
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="line-header" data-v-11b94073${_scopeId}><span data-v-11b94073${_scopeId}>ROOM </span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-11b94073${_scopeId}></div><div style="${ssrRenderStyle({ padding: "24px", minHeight: "280px" })}" data-v-11b94073${_scopeId}>`);
        _push2(ssrRenderComponent(_component_a_row, { class: "room-container" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, {
                lg: 10,
                class: "room-cover"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                lg: 8,
                class: "room-info"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text-box" data-v-11b94073${_scopeId3}><h2 data-v-11b94073${_scopeId3}><a href="#" data-v-11b94073${_scopeId3}>Standard Room</a></h2><p class="details" data-v-11b94073${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-11b94073${_scopeId4}>Content</p>`);
                        } else {
                          return [
                            createVNode("p", null, "Content")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DesktopOutlined, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DesktopOutlined)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_DesktopOutlined)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-11b94073${_scopeId4}>Content</p>`);
                        } else {
                          return [
                            createVNode("p", null, "Content")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_WifiOutlined, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_WifiOutlined)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_WifiOutlined)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-11b94073${_scopeId4}>Content</p>`);
                        } else {
                          return [
                            createVNode("p", null, "Content")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_CoffeeOutlined, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_CoffeeOutlined)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_CoffeeOutlined)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</p>`);
                    _push4(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` contact `);
                        } else {
                          return [
                            createTextVNode(" contact ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-box" }, [
                        createVNode("h2", null, [
                          createVNode("a", { href: "#" }, "Standard Room")
                        ]),
                        createVNode("p", { class: "details" }, [
                          createVNode(_component_a_popover, { placement: "bottom" }, {
                            content: withCtx(() => [
                              createVNode("p", null, "Content")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                default: withCtx(() => [
                                  createVNode(_component_DesktopOutlined)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_popover, { placement: "bottom" }, {
                            content: withCtx(() => [
                              createVNode("p", null, "Content")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                default: withCtx(() => [
                                  createVNode(_component_WifiOutlined)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_popover, { placement: "bottom" }, {
                            content: withCtx(() => [
                              createVNode("p", null, "Content")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                default: withCtx(() => [
                                  createVNode(_component_CoffeeOutlined)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_nuxt_link, { to: "/contact" }, {
                          default: withCtx(() => [
                            createTextVNode(" contact ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, {
                  lg: 10,
                  class: "room-cover"
                }),
                createVNode(_component_a_col, {
                  lg: 8,
                  class: "room-info"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-box" }, [
                      createVNode("h2", null, [
                        createVNode("a", { href: "#" }, "Standard Room")
                      ]),
                      createVNode("p", { class: "details" }, [
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_DesktopOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_WifiOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_CoffeeOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_nuxt_link, { to: "/contact" }, {
                        default: withCtx(() => [
                          createTextVNode(" contact ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_a_row, { class: "room-container" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, {
                lg: 10,
                class: "room-cover"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                lg: 8,
                class: "room-info"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text-box" data-v-11b94073${_scopeId3}><h2 data-v-11b94073${_scopeId3}><a href="#" data-v-11b94073${_scopeId3}>Standard Room</a></h2><p class="details" data-v-11b94073${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-11b94073${_scopeId4}>Content</p>`);
                        } else {
                          return [
                            createVNode("p", null, "Content")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DesktopOutlined, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DesktopOutlined)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_DesktopOutlined)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-11b94073${_scopeId4}>Content</p>`);
                        } else {
                          return [
                            createVNode("p", null, "Content")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_WifiOutlined, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_WifiOutlined)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_WifiOutlined)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-11b94073${_scopeId4}>Content</p>`);
                        } else {
                          return [
                            createVNode("p", null, "Content")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_CoffeeOutlined, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_CoffeeOutlined)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_CoffeeOutlined)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</p>`);
                    _push4(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` contact `);
                        } else {
                          return [
                            createTextVNode(" contact ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-box" }, [
                        createVNode("h2", null, [
                          createVNode("a", { href: "#" }, "Standard Room")
                        ]),
                        createVNode("p", { class: "details" }, [
                          createVNode(_component_a_popover, { placement: "bottom" }, {
                            content: withCtx(() => [
                              createVNode("p", null, "Content")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                default: withCtx(() => [
                                  createVNode(_component_DesktopOutlined)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_popover, { placement: "bottom" }, {
                            content: withCtx(() => [
                              createVNode("p", null, "Content")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                default: withCtx(() => [
                                  createVNode(_component_WifiOutlined)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_popover, { placement: "bottom" }, {
                            content: withCtx(() => [
                              createVNode("p", null, "Content")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                default: withCtx(() => [
                                  createVNode(_component_CoffeeOutlined)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_nuxt_link, { to: "/contact" }, {
                          default: withCtx(() => [
                            createTextVNode(" contact ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, {
                  lg: 10,
                  class: "room-cover"
                }),
                createVNode(_component_a_col, {
                  lg: 8,
                  class: "room-info"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-box" }, [
                      createVNode("h2", null, [
                        createVNode("a", { href: "#" }, "Standard Room")
                      ]),
                      createVNode("p", { class: "details" }, [
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_DesktopOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_WifiOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_CoffeeOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_nuxt_link, { to: "/contact" }, {
                        default: withCtx(() => [
                          createTextVNode(" contact ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_a_row, { class: "room-container" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, {
                lg: 10,
                class: "room-cover"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                lg: 8,
                class: "room-info"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text-box" data-v-11b94073${_scopeId3}><h2 data-v-11b94073${_scopeId3}><a href="#" data-v-11b94073${_scopeId3}>Standard Room</a></h2><p class="details" data-v-11b94073${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-11b94073${_scopeId4}>Content</p>`);
                        } else {
                          return [
                            createVNode("p", null, "Content")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DesktopOutlined, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DesktopOutlined)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_DesktopOutlined)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-11b94073${_scopeId4}>Content</p>`);
                        } else {
                          return [
                            createVNode("p", null, "Content")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_WifiOutlined, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_WifiOutlined)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_WifiOutlined)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                      content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-11b94073${_scopeId4}>Content</p>`);
                        } else {
                          return [
                            createVNode("p", null, "Content")
                          ];
                        }
                      }),
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_CoffeeOutlined, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_CoffeeOutlined)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_CoffeeOutlined)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</p>`);
                    _push4(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` contact `);
                        } else {
                          return [
                            createTextVNode(" contact ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-box" }, [
                        createVNode("h2", null, [
                          createVNode("a", { href: "#" }, "Standard Room")
                        ]),
                        createVNode("p", { class: "details" }, [
                          createVNode(_component_a_popover, { placement: "bottom" }, {
                            content: withCtx(() => [
                              createVNode("p", null, "Content")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                default: withCtx(() => [
                                  createVNode(_component_DesktopOutlined)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_popover, { placement: "bottom" }, {
                            content: withCtx(() => [
                              createVNode("p", null, "Content")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                default: withCtx(() => [
                                  createVNode(_component_WifiOutlined)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_popover, { placement: "bottom" }, {
                            content: withCtx(() => [
                              createVNode("p", null, "Content")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                default: withCtx(() => [
                                  createVNode(_component_CoffeeOutlined)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_nuxt_link, { to: "/contact" }, {
                          default: withCtx(() => [
                            createTextVNode(" contact ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, {
                  lg: 10,
                  class: "room-cover"
                }),
                createVNode(_component_a_col, {
                  lg: 8,
                  class: "room-info"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-box" }, [
                      createVNode("h2", null, [
                        createVNode("a", { href: "#" }, "Standard Room")
                      ]),
                      createVNode("p", { class: "details" }, [
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_DesktopOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_WifiOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_CoffeeOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_nuxt_link, { to: "/contact" }, {
                        default: withCtx(() => [
                          createTextVNode(" contact ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="line-header" data-v-11b94073${_scopeId}><span data-v-11b94073${_scopeId}>GALLERY</span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "40px", display: "block" })}" data-v-11b94073${_scopeId}></div>`);
        _push2(ssrRenderComponent(_component_a_row, {
          justify: "center",
          style: { "display": "flex", "gap": "10px" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(4, (i) => {
                _push3(ssrRenderComponent(_component_a_col, {
                  span: 4,
                  class: "gallery-card",
                  key: i
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img${ssrRenderAttr("src", "")} alt="" data-v-11b94073${_scopeId3}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: "",
                          alt: ""
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                  return createVNode(_component_a_col, {
                    span: 4,
                    class: "gallery-card",
                    key: i
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "",
                        alt: ""
                      })
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_a_row, { justify: "center" }, {
            default: withCtx(() => [
              createVNode(_component_a_col, { span: 24 }, {
                default: withCtx(() => [
                  createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                span: 16,
                style: { "text-align": "center" }
              }, {
                default: withCtx(() => [
                  createVNode("p", { style: { "font-size": "19px", "font-weight": "300", "margin-top": "24px" } }, " Peak of Buffalo Mountain\uFF08Phou Khao Khouay\uFF09 facing the biggest freshwater lake in Laos, 60km from Vientiane. You will find varieties of excitement awaits you in this one of a kind hill top location with pampering spa services after a daylong of water activities; or even sumptuous dining experience at the lake side restaurants. If you are one that loves watching over a sky of glazing stars at night from your room or at our open air beer garden, you will find the clock clicks too fast. The thrill of excitement at our internationally rated casino is just a step away and you could be hitting a jackpot that makes you plan your next trip here in advance. ")
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                span: 24,
                style: { "align-content": "center", "justify-content": "center", "display": "flex" }
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    style: { height: "50px", display: "block" }
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_a_row, null, {
            default: withCtx(() => [
              createVNode(_component_a_breadcrumb, { style: { "margin": "16px 10px" } }, {
                default: withCtx(() => [
                  createVNode(_component_a_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_nuxt_link, { to: "/" }, {
                        default: withCtx(() => [
                          createTextVNode("Home")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_nuxt_link, { to: "/hotels" }, {
                        default: withCtx(() => [
                          createTextVNode("Hotels")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createTextVNode("NUM NGUM")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode("div", { style: { background: "#fff", padding: "24px", minHeight: "280px" } }, [
            createVNode(_component_a_row, { justify: "center" }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 18 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)" } }, {
                      default: withCtx(() => [
                        createTextVNode(" FACILITIES ")
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
              justify: "center",
              style: { "display": "flex", "gap": "10px" }
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                  return createVNode(_component_a_col, {
                    span: 4,
                    class: "facility-card",
                    key: i
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "",
                        alt: ""
                      }),
                      createVNode("span", null, "FACILITIES1")
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ]),
              _: 1
            })
          ]),
          createVNode("div", { class: "line-header" }, [
            createVNode("span", null, "ROOM "),
            createVNode("img", {
              src: _imports_0,
              alt: "",
              style: { height: "50px", display: "block" }
            })
          ]),
          createVNode("div", { style: { padding: "24px", minHeight: "280px" } }, [
            createVNode(_component_a_row, { class: "room-container" }, {
              default: withCtx(() => [
                createVNode(_component_a_col, {
                  lg: 10,
                  class: "room-cover"
                }),
                createVNode(_component_a_col, {
                  lg: 8,
                  class: "room-info"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-box" }, [
                      createVNode("h2", null, [
                        createVNode("a", { href: "#" }, "Standard Room")
                      ]),
                      createVNode("p", { class: "details" }, [
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_DesktopOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_WifiOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_CoffeeOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_nuxt_link, { to: "/contact" }, {
                        default: withCtx(() => [
                          createTextVNode(" contact ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_a_row, { class: "room-container" }, {
              default: withCtx(() => [
                createVNode(_component_a_col, {
                  lg: 10,
                  class: "room-cover"
                }),
                createVNode(_component_a_col, {
                  lg: 8,
                  class: "room-info"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-box" }, [
                      createVNode("h2", null, [
                        createVNode("a", { href: "#" }, "Standard Room")
                      ]),
                      createVNode("p", { class: "details" }, [
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_DesktopOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_WifiOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_CoffeeOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_nuxt_link, { to: "/contact" }, {
                        default: withCtx(() => [
                          createTextVNode(" contact ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_a_row, { class: "room-container" }, {
              default: withCtx(() => [
                createVNode(_component_a_col, {
                  lg: 10,
                  class: "room-cover"
                }),
                createVNode(_component_a_col, {
                  lg: 8,
                  class: "room-info"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-box" }, [
                      createVNode("h2", null, [
                        createVNode("a", { href: "#" }, "Standard Room")
                      ]),
                      createVNode("p", { class: "details" }, [
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_DesktopOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_WifiOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_popover, { placement: "bottom" }, {
                          content: withCtx(() => [
                            createVNode("p", null, "Content")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { class: "circle-hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_CoffeeOutlined)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_nuxt_link, { to: "/contact" }, {
                        default: withCtx(() => [
                          createTextVNode(" contact ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createVNode("div", { class: "line-header" }, [
            createVNode("span", null, "GALLERY"),
            createVNode("img", {
              src: _imports_0,
              alt: "",
              style: { height: "40px", display: "block" }
            })
          ]),
          createVNode(_component_a_row, {
            justify: "center",
            style: { "display": "flex", "gap": "10px" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                return createVNode(_component_a_col, {
                  span: 4,
                  class: "gallery-card",
                  key: i
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: "",
                      alt: ""
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/investment-project/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-11b94073"]]);

export { index as default };
//# sourceMappingURL=index-BbfPgcHr.mjs.map
