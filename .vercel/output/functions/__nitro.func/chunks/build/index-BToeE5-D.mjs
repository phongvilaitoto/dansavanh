import { u as useRouter, s as storeToRefs, g as useMainStore } from './server.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-C3iUBhQ2.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-BrQUnAzb.mjs';
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
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { main, selectedIdx } = storeToRefs(useMainStore());
    const isOdd = (n) => {
      return n % 2 !== 0;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout = __nuxt_component_0;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_layout_content = LayoutContent;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-c788bd2f${_scopeId}><div class="bg-cover" data-v-c788bd2f${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              style: { "padding-top": "180px", "padding-bottom": "62px", "text-align": "center", "background-color": "transparent" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 14 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="headerT2" data-v-c788bd2f${_scopeId3}>${ssrInterpolate(_ctx.$t("stepInTheWorld"))}</h5>`);
                      } else {
                        return [
                          createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("stepInTheWorld")), 1)
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
                        _push4(`<h1 class="headerT1" data-v-c788bd2f${_scopeId3}>${ssrInterpolate(_ctx.$t("ourHotels"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("ourHotels")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 14 }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("stepInTheWorld")), 1)
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
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("ourHotels")), 1)
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
                        createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("stepInTheWorld")), 1)
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
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("ourHotels")), 1)
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
            _push2(`<div class="blog" data-v-c788bd2f${_scopeId}><!--[-->`);
            ssrRenderList(unref(main).hotels, (i, idx) => {
              _push2(ssrRenderComponent(_component_a_row, {
                class: isOdd(idx + 1) ? "bg-left" : "bg-right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      md: 24,
                      lg: 16,
                      style: `backgroundImage: url('${i.img}')`,
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
                          _push4(`<div class="text-box" data-v-c788bd2f${_scopeId3}><span data-v-c788bd2f${_scopeId3}>DANSAVANH &amp; HOTELS</span><h2 data-v-c788bd2f${_scopeId3}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2><p data-v-c788bd2f${_scopeId3}>${ssrInterpolate(i.descriptions[unref(selectedIdx)])}</p><button class="btn btn-2 hover-slide-up" data-v-c788bd2f${_scopeId3}><span data-v-c788bd2f${_scopeId3}>${ssrInterpolate(_ctx.$t("viewHotelButton"))}</span></button></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-box" }, [
                              createVNode("span", null, "DANSAVANH & HOTELS"),
                              createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                              createVNode("p", null, toDisplayString(i.descriptions[unref(selectedIdx)]), 1),
                              createVNode("button", {
                                class: "btn btn-2 hover-slide-up",
                                onClick: ($event) => unref(router).push(i.link)
                              }, [
                                createVNode("span", null, toDisplayString(_ctx.$t("viewHotelButton")), 1)
                              ], 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_col, {
                        xs: 24,
                        sm: 24,
                        md: 24,
                        lg: 16,
                        style: `backgroundImage: url('${i.img}')`,
                        class: "bg numngum"
                      }, null, 8, ["style"]),
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
                            createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                            createVNode("p", null, toDisplayString(i.descriptions[unref(selectedIdx)]), 1),
                            createVNode("button", {
                              class: "btn btn-2 hover-slide-up",
                              onClick: ($event) => unref(router).push(i.link)
                            }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("viewHotelButton")), 1)
                            ], 8, ["onClick"])
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
            return [
              createVNode("div", { class: "blog" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(main).hotels, (i, idx) => {
                  return openBlock(), createBlock(_component_a_row, {
                    class: isOdd(idx + 1) ? "bg-left" : "bg-right"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_col, {
                        xs: 24,
                        sm: 24,
                        md: 24,
                        lg: 16,
                        style: `backgroundImage: url('${i.img}')`,
                        class: "bg numngum"
                      }, null, 8, ["style"]),
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
                            createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                            createVNode("p", null, toDisplayString(i.descriptions[unref(selectedIdx)]), 1),
                            createVNode("button", {
                              class: "btn btn-2 hover-slide-up",
                              onClick: ($event) => unref(router).push(i.link)
                            }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("viewHotelButton")), 1)
                            ], 8, ["onClick"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 256))
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c788bd2f"]]);

export { index as default };
//# sourceMappingURL=index-BToeE5-D.mjs.map
