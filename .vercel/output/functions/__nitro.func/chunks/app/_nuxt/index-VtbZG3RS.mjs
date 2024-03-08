import { _ as _export_sfc, a as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString, createTextVNode, unref } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-3DQxrpma.mjs';
import { B as Button } from './index-nCHNwxKS.mjs';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-j6mHhOx5.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-5qJONfuq.mjs';
import { _ as __nuxt_component_4 } from './Title-3mhyISKB.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import '@babel/runtime/helpers/esm/objectSpread2';
import '../../LoadingOutlined.mjs';
import './compact-item-0fAWjO3D.mjs';
import 'lodash-es';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'vue-types';
import './index-nRVkJx5M.mjs';
import 'dom-align';
import 'resize-observer-polyfill';
import 'lodash-es/isEqual.js';

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
      const _component_a_typography_title = __nuxt_component_4;
      const _component_a_button = Button;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-5f52f999${_scopeId}><div class="bg-cover" data-v-5f52f999${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              style: { "padding-top": "180px", "padding-bottom": "62px", "text-align": "center", "background-color": "transparent" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 12
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerT1" data-v-5f52f999${_scopeId3}>${ssrInterpolate(_ctx.$t("EVENTS"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("EVENTS")), 1)
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
                      lg: 12
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("EVENTS")), 1)
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
                    createVNode(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 12
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("EVENTS")), 1)
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
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-5f52f999${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    style: { "text-align": "center", "justify-content": "center" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="headerTitle" data-v-5f52f999${_scopeId3}>COMING EVENTS</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "headerTitle" }, "COMING EVENTS")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span style="${ssrRenderStyle({ "font-size": "18px", "font-weight": "700", "font-family": "var(--font-family)" })}" data-v-5f52f999${_scopeId3}>1</span>`);
                        _push4(ssrRenderComponent(_component_a_typography_title, {
                          level: 5,
                          style: { "color": "#000", "padding": "0", "margin": "0", "font-family": "var(--font-family)" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`COMING EVENTS`);
                            } else {
                              return [
                                createTextVNode("COMING EVENTS")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { style: { "font-size": "18px", "font-weight": "700", "font-family": "var(--font-family)" } }, "1"),
                          createVNode(_component_a_typography_title, {
                            level: 5,
                            style: { "color": "#000", "padding": "0", "margin": "0", "font-family": "var(--font-family)" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("COMING EVENTS")
                            ]),
                            _: 1
                          })
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
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-5f52f999${_scopeId3}>`);
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
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "text-align": "center", "justify-content": "center" }
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "headerTitle" }, "COMING EVENTS")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { style: { "font-size": "18px", "font-weight": "700", "font-family": "var(--font-family)" } }, "1"),
                        createVNode(_component_a_typography_title, {
                          level: 5,
                          style: { "color": "#000", "padding": "0", "margin": "0", "font-family": "var(--font-family)" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("COMING EVENTS")
                          ]),
                          _: 1
                        })
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
            _push2(`<div style="${ssrRenderStyle({ padding: "24px", minHeight: "280px" })}" data-v-5f52f999${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, {
              onClick: ($event) => unref(router).push("/events/5f6da3a70215d?i=EVENT 1"),
              class: "room-container"
            }, {
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
                        _push4(`<div class="text-box" data-v-5f52f999${_scopeId3}><h2 data-v-5f52f999${_scopeId3}>EVENT 1</h2><p data-v-5f52f999${_scopeId3}> With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. </p>`);
                        _push4(ssrRenderComponent(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` View Hotel `);
                            } else {
                              return [
                                createTextVNode(" View Hotel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h2", null, "EVENT 1"),
                            createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                            createVNode(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                              default: withCtx(() => [
                                createTextVNode(" View Hotel ")
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
                          createVNode("h2", null, "EVENT 1"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                          createVNode(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                            default: withCtx(() => [
                              createTextVNode(" View Hotel ")
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
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-5f52f999${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    style: { "text-align": "center", "justify-content": "center" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerTitle" data-v-5f52f999${_scopeId3}>PAST EVENTS</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerTitle" }, "PAST EVENTS")
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
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-5f52f999${_scopeId3}>`);
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
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "text-align": "center", "justify-content": "center" }
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headerTitle" }, "PAST EVENTS")
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
            _push2(`<div style="${ssrRenderStyle({ padding: "24px", minHeight: "280px" })}" data-v-5f52f999${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, {
              class: "room-container",
              onClick: ($event) => unref(router).push("/events/5f6da3a70216f?i=PROMOTION")
            }, {
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
                        _push4(`<div class="text-box" data-v-5f52f999${_scopeId3}><h2 data-v-5f52f999${_scopeId3}>PROMOTION</h2><p data-v-5f52f999${_scopeId3}> With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. </p>`);
                        _push4(ssrRenderComponent(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` View Hotel `);
                            } else {
                              return [
                                createTextVNode(" View Hotel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h2", null, "PROMOTION"),
                            createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                            createVNode(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                              default: withCtx(() => [
                                createTextVNode(" View Hotel ")
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
                          createVNode("h2", null, "PROMOTION"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                          createVNode(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                            default: withCtx(() => [
                              createTextVNode(" View Hotel ")
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
            _push2(`</div>`);
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
                    span: 24,
                    style: { "text-align": "center", "justify-content": "center" }
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "headerTitle" }, "COMING EVENTS")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { style: { "font-size": "18px", "font-weight": "700", "font-family": "var(--font-family)" } }, "1"),
                      createVNode(_component_a_typography_title, {
                        level: 5,
                        style: { "color": "#000", "padding": "0", "margin": "0", "font-family": "var(--font-family)" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("COMING EVENTS")
                        ]),
                        _: 1
                      })
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
              createVNode("div", { style: { padding: "24px", minHeight: "280px" } }, [
                createVNode(_component_a_row, {
                  onClick: ($event) => unref(router).push("/events/5f6da3a70215d?i=EVENT 1"),
                  class: "room-container"
                }, {
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
                          createVNode("h2", null, "EVENT 1"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                          createVNode(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                            default: withCtx(() => [
                              createTextVNode(" View Hotel ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode(_component_a_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_a_col, { span: 24 }, {
                    default: withCtx(() => [
                      createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "text-align": "center", "justify-content": "center" }
                  }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "headerTitle" }, "PAST EVENTS")
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
              createVNode("div", { style: { padding: "24px", minHeight: "280px" } }, [
                createVNode(_component_a_row, {
                  class: "room-container",
                  onClick: ($event) => unref(router).push("/events/5f6da3a70216f?i=PROMOTION")
                }, {
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
                          createVNode("h2", null, "PROMOTION"),
                          createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                          createVNode(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                            default: withCtx(() => [
                              createTextVNode(" View Hotel ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5f52f999"]]);

export { index as default };
//# sourceMappingURL=index-VtbZG3RS.mjs.map
