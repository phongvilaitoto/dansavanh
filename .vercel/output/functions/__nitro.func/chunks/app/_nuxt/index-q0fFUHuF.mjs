import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { defineComponent, computed, createVNode, ref, watch, Fragment, useSSRContext, withCtx, unref, openBlock, createBlock, toDisplayString, renderList, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import { _ as _imports_0 } from './decoration-1-3DQxrpma.mjs';
import { u as useFlexGapSupport, _ as __nuxt_component_1, a as __nuxt_component_2$2 } from './index-5qJONfuq.mjs';
import { w as withInstall, _ as _export_sfc, t as tuple, b as booleanType, a as useRouter } from '../server.mjs';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { u as useConfigInject, f as flattenChildren, c as classNames, a as filterEmpty, g as genComponentStyleHook, m as merge, P as PropTypes, r as resetComponent, L as LayoutContent } from './index-j6mHhOx5.mjs';
import { u as useStyle$1, C as Compact } from '../../LoadingOutlined.mjs';
import { B as Button } from './index-nCHNwxKS.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
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
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'vue-types';
import './compact-item-0fAWjO3D.mjs';
import 'lodash-es';

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
const __nuxt_component_2$1 = withInstall(Divider);
const spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
const spaceProps = () => ({
  prefixCls: String,
  size: {
    type: [String, Number, Array]
  },
  direction: PropTypes.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  align: PropTypes.oneOf(tuple("start", "end", "center", "baseline")),
  wrap: booleanType()
});
function getNumberSize(size) {
  return typeof size === "string" ? spaceSize[size] : size || 0;
}
const Space = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ASpace",
  inheritAttrs: false,
  props: spaceProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      space,
      direction: directionConfig
    } = useConfigInject("space", props);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const supportFlexGap = useFlexGapSupport();
    const size = computed(() => {
      var _a, _b, _c;
      return (_c = (_a = props.size) !== null && _a !== void 0 ? _a : (_b = space === null || space === void 0 ? void 0 : space.value) === null || _b === void 0 ? void 0 : _b.size) !== null && _c !== void 0 ? _c : "small";
    });
    const horizontalSize = ref();
    const verticalSize = ref();
    watch(size, () => {
      [horizontalSize.value, verticalSize.value] = (Array.isArray(size.value) ? size.value : [size.value, size.value]).map((item) => getNumberSize(item));
    }, {
      immediate: true
    });
    const mergedAlign = computed(() => props.align === void 0 && props.direction === "horizontal" ? "center" : props.align);
    const cn = computed(() => {
      return classNames(prefixCls.value, hashId.value, `${prefixCls.value}-${props.direction}`, {
        [`${prefixCls.value}-rtl`]: directionConfig.value === "rtl",
        [`${prefixCls.value}-align-${mergedAlign.value}`]: mergedAlign.value
      });
    });
    const marginDirection = computed(() => directionConfig.value === "rtl" ? "marginLeft" : "marginRight");
    const style = computed(() => {
      const gapStyle = {};
      if (supportFlexGap.value) {
        gapStyle.columnGap = `${horizontalSize.value}px`;
        gapStyle.rowGap = `${verticalSize.value}px`;
      }
      return _extends(_extends({}, gapStyle), props.wrap && {
        flexWrap: "wrap",
        marginBottom: `${-verticalSize.value}px`
      });
    });
    return () => {
      var _a, _b;
      const {
        wrap,
        direction = "horizontal"
      } = props;
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      const items = filterEmpty(children);
      const len = items.length;
      if (len === 0) {
        return null;
      }
      const split = (_b = slots.split) === null || _b === void 0 ? void 0 : _b.call(slots);
      const itemClassName = `${prefixCls.value}-item`;
      const horizontalSizeVal = horizontalSize.value;
      const latestIndex = len - 1;
      return createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": [cn.value, attrs.class],
        "style": [style.value, attrs.style]
      }), [items.map((child, index2) => {
        let originIndex = children.indexOf(child);
        if (originIndex === -1) {
          originIndex = `$$space-${index2}`;
        }
        let itemStyle = {};
        if (!supportFlexGap.value) {
          if (direction === "vertical") {
            if (index2 < latestIndex) {
              itemStyle = {
                marginBottom: `${horizontalSizeVal / (split ? 2 : 1)}px`
              };
            }
          } else {
            itemStyle = _extends(_extends({}, index2 < latestIndex && {
              [marginDirection.value]: `${horizontalSizeVal / (split ? 2 : 1)}px`
            }), wrap && {
              paddingBottom: `${verticalSize.value}px`
            });
          }
        }
        return wrapSSR(createVNode(Fragment, {
          "key": originIndex
        }, [createVNode("div", {
          "class": itemClassName,
          "style": itemStyle
        }, [child]), index2 < latestIndex && split && createVNode("span", {
          "class": `${itemClassName}-split`,
          "style": itemStyle
        }, [split])]));
      })]);
    };
  }
});
Space.Compact = Compact;
Space.install = function(app) {
  app.component(Space.name, Space);
  app.component(Compact.name, Compact);
  return app;
};
const __nuxt_component_2 = Space;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    const isHover = ref(null);
    const list = ref([
      {
        route: "/casino",
        icon: "https://storage.googleapis.com/dsv-bucket/logo_casino.png",
        image: "https://storage.googleapis.com/dsv-bucket/casino-banner.jpeg",
        text: "CASINO",
        description: "Casino"
      },
      {
        route: "/experience",
        icon: "https://storage.googleapis.com/dsv-bucket/logo_jetski.png",
        image: "https://storage.googleapis.com/dsv-bucket/jetski-banner.jpeg",
        text: "WATER ACTIVITIES",
        description: "Away from the wild and rough waves, guest can enjoy kayaking, jet skiing on calm fresh water. Either ride on the gentle waves on a cruise to view the thousand islands or get to your destination on a thrilling speed boat, make sure that you have enough memory space in your phone to capture the scenery and moments."
      },
      {
        route: "/hotels/golf",
        icon: "https://storage.googleapis.com/dsv-bucket/logo_golf.png",
        image: "https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg",
        text: "GOFT",
        description: "Well known for its kind of view that blends the art of green fairways enclosed with forest of pines at elevations. Enjoy a business meeting leisurely accompanied by chirping birds and excellent entertainment facilities, a hard to come by venue for golfers."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2$2;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-346ff6fa>`);
      _push(ssrRenderComponent(_component_a_row, {
        justify: "center",
        align: "middle",
        style: { "padding-bottom": "1rem", "padding-top": "3rem" },
        class: "text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, { span: 24 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-uppercase" data-v-346ff6fa${_scopeId2}>Dansavanh Nam Ngum Resort</h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-uppercase" }, "Dansavanh Nam Ngum Resort")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, {
              span: 24,
              sm: 18
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-center" data-v-346ff6fa${_scopeId2}>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perspiciatis numquam soluta magni nisi error! Corrupti similique quasi quod ut quae libero nihil neque, vel, mollitia officiis dolorem aliquid quo? elit. Quia, repudiandae expedita aliquid eaque omnis suscipit tempore deserunt reiciendis accusantium dolorem delectus facilis fugit iusto eligendi vero perspiciatis dolor sequi deleniti?.</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-center" }, "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perspiciatis numquam soluta magni nisi error! Corrupti similique quasi quod ut quae libero nihil neque, vel, mollitia officiis dolorem aliquid quo? elit. Quia, repudiandae expedita aliquid eaque omnis suscipit tempore deserunt reiciendis accusantium dolorem delectus facilis fugit iusto eligendi vero perspiciatis dolor sequi deleniti?.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, {
              span: 24,
              style: { "align-content": "center", "justify-content": "center", "display": "flex" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-346ff6fa${_scopeId2}>`);
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, { span: 24 }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-uppercase" }, "Dansavanh Nam Ngum Resort")
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                span: 24,
                sm: 18
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-center" }, "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perspiciatis numquam soluta magni nisi error! Corrupti similique quasi quod ut quae libero nihil neque, vel, mollitia officiis dolorem aliquid quo? elit. Quia, repudiandae expedita aliquid eaque omnis suscipit tempore deserunt reiciendis accusantium dolorem delectus facilis fugit iusto eligendi vero perspiciatis dolor sequi deleniti?.")
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
      }, _parent));
      _push(ssrRenderComponent(_component_a_row, {
        justify: "center",
        gutter: 20
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(list), (i, idx) => {
              _push2(ssrRenderComponent(_component_a_col, {
                xs: 24,
                sm: 24,
                md: 24,
                lg: 8,
                key: idx,
                onMouseenter: ($event) => isHover.value = idx,
                onMouseleave: ($event) => isHover.value = null
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="card-swiper" data-v-346ff6fa${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: i.route
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="casino-card" data-v-346ff6fa${_scopeId3}><img class="casino-card-image"${ssrRenderAttr("src", i.image)} alt="" data-v-346ff6fa${_scopeId3}><div class="casino-card-text-top" data-v-346ff6fa${_scopeId3}><img${ssrRenderAttr("src", i.icon)} alt="" data-v-346ff6fa${_scopeId3}></div>`);
                          if (unref(isHover) !== idx) {
                            _push4(`<div class="casino-card-text" data-v-346ff6fa${_scopeId3}><h2 data-v-346ff6fa${_scopeId3}>${ssrInterpolate(i.text)}</h2></div>`);
                          } else {
                            _push4(`<div class="casino-card-text" data-v-346ff6fa${_scopeId3}><p data-v-346ff6fa${_scopeId3}>${ssrInterpolate(i.description)}</p></div>`);
                          }
                          _push4(`</div><p data-v-346ff6fa${_scopeId3}></p>`);
                        } else {
                          return [
                            createVNode("div", { class: "casino-card" }, [
                              createVNode("img", {
                                class: "casino-card-image",
                                src: i.image,
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "casino-card-text-top" }, [
                                createVNode("img", {
                                  src: i.icon,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              unref(isHover) !== idx ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "casino-card-text"
                              }, [
                                createVNode("h2", null, toDisplayString(i.text), 1)
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "casino-card-text"
                              }, [
                                createVNode("p", null, toDisplayString(i.description), 1)
                              ]))
                            ]),
                            createVNode("p")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "card-swiper" }, [
                        createVNode(_component_nuxt_link, {
                          to: i.route
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "casino-card" }, [
                              createVNode("img", {
                                class: "casino-card-image",
                                src: i.image,
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "casino-card-text-top" }, [
                                createVNode("img", {
                                  src: i.icon,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              unref(isHover) !== idx ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "casino-card-text"
                              }, [
                                createVNode("h2", null, toDisplayString(i.text), 1)
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "casino-card-text"
                              }, [
                                createVNode("p", null, toDisplayString(i.description), 1)
                              ]))
                            ]),
                            createVNode("p")
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(list), (i, idx) => {
                return openBlock(), createBlock(_component_a_col, {
                  xs: 24,
                  sm: 24,
                  md: 24,
                  lg: 8,
                  key: idx,
                  onMouseenter: ($event) => isHover.value = idx,
                  onMouseleave: ($event) => isHover.value = null
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "card-swiper" }, [
                      createVNode(_component_nuxt_link, {
                        to: i.route
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "casino-card" }, [
                            createVNode("img", {
                              class: "casino-card-image",
                              src: i.image,
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "casino-card-text-top" }, [
                              createVNode("img", {
                                src: i.icon,
                                alt: ""
                              }, null, 8, ["src"])
                            ]),
                            unref(isHover) !== idx ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "casino-card-text"
                            }, [
                              createVNode("h2", null, toDisplayString(i.text), 1)
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "casino-card-text"
                            }, [
                              createVNode("p", null, toDisplayString(i.description), 1)
                            ]))
                          ]),
                          createVNode("p")
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ])
                  ]),
                  _: 2
                }, 1032, ["onMouseenter", "onMouseleave"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Welcome.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-346ff6fa"]]);
const _imports_1 = "" + buildAssetsURL("hotel-vientiane.aE2ADKik.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_a_row = __nuxt_component_1;
  const _component_a_col = __nuxt_component_2$2;
  const _component_a_space = __nuxt_component_2;
  const _component_nuxt_link = __nuxt_component_0;
  const _component_a_button = Button;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_a_row, {
    justify: "center",
    style: { "padding-bottom": "1rem" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_a_col, {
          span: 24,
          style: { "align-content": "center", "justify-content": "center", "display": "flex" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-7d11c65c${_scopeId2}>`);
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
        }, _parent2, _scopeId));
      } else {
        return [
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
  }, _parent));
  _push(ssrRenderComponent(_component_a_row, { justify: "center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_a_col, {
          sm: 24,
          lg: 24
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="card-info" data-v-7d11c65c${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-7d11c65c${_scopeId2}><h2 data-v-7d11c65c${_scopeId2}>THE BEST RESORT</h2></div>`);
            } else {
              return [
                createVNode("div", { class: "card-info" }, [
                  createVNode("img", {
                    src: _imports_1,
                    alt: ""
                  }),
                  createVNode("h2", null, "THE BEST RESORT")
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
            lg: 24
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "card-info" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: ""
                }),
                createVNode("h2", null, "THE BEST RESORT")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_a_row, { justify: "center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_a_space, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_nuxt_link, { to: "/hotels" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_a_button, { class: "view-button" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`VIEW HOTELS`);
                        } else {
                          return [
                            createTextVNode("VIEW HOTELS")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_a_button, { class: "view-button" }, {
                        default: withCtx(() => [
                          createTextVNode("VIEW HOTELS")
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
                createVNode(_component_nuxt_link, { to: "/hotels" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_button, { class: "view-button" }, {
                      default: withCtx(() => [
                        createTextVNode("VIEW HOTELS")
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
      } else {
        return [
          createVNode(_component_a_space, null, {
            default: withCtx(() => [
              createVNode(_component_nuxt_link, { to: "/hotels" }, {
                default: withCtx(() => [
                  createVNode(_component_a_button, { class: "view-button" }, {
                    default: withCtx(() => [
                      createTextVNode("VIEW HOTELS")
                    ]),
                    _: 1
                  })
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
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HotelInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HotelInfo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7d11c65c"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "News",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2$2;
      const _component_a_divider = __nuxt_component_2$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_row, {
        justify: "center",
        style: { "padding-bottom": "1rem" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, {
              span: 24,
              style: { "align-content": "center", "justify-content": "center", "display": "flex" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-e93a6ee2${_scopeId2}>`);
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
            }, _parent2, _scopeId));
          } else {
            return [
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
      }, _parent));
      _push(ssrRenderComponent(_component_a_row, {
        style: { "padding-bottom": "1rem" },
        justify: "center",
        gutter: 10
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, {
              sm: 24,
              lg: 16,
              onClick: ($event) => unref(router).push("/events")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="card event cursor" data-v-e93a6ee2${_scopeId2}><img src="https://storage.googleapis.com/dsv-bucket/gallery/5fd47819972a6.jpeg" alt="" data-v-e93a6ee2${_scopeId2}><h2 class="text-bold" data-v-e93a6ee2${_scopeId2}>Our Event</h2></div>`);
                } else {
                  return [
                    createVNode("div", { class: "card event cursor" }, [
                      createVNode("img", {
                        src: "https://storage.googleapis.com/dsv-bucket/gallery/5fd47819972a6.jpeg",
                        alt: ""
                      }),
                      createVNode("h2", { class: "text-bold" }, "Our Event")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, {
              sm: 24,
              lg: 8,
              onClick: ($event) => unref(router).push("/offer")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="card offer cursor" data-v-e93a6ee2${_scopeId2}><img src="https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg" alt="" data-v-e93a6ee2${_scopeId2}><h2 class="text-bold" data-v-e93a6ee2${_scopeId2}>BEST OFFER</h2></div>`);
                } else {
                  return [
                    createVNode("div", { class: "card offer cursor" }, [
                      createVNode("img", {
                        src: "https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg",
                        alt: ""
                      }),
                      createVNode("h2", { class: "text-bold" }, "BEST OFFER")
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
                lg: 16,
                onClick: ($event) => unref(router).push("/events")
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "card event cursor" }, [
                    createVNode("img", {
                      src: "https://storage.googleapis.com/dsv-bucket/gallery/5fd47819972a6.jpeg",
                      alt: ""
                    }),
                    createVNode("h2", { class: "text-bold" }, "Our Event")
                  ])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_a_col, {
                sm: 24,
                lg: 8,
                onClick: ($event) => unref(router).push("/offer")
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "card offer cursor" }, [
                    createVNode("img", {
                      src: "https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg",
                      alt: ""
                    }),
                    createVNode("h2", { class: "text-bold" }, "BEST OFFER")
                  ])
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_row, { justify: "center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, { span: 24 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_divider, { style: { "border-color": "#000" } }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_divider, { style: { "border-color": "#000" } })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, { span: 24 }, {
                default: withCtx(() => [
                  createVNode(_component_a_divider, { style: { "border-color": "#000" } })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br data-v-e93a6ee2>`);
      _push(ssrRenderComponent(_component_a_row, {
        class: "cursor",
        onClick: ($event) => unref(router).push("/news/65dea9c32632b6dbad0e7de5"),
        justify: "center",
        style: { "padding-bottom": "1rem" },
        gutter: 20
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, {
              sm: 24,
              lg: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="card news" data-v-e93a6ee2${_scopeId2}><img src="https://storage.googleapis.com/dsv-bucket/gallery/5754f0381ebd4.jpeg" alt="" data-v-e93a6ee2${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "card news" }, [
                      createVNode("img", {
                        src: "https://storage.googleapis.com/dsv-bucket/gallery/5754f0381ebd4.jpeg",
                        alt: ""
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, {
              sm: 24,
              lg: 12
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-bold" data-v-e93a6ee2${_scopeId2}>NEWS</h2><p data-v-e93a6ee2${_scopeId2}>The latest 4-star hotel in Vientiane, Laos. Green Park Boutique Hotel Captures a Lao-style orientation with the finest contemporary architecture of Laos. The elegance of the interiors, both historic and contemporary settings are combined to create the most distinguished collection of stylish and luxurious boutique hotels in Vientiane.</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-bold" }, "NEWS"),
                    createVNode("p", null, "The latest 4-star hotel in Vientiane, Laos. Green Park Boutique Hotel Captures a Lao-style orientation with the finest contemporary architecture of Laos. The elegance of the interiors, both historic and contemporary settings are combined to create the most distinguished collection of stylish and luxurious boutique hotels in Vientiane.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, {
                sm: 24,
                lg: 12
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "card news" }, [
                    createVNode("img", {
                      src: "https://storage.googleapis.com/dsv-bucket/gallery/5754f0381ebd4.jpeg",
                      alt: ""
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                sm: 24,
                lg: 12
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "text-bold" }, "NEWS"),
                  createVNode("p", null, "The latest 4-star hotel in Vientiane, Laos. Green Park Boutique Hotel Captures a Lao-style orientation with the finest contemporary architecture of Laos. The elegance of the interiors, both historic and contemporary settings are combined to create the most distinguished collection of stylish and luxurious boutique hotels in Vientiane.")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/News.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const News = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e93a6ee2"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Swiper",
  __ssrInlineRender: true,
  setup(__props) {
    const swipy = ref();
    const images = ref(["https://storage.googleapis.com/dsv-bucket/activity2.jpeg", "https://storage.googleapis.com/dsv-bucket/activity2.jpeg"]);
    const onSwiper = (swiper) => {
      swipy.value = swiper;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 1,
        "space-between": 10,
        loop: true,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        onSwiper,
        autoplay: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(images), (image, idx) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: idx,
                onClick: ($event) => unref(swipy).slideNext()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="is-desktop" style="${ssrRenderStyle({
                      width: "100%",
                      height: "600px",
                      backgroundSize: "cover",
                      backgroundImage: "url(" + image + ")",
                      backgroundPosition: "center"
                    })}"${_scopeId2}></div><div class="is-mobile" style="${ssrRenderStyle({
                      width: "100%",
                      height: "500px",
                      backgroundSize: "cover",
                      backgroundImage: "url(" + image + ")",
                      backgroundPosition: "center"
                    })}"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "is-desktop",
                        style: {
                          width: "100%",
                          height: "600px",
                          backgroundSize: "cover",
                          backgroundImage: "url(" + image + ")",
                          backgroundPosition: "center"
                        }
                      }, null, 4),
                      createVNode("div", {
                        class: "is-mobile",
                        style: {
                          width: "100%",
                          height: "500px",
                          backgroundSize: "cover",
                          backgroundImage: "url(" + image + ")",
                          backgroundPosition: "center"
                        }
                      }, null, 4)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="swiper-button-prev"${_scopeId}></div><div class="swiper-button-next"${_scopeId}></div><div class="swiper-scrollbar"${_scopeId}></div>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image, idx) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: idx,
                  onClick: ($event) => unref(swipy).slideNext()
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "is-desktop",
                      style: {
                        width: "100%",
                        height: "600px",
                        backgroundSize: "cover",
                        backgroundImage: "url(" + image + ")",
                        backgroundPosition: "center"
                      }
                    }, null, 4),
                    createVNode("div", {
                      class: "is-mobile",
                      style: {
                        width: "100%",
                        height: "500px",
                        backgroundSize: "cover",
                        backgroundImage: "url(" + image + ")",
                        backgroundPosition: "center"
                      }
                    }, null, 4)
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128)),
              createVNode("div", {
                class: "swiper-button-prev",
                onClick: ($event) => unref(swipy).slidePrev()
              }, null, 8, ["onClick"]),
              createVNode("div", {
                class: "swiper-button-next",
                onClick: ($event) => unref(swipy).slideNext()
              }, null, 8, ["onClick"]),
              createVNode("div", { class: "swiper-scrollbar" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Swiper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout_content = LayoutContent;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, {
        class: "content-container",
        style: { background: "#F4F4F4", color: "#000" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-width" data-v-37d8a1fe${_scopeId}>`);
            _push2(ssrRenderComponent(Welcome, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-width" }, [
                createVNode(Welcome)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="has-background" data-v-37d8a1fe${_scopeId}><div class="max-width" data-v-37d8a1fe${_scopeId}>`);
            _push2(ssrRenderComponent(HotelInfo, null, null, _parent2, _scopeId));
            _push2(`</div></section>`);
          } else {
            return [
              createVNode("section", { class: "has-background" }, [
                createVNode("div", { class: "max-width" }, [
                  createVNode(HotelInfo)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section data-v-37d8a1fe${_scopeId}><div class="content-container" data-v-37d8a1fe${_scopeId}><div class="max-width" data-v-37d8a1fe${_scopeId}>`);
            _push2(ssrRenderComponent(News, null, null, _parent2, _scopeId));
            _push2(`</div></div></section>`);
          } else {
            return [
              createVNode("section", null, [
                createVNode("div", { class: "content-container" }, [
                  createVNode("div", { class: "max-width" }, [
                    createVNode(News)
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37d8a1fe"]]);

export { index as default };
//# sourceMappingURL=index-q0fFUHuF.mjs.map
