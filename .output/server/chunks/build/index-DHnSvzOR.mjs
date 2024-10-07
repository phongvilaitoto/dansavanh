import { a as useRouter, f as useLocalePath, i as useMainStore, s as storeToRefs, k as useFetch, c as useRuntimeConfig } from './server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './index-DJmKUcFc.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-B566YWDZ.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import '@vercel/kv';
import 'node:fs';
import 'node:url';
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
  props: ["isComp"],
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    const localePath = useLocalePath();
    const { isComp } = __props;
    const config = useRuntimeConfig();
    const store = useMainStore();
    const { selectedIdx } = storeToRefs(store);
    const blogs = ref([]);
    const link = isComp ? "&perPage=5" : "";
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      config.public.apiBase + "/getDBlogs?type=News" + link,
      "$v1z7EKdfk2"
    )), __temp = await __temp, __restore(), __temp);
    blogs.value = data.value.dBlogs;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout = __nuxt_component_0;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, { "data-aos": "fade-up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-f07ff9b9${_scopeId}><div class="bg-cover" data-v-f07ff9b9${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, {
              style: [
                __props.isComp ? "padding-top: 70px  !important;" : "padding-top: 160px  !important;",
                { "padding-bottom": "50px", "text-align": "left", "justify-content": "center", "background-color": "transparent" }
              ]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 22 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerT1" style="${ssrRenderStyle({ "font-size": "65px" })}" data-v-f07ff9b9${_scopeId3}>${ssrInterpolate(_ctx.$t("newsTitle"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", {
                            class: "headerT1",
                            style: { "font-size": "65px" }
                          }, toDisplayString(_ctx.$t("newsTitle")), 1)
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
                        }, toDisplayString(_ctx.$t("newsTitle")), 1)
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
                  style: [
                    __props.isComp ? "padding-top: 70px  !important;" : "padding-top: 160px  !important;",
                    { "padding-bottom": "50px", "text-align": "left", "justify-content": "center", "background-color": "transparent" }
                  ]
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h1", {
                          class: "headerT1",
                          style: { "font-size": "65px" }
                        }, toDisplayString(_ctx.$t("newsTitle")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["style"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="max-width" data-v-f07ff9b9><div data-v-f07ff9b9>`);
      if (!__props.isComp) {
        _push(`<div style="${ssrRenderStyle({ "margin": "2rem 0 2rem" })}" data-v-f07ff9b9><span style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-f07ff9b9>HOME</span><span style="${ssrRenderStyle({ "margin": "0 10px 0 10px", "color": "#a9a9a9" })}" data-v-f07ff9b9>/</span><span style="${ssrRenderStyle({ "color": "#a9a9a9" })}" data-v-f07ff9b9>NEWS</span></div>`);
      } else {
        _push(`<div style="${ssrRenderStyle({ "margin": "2rem 0 2rem" })}" data-v-f07ff9b9></div>`);
      }
      _push(ssrRenderComponent(_component_a_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(blogs), (i) => {
              _push2(ssrRenderComponent(_component_a_col, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_row, { class: "room-container" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_col, {
                            xs: 24,
                            sm: 24,
                            lg: 14,
                            class: "room-cover",
                            style: `background-image: url('${i.img}')`
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_a_col, {
                            xs: 24,
                            sm: 24,
                            lg: 10,
                            class: "room-info"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-box" data-v-f07ff9b9${_scopeId4}><h2 data-v-f07ff9b9${_scopeId4}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2><p data-v-f07ff9b9${_scopeId4}>${ssrInterpolate(i.captions[unref(selectedIdx)])}</p><button class="btn btn-2 hover-slide-up" data-v-f07ff9b9${_scopeId4}><span data-v-f07ff9b9${_scopeId4}>${ssrInterpolate(_ctx.$t("discoverMore"))}</span></button></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-box" }, [
                                    createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                    createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                                    createVNode("button", {
                                      class: "btn btn-2 hover-slide-up",
                                      onClick: ($event) => unref(router).push(unref(localePath)("/news") + "/" + i._id)
                                    }, [
                                      createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
                                    ], 8, ["onClick"])
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
                                  createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                                  createVNode("button", {
                                    class: "btn btn-2 hover-slide-up",
                                    onClick: ($event) => unref(router).push(unref(localePath)("/news") + "/" + i._id)
                                  }, [
                                    createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
                                  ], 8, ["onClick"])
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
                      createVNode(_component_a_row, { class: "room-container" }, {
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
                                createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                                createVNode("button", {
                                  class: "btn btn-2 hover-slide-up",
                                  onClick: ($event) => unref(router).push(unref(localePath)("/news") + "/" + i._id)
                                }, [
                                  createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
                                ], 8, ["onClick"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(blogs), (i) => {
                return openBlock(), createBlock(_component_a_col, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_row, { class: "room-container" }, {
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
                              createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                              createVNode("button", {
                                class: "btn btn-2 hover-slide-up",
                                onClick: ($event) => unref(router).push(unref(localePath)("/news") + "/" + i._id)
                              }, [
                                createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
                              ], 8, ["onClick"])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const News = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f07ff9b9"]]);

export { News as default };
//# sourceMappingURL=index-DHnSvzOR.mjs.map
