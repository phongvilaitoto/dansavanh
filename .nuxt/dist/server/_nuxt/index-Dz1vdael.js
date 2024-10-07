import { defineComponent, computed, createVNode, ref, unref, withCtx, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext, reactive, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
/* empty css                    */
import { _ as __nuxt_component_1, a as __nuxt_component_2$1 } from "./index-B566YWDZ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { g as genComponentStyleHook, m as merge, r as resetComponent, w as withInstall, u as useConfigInject, B as flattenChildren } from "./useConfigInject-BiTbSa3p.js";
import "@emotion/hash";
import "@ant-design/colors";
import "@ctrl/tinycolor";
import "@emotion/unitless";
import "stylis";
const genSharedDividerStyle = (token) => {
  const {
    componentCls,
    sizePaddingEdgeHorizontal,
    colorSplit,
    lineWidth
  } = token;
  return {
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      borderBlockStart: `${lineWidth}px solid ${colorSplit}`,
      // vertical
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        margin: `0 ${token.dividerVerticalGutterMargin}px`,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${lineWidth}px solid ${colorSplit}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        margin: `${token.dividerHorizontalGutterMargin}px 0`
      },
      [`&-horizontal${componentCls}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${token.dividerHorizontalWithTextGutterMargin}px 0`,
        color: token.colorTextHeading,
        fontWeight: 500,
        fontSize: token.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${colorSplit}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${lineWidth}px solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      [`&-horizontal${componentCls}-with-text-left`]: {
        "&::before": {
          width: "5%"
        },
        "&::after": {
          width: "95%"
        }
      },
      [`&-horizontal${componentCls}-with-text-right`]: {
        "&::before": {
          width: "95%"
        },
        "&::after": {
          width: "5%"
        }
      },
      [`${componentCls}-inner-text`]: {
        display: "inline-block",
        padding: "0 1em"
      },
      "&-dashed": {
        background: "none",
        borderColor: colorSplit,
        borderStyle: "dashed",
        borderWidth: `${lineWidth}px 0 0`
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${componentCls}-dashed`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${componentCls}-with-text`]: {
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.fontSize
      },
      [`&-horizontal${componentCls}-with-text-left${componentCls}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineStart: sizePaddingEdgeHorizontal
        }
      },
      [`&-horizontal${componentCls}-with-text-right${componentCls}-no-default-orientation-margin-right`]: {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineEnd: sizePaddingEdgeHorizontal
        }
      }
    })
  };
};
const useStyle = genComponentStyleHook("Divider", (token) => {
  const dividerToken = merge(token, {
    dividerVerticalGutterMargin: token.marginXS,
    dividerHorizontalWithTextGutterMargin: token.margin,
    dividerHorizontalGutterMargin: token.marginLG
  });
  return [genSharedDividerStyle(dividerToken)];
}, {
  sizePaddingEdgeHorizontal: 0
});
const dividerProps = () => ({
  prefixCls: String,
  type: {
    type: String,
    default: "horizontal"
  },
  dashed: {
    type: Boolean,
    default: false
  },
  orientation: {
    type: String,
    default: "center"
  },
  plain: {
    type: Boolean,
    default: false
  },
  orientationMargin: [String, Number]
});
const Divider = defineComponent({
  name: "ADivider",
  inheritAttrs: false,
  compatConfig: {
    MODE: 3
  },
  props: dividerProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls: prefixClsRef,
      direction
    } = useConfigInject("divider", props);
    const [wrapSSR, hashId] = useStyle(prefixClsRef);
    const hasCustomMarginLeft = computed(() => props.orientation === "left" && props.orientationMargin != null);
    const hasCustomMarginRight = computed(() => props.orientation === "right" && props.orientationMargin != null);
    const classString = computed(() => {
      const {
        type,
        dashed,
        plain
      } = props;
      const prefixCls = prefixClsRef.value;
      return {
        [prefixCls]: true,
        [hashId.value]: !!hashId.value,
        [`${prefixCls}-${type}`]: true,
        [`${prefixCls}-dashed`]: !!dashed,
        [`${prefixCls}-plain`]: !!plain,
        [`${prefixCls}-rtl`]: direction.value === "rtl",
        [`${prefixCls}-no-default-orientation-margin-left`]: hasCustomMarginLeft.value,
        [`${prefixCls}-no-default-orientation-margin-right`]: hasCustomMarginRight.value
      };
    });
    const innerStyle = computed(() => {
      const marginValue = typeof props.orientationMargin === "number" ? `${props.orientationMargin}px` : props.orientationMargin;
      return _extends(_extends({}, hasCustomMarginLeft.value && {
        marginLeft: marginValue
      }), hasCustomMarginRight.value && {
        marginRight: marginValue
      });
    });
    const orientationPrefix = computed(() => props.orientation.length > 0 ? "-" + props.orientation : props.orientation);
    return () => {
      var _a;
      const children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      return wrapSSR(createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": [classString.value, children.length ? `${prefixClsRef.value}-with-text ${prefixClsRef.value}-with-text${orientationPrefix.value}` : "", attrs.class],
        "role": "separator"
      }), [children.length ? createVNode("span", {
        "class": `${prefixClsRef.value}-inner-text`,
        "style": innerStyle.value
      }, [children]) : null]));
    };
  }
});
const __nuxt_component_2 = withInstall(Divider);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "dynamic-swiper",
  __ssrInlineRender: true,
  props: ["images"],
  setup(__props) {
    const swipy = ref();
    const onSwiper = (swiper) => {
      swipy.value = swiper;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Swiper), {
        style: { "position": "relative" },
        "slides-per-view": 1,
        "space-between": 20,
        pagination: { clickable: true },
        loop: true,
        scrollbar: { draggable: true },
        onSwiper
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.images, (image, idx) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: idx }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="is-desktop slide-image" style="${ssrRenderStyle({ "width": "100%", "height": "500px", "position": "relative" })}"${_scopeId2}><div style="${ssrRenderStyle({
                      height: "500px",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: "url(" + image + ")"
                    })}"${_scopeId2}><span style="${ssrRenderStyle({ "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" })}" class="subtitle"${_scopeId2}>${ssrInterpolate("")}</span></div></div><div class="is-mobile slide-image" style="${ssrRenderStyle({ "width": "100%", "height": "350px", "position": "relative" })}"${_scopeId2}><div style="${ssrRenderStyle({
                      height: "350px",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: "url(" + image + ")"
                    })}"${_scopeId2}><span style="${ssrRenderStyle({ "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" })}" class="subtitle"${_scopeId2}>${ssrInterpolate("")}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "is-desktop slide-image",
                        style: { "width": "100%", "height": "500px", "position": "relative" }
                      }, [
                        createVNode("div", {
                          onClick: ($event) => unref(swipy).slideNext(),
                          style: {
                            height: "500px",
                            width: "100%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: "url(" + image + ")"
                          }
                        }, [
                          createVNode("span", {
                            style: { "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" },
                            class: "subtitle"
                          }, toDisplayString(""))
                        ], 12, ["onClick"])
                      ]),
                      createVNode("div", {
                        class: "is-mobile slide-image",
                        style: { "width": "100%", "height": "350px", "position": "relative" }
                      }, [
                        createVNode("div", {
                          onClick: ($event) => unref(swipy).slideNext(),
                          style: {
                            height: "350px",
                            width: "100%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: "url(" + image + ")"
                          }
                        }, [
                          createVNode("span", {
                            style: { "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" },
                            class: "subtitle"
                          }, toDisplayString(""))
                        ], 12, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div justify="center" align="middle" style="${ssrRenderStyle({ "position": "absolute", "bottom": "0px", "right": "20px", "z-index": "99999" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, { gutter: 10 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(swipy)) {
                          _push4(`<p class="text-white" style="${ssrRenderStyle({ "font-size": "1.3rem", "width": "50px" })}"${_scopeId3}>${ssrInterpolate(`${unref(swipy).realIndex + 1}/${__props.images.length}`)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(swipy) ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-white",
                            style: { "font-size": "1.3rem", "width": "50px" }
                          }, toDisplayString(`${unref(swipy).realIndex + 1}/${__props.images.length}`), 1)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, { span: 6 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "margin-top": "3px" })}"${_scopeId3}><i class="cursor-pointer text-white fa-solid fa-chevron-left"${_scopeId3}></i></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            onClick: ($event) => unref(swipy).slidePrev(),
                            style: { "margin-top": "3px" }
                          }, [
                            createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-left" })
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, { span: 6 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "margin-top": "3px" })}"${_scopeId3}><i class="cursor-pointer text-white fa-solid fa-chevron-right"${_scopeId3}></i></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            onClick: ($event) => unref(swipy).slideNext(),
                            style: { "margin-top": "3px" }
                          }, [
                            createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-right" })
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 12 }, {
                      default: withCtx(() => [
                        unref(swipy) ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-white",
                          style: { "font-size": "1.3rem", "width": "50px" }
                        }, toDisplayString(`${unref(swipy).realIndex + 1}/${__props.images.length}`), 1)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 6 }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          onClick: ($event) => unref(swipy).slidePrev(),
                          style: { "margin-top": "3px" }
                        }, [
                          createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-left" })
                        ], 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 6 }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          onClick: ($event) => unref(swipy).slideNext(),
                          style: { "margin-top": "3px" }
                        }, [
                          createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-right" })
                        ], 8, ["onClick"])
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
              (openBlock(true), createBlock(Fragment, null, renderList(__props.images, (image, idx) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: idx }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "is-desktop slide-image",
                      style: { "width": "100%", "height": "500px", "position": "relative" }
                    }, [
                      createVNode("div", {
                        onClick: ($event) => unref(swipy).slideNext(),
                        style: {
                          height: "500px",
                          width: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundImage: "url(" + image + ")"
                        }
                      }, [
                        createVNode("span", {
                          style: { "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" },
                          class: "subtitle"
                        }, toDisplayString(""))
                      ], 12, ["onClick"])
                    ]),
                    createVNode("div", {
                      class: "is-mobile slide-image",
                      style: { "width": "100%", "height": "350px", "position": "relative" }
                    }, [
                      createVNode("div", {
                        onClick: ($event) => unref(swipy).slideNext(),
                        style: {
                          height: "350px",
                          width: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundImage: "url(" + image + ")"
                        }
                      }, [
                        createVNode("span", {
                          style: { "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" },
                          class: "subtitle"
                        }, toDisplayString(""))
                      ], 12, ["onClick"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              createVNode("div", {
                justify: "center",
                align: "middle",
                style: { "position": "absolute", "bottom": "0px", "right": "20px", "z-index": "99999" }
              }, [
                createVNode(_component_a_row, { gutter: 10 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 12 }, {
                      default: withCtx(() => [
                        unref(swipy) ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-white",
                          style: { "font-size": "1.3rem", "width": "50px" }
                        }, toDisplayString(`${unref(swipy).realIndex + 1}/${__props.images.length}`), 1)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 6 }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          onClick: ($event) => unref(swipy).slidePrev(),
                          style: { "margin-top": "3px" }
                        }, [
                          createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-left" })
                        ], 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 6 }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          onClick: ($event) => unref(swipy).slideNext(),
                          style: { "margin-top": "3px" }
                        }, [
                          createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-right" })
                        ], 8, ["onClick"])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dynamic-swiper.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WellnessChild",
  __ssrInlineRender: true,
  props: ["items"],
  setup(__props) {
    const isOdd = (idx) => /^-?\d*[13579]$/.test(idx.toString());
    const isEven = (idx) => /^-?\d*[02468]$/.test(idx.toString());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2$1;
      const _component_dynamic_swiper = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-54bbf43f><div data-v-54bbf43f><!--[-->`);
      ssrRenderList(__props.items, (i, idx) => {
        _push(ssrRenderComponent(_component_a_row, {
          justify: "center",
          style: { "margin-bottom": "20px" },
          "data-aos": "fade-up",
          key: idx,
          gutter: 52
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (isOdd(idx)) {
                _push2(ssrRenderComponent(_component_a_col, {
                  xs: 24,
                  sm: 24,
                  md: 14,
                  lg: 14
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_dynamic_swiper, {
                        images: i.images
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_dynamic_swiper, {
                          images: i.images
                        }, null, 8, ["images"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_a_col, {
                xs: 0,
                sm: 0,
                md: 8,
                lg: 8
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="mb-20 mt-20" data-v-54bbf43f${_scopeId2}>${ssrInterpolate(i.title)}</h3><p data-v-54bbf43f${_scopeId2}>${ssrInterpolate(i.description)}</p>`);
                  } else {
                    return [
                      createVNode("h3", { class: "mb-20 mt-20" }, toDisplayString(i.title), 1),
                      createVNode("p", null, toDisplayString(i.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (isEven(idx)) {
                _push2(ssrRenderComponent(_component_a_col, {
                  xs: 24,
                  sm: 24,
                  md: 14,
                  lg: 14
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_dynamic_swiper, {
                        images: i.images
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_dynamic_swiper, {
                          images: i.images
                        }, null, 8, ["images"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_a_col, {
                xs: 24,
                sm: 24,
                md: 0,
                lg: 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="mb-20 mt-20" data-v-54bbf43f${_scopeId2}>${ssrInterpolate(i.title)}</h3><p data-v-54bbf43f${_scopeId2}>${ssrInterpolate(i.description)}</p>`);
                  } else {
                    return [
                      createVNode("h3", { class: "mb-20 mt-20" }, toDisplayString(i.title), 1),
                      createVNode("p", null, toDisplayString(i.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                isOdd(idx) ? (openBlock(), createBlock(_component_a_col, {
                  key: 0,
                  xs: 24,
                  sm: 24,
                  md: 14,
                  lg: 14
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dynamic_swiper, {
                      images: i.images
                    }, null, 8, ["images"])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                createVNode(_component_a_col, {
                  xs: 0,
                  sm: 0,
                  md: 8,
                  lg: 8
                }, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "mb-20 mt-20" }, toDisplayString(i.title), 1),
                    createVNode("p", null, toDisplayString(i.description), 1)
                  ]),
                  _: 2
                }, 1024),
                isEven(idx) ? (openBlock(), createBlock(_component_a_col, {
                  key: 1,
                  xs: 24,
                  sm: 24,
                  md: 14,
                  lg: 14
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dynamic_swiper, {
                      images: i.images
                    }, null, 8, ["images"])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                createVNode(_component_a_col, {
                  xs: 24,
                  sm: 24,
                  md: 0,
                  lg: 0
                }, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "mb-20 mt-20" }, toDisplayString(i.title), 1),
                    createVNode("p", null, toDisplayString(i.description), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WellnessChild.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const WellnessChild = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-54bbf43f"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Wellness",
  __ssrInlineRender: true,
  props: ["room"],
  setup(__props) {
    const swipy = ref();
    const isLoading = ref(true);
    isLoading.value = false;
    const onSwiper = (swiper) => {
      swipy.value = swiper;
    };
    const visible = ref(false);
    const selectedImage = ref("");
    const setVisible = (value, image) => {
      if (image) {
        selectedImage.value = image;
      }
      visible.value = value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2$1;
      const _component_a_divider = __nuxt_component_2;
      if (!unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="max-width header-margin-y"><div class="text-max-width pb-20 pl-20 pr-20">`);
        _push(ssrRenderComponent(_component_a_row, { justify: "center" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_col, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h1 class="heading-h big-font-size text-center"${_scopeId2}>${ssrInterpolate(__props.room.title)}</h1>`);
                  } else {
                    return [
                      createVNode("h1", { class: "heading-h big-font-size text-center" }, toDisplayString(__props.room.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_col, null, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "heading-h big-font-size text-center" }, toDisplayString(__props.room.title), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="text-center">`);
        _push(ssrRenderComponent(unref(Swiper), {
          style: { "position": "relative" },
          "slides-per-view": 1,
          "space-between": 20,
          pagination: { clickable: true },
          loop: true,
          scrollbar: { draggable: true },
          onSwiper
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.room.images, (image, idx) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: idx }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="is-desktop slide-image" style="${ssrRenderStyle({ "width": "100%", "height": "750px", "position": "relative" })}"${_scopeId2}><div style="${ssrRenderStyle({
                        height: "700px",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: "url(" + image + ")"
                      })}"${_scopeId2}><span style="${ssrRenderStyle({ "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" })}" class="subtitle"${_scopeId2}>${ssrInterpolate("")}</span></div></div><div class="is-mobile slide-image" style="${ssrRenderStyle({ "width": "100%", "height": "400px", "position": "relative" })}"${_scopeId2}><div style="${ssrRenderStyle({
                        height: "350px",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: "url(" + image + ")"
                      })}"${_scopeId2}><span style="${ssrRenderStyle({ "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" })}" class="subtitle"${_scopeId2}>${ssrInterpolate("")}</span></div></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "is-desktop slide-image",
                          style: { "width": "100%", "height": "750px", "position": "relative" }
                        }, [
                          createVNode("div", {
                            onClick: ($event) => {
                              setVisible(true, image);
                              unref(swipy).slideNext();
                            },
                            style: {
                              height: "700px",
                              width: "100%",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundImage: "url(" + image + ")"
                            }
                          }, [
                            createVNode("span", {
                              style: { "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" },
                              class: "subtitle"
                            }, toDisplayString(""))
                          ], 12, ["onClick"])
                        ]),
                        createVNode("div", {
                          class: "is-mobile slide-image",
                          style: { "width": "100%", "height": "400px", "position": "relative" }
                        }, [
                          createVNode("div", {
                            onClick: ($event) => {
                              setVisible(true, image);
                              unref(swipy).slideNext();
                            },
                            style: {
                              height: "350px",
                              width: "100%",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundImage: "url(" + image + ")"
                            }
                          }, [
                            createVNode("span", {
                              style: { "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" },
                              class: "subtitle"
                            }, toDisplayString(""))
                          ], 12, ["onClick"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--><div justify="center" align="middle" style="${ssrRenderStyle({ "position": "absolute", "bottom": "40px", "right": "20px", "z-index": "99999" })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_a_row, { gutter: 10 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_col, { span: 12 }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(swipy)) {
                            _push4(`<p class="text-white" style="${ssrRenderStyle({ "font-size": "1.3rem", "width": "50px" })}"${_scopeId3}>${ssrInterpolate(`${unref(swipy).realIndex + 1}/${__props.room.images.length}`)}</p>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            unref(swipy) ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-white",
                              style: { "font-size": "1.3rem", "width": "50px" }
                            }, toDisplayString(`${unref(swipy).realIndex + 1}/${__props.room.images.length}`), 1)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_col, { span: 6 }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${ssrRenderStyle({ "margin-top": "3px" })}"${_scopeId3}><i class="cursor-pointer text-white fa-solid fa-chevron-left"${_scopeId3}></i></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              onClick: ($event) => unref(swipy).slidePrev(),
                              style: { "margin-top": "3px" }
                            }, [
                              createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-left" })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_col, { span: 6 }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${ssrRenderStyle({ "margin-top": "3px" })}"${_scopeId3}><i class="cursor-pointer text-white fa-solid fa-chevron-right"${_scopeId3}></i></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              onClick: ($event) => unref(swipy).slideNext(),
                              style: { "margin-top": "3px" }
                            }, [
                              createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-right" })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_col, { span: 12 }, {
                        default: withCtx(() => [
                          unref(swipy) ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-white",
                            style: { "font-size": "1.3rem", "width": "50px" }
                          }, toDisplayString(`${unref(swipy).realIndex + 1}/${__props.room.images.length}`), 1)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_col, { span: 6 }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            onClick: ($event) => unref(swipy).slidePrev(),
                            style: { "margin-top": "3px" }
                          }, [
                            createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-left" })
                          ], 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_col, { span: 6 }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            onClick: ($event) => unref(swipy).slideNext(),
                            style: { "margin-top": "3px" }
                          }, [
                            createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-right" })
                          ], 8, ["onClick"])
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
                (openBlock(true), createBlock(Fragment, null, renderList(__props.room.images, (image, idx) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: idx }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "is-desktop slide-image",
                        style: { "width": "100%", "height": "750px", "position": "relative" }
                      }, [
                        createVNode("div", {
                          onClick: ($event) => {
                            setVisible(true, image);
                            unref(swipy).slideNext();
                          },
                          style: {
                            height: "700px",
                            width: "100%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: "url(" + image + ")"
                          }
                        }, [
                          createVNode("span", {
                            style: { "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" },
                            class: "subtitle"
                          }, toDisplayString(""))
                        ], 12, ["onClick"])
                      ]),
                      createVNode("div", {
                        class: "is-mobile slide-image",
                        style: { "width": "100%", "height": "400px", "position": "relative" }
                      }, [
                        createVNode("div", {
                          onClick: ($event) => {
                            setVisible(true, image);
                            unref(swipy).slideNext();
                          },
                          style: {
                            height: "350px",
                            width: "100%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: "url(" + image + ")"
                          }
                        }, [
                          createVNode("span", {
                            style: { "position": "absolute", "bottom": "0px", "left": "0", "z-index": "9999" },
                            class: "subtitle"
                          }, toDisplayString(""))
                        ], 12, ["onClick"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                createVNode("div", {
                  justify: "center",
                  align: "middle",
                  style: { "position": "absolute", "bottom": "40px", "right": "20px", "z-index": "99999" }
                }, [
                  createVNode(_component_a_row, { gutter: 10 }, {
                    default: withCtx(() => [
                      createVNode(_component_a_col, { span: 12 }, {
                        default: withCtx(() => [
                          unref(swipy) ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-white",
                            style: { "font-size": "1.3rem", "width": "50px" }
                          }, toDisplayString(`${unref(swipy).realIndex + 1}/${__props.room.images.length}`), 1)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_col, { span: 6 }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            onClick: ($event) => unref(swipy).slidePrev(),
                            style: { "margin-top": "3px" }
                          }, [
                            createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-left" })
                          ], 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_col, { span: 6 }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            onClick: ($event) => unref(swipy).slideNext(),
                            style: { "margin-top": "3px" }
                          }, [
                            createVNode("i", { class: "cursor-pointer text-white fa-solid fa-chevron-right" })
                          ], 8, ["onClick"])
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
        _push(`<div class="text-max-width mb-40 pl-20 pr-20"><p class="text-center">${ssrInterpolate(__props.room.description)}</p></div></div>`);
        _push(ssrRenderComponent(_component_a_row, {
          justify: "center",
          gutter: 50
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_col, {
                sm: 24,
                xs: 24,
                md: 16,
                xl: 16,
                lg: 16
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_row, {
                      gutter: 10,
                      justify: "center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(__props.room.subImages.filter((o, idx) => idx <= 1), (i) => {
                            _push4(ssrRenderComponent(_component_a_col, {
                              sm: 12,
                              xs: 12,
                              md: 12,
                              xl: 12,
                              lg: 12,
                              class: "mb-30"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<img${ssrRenderAttr("src", i)} alt="" class="right-content-image"${_scopeId4}>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      src: i,
                                      alt: "",
                                      class: "right-content-image"
                                    }, null, 8, ["src"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.room.subImages.filter((o, idx) => idx <= 1), (i) => {
                              return openBlock(), createBlock(_component_a_col, {
                                sm: 12,
                                xs: 12,
                                md: 12,
                                xl: 12,
                                lg: 12,
                                class: "mb-30"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: i,
                                    alt: "",
                                    class: "right-content-image"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_row, {
                        gutter: 10,
                        justify: "center"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.room.subImages.filter((o, idx) => idx <= 1), (i) => {
                            return openBlock(), createBlock(_component_a_col, {
                              sm: 12,
                              xs: 12,
                              md: 12,
                              xl: 12,
                              lg: 12,
                              class: "mb-30"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: i,
                                  alt: "",
                                  class: "right-content-image"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 256))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_col, {
                sm: 24,
                xs: 24,
                md: 8,
                xl: 8,
                lg: 8
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="right-content"${_scopeId2}><!--[-->`);
                    ssrRenderList(__props.room.items.filter((o, idx) => idx <= 1), (i) => {
                      _push3(`<div${_scopeId2}><div${_scopeId2}><h3${_scopeId2}>${ssrInterpolate(i.title)}</h3><p${_scopeId2}>${ssrInterpolate(i.description)}</p></div></div>`);
                    });
                    _push3(`<!--]--><div class="is-mobile"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_a_divider, { class: "pb-20" }, null, _parent3, _scopeId2));
                    if (__props.room.link) {
                      _push3(`<a${ssrRenderAttr("href", __props.room.link)} target="_blank"${_scopeId2}><div class="book-now-button bg-primary" style="${ssrRenderStyle({ "margin-top": "auto" })}"${_scopeId2}><p class="text-white"${_scopeId2}>Make a Reservation</p></div></a>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="is-desktop" style="${ssrRenderStyle({ "position": "absolute", "bottom": "0", "width": "100%" })}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_a_divider, { class: "pb-20" }, null, _parent3, _scopeId2));
                    if (__props.room.link) {
                      _push3(`<a${ssrRenderAttr("href", __props.room.link)} target="_blank"${_scopeId2}><div class="book-now-button bg-primary" style="${ssrRenderStyle({ "margin-top": "auto" })}"${_scopeId2}><p class="text-white"${_scopeId2}>Make a Reservation</p></div></a>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "right-content" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.room.items.filter((o, idx) => idx <= 1), (i) => {
                          return openBlock(), createBlock("div", null, [
                            createVNode("div", null, [
                              createVNode("h3", null, toDisplayString(i.title), 1),
                              createVNode("p", null, toDisplayString(i.description), 1)
                            ])
                          ]);
                        }), 256)),
                        createVNode("div", { class: "is-mobile" }, [
                          createVNode(_component_a_divider, { class: "pb-20" }),
                          __props.room.link ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: __props.room.link,
                            target: "_blank"
                          }, [
                            createVNode("div", {
                              class: "book-now-button bg-primary",
                              style: { "margin-top": "auto" }
                            }, [
                              createVNode("p", { class: "text-white" }, "Make a Reservation")
                            ])
                          ], 8, ["href"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", {
                          class: "is-desktop",
                          style: { "position": "absolute", "bottom": "0", "width": "100%" }
                        }, [
                          createVNode(_component_a_divider, { class: "pb-20" }),
                          __props.room.link ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: __props.room.link,
                            target: "_blank"
                          }, [
                            createVNode("div", {
                              class: "book-now-button bg-primary",
                              style: { "margin-top": "auto" }
                            }, [
                              createVNode("p", { class: "text-white" }, "Make a Reservation")
                            ])
                          ], 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_col, {
                  sm: 24,
                  xs: 24,
                  md: 16,
                  xl: 16,
                  lg: 16
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_row, {
                      gutter: 10,
                      justify: "center"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.room.subImages.filter((o, idx) => idx <= 1), (i) => {
                          return openBlock(), createBlock(_component_a_col, {
                            sm: 12,
                            xs: 12,
                            md: 12,
                            xl: 12,
                            lg: 12,
                            class: "mb-30"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: i,
                                alt: "",
                                class: "right-content-image"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 256))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  sm: 24,
                  xs: 24,
                  md: 8,
                  xl: 8,
                  lg: 8
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "right-content" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.room.items.filter((o, idx) => idx <= 1), (i) => {
                        return openBlock(), createBlock("div", null, [
                          createVNode("div", null, [
                            createVNode("h3", null, toDisplayString(i.title), 1),
                            createVNode("p", null, toDisplayString(i.description), 1)
                          ])
                        ]);
                      }), 256)),
                      createVNode("div", { class: "is-mobile" }, [
                        createVNode(_component_a_divider, { class: "pb-20" }),
                        __props.room.link ? (openBlock(), createBlock("a", {
                          key: 0,
                          href: __props.room.link,
                          target: "_blank"
                        }, [
                          createVNode("div", {
                            class: "book-now-button bg-primary",
                            style: { "margin-top": "auto" }
                          }, [
                            createVNode("p", { class: "text-white" }, "Make a Reservation")
                          ])
                        ], 8, ["href"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", {
                        class: "is-desktop",
                        style: { "position": "absolute", "bottom": "0", "width": "100%" }
                      }, [
                        createVNode(_component_a_divider, { class: "pb-20" }),
                        __props.room.link ? (openBlock(), createBlock("a", {
                          key: 0,
                          href: __props.room.link,
                          target: "_blank"
                        }, [
                          createVNode("div", {
                            class: "book-now-button bg-primary",
                            style: { "margin-top": "auto" }
                          }, [
                            createVNode("p", { class: "text-white" }, "Make a Reservation")
                          ])
                        ], 8, ["href"])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="max-width-no-padding"><br>`);
        if (__props.room.subItems.length) {
          _push(ssrRenderComponent(WellnessChild, {
            items: __props.room.subItems
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wellness.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(true);
    const room = reactive({
      title: "Near By Title",
      description: "A place of quiet contemplation pervaded by the spiritual tranquility of the town itself, Amantaka’s spa offers guests an exceptional personalised experience. The spa menu draws on Lao healing traditions, incorporating local herbs and traditional Buddhist rituals.",
      images: ["https://storage.googleapis.com/dsv-bucket/imgs/imgs/b6669da7-deca-42ce-8544-9da884893378.jpg", "https://storage.googleapis.com/dsv-bucket/imgs/imgs/9e99bfdb-6d77-4ee9-85fd-83221ee7abb1.jpg", "https://storage.googleapis.com/dsv-bucket/imgs/imgs/84faa7d0-02cf-4108-a575-d7c8b08ebea7.jpg"],
      subImages: ["https://storage.googleapis.com/dsv-bucket/imgs/imgs/e7463c82-ed23-42e4-ac86-a120c93b8453.jpg", "https://storage.googleapis.com/dsv-bucket/imgs/imgs/9e99bfdb-6d77-4ee9-85fd-83221ee7abb1.jpg", "https://storage.googleapis.com/dsv-bucket/imgs/imgs/b6669da7-deca-42ce-8544-9da884893378.jpg"],
      items: [
        {
          title: "Embark on a holistic journey",
          description: "Our Signature Wellness Journeys are designed to meet individual needs while incorporating local wellness traditions and healing techniques. Each includes a massage and a personalised bath with local herbs. The Samun Pai incorporates herbal poultices, while the Anamai Hang Kai includes a detoxifying scrub and a mineral wrap."
        },
        {
          title: "Generations of wisdom",
          description: "Passed down through the generations, Lao massage is a rhythmic, oil-free treatment performed over loose, comfortable clothing. A series of gentle stretches opens the body to enhance mobility, while deep pressure-point stimulation eases tension, leaving a whole body sense of relaxation and fulfillment."
        },
        {
          title: "Generations of wisdom",
          description: "Passed down through the generations, Lao massage is a rhythmic, oil-free treatment performed over loose, comfortable clothing. A series of gentle stretches opens the body to enhance mobility, while deep pressure-point stimulation eases tension, leaving a whole body sense of relaxation and fulfillment."
        }
      ],
      subItems: [
        {
          images: ["https://storage.googleapis.com/dsv-bucket/imgs/imgs/09997ce6-c88a-425a-bda0-7fe8fbbe0478.jpg"],
          title: "Embark on a holistic journey",
          description: "Our Signature Wellness Journeys are designed to meet individual needs while incorporating local wellness traditions and healing techniques. Each includes a massage and a personalised bath with local herbs. The Samun Pai incorporates herbal poultices, while the Anamai Hang Kai includes a detoxifying scrub and a mineral wrap."
        },
        {
          images: ["https://storage.googleapis.com/dsv-bucket/imgs/imgs/b6669da7-deca-42ce-8544-9da884893378.jpg"],
          title: "Generations of wisdom",
          description: "Passed down through the generations, Lao massage is a rhythmic, oil-free treatment performed over loose, comfortable clothing. A series of gentle stretches opens the body to enhance mobility, while deep pressure-point stimulation eases tension, leaving a whole body sense of relaxation and fulfillment."
        }
      ]
    });
    isLoading.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Wellness = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "max-width",
        style: { "padding": "0 10px 0 10px", "min-height": "80vh", "margin-top": "150px" }
      }, _attrs))} data-v-a20ac1cd>`);
      _push(ssrRenderComponent(_component_Wellness, { room }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/near-by/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a20ac1cd"]]);
export {
  index as default
};
//# sourceMappingURL=index-Dz1vdael.js.map
