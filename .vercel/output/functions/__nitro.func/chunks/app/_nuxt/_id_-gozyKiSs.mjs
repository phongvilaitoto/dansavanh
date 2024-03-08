import { u as useRoute } from '../server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "max-width",
        style: { "margin-top": "120px", "min-height": "500px" }
      }, _attrs))}><img style="${ssrRenderStyle({ "width": "100%" })}" src="https://storage.googleapis.com/dsv-bucket/dvs-gallery/37.jpeg" alt=""><br><br><h1>${ssrInterpolate(unref(route).query.i)}</h1><p>With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant\u2019s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk. </p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-gozyKiSs.mjs.map
