import { withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-3DQxrpma.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-j6mHhOx5.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-5qJONfuq.mjs';
import '../../handlers/renderer.mjs';
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
import '@babel/runtime/helpers/esm/extends';
import 'stylis';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'vue-types';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_a_layout = __nuxt_component_0;
  const _component_a_row = __nuxt_component_1;
  const _component_a_col = __nuxt_component_2;
  const _component_a_layout_content = LayoutContent;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_a_layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="cover" data-v-4e43e54c${_scopeId}><div class="bg-cover" data-v-4e43e54c${_scopeId}></div>`);
        _push2(ssrRenderComponent(_component_a_row, {
          justify: "center",
          style: { "padding-top": "180px", "padding-bottom": "62px", "text-align": "center", "background-color": "transparent" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, { span: 14 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h5 class="headerT2" data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("aMagicPlace"))}</h5>`);
                  } else {
                    return [
                      createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("aMagicPlace")), 1)
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
                    _push4(`<h1 class="headerT1" data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("ourResortsCasino"))}</h1>`);
                  } else {
                    return [
                      createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("ourResortsCasino")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, { span: 14 }, {
                  default: withCtx(() => [
                    createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("aMagicPlace")), 1)
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
                    createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("ourResortsCasino")), 1)
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
                    createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("aMagicPlace")), 1)
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
                    createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("ourResortsCasino")), 1)
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
  _push(ssrRenderComponent(_component_a_layout_content, { style: { "padding": "20px 50px" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="header" data-v-4e43e54c${_scopeId}><span data-v-4e43e54c${_scopeId}>CASINO</span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-4e43e54c${_scopeId}></div>`);
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
        _push2(`<div class="blog" data-v-4e43e54c${_scopeId}>`);
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
                    _push4(`<div class="text-box" data-v-4e43e54c${_scopeId3}><span data-v-4e43e54c${_scopeId3}>DANSAVANH &amp; CASINO</span><h2 data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoTitle1"))}</h2><p data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoCaption1"))}</p></div>`);
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
                    _push4(`<div class="text-box" data-v-4e43e54c${_scopeId3}><span data-v-4e43e54c${_scopeId3}>DANSAVANH &amp; CASINO</span><h2 data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoTitle2"))}</h2><p data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoCaption2"))}</p></div>`);
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
                    _push4(`<div class="text-box" data-v-4e43e54c${_scopeId3}><span data-v-4e43e54c${_scopeId3}>DANSAVANH &amp; CASINO</span><h2 data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoTitle3"))}</h2><p data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoCaption3"))}</p></div>`);
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
                    _push4(`<div class="text-box" data-v-4e43e54c${_scopeId3}><span data-v-4e43e54c${_scopeId3}>DANSAVANH &amp; CASINO</span><h2 data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoTitle4"))}</h2><p data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoCaption4"))}</p></div>`);
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
                    _push4(`<div class="text-box" data-v-4e43e54c${_scopeId3}><span data-v-4e43e54c${_scopeId3}>DANSAVANH &amp; CASINO</span><h2 data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoTitle5"))}</h2><p data-v-4e43e54c${_scopeId3}>${ssrInterpolate(_ctx.$t("casinoCaption5"))}</p></div>`);
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
        _push2(`</div><br data-v-4e43e54c${_scopeId}><br data-v-4e43e54c${_scopeId}>`);
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/casino/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4e43e54c"]]);

export { index as default };
//# sourceMappingURL=index-d7i31dDg.mjs.map
