import { u as useRoute, a as useRouter } from '../server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    if (route.params.id !== "65dea9c32632b6dbad0e7de5")
      router.push("/");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "max-width",
        style: { "padding": "0 30px 0 30px" }
      }, _attrs))}><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}"><div style="${ssrRenderStyle({ "margin-top": "150px", "width": "100%" })}"><img style="${ssrRenderStyle({ "width": "100%" })}" src="https://storage.googleapis.com/dsv-bucket/gallery/5754f0381ebd4.jpeg" alt=""><br><br><h1>NEWS</h1><p>The latest 4-star hotel in Vientiane, Laos. Green Park Boutique Hotel Captures a Lao-style orientation with the finest contemporary architecture of Laos. The elegance of the interiors, both historic and contemporary settings are combined to create the most distinguished collection of stylish and luxurious boutique hotels in Vientiane.</p><br><br><img style="${ssrRenderStyle({ "width": "100%", "height": "300px", "object-fit": "cover" })}" src="https://lab-108-bucket.s3-ap-southeast-1.amazonaws.com/image-banner/4f779f44-4724-4d79-a696-1592f0552b66.jpeg" alt=""><br><br></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-XiJRGzNx.mjs.map
