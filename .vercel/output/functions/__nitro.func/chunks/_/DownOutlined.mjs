import { a7 as warningOnce, c as classNames } from '../build/useConfigInject-BAI3R2rN.mjs';
import _objectSpread$1 from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { defineComponent, provide, computed, ref, createVNode, shallowRef, watch, inject } from 'vue';
import { R as ResizeObserver, x as initMotion } from '../build/Title-CgfrIVWU.mjs';
import { P as PropTypes, I as Icon } from '../build/index-DTnbOyTJ.mjs';
import { K as Keyframe } from './CloseCircleFilled.mjs';

const devWarning = (valid, component, message) => {
  warningOnce(valid, `[ant-design-vue: ${component}] ${message}`);
};
const OverflowContextProviderKey = Symbol("OverflowContextProviderKey");
const OverflowContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OverflowContextProvider",
  inheritAttrs: false,
  props: {
    value: {
      type: Object
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provide(OverflowContextProviderKey, computed(() => props.value));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const useInjectOverflowContext = () => {
  return inject(OverflowContextProviderKey, computed(() => null));
};
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
const UNDEFINED = void 0;
const Item = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Item",
  props: {
    prefixCls: String,
    item: PropTypes.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: PropTypes.any,
    invalidate: Boolean
  },
  setup(props, _ref) {
    let {
      slots,
      expose
    } = _ref;
    const mergedHidden = computed(() => props.responsive && !props.display);
    const itemNodeRef = ref();
    expose({
      itemNodeRef
    });
    function internalRegisterSize(width) {
      props.registerSize(props.itemKey, width);
    }
    return () => {
      var _a;
      const {
        prefixCls,
        invalidate,
        item,
        renderItem,
        responsive,
        registerSize,
        itemKey,
        display,
        order,
        component: Component = "div"
      } = props, restProps = __rest$2(props, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]);
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      const childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
      let overflowStyle;
      if (!invalidate) {
        overflowStyle = {
          opacity: mergedHidden.value ? 0 : 1,
          height: mergedHidden.value ? 0 : UNDEFINED,
          overflowY: mergedHidden.value ? "hidden" : UNDEFINED,
          order: responsive ? order : UNDEFINED,
          pointerEvents: mergedHidden.value ? "none" : UNDEFINED,
          position: mergedHidden.value ? "absolute" : UNDEFINED
        };
      }
      const overflowProps2 = {};
      if (mergedHidden.value) {
        overflowProps2["aria-hidden"] = true;
      }
      return createVNode(ResizeObserver, {
        "disabled": !responsive,
        "onResize": (_ref2) => {
          let {
            offsetWidth
          } = _ref2;
          internalRegisterSize(offsetWidth);
        }
      }, {
        default: () => createVNode(Component, _objectSpread$1(_objectSpread$1(_objectSpread$1({
          "class": classNames(!invalidate && prefixCls),
          "style": overflowStyle
        }, overflowProps2), restProps), {}, {
          "ref": itemNodeRef
        }), {
          default: () => [childNode]
        })
      });
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
const RawItem = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "RawItem",
  inheritAttrs: false,
  props: {
    component: PropTypes.any,
    title: PropTypes.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    role: String,
    tabindex: Number
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const context = useInjectOverflowContext();
    return () => {
      var _a;
      if (!context.value) {
        const {
          component: Component = "div"
        } = props, restProps2 = __rest$1(props, ["component"]);
        return createVNode(Component, _objectSpread$1(_objectSpread$1({}, restProps2), attrs), {
          default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
        });
      }
      const _b = context.value, {
        className: contextClassName
      } = _b, restContext = __rest$1(_b, ["className"]);
      const {
        class: className
      } = attrs, restProps = __rest$1(attrs, ["class"]);
      return createVNode(OverflowContextProvider, {
        "value": null
      }, {
        default: () => [createVNode(Item, _objectSpread$1(_objectSpread$1(_objectSpread$1({
          "class": classNames(contextClassName, className)
        }, restContext), restProps), props), slots)]
      });
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
const RESPONSIVE = "responsive";
const INVALIDATE = "invalidate";
function defaultRenderRest(omittedItems) {
  return `+ ${omittedItems.length} ...`;
}
const overflowProps = () => {
  return {
    id: String,
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],
    /** Used for `responsive`. It will limit render node to avoid perf issue */
    itemWidth: {
      type: Number,
      default: 10
    },
    renderItem: Function,
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawRest: Function,
    suffix: PropTypes.any,
    component: String,
    itemComponent: PropTypes.any,
    /** @private This API may be refactor since not well design */
    onVisibleChange: Function,
    /** When set to `full`, ssr will render full items by default and remove at client side */
    ssr: String,
    onMousedown: Function,
    role: String
  };
};
const Overflow = defineComponent({
  name: "Overflow",
  inheritAttrs: false,
  props: overflowProps(),
  emits: ["visibleChange"],
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const fullySSR = computed(() => props.ssr === "full");
    const containerWidth = shallowRef(null);
    const mergedContainerWidth = computed(() => containerWidth.value || 0);
    const itemWidths = shallowRef(/* @__PURE__ */ new Map());
    const prevRestWidth = shallowRef(0);
    const restWidth = shallowRef(0);
    const suffixWidth = shallowRef(0);
    const suffixFixedStart = shallowRef(null);
    const displayCount = shallowRef(null);
    const mergedDisplayCount = computed(() => {
      if (displayCount.value === null && fullySSR.value) {
        return Number.MAX_SAFE_INTEGER;
      }
      return displayCount.value || 0;
    });
    const restReady = shallowRef(false);
    const itemPrefixCls = computed(() => `${props.prefixCls}-item`);
    const mergedRestWidth = computed(() => Math.max(prevRestWidth.value, restWidth.value));
    const isResponsive = computed(() => !!(props.data.length && props.maxCount === RESPONSIVE));
    const invalidate = computed(() => props.maxCount === INVALIDATE);
    const showRest = computed(() => isResponsive.value || typeof props.maxCount === "number" && props.data.length > props.maxCount);
    const mergedData = computed(() => {
      let items = props.data;
      if (isResponsive.value) {
        if (containerWidth.value === null && fullySSR.value) {
          items = props.data;
        } else {
          items = props.data.slice(0, Math.min(props.data.length, mergedContainerWidth.value / props.itemWidth));
        }
      } else if (typeof props.maxCount === "number") {
        items = props.data.slice(0, props.maxCount);
      }
      return items;
    });
    const omittedItems = computed(() => {
      if (isResponsive.value) {
        return props.data.slice(mergedDisplayCount.value + 1);
      }
      return props.data.slice(mergedData.value.length);
    });
    const getKey = (item, index) => {
      var _a;
      if (typeof props.itemKey === "function") {
        return props.itemKey(item);
      }
      return (_a = props.itemKey && (item === null || item === void 0 ? void 0 : item[props.itemKey])) !== null && _a !== void 0 ? _a : index;
    };
    const mergedRenderItem = computed(() => props.renderItem || ((item) => item));
    const updateDisplayCount = (count, notReady) => {
      displayCount.value = count;
      if (!notReady) {
        restReady.value = count < props.data.length - 1;
        emit("visibleChange", count);
      }
    };
    const onOverflowResize = (_, element) => {
      containerWidth.value = element.clientWidth;
    };
    const registerSize = (key, width) => {
      const clone = new Map(itemWidths.value);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      itemWidths.value = clone;
    };
    const registerOverflowSize = (_, width) => {
      prevRestWidth.value = restWidth.value;
      restWidth.value = width;
    };
    const registerSuffixSize = (_, width) => {
      suffixWidth.value = width;
    };
    const getItemWidth = (index) => {
      return itemWidths.value.get(getKey(mergedData.value[index], index));
    };
    watch([mergedContainerWidth, itemWidths, restWidth, suffixWidth, () => props.itemKey, mergedData], () => {
      if (mergedContainerWidth.value && mergedRestWidth.value && mergedData.value) {
        let totalWidth = suffixWidth.value;
        const len = mergedData.value.length;
        const lastIndex = len - 1;
        if (!len) {
          updateDisplayCount(0);
          suffixFixedStart.value = null;
          return;
        }
        for (let i = 0; i < len; i += 1) {
          const currentItemWidth = getItemWidth(i);
          if (currentItemWidth === void 0) {
            updateDisplayCount(i - 1, true);
            break;
          }
          totalWidth += currentItemWidth;
          if (
            // Only one means `totalWidth` is the final width
            lastIndex === 0 && totalWidth <= mergedContainerWidth.value || // Last two width will be the final width
            i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth.value
          ) {
            updateDisplayCount(lastIndex);
            suffixFixedStart.value = null;
            break;
          } else if (totalWidth + mergedRestWidth.value > mergedContainerWidth.value) {
            updateDisplayCount(i - 1);
            suffixFixedStart.value = totalWidth - currentItemWidth - suffixWidth.value + restWidth.value;
            break;
          }
        }
        if (props.suffix && getItemWidth(0) + suffixWidth.value > mergedContainerWidth.value) {
          suffixFixedStart.value = null;
        }
      }
    });
    return () => {
      const displayRest = restReady.value && !!omittedItems.value.length;
      const {
        itemComponent,
        renderRawItem,
        renderRawRest,
        renderRest,
        prefixCls = "rc-overflow",
        suffix,
        component: Component = "div",
        id,
        onMousedown
      } = props;
      const {
        class: className,
        style
      } = attrs, restAttrs = __rest(attrs, ["class", "style"]);
      let suffixStyle = {};
      if (suffixFixedStart.value !== null && isResponsive.value) {
        suffixStyle = {
          position: "absolute",
          left: `${suffixFixedStart.value}px`,
          top: 0
        };
      }
      const itemSharedProps = {
        prefixCls: itemPrefixCls.value,
        responsive: isResponsive.value,
        component: itemComponent,
        invalidate: invalidate.value
      };
      const internalRenderItemNode = renderRawItem ? (item, index) => {
        const key = getKey(item, index);
        return createVNode(OverflowContextProvider, {
          "key": key,
          "value": _extends(_extends({}, itemSharedProps), {
            order: index,
            item,
            itemKey: key,
            registerSize,
            display: index <= mergedDisplayCount.value
          })
        }, {
          default: () => [renderRawItem(item, index)]
        });
      } : (item, index) => {
        const key = getKey(item, index);
        return createVNode(Item, _objectSpread$1(_objectSpread$1({}, itemSharedProps), {}, {
          "order": index,
          "key": key,
          "item": item,
          "renderItem": mergedRenderItem.value,
          "itemKey": key,
          "registerSize": registerSize,
          "display": index <= mergedDisplayCount.value
        }), null);
      };
      let restNode = () => null;
      const restContextProps = {
        order: displayRest ? mergedDisplayCount.value : Number.MAX_SAFE_INTEGER,
        className: `${itemPrefixCls.value} ${itemPrefixCls.value}-rest`,
        registerSize: registerOverflowSize,
        display: displayRest
      };
      if (!renderRawRest) {
        const mergedRenderRest = renderRest || defaultRenderRest;
        restNode = () => createVNode(Item, _objectSpread$1(_objectSpread$1({}, itemSharedProps), restContextProps), {
          default: () => typeof mergedRenderRest === "function" ? mergedRenderRest(omittedItems.value) : mergedRenderRest
        });
      } else if (renderRawRest) {
        restNode = () => createVNode(OverflowContextProvider, {
          "value": _extends(_extends({}, itemSharedProps), restContextProps)
        }, {
          default: () => [renderRawRest(omittedItems.value)]
        });
      }
      const overflowNode = () => {
        var _a;
        return createVNode(Component, _objectSpread$1({
          "id": id,
          "class": classNames(!invalidate.value && prefixCls, className),
          "style": style,
          "onMousedown": onMousedown,
          "role": props.role
        }, restAttrs), {
          default: () => [mergedData.value.map(internalRenderItemNode), showRest.value ? restNode() : null, suffix && createVNode(Item, _objectSpread$1(_objectSpread$1({}, itemSharedProps), {}, {
            "order": mergedDisplayCount.value,
            "class": `${itemPrefixCls.value}-suffix`,
            "registerSize": registerSuffixSize,
            "display": true,
            "style": suffixStyle
          }), {
            default: () => suffix
          }), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
        });
      };
      return createVNode(ResizeObserver, {
        "disabled": !isResponsive.value,
        "onResize": onOverflowResize
      }, {
        default: overflowNode
      });
    };
  }
});
Overflow.Item = RawItem;
Overflow.RESPONSIVE = RESPONSIVE;
Overflow.INVALIDATE = INVALIDATE;
function useState(defaultStateValue) {
  const initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  const innerValue = ref(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}
const moveDownIn = new Keyframe("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveDownOut = new Keyframe("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveLeftIn = new Keyframe("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveLeftOut = new Keyframe("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveRightIn = new Keyframe("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveRightOut = new Keyframe("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveUpIn = new Keyframe("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveUpOut = new Keyframe("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
const slideUpIn = new Keyframe("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideUpOut = new Keyframe("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideDownIn = new Keyframe("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
const slideDownOut = new Keyframe("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
const slideLeftIn = new Keyframe("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideLeftOut = new Keyframe("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideRightIn = new Keyframe("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
const slideRightOut = new Keyframe("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
const slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};

// This icon file is generated automatically.
var DownOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DownOutlined = function DownOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": DownOutlined$1
  }), null);
};

DownOutlined.displayName = 'DownOutlined';
DownOutlined.inheritAttrs = false;

export { DownOutlined as D, Overflow as O, slideDownIn as a, slideUpOut as b, slideDownOut as c, devWarning as d, initMoveMotion as e, initSlideMotion as i, slideUpIn as s, useState as u };
//# sourceMappingURL=DownOutlined.mjs.map
