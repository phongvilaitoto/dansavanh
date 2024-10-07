import { useSSRContext, defineComponent, ref, mergeProps, withCtx, unref, createVNode, toDisplayString } from 'vue';
import { i as useMainStore, s as storeToRefs, u as useHead } from './server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-KlcFkPXq.mjs';
import { G as Gallery } from './gallery-Ckvcd9up.mjs';
import { L as LayoutContent } from './index-DJmKUcFc.mjs';
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
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    const { main } = storeToRefs(store);
    ref("None");
    useHead({
      title: "Gallery",
      meta: [{ name: "description", content: "Gallery" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout_content = LayoutContent;
      _push(ssrRenderComponent(_component_a_layout_content, mergeProps({ class: "content-container global-margin-top" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="line-header" data-v-5c4206d7${_scopeId}><h1 class="headerTitle" data-v-5c4206d7${_scopeId}>${ssrInterpolate(_ctx.$t("gallery"))}</h1><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-5c4206d7${_scopeId}></div><div style="${ssrRenderStyle({ padding: "0 24px", minHeight: "280px" })}" data-v-5c4206d7${_scopeId}>`);
            _push2(ssrRenderComponent(Gallery, {
              galleries: unref(main).galleries
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "line-header" }, [
                createVNode("h1", { class: "headerTitle" }, toDisplayString(_ctx.$t("gallery")), 1),
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  style: { height: "50px", display: "block" }
                })
              ]),
              createVNode("div", { style: { padding: "0 24px", minHeight: "280px" } }, [
                createVNode(Gallery, {
                  galleries: unref(main).galleries
                }, null, 8, ["galleries"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c4206d7"]]);

export { gallery as default };
//# sourceMappingURL=gallery-wE8QKzMV.mjs.map
