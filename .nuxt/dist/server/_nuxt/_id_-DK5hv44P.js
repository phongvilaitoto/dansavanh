import { defineComponent, reactive, watch, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { H as HotelReuseComp } from "./hotelReuseComp-BwnXj9ux.js";
import { s as storeToRefs, i as useMainStore } from "../server.mjs";
import { useRouter, useRoute } from "vue-router";
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
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-DTnbOyTJ.js";
import "@babel/runtime/helpers/esm/extends";
import "./useConfigInject-BAI3R2rN.js";
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
import "./index-DxkjXEE1.js";
import "ofetch";
import "unctx";
import "h3";
import "@unhead/vue";
import "@unhead/shared";
import "unhead";
import "radix3";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "vue3-google-map";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-DK5hv44P.js.map
