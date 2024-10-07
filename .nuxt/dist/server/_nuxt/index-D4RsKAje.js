import { _ as __nuxt_component_0 } from "./HeaderTitle-C1sebPBD.js";
import { defineComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useRouter, f as useLocalePath, s as storeToRefs, i as useMainStore } from "../server.mjs";
import { useHead } from "@unhead/vue";
import { L as LayoutContent } from "./index-DTnbOyTJ.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from "./index-DxkjXEE1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "@unhead/shared";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "vue3-google-map";
import "@babel/runtime/helpers/esm/extends";
import "./useConfigInject-BAI3R2rN.js";
import "@babel/runtime/helpers/esm/objectSpread2";
import "@emotion/hash";
import "@ant-design/colors";
import "@ctrl/tinycolor";
import "@emotion/unitless";
import "stylis";
import "vue-types";
import "@ant-design/icons-vue/es/icons/BarsOutlined.js";
import "@ant-design/icons-vue/es/icons/RightOutlined.js";
import "@ant-design/icons-vue/es/icons/LeftOutlined.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const localePath = useLocalePath();
    const { main, selectedIdx } = storeToRefs(useMainStore());
    const isOdd = (n) => {
      return n % 2 !== 0;
    };
    useHead({
      title: "Accommodation",
      meta: [{ name: "description", content: "Accommodation" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderTitle = __nuxt_component_0;
      const _component_a_layout_content = LayoutContent;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderTitle, {
        img: "https://storage.googleapis.com/dsv-bucket/imgs/imgs/def3f3bd-1a3e-40b8-a4a0-1ce625911419.jpg",
        title: _ctx.$t("ourHotels"),
        caption: _ctx.$t("stepInTheWorld")
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, {
        class: "layout",
        style: { "margin-bottom": "50px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="blog" data-v-a4070883${_scopeId}><!--[-->`);
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
                          _push4(`<div class="text-box" data-v-a4070883${_scopeId3}><span data-v-a4070883${_scopeId3}>DANSAVANH &amp; HOTELS</span><h2 data-v-a4070883${_scopeId3}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2><p class="fix-description" data-v-a4070883${_scopeId3}>${ssrInterpolate(i.descriptions[unref(selectedIdx)])}</p><button class="btn btn-2 hover-slide-up" data-v-a4070883${_scopeId3}><span data-v-a4070883${_scopeId3}>${ssrInterpolate(_ctx.$t("viewHotelButton"))}</span></button></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-box" }, [
                              createVNode("span", null, "DANSAVANH & HOTELS"),
                              createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                              createVNode("p", { class: "fix-description" }, toDisplayString(i.descriptions[unref(selectedIdx)]), 1),
                              createVNode("button", {
                                class: "btn btn-2 hover-slide-up",
                                onClick: ($event) => unref(router).push(unref(localePath)("/hotels/" + i.titles[unref(selectedIdx)]))
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
                            createVNode("p", { class: "fix-description" }, toDisplayString(i.descriptions[unref(selectedIdx)]), 1),
                            createVNode("button", {
                              class: "btn btn-2 hover-slide-up",
                              onClick: ($event) => unref(router).push(unref(localePath)("/hotels/" + i.titles[unref(selectedIdx)]))
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
                            createVNode("p", { class: "fix-description" }, toDisplayString(i.descriptions[unref(selectedIdx)]), 1),
                            createVNode("button", {
                              class: "btn btn-2 hover-slide-up",
                              onClick: ($event) => unref(router).push(unref(localePath)("/hotels/" + i.titles[unref(selectedIdx)]))
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a4070883"]]);
export {
  index as default
};
//# sourceMappingURL=index-D4RsKAje.js.map
