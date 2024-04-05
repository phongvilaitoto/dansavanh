import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-KlcFkPXq.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-C3iUBhQ2.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-BrQUnAzb.mjs';
import { _ as __nuxt_component_4 } from './Title-C9T3KzZV.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
import './index-shETwSNC.mjs';
import './Portal-B4Q6mTXn.mjs';
import 'dom-align';
import 'resize-observer-polyfill';
import 'lodash-es/isEqual.js';
import '../_/CloseCircleFilled.mjs';
import './createContext-DErE1G0Y.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_a_layout = __nuxt_component_0;
  const _component_a_layout_content = LayoutContent;
  const _component_a_row = __nuxt_component_1;
  const _component_a_col = __nuxt_component_2;
  const _component_a_typography_title = __nuxt_component_4;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_a_layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="cover" data-v-3af63fe5${_scopeId}><div class="bg-cover" data-v-3af63fe5${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("div", { class: "cover" }, [
            createVNode("div", { class: "bg-cover" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_a_layout_content, { class: "content-container" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-3af63fe5${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                span: 24,
                style: { "text-align": "center", "justify-content": "center" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)", "margin": "0", "text-transform": "uppercase" } }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`News`);
                        } else {
                          return [
                            createTextVNode("News")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)", "margin": "0", "text-transform": "uppercase" } }, {
                        default: withCtx(() => [
                          createTextVNode("News")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_a_col, {
                span: 24,
                style: { "align-content": "center", "justify-content": "center", "display": "flex", "margin-top": "20px" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ width: "160px", margin: "20xp 0 0 " })}" data-v-3af63fe5${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "",
                        style: { width: "160px", margin: "20xp 0 0 " }
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_a_col, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  span: 24,
                  style: { "text-align": "center", "justify-content": "center" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)", "margin": "0", "text-transform": "uppercase" } }, {
                      default: withCtx(() => [
                        createTextVNode("News")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, {
                  span: 24,
                  style: { "align-content": "center", "justify-content": "center", "display": "flex", "margin-top": "20px" }
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "",
                      style: { width: "160px", margin: "20xp 0 0 " }
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div style="${ssrRenderStyle({ padding: "24px", minHeight: "280px" })}" data-v-3af63fe5${_scopeId}> News </div>`);
      } else {
        return [
          createVNode(_component_a_row, { justify: "center" }, {
            default: withCtx(() => [
              createVNode(_component_a_col, { span: 24 }, {
                default: withCtx(() => [
                  createVNode("hr", { style: { "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" } })
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                span: 24,
                style: { "text-align": "center", "justify-content": "center" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_typography_title, { style: { "color": "#000", "font-family": "var(--font-family)", "margin": "0", "text-transform": "uppercase" } }, {
                    default: withCtx(() => [
                      createTextVNode("News")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                span: 24,
                style: { "align-content": "center", "justify-content": "center", "display": "flex", "margin-top": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    style: { width: "160px", margin: "20xp 0 0 " }
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode("div", { style: { padding: "24px", minHeight: "280px" } }, " News ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/more/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const news = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3af63fe5"]]);

export { news as default };
//# sourceMappingURL=news-HfMjcqtr.mjs.map
