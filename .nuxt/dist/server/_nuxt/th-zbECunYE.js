import { A as useFetch, d as useRuntimeConfig } from "../server.mjs";
import "vue";
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
import "vue/server-renderer";
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
const th = async (locale) => {
  const config = useRuntimeConfig();
  const { data } = await useFetch(config.public.apiBase + "/getDLang", "$kw1yMCccMo");
  const object = data.value.dLang;
  const newObject = {};
  for (let field in object) {
    newObject[field] = object[field][1];
  }
  return newObject;
};
export {
  th as default
};
//# sourceMappingURL=th-zbECunYE.js.map
