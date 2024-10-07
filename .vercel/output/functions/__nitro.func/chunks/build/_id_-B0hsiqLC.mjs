import { defineComponent, reactive, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { H as HotelReuseComp } from './hotelReuseComp-ByIX60EL.mjs';
import { s as storeToRefs, i as useMainStore } from './server.mjs';
import { useRouter, useRoute } from 'vue-router';
import 'swiper/modules';
import 'swiper/vue';
import './decoration-1-KlcFkPXq.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './gallery-Ckvcd9up.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-DJmKUcFc.mjs';
import '@babel/runtime/helpers/esm/extends';
import './useConfigInject-BiTbSa3p.mjs';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
import './index-B566YWDZ.mjs';
import 'vue3-google-map';

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
//# sourceMappingURL=_id_-B0hsiqLC.mjs.map
