import { _ as __nuxt_component_0 } from './HeaderTitle2-BL0rgiEi.mjs';
import { a as useRouter, f as useLocalePath, i as useMainStore, s as storeToRefs, k as useFetch, u as useHead, c as useRuntimeConfig } from './server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-B566YWDZ.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-DJmKUcFc.mjs';
import '@babel/runtime/helpers/esm/extends';
import './useConfigInject-BiTbSa3p.mjs';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: ["isComp"],
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    const localePath = useLocalePath();
    const config = useRuntimeConfig();
    const store = useMainStore();
    const { selectedIdx } = storeToRefs(store);
    const blogs = ref([]);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      config.public.apiBase + "/getDBlogs?type=Offer",
      "$UzZ2CqnSdp"
    )), __temp = await __temp, __restore(), __temp);
    blogs.value = data.value.dBlogs;
    useHead({
      title: "Offer",
      meta: [{ name: "description", content: "Offer" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderTitle2 = __nuxt_component_0;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderTitle2, {
        img: "https://storage.googleapis.com/dsv-bucket/imgs/imgs/aab146fa-94e0-4259-b350-b14ecfb16c67.jpg",
        title: _ctx.$t("offerTitle"),
        caption: _ctx.$t("offerSubTitle")
      }, null, _parent));
      _push(`<div class="max-width" data-v-d7aca2c8><div style="${ssrRenderStyle({ "margin": "2rem 0 2rem" })}" data-v-d7aca2c8><span style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-d7aca2c8>HOME</span><span style="${ssrRenderStyle({ "margin": "0 10px 0 10px", "color": "#a9a9a9" })}" data-v-d7aca2c8>/</span><span style="${ssrRenderStyle({ "color": "#a9a9a9" })}" data-v-d7aca2c8>OUR OFFERS</span></div><div data-v-d7aca2c8>`);
      _push(ssrRenderComponent(_component_a_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(blogs), (i) => {
              _push2(ssrRenderComponent(_component_a_col, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_row, {
                      onClick: ($event) => unref(router).push(unref(localePath)("/offer") + "/" + i._id),
                      class: "room-container"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_col, {
                            xs: 24,
                            sm: 24,
                            lg: 14,
                            class: "room-cover image-container",
                            style: `background-image: url('${i.img}')`
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_a_col, {
                            xs: 24,
                            sm: 24,
                            lg: 10,
                            class: "room-info",
                            style: { "width": "100%" }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-box" data-v-d7aca2c8${_scopeId4}><h2 data-v-d7aca2c8${_scopeId4}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2><p class="fix-description" data-v-d7aca2c8${_scopeId4}>${ssrInterpolate(i.captions[unref(selectedIdx)])}</p><button class="btn btn-2 hover-slide-up" data-v-d7aca2c8${_scopeId4}><span data-v-d7aca2c8${_scopeId4}>${ssrInterpolate(_ctx.$t("discoverMore"))}</span></button></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-box" }, [
                                    createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                    createVNode("p", { class: "fix-description" }, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                                    createVNode("button", {
                                      class: "btn btn-2 hover-slide-up",
                                      onClick: ($event) => _ctx.$router.push(unref(localePath)("/hotels"))
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
                              class: "room-cover image-container",
                              style: `background-image: url('${i.img}')`
                            }, null, 8, ["style"]),
                            createVNode(_component_a_col, {
                              xs: 24,
                              sm: 24,
                              lg: 10,
                              class: "room-info",
                              style: { "width": "100%" }
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-box" }, [
                                  createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                  createVNode("p", { class: "fix-description" }, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                                  createVNode("button", {
                                    class: "btn btn-2 hover-slide-up",
                                    onClick: ($event) => _ctx.$router.push(unref(localePath)("/hotels"))
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
                      createVNode(_component_a_row, {
                        onClick: ($event) => unref(router).push(unref(localePath)("/offer") + "/" + i._id),
                        class: "room-container"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_col, {
                            xs: 24,
                            sm: 24,
                            lg: 14,
                            class: "room-cover image-container",
                            style: `background-image: url('${i.img}')`
                          }, null, 8, ["style"]),
                          createVNode(_component_a_col, {
                            xs: 24,
                            sm: 24,
                            lg: 10,
                            class: "room-info",
                            style: { "width": "100%" }
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-box" }, [
                                createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                                createVNode("p", { class: "fix-description" }, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                                createVNode("button", {
                                  class: "btn btn-2 hover-slide-up",
                                  onClick: ($event) => _ctx.$router.push(unref(localePath)("/hotels"))
                                }, [
                                  createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
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
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(blogs), (i) => {
                return openBlock(), createBlock(_component_a_col, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_row, {
                      onClick: ($event) => unref(router).push(unref(localePath)("/offer") + "/" + i._id),
                      class: "room-container"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_col, {
                          xs: 24,
                          sm: 24,
                          lg: 14,
                          class: "room-cover image-container",
                          style: `background-image: url('${i.img}')`
                        }, null, 8, ["style"]),
                        createVNode(_component_a_col, {
                          xs: 24,
                          sm: 24,
                          lg: 10,
                          class: "room-info",
                          style: { "width": "100%" }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-box" }, [
                              createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                              createVNode("p", { class: "fix-description" }, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                              createVNode("button", {
                                class: "btn btn-2 hover-slide-up",
                                onClick: ($event) => _ctx.$router.push(unref(localePath)("/hotels"))
                              }, [
                                createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7aca2c8"]]);

export { index as default };
//# sourceMappingURL=index-Dpefb7Ah.mjs.map
