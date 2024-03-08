import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { defineComponent, ref, computed, createVNode, shallowRef, provide, inject } from 'vue';
import { u as useConfigInject, c as classNames, x as useToken, g as genComponentStyleHook, m as merge } from './index-j6mHhOx5.mjs';
import { w as withInstall, s as someType } from '../server.mjs';

const responsiveArray = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
const getResponsiveMap = (token) => ({
  xs: `(max-width: ${token.screenXSMax}px)`,
  sm: `(min-width: ${token.screenSM}px)`,
  md: `(min-width: ${token.screenMD}px)`,
  lg: `(min-width: ${token.screenLG}px)`,
  xl: `(min-width: ${token.screenXL}px)`,
  xxl: `(min-width: ${token.screenXXL}px)`,
  xxxl: `{min-width: ${token.screenXXXL}px}`
});
function useResponsiveObserver() {
  const [, token] = useToken();
  return computed(() => {
    const responsiveMap = getResponsiveMap(token.value);
    const subscribers = /* @__PURE__ */ new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach((func) => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size)
          this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size)
          this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach((screen) => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach((screen) => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = (_ref) => {
            let {
              matches
            } = _ref;
            this.dispatch(_extends(_extends({}, screens), {
              [screen]: matches
            }));
          };
          const mql = (void 0).matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  });
}
const useFlexGapSupport = () => {
  const flexible = shallowRef(false);
  return flexible;
};
const RowContextKey = Symbol("rowContextKey");
const useProvideRow = (state) => {
  provide(RowContextKey, state);
};
const useInjectRow = () => {
  return inject(RowContextKey, {
    gutter: computed(() => void 0),
    wrap: computed(() => void 0),
    supportFlexGap: computed(() => void 0)
  });
};
const genGridRowStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around ": {
        justifyContent: "space-around"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
};
const genGridColStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    componentCls,
    gridColumns
  } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "none"
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineEnd: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "block",
        flex: `0 0 ${i / gridColumns * 100}%`,
        maxWidth: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${screenSize}px)`]: _extends({}, genGridStyle(token, sizeCls))
});
const useRowStyle = genComponentStyleHook("Grid", (token) => [genGridRowStyle(token)]);
const useColStyle = genComponentStyleHook("Grid", (token) => {
  const gridToken = merge(token, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  });
  const gridMediaSizesMap = {
    "-sm": gridToken.screenSMMin,
    "-md": gridToken.screenMDMin,
    "-lg": gridToken.screenLGMin,
    "-xl": gridToken.screenXLMin,
    "-xxl": gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ""), genGridStyle(gridToken, "-xs"), Object.keys(gridMediaSizesMap).map((key) => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)).reduce((pre, cur) => _extends(_extends({}, pre), cur), {})];
});
const rowProps = () => ({
  align: someType([String, Object]),
  justify: someType([String, Object]),
  prefixCls: String,
  gutter: someType([Number, Array, Object], 0),
  wrap: {
    type: Boolean,
    default: void 0
  }
});
const ARow = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  inheritAttrs: false,
  props: rowProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("row", props);
    const [wrapSSR, hashId] = useRowStyle(prefixCls);
    useResponsiveObserver();
    const screens = ref({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true
    });
    const curScreens = ref({
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false
    });
    const mergePropsByScreen = (oriProp) => {
      return computed(() => {
        if (typeof props[oriProp] === "string") {
          return props[oriProp];
        }
        if (typeof props[oriProp] !== "object") {
          return "";
        }
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i];
          if (!curScreens.value[breakpoint])
            continue;
          const curVal = props[oriProp][breakpoint];
          if (curVal !== void 0) {
            return curVal;
          }
        }
        return "";
      });
    };
    const mergeAlign = mergePropsByScreen("align");
    const mergeJustify = mergePropsByScreen("justify");
    const supportFlexGap = useFlexGapSupport();
    const gutter = computed(() => {
      const results = [void 0, void 0];
      const {
        gutter: gutter2 = 0
      } = props;
      const normalizedGutter = Array.isArray(gutter2) ? gutter2 : [gutter2, void 0];
      normalizedGutter.forEach((g, index) => {
        if (typeof g === "object") {
          for (let i = 0; i < responsiveArray.length; i++) {
            const breakpoint = responsiveArray[i];
            if (screens.value[breakpoint] && g[breakpoint] !== void 0) {
              results[index] = g[breakpoint];
              break;
            }
          }
        } else {
          results[index] = g;
        }
      });
      return results;
    });
    useProvideRow({
      gutter,
      supportFlexGap,
      wrap: computed(() => props.wrap)
    });
    const classes = computed(() => classNames(prefixCls.value, {
      [`${prefixCls.value}-no-wrap`]: props.wrap === false,
      [`${prefixCls.value}-${mergeJustify.value}`]: mergeJustify.value,
      [`${prefixCls.value}-${mergeAlign.value}`]: mergeAlign.value,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl"
    }, attrs.class, hashId.value));
    const rowStyle = computed(() => {
      const gt = gutter.value;
      const style = {};
      const horizontalGutter = gt[0] != null && gt[0] > 0 ? `${gt[0] / -2}px` : void 0;
      const verticalGutter = gt[1] != null && gt[1] > 0 ? `${gt[1] / -2}px` : void 0;
      if (horizontalGutter) {
        style.marginLeft = horizontalGutter;
        style.marginRight = horizontalGutter;
      }
      if (supportFlexGap.value) {
        style.rowGap = `${gt[1]}px`;
      } else if (verticalGutter) {
        style.marginTop = verticalGutter;
        style.marginBottom = verticalGutter;
      }
      return style;
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": classes.value,
        "style": _extends(_extends({}, rowStyle.value), attrs.style)
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
const Row = ARow;
function parseFlex(flex) {
  if (typeof flex === "number") {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const colProps = () => ({
  span: [String, Number],
  order: [String, Number],
  offset: [String, Number],
  push: [String, Number],
  pull: [String, Number],
  xs: {
    type: [String, Number, Object],
    default: void 0
  },
  sm: {
    type: [String, Number, Object],
    default: void 0
  },
  md: {
    type: [String, Number, Object],
    default: void 0
  },
  lg: {
    type: [String, Number, Object],
    default: void 0
  },
  xl: {
    type: [String, Number, Object],
    default: void 0
  },
  xxl: {
    type: [String, Number, Object],
    default: void 0
  },
  prefixCls: String,
  flex: [String, Number]
});
const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
const Col = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  inheritAttrs: false,
  props: colProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      gutter,
      supportFlexGap,
      wrap
    } = useInjectRow();
    const {
      prefixCls,
      direction
    } = useConfigInject("col", props);
    const [wrapSSR, hashId] = useColStyle(prefixCls);
    const classes = computed(() => {
      const {
        span,
        order,
        offset,
        push,
        pull
      } = props;
      const pre = prefixCls.value;
      let sizeClassObj = {};
      sizes.forEach((size) => {
        let sizeProps = {};
        const propSize = props[size];
        if (typeof propSize === "number") {
          sizeProps.span = propSize;
        } else if (typeof propSize === "object") {
          sizeProps = propSize || {};
        }
        sizeClassObj = _extends(_extends({}, sizeClassObj), {
          [`${pre}-${size}-${sizeProps.span}`]: sizeProps.span !== void 0,
          [`${pre}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
          [`${pre}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
          [`${pre}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
          [`${pre}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
          [`${pre}-rtl`]: direction.value === "rtl"
        });
      });
      return classNames(pre, {
        [`${pre}-${span}`]: span !== void 0,
        [`${pre}-order-${order}`]: order,
        [`${pre}-offset-${offset}`]: offset,
        [`${pre}-push-${push}`]: push,
        [`${pre}-pull-${pull}`]: pull
      }, sizeClassObj, attrs.class, hashId.value);
    });
    const mergedStyle = computed(() => {
      const {
        flex
      } = props;
      const gutterVal = gutter.value;
      const style = {};
      if (gutterVal && gutterVal[0] > 0) {
        const horizontalGutter = `${gutterVal[0] / 2}px`;
        style.paddingLeft = horizontalGutter;
        style.paddingRight = horizontalGutter;
      }
      if (gutterVal && gutterVal[1] > 0 && !supportFlexGap.value) {
        const verticalGutter = `${gutterVal[1] / 2}px`;
        style.paddingTop = verticalGutter;
        style.paddingBottom = verticalGutter;
      }
      if (flex) {
        style.flex = parseFlex(flex);
        if (wrap.value === false && !style.minWidth) {
          style.minWidth = 0;
        }
      }
      return style;
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": classes.value,
        "style": [mergedStyle.value, attrs.style]
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
const __nuxt_component_2 = withInstall(Col);
const __nuxt_component_1 = withInstall(Row);

export { __nuxt_component_1 as _, __nuxt_component_2 as a, useResponsiveObserver as b, useFlexGapSupport as u };
//# sourceMappingURL=index-5qJONfuq.mjs.map
