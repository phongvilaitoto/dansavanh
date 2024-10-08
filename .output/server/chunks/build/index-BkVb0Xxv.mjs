import { _ as __nuxt_component_0 } from './HeaderTitle-DPIm4vxC.mjs';
import { useSSRContext, createVNode, defineComponent, ref, withAsyncContext, withCtx, toDisplayString, unref, createTextVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './decoration-1-KlcFkPXq.mjs';
import { d as useRouter, b as useLocalePath, e as useMainStore, s as storeToRefs, f as useFetch, u as useHead, g as useRuntimeConfig } from './server.mjs';
import { T as Typography, a as Title, B as Base, o as omit, b as baseProps } from './Title-C6q5tvoZ.mjs';
import _extends from '@babel/runtime/helpers/esm/extends';
import { L as LayoutContent } from './index-CKfP-yp2.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-mrjKPo2m.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-google-map';
import 'stylis';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'vue-types';
import './createContext-DErE1G0Y.mjs';
import 'resize-observer-polyfill';
import 'dom-align';

var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const linkProps = () => omit(_extends(_extends({}, baseProps()), {
  ellipsis: {
    type: Boolean,
    default: void 0
  }
}), ["component"]);
const Link = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const _a = _extends(_extends({}, props), attrs), {
    ellipsis,
    rel
  } = _a, restProps = __rest(_a, ["ellipsis", "rel"]);
  const mergedProps = _extends(_extends({}, restProps), {
    rel: rel === void 0 && restProps.target === "_blank" ? "noopener noreferrer" : rel,
    ellipsis: !!ellipsis,
    component: "a"
  });
  delete mergedProps.navigate;
  return createVNode(Base, mergedProps, slots);
};
Link.displayName = "ATypographyLink";
Link.inheritAttrs = false;
Link.props = linkProps();
const paragraphProps = () => omit(baseProps(), ["component"]);
const Paragraph = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const paragraphProps2 = _extends(_extends(_extends({}, props), {
    component: "div"
  }), attrs);
  return createVNode(Base, paragraphProps2, slots);
};
Paragraph.displayName = "ATypographyParagraph";
Paragraph.inheritAttrs = false;
Paragraph.props = paragraphProps();
const textProps = () => _extends(_extends({}, omit(baseProps(), ["component"])), {
  ellipsis: {
    type: [Boolean, Object],
    default: void 0
  }
});
const Text = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const {
    ellipsis
  } = props;
  const textProps2 = _extends(_extends(_extends({}, props), {
    ellipsis: ellipsis && typeof ellipsis === "object" ? omit(ellipsis, ["expandable", "rows"]) : ellipsis,
    component: "span"
  }), attrs);
  return createVNode(Base, textProps2, slots);
};
Text.displayName = "ATypographyText";
Text.inheritAttrs = false;
Text.props = textProps();
Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;
Typography.Link = Link;
Typography.Base = Base;
Typography.install = function(app) {
  app.component(Typography.name, Typography);
  app.component(Typography.Text.displayName, Text);
  app.component(Typography.Title.displayName, Title);
  app.component(Typography.Paragraph.displayName, Paragraph);
  app.component(Typography.Link.displayName, Link);
  return app;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    const localePath = useLocalePath();
    const config = useRuntimeConfig();
    const store = useMainStore();
    const { selectedIdx } = storeToRefs(store);
    const blogs = ref([]);
    const blogs2 = ref([]);
    const res = ([__temp, __restore] = withAsyncContext(() => useFetch(
      config.public.apiBase + "/getDBlogs?type=Events&eventType=Coming Events",
      "$nARolazKHS"
    )), __temp = await __temp, __restore(), __temp);
    blogs.value = res.data.value.dBlogs;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      config.public.apiBase + "/getDBlogs?type=Events&eventType=Past Events",
      "$YyeTK20Npk"
    )), __temp = await __temp, __restore(), __temp);
    blogs2.value = data.value.dBlogs;
    useHead({
      title: "Tourist Attraction",
      meta: [{ name: "description", content: "Tourist Attraction" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderTitle = __nuxt_component_0;
      const _component_a_layout_content = LayoutContent;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_typography_title = Title;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderTitle, {
        img: "https://storage.googleapis.com/dsv-bucket/imgs/imgs/bfc6193d-e7fc-4cda-9e03-4388a845b5df.jpg",
        title: _ctx.$t("eventTitle"),
        caption: _ctx.$t("")
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, { class: "content-container" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-b4f53b67${_scopeId3}>`);
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
                        _push4(`<h2 class="headerTitle" data-v-b4f53b67${_scopeId3}>${ssrInterpolate(_ctx.$t("eventComing"))}</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "headerTitle" }, toDisplayString(_ctx.$t("eventComing")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span style="${ssrRenderStyle({ "font-size": "18px", "font-weight": "700", "font-family": "var(--font-family)" })}" data-v-b4f53b67${_scopeId3}>${ssrInterpolate(unref(blogs).length)}</span>`);
                        _push4(ssrRenderComponent(_component_a_typography_title, {
                          level: 5,
                          style: { "color": "#000", "padding": "0", "margin": "0", "font-family": "var(--font-family)" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("eventComing"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("eventComing")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { style: { "font-size": "18px", "font-weight": "700", "font-family": "var(--font-family)" } }, toDisplayString(unref(blogs).length), 1),
                          createVNode(_component_a_typography_title, {
                            level: 5,
                            style: { "color": "#000", "padding": "0", "margin": "0", "font-family": "var(--font-family)" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("eventComing")), 1)
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
                    style: { "align-content": "center", "justify-content": "center", "display": "flex" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-b4f53b67${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            style: { height: "50px", display: "block" }
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
                        createVNode("h2", { class: "headerTitle" }, toDisplayString(_ctx.$t("eventComing")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { style: { "font-size": "18px", "font-weight": "700", "font-family": "var(--font-family)" } }, toDisplayString(unref(blogs).length), 1),
                        createVNode(_component_a_typography_title, {
                          level: 5,
                          style: { "color": "#000", "padding": "0", "margin": "0", "font-family": "var(--font-family)" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("eventComing")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "align-content": "center", "justify-content": "center", "display": "flex" }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          style: { height: "50px", display: "block" }
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ padding: "24px", minHeight: "280px" })}" data-v-b4f53b67${_scopeId}><!--[-->`);
            ssrRenderList(unref(blogs), (i) => {
              _push2(ssrRenderComponent(_component_a_row, {
                onClick: ($event) => unref(router).push(unref(localePath)("/events") + "/" + i._id),
                class: "room-container"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 10,
                      class: "room-cover",
                      style: `background-image: url('${i.img}')`
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 8,
                      class: "room-info"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-box" data-v-b4f53b67${_scopeId3}><h2 data-v-b4f53b67${_scopeId3}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2><p data-v-b4f53b67${_scopeId3}>${ssrInterpolate(i.captions[unref(selectedIdx)])}</p><button class="btn btn-2 hover-slide-up" data-v-b4f53b67${_scopeId3}><span data-v-b4f53b67${_scopeId3}>${ssrInterpolate(_ctx.$t("discoverMore"))}</span></button></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-box" }, [
                              createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                              createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                              createVNode("button", {
                                class: "btn btn-2 hover-slide-up",
                                onClick: ($event) => _ctx.$router.push(unref(localePath)("/events") + "/" + i._id)
                              }, [
                                createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
                              ], 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_col, {
                        xs: 24,
                        sm: 24,
                        lg: 10,
                        class: "room-cover",
                        style: `background-image: url('${i.img}')`
                      }, null, 8, ["style"]),
                      createVNode(_component_a_col, {
                        xs: 24,
                        sm: 24,
                        lg: 8,
                        class: "room-info"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                            createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                            createVNode("button", {
                              class: "btn btn-2 hover-slide-up",
                              onClick: ($event) => _ctx.$router.push(unref(localePath)("/events") + "/" + i._id)
                            }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
                            ], 8, ["onClick"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_a_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<hr style="${ssrRenderStyle({ "border": "0", "margin-top": "24px", "border-top": "1px solid #eee" })}" data-v-b4f53b67${_scopeId3}>`);
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
                        _push4(`<h1 class="headerTitle" data-v-b4f53b67${_scopeId3}>${ssrInterpolate(_ctx.$t("eventPast"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headerTitle" }, toDisplayString(_ctx.$t("eventPast")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    style: { "align-content": "center", "justify-content": "center", "display": "flex" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ height: "50px", display: "block" })}" data-v-b4f53b67${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            style: { height: "50px", display: "block" }
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
                        createVNode("h1", { class: "headerTitle" }, toDisplayString(_ctx.$t("eventPast")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      span: 24,
                      style: { "align-content": "center", "justify-content": "center", "display": "flex" }
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          style: { height: "50px", display: "block" }
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ padding: "24px", minHeight: "280px" })}" data-v-b4f53b67${_scopeId}><!--[-->`);
            ssrRenderList(unref(blogs2), (i) => {
              _push2(ssrRenderComponent(_component_a_row, {
                class: "room-container",
                onClick: ($event) => unref(router).push(unref(localePath)("/events") + "/" + i._id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 10,
                      style: `background-image: url('${i.img}')`,
                      class: "room-cover"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_col, {
                      xs: 24,
                      sm: 24,
                      lg: 8,
                      class: "room-info"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-box" data-v-b4f53b67${_scopeId3}><h2 data-v-b4f53b67${_scopeId3}>${ssrInterpolate(i.titles[unref(selectedIdx)])}</h2><p data-v-b4f53b67${_scopeId3}>${ssrInterpolate(i.captions[unref(selectedIdx)])}</p><button class="btn btn-2 hover-slide-up" data-v-b4f53b67${_scopeId3}><span data-v-b4f53b67${_scopeId3}>${ssrInterpolate(_ctx.$t("discoverMore"))}</span></button></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-box" }, [
                              createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                              createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                              createVNode("button", {
                                class: "btn btn-2 hover-slide-up",
                                onClick: ($event) => _ctx.$router.push(unref(localePath)("/events") + "/" + i._id)
                              }, [
                                createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
                              ], 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_col, {
                        xs: 24,
                        sm: 24,
                        lg: 10,
                        style: `background-image: url('${i.img}')`,
                        class: "room-cover"
                      }, null, 8, ["style"]),
                      createVNode(_component_a_col, {
                        xs: 24,
                        sm: 24,
                        lg: 8,
                        class: "room-info"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                            createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                            createVNode("button", {
                              class: "btn btn-2 hover-slide-up",
                              onClick: ($event) => _ctx.$router.push(unref(localePath)("/events") + "/" + i._id)
                            }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
                            ], 8, ["onClick"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
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
                      createVNode("h2", { class: "headerTitle" }, toDisplayString(_ctx.$t("eventComing")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "display": "flex", "justify-content": "center", "align-items": "center", "gap": "10px" }
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { style: { "font-size": "18px", "font-weight": "700", "font-family": "var(--font-family)" } }, toDisplayString(unref(blogs).length), 1),
                      createVNode(_component_a_typography_title, {
                        level: 5,
                        style: { "color": "#000", "padding": "0", "margin": "0", "font-family": "var(--font-family)" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("eventComing")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "align-content": "center", "justify-content": "center", "display": "flex" }
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "",
                        style: { height: "50px", display: "block" }
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { style: { padding: "24px", minHeight: "280px" } }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(blogs), (i) => {
                  return openBlock(), createBlock(_component_a_row, {
                    onClick: ($event) => unref(router).push(unref(localePath)("/events") + "/" + i._id),
                    class: "room-container"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_col, {
                        xs: 24,
                        sm: 24,
                        lg: 10,
                        class: "room-cover",
                        style: `background-image: url('${i.img}')`
                      }, null, 8, ["style"]),
                      createVNode(_component_a_col, {
                        xs: 24,
                        sm: 24,
                        lg: 8,
                        class: "room-info"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                            createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                            createVNode("button", {
                              class: "btn btn-2 hover-slide-up",
                              onClick: ($event) => _ctx.$router.push(unref(localePath)("/events") + "/" + i._id)
                            }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
                            ], 8, ["onClick"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 256))
              ]),
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
                      createVNode("h1", { class: "headerTitle" }, toDisplayString(_ctx.$t("eventPast")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, {
                    span: 24,
                    style: { "align-content": "center", "justify-content": "center", "display": "flex" }
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "",
                        style: { height: "50px", display: "block" }
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { style: { padding: "24px", minHeight: "280px" } }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(blogs2), (i) => {
                  return openBlock(), createBlock(_component_a_row, {
                    class: "room-container",
                    onClick: ($event) => unref(router).push(unref(localePath)("/events") + "/" + i._id)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_col, {
                        xs: 24,
                        sm: 24,
                        lg: 10,
                        style: `background-image: url('${i.img}')`,
                        class: "room-cover"
                      }, null, 8, ["style"]),
                      createVNode(_component_a_col, {
                        xs: 24,
                        sm: 24,
                        lg: 8,
                        class: "room-info"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h2", null, toDisplayString(i.titles[unref(selectedIdx)]), 1),
                            createVNode("p", null, toDisplayString(i.captions[unref(selectedIdx)]), 1),
                            createVNode("button", {
                              class: "btn btn-2 hover-slide-up",
                              onClick: ($event) => _ctx.$router.push(unref(localePath)("/events") + "/" + i._id)
                            }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("discoverMore")), 1)
                            ], 8, ["onClick"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4f53b67"]]);

export { index as default };
//# sourceMappingURL=index-BkVb0Xxv.mjs.map
