import { defineComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./blogReuseComp-CQd6p83V.js";
import "../server.mjs";
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
import "@vue/devtools-api";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "vue3-google-map";
import "@babel/runtime/helpers/esm/extends";
import "@emotion/hash";
import "@emotion/unitless";
import "stylis";
import "@babel/runtime/helpers/esm/objectSpread2";
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
import "./index-mrjKPo2m.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-DUYeKpYR.js.map
