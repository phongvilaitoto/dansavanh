import _extends from '@babel/runtime/helpers/esm/extends';
import { reactive, provide, watchEffect, inject } from 'vue';
import { t as tuple } from '../server.mjs';

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
function createContext(defaultValue) {
  const contextKey = Symbol("contextKey");
  const useProvide = (props, newProps) => {
    const mergedProps = reactive({});
    provide(contextKey, mergedProps);
    watchEffect(() => {
      _extends(mergedProps, props, newProps || {});
    });
    return mergedProps;
  };
  const useInject = () => {
    return inject(contextKey, defaultValue) || {};
  };
  return {
    useProvide,
    useInject
  };
}
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n) => `&:${n} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: -token.lineWidth
    },
    "&-item": _extends(_extends({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: _extends(_extends({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}

export { getTransitionName as a, genCompactItemStyle as b, createContext as c, getTransitionGroupProps as d, getTransitionDirection as e, getTransitionProps as g };
//# sourceMappingURL=compact-item-0fAWjO3D.mjs.map
