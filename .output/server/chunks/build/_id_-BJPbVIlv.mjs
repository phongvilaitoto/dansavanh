import { defineComponent, reactive, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { H as HotelReuseComp } from './hotelReuseComp-CWZms6rl.mjs';
import { s as storeToRefs, e as useMainStore } from './server.mjs';
import { useRouter, useRoute } from 'vue-router';
import 'swiper/modules';
import 'swiper/vue';
import './decoration-1-KlcFkPXq.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './gallery-Ckvcd9up.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-CKfP-yp2.mjs';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import './index-mrjKPo2m.mjs';
import 'vue3-google-map';
import 'stylis';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'vue-types';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { main, selectedIdx } = storeToRefs(useMainStore());
    useRouter();
    const route = useRoute();
    const hotel = reactive({
      data: {}
    });
    watch(
      () => main.value.hotels,
      () => {
        if (main.value.hotels) {
          const hotelData = main.value.hotels.find(
            (i) => i.titles[selectedIdx.value] === route.params.id
          );
          hotel.data = hotelData;
        }
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HotelReuseComp, {
        hotel: hotel.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hotels/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BJPbVIlv.mjs.map
