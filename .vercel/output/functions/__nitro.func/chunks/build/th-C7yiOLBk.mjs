import { k as useFetch, c as useRuntimeConfig } from './server.mjs';
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

export { th as default };
//# sourceMappingURL=th-C7yiOLBk.mjs.map
