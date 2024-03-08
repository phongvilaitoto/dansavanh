import { _ as _export_sfc, a as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString, unref, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { B as Button } from './index-nCHNwxKS.mjs';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-j6mHhOx5.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-5qJONfuq.mjs';
import '../../nitro/vercel.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@yeger/vue-masonry-wall';
import '@babel/runtime/helpers/esm/extends';
import 'stylis';
import '@babel/runtime/helpers/esm/objectSpread2';
import '../../LoadingOutlined.mjs';
import './compact-item-0fAWjO3D.mjs';
import 'lodash-es';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'vue-types';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout = __nuxt_component_0;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_layout_content = LayoutContent;
      const _component_a_button = Button;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-12246999${_scopeId}><div class="bg-cover" data-v-12246999${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              style: { "padding-top": "180px", "padding-bottom": "62px", "text-align": "center", "background-color": "transparent" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 14 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="headerT2" data-v-12246999${_scopeId3}>${ssrInterpolate(_ctx.$t("STEP IN THE WORLD OF DANSAVANH"))}</h5>`);
                      } else {
                        return [
                          createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("STEP IN THE WORLD OF DANSAVANH")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 12
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerT1" data-v-12246999${_scopeId3}>${ssrInterpolate(_ctx.$t("OUR HOTELS"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("OUR HOTELS")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 14 }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("STEP IN THE WORLD OF DANSAVANH")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 12
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("OUR HOTELS")), 1)
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
                createVNode(_component_a_row, {
                  justify: "center",
                  style: { "padding-top": "180px", "padding-bottom": "62px", "text-align": "center", "background-color": "transparent" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 14 }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("STEP IN THE WORLD OF DANSAVANH")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 12
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("OUR HOTELS")), 1)
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
      _push(ssrRenderComponent(_component_a_layout_content, { class: "layout" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="blog" data-v-12246999${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, { class: "bg-left" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 16,
                    class: "bg numngum"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 8,
                    class: "text-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-12246999${_scopeId3}><span data-v-12246999${_scopeId3}>DANSAVANH &amp; HOTELS</span><h2 data-v-12246999${_scopeId3}>DANSAVANH NAM NGUM RESORT AND CASINO</h2><p data-v-12246999${_scopeId3}> Peak of Buffalo Mountain\uFF08Phou Khao Khouay\uFF09 facing the biggest freshwater lake in Laos, 60km from Vientiane. You will find varieties of excitement awaits you in this one of a kind hill top location with pampering spa services after a daylong of water activities; or even sumptuous dining experience at the lake side restaurants. If you are one that loves watching over a sky of glazing stars at night from your room or at our open air beer garden, you will find the clock clicks too fast. The thrill of excitement at our internationally rated casino is just a step away and you could be hitting a jackpot that makes you plan your next trip here in advance. </p>`);
                        _push4(ssrRenderComponent(_component_a_button, {
                          onClick: ($event) => unref(router).push("/hotels/numngum"),
                          class: "view-button bg-white"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`View Hotel`);
                            } else {
                              return [
                                createTextVNode("View Hotel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("span", null, "DANSAVANH & HOTELS"),
                            createVNode("h2", null, "DANSAVANH NAM NGUM RESORT AND CASINO"),
                            createVNode("p", null, " Peak of Buffalo Mountain\uFF08Phou Khao Khouay\uFF09 facing the biggest freshwater lake in Laos, 60km from Vientiane. You will find varieties of excitement awaits you in this one of a kind hill top location with pampering spa services after a daylong of water activities; or even sumptuous dining experience at the lake side restaurants. If you are one that loves watching over a sky of glazing stars at night from your room or at our open air beer garden, you will find the clock clicks too fast. The thrill of excitement at our internationally rated casino is just a step away and you could be hitting a jackpot that makes you plan your next trip here in advance. "),
                            createVNode(_component_a_button, {
                              onClick: ($event) => unref(router).push("/hotels/numngum"),
                              class: "view-button bg-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("View Hotel")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
                      md: 24,
                      lg: 16,
                      class: "bg numngum"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & HOTELS"),
                          createVNode("h2", null, "DANSAVANH NAM NGUM RESORT AND CASINO"),
                          createVNode("p", null, " Peak of Buffalo Mountain\uFF08Phou Khao Khouay\uFF09 facing the biggest freshwater lake in Laos, 60km from Vientiane. You will find varieties of excitement awaits you in this one of a kind hill top location with pampering spa services after a daylong of water activities; or even sumptuous dining experience at the lake side restaurants. If you are one that loves watching over a sky of glazing stars at night from your room or at our open air beer garden, you will find the clock clicks too fast. The thrill of excitement at our internationally rated casino is just a step away and you could be hitting a jackpot that makes you plan your next trip here in advance. "),
                          createVNode(_component_a_button, {
                            onClick: ($event) => unref(router).push("/hotels/numngum"),
                            class: "view-button bg-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View Hotel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_row, { class: "bg-right" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 16,
                    class: "bg vte"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 8,
                    class: "text-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-12246999${_scopeId3}><span data-v-12246999${_scopeId3}>DANSAVANH &amp; HOTELS</span><h2 data-v-12246999${_scopeId3}>DANSAVANH VIENTIANE HOTEL</h2><p data-v-12246999${_scopeId3}> Situated in the city of Vientiane, 5 minute drive to Wattay International Airport and 10 minute to downtown centre and night market makes it a preferred location to many travellers. There is a banquet room that can accommodate 800 people and has witnessed umpteen wedding celebrations. </p>`);
                        _push4(ssrRenderComponent(_component_a_button, {
                          onClick: ($event) => unref(router).push("hotels/golf"),
                          class: "view-button bg-white"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`View Hotel`);
                            } else {
                              return [
                                createTextVNode("View Hotel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("span", null, "DANSAVANH & HOTELS"),
                            createVNode("h2", null, "DANSAVANH VIENTIANE HOTEL"),
                            createVNode("p", null, " Situated in the city of Vientiane, 5 minute drive to Wattay International Airport and 10 minute to downtown centre and night market makes it a preferred location to many travellers. There is a banquet room that can accommodate 800 people and has witnessed umpteen wedding celebrations. "),
                            createVNode(_component_a_button, {
                              onClick: ($event) => unref(router).push("hotels/golf"),
                              class: "view-button bg-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("View Hotel")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
                      md: 24,
                      lg: 16,
                      class: "bg vte"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & HOTELS"),
                          createVNode("h2", null, "DANSAVANH VIENTIANE HOTEL"),
                          createVNode("p", null, " Situated in the city of Vientiane, 5 minute drive to Wattay International Airport and 10 minute to downtown centre and night market makes it a preferred location to many travellers. There is a banquet room that can accommodate 800 people and has witnessed umpteen wedding celebrations. "),
                          createVNode(_component_a_button, {
                            onClick: ($event) => unref(router).push("hotels/golf"),
                            class: "view-button bg-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View Hotel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_row, { class: "bg-left" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 16,
                    class: "bg golf"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 8,
                    class: "text-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-12246999${_scopeId3}><span data-v-12246999${_scopeId3}>DANSAVANH &amp; HOTELS</span><h2 data-v-12246999${_scopeId3}>DANSAVANH GOLF &amp; COUNTRY CLUB</h2><p data-v-12246999${_scopeId3}> Well known for its kind of view that blends the art of green fairways enclosed with forest of pines at elevations. Enjoy a business meeting leisurely accompanied by chirping birds and excellent entertainment facilities, a hard to come by venue for golfers. </p>`);
                        _push4(ssrRenderComponent(_component_a_button, {
                          onClick: ($event) => unref(router).push("hotels/vientaine-hotel"),
                          class: "view-button bg-white"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`View Hotel`);
                            } else {
                              return [
                                createTextVNode("View Hotel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("span", null, "DANSAVANH & HOTELS"),
                            createVNode("h2", null, "DANSAVANH GOLF & COUNTRY CLUB"),
                            createVNode("p", null, " Well known for its kind of view that blends the art of green fairways enclosed with forest of pines at elevations. Enjoy a business meeting leisurely accompanied by chirping birds and excellent entertainment facilities, a hard to come by venue for golfers. "),
                            createVNode(_component_a_button, {
                              onClick: ($event) => unref(router).push("hotels/vientaine-hotel"),
                              class: "view-button bg-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("View Hotel")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
                      md: 24,
                      lg: 16,
                      class: "bg golf"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & HOTELS"),
                          createVNode("h2", null, "DANSAVANH GOLF & COUNTRY CLUB"),
                          createVNode("p", null, " Well known for its kind of view that blends the art of green fairways enclosed with forest of pines at elevations. Enjoy a business meeting leisurely accompanied by chirping birds and excellent entertainment facilities, a hard to come by venue for golfers. "),
                          createVNode(_component_a_button, {
                            onClick: ($event) => unref(router).push("hotels/vientaine-hotel"),
                            class: "view-button bg-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View Hotel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
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
              createVNode("div", { class: "blog" }, [
                createVNode(_component_a_row, { class: "bg-left" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 16,
                      class: "bg numngum"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & HOTELS"),
                          createVNode("h2", null, "DANSAVANH NAM NGUM RESORT AND CASINO"),
                          createVNode("p", null, " Peak of Buffalo Mountain\uFF08Phou Khao Khouay\uFF09 facing the biggest freshwater lake in Laos, 60km from Vientiane. You will find varieties of excitement awaits you in this one of a kind hill top location with pampering spa services after a daylong of water activities; or even sumptuous dining experience at the lake side restaurants. If you are one that loves watching over a sky of glazing stars at night from your room or at our open air beer garden, you will find the clock clicks too fast. The thrill of excitement at our internationally rated casino is just a step away and you could be hitting a jackpot that makes you plan your next trip here in advance. "),
                          createVNode(_component_a_button, {
                            onClick: ($event) => unref(router).push("/hotels/numngum"),
                            class: "view-button bg-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View Hotel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_row, { class: "bg-right" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 16,
                      class: "bg vte"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & HOTELS"),
                          createVNode("h2", null, "DANSAVANH VIENTIANE HOTEL"),
                          createVNode("p", null, " Situated in the city of Vientiane, 5 minute drive to Wattay International Airport and 10 minute to downtown centre and night market makes it a preferred location to many travellers. There is a banquet room that can accommodate 800 people and has witnessed umpteen wedding celebrations. "),
                          createVNode(_component_a_button, {
                            onClick: ($event) => unref(router).push("hotels/golf"),
                            class: "view-button bg-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View Hotel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_row, { class: "bg-left" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 16,
                      class: "bg golf"
                    }),
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & HOTELS"),
                          createVNode("h2", null, "DANSAVANH GOLF & COUNTRY CLUB"),
                          createVNode("p", null, " Well known for its kind of view that blends the art of green fairways enclosed with forest of pines at elevations. Enjoy a business meeting leisurely accompanied by chirping birds and excellent entertainment facilities, a hard to come by venue for golfers. "),
                          createVNode(_component_a_button, {
                            onClick: ($event) => unref(router).push("hotels/vientaine-hotel"),
                            class: "view-button bg-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View Hotel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hotels/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12246999"]]);

export { index as default };
//# sourceMappingURL=index-7kENsNax.mjs.map
