import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { H as HotelReuseComp } from "./hotelReuseComp-ByIX60EL.js";
import { s as storeToRefs, i as useMainStore } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
/* empty css                    */
import "swiper/modules";
import "swiper/vue";
import "./decoration-1-KlcFkPXq.js";
import "./gallery-Ckvcd9up.js";
import "./index-DJmKUcFc.js";
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
import "./index-B566YWDZ.js";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "@vue/devtools-api";
import "ohash";
import "cookie-es";
import "vue3-google-map";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "golf",
  __ssrInlineRender: true,
  setup(__props) {
    const { main, selectedIdx } = storeToRefs(useMainStore());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(HotelReuseComp, mergeProps({
        hotel: unref(main).hotels[1]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hotels/golf.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const golf = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-74b90599"]]);
export {
  golf as default
};
//# sourceMappingURL=golf-BDeNmXTq.js.map
