import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-3DQxrpma.mjs';
import { G as Gallery } from './gallery-VZ1YQgVI.mjs';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-j6mHhOx5.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-5qJONfuq.mjs';
import { _ as __nuxt_component_4 } from './Title-3mhyISKB.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'vue-types';
import './index-nRVkJx5M.mjs';
import 'dom-align';
import 'resize-observer-polyfill';
import 'lodash-es/isEqual.js';
import './compact-item-0fAWjO3D.mjs';
import 'vue-router';
import '@yeger/vue-masonry-wall';
import 'stylis';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout = __nuxt_component_0;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_layout_content = LayoutContent;
      const _component_a_typography_title = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-6b76992a${_scopeId}><div class="bg-cover" data-v-6b76992a${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              style: { "padding-top": "180px", "padding-bottom": "62px", "text-align": "center", "background-color": "transparent" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 14 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="headerT2" data-v-6b76992a${_scopeId3}>${ssrInterpolate(_ctx.$t("dActivities"))}</h5>`);
                      } else {
                        return [
                          createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("dActivities")), 1)
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
                        _push4(`<h1 class="headerT1" data-v-6b76992a${_scopeId3}>${ssrInterpolate(_ctx.$t("sportAndActivities"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("sportAndActivities")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 14 }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("dActivities")), 1)
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
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("sportAndActivities")), 1)
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
                        createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("dActivities")), 1)
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
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("sportAndActivities")), 1)
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
      _push(ssrRenderComponent(_component_a_layout_content, {
        class: "layout",
        style: { "padding": "20px 0" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 20 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)", "text-align": "center", "margin": "0", "padding": "50px 0 50px" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` TONS OF ACTIVITIES`);
                            } else {
                              return [
                                createTextVNode(" TONS OF ACTIVITIES")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)", "text-align": "center", "margin": "0", "padding": "50px 0 50px" } }, {
                            default: withCtx(() => [
                              createTextVNode(" TONS OF ACTIVITIES")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 16,
                    style: { "text-align": "center" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p style="${ssrRenderStyle({ "letter-spacing": "3px", "font-size": "13px" })}" data-v-6b76992a${_scopeId3}> FROM SPORTS TO SIGHTSEEING, WE HAVE IT ALL </p>`);
                      } else {
                        return [
                          createVNode("p", { style: { "letter-spacing": "3px", "font-size": "13px" } }, " FROM SPORTS TO SIGHTSEEING, WE HAVE IT ALL ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    style: { "align-content": "center", "justify-content": "center", "display": "flex" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-6b76992a${_scopeId3}>`);
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 20 }, {
                      default: withCtx(() => [
                        createVNode(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)", "text-align": "center", "margin": "0", "padding": "50px 0 50px" } }, {
                          default: withCtx(() => [
                            createTextVNode(" TONS OF ACTIVITIES")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 16,
                      style: { "text-align": "center" }
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { style: { "letter-spacing": "3px", "font-size": "13px" } }, " FROM SPORTS TO SIGHTSEEING, WE HAVE IT ALL ")
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
            }, _parent2, _scopeId));
            _push2(`<div class="blog max-width" data-v-6b76992a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, { class: "bg-left" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    md: 12,
                    lg: 14,
                    class: "bg numngum"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    md: 12,
                    lg: 10,
                    class: "text-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-6b76992a${_scopeId3}><h1 data-v-6b76992a${_scopeId3}>STANDARD ROOM</h1><p data-v-6b76992a${_scopeId3}> With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h1", null, "STANDARD ROOM"),
                            createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. ")
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
                      class: "bg numngum"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 10,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h1", null, "STANDARD ROOM"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. ")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-6b76992a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, { class: "bg-right" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    md: 12,
                    lg: 14,
                    class: "bg vte",
                    style: `background-image: url(https://storage.googleapis.com/dsv-bucket/dvs-gallery/21.jpeg)`
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    md: 12,
                    lg: 10,
                    class: "text-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-6b76992a${_scopeId3}><h1 data-v-6b76992a${_scopeId3}>VIP ROOM</h1><p data-v-6b76992a${_scopeId3}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magni, repellat hic accusamus nam minus sit veritatis, debitis blanditiis modi autem aliquid, nihil eaque ea voluptatum. Ipsum dicta vero impedit. </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h1", null, "VIP ROOM"),
                            createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magni, repellat hic accusamus nam minus sit veritatis, debitis blanditiis modi autem aliquid, nihil eaque ea voluptatum. Ipsum dicta vero impedit. ")
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
                      class: "bg vte",
                      style: `background-image: url(https://storage.googleapis.com/dsv-bucket/dvs-gallery/21.jpeg)`
                    }, null, 8, ["style"]),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 10,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h1", null, "VIP ROOM"),
                          createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magni, repellat hic accusamus nam minus sit veritatis, debitis blanditiis modi autem aliquid, nihil eaque ea voluptatum. Ipsum dicta vero impedit. ")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="line-header" data-v-6b76992a${_scopeId}><span data-v-6b76992a${_scopeId}>GALLERY</span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "40px", display: "block" })}" data-v-6b76992a${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              style: { "display": "flex", "gap": "10px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Gallery, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Gallery)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_a_col, { span: 20 }, {
                    default: withCtx(() => [
                      createVNode(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)", "text-align": "center", "margin": "0", "padding": "50px 0 50px" } }, {
                        default: withCtx(() => [
                          createTextVNode(" TONS OF ACTIVITIES")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 16,
                    style: { "text-align": "center" }
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { style: { "letter-spacing": "3px", "font-size": "13px" } }, " FROM SPORTS TO SIGHTSEEING, WE HAVE IT ALL ")
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
                ]),
                _: 1
              }),
              createVNode("div", { class: "blog max-width" }, [
                createVNode(_component_a_row, { class: "bg-left" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 14,
                      class: "bg numngum"
                    }),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 10,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h1", null, "STANDARD ROOM"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. ")
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("br"),
                createVNode(_component_a_row, { class: "bg-right" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 14,
                      class: "bg vte",
                      style: `background-image: url(https://storage.googleapis.com/dsv-bucket/dvs-gallery/21.jpeg)`
                    }, null, 8, ["style"]),
                    createVNode(_component_a_col, {
                      md: 12,
                      lg: 10,
                      class: "text-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h1", null, "VIP ROOM"),
                          createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magni, repellat hic accusamus nam minus sit veritatis, debitis blanditiis modi autem aliquid, nihil eaque ea voluptatum. Ipsum dicta vero impedit. ")
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "line-header" }, [
                createVNode("span", null, "GALLERY"),
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  style: { height: "40px", display: "block" }
                })
              ]),
              createVNode(_component_a_row, {
                justify: "center",
                style: { "display": "flex", "gap": "10px" }
              }, {
                default: withCtx(() => [
                  createVNode(Gallery)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b76992a"]]);

export { index as default };
//# sourceMappingURL=index-PNFBJ5o4.mjs.map
