import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./index-DJmKUcFc.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from "./index-B566YWDZ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeaderTitle2",
  __ssrInlineRender: true,
  props: ["title", "caption", "img"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout = __nuxt_component_0$1;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin-bottom": "50px" } }, _attrs))} data-v-9a728cb8>`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" style="${ssrRenderStyle(`background-image: url('${__props.img}')`)}" data-v-9a728cb8${_scopeId}><div class="bg-cover" data-v-9a728cb8${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "left", "justify-content": "center", "background-color": "transparent" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 22 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerT1" style="${ssrRenderStyle({ "font-size": "65px" })}" data-v-9a728cb8${_scopeId3}>${ssrInterpolate(__props.title)}</h1>`);
                      } else {
                        return [
                          createVNode("h1", {
                            class: "headerT1",
                            style: { "font-size": "65px" }
                          }, toDisplayString(__props.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, { span: 22 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="headerT2" style="${ssrRenderStyle({ "margin-top": "-20px" })}" data-v-9a728cb8${_scopeId3}>${ssrInterpolate(__props.caption)}</h5>`);
                      } else {
                        return [
                          createVNode("h5", {
                            class: "headerT2",
                            style: { "margin-top": "-20px" }
                          }, toDisplayString(__props.caption), 1)
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
                        }, toDisplayString(__props.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h5", {
                          class: "headerT2",
                          style: { "margin-top": "-20px" }
                        }, toDisplayString(__props.caption), 1)
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
              createVNode("div", {
                class: "cover",
                style: `background-image: url('${__props.img}')`
              }, [
                createVNode("div", { class: "bg-cover" }),
                createVNode(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "left", "justify-content": "center", "background-color": "transparent" } }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h1", {
                          class: "headerT1",
                          style: { "font-size": "65px" }
                        }, toDisplayString(__props.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h5", {
                          class: "headerT2",
                          style: { "margin-top": "-20px" }
                        }, toDisplayString(__props.caption), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderTitle2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9a728cb8"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=HeaderTitle2-BL0rgiEi.js.map
