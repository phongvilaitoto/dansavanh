import { k as useMainStore, s as storeToRefs, l as useFetch, b as useRuntimeConfig } from './server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-KlcFkPXq.mjs';
import { G as Gallery } from './gallery-BSA0t18N.mjs';
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
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const store = useMainStore();
    const { isOddFunc } = store;
    const { selectedIdx, main } = storeToRefs(store);
    const blogs = ref([]);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(config.public.apiBase + "/getDBlogs?type=Experience", "$8WpJiKZ4B1")), __temp = await __temp, __restore(), __temp);
    blogs.value = data.value.dBlogs;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout = __nuxt_component_0;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_layout_content = LayoutContent;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-962ad098${_scopeId}><div class="bg-cover" data-v-962ad098${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              style: { "padding-top": "180px", "padding-bottom": "62px", "text-align": "center", "background-color": "transparent" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 14 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="headerT2" data-v-962ad098${_scopeId3}>${ssrInterpolate(_ctx.$t("dActivities"))}</h5>`);
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
                        _push4(`<h1 class="headerT1" data-v-962ad098${_scopeId3}>${ssrInterpolate(_ctx.$t("sportAndActivities"))}</h1>`);
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
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    style: { "text-align": "center", "justify-content": "center" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="headerTitle text-uppercase" data-v-962ad098${_scopeId3}>${ssrInterpolate(_ctx.$t("tonsOfActivities"))}</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "headerTitle text-uppercase" }, toDisplayString(_ctx.$t("tonsOfActivities")), 1)
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
                        _push4(`<p class="headerT2 text-black" data-v-962ad098${_scopeId3}>${ssrInterpolate(_ctx.$t("fromSport"))}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "headerT2 text-black" }, toDisplayString(_ctx.$t("fromSport")), 1)
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
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-962ad098${_scopeId3}>`);
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
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "text-align": "center", "justify-content": "center" }
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "headerTitle text-uppercase" }, toDisplayString(_ctx.$t("tonsOfActivities")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "headerT2 text-black" }, toDisplayString(_ctx.$t("fromSport")), 1)
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
            _push2(`<div class="blog max-width" data-v-962ad098${_scopeId}><!--[-->`);
            ssrRenderList(unref(blogs), (i, idx) => {
              _push2(ssrRenderComponent(_component_a_row, {
                class: unref(isOddFunc)(idx) ? "bg-right" : "bg-left"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_col, {
                      md: 12,
                      lg: 14,
                      class: "bg vte",
                      style: `background-image: url('${i.img}')`
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_col, {
                      md: 12,
                      lg: 10,
                      class: "text-container"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-box" data-v-962ad098${_scopeId3}><h1 data-v-962ad098${_scopeId3}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h1><p data-v-962ad098${_scopeId3}>${ssrInterpolate(i.captions[unref(selectedIdx)])}</p></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-box" }, [
                              createVNode("h1", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                              createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1)
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
                        lg: 14,
                        class: "bg vte",
                        style: `background-image: url('${i.img}')`
                      }, null, 8, ["style"]),
                      createVNode(_component_a_col, {
                        md: 12,
                        lg: 10,
                        class: "text-container"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h1", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                            createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1)
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
            _push2(`<!--]--></div><div class="line-header" data-v-962ad098${_scopeId}><span data-v-962ad098${_scopeId}>GALLERY</span><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "40px", display: "block" })}" data-v-962ad098${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Gallery, {
                    galleries: unref(main).experienceGalleries
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Gallery, {
                      galleries: unref(main).experienceGalleries
                    }, null, 8, ["galleries"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "text-align": "center", "justify-content": "center" }
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "headerTitle text-uppercase" }, toDisplayString(_ctx.$t("tonsOfActivities")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "headerT2 text-black" }, toDisplayString(_ctx.$t("fromSport")), 1)
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(blogs), (i, idx) => {
                  return openBlock(), createBlock(_component_a_row, {
                    class: unref(isOddFunc)(idx) ? "bg-right" : "bg-left"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_col, {
                        md: 12,
                        lg: 14,
                        class: "bg vte",
                        style: `background-image: url('${i.img}')`
                      }, null, 8, ["style"]),
                      createVNode(_component_a_col, {
                        md: 12,
                        lg: 10,
                        class: "text-container"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h1", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                            createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 256))
              ]),
              createVNode("div", { class: "line-header" }, [
                createVNode("span", null, "GALLERY"),
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  style: { height: "40px", display: "block" }
                })
              ]),
              createVNode(_component_a_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(Gallery, {
                    galleries: unref(main).experienceGalleries
                  }, null, 8, ["galleries"])
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-962ad098"]]);

export { index as default };
//# sourceMappingURL=index-COovgbSJ.mjs.map
