import { a as useRouter, f as useLocalePath, i as useMainStore, s as storeToRefs, k as useFetch, c as useRuntimeConfig } from './server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-KlcFkPXq.mjs';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-DJmKUcFc.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-B566YWDZ.mjs';
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
import './useConfigInject-BiTbSa3p.mjs';
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
    const router = useRouter();
    const localePath = useLocalePath();
    const config = useRuntimeConfig();
    const store = useMainStore();
    const { selectedIdx } = storeToRefs(store);
    const blogs = ref([]);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(config.public.apiBase + "/getDBlogs?type=Jobs", "$k1NHRSDucR")), __temp = await __temp, __restore(), __temp);
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
            _push2(`<div class="cover" data-v-3c0f9ad4${_scopeId}><div class="bg-cover" data-v-3c0f9ad4${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              style: { "padding-top": "180px", "padding-bottom": "62px", "text-align": "center", "background-color": "transparent" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 14 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="headerT2" data-v-3c0f9ad4${_scopeId3}>${ssrInterpolate(_ctx.$t("careerSubTitle"))}</h5>`);
                      } else {
                        return [
                          createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("careerSubTitle")), 1)
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
                        _push4(`<h1 class="headerT1" data-v-3c0f9ad4${_scopeId3}>${ssrInterpolate(_ctx.$t("careerTitle"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("careerTitle")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 14 }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("careerSubTitle")), 1)
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
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("careerTitle")), 1)
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
                        createVNode("h5", { class: "headerT2" }, toDisplayString(_ctx.$t("careerSubTitle")), 1)
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
                        createVNode("h1", { class: "headerT1" }, toDisplayString(_ctx.$t("careerTitle")), 1)
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
                        _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-3c0f9ad4${_scopeId3}>`);
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
                        _push4(`<h1 class="headerTitle text-uppercase" style="${ssrRenderStyle({ "margin-top": "30px" })}" data-v-3c0f9ad4${_scopeId3}>${ssrInterpolate(_ctx.$t("dCareer"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", {
                            class: "headerTitle text-uppercase",
                            style: { "margin-top": "30px" }
                          }, toDisplayString(_ctx.$t("dCareer")), 1)
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
                        _push4(`<p class="headerT2 text-black" data-v-3c0f9ad4${_scopeId3}>${ssrInterpolate(_ctx.$t("bestPlacesToWork"))}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "headerT2 text-black" }, toDisplayString(_ctx.$t("bestPlacesToWork")), 1)
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
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ width: "160px", margin: "20xp 0 0 " })}" data-v-3c0f9ad4${_scopeId3}>`);
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
                        _push4(`<h3 class="headerTitle text-uppercase" data-v-3c0f9ad4${_scopeId3}>${ssrInterpolate(_ctx.$t("availableJobs"))}</h3>`);
                      } else {
                        return [
                          createVNode("h3", { class: "headerTitle text-uppercase" }, toDisplayString(_ctx.$t("availableJobs")), 1)
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
                        createVNode("h1", {
                          class: "headerTitle text-uppercase",
                          style: { "margin-top": "30px" }
                        }, toDisplayString(_ctx.$t("dCareer")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "headerT2 text-black" }, toDisplayString(_ctx.$t("bestPlacesToWork")), 1)
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
                        createVNode("h3", { class: "headerTitle text-uppercase" }, toDisplayString(_ctx.$t("availableJobs")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ padding: "24px", minHeight: "280px" })}" data-v-3c0f9ad4${_scopeId}><div class="career_box" data-v-3c0f9ad4${_scopeId}><!--[-->`);
            ssrRenderList(unref(blogs), (i) => {
              _push2(`<div class="text-box cursor" style="${ssrRenderStyle({ "margin": "30px 10px 30px 10px" })}" data-v-3c0f9ad4${_scopeId}><h3 class="text-uppercase" data-v-3c0f9ad4${_scopeId}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h3><p data-v-3c0f9ad4${_scopeId}>${ssrInterpolate(i.captions[unref(selectedIdx)])}</p></div>`);
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
                      createVNode("h1", {
                        class: "headerTitle text-uppercase",
                        style: { "margin-top": "30px" }
                      }, toDisplayString(_ctx.$t("dCareer")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "headerT2 text-black" }, toDisplayString(_ctx.$t("bestPlacesToWork")), 1)
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
                      createVNode("h3", { class: "headerTitle text-uppercase" }, toDisplayString(_ctx.$t("availableJobs")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { style: { padding: "24px", minHeight: "280px" } }, [
                createVNode("div", { class: "career_box" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(blogs), (i) => {
                    return openBlock(), createBlock("div", {
                      class: "text-box cursor",
                      style: { "margin": "30px 10px 30px 10px" },
                      onClick: ($event) => unref(router).push(unref(localePath)("/more/career") + "/" + i._id),
                      key: i
                    }, [
                      createVNode("h3", { class: "text-uppercase" }, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                      createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1)
                    ], 8, ["onClick"]);
                  }), 128))
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c0f9ad4"]]);

export { index as default };
//# sourceMappingURL=index-r7K4GxSC.mjs.map
