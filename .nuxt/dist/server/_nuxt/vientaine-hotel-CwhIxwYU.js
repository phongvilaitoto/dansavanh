import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { H as HotelReuseComp } from "./hotelReuseComp-CWZms6rl.js";
import { z as storeToRefs, y as useMainStore, a as useRouter } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css                    */
import "swiper/modules";
import "swiper/vue";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "./decoration-1-KlcFkPXq.js";
import "./gallery-Ckvcd9up.js";
import "./index-CKfP-yp2.js";
import "@babel/runtime/helpers/esm/extends";
import "@babel/runtime/helpers/esm/objectSpread2";
import "@ant-design/icons-vue/es/icons/BarsOutlined.js";
import "@ant-design/icons-vue/es/icons/RightOutlined.js";
import "@ant-design/icons-vue/es/icons/LeftOutlined.js";
import "./index-mrjKPo2m.js";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "vue3-google-map";
import "@emotion/hash";
import "@emotion/unitless";
import "stylis";
import "@ant-design/colors";
import "@ctrl/tinycolor";
import "@ant-design/icons-vue/es/icons/LoadingOutlined.js";
import "@ant-design/icons-vue/es/icons/ExclamationCircleFilled.js";
import "@ant-design/icons-vue/es/icons/CloseCircleFilled.js";
import "@ant-design/icons-vue/es/icons/CheckCircleFilled.js";
import "@ant-design/icons-vue/es/icons/InfoCircleFilled.js";
import "vue-types";
import "@ant-design/icons-vue/es/icons/CloseOutlined.js";
import "@ant-design/icons-vue/es/icons/CheckCircleOutlined.js";
import "@ant-design/icons-vue/es/icons/InfoCircleOutlined.js";
import "@ant-design/icons-vue/es/icons/CloseCircleOutlined.js";
import "@ant-design/icons-vue/es/icons/ExclamationCircleOutlined.js";
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
const vientaineHotel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bdb011b5"]]);
export {
  vientaineHotel as default
};
//# sourceMappingURL=vientaine-hotel-CwhIxwYU.js.map
