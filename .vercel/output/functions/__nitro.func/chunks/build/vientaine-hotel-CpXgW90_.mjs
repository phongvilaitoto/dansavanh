import { s as storeToRefs, k as useMainStore, u as useRouter } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { H as HotelReuseComp } from './hotelReuseComp-Be7-qxo0.mjs';
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
import '@ant-design/icons-vue';
import './decoration-1-KlcFkPXq.mjs';
import './gallery-BSA0t18N.mjs';
import './index-tPmcAqhj.mjs';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@babel/runtime/helpers/esm/extends';
import './index-shETwSNC.mjs';
import './index-C3iUBhQ2.mjs';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
import './Portal-B4Q6mTXn.mjs';
import 'dom-align';
import 'resize-observer-polyfill';
import 'lodash-es/isEqual.js';
import './index-DHXF1w76.mjs';
import './useState-DiUvnW6I.mjs';
import '../_/LoadingOutlined.mjs';
import './createContext-DErE1G0Y.mjs';
import './Compact-B2HWyowC.mjs';
import 'lodash-es';
import './index-BrQUnAzb.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vientaine-hotel",
  __ssrInlineRender: true,
  setup(__props) {
    const { main, selectedIdx } = storeToRefs(useMainStore());
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(HotelReuseComp, mergeProps({
        hotel: unref(main).hotels[2]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hotels/vientaine-hotel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vientaineHotel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-567e3867"]]);

export { vientaineHotel as default };
//# sourceMappingURL=vientaine-hotel-CpXgW90_.mjs.map
