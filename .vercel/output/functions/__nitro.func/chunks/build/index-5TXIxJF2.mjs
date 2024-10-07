import { u as useHead } from './server.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-KlcFkPXq.mjs';
import { _ as __nuxt_component_0 } from './HeaderTitle-D_E50xVT.mjs';
import { L as LayoutContent } from './index-DJmKUcFc.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-B566YWDZ.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-google-map';
import '@babel/runtime/helpers/esm/extends';
import './useConfigInject-BiTbSa3p.mjs';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Casino",
      meta: [{ name: "description", content: "Casino" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout_content = LayoutContent;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(__nuxt_component_0, {
        img: "https://storage.googleapis.com/dsv-bucket/imgs/imgs/246eab63-3b9f-4118-a876-94bc2a075f59.jpg",
        title: _ctx.$t("ourResortsCasino"),
        caption: _ctx.$t("aMagicPlace")
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, { style: { "padding": "20px 50px", "margin-bottom": "20px" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="header" data-v-9d92a84d${_scopeId}><span data-v-9d92a84d${_scopeId}>CASINO</span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-9d92a84d${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "header" }, [
                createVNode("span", null, "CASINO"),
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  style: { height: "50px", display: "block" }
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="blog" data-v-9d92a84d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, { class: "bg-left" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    md: 12,
                    lg: 16,
                    class: "bg blackjack"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    md: 12,
                    lg: 8,
                    class: "text-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-9d92a84d${_scopeId3}><span data-v-9d92a84d${_scopeId3}>DANSAVANH &amp; CASINO</span><h2 data-v-9d92a84d${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoTitle1"))}</h2><p data-v-9d92a84d${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoCaption1"))}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("span", null, "DANSAVANH & CASINO"),
                            createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle1")), 1),
                            createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption1")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 16,
                      class: "bg blackjack"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & CASINO"),
                          createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle1")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption1")), 1)
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
                    md: 12,
                    lg: 16,
                    class: "bg roulette"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    md: 12,
                    lg: 8,
                    class: "text-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-9d92a84d${_scopeId3}><span data-v-9d92a84d${_scopeId3}>DANSAVANH &amp; CASINO</span><h2 data-v-9d92a84d${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoTitle2"))}</h2><p data-v-9d92a84d${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoCaption2"))}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("span", null, "DANSAVANH & CASINO"),
                            createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle2")), 1),
                            createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption2")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 16,
                      class: "bg roulette"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & CASINO"),
                          createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle2")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption2")), 1)
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
                    md: 12,
                    lg: 16,
                    class: "bg baccarat"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    md: 12,
                    lg: 8,
                    class: "text-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-9d92a84d${_scopeId3}><span data-v-9d92a84d${_scopeId3}>DANSAVANH &amp; CASINO</span><h2 data-v-9d92a84d${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoTitle3"))}</h2><p data-v-9d92a84d${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoCaption3"))}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("span", null, "DANSAVANH & CASINO"),
                            createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle3")), 1),
                            createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption3")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 16,
                      class: "bg baccarat"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & CASINO"),
                          createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle3")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption3")), 1)
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
                    md: 12,
                    lg: 16,
                    class: "bg dragonTiger"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    md: 12,
                    lg: 8,
                    class: "text-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-9d92a84d${_scopeId3}><span data-v-9d92a84d${_scopeId3}>DANSAVANH &amp; CASINO</span><h2 data-v-9d92a84d${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoTitle4"))}</h2><p data-v-9d92a84d${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoCaption4"))}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("span", null, "DANSAVANH & CASINO"),
                            createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle4")), 1),
                            createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption4")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 16,
                      class: "bg dragonTiger"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & CASINO"),
                          createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle4")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption4")), 1)
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
                    md: 12,
                    lg: 14,
                    class: "bg slots"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    md: 12,
                    lg: 8,
                    class: "text-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-9d92a84d${_scopeId3}><span data-v-9d92a84d${_scopeId3}>DANSAVANH &amp; CASINO</span><h2 data-v-9d92a84d${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoTitle5"))}</h2><p data-v-9d92a84d${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoCaption5"))}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("span", null, "DANSAVANH & CASINO"),
                            createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle5")), 1),
                            createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption5")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 14,
                      class: "bg slots"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & CASINO"),
                          createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle5")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption5")), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><br data-v-9d92a84d${_scopeId}><br data-v-9d92a84d${_scopeId}>`);
          } else {
            return [
              createVNode("div", { class: "blog" }, [
                createVNode(_component_a_row, { class: "bg-left" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 16,
                      class: "bg blackjack"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & CASINO"),
                          createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle1")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption1")), 1)
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
                      md: 12,
                      lg: 16,
                      class: "bg roulette"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & CASINO"),
                          createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle2")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption2")), 1)
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
                      md: 12,
                      lg: 16,
                      class: "bg baccarat"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & CASINO"),
                          createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle3")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption3")), 1)
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
                      md: 12,
                      lg: 16,
                      class: "bg dragonTiger"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & CASINO"),
                          createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle4")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption4")), 1)
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
                      md: 12,
                      lg: 14,
                      class: "bg slots"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 8,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("span", null, "DANSAVANH & CASINO"),
                          createVNode("h2", null, toDisplayString(_ctx.$t("casinoTitle5")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("casinoCaption5")), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/casino/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d92a84d"]]);

export { index as default };
//# sourceMappingURL=index-5TXIxJF2.mjs.map
