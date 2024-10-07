import { s as storeToRefs, i as useMainStore, a as useRouter } from "../server.mjs";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { H as HotelReuseComp } from "./hotelReuseComp-ByIX60EL.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "devalue";
import "@vue/devtools-api";
import "destr";
import "klona";
import "ohash";
import "cookie-es";
import "vue3-google-map";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "numngum",
  __ssrInlineRender: true,
  setup(__props) {
    const { main, selectedIdx } = storeToRefs(useMainStore());
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(HotelReuseComp, mergeProps({
        hotel: unref(main).hotels[0]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hotels/numngum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const numngum = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06e9a099"]]);
export {
  numngum as default
};
//# sourceMappingURL=numngum-CaXx4Ej6.js.map
