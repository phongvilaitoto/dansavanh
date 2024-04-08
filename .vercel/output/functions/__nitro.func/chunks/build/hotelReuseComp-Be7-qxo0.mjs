import { DesktopOutlined, WifiOutlined, CoffeeOutlined } from '@ant-design/icons-vue';
import { f as useLocalePath, s as storeToRefs, k as useMainStore, u as useRouter } from './server.mjs';
import { useSSRContext, defineComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-KlcFkPXq.mjs';
import { G as Gallery } from './gallery-BSA0t18N.mjs';
import { _ as __nuxt_component_8 } from './index-tPmcAqhj.mjs';
import { B as Button } from './index-DHXF1w76.mjs';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-C3iUBhQ2.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-BrQUnAzb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "hotelReuseComp",
  __ssrInlineRender: true,
  props: ["hotel"],
  setup(__props) {
    const localePath = useLocalePath();
    const { selectedIdx } = storeToRefs(useMainStore());
    const isOdd = (n) => {
      return n % 2 !== 0;
    };
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
            _push2(`<div class="cover" style="${ssrRenderStyle(`background-image: url('${__props.hotel.detail.img}')`)}" data-v-5a9fc5e1${_scopeId}><div class="bg-cover" data-v-5a9fc5e1${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "center", "justify-content": "center", "background-color": "transparent" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 22 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerT1" style="${ssrRenderStyle({ "font-size": "45px" })}" data-v-5a9fc5e1${_scopeId3}>${ssrInterpolate(__props.hotel.detail.titles[unref(selectedIdx)])}</h1>`);
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
                        _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-5a9fc5e1${_scopeId3}>`);
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
                        _push4(`<p style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "300", "margin-top": "24px" })}" data-v-5a9fc5e1${_scopeId3}>${ssrInterpolate(__props.hotel.detail.descriptions[unref(selectedIdx)])}</p>`);
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
            if (__props.hotel.detail.usedList.includes("facilities")) {
              _push2(`<div class="max-width" data-v-5a9fc5e1${_scopeId}>`);
              _push2(ssrRenderComponent(_component_a_col, {
                span: 24,
                style: { "align-content": "center", "justify-content": "center", "display": "flex" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-5a9fc5e1${_scopeId2}>`);
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
              _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h1 class="headerTitle" data-v-5a9fc5e1${_scopeId3}>${ssrInterpolate(_ctx.$t("facilities"))}</h1>`);
                        } else {
                          return [
                            createVNode("h1", { class: "headerTitle" }, toDisplayString(_ctx.$t("facilities")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_col, { span: 24 }, {
                        default: withCtx(() => [
                          createVNode("h1", { class: "headerTitle" }, toDisplayString(_ctx.$t("facilities")), 1)
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
                    ssrRenderList(__props.hotel.detail.facilities, (i) => {
                      _push3(ssrRenderComponent(_component_a_col, {
                        lg: 8,
                        class: "facility-card",
                        key: i,
                        style: { "width": "100%" }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<img style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}"${ssrRenderAttr("src", i.img)} alt="" data-v-5a9fc5e1${_scopeId3}><span class="text-shadow" style="${ssrRenderStyle({ "font-size": "25px" })}" data-v-5a9fc5e1${_scopeId3}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</span>`);
                          } else {
                            return [
                              createVNode("img", {
                                style: { "width": "100%", "height": "100%", "object-fit": "cover" },
                                src: i.img,
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("span", {
                                class: "text-shadow",
                                style: { "font-size": "25px" }
                              }, toDisplayString(i.titles[unref(selectedIdx)]), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.hotel.detail.facilities, (i) => {
                        return openBlock(), createBlock(_component_a_col, {
                          lg: 8,
                          class: "facility-card",
                          key: i,
                          style: { "width": "100%" }
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              style: { "width": "100%", "height": "100%", "object-fit": "cover" },
                              src: i.img,
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("span", {
                              class: "text-shadow",
                              style: { "font-size": "25px" }
                            }, toDisplayString(i.titles[unref(selectedIdx)]), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.hotel.detail.usedList.includes("cards")) {
              _push2(`<div class="blog" data-v-5a9fc5e1${_scopeId}><!--[-->`);
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
                            _push4(`<div class="text-box" data-v-5a9fc5e1${_scopeId3}><span data-v-5a9fc5e1${_scopeId3}>DANSAVANH &amp; GOLF</span><h2 data-v-5a9fc5e1${_scopeId3}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2><p data-v-5a9fc5e1${_scopeId3}>${ssrInterpolate(i.descriptions[unref(selectedIdx)])}</p></div>`);
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
              _push2(`<div class="max-width" data-v-5a9fc5e1${_scopeId}><div class="line-header" data-v-5a9fc5e1${_scopeId}><span data-v-5a9fc5e1${_scopeId}>ROOM </span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block", marginBottom: "50px" })}" data-v-5a9fc5e1${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_a_row, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(__props.hotel.detail.rooms, (i) => {
                      _push3(ssrRenderComponent(_component_a_col, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_a_row, {
                              onClick: ($event) => unref(router).push(unref(localePath)("/contact")),
                              class: "room-container"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_a_col, {
                                    xs: 24,
                                    sm: 24,
                                    lg: 14,
                                    class: "room-cover",
                                    style: `background-image: url('${i.img}')`
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_a_col, {
                                    xs: 24,
                                    sm: 24,
                                    lg: 10,
                                    class: "room-info"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="text-box" data-v-5a9fc5e1${_scopeId5}><h2 data-v-5a9fc5e1${_scopeId5}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2><p data-v-5a9fc5e1${_scopeId5}>${ssrInterpolate(i.descriptions[unref(selectedIdx)])} <br data-v-5a9fc5e1${_scopeId5}><br data-v-5a9fc5e1${_scopeId5}><p class="details" data-v-5a9fc5e1${_scopeId5}>`);
                                        if (i.options.includes("TV")) {
                                          _push6(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                                            content: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`<p data-v-5a9fc5e1${_scopeId6}>This room has Cable TV</p>`);
                                              } else {
                                                return [
                                                  createVNode("p", null, "This room has Cable TV")
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
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        if (i.options.includes("WIFI")) {
                                          _push6(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                                            content: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`<p data-v-5a9fc5e1${_scopeId6}>This room has WIFI</p>`);
                                              } else {
                                                return [
                                                  createVNode("p", null, "This room has WIFI")
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
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        if (i.options.includes("CAFE")) {
                                          _push6(ssrRenderComponent(_component_a_popover, { placement: "bottom" }, {
                                            content: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`<p data-v-5a9fc5e1${_scopeId6}>This room has Cafe Bar</p>`);
                                              } else {
                                                return [
                                                  createVNode("p", null, "This room has Cafe Bar")
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
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`</p></p><button class="btn btn-2 hover-slide-up" data-v-5a9fc5e1${_scopeId5}><span data-v-5a9fc5e1${_scopeId5}>${ssrInterpolate(_ctx.$t("contact"))}</span></button></div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "text-box" }, [
                                            createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                            createVNode("p", null, [
                                              createTextVNode(toDisplayString(i.descriptions[unref(selectedIdx)]) + " ", 1),
                                              createVNode("br"),
                                              createVNode("br"),
                                              createVNode("p", { class: "details" }, [
                                                i.options.includes("TV") ? (openBlock(), createBlock(_component_a_popover, {
                                                  key: 0,
                                                  placement: "bottom"
                                                }, {
                                                  content: withCtx(() => [
                                                    createVNode("p", null, "This room has Cable TV")
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
                                                })) : createCommentVNode("", true),
                                                i.options.includes("WIFI") ? (openBlock(), createBlock(_component_a_popover, {
                                                  key: 1,
                                                  placement: "bottom"
                                                }, {
                                                  content: withCtx(() => [
                                                    createVNode("p", null, "This room has WIFI")
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
                                                })) : createCommentVNode("", true),
                                                i.options.includes("CAFE") ? (openBlock(), createBlock(_component_a_popover, {
                                                  key: 2,
                                                  placement: "bottom"
                                                }, {
                                                  content: withCtx(() => [
                                                    createVNode("p", null, "This room has Cafe Bar")
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
                                                })) : createCommentVNode("", true)
                                              ])
                                            ]),
                                            createVNode("button", {
                                              class: "btn btn-2 hover-slide-up",
                                              onClick: ($event) => _ctx.$router.push("/contact")
                                            }, [
                                              createVNode("span", null, toDisplayString(_ctx.$t("contact")), 1)
                                            ], 8, ["onClick"])
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
                                      class: "room-cover",
                                      style: `background-image: url('${i.img}')`
                                    }, null, 8, ["style"]),
                                    createVNode(_component_a_col, {
                                      xs: 24,
                                      sm: 24,
                                      lg: 10,
                                      class: "room-info"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-box" }, [
                                          createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                          createVNode("p", null, [
                                            createTextVNode(toDisplayString(i.descriptions[unref(selectedIdx)]) + " ", 1),
                                            createVNode("br"),
                                            createVNode("br"),
                                            createVNode("p", { class: "details" }, [
                                              i.options.includes("TV") ? (openBlock(), createBlock(_component_a_popover, {
                                                key: 0,
                                                placement: "bottom"
                                              }, {
                                                content: withCtx(() => [
                                                  createVNode("p", null, "This room has Cable TV")
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
                                              })) : createCommentVNode("", true),
                                              i.options.includes("WIFI") ? (openBlock(), createBlock(_component_a_popover, {
                                                key: 1,
                                                placement: "bottom"
                                              }, {
                                                content: withCtx(() => [
                                                  createVNode("p", null, "This room has WIFI")
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
                                              })) : createCommentVNode("", true),
                                              i.options.includes("CAFE") ? (openBlock(), createBlock(_component_a_popover, {
                                                key: 2,
                                                placement: "bottom"
                                              }, {
                                                content: withCtx(() => [
                                                  createVNode("p", null, "This room has Cafe Bar")
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
                                              })) : createCommentVNode("", true)
                                            ])
                                          ]),
                                          createVNode("button", {
                                            class: "btn btn-2 hover-slide-up",
                                            onClick: ($event) => _ctx.$router.push("/contact")
                                          }, [
                                            createVNode("span", null, toDisplayString(_ctx.$t("contact")), 1)
                                          ], 8, ["onClick"])
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
                                onClick: ($event) => unref(router).push(unref(localePath)("/contact")),
                                class: "room-container"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_col, {
                                    xs: 24,
                                    sm: 24,
                                    lg: 14,
                                    class: "room-cover",
                                    style: `background-image: url('${i.img}')`
                                  }, null, 8, ["style"]),
                                  createVNode(_component_a_col, {
                                    xs: 24,
                                    sm: 24,
                                    lg: 10,
                                    class: "room-info"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-box" }, [
                                        createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                        createVNode("p", null, [
                                          createTextVNode(toDisplayString(i.descriptions[unref(selectedIdx)]) + " ", 1),
                                          createVNode("br"),
                                          createVNode("br"),
                                          createVNode("p", { class: "details" }, [
                                            i.options.includes("TV") ? (openBlock(), createBlock(_component_a_popover, {
                                              key: 0,
                                              placement: "bottom"
                                            }, {
                                              content: withCtx(() => [
                                                createVNode("p", null, "This room has Cable TV")
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
                                            })) : createCommentVNode("", true),
                                            i.options.includes("WIFI") ? (openBlock(), createBlock(_component_a_popover, {
                                              key: 1,
                                              placement: "bottom"
                                            }, {
                                              content: withCtx(() => [
                                                createVNode("p", null, "This room has WIFI")
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
                                            })) : createCommentVNode("", true),
                                            i.options.includes("CAFE") ? (openBlock(), createBlock(_component_a_popover, {
                                              key: 2,
                                              placement: "bottom"
                                            }, {
                                              content: withCtx(() => [
                                                createVNode("p", null, "This room has Cafe Bar")
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
                                            })) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        createVNode("button", {
                                          class: "btn btn-2 hover-slide-up",
                                          onClick: ($event) => _ctx.$router.push("/contact")
                                        }, [
                                          createVNode("span", null, toDisplayString(_ctx.$t("contact")), 1)
                                        ], 8, ["onClick"])
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
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.hotel.detail.rooms, (i) => {
                        return openBlock(), createBlock(_component_a_col, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_row, {
                              onClick: ($event) => unref(router).push(unref(localePath)("/contact")),
                              class: "room-container"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_col, {
                                  xs: 24,
                                  sm: 24,
                                  lg: 14,
                                  class: "room-cover",
                                  style: `background-image: url('${i.img}')`
                                }, null, 8, ["style"]),
                                createVNode(_component_a_col, {
                                  xs: 24,
                                  sm: 24,
                                  lg: 10,
                                  class: "room-info"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-box" }, [
                                      createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                      createVNode("p", null, [
                                        createTextVNode(toDisplayString(i.descriptions[unref(selectedIdx)]) + " ", 1),
                                        createVNode("br"),
                                        createVNode("br"),
                                        createVNode("p", { class: "details" }, [
                                          i.options.includes("TV") ? (openBlock(), createBlock(_component_a_popover, {
                                            key: 0,
                                            placement: "bottom"
                                          }, {
                                            content: withCtx(() => [
                                              createVNode("p", null, "This room has Cable TV")
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
                                          })) : createCommentVNode("", true),
                                          i.options.includes("WIFI") ? (openBlock(), createBlock(_component_a_popover, {
                                            key: 1,
                                            placement: "bottom"
                                          }, {
                                            content: withCtx(() => [
                                              createVNode("p", null, "This room has WIFI")
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
                                          })) : createCommentVNode("", true),
                                          i.options.includes("CAFE") ? (openBlock(), createBlock(_component_a_popover, {
                                            key: 2,
                                            placement: "bottom"
                                          }, {
                                            content: withCtx(() => [
                                              createVNode("p", null, "This room has Cafe Bar")
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
                                          })) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      createVNode("button", {
                                        class: "btn btn-2 hover-slide-up",
                                        onClick: ($event) => _ctx.$router.push("/contact")
                                      }, [
                                        createVNode("span", null, toDisplayString(_ctx.$t("contact")), 1)
                                      ], 8, ["onClick"])
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
            if (__props.hotel.detail.usedList.includes("galleries")) {
              _push2(`<div data-v-5a9fc5e1${_scopeId}><div class="line-header" data-v-5a9fc5e1${_scopeId}><span data-v-5a9fc5e1${_scopeId}>GALLERY</span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "40px", display: "block" })}" data-v-5a9fc5e1${_scopeId}></div>`);
              _push2(ssrRenderComponent(Gallery, {
                galleries: __props.hotel.detail.galleries
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
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
              __props.hotel.detail.usedList.includes("facilities") ? (openBlock(), createBlock("div", {
                key: 0,
                class: "max-width"
              }, [
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
                }),
                createVNode(_component_a_row, { justify: "center" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headerTitle" }, toDisplayString(_ctx.$t("facilities")), 1)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.hotel.detail.facilities, (i) => {
                      return openBlock(), createBlock(_component_a_col, {
                        lg: 8,
                        class: "facility-card",
                        key: i,
                        style: { "width": "100%" }
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            style: { "width": "100%", "height": "100%", "object-fit": "cover" },
                            src: i.img,
                            alt: ""
                          }, null, 8, ["src"]),
                          createVNode("span", {
                            class: "text-shadow",
                            style: { "font-size": "25px" }
                          }, toDisplayString(i.titles[unref(selectedIdx)]), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              __props.hotel.detail.usedList.includes("cards") ? (openBlock(), createBlock("div", {
                key: 1,
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
                key: 2,
                class: "max-width"
              }, [
                createVNode("div", { class: "line-header" }, [
                  createVNode("span", null, "ROOM "),
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
                            onClick: ($event) => unref(router).push(unref(localePath)("/contact")),
                            class: "room-container"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_a_col, {
                                xs: 24,
                                sm: 24,
                                lg: 14,
                                class: "room-cover",
                                style: `background-image: url('${i.img}')`
                              }, null, 8, ["style"]),
                              createVNode(_component_a_col, {
                                xs: 24,
                                sm: 24,
                                lg: 10,
                                class: "room-info"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-box" }, [
                                    createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                    createVNode("p", null, [
                                      createTextVNode(toDisplayString(i.descriptions[unref(selectedIdx)]) + " ", 1),
                                      createVNode("br"),
                                      createVNode("br"),
                                      createVNode("p", { class: "details" }, [
                                        i.options.includes("TV") ? (openBlock(), createBlock(_component_a_popover, {
                                          key: 0,
                                          placement: "bottom"
                                        }, {
                                          content: withCtx(() => [
                                            createVNode("p", null, "This room has Cable TV")
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
                                        })) : createCommentVNode("", true),
                                        i.options.includes("WIFI") ? (openBlock(), createBlock(_component_a_popover, {
                                          key: 1,
                                          placement: "bottom"
                                        }, {
                                          content: withCtx(() => [
                                            createVNode("p", null, "This room has WIFI")
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
                                        })) : createCommentVNode("", true),
                                        i.options.includes("CAFE") ? (openBlock(), createBlock(_component_a_popover, {
                                          key: 2,
                                          placement: "bottom"
                                        }, {
                                          content: withCtx(() => [
                                            createVNode("p", null, "This room has Cafe Bar")
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
                                        })) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("button", {
                                      class: "btn btn-2 hover-slide-up",
                                      onClick: ($event) => _ctx.$router.push("/contact")
                                    }, [
                                      createVNode("span", null, toDisplayString(_ctx.$t("contact")), 1)
                                    ], 8, ["onClick"])
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
                    }), 256))
                  ]),
                  _: 1
                })
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
              ])) : createCommentVNode("", true)
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
const HotelReuseComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a9fc5e1"]]);

export { HotelReuseComp as H };
//# sourceMappingURL=hotelReuseComp-Be7-qxo0.mjs.map
