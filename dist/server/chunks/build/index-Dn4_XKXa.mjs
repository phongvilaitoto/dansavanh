import { defineComponent, computed, ref, watch, createVNode, Fragment, useSSRContext, mergeProps, withCtx, unref, toDisplayString, openBlock, createBlock, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-RI3yC8vX.mjs';
import { _ as _imports_0 } from './decoration-1-KlcFkPXq.mjs';
import { h as useConfigInject, i as classNames, j as filterEmpty, P as PropTypes, t as tuple, k as booleanType, e as useMainStore, s as storeToRefs, b as useLocalePath, u as useHead } from './server.mjs';
import { u as useFlexGapSupport, _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-mrjKPo2m.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { u as useStyle, C as Compact } from './Compact-DWqqMN9n.mjs';
import News from './index-Yd9LGQ4q.mjs';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { L as LayoutContent } from './index-CKfP-yp2.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-google-map';
import 'stylis';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'vue-types';
import './createContext-DErE1G0Y.mjs';
import 'lodash-es';

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
    const [wrapSSR, hashId] = useStyle(prefixCls);
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "VideoPlayer",
  __ssrInlineRender: true,
  props: ["video"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ml-20 mr-20 max-width mt-50" }, _attrs))}><div style="${ssrRenderStyle(__props.video ? null : { display: "none" })}"><video id="player" controls><source${ssrRenderAttr("src", __props.video)} type="video/mp4"></video></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoPlayer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const { main, selectedIdx } = storeToRefs(store);
    const localePath = useLocalePath();
    const isHover = ref(null);
    const icons = ref([
      "https://storage.googleapis.com/dsv-bucket/logo_casino.png",
      "https://storage.googleapis.com/dsv-bucket/logo_jetski.png",
      "https://storage.googleapis.com/dsv-bucket/logo_golf.png"
    ]);
    ref([
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
      const _component_a_col = __nuxt_component_2;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-width" }, _attrs))} data-v-c218083e>`);
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
                  _push3(`<h1 class="text-uppercase" data-v-c218083e${_scopeId2}>${ssrInterpolate(unref(main).home.titles[unref(selectedIdx)])}</h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-uppercase" }, toDisplayString(unref(main).home.titles[unref(selectedIdx)]), 1)
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
                  _push3(`<p class="text-center" data-v-c218083e${_scopeId2}>${ssrInterpolate(unref(main).home.descriptions[unref(selectedIdx)])}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-center" }, toDisplayString(unref(main).home.descriptions[unref(selectedIdx)]), 1)
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
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-c218083e${_scopeId2}>`);
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
                  createVNode("h1", { class: "text-uppercase" }, toDisplayString(unref(main).home.titles[unref(selectedIdx)]), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                span: 24,
                sm: 18
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-center" }, toDisplayString(unref(main).home.descriptions[unref(selectedIdx)]), 1)
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
      _push(ssrRenderComponent(_sfc_main$4, {
        style: { "margin": "30px 0" },
        video: unref(main).home.video
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_row, {
        justify: "center",
        gutter: 20
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(main).home.cardZone, (i, key, idx) => {
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
                    _push3(`<div class="card-swiper" data-v-c218083e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: unref(localePath)(i.link)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="casino-card" data-v-c218083e${_scopeId3}><img class="casino-card-image"${ssrRenderAttr("src", i.img)} alt="" data-v-c218083e${_scopeId3}><div class="casino-card-text-top" data-v-c218083e${_scopeId3}><img${ssrRenderAttr("src", unref(icons)[idx])} alt="" data-v-c218083e${_scopeId3}></div>`);
                          if (unref(isHover) !== idx) {
                            _push4(`<div class="casino-card-text" data-v-c218083e${_scopeId3}><h2 data-v-c218083e${_scopeId3}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2></div>`);
                          } else {
                            _push4(`<div class="casino-card-text" data-v-c218083e${_scopeId3}><p data-v-c218083e${_scopeId3}>${ssrInterpolate(i.descriptions[unref(selectedIdx)])}</p></div>`);
                          }
                          _push4(`</div><p data-v-c218083e${_scopeId3}></p>`);
                        } else {
                          return [
                            createVNode("div", { class: "casino-card" }, [
                              createVNode("img", {
                                class: "casino-card-image",
                                src: i.img,
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "casino-card-text-top" }, [
                                createVNode("img", {
                                  src: unref(icons)[idx],
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              unref(isHover) !== idx ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "casino-card-text"
                              }, [
                                createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1)
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "casino-card-text"
                              }, [
                                createVNode("p", null, toDisplayString(i.descriptions[unref(selectedIdx)]), 1)
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
                          to: unref(localePath)(i.link)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "casino-card" }, [
                              createVNode("img", {
                                class: "casino-card-image",
                                src: i.img,
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "casino-card-text-top" }, [
                                createVNode("img", {
                                  src: unref(icons)[idx],
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              unref(isHover) !== idx ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "casino-card-text"
                              }, [
                                createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1)
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "casino-card-text"
                              }, [
                                createVNode("p", null, toDisplayString(i.descriptions[unref(selectedIdx)]), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(main).home.cardZone, (i, key, idx) => {
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
                        to: unref(localePath)(i.link)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "casino-card" }, [
                            createVNode("img", {
                              class: "casino-card-image",
                              src: i.img,
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "casino-card-text-top" }, [
                              createVNode("img", {
                                src: unref(icons)[idx],
                                alt: ""
                              }, null, 8, ["src"])
                            ]),
                            unref(isHover) !== idx ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "casino-card-text"
                            }, [
                              createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1)
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "casino-card-text"
                            }, [
                              createVNode("p", null, toDisplayString(i.descriptions[unref(selectedIdx)]), 1)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Welcome.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c218083e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HotelInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const localePath = useLocalePath();
    const { main, selectedIdx } = storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_space = Space;
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
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-0b8ea9fe${_scopeId2}>`);
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
                  _push3(`<div class="card-info" data-v-0b8ea9fe${_scopeId2}><img${ssrRenderAttr("src", unref(main).home.hotelZone.img)} alt="" data-v-0b8ea9fe${_scopeId2}><h2 class="text-shadow text-bold" data-v-0b8ea9fe${_scopeId2}>${ssrInterpolate(unref(main).home.hotelZone.titles[unref(selectedIdx)])}</h2></div>`);
                } else {
                  return [
                    createVNode("div", { class: "card-info" }, [
                      createVNode("img", {
                        src: unref(main).home.hotelZone.img,
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("h2", { class: "text-shadow text-bold" }, toDisplayString(unref(main).home.hotelZone.titles[unref(selectedIdx)]), 1)
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
                      src: unref(main).home.hotelZone.img,
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode("h2", { class: "text-shadow text-bold" }, toDisplayString(unref(main).home.hotelZone.titles[unref(selectedIdx)]), 1)
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
                  _push3(`<button class="btn btn-2 hover-slide-up" data-v-0b8ea9fe${_scopeId2}><span data-v-0b8ea9fe${_scopeId2}>${ssrInterpolate(_ctx.$t("viewHotelsButton"))}</span></button>`);
                } else {
                  return [
                    createVNode("button", {
                      class: "btn btn-2 hover-slide-up",
                      onClick: ($event) => _ctx.$router.push(unref(localePath)("/hotels"))
                    }, [
                      createVNode("span", null, toDisplayString(_ctx.$t("viewHotelsButton")), 1)
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_space, null, {
                default: withCtx(() => [
                  createVNode("button", {
                    class: "btn btn-2 hover-slide-up",
                    onClick: ($event) => _ctx.$router.push(unref(localePath)("/hotels"))
                  }, [
                    createVNode("span", null, toDisplayString(_ctx.$t("viewHotelsButton")), 1)
                  ], 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HotelInfo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HotelInfo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0b8ea9fe"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Swiper",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const { main, selectedIdx } = storeToRefs(store);
    const swipy = ref();
    ref([
      "https://storage.googleapis.com/dsv-bucket/activity2.jpeg",
      "https://storage.googleapis.com/dsv-bucket/activity2.jpeg"
    ]);
    const onSwiper = (swiper) => {
      swipy.value = swiper;
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(main).home && unref(main).home.imgs) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 1,
          "space-between": 10,
          loop: true,
          modules: [unref(Pagination)],
          pagination: { clickable: true },
          onSwiper,
          autoplay: true,
          effect: "fade",
          class: "swiper-container-home-banner"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(main).home.imgs, (image, idx) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: idx,
                  onClick: ($event) => unref(swipy).slideNext(),
                  class: "swiper-slide slide-animation"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="is-desktop" style="${ssrRenderStyle({
                        width: "100%",
                        // height: '620px',
                        backgroundSize: "cover",
                        backgroundImage: "url(" + image + ")",
                        backgroundPosition: "center",
                        aspectRatio: 16 / 8
                      })}"${_scopeId2}></div><div class="is-mobile" style="${ssrRenderStyle({
                        width: "100%",
                        // height: '520px',
                        backgroundSize: "cover",
                        backgroundImage: "url(" + image + ")",
                        backgroundPosition: "center",
                        aspectRatio: 16 / 8
                      })}"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "is-desktop",
                          style: {
                            width: "100%",
                            // height: '620px',
                            backgroundSize: "cover",
                            backgroundImage: "url(" + image + ")",
                            backgroundPosition: "center",
                            aspectRatio: 16 / 8
                          }
                        }, null, 4),
                        createVNode("div", {
                          class: "is-mobile",
                          style: {
                            width: "100%",
                            // height: '520px',
                            backgroundSize: "cover",
                            backgroundImage: "url(" + image + ")",
                            backgroundPosition: "center",
                            aspectRatio: 16 / 8
                          }
                        }, null, 4)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--><div class="swiper-button-prev"${_scopeId}></div><div class="swiper-button-next"${_scopeId}></div>`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(main).home.imgs, (image, idx) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: idx,
                    onClick: ($event) => unref(swipy).slideNext(),
                    class: "swiper-slide slide-animation"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "is-desktop",
                        style: {
                          width: "100%",
                          // height: '620px',
                          backgroundSize: "cover",
                          backgroundImage: "url(" + image + ")",
                          backgroundPosition: "center",
                          aspectRatio: 16 / 8
                        }
                      }, null, 4),
                      createVNode("div", {
                        class: "is-mobile",
                        style: {
                          width: "100%",
                          // height: '520px',
                          backgroundSize: "cover",
                          backgroundImage: "url(" + image + ")",
                          backgroundPosition: "center",
                          aspectRatio: 16 / 8
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
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(swipy)) {
          _push(`<div style="${ssrRenderStyle({ "position": "relative", "display": "flex", "justify-content": "center" })}"><p class="text-shadow" style="${ssrRenderStyle({ "position": "absolute", "color": "white", "font-size": "30px", "margin-top": "-80px", "z-index": "99999", "font-family": "'Playfair Display', serif" })}"></p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
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
    const localePath = useLocalePath();
    useHead({
      title: "DANSAVANH",
      meta: [{ name: "description", content: "DANSAVANH" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout_content = LayoutContent;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-85469cc6>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, {
        "data-aos": "fade-up",
        class: "content-container",
        style: { background: "#F4F4F4", color: "#000" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-85469cc6${_scopeId}>`);
            _push2(ssrRenderComponent(Welcome, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(Welcome)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, { "data-aos": "slide-up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="has-background" data-v-85469cc6${_scopeId}><div class="max-width" data-v-85469cc6${_scopeId}>`);
            _push2(ssrRenderComponent(HotelInfo, null, null, _parent2, _scopeId));
            _push2(`<br data-v-85469cc6${_scopeId}></div></section>`);
          } else {
            return [
              createVNode("section", { class: "has-background" }, [
                createVNode("div", { class: "max-width" }, [
                  createVNode(HotelInfo),
                  createVNode("br")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, { "data-aos": "fade-up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section data-v-85469cc6${_scopeId}><div class="content-container" data-v-85469cc6${_scopeId}><div class="max-width" data-v-85469cc6${_scopeId}>`);
            _push2(ssrRenderComponent(News, { isComp: true }, null, _parent2, _scopeId));
            _push2(`<div class="text-center" data-v-85469cc6${_scopeId}><button class="btn btn-2 hover-slide-up" data-v-85469cc6${_scopeId}><span data-v-85469cc6${_scopeId}>${ssrInterpolate(_ctx.$t("viewNews"))}</span></button><br data-v-85469cc6${_scopeId}><br data-v-85469cc6${_scopeId}></div></div></div></section>`);
          } else {
            return [
              createVNode("section", null, [
                createVNode("div", { class: "content-container" }, [
                  createVNode("div", { class: "max-width" }, [
                    createVNode(News, { isComp: true }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("button", {
                        class: "btn btn-2 hover-slide-up",
                        onClick: ($event) => _ctx.$router.push(unref(localePath)("/news"))
                      }, [
                        createVNode("span", null, toDisplayString(_ctx.$t("viewNews")), 1)
                      ], 8, ["onClick"]),
                      createVNode("br"),
                      createVNode("br")
                    ])
                  ])
                ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-85469cc6"]]);

export { index as default };
//# sourceMappingURL=index-Dn4_XKXa.mjs.map
