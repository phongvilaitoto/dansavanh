import { g as useRoute, u as useRouter, k as useMainStore, s as storeToRefs, l as useFetch, b as useRuntimeConfig } from './server.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blogReuseComp",
  __ssrInlineRender: true,
  props: ["isComp"],
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const config = useRuntimeConfig();
    const store = useMainStore();
    const { selectedIdx } = storeToRefs(store);
    const blog = ref({});
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(config.public.apiBase + "/getDBlog/" + route.params.id, "$i8Oq5NXK0i")), __temp = await __temp, __restore(), __temp);
    blog.value = data.value.dBlog;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "max-width",
        style: { "padding": "0 30px 0 30px", "min-height": "80vh" }
      }, _attrs))}><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}"><div style="${ssrRenderStyle({ "margin-top": "150px", "width": "100%" })}">`);
      if (unref(blog).img) {
        _push(`<div><img style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("src", unref(blog).img)} alt=""><br><br></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1>${ssrInterpolate(unref(blog).titles[unref(selectedIdx)])}</h1><p>${ssrInterpolate(unref(blog).captions[unref(selectedIdx)])}</p><div>${unref(blog).descriptions[unref(selectedIdx)]}</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogReuseComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=blogReuseComp-fmz74Jzt.mjs.map
