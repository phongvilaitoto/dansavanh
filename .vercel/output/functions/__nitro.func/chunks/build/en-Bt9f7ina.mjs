import { c as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-DDMkkcYN.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-google-map';

const en = async (locale) => {
  const config = useRuntimeConfig();
  const { data } = await useFetch(config.public.apiBase + "/getDLang", "$VH5HhRtoLO");
  const object = data.value.dLang;
  const newObject = {};
  for (let field in object) {
    newObject[field] = object[field][0];
  }
  return newObject;
};

export { en as default };
//# sourceMappingURL=en-Bt9f7ina.mjs.map
