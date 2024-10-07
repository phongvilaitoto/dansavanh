import { defineComponent, ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, toDisplayString, createTextVNode, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { i as useMainStore, s as storeToRefs, f as useLocalePath, u as useRouter } from "../server.mjs";
/* empty css                    */
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { _ as _imports_0 } from "./decoration-1-KlcFkPXq.js";
import { G as Gallery } from "./gallery-Ckvcd9up.js";
import { _ as __nuxt_component_0, L as LayoutContent } from "./index-DTnbOyTJ.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from "./index-DxkjXEE1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RoomSwiper",
  __ssrInlineRender: true,
  props: ["rooms"],
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
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 1,
        "space-between": 10,
        loop: true,
        effect: "fade",
        modules: [unref(Pagination)],
        pagination: { clickable: true },
        onSwiper,
        autoplay: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList([...__props.rooms, __props.rooms[2]], (i, idx) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: idx,
                onClick: ($event) => unref(swipy).slideNext()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="is-desktop" style="${ssrRenderStyle({
                      width: "100%",
                      height: "410px",
                      backgroundSize: "cover",
                      backgroundImage: "url(" + i.img + ")",
                      backgroundPosition: "center"
                    })}"${_scopeId2}></div><div class="is-mobile" style="${ssrRenderStyle({
                      width: "100%",
                      height: "510px",
                      backgroundSize: "cover",
                      backgroundImage: "url(" + i.img + ")",
                      backgroundPosition: "center"
                    })}"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "is-desktop",
                        style: {
                          width: "100%",
                          height: "410px",
                          backgroundSize: "cover",
                          backgroundImage: "url(" + i.img + ")",
                          backgroundPosition: "center"
                        }
                      }, null, 4),
                      createVNode("div", {
                        class: "is-mobile",
                        style: {
                          width: "100%",
                          height: "510px",
                          backgroundSize: "cover",
                          backgroundImage: "url(" + i.img + ")",
                          backgroundPosition: "center"
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
              (openBlock(true), createBlock(Fragment, null, renderList([...__props.rooms, __props.rooms[2]], (i, idx) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: idx,
                  onClick: ($event) => unref(swipy).slideNext()
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "is-desktop",
                      style: {
                        width: "100%",
                        height: "410px",
                        backgroundSize: "cover",
                        backgroundImage: "url(" + i.img + ")",
                        backgroundPosition: "center"
                      }
                    }, null, 4),
                    createVNode("div", {
                      class: "is-mobile",
                      style: {
                        width: "100%",
                        height: "510px",
                        backgroundSize: "cover",
                        backgroundImage: "url(" + i.img + ")",
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
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(swipy)) {
        _push(`<div style="${ssrRenderStyle({ "position": "relative", "display": "flex", "justify-content": "center" })}"><p class="text-shadow" style="${ssrRenderStyle({ "position": "absolute", "color": "white", "font-size": "30px", "margin-top": "-80px", "z-index": "99999" })}">${ssrInterpolate(__props.rooms[unref(swipy).realIndex].titles[unref(selectedIdx)])}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RoomSwiper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Facility",
  __ssrInlineRender: true,
  props: ["facilities"],
  setup(__props) {
    const store = useMainStore();
    const { main, selectedIdx } = storeToRefs(store);
    const swipy = ref();
    ref(["https://storage.googleapis.com/dsv-bucket/activity2.jpeg", "https://storage.googleapis.com/dsv-bucket/activity2.jpeg"]);
    const onSwiper = (swiper) => {
      swipy.value = swiper;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 3,
        "space-between": 10,
        loop: true,
        modules: [unref(Pagination)],
        pagination: { clickable: true },
        onSwiper,
        autoplay: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList([...__props.facilities, __props.facilities[2]], (i, idx) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: idx,
                onClick: ($event) => unref(swipy).slideNext()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="is-desktop" style="${ssrRenderStyle({
                      width: "100%",
                      height: "575px",
                      backgroundSize: "cover",
                      backgroundImage: "url(" + i.img + ")",
                      backgroundPosition: "center"
                    })}"${_scopeId2}></div><div class="is-mobile" style="${ssrRenderStyle({
                      width: "100%",
                      height: "725px",
                      backgroundSize: "cover",
                      backgroundImage: "url(" + i.img + ")",
                      backgroundPosition: "center"
                    })}"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "is-desktop",
                        style: {
                          width: "100%",
                          height: "575px",
                          backgroundSize: "cover",
                          backgroundImage: "url(" + i.img + ")",
                          backgroundPosition: "center"
                        }
                      }, null, 4),
                      createVNode("div", {
                        class: "is-mobile",
                        style: {
                          width: "100%",
                          height: "725px",
                          backgroundSize: "cover",
                          backgroundImage: "url(" + i.img + ")",
                          backgroundPosition: "center"
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
              (openBlock(true), createBlock(Fragment, null, renderList([...__props.facilities, __props.facilities[2]], (i, idx) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: idx,
                  onClick: ($event) => unref(swipy).slideNext()
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "is-desktop",
                      style: {
                        width: "100%",
                        height: "575px",
                        backgroundSize: "cover",
                        backgroundImage: "url(" + i.img + ")",
                        backgroundPosition: "center"
                      }
                    }, null, 4),
                    createVNode("div", {
                      class: "is-mobile",
                      style: {
                        width: "100%",
                        height: "725px",
                        backgroundSize: "cover",
                        backgroundImage: "url(" + i.img + ")",
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
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(swipy)) {
        _push(`<div style="${ssrRenderStyle({ "position": "relative", "display": "flex", "justify-content": "center" })}"><p class="text-shadow" style="${ssrRenderStyle({ "position": "absolute", "color": "white", "font-size": "30px", "margin-top": "-80px", "z-index": "99999" })}">${ssrInterpolate(__props.facilities[unref(swipy).realIndex].titles[unref(selectedIdx)])}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facility.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "hotelReuseComp",
  __ssrInlineRender: true,
  props: ["hotel"],
  setup(__props) {
    useLocalePath();
    const { selectedIdx } = storeToRefs(useMainStore());
    const isOdd = (n) => {
      return n % 2 !== 0;
    };
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout = __nuxt_component_0;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_layout_content = LayoutContent;
      const _component_RoomSwiper = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" style="${ssrRenderStyle(`background-image: url('${__props.hotel.detail.img}')`)}" data-v-1b50771c${_scopeId}><div class="bg-cover" data-v-1b50771c${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "center", "justify-content": "center", "background-color": "transparent" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 22 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerT1" style="${ssrRenderStyle({ "font-size": "45px" })}" data-v-1b50771c${_scopeId3}>${ssrInterpolate(__props.hotel.detail.titles[unref(selectedIdx)])}</h1>`);
                      } else {
                        return [
                          createVNode("h1", {
                            class: "headerT1",
                            style: { "font-size": "45px" }
                          }, toDisplayString(__props.hotel.detail.titles[unref(selectedIdx)]), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h1", {
                          class: "headerT1",
                          style: { "font-size": "45px" }
                        }, toDisplayString(__props.hotel.detail.titles[unref(selectedIdx)]), 1)
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
              createVNode("div", {
                class: "cover",
                style: `background-image: url('${__props.hotel.detail.img}')`
              }, [
                createVNode("div", { class: "bg-cover" }),
                createVNode(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "center", "justify-content": "center", "background-color": "transparent" } }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h1", {
                          class: "headerT1",
                          style: { "font-size": "45px" }
                        }, toDisplayString(__props.hotel.detail.titles[unref(selectedIdx)]), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 4)
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
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-1b50771c${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 12,
                    lg: 12,
                    style: { "text-align": "center" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "300", "margin-top": "24px" })}" data-v-1b50771c${_scopeId3}>${ssrInterpolate(__props.hotel.detail.descriptions[unref(selectedIdx)])}</p>`);
                      } else {
                        return [
                          createVNode("p", { style: { "font-size": "1rem", "font-weight": "300", "margin-top": "24px" } }, toDisplayString(__props.hotel.detail.descriptions[unref(selectedIdx)]), 1)
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
                      xs: 24,
                      sm: 24,
                      md: 12,
                      lg: 12,
                      style: { "text-align": "center" }
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { style: { "font-size": "1rem", "font-weight": "300", "margin-top": "24px" } }, toDisplayString(__props.hotel.detail.descriptions[unref(selectedIdx)]), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.hotel.detail.usedList.includes("cards")) {
              _push2(`<div class="blog" data-v-1b50771c${_scopeId}><!--[-->`);
              ssrRenderList(__props.hotel.detail.cards, (i, idx) => {
                _push2(ssrRenderComponent(_component_a_row, {
                  class: isOdd(idx + 1) ? "bg-left" : "bg-right"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_a_col, {
                        md: 12,
                        lg: 16,
                        class: "bg numngum",
                        style: `background-image: url('${i.img}')`
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_a_col, {
                        md: 12,
                        lg: 8,
                        class: "text-container"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="text-box" data-v-1b50771c${_scopeId3}><span data-v-1b50771c${_scopeId3}>DANSAVANH &amp; GOLF</span><h2 data-v-1b50771c${_scopeId3}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2><p data-v-1b50771c${_scopeId3}>${ssrInterpolate(i.descriptions[unref(selectedIdx)])}</p></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "text-box" }, [
                                createVNode("span", null, "DANSAVANH & GOLF"),
                                createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                createVNode("p", null, toDisplayString(i.descriptions[unref(selectedIdx)]), 1)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_a_col, {
                          md: 12,
                          lg: 16,
                          class: "bg numngum",
                          style: `background-image: url('${i.img}')`
                        }, null, 8, ["style"]),
                        createVNode(_component_a_col, {
                          md: 12,
                          lg: 8,
                          class: "text-container"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-box" }, [
                              createVNode("span", null, "DANSAVANH & GOLF"),
                              createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                              createVNode("p", null, toDisplayString(i.descriptions[unref(selectedIdx)]), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.hotel.detail.usedList.includes("rooms")) {
              _push2(`<div class="max-width" data-v-1b50771c${_scopeId}><div class="line-header" data-v-1b50771c${_scopeId}><span style="${ssrRenderStyle({ "font-family": "'Playfair Display', serif" })}" data-v-1b50771c${_scopeId}>ROOM </span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block", marginBottom: "50px" })}" data-v-1b50771c${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_a_row, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(__props.hotel.detail.rooms, (i) => {
                      _push3(ssrRenderComponent(_component_a_col, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_a_row, {
                              align: "middle",
                              class: "room-container"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_a_col, {
                                    xs: 24,
                                    sm: 24,
                                    lg: 14,
                                    class: "room-cover"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_RoomSwiper, {
                                          rooms: [i, ...__props.hotel.detail.rooms]
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_RoomSwiper, {
                                            rooms: [i, ...__props.hotel.detail.rooms]
                                          }, null, 8, ["rooms"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_a_col, {
                                    xs: 24,
                                    sm: 24,
                                    lg: 10,
                                    class: "room-info"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="text-box" data-v-1b50771c${_scopeId5}><h2 data-v-1b50771c${_scopeId5}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2><p class="fix-description" data-v-1b50771c${_scopeId5}>${ssrInterpolate(i.descriptions[unref(selectedIdx)])} <br data-v-1b50771c${_scopeId5}><br data-v-1b50771c${_scopeId5}></p><div class="action-group" data-v-1b50771c${_scopeId5}><a href="https://wa.me/8562052241111" data-v-1b50771c${_scopeId5}><button class="btn btn-2 hover-slide-up" data-v-1b50771c${_scopeId5}><span data-v-1b50771c${_scopeId5}>${ssrInterpolate(_ctx.$t("contact"))}</span></button></a><a href="#" data-v-1b50771c${_scopeId5}><button class="btn btn-2 hover-slide-up" data-v-1b50771c${_scopeId5}><span data-v-1b50771c${_scopeId5}>${ssrInterpolate(_ctx.$t("more"))}</span></button></a></div></div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "text-box" }, [
                                            createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                            createVNode("p", { class: "fix-description" }, [
                                              createTextVNode(toDisplayString(i.descriptions[unref(selectedIdx)]) + " ", 1),
                                              createVNode("br"),
                                              createVNode("br")
                                            ]),
                                            createVNode("div", { class: "action-group" }, [
                                              createVNode("a", { href: "https://wa.me/8562052241111" }, [
                                                createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                                  createVNode("span", null, toDisplayString(_ctx.$t("contact")), 1)
                                                ])
                                              ]),
                                              createVNode("a", { href: "#" }, [
                                                createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                                  createVNode("span", null, toDisplayString(_ctx.$t("more")), 1)
                                                ])
                                              ])
                                            ])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_a_col, {
                                      xs: 24,
                                      sm: 24,
                                      lg: 14,
                                      class: "room-cover"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_RoomSwiper, {
                                          rooms: [i, ...__props.hotel.detail.rooms]
                                        }, null, 8, ["rooms"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_a_col, {
                                      xs: 24,
                                      sm: 24,
                                      lg: 10,
                                      class: "room-info"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-box" }, [
                                          createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                          createVNode("p", { class: "fix-description" }, [
                                            createTextVNode(toDisplayString(i.descriptions[unref(selectedIdx)]) + " ", 1),
                                            createVNode("br"),
                                            createVNode("br")
                                          ]),
                                          createVNode("div", { class: "action-group" }, [
                                            createVNode("a", { href: "https://wa.me/8562052241111" }, [
                                              createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                                createVNode("span", null, toDisplayString(_ctx.$t("contact")), 1)
                                              ])
                                            ]),
                                            createVNode("a", { href: "#" }, [
                                              createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                                createVNode("span", null, toDisplayString(_ctx.$t("more")), 1)
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_a_row, {
                                align: "middle",
                                class: "room-container"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_col, {
                                    xs: 24,
                                    sm: 24,
                                    lg: 14,
                                    class: "room-cover"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_RoomSwiper, {
                                        rooms: [i, ...__props.hotel.detail.rooms]
                                      }, null, 8, ["rooms"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_a_col, {
                                    xs: 24,
                                    sm: 24,
                                    lg: 10,
                                    class: "room-info"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-box" }, [
                                        createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                        createVNode("p", { class: "fix-description" }, [
                                          createTextVNode(toDisplayString(i.descriptions[unref(selectedIdx)]) + " ", 1),
                                          createVNode("br"),
                                          createVNode("br")
                                        ]),
                                        createVNode("div", { class: "action-group" }, [
                                          createVNode("a", { href: "https://wa.me/8562052241111" }, [
                                            createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                              createVNode("span", null, toDisplayString(_ctx.$t("contact")), 1)
                                            ])
                                          ]),
                                          createVNode("a", { href: "#" }, [
                                            createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                              createVNode("span", null, toDisplayString(_ctx.$t("more")), 1)
                                            ])
                                          ])
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.hotel.detail.rooms, (i) => {
                        return openBlock(), createBlock(_component_a_col, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_row, {
                              align: "middle",
                              class: "room-container"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_col, {
                                  xs: 24,
                                  sm: 24,
                                  lg: 14,
                                  class: "room-cover"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_RoomSwiper, {
                                      rooms: [i, ...__props.hotel.detail.rooms]
                                    }, null, 8, ["rooms"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_a_col, {
                                  xs: 24,
                                  sm: 24,
                                  lg: 10,
                                  class: "room-info"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-box" }, [
                                      createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                      createVNode("p", { class: "fix-description" }, [
                                        createTextVNode(toDisplayString(i.descriptions[unref(selectedIdx)]) + " ", 1),
                                        createVNode("br"),
                                        createVNode("br")
                                      ]),
                                      createVNode("div", { class: "action-group" }, [
                                        createVNode("a", { href: "https://wa.me/8562052241111" }, [
                                          createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                            createVNode("span", null, toDisplayString(_ctx.$t("contact")), 1)
                                          ])
                                        ]),
                                        createVNode("a", { href: "#" }, [
                                          createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                            createVNode("span", null, toDisplayString(_ctx.$t("more")), 1)
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.hotel.detail.usedList.includes("facilities")) {
              _push2(`<div class="max-width" data-v-1b50771c${_scopeId}><div class="line-header" data-v-1b50771c${_scopeId}><span data-v-1b50771c${_scopeId}>${ssrInterpolate(_ctx.$t("facilities"))}</span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block", marginBottom: "50px" })}" data-v-1b50771c${_scopeId}></div>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                facilities: __props.hotel.detail.facilities
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.hotel.detail.usedList.includes("galleries")) {
              _push2(`<div data-v-1b50771c${_scopeId}><div class="line-header" data-v-1b50771c${_scopeId}><span data-v-1b50771c${_scopeId}>GALLERY</span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "40px", display: "block" })}" data-v-1b50771c${_scopeId}></div>`);
              _push2(ssrRenderComponent(Gallery, {
                galleries: __props.hotel.detail.galleries
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<br data-v-1b50771c${_scopeId}><br data-v-1b50771c${_scopeId}>`);
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
                    xs: 24,
                    sm: 24,
                    md: 12,
                    lg: 12,
                    style: { "text-align": "center" }
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { style: { "font-size": "1rem", "font-weight": "300", "margin-top": "24px" } }, toDisplayString(__props.hotel.detail.descriptions[unref(selectedIdx)]), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              __props.hotel.detail.usedList.includes("cards") ? (openBlock(), createBlock("div", {
                key: 0,
                class: "blog"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.hotel.detail.cards, (i, idx) => {
                  return openBlock(), createBlock(_component_a_row, {
                    class: isOdd(idx + 1) ? "bg-left" : "bg-right"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_col, {
                        md: 12,
                        lg: 16,
                        class: "bg numngum",
                        style: `background-image: url('${i.img}')`
                      }, null, 8, ["style"]),
                      createVNode(_component_a_col, {
                        md: 12,
                        lg: 8,
                        class: "text-container"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("span", null, "DANSAVANH & GOLF"),
                            createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                            createVNode("p", null, toDisplayString(i.descriptions[unref(selectedIdx)]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 256))
              ])) : createCommentVNode("", true),
              __props.hotel.detail.usedList.includes("rooms") ? (openBlock(), createBlock("div", {
                key: 1,
                class: "max-width"
              }, [
                createVNode("div", { class: "line-header" }, [
                  createVNode("span", { style: { "font-family": "'Playfair Display', serif" } }, "ROOM "),
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    style: { height: "50px", display: "block", marginBottom: "50px" }
                  })
                ]),
                createVNode(_component_a_row, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.hotel.detail.rooms, (i) => {
                      return openBlock(), createBlock(_component_a_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_a_row, {
                            align: "middle",
                            class: "room-container"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_a_col, {
                                xs: 24,
                                sm: 24,
                                lg: 14,
                                class: "room-cover"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_RoomSwiper, {
                                    rooms: [i, ...__props.hotel.detail.rooms]
                                  }, null, 8, ["rooms"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_a_col, {
                                xs: 24,
                                sm: 24,
                                lg: 10,
                                class: "room-info"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-box" }, [
                                    createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                    createVNode("p", { class: "fix-description" }, [
                                      createTextVNode(toDisplayString(i.descriptions[unref(selectedIdx)]) + " ", 1),
                                      createVNode("br"),
                                      createVNode("br")
                                    ]),
                                    createVNode("div", { class: "action-group" }, [
                                      createVNode("a", { href: "https://wa.me/8562052241111" }, [
                                        createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                          createVNode("span", null, toDisplayString(_ctx.$t("contact")), 1)
                                        ])
                                      ]),
                                      createVNode("a", { href: "#" }, [
                                        createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                          createVNode("span", null, toDisplayString(_ctx.$t("more")), 1)
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              __props.hotel.detail.usedList.includes("facilities") ? (openBlock(), createBlock("div", {
                key: 2,
                class: "max-width"
              }, [
                createVNode("div", { class: "line-header" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("facilities")), 1),
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    style: { height: "50px", display: "block", marginBottom: "50px" }
                  })
                ]),
                createVNode(_sfc_main$1, {
                  facilities: __props.hotel.detail.facilities
                }, null, 8, ["facilities"])
              ])) : createCommentVNode("", true),
              __props.hotel.detail.usedList.includes("galleries") ? (openBlock(), createBlock("div", { key: 3 }, [
                createVNode("div", { class: "line-header" }, [
                  createVNode("span", null, "GALLERY"),
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    style: { height: "40px", display: "block" }
                  })
                ]),
                createVNode(Gallery, {
                  galleries: __props.hotel.detail.galleries
                }, null, 8, ["galleries"])
              ])) : createCommentVNode("", true),
              createVNode("br"),
              createVNode("br")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hotelReuseComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HotelReuseComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1b50771c"]]);
export {
  HotelReuseComp as H
};
//# sourceMappingURL=hotelReuseComp-BwnXj9ux.js.map
