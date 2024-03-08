import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-nvHjMUuE.mjs';
import { CarOutlined, PhoneOutlined, RedEnvelopeOutlined } from '@ant-design/icons-vue';
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './decoration-1-3DQxrpma.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_4 } from './Title-3mhyISKB.mjs';
import { B as Breadcrumb, _ as __nuxt_component_6 } from './index-sINZKPAc.mjs';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-j6mHhOx5.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-5qJONfuq.mjs';
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
import './index-nRVkJx5M.mjs';
import '@babel/runtime/helpers/esm/objectSpread2';
import 'dom-align';
import 'resize-observer-polyfill';
import 'lodash-es/isEqual.js';
import './compact-item-0fAWjO3D.mjs';
import '@ant-design/colors';
import './index-nCHNwxKS.mjs';
import '../../LoadingOutlined.mjs';
import 'lodash-es';
import '../../DownOutlined.mjs';
import 'lodash-es/uniq.js';
import '@ctrl/tinycolor';
import 'vue-types';

const _imports_0 = "" + buildAssetsURL("bus2.g9ZPJCd3.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_a_layout = __nuxt_component_0;
  const _component_a_row = __nuxt_component_1;
  const _component_a_col = __nuxt_component_2;
  const _component_a_typography_title = __nuxt_component_4;
  const _component_a_layout_content = LayoutContent;
  const _component_a_breadcrumb = Breadcrumb;
  const _component_a_breadcrumb_item = __nuxt_component_6;
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_o58p = resolveComponent("o:p");
  const _component_CarOutlined = CarOutlined;
  const _component_PhoneOutlined = PhoneOutlined;
  const _component_RedEnvelopeOutlined = RedEnvelopeOutlined;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_a_layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="cover" data-v-45e0735d${_scopeId}><div class="bg-cover" data-v-45e0735d${_scopeId}></div>`);
        _push2(ssrRenderComponent(_component_a_row, { style: { "padding-top": "35px", "padding-bottom": "62px", "text-align": "left", "justify-content": "center", "background-color": "transparent" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, { span: 20 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_a_typography_title, { class: "t1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`CONTACT`);
                        } else {
                          return [
                            createTextVNode("CONTACT")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_a_typography_title, { class: "t1" }, {
                        default: withCtx(() => [
                          createTextVNode("CONTACT")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, { span: 20 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span style="${ssrRenderStyle({ "color": "#fff" })}" data-v-45e0735d${_scopeId3}>Get in touch for a booking or a greeting</span>`);
                  } else {
                    return [
                      createVNode("span", { style: { "color": "#fff" } }, "Get in touch for a booking or a greeting")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, { span: 20 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_typography_title, { class: "t1" }, {
                      default: withCtx(() => [
                        createTextVNode("CONTACT")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, { span: 20 }, {
                  default: withCtx(() => [
                    createVNode("span", { style: { "color": "#fff" } }, "Get in touch for a booking or a greeting")
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
            createVNode(_component_a_row, { style: { "padding-top": "35px", "padding-bottom": "62px", "text-align": "left", "justify-content": "center", "background-color": "transparent" } }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 20 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_typography_title, { class: "t1" }, {
                      default: withCtx(() => [
                        createTextVNode("CONTACT")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, { span: 20 }, {
                  default: withCtx(() => [
                    createVNode("span", { style: { "color": "#fff" } }, "Get in touch for a booking or a greeting")
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
        _push2(ssrRenderComponent(_component_a_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, {
                span: 24,
                style: { "display": "flex", "justify-content": "space-between", "align-content": "center" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_a_breadcrumb, { style: { "margin": "16px 10px" } }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_a_breadcrumb_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Home`);
                                    } else {
                                      return [
                                        createTextVNode("Home")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_nuxt_link, { to: "/" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Home")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_a_breadcrumb_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`CONTACT`);
                              } else {
                                return [
                                  createTextVNode("CONTACT")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_a_breadcrumb_item, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, { to: "/" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Home")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_a_breadcrumb_item, null, {
                              default: withCtx(() => [
                                createTextVNode("CONTACT")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<a style="${ssrRenderStyle({ "margin": "16px 10px" })}" href="#" target="_blank" data-v-45e0735d${_scopeId3}> Facebook Link</a>`);
                  } else {
                    return [
                      createVNode(_component_a_breadcrumb, { style: { "margin": "16px 10px" } }, {
                        default: withCtx(() => [
                          createVNode(_component_a_breadcrumb_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, { to: "/" }, {
                                default: withCtx(() => [
                                  createTextVNode("Home")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_breadcrumb_item, null, {
                            default: withCtx(() => [
                              createTextVNode("CONTACT")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("a", {
                        style: { "margin": "16px 10px" },
                        href: "#",
                        target: "_blank"
                      }, " Facebook Link")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, {
                  span: 24,
                  style: { "display": "flex", "justify-content": "space-between", "align-content": "center" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_breadcrumb, { style: { "margin": "16px 10px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_a_breadcrumb_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_link, { to: "/" }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_breadcrumb_item, null, {
                          default: withCtx(() => [
                            createTextVNode("CONTACT")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("a", {
                      style: { "margin": "16px 10px" },
                      href: "#",
                      target: "_blank"
                    }, " Facebook Link")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div style="${ssrRenderStyle({ padding: "24px", minHeight: "280px" })}" data-v-45e0735d${_scopeId}>`);
        _push2(ssrRenderComponent(_component_a_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, {
                span: 24,
                class: "map-container"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="map" data-v-45e0735d${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "map" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, {
                  span: 24,
                  class: "map-container"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "map" })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_a_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, {
                lg: 24,
                class: "contact-container"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text-box" data-v-45e0735d${_scopeId3}><h3 data-v-45e0735d${_scopeId3}>DANSAVANH LOCATION</h3><h4 data-v-45e0735d${_scopeId3}>GETTING HERE</h4><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-45e0735d${_scopeId3}> Wattay Airport \u2013 Look out for Dansavanh Meet &amp; Greet counter at the arrival hall. <br data-v-45e0735d${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-45e0735d${_scopeId3}> Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm<br data-v-45e0735d${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-45e0735d${_scopeId3}> Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval<br data-v-45e0735d${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-45e0735d${_scopeId3}> A private limousine can be arranged via VIP hotline<br data-v-45e0735d${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-45e0735d${_scopeId3}><a href="https://wa.me/8562052241111" target="_blank" data-v-45e0735d${_scopeId3}><b data-v-45e0735d${_scopeId3}>click here</b></a>Please to contact us on WhatsApp:\xA0<span style="${ssrRenderStyle({ "font-family": "Calibri, sans-serif", "font-size": "11pt" })}" data-v-45e0735d${_scopeId3}><a href="https://wa.me/8562052241111" target="_blank" data-v-45e0735d${_scopeId3}><b data-v-45e0735d${_scopeId3}>+8562052241111</b></a></span><br data-v-45e0735d${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-45e0735d${_scopeId3}><span lang="EN" data-v-45e0735d${_scopeId3}>\xA0You may also contact us on\xA0<b data-v-45e0735d${_scopeId3}><a href="weixin://dl/chat?+85602058276666" target="_blank" data-v-45e0735d${_scopeId3}>+8560205827</a>5555</b></span></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-45e0735d${_scopeId3}><b data-v-45e0735d${_scopeId3}>Email: Marketing@dansavanh.com</b></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-45e0735d${_scopeId3}><a href="https://www.instagram.com/dansavanhnamngumresort/" target="_blank" data-v-45e0735d${_scopeId3}><b data-v-45e0735d${_scopeId3}>Follow us here on Instagram!</b></a><span lang="EN" data-v-45e0735d${_scopeId3}><b data-v-45e0735d${_scopeId3}></b>`);
                    _push4(ssrRenderComponent(_component_o58p, null, null, _parent4, _scopeId3));
                    _push4(`</span></p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-box" }, [
                        createVNode("h3", null, "DANSAVANH LOCATION"),
                        createVNode("h4", null, "GETTING HERE"),
                        createVNode("p", { style: { "text-align": "center" } }, [
                          createTextVNode(" Wattay Airport \u2013 Look out for Dansavanh Meet & Greet counter at the arrival hall. "),
                          createVNode("br")
                        ]),
                        createVNode("p", { style: { "text-align": "center" } }, [
                          createTextVNode(" Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm"),
                          createVNode("br")
                        ]),
                        createVNode("p", { style: { "text-align": "center" } }, [
                          createTextVNode(" Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval"),
                          createVNode("br")
                        ]),
                        createVNode("p", { style: { "text-align": "center" } }, [
                          createTextVNode(" A private limousine can be arranged via VIP hotline"),
                          createVNode("br")
                        ]),
                        createVNode("p", { style: { "text-align": "center" } }, [
                          createVNode("a", {
                            href: "https://wa.me/8562052241111",
                            target: "_blank"
                          }, [
                            createVNode("b", null, "click here")
                          ]),
                          createTextVNode("Please to contact us on WhatsApp:\xA0"),
                          createVNode("span", { style: { "font-family": "Calibri, sans-serif", "font-size": "11pt" } }, [
                            createVNode("a", {
                              href: "https://wa.me/8562052241111",
                              target: "_blank"
                            }, [
                              createVNode("b", null, "+8562052241111")
                            ])
                          ]),
                          createVNode("br")
                        ]),
                        createVNode("p", { style: { "text-align": "center" } }, [
                          createVNode("span", { lang: "EN" }, [
                            createTextVNode("\xA0You may also contact us on\xA0"),
                            createVNode("b", null, [
                              createVNode("a", {
                                href: "weixin://dl/chat?+85602058276666",
                                target: "_blank"
                              }, "+8560205827"),
                              createTextVNode("5555")
                            ])
                          ])
                        ]),
                        createVNode("p", { style: { "text-align": "center" } }, [
                          createVNode("b", null, "Email: Marketing@dansavanh.com")
                        ]),
                        createVNode("p", { style: { "text-align": "center" } }, [
                          createVNode("a", {
                            href: "https://www.instagram.com/dansavanhnamngumresort/",
                            target: "_blank"
                          }, [
                            createVNode("b", null, "Follow us here on Instagram!")
                          ]),
                          createVNode("span", { lang: "EN" }, [
                            createVNode("b"),
                            createVNode(_component_o58p)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, {
                  lg: 24,
                  class: "contact-container"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-box" }, [
                      createVNode("h3", null, "DANSAVANH LOCATION"),
                      createVNode("h4", null, "GETTING HERE"),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createTextVNode(" Wattay Airport \u2013 Look out for Dansavanh Meet & Greet counter at the arrival hall. "),
                        createVNode("br")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createTextVNode(" Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm"),
                        createVNode("br")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createTextVNode(" Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval"),
                        createVNode("br")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createTextVNode(" A private limousine can be arranged via VIP hotline"),
                        createVNode("br")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createVNode("a", {
                          href: "https://wa.me/8562052241111",
                          target: "_blank"
                        }, [
                          createVNode("b", null, "click here")
                        ]),
                        createTextVNode("Please to contact us on WhatsApp:\xA0"),
                        createVNode("span", { style: { "font-family": "Calibri, sans-serif", "font-size": "11pt" } }, [
                          createVNode("a", {
                            href: "https://wa.me/8562052241111",
                            target: "_blank"
                          }, [
                            createVNode("b", null, "+8562052241111")
                          ])
                        ]),
                        createVNode("br")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createVNode("span", { lang: "EN" }, [
                          createTextVNode("\xA0You may also contact us on\xA0"),
                          createVNode("b", null, [
                            createVNode("a", {
                              href: "weixin://dl/chat?+85602058276666",
                              target: "_blank"
                            }, "+8560205827"),
                            createTextVNode("5555")
                          ])
                        ])
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createVNode("b", null, "Email: Marketing@dansavanh.com")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createVNode("a", {
                          href: "https://www.instagram.com/dansavanhnamngumresort/",
                          target: "_blank"
                        }, [
                          createVNode("b", null, "Follow us here on Instagram!")
                        ]),
                        createVNode("span", { lang: "EN" }, [
                          createVNode("b"),
                          createVNode(_component_o58p)
                        ])
                      ])
                    ])
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
          gutter: 20
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, {
                sm: 24,
                md: 12,
                lg: 6,
                class: "icon_block"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_CarOutlined, { class: "icon" }, null, _parent4, _scopeId3));
                    _push4(`<h4 style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-45e0735d${_scopeId3}>SHUTTLE BUS</h4><img class="img"${ssrRenderAttr("src", _imports_0)} data-v-45e0735d${_scopeId3}>`);
                  } else {
                    return [
                      createVNode(_component_CarOutlined, { class: "icon" }),
                      createVNode("h4", { style: { "font-weight": "700" } }, "SHUTTLE BUS"),
                      createVNode("img", {
                        class: "img",
                        src: _imports_0
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                sm: 24,
                md: 12,
                lg: 6,
                class: "icon_block"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_PhoneOutlined, { class: "icon" }, null, _parent4, _scopeId3));
                    _push4(`<h4 style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-45e0735d${_scopeId3}>TELEPHONE</h4><p style="${ssrRenderStyle({ "font-weight": "600 !important" })}" data-v-45e0735d${_scopeId3}> For instant info<br data-v-45e0735d${_scopeId3}><br data-v-45e0735d${_scopeId3}><span class="nmr" data-v-45e0735d${_scopeId3}>Dansavanh Vientiane Hotel:</span><span class="nmr2" data-v-45e0735d${_scopeId3}>+856 21 217 595</span><br data-v-45e0735d${_scopeId3}><span class="nmr" data-v-45e0735d${_scopeId3}>Dansavanh Resort &amp; Casino:</span><span class="nmr2" data-v-45e0735d${_scopeId3}>+856 20 5827 5555</span><br data-v-45e0735d${_scopeId3}><span class="nmr" data-v-45e0735d${_scopeId3}>Dansavanh Thai Office:</span><span class="nmr2" data-v-45e0735d${_scopeId3}>+6684-604-0827</span></p>`);
                  } else {
                    return [
                      createVNode(_component_PhoneOutlined, { class: "icon" }),
                      createVNode("h4", { style: { "font-weight": "700" } }, "TELEPHONE"),
                      createVNode("p", { style: { "font-weight": "600 !important" } }, [
                        createTextVNode(" For instant info"),
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("span", { class: "nmr" }, "Dansavanh Vientiane Hotel:"),
                        createVNode("span", { class: "nmr2" }, "+856 21 217 595"),
                        createVNode("br"),
                        createVNode("span", { class: "nmr" }, "Dansavanh Resort & Casino:"),
                        createVNode("span", { class: "nmr2" }, "+856 20 5827 5555"),
                        createVNode("br"),
                        createVNode("span", { class: "nmr" }, "Dansavanh Thai Office:"),
                        createVNode("span", { class: "nmr2" }, "+6684-604-0827")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                sm: 24,
                lg: 6,
                class: "icon_block"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_RedEnvelopeOutlined, { class: "icon" }, null, _parent4, _scopeId3));
                    _push4(`<h4 style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-45e0735d${_scopeId3}>E-MAIL</h4><p style="${ssrRenderStyle({ "font-weight": "600 !important" })}" data-v-45e0735d${_scopeId3}> If you are on the go and wish to enquire.<br data-v-45e0735d${_scopeId3}><br data-v-45e0735d${_scopeId3}> info@dansavanh.net </p>`);
                  } else {
                    return [
                      createVNode(_component_RedEnvelopeOutlined, { class: "icon" }),
                      createVNode("h4", { style: { "font-weight": "700" } }, "E-MAIL"),
                      createVNode("p", { style: { "font-weight": "600 !important" } }, [
                        createTextVNode(" If you are on the go and wish to enquire."),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" info@dansavanh.net ")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, {
                  sm: 24,
                  md: 12,
                  lg: 6,
                  class: "icon_block"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CarOutlined, { class: "icon" }),
                    createVNode("h4", { style: { "font-weight": "700" } }, "SHUTTLE BUS"),
                    createVNode("img", {
                      class: "img",
                      src: _imports_0
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  sm: 24,
                  md: 12,
                  lg: 6,
                  class: "icon_block"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PhoneOutlined, { class: "icon" }),
                    createVNode("h4", { style: { "font-weight": "700" } }, "TELEPHONE"),
                    createVNode("p", { style: { "font-weight": "600 !important" } }, [
                      createTextVNode(" For instant info"),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("span", { class: "nmr" }, "Dansavanh Vientiane Hotel:"),
                      createVNode("span", { class: "nmr2" }, "+856 21 217 595"),
                      createVNode("br"),
                      createVNode("span", { class: "nmr" }, "Dansavanh Resort & Casino:"),
                      createVNode("span", { class: "nmr2" }, "+856 20 5827 5555"),
                      createVNode("br"),
                      createVNode("span", { class: "nmr" }, "Dansavanh Thai Office:"),
                      createVNode("span", { class: "nmr2" }, "+6684-604-0827")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  sm: 24,
                  lg: 6,
                  class: "icon_block"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_RedEnvelopeOutlined, { class: "icon" }),
                    createVNode("h4", { style: { "font-weight": "700" } }, "E-MAIL"),
                    createVNode("p", { style: { "font-weight": "600 !important" } }, [
                      createTextVNode(" If you are on the go and wish to enquire."),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" info@dansavanh.net ")
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="line-header" data-v-45e0735d${_scopeId}><span data-v-45e0735d${_scopeId}>CONTACT FORM </span><img${ssrRenderAttr("src", _imports_0$1)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-45e0735d${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_a_row, null, {
            default: withCtx(() => [
              createVNode(_component_a_col, {
                span: 24,
                style: { "display": "flex", "justify-content": "space-between", "align-content": "center" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_breadcrumb, { style: { "margin": "16px 10px" } }, {
                    default: withCtx(() => [
                      createVNode(_component_a_breadcrumb_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_nuxt_link, { to: "/" }, {
                            default: withCtx(() => [
                              createTextVNode("Home")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_breadcrumb_item, null, {
                        default: withCtx(() => [
                          createTextVNode("CONTACT")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("a", {
                    style: { "margin": "16px 10px" },
                    href: "#",
                    target: "_blank"
                  }, " Facebook Link")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode("div", { style: { padding: "24px", minHeight: "280px" } }, [
            createVNode(_component_a_row, null, {
              default: withCtx(() => [
                createVNode(_component_a_col, {
                  span: 24,
                  class: "map-container"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "map" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_a_row, null, {
              default: withCtx(() => [
                createVNode(_component_a_col, {
                  lg: 24,
                  class: "contact-container"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-box" }, [
                      createVNode("h3", null, "DANSAVANH LOCATION"),
                      createVNode("h4", null, "GETTING HERE"),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createTextVNode(" Wattay Airport \u2013 Look out for Dansavanh Meet & Greet counter at the arrival hall. "),
                        createVNode("br")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createTextVNode(" Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm"),
                        createVNode("br")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createTextVNode(" Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval"),
                        createVNode("br")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createTextVNode(" A private limousine can be arranged via VIP hotline"),
                        createVNode("br")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createVNode("a", {
                          href: "https://wa.me/8562052241111",
                          target: "_blank"
                        }, [
                          createVNode("b", null, "click here")
                        ]),
                        createTextVNode("Please to contact us on WhatsApp:\xA0"),
                        createVNode("span", { style: { "font-family": "Calibri, sans-serif", "font-size": "11pt" } }, [
                          createVNode("a", {
                            href: "https://wa.me/8562052241111",
                            target: "_blank"
                          }, [
                            createVNode("b", null, "+8562052241111")
                          ])
                        ]),
                        createVNode("br")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createVNode("span", { lang: "EN" }, [
                          createTextVNode("\xA0You may also contact us on\xA0"),
                          createVNode("b", null, [
                            createVNode("a", {
                              href: "weixin://dl/chat?+85602058276666",
                              target: "_blank"
                            }, "+8560205827"),
                            createTextVNode("5555")
                          ])
                        ])
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createVNode("b", null, "Email: Marketing@dansavanh.com")
                      ]),
                      createVNode("p", { style: { "text-align": "center" } }, [
                        createVNode("a", {
                          href: "https://www.instagram.com/dansavanhnamngumresort/",
                          target: "_blank"
                        }, [
                          createVNode("b", null, "Follow us here on Instagram!")
                        ]),
                        createVNode("span", { lang: "EN" }, [
                          createVNode("b"),
                          createVNode(_component_o58p)
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_a_row, {
              justify: "center",
              gutter: 20
            }, {
              default: withCtx(() => [
                createVNode(_component_a_col, {
                  sm: 24,
                  md: 12,
                  lg: 6,
                  class: "icon_block"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CarOutlined, { class: "icon" }),
                    createVNode("h4", { style: { "font-weight": "700" } }, "SHUTTLE BUS"),
                    createVNode("img", {
                      class: "img",
                      src: _imports_0
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  sm: 24,
                  md: 12,
                  lg: 6,
                  class: "icon_block"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PhoneOutlined, { class: "icon" }),
                    createVNode("h4", { style: { "font-weight": "700" } }, "TELEPHONE"),
                    createVNode("p", { style: { "font-weight": "600 !important" } }, [
                      createTextVNode(" For instant info"),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("span", { class: "nmr" }, "Dansavanh Vientiane Hotel:"),
                      createVNode("span", { class: "nmr2" }, "+856 21 217 595"),
                      createVNode("br"),
                      createVNode("span", { class: "nmr" }, "Dansavanh Resort & Casino:"),
                      createVNode("span", { class: "nmr2" }, "+856 20 5827 5555"),
                      createVNode("br"),
                      createVNode("span", { class: "nmr" }, "Dansavanh Thai Office:"),
                      createVNode("span", { class: "nmr2" }, "+6684-604-0827")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  sm: 24,
                  lg: 6,
                  class: "icon_block"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_RedEnvelopeOutlined, { class: "icon" }),
                    createVNode("h4", { style: { "font-weight": "700" } }, "E-MAIL"),
                    createVNode("p", { style: { "font-weight": "600 !important" } }, [
                      createTextVNode(" If you are on the go and wish to enquire."),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" info@dansavanh.net ")
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode("div", { class: "line-header" }, [
              createVNode("span", null, "CONTACT FORM "),
              createVNode("img", {
                src: _imports_0$1,
                alt: "",
                style: { height: "50px", display: "block" }
              })
            ])
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us-m/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-45e0735d"]]);

export { index as default };
//# sourceMappingURL=index-fIB411ly.mjs.map
