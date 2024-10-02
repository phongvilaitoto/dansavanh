import _extends from '@babel/runtime/helpers/esm/extends';
import { defineComponent, watch, provide, computed, inject, createVNode } from 'vue';
import { t as tuple } from '../build/useConfigInject-BiTbSa3p.mjs';
import { P as PropTypes, I as Icon } from '../build/index-DJmKUcFc.mjs';

class Keyframe {
  constructor(name, style) {
    this._keyframe = true;
    this.name = name;
    this.style = style;
  }
  getName() {
    let hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return hashId ? `${hashId}-${this.name}` : this.name;
  }
}
function getMotion(_ref) {
  let {
    prefixCls,
    animation,
    transitionName
  } = _ref;
  if (animation) {
    return {
      name: `${prefixCls}-${animation}`
    };
  }
  if (transitionName) {
    return {
      name: transitionName
    };
  }
  return {};
}
tuple("bottomLeft", "bottomRight", "topLeft", "topRight");
const getTransitionDirection = (placement) => {
  if (placement !== void 0 && (placement === "topLeft" || placement === "topRight")) {
    return `slide-down`;
  }
  return `slide-up`;
};
const getTransitionProps = function(transitionName) {
  let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const transitionProps = transitionName ? _extends({
    name: transitionName,
    appear: true,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${transitionName}-enter ${transitionName}-enter-prepare ${transitionName}-enter-start`,
    enterActiveClass: `${transitionName}-enter ${transitionName}-enter-prepare`,
    enterToClass: `${transitionName}-enter ${transitionName}-enter-active`,
    leaveFromClass: ` ${transitionName}-leave`,
    leaveActiveClass: `${transitionName}-leave ${transitionName}-leave-active`,
    leaveToClass: `${transitionName}-leave ${transitionName}-leave-active`
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};
const getTransitionGroupProps = function(transitionName) {
  let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const transitionProps = transitionName ? _extends({
    name: transitionName,
    appear: true,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: `${transitionName}`,
    appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${transitionName}-appear ${transitionName}-enter ${transitionName}-appear-prepare ${transitionName}-enter-prepare`,
    enterActiveClass: `${transitionName}`,
    enterToClass: `${transitionName}-enter ${transitionName}-appear ${transitionName}-appear-active ${transitionName}-enter-active`,
    leaveActiveClass: `${transitionName} ${transitionName}-leave`,
    leaveToClass: `${transitionName}-leave-active`
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== void 0) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};
const PortalContextKey = Symbol("PortalContextKey");
const useProvidePortal = function(instance) {
  let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: true
  };
  provide(PortalContextKey, {
    inTriggerContext: config.inTriggerContext,
    shouldRender: computed(() => {
      const {
        sPopupVisible,
        popupRef,
        forceRender,
        autoDestroy
      } = instance || {};
      let shouldRender = false;
      if (sPopupVisible || popupRef || forceRender) {
        shouldRender = true;
      }
      if (!sPopupVisible && autoDestroy) {
        shouldRender = false;
      }
      return shouldRender;
    })
  });
};
const useInjectPortal = () => {
  useProvidePortal({}, {
    inTriggerContext: false
  });
  const portalContext = inject(PortalContextKey, {
    shouldRender: computed(() => false),
    inTriggerContext: false
  });
  return {
    shouldRender: computed(() => portalContext.shouldRender.value || portalContext.inTriggerContext === false)
  };
};
const Portal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: false,
  props: {
    getContainer: PropTypes.func.isRequired,
    didUpdate: Function
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    let container;
    const {
      shouldRender
    } = useInjectPortal();
    const stopWatch = watch(shouldRender, () => {
      if (shouldRender.value && !container) {
        container = props.getContainer();
      }
      if (container) {
        stopWatch();
      }
    });
    return () => {
      var _a;
      if (!shouldRender.value)
        return null;
      {
        return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      }
    };
  }
});

// This icon file is generated automatically.
var CloseCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloseCircleFilled = function CloseCircleFilled(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": CloseCircleFilled$1
  }), null);
};

CloseCircleFilled.displayName = 'CloseCircleFilled';
CloseCircleFilled.inheritAttrs = false;

export { CloseCircleFilled as C, Keyframe as K, Portal as P, getTransitionProps as a, getTransitionGroupProps as b, getMotion as c, getTransitionDirection as d, getTransitionName as g, useProvidePortal as u };
//# sourceMappingURL=CloseCircleFilled.mjs.map
