import { _ as _export_sfc, a as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString, unref, createTextVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { B as Button } from './index-nCHNwxKS.mjs';
import { _ as __nuxt_component_0 } from './index-j6mHhOx5.mjs';
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
      const _component_a_button = Button;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-30818aee${_scopeId}><div class="bg-cover" data-v-30818aee${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "left", "justify-content": "center", "background-color": "transparent" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 22 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerT1" style="${ssrRenderStyle({ "font-size": "65px" })}" data-v-30818aee${_scopeId3}>${ssrInterpolate(_ctx.$t("OUR OFFERS"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", {
                            class: "headerT1",
                            style: { "font-size": "65px" }
                          }, toDisplayString(_ctx.$t("OUR OFFERS")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, { span: 22 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="headerT2" style="${ssrRenderStyle({ "margin-top": "-20px" })}" data-v-30818aee${_scopeId3}>${ssrInterpolate(_ctx.$t("Interested in some activities? Have a look at ours packages."))}</h5>`);
                      } else {
                        return [
                          createVNode("h5", {
                            class: "headerT2",
                            style: { "margin-top": "-20px" }
                          }, toDisplayString(_ctx.$t("Interested in some activities? Have a look at ours packages.")), 1)
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
                          style: { "font-size": "65px" }
                        }, toDisplayString(_ctx.$t("OUR OFFERS")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h5", {
                          class: "headerT2",
                          style: { "margin-top": "-20px" }
                        }, toDisplayString(_ctx.$t("Interested in some activities? Have a look at ours packages.")), 1)
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
                createVNode(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "left", "justify-content": "center", "background-color": "transparent" } }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h1", {
                          class: "headerT1",
                          style: { "font-size": "65px" }
                        }, toDisplayString(_ctx.$t("OUR OFFERS")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h5", {
                          class: "headerT2",
                          style: { "margin-top": "-20px" }
                        }, toDisplayString(_ctx.$t("Interested in some activities? Have a look at ours packages.")), 1)
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
      _push(`<div class="max-width" data-v-30818aee><div style="${ssrRenderStyle({ "margin-top": "2rem" })}" data-v-30818aee>`);
      _push(ssrRenderComponent(_component_a_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(3, (i) => {
              _push2(ssrRenderComponent(_component_a_col, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_row, {
                      onClick: ($event) => unref(router).push("/offer/5f6da3a70215d?i=OFFER " + i),
                      class: "room-container"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_col, {
                            xs: 24,
                            sm: 24,
                            lg: 14,
                            class: "room-cover"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_a_col, {
                            xs: 24,
                            sm: 24,
                            lg: 10,
                            class: "room-info"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-box" data-v-30818aee${_scopeId4}><h2 data-v-30818aee${_scopeId4}>OFFER ${ssrInterpolate(i)}</h2><p data-v-30818aee${_scopeId4}> With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. </p>`);
                                _push5(ssrRenderComponent(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Discover More `);
                                    } else {
                                      return [
                                        createTextVNode(" Discover More ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-box" }, [
                                    createVNode("h2", null, "OFFER " + toDisplayString(i), 1),
                                    createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                                    createVNode(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Discover More ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
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
                                  createVNode("h2", null, "OFFER " + toDisplayString(i), 1),
                                  createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                                  createVNode(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Discover More ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
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
                                createVNode("h2", null, "OFFER " + toDisplayString(i), 1),
                                createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                                createVNode(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Discover More ")
                                  ]),
                                  _: 1
                                })
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
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
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
                              createVNode("h2", null, "OFFER " + toDisplayString(i), 1),
                              createVNode("p", null, " With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. "),
                              createVNode(_component_a_button, { class: "view-button text-uppercase bg-white" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Discover More ")
                                ]),
                                _: 1
                              })
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
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/offer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30818aee"]]);

export { index as default };
//# sourceMappingURL=index-fIAoTIPp.mjs.map
