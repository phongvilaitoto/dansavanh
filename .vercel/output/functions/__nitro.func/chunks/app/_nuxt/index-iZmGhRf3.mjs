import { _ as _export_sfc, a as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, unref } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-3DQxrpma.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import '@babel/runtime/helpers/esm/objectSpread2';
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
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-2f3989f0${_scopeId}><div class="bg-cover" data-v-2f3989f0${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              style: { "padding-top": "180px", "padding-bottom": "62px", "text-align": "center", "background-color": "transparent" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 14 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="headerT2" data-v-2f3989f0${_scopeId3}>${ssrInterpolate(_ctx.$t(" WORK AT DANSAVANH"))}</h5>`);
                      } else {
                        return [
                          createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t(" WORK AT DANSAVANH")), 1)
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
                        _push4(`<h1 class="headerT1" data-v-2f3989f0${_scopeId3}>${ssrInterpolate(_ctx.$t("CAREER"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("CAREER")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 14 }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t(" WORK AT DANSAVANH")), 1)
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
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("CAREER")), 1)
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
                        createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t(" WORK AT DANSAVANH")), 1)
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
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("CAREER")), 1)
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
      _push(ssrRenderComponent(_component_a_layout_content, { class: "content-container max-width" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-2f3989f0${_scopeId3}>`);
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
                        _push4(`<h1 class="headerTitle text-uppercase" data-v-2f3989f0${_scopeId3}>Dansavanh Career</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerTitle text-uppercase" }, "Dansavanh Career")
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
                        _push4(`<p class="headerT2 text-black" data-v-2f3989f0${_scopeId3}>ONE OF THE BEST PLACES TO WORK IN LAOS</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "headerT2 text-black" }, "ONE OF THE BEST PLACES TO WORK IN LAOS")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    style: { "align-content": "center", "justify-content": "center", "display": "flex", "margin-top": "20px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ width: "160px", margin: "20xp 0 0 " })}" data-v-2f3989f0${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            style: { width: "160px", margin: "20xp 0 0 " }
                          })
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
                        _push4(`<h1 class="headerTitle text-uppercase" data-v-2f3989f0${_scopeId3}>Available jobs</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerTitle text-uppercase" }, "Available jobs")
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
                        createVNode("h1", { class: "headerTitle text-uppercase" }, "Dansavanh Career")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "headerT2 text-black" }, "ONE OF THE BEST PLACES TO WORK IN LAOS")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "align-content": "center", "justify-content": "center", "display": "flex", "margin-top": "20px" }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          style: { width: "160px", margin: "20xp 0 0 " }
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "text-align": "center", "justify-content": "center" }
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headerTitle text-uppercase" }, "Available jobs")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ padding: "24px", minHeight: "280px" })}" data-v-2f3989f0${_scopeId}><div class="career_box" data-v-2f3989f0${_scopeId}><!--[-->`);
            ssrRenderList(3, (i) => {
              _push2(`<div class="text-box cursor" data-v-2f3989f0${_scopeId}><h3 class="text-uppercase" data-v-2f3989f0${_scopeId}>recruitment ${ssrInterpolate(i)}</h3><p data-v-2f3989f0${_scopeId}>With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk.</p></div>`);
            });
            _push2(`<!--]--></div></div>`);
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
                      createVNode("h1", { class: "headerTitle text-uppercase" }, "Dansavanh Career")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "headerT2 text-black" }, "ONE OF THE BEST PLACES TO WORK IN LAOS")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "align-content": "center", "justify-content": "center", "display": "flex", "margin-top": "20px" }
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "",
                        style: { width: "160px", margin: "20xp 0 0 " }
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "text-align": "center", "justify-content": "center" }
                  }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "headerTitle text-uppercase" }, "Available jobs")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { style: { padding: "24px", minHeight: "280px" } }, [
                createVNode("div", { class: "career_box" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
                    return createVNode("div", {
                      class: "text-box cursor",
                      onClick: ($event) => unref(router).push("/more/career/5fd478d403249?i=" + i),
                      key: i
                    }, [
                      createVNode("h3", { class: "text-uppercase" }, "recruitment " + toDisplayString(i), 1),
                      createVNode("p", null, "With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk.")
                    ], 8, ["onClick"]);
                  }), 64))
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/more/career/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f3989f0"]]);

export { index as default };
//# sourceMappingURL=index-iZmGhRf3.mjs.map
