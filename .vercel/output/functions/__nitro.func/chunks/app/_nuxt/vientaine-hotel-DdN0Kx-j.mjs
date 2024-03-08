import { DesktopOutlined, WifiOutlined, CoffeeOutlined } from '@ant-design/icons-vue';
import { _ as _export_sfc, a as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, unref, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-3DQxrpma.mjs';
import { G as Gallery } from './gallery-VZ1YQgVI.mjs';
import { B as Button } from './index-nCHNwxKS.mjs';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-j6mHhOx5.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-5qJONfuq.mjs';
import { _ as __nuxt_component_8 } from './index-9FxYRwop.mjs';
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
  __name: "vientaine-hotel",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout = __nuxt_component_0;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_layout_content = LayoutContent;
      const _component_a_popover = __nuxt_component_8;
      const _component_a_button = Button;
      const _component_DesktopOutlined = DesktopOutlined;
      const _component_WifiOutlined = WifiOutlined;
      const _component_CoffeeOutlined = CoffeeOutlined;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-35eaa159${_scopeId}><div class="bg-cover" data-v-35eaa159${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "center", "justify-content": "center", "background-color": "transparent" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 22 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerT1" style="${ssrRenderStyle({ "font-size": "45px" })}" data-v-35eaa159${_scopeId3}>${ssrInterpolate(_ctx.$t("DANSAVANH VIENTIANE HOTEL"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", {
                            class: "headerT1",
                            style: { "font-size": "45px" }
                          }, toDisplayString(_ctx.$t("DANSAVANH VIENTIANE HOTEL")), 1)
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
                        }, toDisplayString(_ctx.$t("DANSAVANH VIENTIANE HOTEL")), 1)
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
                createVNode(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "center", "justify-content": "center", "background-color": "transparent" } }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h1", {
                          class: "headerT1",
                          style: { "font-size": "45px" }
                        }, toDisplayString(_ctx.$t("DANSAVANH VIENTIANE HOTEL")), 1)
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
                        _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-35eaa159${_scopeId3}>`);
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
                        _push4(`<p style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "300", "margin-top": "24px" })}" data-v-35eaa159${_scopeId3}> Situated in the city of Vientiane, 5 minute drive to Wattay International Airport and 10 minute to downtown centre and night market makes it a preferred location to many travellers. There is a banquet room that can accommodate 800 people and has witnessed umpteen wedding celebrations. </p>`);
                      } else {
                        return [
                          createVNode("p", { style: { "font-size": "1rem", "font-weight": "300", "margin-top": "24px" } }, " Situated in the city of Vientiane, 5 minute drive to Wattay International Airport and 10 minute to downtown centre and night market makes it a preferred location to many travellers. There is a banquet room that can accommodate 800 people and has witnessed umpteen wedding celebrations. ")
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
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-35eaa159${_scopeId3}>`);
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
                      xs: 24,
                      sm: 24,
                      md: 12,
                      lg: 12,
                      style: { "text-align": "center" }
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { style: { "font-size": "1rem", "font-weight": "300", "margin-top": "24px" } }, " Situated in the city of Vientiane, 5 minute drive to Wattay International Airport and 10 minute to downtown centre and night market makes it a preferred location to many travellers. There is a banquet room that can accommodate 800 people and has witnessed umpteen wedding celebrations. ")
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
            _push2(`<div class="max-width" data-v-35eaa159${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerTitle" data-v-35eaa159${_scopeId3}> FACILITIES </h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerTitle" }, " FACILITIES ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headerTitle" }, " FACILITIES ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              gutter: 10
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(3, (i) => {
                    _push3(ssrRenderComponent(_component_a_col, {
                      lg: 8,
                      class: "facility-card",
                      key: i
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" src="https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg" alt="" data-v-35eaa159${_scopeId3}><span data-v-35eaa159${_scopeId3}>FACILITIES ${ssrInterpolate(i)}</span>`);
                        } else {
                          return [
                            createVNode("img", {
                              style: { "width": "100%", "height": "100%", "object-fit": "cover" },
                              src: "https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg",
                              alt: ""
                            }),
                            createVNode("span", null, "FACILITIES " + toDisplayString(i), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
                      return createVNode(_component_a_col, {
                        lg: 8,
                        class: "facility-card",
                        key: i
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            style: { "width": "100%", "height": "100%", "object-fit": "cover" },
                            src: "https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg",
                            alt: ""
                          }),
                          createVNode("span", null, "FACILITIES " + toDisplayString(i), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="line-header" data-v-35eaa159${_scopeId}><span data-v-35eaa159${_scopeId}>ROOM </span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-35eaa159${_scopeId}></div><div class="max-width" data-v-35eaa159${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(1, (i) => {
                    _push3(ssrRenderComponent(_component_a_col, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_row, {
                            onClick: ($event) => unref(router).push("/offer/5f6da3a70215d?i=OFFER " + i),
                            class: "room-container"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_a_col, {
                                  xs: 24,
                                  sm: 24,
                                  lg: 14,
                                  class: "room-cover"
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_a_col, {
                                  xs: 24,
                                  sm: 24,
                                  lg: 10,
                                  class: "room-info"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-box" data-v-35eaa159${_scopeId5}><h2 data-v-35eaa159${_scopeId5}>STANDARD ROOM ${ssrInterpolate(i)}</h2><p data-v-35eaa159${_scopeId5}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem eius animi laudantium consectetur quisquam, consequuntur, cum illum itaque qui omnis quas laboriosam minus. Ratione, velit necessitatibus? Laboriosam, cum voluptate? <br data-v-35eaa159${_scopeId5}><br data-v-35eaa159${_scopeId5}><p class="details" data-v-35eaa159${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                                        content: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<p data-v-35eaa159${_scopeId6}>Content</p>`);
                                          } else {
                                            return [
                                              createVNode("p", null, "Content")
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_DesktopOutlined, null, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_DesktopOutlined)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_DesktopOutlined)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                                        content: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<p data-v-35eaa159${_scopeId6}>Content</p>`);
                                          } else {
                                            return [
                                              createVNode("p", null, "Content")
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_WifiOutlined, null, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_WifiOutlined)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_WifiOutlined)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                                        content: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<p data-v-35eaa159${_scopeId6}>Content</p>`);
                                          } else {
                                            return [
                                              createVNode("p", null, "Content")
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_a_button, { class: "circle-hover" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_CoffeeOutlined, null, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_CoffeeOutlined)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CoffeeOutlined)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</p></p>`);
                                      _push6(ssrRenderComponent(_component_a_button, {
                                        onClick: ($event) => unref(router).push("/contact"),
                                        class: "view-button text-uppercase bg-white"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Contact `);
                                          } else {
                                            return [
                                              createTextVNode(" Contact ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-box" }, [
                                          createVNode("h2", null, "STANDARD ROOM " + toDisplayString(i), 1),
                                          createVNode("p", null, [
                                            createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem eius animi laudantium consectetur quisquam, consequuntur, cum illum itaque qui omnis quas laboriosam minus. Ratione, velit necessitatibus? Laboriosam, cum voluptate? "),
                                            createVNode("br"),
                                            createVNode("br"),
                                            createVNode("p", { class: "details" }, [
                                              createVNode(_component_a_popover, { placement: "bottom" }, {
                                                content: withCtx(() => [
                                                  createVNode("p", null, "Content")
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(_component_a_button, { class: "circle-hover" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_DesktopOutlined)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_a_popover, { placement: "bottom" }, {
                                                content: withCtx(() => [
                                                  createVNode("p", null, "Content")
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(_component_a_button, { class: "circle-hover" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_WifiOutlined)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_a_popover, { placement: "bottom" }, {
                                                content: withCtx(() => [
                                                  createVNode("p", null, "Content")
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(_component_a_button, { class: "circle-hover" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CoffeeOutlined)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          createVNode(_component_a_button, {
                                            onClick: ($event) => unref(router).push("/contact"),
                                            class: "view-button text-uppercase bg-white"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Contact ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
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
                                  }),
                                  createVNode(_component_a_col, {
                                    xs: 24,
                                    sm: 24,
                                    lg: 10,
                                    class: "room-info"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-box" }, [
                                        createVNode("h2", null, "STANDARD ROOM " + toDisplayString(i), 1),
                                        createVNode("p", null, [
                                          createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem eius animi laudantium consectetur quisquam, consequuntur, cum illum itaque qui omnis quas laboriosam minus. Ratione, velit necessitatibus? Laboriosam, cum voluptate? "),
                                          createVNode("br"),
                                          createVNode("br"),
                                          createVNode("p", { class: "details" }, [
                                            createVNode(_component_a_popover, { placement: "bottom" }, {
                                              content: withCtx(() => [
                                                createVNode("p", null, "Content")
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_a_button, { class: "circle-hover" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_DesktopOutlined)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_a_popover, { placement: "bottom" }, {
                                              content: withCtx(() => [
                                                createVNode("p", null, "Content")
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_a_button, { class: "circle-hover" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_WifiOutlined)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_a_popover, { placement: "bottom" }, {
                                              content: withCtx(() => [
                                                createVNode("p", null, "Content")
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_a_button, { class: "circle-hover" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CoffeeOutlined)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        createVNode(_component_a_button, {
                                          onClick: ($event) => unref(router).push("/contact"),
                                          class: "view-button text-uppercase bg-white"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Contact ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
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
                              onClick: ($event) => unref(router).push("/offer/5f6da3a70215d?i=OFFER " + i),
                              class: "room-container"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_col, {
                                  xs: 24,
                                  sm: 24,
                                  lg: 14,
                                  class: "room-cover"
                                }),
                                createVNode(_component_a_col, {
                                  xs: 24,
                                  sm: 24,
                                  lg: 10,
                                  class: "room-info"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-box" }, [
                                      createVNode("h2", null, "STANDARD ROOM " + toDisplayString(i), 1),
                                      createVNode("p", null, [
                                        createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem eius animi laudantium consectetur quisquam, consequuntur, cum illum itaque qui omnis quas laboriosam minus. Ratione, velit necessitatibus? Laboriosam, cum voluptate? "),
                                        createVNode("br"),
                                        createVNode("br"),
                                        createVNode("p", { class: "details" }, [
                                          createVNode(_component_a_popover, { placement: "bottom" }, {
                                            content: withCtx(() => [
                                              createVNode("p", null, "Content")
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_DesktopOutlined)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_a_popover, { placement: "bottom" }, {
                                            content: withCtx(() => [
                                              createVNode("p", null, "Content")
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_WifiOutlined)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_a_popover, { placement: "bottom" }, {
                                            content: withCtx(() => [
                                              createVNode("p", null, "Content")
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_a_button, { class: "circle-hover" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CoffeeOutlined)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      createVNode(_component_a_button, {
                                        onClick: ($event) => unref(router).push("/contact"),
                                        class: "view-button text-uppercase bg-white"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Contact ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(1, (i) => {
                      return createVNode(_component_a_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_a_row, {
                            onClick: ($event) => unref(router).push("/offer/5f6da3a70215d?i=OFFER " + i),
                            class: "room-container"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_a_col, {
                                xs: 24,
                                sm: 24,
                                lg: 14,
                                class: "room-cover"
                              }),
                              createVNode(_component_a_col, {
                                xs: 24,
                                sm: 24,
                                lg: 10,
                                class: "room-info"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-box" }, [
                                    createVNode("h2", null, "STANDARD ROOM " + toDisplayString(i), 1),
                                    createVNode("p", null, [
                                      createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem eius animi laudantium consectetur quisquam, consequuntur, cum illum itaque qui omnis quas laboriosam minus. Ratione, velit necessitatibus? Laboriosam, cum voluptate? "),
                                      createVNode("br"),
                                      createVNode("br"),
                                      createVNode("p", { class: "details" }, [
                                        createVNode(_component_a_popover, { placement: "bottom" }, {
                                          content: withCtx(() => [
                                            createVNode("p", null, "Content")
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_a_button, { class: "circle-hover" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_DesktopOutlined)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_a_popover, { placement: "bottom" }, {
                                          content: withCtx(() => [
                                            createVNode("p", null, "Content")
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_a_button, { class: "circle-hover" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_WifiOutlined)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_a_popover, { placement: "bottom" }, {
                                          content: withCtx(() => [
                                            createVNode("p", null, "Content")
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_a_button, { class: "circle-hover" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CoffeeOutlined)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    createVNode(_component_a_button, {
                                      onClick: ($event) => unref(router).push("/contact"),
                                      class: "view-button text-uppercase bg-white"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Contact ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="line-header" data-v-35eaa159${_scopeId}><span data-v-35eaa159${_scopeId}>GALLERY</span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "40px", display: "block" })}" data-v-35eaa159${_scopeId}></div>`);
            _push2(ssrRenderComponent(Gallery, null, null, _parent2, _scopeId));
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
                      createVNode("p", { style: { "font-size": "1rem", "font-weight": "300", "margin-top": "24px" } }, " Situated in the city of Vientiane, 5 minute drive to Wattay International Airport and 10 minute to downtown centre and night market makes it a preferred location to many travellers. There is a banquet room that can accommodate 800 people and has witnessed umpteen wedding celebrations. ")
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
              createVNode("div", { class: "max-width" }, [
                createVNode(_component_a_row, { justify: "center" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headerTitle" }, " FACILITIES ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_row, {
                  justify: "center",
                  gutter: 10
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
                      return createVNode(_component_a_col, {
                        lg: 8,
                        class: "facility-card",
                        key: i
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            style: { "width": "100%", "height": "100%", "object-fit": "cover" },
                            src: "https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg",
                            alt: ""
                          }),
                          createVNode("span", null, "FACILITIES " + toDisplayString(i), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "line-header" }, [
                createVNode("span", null, "ROOM "),
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  style: { height: "50px", display: "block" }
                })
              ]),
              createVNode("div", { class: "max-width" }, [
                createVNode(_component_a_row, null, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(1, (i) => {
                      return createVNode(_component_a_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_a_row, {
                            onClick: ($event) => unref(router).push("/offer/5f6da3a70215d?i=OFFER " + i),
                            class: "room-container"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_a_col, {
                                xs: 24,
                                sm: 24,
                                lg: 14,
                                class: "room-cover"
                              }),
                              createVNode(_component_a_col, {
                                xs: 24,
                                sm: 24,
                                lg: 10,
                                class: "room-info"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-box" }, [
                                    createVNode("h2", null, "STANDARD ROOM " + toDisplayString(i), 1),
                                    createVNode("p", null, [
                                      createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem eius animi laudantium consectetur quisquam, consequuntur, cum illum itaque qui omnis quas laboriosam minus. Ratione, velit necessitatibus? Laboriosam, cum voluptate? "),
                                      createVNode("br"),
                                      createVNode("br"),
                                      createVNode("p", { class: "details" }, [
                                        createVNode(_component_a_popover, { placement: "bottom" }, {
                                          content: withCtx(() => [
                                            createVNode("p", null, "Content")
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_a_button, { class: "circle-hover" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_DesktopOutlined)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_a_popover, { placement: "bottom" }, {
                                          content: withCtx(() => [
                                            createVNode("p", null, "Content")
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_a_button, { class: "circle-hover" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_WifiOutlined)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_a_popover, { placement: "bottom" }, {
                                          content: withCtx(() => [
                                            createVNode("p", null, "Content")
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_a_button, { class: "circle-hover" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CoffeeOutlined)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    createVNode(_component_a_button, {
                                      onClick: ($event) => unref(router).push("/contact"),
                                      class: "view-button text-uppercase bg-white"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Contact ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
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
              createVNode(Gallery)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hotels/vientaine-hotel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vientaineHotel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35eaa159"]]);

export { vientaineHotel as default };
//# sourceMappingURL=vientaine-hotel-DdN0Kx-j.mjs.map
