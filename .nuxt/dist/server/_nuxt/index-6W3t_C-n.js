import { u as useHead } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./decoration-1-KlcFkPXq.js";
import { L as LayoutContent } from "./index-DJmKUcFc.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from "./index-B566YWDZ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "devalue";
import "@vue/devtools-api";
import "destr";
import "klona";
import "ohash";
import "cookie-es";
import "vue3-google-map";
import "@babel/runtime/helpers/esm/extends";
import "./useConfigInject-BiTbSa3p.js";
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
    useHead({
      title: "New Page",
      meta: [{ name: "description", content: "New Page" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout_content = LayoutContent;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      _push(ssrRenderComponent(_component_a_layout_content, mergeProps({ class: "content-container max-width" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="line-header" data-v-ae9cf777${_scopeId}><h1 class="headerTitle" data-v-ae9cf777${_scopeId}>New page title</h1><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-ae9cf777${_scopeId}><p data-v-ae9cf777${_scopeId}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusamus commodi expedita iste qui quas ratione! Cum architecto repudiandae cupiditate. </p></div>`);
            _push2(ssrRenderComponent(_component_a_row, {
              class: "blog-container",
              gutter: [48, 16]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(4, (i) => {
                    _push3(ssrRenderComponent(_component_a_col, {
                      class: "blog",
                      sm: 24,
                      lg: 12
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="cover" data-v-ae9cf777${_scopeId3}><img src="https://www.aman.com/sites/default/files/styles/slider_cards_equals_extra_large/public/2021-03/Amantaka%2C%20Laos%20-%20Resort%20Pool.jpg?itok=KG7qbXBH" alt="blog image" data-v-ae9cf777${_scopeId3}></div><div class="content" data-v-ae9cf777${_scopeId3}><span class="tag" data-v-ae9cf777${_scopeId3}>Tag name</span><h3 data-v-ae9cf777${_scopeId3}>blog title</h3><span class="date" data-v-ae9cf777${_scopeId3}>Until 30 jun 2024</span><p data-v-ae9cf777${_scopeId3}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa officiis assumenda at iusto error molestiae saepe voluptatum, amet tempora ea! </p><div class="btn-group" data-v-ae9cf777${_scopeId3}><a href="#" data-v-ae9cf777${_scopeId3}><button class="btn btn-2 hover-slide-up" data-v-ae9cf777${_scopeId3}><span data-v-ae9cf777${_scopeId3}>${ssrInterpolate(_ctx.$t("more"))}</span></button></a></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "cover" }, [
                              createVNode("img", {
                                src: "https://www.aman.com/sites/default/files/styles/slider_cards_equals_extra_large/public/2021-03/Amantaka%2C%20Laos%20-%20Resort%20Pool.jpg?itok=KG7qbXBH",
                                alt: "blog image"
                              })
                            ]),
                            createVNode("div", { class: "content" }, [
                              createVNode("span", { class: "tag" }, "Tag name"),
                              createVNode("h3", null, "blog title"),
                              createVNode("span", { class: "date" }, "Until 30 jun 2024"),
                              createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa officiis assumenda at iusto error molestiae saepe voluptatum, amet tempora ea! "),
                              createVNode("div", { class: "btn-group" }, [
                                createVNode("a", { href: "#" }, [
                                  createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                    createVNode("span", null, toDisplayString(_ctx.$t("more")), 1)
                                  ])
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                      return createVNode(_component_a_col, {
                        class: "blog",
                        sm: 24,
                        lg: 12
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "cover" }, [
                            createVNode("img", {
                              src: "https://www.aman.com/sites/default/files/styles/slider_cards_equals_extra_large/public/2021-03/Amantaka%2C%20Laos%20-%20Resort%20Pool.jpg?itok=KG7qbXBH",
                              alt: "blog image"
                            })
                          ]),
                          createVNode("div", { class: "content" }, [
                            createVNode("span", { class: "tag" }, "Tag name"),
                            createVNode("h3", null, "blog title"),
                            createVNode("span", { class: "date" }, "Until 30 jun 2024"),
                            createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa officiis assumenda at iusto error molestiae saepe voluptatum, amet tempora ea! "),
                            createVNode("div", { class: "btn-group" }, [
                              createVNode("a", { href: "#" }, [
                                createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                  createVNode("span", null, toDisplayString(_ctx.$t("more")), 1)
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      });
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "line-header" }, [
                createVNode("h1", { class: "headerTitle" }, "New page title"),
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  style: { height: "50px", display: "block" }
                }),
                createVNode("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusamus commodi expedita iste qui quas ratione! Cum architecto repudiandae cupiditate. ")
              ]),
              createVNode(_component_a_row, {
                class: "blog-container",
                gutter: [48, 16]
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                    return createVNode(_component_a_col, {
                      class: "blog",
                      sm: 24,
                      lg: 12
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "cover" }, [
                          createVNode("img", {
                            src: "https://www.aman.com/sites/default/files/styles/slider_cards_equals_extra_large/public/2021-03/Amantaka%2C%20Laos%20-%20Resort%20Pool.jpg?itok=KG7qbXBH",
                            alt: "blog image"
                          })
                        ]),
                        createVNode("div", { class: "content" }, [
                          createVNode("span", { class: "tag" }, "Tag name"),
                          createVNode("h3", null, "blog title"),
                          createVNode("span", { class: "date" }, "Until 30 jun 2024"),
                          createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa officiis assumenda at iusto error molestiae saepe voluptatum, amet tempora ea! "),
                          createVNode("div", { class: "btn-group" }, [
                            createVNode("a", { href: "#" }, [
                              createVNode("button", { class: "btn btn-2 hover-slide-up" }, [
                                createVNode("span", null, toDisplayString(_ctx.$t("more")), 1)
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    });
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/new/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae9cf777"]]);
export {
  index as default
};
//# sourceMappingURL=index-6W3t_C-n.js.map
