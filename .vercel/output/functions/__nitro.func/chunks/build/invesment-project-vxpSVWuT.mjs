import { createVNode, defineComponent, ref, computed, createTextVNode, toRef, useSSRContext, shallowRef, withCtx, unref, isRef } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-KlcFkPXq.mjs';
import { B as BaseInput, a as BaseMixin, f as firstNotUndefined, c as cloneElement, i as initInputToken, T as Title, g as genInputSmallStyle, b as genBasicInputStyle } from './Title-YJvE5ZjV.mjs';
import { B as Button } from './index-KC68-Ln1.mjs';
import _extends from '@babel/runtime/helpers/esm/extends';
import { I as Icon, P as PropTypes, R as RightOutlined, a as LeftOutlined, _ as __nuxt_component_0, L as LayoutContent } from './index-DJmKUcFc.mjs';
import { s as selectProps, S as Select } from './index-Cm2jBwOW.mjs';
import { c as classNames, h as hasProp, g as getComponent, i as isValidElement, s as splitAttrs, u as useConfigInject, a as useLocaleReceiver, e as enUS, w as withInstall, d as genComponentStyleHook, m as merge, b as booleanType, j as arrayType, k as functionType, l as someType, n as stringType, r as resetComponent, o as genFocusOutline, p as genFocusStyle } from './useConfigInject-BiTbSa3p.mjs';
import { b as useResponsiveObserver, _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-B566YWDZ.mjs';
import _objectSpread$2 from '@babel/runtime/helpers/esm/objectSpread2';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
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
import '../_/CloseCircleFilled.mjs';
import './createContext-DErE1G0Y.mjs';
import 'resize-observer-polyfill';
import '@ant-design/colors';
import 'dom-align';
import '../_/DownOutlined.mjs';
import '../_/LoadingOutlined.mjs';
import './Compact-mi0kmuGg.mjs';
import 'lodash-es';
import 'vue-types';
import '../_/CloseOutlined.mjs';
import '@ctrl/tinycolor';
import 'stylis';

// This icon file is generated automatically.
var DoubleLeftOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, "name": "double-left", "theme": "outlined" };

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DoubleLeftOutlined = function DoubleLeftOutlined(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$1({}, p, {
    "icon": DoubleLeftOutlined$1
  }), null);
};

DoubleLeftOutlined.displayName = 'DoubleLeftOutlined';
DoubleLeftOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var DoubleRightOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, "name": "double-right", "theme": "outlined" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DoubleRightOutlined = function DoubleRightOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": DoubleRightOutlined$1
  }), null);
};

DoubleRightOutlined.displayName = 'DoubleRightOutlined';
DoubleRightOutlined.inheritAttrs = false;

function useBreakpoint() {
  const screens = shallowRef({});
  useResponsiveObserver();
  return screens;
}
const MiniSelect = defineComponent({
  name: "MiniSelect",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: selectProps(),
  Option: Select.Option,
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    return () => {
      const selelctProps = _extends(_extends(_extends({}, props), {
        size: "small"
      }), attrs);
      return createVNode(Select, selelctProps, slots);
    };
  }
});
const MiddleSelect = defineComponent({
  name: "MiddleSelect",
  inheritAttrs: false,
  props: selectProps(),
  Option: Select.Option,
  setup(props, _ref2) {
    let {
      attrs,
      slots
    } = _ref2;
    return () => {
      const selelctProps = _extends(_extends(_extends({}, props), {
        size: "middle"
      }), attrs);
      return createVNode(Select, selelctProps, slots);
    };
  }
});
const Pager = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Pager",
  inheritAttrs: false,
  props: {
    rootPrefixCls: String,
    page: Number,
    active: {
      type: Boolean,
      default: void 0
    },
    last: {
      type: Boolean,
      default: void 0
    },
    locale: PropTypes.object,
    showTitle: {
      type: Boolean,
      default: void 0
    },
    itemRender: {
      type: Function,
      default: () => {
      }
    },
    onClick: {
      type: Function
    },
    onKeypress: {
      type: Function
    }
  },
  eimt: ["click", "keypress"],
  setup(props, _ref) {
    let {
      emit,
      attrs
    } = _ref;
    const handleClick = () => {
      emit("click", props.page);
    };
    const handleKeyPress = (event) => {
      emit("keypress", event, handleClick, props.page);
    };
    return () => {
      const {
        showTitle,
        page,
        itemRender
      } = props;
      const {
        class: _cls,
        style
      } = attrs;
      const prefixCls = `${props.rootPrefixCls}-item`;
      const cls = classNames(prefixCls, `${prefixCls}-${props.page}`, {
        [`${prefixCls}-active`]: props.active,
        [`${prefixCls}-disabled`]: !props.page
      }, _cls);
      return createVNode("li", {
        "onClick": handleClick,
        "onKeypress": handleKeyPress,
        "title": showTitle ? String(page) : null,
        "tabindex": "0",
        "class": cls,
        "style": style
      }, [itemRender({
        page,
        type: "page",
        originalElement: createVNode("a", {
          "rel": "nofollow"
        }, [page])
      })]);
    };
  }
});
const KEYCODE = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};
const Options = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    changeSize: Function,
    quickGo: Function,
    selectComponentClass: PropTypes.any,
    current: Number,
    pageSizeOptions: PropTypes.array.def(["10", "20", "50", "100"]),
    pageSize: Number,
    buildOptionText: Function,
    locale: PropTypes.object,
    rootPrefixCls: String,
    selectPrefixCls: String,
    goButton: PropTypes.any
  },
  setup(props) {
    const goInputText = ref("");
    const validValue = computed(() => {
      return !goInputText.value || isNaN(goInputText.value) ? void 0 : Number(goInputText.value);
    });
    const defaultBuildOptionText = (opt) => {
      return `${opt.value} ${props.locale.items_per_page}`;
    };
    const handleChange = (e) => {
      const {
        value
      } = e.target;
      if (goInputText.value === value)
        return;
      goInputText.value = value;
    };
    const handleBlur = (e) => {
      const {
        goButton,
        quickGo,
        rootPrefixCls
      } = props;
      if (goButton || goInputText.value === "") {
        return;
      }
      if (e.relatedTarget && (e.relatedTarget.className.indexOf(`${rootPrefixCls}-item-link`) >= 0 || e.relatedTarget.className.indexOf(`${rootPrefixCls}-item`) >= 0)) {
        goInputText.value = "";
        return;
      } else {
        quickGo(validValue.value);
        goInputText.value = "";
      }
    };
    const go = (e) => {
      if (goInputText.value === "") {
        return;
      }
      if (e.keyCode === KEYCODE.ENTER || e.type === "click") {
        props.quickGo(validValue.value);
        goInputText.value = "";
      }
    };
    const pageSizeOptions = computed(() => {
      const {
        pageSize,
        pageSizeOptions: pageSizeOptions2
      } = props;
      if (pageSizeOptions2.some((option) => option.toString() === pageSize.toString())) {
        return pageSizeOptions2;
      }
      return pageSizeOptions2.concat([pageSize.toString()]).sort((a, b) => {
        const numberA = isNaN(Number(a)) ? 0 : Number(a);
        const numberB = isNaN(Number(b)) ? 0 : Number(b);
        return numberA - numberB;
      });
    });
    return () => {
      const {
        rootPrefixCls,
        locale,
        changeSize,
        quickGo,
        goButton,
        selectComponentClass: Select2,
        selectPrefixCls,
        pageSize,
        disabled
      } = props;
      const prefixCls = `${rootPrefixCls}-options`;
      let changeSelect = null;
      let goInput = null;
      let gotoButton = null;
      if (!changeSize && !quickGo) {
        return null;
      }
      if (changeSize && Select2) {
        const buildOptionText = props.buildOptionText || defaultBuildOptionText;
        const options = pageSizeOptions.value.map((opt, i) => createVNode(Select2.Option, {
          "key": i,
          "value": opt
        }, {
          default: () => [buildOptionText({
            value: opt
          })]
        }));
        changeSelect = createVNode(Select2, {
          "disabled": disabled,
          "prefixCls": selectPrefixCls,
          "showSearch": false,
          "class": `${prefixCls}-size-changer`,
          "optionLabelProp": "children",
          "value": (pageSize || pageSizeOptions.value[0]).toString(),
          "onChange": (value) => changeSize(Number(value)),
          "getPopupContainer": (triggerNode) => triggerNode.parentNode
        }, {
          default: () => [options]
        });
      }
      if (quickGo) {
        if (goButton) {
          gotoButton = typeof goButton === "boolean" ? createVNode("button", {
            "type": "button",
            "onClick": go,
            "onKeyup": go,
            "disabled": disabled,
            "class": `${prefixCls}-quick-jumper-button`
          }, [locale.jump_to_confirm]) : createVNode("span", {
            "onClick": go,
            "onKeyup": go
          }, [goButton]);
        }
        goInput = createVNode("div", {
          "class": `${prefixCls}-quick-jumper`
        }, [locale.jump_to, createVNode(BaseInput, {
          "disabled": disabled,
          "type": "text",
          "value": goInputText.value,
          "onInput": handleChange,
          "onChange": handleChange,
          "onKeyup": go,
          "onBlur": handleBlur
        }, null), locale.page, gotoButton]);
      }
      return createVNode("li", {
        "class": `${prefixCls}`
      }, [changeSelect, goInput]);
    };
  }
});
const LOCALE = {
  // Options.jsx
  items_per_page: "\u6761/\u9875",
  jump_to: "\u8DF3\u81F3",
  jump_to_confirm: "\u786E\u5B9A",
  page: "\u9875",
  // Pagination.jsx
  prev_page: "\u4E0A\u4E00\u9875",
  next_page: "\u4E0B\u4E00\u9875",
  prev_5: "\u5411\u524D 5 \u9875",
  next_5: "\u5411\u540E 5 \u9875",
  prev_3: "\u5411\u524D 3 \u9875",
  next_3: "\u5411\u540E 3 \u9875"
};
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
function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function defaultItemRender(_ref) {
  let {
    originalElement
  } = _ref;
  return originalElement;
}
function calculatePage(p, state, props) {
  const pageSize = typeof p === "undefined" ? state.statePageSize : p;
  return Math.floor((props.total - 1) / pageSize) + 1;
}
const VcPagination = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Pagination",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: PropTypes.string.def("rc-pagination"),
    selectPrefixCls: PropTypes.string.def("rc-select"),
    current: Number,
    defaultCurrent: PropTypes.number.def(1),
    total: PropTypes.number.def(0),
    pageSize: Number,
    defaultPageSize: PropTypes.number.def(10),
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    showSizeChanger: {
      type: Boolean,
      default: void 0
    },
    showLessItems: {
      type: Boolean,
      default: false
    },
    // showSizeChange: PropTypes.func.def(noop),
    selectComponentClass: PropTypes.any,
    showPrevNextJumpers: {
      type: Boolean,
      default: true
    },
    showQuickJumper: PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object]).def(false),
    showTitle: {
      type: Boolean,
      default: true
    },
    pageSizeOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    buildOptionText: Function,
    showTotal: Function,
    simple: {
      type: Boolean,
      default: void 0
    },
    locale: PropTypes.object.def(LOCALE),
    itemRender: PropTypes.func.def(defaultItemRender),
    prevIcon: PropTypes.any,
    nextIcon: PropTypes.any,
    jumpPrevIcon: PropTypes.any,
    jumpNextIcon: PropTypes.any,
    totalBoundaryShowSizeChanger: PropTypes.number.def(50)
  },
  data() {
    const props = this.$props;
    let current = firstNotUndefined([this.current, this.defaultCurrent]);
    const pageSize = firstNotUndefined([this.pageSize, this.defaultPageSize]);
    current = Math.min(current, calculatePage(pageSize, void 0, props));
    return {
      stateCurrent: current,
      stateCurrentInputValue: current,
      statePageSize: pageSize
    };
  },
  watch: {
    current(val) {
      this.setState({
        stateCurrent: val,
        stateCurrentInputValue: val
      });
    },
    pageSize(val) {
      const newState = {};
      let current = this.stateCurrent;
      const newCurrent = calculatePage(val, this.$data, this.$props);
      current = current > newCurrent ? newCurrent : current;
      if (!hasProp(this, "current")) {
        newState.stateCurrent = current;
        newState.stateCurrentInputValue = current;
      }
      newState.statePageSize = val;
      this.setState(newState);
    },
    stateCurrent(_val, oldValue) {
      this.$nextTick(() => {
        if (this.$refs.paginationNode) {
          const lastCurrentNode = this.$refs.paginationNode.querySelector(`.${this.prefixCls}-item-${oldValue}`);
          if (lastCurrentNode && (void 0).activeElement === lastCurrentNode) {
            lastCurrentNode.blur();
          }
        }
      });
    },
    total() {
      const newState = {};
      const newCurrent = calculatePage(this.pageSize, this.$data, this.$props);
      if (hasProp(this, "current")) {
        const current = Math.min(this.current, newCurrent);
        newState.stateCurrent = current;
        newState.stateCurrentInputValue = current;
      } else {
        let current = this.stateCurrent;
        if (current === 0 && newCurrent > 0) {
          current = 1;
        } else {
          current = Math.min(this.stateCurrent, newCurrent);
        }
        newState.stateCurrent = current;
      }
      this.setState(newState);
    }
  },
  methods: {
    getJumpPrevPage() {
      return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
    },
    getJumpNextPage() {
      return Math.min(calculatePage(void 0, this.$data, this.$props), this.stateCurrent + (this.showLessItems ? 3 : 5));
    },
    getItemIcon(icon, label) {
      const {
        prefixCls
      } = this.$props;
      const iconNode = getComponent(this, icon, this.$props) || createVNode("button", {
        "type": "button",
        "aria-label": label,
        "class": `${prefixCls}-item-link`
      }, null);
      return iconNode;
    },
    getValidValue(e) {
      const inputValue = e.target.value;
      const allPages = calculatePage(void 0, this.$data, this.$props);
      const {
        stateCurrentInputValue
      } = this.$data;
      let value;
      if (inputValue === "") {
        value = inputValue;
      } else if (isNaN(Number(inputValue))) {
        value = stateCurrentInputValue;
      } else if (inputValue >= allPages) {
        value = allPages;
      } else {
        value = Number(inputValue);
      }
      return value;
    },
    isValid(page) {
      return isInteger(page) && page !== this.stateCurrent;
    },
    shouldDisplayQuickJumper() {
      const {
        showQuickJumper,
        pageSize,
        total
      } = this.$props;
      if (total <= pageSize) {
        return false;
      }
      return showQuickJumper;
    },
    // calculatePage (p) {
    //   let pageSize = p
    //   if (typeof pageSize === 'undefined') {
    //     pageSize = this.statePageSize
    //   }
    //   return Math.floor((this.total - 1) / pageSize) + 1
    // },
    handleKeyDown(event) {
      if (event.keyCode === KEYCODE.ARROW_UP || event.keyCode === KEYCODE.ARROW_DOWN) {
        event.preventDefault();
      }
    },
    handleKeyUp(e) {
      const value = this.getValidValue(e);
      const stateCurrentInputValue = this.stateCurrentInputValue;
      if (value !== stateCurrentInputValue) {
        this.setState({
          stateCurrentInputValue: value
        });
      }
      if (e.keyCode === KEYCODE.ENTER) {
        this.handleChange(value);
      } else if (e.keyCode === KEYCODE.ARROW_UP) {
        this.handleChange(value - 1);
      } else if (e.keyCode === KEYCODE.ARROW_DOWN) {
        this.handleChange(value + 1);
      }
    },
    changePageSize(size) {
      let current = this.stateCurrent;
      const preCurrent = current;
      const newCurrent = calculatePage(size, this.$data, this.$props);
      current = current > newCurrent ? newCurrent : current;
      if (newCurrent === 0) {
        current = this.stateCurrent;
      }
      if (typeof size === "number") {
        if (!hasProp(this, "pageSize")) {
          this.setState({
            statePageSize: size
          });
        }
        if (!hasProp(this, "current")) {
          this.setState({
            stateCurrent: current,
            stateCurrentInputValue: current
          });
        }
      }
      this.__emit("update:pageSize", size);
      if (current !== preCurrent) {
        this.__emit("update:current", current);
      }
      this.__emit("showSizeChange", current, size);
      this.__emit("change", current, size);
    },
    handleChange(p) {
      const {
        disabled
      } = this.$props;
      let page = p;
      if (this.isValid(page) && !disabled) {
        const currentPage = calculatePage(void 0, this.$data, this.$props);
        if (page > currentPage) {
          page = currentPage;
        } else if (page < 1) {
          page = 1;
        }
        if (!hasProp(this, "current")) {
          this.setState({
            stateCurrent: page,
            stateCurrentInputValue: page
          });
        }
        this.__emit("update:current", page);
        this.__emit("change", page, this.statePageSize);
        return page;
      }
      return this.stateCurrent;
    },
    prev() {
      if (this.hasPrev()) {
        this.handleChange(this.stateCurrent - 1);
      }
    },
    next() {
      if (this.hasNext()) {
        this.handleChange(this.stateCurrent + 1);
      }
    },
    jumpPrev() {
      this.handleChange(this.getJumpPrevPage());
    },
    jumpNext() {
      this.handleChange(this.getJumpNextPage());
    },
    hasPrev() {
      return this.stateCurrent > 1;
    },
    hasNext() {
      return this.stateCurrent < calculatePage(void 0, this.$data, this.$props);
    },
    getShowSizeChanger() {
      const {
        showSizeChanger,
        total,
        totalBoundaryShowSizeChanger
      } = this.$props;
      if (typeof showSizeChanger !== "undefined") {
        return showSizeChanger;
      }
      return total > totalBoundaryShowSizeChanger;
    },
    runIfEnter(event, callback) {
      if (event.key === "Enter" || event.charCode === 13) {
        event.preventDefault();
        for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParams[_key - 2] = arguments[_key];
        }
        callback(...restParams);
      }
    },
    runIfEnterPrev(event) {
      this.runIfEnter(event, this.prev);
    },
    runIfEnterNext(event) {
      this.runIfEnter(event, this.next);
    },
    runIfEnterJumpPrev(event) {
      this.runIfEnter(event, this.jumpPrev);
    },
    runIfEnterJumpNext(event) {
      this.runIfEnter(event, this.jumpNext);
    },
    handleGoTO(event) {
      if (event.keyCode === KEYCODE.ENTER || event.type === "click") {
        this.handleChange(this.stateCurrentInputValue);
      }
    },
    renderPrev(prevPage) {
      const {
        itemRender
      } = this.$props;
      const prevButton = itemRender({
        page: prevPage,
        type: "prev",
        originalElement: this.getItemIcon("prevIcon", "prev page")
      });
      const disabled = !this.hasPrev();
      return isValidElement(prevButton) ? cloneElement(prevButton, disabled ? {
        disabled
      } : {}) : prevButton;
    },
    renderNext(nextPage) {
      const {
        itemRender
      } = this.$props;
      const nextButton = itemRender({
        page: nextPage,
        type: "next",
        originalElement: this.getItemIcon("nextIcon", "next page")
      });
      const disabled = !this.hasNext();
      return isValidElement(nextButton) ? cloneElement(nextButton, disabled ? {
        disabled
      } : {}) : nextButton;
    }
  },
  render() {
    const {
      prefixCls,
      disabled,
      hideOnSinglePage,
      total,
      locale,
      showQuickJumper,
      showLessItems,
      showTitle,
      showTotal,
      simple,
      itemRender,
      showPrevNextJumpers,
      jumpPrevIcon,
      jumpNextIcon,
      selectComponentClass,
      selectPrefixCls,
      pageSizeOptions
    } = this.$props;
    const {
      stateCurrent,
      statePageSize
    } = this;
    const _a = splitAttrs(this.$attrs).extraAttrs, {
      class: className
    } = _a, restAttrs = __rest$1(_a, ["class"]);
    if (hideOnSinglePage === true && this.total <= statePageSize) {
      return null;
    }
    const allPages = calculatePage(void 0, this.$data, this.$props);
    const pagerList = [];
    let jumpPrev = null;
    let jumpNext = null;
    let firstPager = null;
    let lastPager = null;
    let gotoButton = null;
    const goButton = showQuickJumper && showQuickJumper.goButton;
    const pageBufferSize = showLessItems ? 1 : 2;
    const prevPage = stateCurrent - 1 > 0 ? stateCurrent - 1 : 0;
    const nextPage = stateCurrent + 1 < allPages ? stateCurrent + 1 : allPages;
    const hasPrev = this.hasPrev();
    const hasNext = this.hasNext();
    if (simple) {
      if (goButton) {
        if (typeof goButton === "boolean") {
          gotoButton = createVNode("button", {
            "type": "button",
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [locale.jump_to_confirm]);
        } else {
          gotoButton = createVNode("span", {
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [goButton]);
        }
        gotoButton = createVNode("li", {
          "title": showTitle ? `${locale.jump_to}${stateCurrent}/${allPages}` : null,
          "class": `${prefixCls}-simple-pager`
        }, [gotoButton]);
      }
      return createVNode("ul", _objectSpread$2({
        "class": classNames(`${prefixCls} ${prefixCls}-simple`, {
          [`${prefixCls}-disabled`]: disabled
        }, className)
      }, restAttrs), [createVNode("li", {
        "title": showTitle ? locale.prev_page : null,
        "onClick": this.prev,
        "tabindex": hasPrev ? 0 : null,
        "onKeypress": this.runIfEnterPrev,
        "class": classNames(`${prefixCls}-prev`, {
          [`${prefixCls}-disabled`]: !hasPrev
        }),
        "aria-disabled": !hasPrev
      }, [this.renderPrev(prevPage)]), createVNode("li", {
        "title": showTitle ? `${stateCurrent}/${allPages}` : null,
        "class": `${prefixCls}-simple-pager`
      }, [createVNode(BaseInput, {
        "type": "text",
        "value": this.stateCurrentInputValue,
        "disabled": disabled,
        "onKeydown": this.handleKeyDown,
        "onKeyup": this.handleKeyUp,
        "onInput": this.handleKeyUp,
        "onChange": this.handleKeyUp,
        "size": "3"
      }, null), createVNode("span", {
        "class": `${prefixCls}-slash`
      }, [createTextVNode("\uFF0F")]), allPages]), createVNode("li", {
        "title": showTitle ? locale.next_page : null,
        "onClick": this.next,
        "tabindex": hasNext ? 0 : null,
        "onKeypress": this.runIfEnterNext,
        "class": classNames(`${prefixCls}-next`, {
          [`${prefixCls}-disabled`]: !hasNext
        }),
        "aria-disabled": !hasNext
      }, [this.renderNext(nextPage)]), gotoButton]);
    }
    if (allPages <= 3 + pageBufferSize * 2) {
      const pagerProps = {
        locale,
        rootPrefixCls: prefixCls,
        showTitle,
        itemRender,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter
      };
      if (!allPages) {
        pagerList.push(createVNode(Pager, _objectSpread$2(_objectSpread$2({}, pagerProps), {}, {
          "key": "noPager",
          "page": 1,
          "class": `${prefixCls}-item-disabled`
        }), null));
      }
      for (let i = 1; i <= allPages; i += 1) {
        const active = stateCurrent === i;
        pagerList.push(createVNode(Pager, _objectSpread$2(_objectSpread$2({}, pagerProps), {}, {
          "key": i,
          "page": i,
          "active": active
        }), null));
      }
    } else {
      const prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
      const nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;
      if (showPrevNextJumpers) {
        jumpPrev = createVNode("li", {
          "title": this.showTitle ? prevItemTitle : null,
          "key": "prev",
          "onClick": this.jumpPrev,
          "tabindex": "0",
          "onKeypress": this.runIfEnterJumpPrev,
          "class": classNames(`${prefixCls}-jump-prev`, {
            [`${prefixCls}-jump-prev-custom-icon`]: !!jumpPrevIcon
          })
        }, [itemRender({
          page: this.getJumpPrevPage(),
          type: "jump-prev",
          originalElement: this.getItemIcon("jumpPrevIcon", "prev page")
        })]);
        jumpNext = createVNode("li", {
          "title": this.showTitle ? nextItemTitle : null,
          "key": "next",
          "tabindex": "0",
          "onClick": this.jumpNext,
          "onKeypress": this.runIfEnterJumpNext,
          "class": classNames(`${prefixCls}-jump-next`, {
            [`${prefixCls}-jump-next-custom-icon`]: !!jumpNextIcon
          })
        }, [itemRender({
          page: this.getJumpNextPage(),
          type: "jump-next",
          originalElement: this.getItemIcon("jumpNextIcon", "next page")
        })]);
      }
      lastPager = createVNode(Pager, {
        "locale": locale,
        "last": true,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": allPages,
        "page": allPages,
        "active": false,
        "showTitle": showTitle,
        "itemRender": itemRender
      }, null);
      firstPager = createVNode(Pager, {
        "locale": locale,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": 1,
        "page": 1,
        "active": false,
        "showTitle": showTitle,
        "itemRender": itemRender
      }, null);
      let left = Math.max(1, stateCurrent - pageBufferSize);
      let right = Math.min(stateCurrent + pageBufferSize, allPages);
      if (stateCurrent - 1 <= pageBufferSize) {
        right = 1 + pageBufferSize * 2;
      }
      if (allPages - stateCurrent <= pageBufferSize) {
        left = allPages - pageBufferSize * 2;
      }
      for (let i = left; i <= right; i += 1) {
        const active = stateCurrent === i;
        pagerList.push(createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": i,
          "page": i,
          "active": active,
          "showTitle": showTitle,
          "itemRender": itemRender
        }, null));
      }
      if (stateCurrent - 1 >= pageBufferSize * 2 && stateCurrent !== 1 + 2) {
        pagerList[0] = createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": left,
          "page": left,
          "class": `${prefixCls}-item-after-jump-prev`,
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.unshift(jumpPrev);
      }
      if (allPages - stateCurrent >= pageBufferSize * 2 && stateCurrent !== allPages - 2) {
        pagerList[pagerList.length - 1] = createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": right,
          "page": right,
          "class": `${prefixCls}-item-before-jump-next`,
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.push(jumpNext);
      }
      if (left !== 1) {
        pagerList.unshift(firstPager);
      }
      if (right !== allPages) {
        pagerList.push(lastPager);
      }
    }
    let totalText = null;
    if (showTotal) {
      totalText = createVNode("li", {
        "class": `${prefixCls}-total-text`
      }, [showTotal(total, [total === 0 ? 0 : (stateCurrent - 1) * statePageSize + 1, stateCurrent * statePageSize > total ? total : stateCurrent * statePageSize])]);
    }
    const prevDisabled = !hasPrev || !allPages;
    const nextDisabled = !hasNext || !allPages;
    const buildOptionText = this.buildOptionText || this.$slots.buildOptionText;
    return createVNode("ul", _objectSpread$2(_objectSpread$2({
      "unselectable": "on",
      "ref": "paginationNode"
    }, restAttrs), {}, {
      "class": classNames({
        [`${prefixCls}`]: true,
        [`${prefixCls}-disabled`]: disabled
      }, className)
    }), [totalText, createVNode("li", {
      "title": showTitle ? locale.prev_page : null,
      "onClick": this.prev,
      "tabindex": prevDisabled ? null : 0,
      "onKeypress": this.runIfEnterPrev,
      "class": classNames(`${prefixCls}-prev`, {
        [`${prefixCls}-disabled`]: prevDisabled
      }),
      "aria-disabled": prevDisabled
    }, [this.renderPrev(prevPage)]), pagerList, createVNode("li", {
      "title": showTitle ? locale.next_page : null,
      "onClick": this.next,
      "tabindex": nextDisabled ? null : 0,
      "onKeypress": this.runIfEnterNext,
      "class": classNames(`${prefixCls}-next`, {
        [`${prefixCls}-disabled`]: nextDisabled
      }),
      "aria-disabled": nextDisabled
    }, [this.renderNext(nextPage)]), createVNode(Options, {
      "disabled": disabled,
      "locale": locale,
      "rootPrefixCls": prefixCls,
      "selectComponentClass": selectComponentClass,
      "selectPrefixCls": selectPrefixCls,
      "changeSize": this.getShowSizeChanger() ? this.changePageSize : null,
      "current": stateCurrent,
      "pageSize": statePageSize,
      "pageSizeOptions": pageSizeOptions,
      "buildOptionText": buildOptionText || null,
      "quickGo": this.shouldDisplayQuickJumper() ? this.handleChange : null,
      "goButton": goButton
    }, null)]);
  }
});
const genPaginationDisabledStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-disabled`]: {
      "&, &:hover": {
        cursor: "not-allowed",
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      "&:focus-visible": {
        cursor: "not-allowed",
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: "not-allowed"
        }
      }
    },
    [`&${componentCls}-disabled`]: {
      cursor: "not-allowed",
      [`&${componentCls}-mini`]: {
        [`
          &:hover ${componentCls}-item:not(${componentCls}-item-active),
          &:active ${componentCls}-item:not(${componentCls}-item-active),
          &:hover ${componentCls}-item-link,
          &:active ${componentCls}-item-link
        `]: {
          backgroundColor: "transparent"
        }
      },
      [`${componentCls}-item`]: {
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        a: {
          color: token.colorTextDisabled,
          backgroundColor: "transparent",
          border: "none",
          cursor: "not-allowed"
        },
        "&-active": {
          borderColor: token.colorBorder,
          backgroundColor: token.paginationItemDisabledBgActive,
          "&:hover, &:active": {
            backgroundColor: token.paginationItemDisabledBgActive
          },
          a: {
            color: token.paginationItemDisabledColorActive
          }
        }
      },
      [`${componentCls}-item-link`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        [`${componentCls}-simple&`]: {
          backgroundColor: "transparent",
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      },
      [`${componentCls}-simple-pager`]: {
        color: token.colorTextDisabled
      },
      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        [`${componentCls}-item-link-icon`]: {
          opacity: 0
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 1
        }
      }
    },
    [`&${componentCls}-simple`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&${componentCls}-disabled ${componentCls}-item-link`]: {
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      }
    }
  };
};
const genPaginationMiniStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`&${componentCls}-mini ${componentCls}-total-text, &${componentCls}-mini ${componentCls}-simple-pager`]: {
      height: token.paginationItemSizeSM,
      lineHeight: `${token.paginationItemSizeSM}px`
    },
    [`&${componentCls}-mini ${componentCls}-item`]: {
      minWidth: token.paginationItemSizeSM,
      height: token.paginationItemSizeSM,
      margin: 0,
      lineHeight: `${token.paginationItemSizeSM - 2}px`
    },
    [`&${componentCls}-mini ${componentCls}-item:not(${componentCls}-item-active)`]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&:hover": {
        backgroundColor: token.colorBgTextHover
      },
      "&:active": {
        backgroundColor: token.colorBgTextActive
      }
    },
    [`&${componentCls}-mini ${componentCls}-prev, &${componentCls}-mini ${componentCls}-next`]: {
      minWidth: token.paginationItemSizeSM,
      height: token.paginationItemSizeSM,
      margin: 0,
      lineHeight: `${token.paginationItemSizeSM}px`,
      [`&:hover ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextHover
      },
      [`&:active ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextActive
      },
      [`&${componentCls}-disabled:hover ${componentCls}-item-link`]: {
        backgroundColor: "transparent"
      }
    },
    [`
    &${componentCls}-mini ${componentCls}-prev ${componentCls}-item-link,
    &${componentCls}-mini ${componentCls}-next ${componentCls}-item-link
    `]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&::after": {
        height: token.paginationItemSizeSM,
        lineHeight: `${token.paginationItemSizeSM}px`
      }
    },
    [`&${componentCls}-mini ${componentCls}-jump-prev, &${componentCls}-mini ${componentCls}-jump-next`]: {
      height: token.paginationItemSizeSM,
      marginInlineEnd: 0,
      lineHeight: `${token.paginationItemSizeSM}px`
    },
    [`&${componentCls}-mini ${componentCls}-options`]: {
      marginInlineStart: token.paginationMiniOptionsMarginInlineStart,
      [`&-size-changer`]: {
        top: token.paginationMiniOptionsSizeChangerTop
      },
      [`&-quick-jumper`]: {
        height: token.paginationItemSizeSM,
        lineHeight: `${token.paginationItemSizeSM}px`,
        input: _extends(_extends({}, genInputSmallStyle(token)), {
          width: token.paginationMiniQuickJumperInputWidth,
          height: token.controlHeightSM
        })
      }
    }
  };
};
const genPaginationSimpleStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`
    &${componentCls}-simple ${componentCls}-prev,
    &${componentCls}-simple ${componentCls}-next
    `]: {
      height: token.paginationItemSizeSM,
      lineHeight: `${token.paginationItemSizeSM}px`,
      verticalAlign: "top",
      [`${componentCls}-item-link`]: {
        height: token.paginationItemSizeSM,
        backgroundColor: "transparent",
        border: 0,
        "&:hover": {
          backgroundColor: token.colorBgTextHover
        },
        "&:active": {
          backgroundColor: token.colorBgTextActive
        },
        "&::after": {
          height: token.paginationItemSizeSM,
          lineHeight: `${token.paginationItemSizeSM}px`
        }
      }
    },
    [`&${componentCls}-simple ${componentCls}-simple-pager`]: {
      display: "inline-block",
      height: token.paginationItemSizeSM,
      marginInlineEnd: token.marginXS,
      input: {
        boxSizing: "border-box",
        height: "100%",
        marginInlineEnd: token.marginXS,
        padding: `0 ${token.paginationItemPaddingInline}px`,
        textAlign: "center",
        backgroundColor: token.paginationItemInputBg,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        outline: "none",
        transition: `border-color ${token.motionDurationMid}`,
        color: "inherit",
        "&:hover": {
          borderColor: token.colorPrimary
        },
        "&:focus": {
          borderColor: token.colorPrimaryHover,
          boxShadow: `${token.inputOutlineOffset}px 0 ${token.controlOutlineWidth}px ${token.controlOutline}`
        },
        "&[disabled]": {
          color: token.colorTextDisabled,
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          cursor: "not-allowed"
        }
      }
    }
  };
};
const genPaginationJumpStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
      outline: 0,
      [`${componentCls}-item-container`]: {
        position: "relative",
        [`${componentCls}-item-link-icon`]: {
          color: token.colorPrimary,
          fontSize: token.fontSizeSM,
          opacity: 0,
          transition: `all ${token.motionDurationMid}`,
          "&-svg": {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: "auto"
          }
        },
        [`${componentCls}-item-ellipsis`]: {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: "block",
          margin: "auto",
          color: token.colorTextDisabled,
          fontFamily: "Arial, Helvetica, sans-serif",
          letterSpacing: token.paginationEllipsisLetterSpacing,
          textAlign: "center",
          textIndent: token.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${token.motionDurationMid}`
        }
      },
      "&:hover": {
        [`${componentCls}-item-link-icon`]: {
          opacity: 1
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 0
        }
      },
      "&:focus-visible": _extends({
        [`${componentCls}-item-link-icon`]: {
          opacity: 1
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 0
        }
      }, genFocusOutline(token))
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      marginInlineEnd: token.marginXS
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-next,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      display: "inline-block",
      minWidth: token.paginationItemSize,
      height: token.paginationItemSize,
      color: token.colorText,
      fontFamily: token.paginationFontFamily,
      lineHeight: `${token.paginationItemSize}px`,
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      borderRadius: token.borderRadius,
      cursor: "pointer",
      transition: `all ${token.motionDurationMid}`
    },
    [`${componentCls}-prev, ${componentCls}-next`]: {
      fontFamily: "Arial, Helvetica, sans-serif",
      outline: 0,
      button: {
        color: token.colorText,
        cursor: "pointer",
        userSelect: "none"
      },
      [`${componentCls}-item-link`]: {
        display: "block",
        width: "100%",
        height: "100%",
        padding: 0,
        fontSize: token.fontSizeSM,
        textAlign: "center",
        backgroundColor: "transparent",
        border: `${token.lineWidth}px ${token.lineType} transparent`,
        borderRadius: token.borderRadius,
        outline: "none",
        transition: `all ${token.motionDurationMid}`
      },
      [`&:focus-visible ${componentCls}-item-link`]: _extends({}, genFocusOutline(token)),
      [`&:hover ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextHover
      },
      [`&:active ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextActive
      },
      [`&${componentCls}-disabled:hover`]: {
        [`${componentCls}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`${componentCls}-slash`]: {
      marginInlineEnd: token.paginationSlashMarginInlineEnd,
      marginInlineStart: token.paginationSlashMarginInlineStart
    },
    [`${componentCls}-options`]: {
      display: "inline-block",
      marginInlineStart: token.margin,
      verticalAlign: "middle",
      "&-size-changer.-select": {
        display: "inline-block",
        width: "auto"
      },
      "&-quick-jumper": {
        display: "inline-block",
        height: token.controlHeight,
        marginInlineStart: token.marginXS,
        lineHeight: `${token.controlHeight}px`,
        verticalAlign: "top",
        input: _extends(_extends({}, genBasicInputStyle(token)), {
          width: token.controlHeightLG * 1.25,
          height: token.controlHeight,
          boxSizing: "border-box",
          margin: 0,
          marginInlineStart: token.marginXS,
          marginInlineEnd: token.marginXS
        })
      }
    }
  };
};
const genPaginationItemStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-item`]: _extends(_extends({
      display: "inline-block",
      minWidth: token.paginationItemSize,
      height: token.paginationItemSize,
      marginInlineEnd: token.marginXS,
      fontFamily: token.paginationFontFamily,
      lineHeight: `${token.paginationItemSize - 2}px`,
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      backgroundColor: "transparent",
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      borderRadius: token.borderRadius,
      outline: 0,
      cursor: "pointer",
      userSelect: "none",
      a: {
        display: "block",
        padding: `0 ${token.paginationItemPaddingInline}px`,
        color: token.colorText,
        transition: "none",
        "&:hover": {
          textDecoration: "none"
        }
      },
      [`&:not(${componentCls}-item-active)`]: {
        "&:hover": {
          transition: `all ${token.motionDurationMid}`,
          backgroundColor: token.colorBgTextHover
        },
        "&:active": {
          backgroundColor: token.colorBgTextActive
        }
      }
    }, genFocusStyle(token)), {
      "&-active": {
        fontWeight: token.paginationFontWeightActive,
        backgroundColor: token.paginationItemBgActive,
        borderColor: token.colorPrimary,
        a: {
          color: token.colorPrimary
        },
        "&:hover": {
          borderColor: token.colorPrimaryHover
        },
        "&:hover a": {
          color: token.colorPrimaryHover
        }
      }
    })
  };
};
const genPaginationStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: _extends(_extends(_extends(_extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), {
      "ul, ol": {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        overflow: "hidden",
        visibility: "hidden",
        content: '""'
      },
      [`${componentCls}-total-text`]: {
        display: "inline-block",
        height: token.paginationItemSize,
        marginInlineEnd: token.marginXS,
        lineHeight: `${token.paginationItemSize - 2}px`,
        verticalAlign: "middle"
      }
    }), genPaginationItemStyle(token)), genPaginationJumpStyle(token)), genPaginationSimpleStyle(token)), genPaginationMiniStyle(token)), genPaginationDisabledStyle(token)), {
      // media query style
      [`@media only screen and (max-width: ${token.screenLG}px)`]: {
        [`${componentCls}-item`]: {
          "&-after-jump-prev, &-before-jump-next": {
            display: "none"
          }
        }
      },
      [`@media only screen and (max-width: ${token.screenSM}px)`]: {
        [`${componentCls}-options`]: {
          display: "none"
        }
      }
    }),
    // rtl style
    [`&${token.componentCls}-rtl`]: {
      direction: "rtl"
    }
  };
};
const genBorderedStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}${componentCls}-disabled`]: {
      "&, &:hover": {
        [`${componentCls}-item-link`]: {
          borderColor: token.colorBorder
        }
      },
      "&:focus-visible": {
        [`${componentCls}-item-link`]: {
          borderColor: token.colorBorder
        }
      },
      [`${componentCls}-item, ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        [`&:hover:not(${componentCls}-item-active)`]: {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          a: {
            color: token.colorTextDisabled
          }
        },
        [`&${componentCls}-item-active`]: {
          backgroundColor: token.paginationItemDisabledBgActive
        }
      },
      [`${componentCls}-prev, ${componentCls}-next`]: {
        "&:hover button": {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          color: token.colorTextDisabled
        },
        [`${componentCls}-item-link`]: {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder
        }
      }
    },
    [componentCls]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        "&:hover button": {
          borderColor: token.colorPrimaryHover,
          backgroundColor: token.paginationItemBg
        },
        [`${componentCls}-item-link`]: {
          backgroundColor: token.paginationItemLinkBg,
          borderColor: token.colorBorder
        },
        [`&:hover ${componentCls}-item-link`]: {
          borderColor: token.colorPrimary,
          backgroundColor: token.paginationItemBg,
          color: token.colorPrimary
        },
        [`&${componentCls}-disabled`]: {
          [`${componentCls}-item-link`]: {
            borderColor: token.colorBorder,
            color: token.colorTextDisabled
          }
        }
      },
      [`${componentCls}-item`]: {
        backgroundColor: token.paginationItemBg,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        [`&:hover:not(${componentCls}-item-active)`]: {
          borderColor: token.colorPrimary,
          backgroundColor: token.paginationItemBg,
          a: {
            color: token.colorPrimary
          }
        },
        "&-active": {
          borderColor: token.colorPrimary
        }
      }
    }
  };
};
const useStyle = genComponentStyleHook("Pagination", (token) => {
  const paginationToken = merge(token, {
    paginationItemSize: token.controlHeight,
    paginationFontFamily: token.fontFamily,
    paginationItemBg: token.colorBgContainer,
    paginationItemBgActive: token.colorBgContainer,
    paginationFontWeightActive: token.fontWeightStrong,
    paginationItemSizeSM: token.controlHeightSM,
    paginationItemInputBg: token.colorBgContainer,
    paginationMiniOptionsSizeChangerTop: 0,
    paginationItemDisabledBgActive: token.controlItemBgActiveDisabled,
    paginationItemDisabledColorActive: token.colorTextDisabled,
    paginationItemLinkBg: token.colorBgContainer,
    inputOutlineOffset: "0 0",
    paginationMiniOptionsMarginInlineStart: token.marginXXS / 2,
    paginationMiniQuickJumperInputWidth: token.controlHeightLG * 1.1,
    paginationItemPaddingInline: token.marginXXS * 1.5,
    paginationEllipsisLetterSpacing: token.marginXXS / 2,
    paginationSlashMarginInlineStart: token.marginXXS,
    paginationSlashMarginInlineEnd: token.marginSM,
    paginationEllipsisTextIndent: "0.13em"
    // magic for ui experience
  }, initInputToken(token));
  return [genPaginationStyle(paginationToken), token.wireframe && genBorderedStyle(paginationToken)];
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
const paginationProps = () => ({
  total: Number,
  defaultCurrent: Number,
  disabled: booleanType(),
  current: Number,
  defaultPageSize: Number,
  pageSize: Number,
  hideOnSinglePage: booleanType(),
  showSizeChanger: booleanType(),
  pageSizeOptions: arrayType(),
  buildOptionText: functionType(),
  showQuickJumper: someType([Boolean, Object]),
  showTotal: functionType(),
  size: stringType(),
  simple: booleanType(),
  locale: Object,
  prefixCls: String,
  selectPrefixCls: String,
  totalBoundaryShowSizeChanger: Number,
  selectComponentClass: String,
  itemRender: functionType(),
  role: String,
  responsive: Boolean,
  showLessItems: booleanType(),
  onChange: functionType(),
  onShowSizeChange: functionType(),
  "onUpdate:current": functionType(),
  "onUpdate:pageSize": functionType()
});
const Pagination = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "APagination",
  inheritAttrs: false,
  props: paginationProps(),
  // emits: ['change', 'showSizeChange', 'update:current', 'update:pageSize'],
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      configProvider,
      direction,
      size
    } = useConfigInject("pagination", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const selectPrefixCls = computed(() => configProvider.getPrefixCls("select", props.selectPrefixCls));
    const breakpoint = useBreakpoint();
    const [locale] = useLocaleReceiver("Pagination", enUS, toRef(props, "locale"));
    const getIconsProps = (pre) => {
      const ellipsis = createVNode("span", {
        "class": `${pre}-item-ellipsis`
      }, [createTextVNode("\u2022\u2022\u2022")]);
      const prevIcon = createVNode("button", {
        "class": `${pre}-item-link`,
        "type": "button",
        "tabindex": -1
      }, [direction.value === "rtl" ? createVNode(RightOutlined, null, null) : createVNode(LeftOutlined, null, null)]);
      const nextIcon = createVNode("button", {
        "class": `${pre}-item-link`,
        "type": "button",
        "tabindex": -1
      }, [direction.value === "rtl" ? createVNode(LeftOutlined, null, null) : createVNode(RightOutlined, null, null)]);
      const jumpPrevIcon = createVNode("a", {
        "rel": "nofollow",
        "class": `${pre}-item-link`
      }, [createVNode("div", {
        "class": `${pre}-item-container`
      }, [direction.value === "rtl" ? createVNode(DoubleRightOutlined, {
        "class": `${pre}-item-link-icon`
      }, null) : createVNode(DoubleLeftOutlined, {
        "class": `${pre}-item-link-icon`
      }, null), ellipsis])]);
      const jumpNextIcon = createVNode("a", {
        "rel": "nofollow",
        "class": `${pre}-item-link`
      }, [createVNode("div", {
        "class": `${pre}-item-container`
      }, [direction.value === "rtl" ? createVNode(DoubleLeftOutlined, {
        "class": `${pre}-item-link-icon`
      }, null) : createVNode(DoubleRightOutlined, {
        "class": `${pre}-item-link-icon`
      }, null), ellipsis])]);
      return {
        prevIcon,
        nextIcon,
        jumpPrevIcon,
        jumpNextIcon
      };
    };
    return () => {
      var _a;
      const {
        itemRender = slots.itemRender,
        buildOptionText = slots.buildOptionText,
        selectComponentClass,
        responsive
      } = props, restProps = __rest(props, ["itemRender", "buildOptionText", "selectComponentClass", "responsive"]);
      const isSmall = size.value === "small" || !!(((_a = breakpoint.value) === null || _a === void 0 ? void 0 : _a.xs) && !size.value && responsive);
      const paginationProps2 = _extends(_extends(_extends(_extends(_extends({}, restProps), getIconsProps(prefixCls.value)), {
        prefixCls: prefixCls.value,
        selectPrefixCls: selectPrefixCls.value,
        selectComponentClass: selectComponentClass || (isSmall ? MiniSelect : MiddleSelect),
        locale: locale.value,
        buildOptionText
      }), attrs), {
        class: classNames({
          [`${prefixCls.value}-mini`]: isSmall,
          [`${prefixCls.value}-rtl`]: direction.value === "rtl"
        }, attrs.class, hashId.value),
        itemRender
      });
      return wrapSSR(createVNode(VcPagination, paginationProps2, null));
    };
  }
});
const __nuxt_component_6 = withInstall(Pagination);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "invesment-project",
  __ssrInlineRender: true,
  setup(__props) {
    const current = ref(2);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout = __nuxt_component_0;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_typography_title = Title;
      const _component_a_layout_content = LayoutContent;
      const _component_a_button = Button;
      const _component_a_pagination = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-65e92f7d${_scopeId}><div class="bg-cover" data-v-65e92f7d${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, { style: { "padding-top": "116px", "padding-bottom": "62px", "text-align": "center", "justify-content": "center", "background-color": "transparent" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 20 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_typography_title, { class: "t1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`INVESTMENT PROJECT`);
                            } else {
                              return [
                                createTextVNode("INVESTMENT PROJECT")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_typography_title, { class: "t1" }, {
                            default: withCtx(() => [
                              createTextVNode("INVESTMENT PROJECT")
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
                            createTextVNode("INVESTMENT PROJECT")
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
                createVNode("div", { class: "bg-cover" }),
                createVNode(_component_a_row, { style: { "padding-top": "116px", "padding-bottom": "62px", "text-align": "center", "justify-content": "center", "background-color": "transparent" } }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 20 }, {
                      default: withCtx(() => [
                        createVNode(_component_a_typography_title, { class: "t1" }, {
                          default: withCtx(() => [
                            createTextVNode("INVESTMENT PROJECT")
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
      _push(ssrRenderComponent(_component_a_layout_content, { class: "content-container" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    style: { "align-content": "center", "justify-content": "center", "display": "flex", "margin-top": "20px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ width: "160px", margin: "20xp 0 0 " })}" data-v-65e92f7d${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            style: { width: "160px", margin: "20xp 0 0 " }
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "align-content": "center", "justify-content": "center", "display": "flex", "margin-top": "20px" }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          style: { width: "160px", margin: "20xp 0 0 " }
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ padding: "24px", minHeight: "280px" })}" data-v-65e92f7d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, { class: "room-container" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    lg: 10,
                    class: "room-cover"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    lg: 8,
                    class: "room-info"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-65e92f7d${_scopeId3}><h2 data-v-65e92f7d${_scopeId3}>STANDARD ROOM</h2><p data-v-65e92f7d${_scopeId3}> With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. </p>`);
                        _push4(ssrRenderComponent(_component_a_button, { class: "btn-view" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Discover More `);
                            } else {
                              return [
                                createTextVNode(" Discover More ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h2", null, "STANDARD ROOM"),
                            createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                            createVNode(_component_a_button, { class: "btn-view" }, {
                              default: withCtx(() => [
                                createTextVNode(" Discover More ")
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
                      xs: 24,
                      sm: 24,
                      lg: 10,
                      class: "room-cover"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 8,
                      class: "room-info"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h2", null, "STANDARD ROOM"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                          createVNode(_component_a_button, { class: "btn-view" }, {
                            default: withCtx(() => [
                              createTextVNode(" Discover More ")
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
                    xs: 24,
                    sm: 24,
                    lg: 10,
                    class: "room-cover"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    lg: 8,
                    class: "room-info"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-65e92f7d${_scopeId3}><h2 data-v-65e92f7d${_scopeId3}>STANDARD ROOM</h2><p data-v-65e92f7d${_scopeId3}> With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. </p>`);
                        _push4(ssrRenderComponent(_component_a_button, { class: "btn-view" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Discover More `);
                            } else {
                              return [
                                createTextVNode(" Discover More ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h2", null, "STANDARD ROOM"),
                            createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                            createVNode(_component_a_button, { class: "btn-view" }, {
                              default: withCtx(() => [
                                createTextVNode(" Discover More ")
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
                      xs: 24,
                      sm: 24,
                      lg: 10,
                      class: "room-cover"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 8,
                      class: "room-info"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h2", null, "STANDARD ROOM"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                          createVNode(_component_a_button, { class: "btn-view" }, {
                            default: withCtx(() => [
                              createTextVNode(" Discover More ")
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
                    xs: 24,
                    sm: 24,
                    lg: 10,
                    class: "room-cover"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    lg: 8,
                    class: "room-info"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-65e92f7d${_scopeId3}><h2 data-v-65e92f7d${_scopeId3}>STANDARD ROOM</h2><p data-v-65e92f7d${_scopeId3}> With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. </p>`);
                        _push4(ssrRenderComponent(_component_a_button, { class: "btn-view" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Discover More `);
                            } else {
                              return [
                                createTextVNode(" Discover More ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h2", null, "STANDARD ROOM"),
                            createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                            createVNode(_component_a_button, { class: "btn-view" }, {
                              default: withCtx(() => [
                                createTextVNode(" Discover More ")
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
                      xs: 24,
                      sm: 24,
                      lg: 10,
                      class: "room-cover"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 8,
                      class: "room-info"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h2", null, "STANDARD ROOM"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                          createVNode(_component_a_button, { class: "btn-view" }, {
                            default: withCtx(() => [
                              createTextVNode(" Discover More ")
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
            _push2(ssrRenderComponent(_component_a_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    style: { "display": "flex", "justify-content": "center" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_pagination, {
                          class: "pagination",
                          current: unref(current),
                          "onUpdate:current": ($event) => isRef(current) ? current.value = $event : null,
                          total: 50,
                          "show-less-items": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_pagination, {
                            class: "pagination",
                            current: unref(current),
                            "onUpdate:current": ($event) => isRef(current) ? current.value = $event : null,
                            total: 50,
                            "show-less-items": ""
                          }, null, 8, ["current", "onUpdate:current"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "display": "flex", "justify-content": "center" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_pagination, {
                          class: "pagination",
                          current: unref(current),
                          "onUpdate:current": ($event) => isRef(current) ? current.value = $event : null,
                          total: 50,
                          "show-less-items": ""
                        }, null, 8, ["current", "onUpdate:current"])
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
              createVNode(_component_a_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "align-content": "center", "justify-content": "center", "display": "flex", "margin-top": "20px" }
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "",
                        style: { width: "160px", margin: "20xp 0 0 " }
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { style: { padding: "24px", minHeight: "280px" } }, [
                createVNode(_component_a_row, { class: "room-container" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 10,
                      class: "room-cover"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 8,
                      class: "room-info"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h2", null, "STANDARD ROOM"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                          createVNode(_component_a_button, { class: "btn-view" }, {
                            default: withCtx(() => [
                              createTextVNode(" Discover More ")
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
                      xs: 24,
                      sm: 24,
                      lg: 10,
                      class: "room-cover"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 8,
                      class: "room-info"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h2", null, "STANDARD ROOM"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                          createVNode(_component_a_button, { class: "btn-view" }, {
                            default: withCtx(() => [
                              createTextVNode(" Discover More ")
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
                      xs: 24,
                      sm: 24,
                      lg: 10,
                      class: "room-cover"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 8,
                      class: "room-info"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h2", null, "STANDARD ROOM"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                          createVNode(_component_a_button, { class: "btn-view" }, {
                            default: withCtx(() => [
                              createTextVNode(" Discover More ")
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
                createVNode(_component_a_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "display": "flex", "justify-content": "center" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_pagination, {
                          class: "pagination",
                          current: unref(current),
                          "onUpdate:current": ($event) => isRef(current) ? current.value = $event : null,
                          total: 50,
                          "show-less-items": ""
                        }, null, 8, ["current", "onUpdate:current"])
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/invesment-project.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invesmentProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65e92f7d"]]);

export { invesmentProject as default };
//# sourceMappingURL=invesment-project-vxpSVWuT.mjs.map
