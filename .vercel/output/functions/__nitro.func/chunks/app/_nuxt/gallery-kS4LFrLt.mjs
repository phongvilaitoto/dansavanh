import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-3DQxrpma.mjs';
import { G as Gallery } from './gallery-VZ1YQgVI.mjs';
import { L as LayoutContent } from './index-j6mHhOx5.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/vercel.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'vue-types';
import 'vue-router';
import '@yeger/vue-masonry-wall';
import 'stylis';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    ref("None");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout_content = LayoutContent;
      _push(ssrRenderComponent(_component_a_layout_content, mergeProps({ class: "content-container global-margin-top" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="line-header" data-v-90e55a24${_scopeId}><h1 class="headerTitle" data-v-90e55a24${_scopeId}>GALLERY</h1><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-90e55a24${_scopeId}></div><div style="${ssrRenderStyle({ padding: "0 24px", minHeight: "280px" })}" data-v-90e55a24${_scopeId}>`);
            _push2(ssrRenderComponent(Gallery, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "line-header" }, [
                createVNode("h1", { class: "headerTitle" }, "GALLERY"),
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  style: { height: "50px", display: "block" }
                })
              ]),
              createVNode("div", { style: { padding: "0 24px", minHeight: "280px" } }, [
                createVNode(Gallery)
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
const gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90e55a24"]]);

export { gallery as default };
//# sourceMappingURL=gallery-kS4LFrLt.mjs.map
