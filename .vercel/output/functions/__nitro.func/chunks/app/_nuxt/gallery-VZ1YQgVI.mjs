import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  name: "ExampleMasonry",
  data() {
    return {
      options: {
        width: 300,
        padding: {
          2: 8,
          default: 12
        }
      },
      items: [
        {
          title: "Sed non ante non cras amet",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.",
          image: "https://storage.googleapis.com/dsv-bucket/gallery/5754f0381ebd4.jpeg"
        },
        {
          title: "Curabitur sit amet nunc",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.",
          image: "https://storage.googleapis.com/dsv-bucket/gallery/5fd47819972a6.jpeg"
        }
      ]
    };
  },
  methods: {
    append() {
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "masonry" }, _attrs))} data-v-9f76bcde><!--[-->`);
  ssrRenderList(43, (i) => {
    _push(`<div class="item" data-v-9f76bcde><img style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("src", "https://storage.googleapis.com/dsv-bucket/dvs-gallery/" + i + ".jpeg")} data-v-9f76bcde></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9f76bcde"]]);

export { Gallery as G };
//# sourceMappingURL=gallery-VZ1YQgVI.mjs.map
