import _extends from '@babel/runtime/helpers/esm/extends';
import { createVNode, defineComponent, ref, provide, computed, inject, shallowRef, watch } from 'vue';
import { I as Icon, h as useConfigInject, i as classNames, z as genComponentStyleHook, A as merge, P as PropTypes, t as tuple } from './server.mjs';
import _objectSpread$3 from '@babel/runtime/helpers/esm/objectSpread2';

// This icon file is generated automatically.
var BarsOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };

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
      return createVNode("aside", _objectSpread$3(_objectSpread$3({}, attrs), {}, {
        "class": siderCls,
        "style": divStyle
      }), [createVNode("div", {
        "class": `${pre}-children`
      }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)]), collapsible || below.value && zeroWidthTrigger ? triggerDom : null]);
    };
  }
});
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

export { LayoutContent as L, RightOutlined as R, SiderCollapsedKey as S, __nuxt_component_0 as _, LeftOutlined as a, initDefaultProps as i };
//# sourceMappingURL=index-CKfP-yp2.mjs.map
