import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { CarOutlined, PhoneOutlined, RedEnvelopeOutlined } from '@ant-design/icons-vue';
import { e as apiKey, f as useLocalePath } from './server.mjs';
import { useSSRContext, defineComponent, ref, unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, reactive, createTextVNode, withModifiers, withDirectives, vModelText } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$2 } from './decoration-1-KlcFkPXq.mjs';
import { GoogleMap, MarkerCluster, CustomMarker, InfoWindow } from 'vue3-google-map';
import { a as api } from './index-BoKtI3Qq.mjs';
import { _ as __nuxt_component_0, L as LayoutContent } from './index-C3iUBhQ2.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './index-BrQUnAzb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'vue-router';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import './Portal-B4Q6mTXn.mjs';
import '../_/CloseOutlined.mjs';
import '../_/LoadingOutlined.mjs';
import '../_/CloseCircleFilled.mjs';
import '@ctrl/tinycolor';
import '@ant-design/colors';
import 'stylis';
import 'vue-types';

const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAbCAYAAACTMQajAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExODA4M0NDMTM4MEMyQTVFQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCOTZDQTM5RjI5NEExMUU1QkZBNEM3NDM1NkRERjkxNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCOTZDQTM5RTI5NEExMUU1QkZBNEM3NDM1NkRERjkxNyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTM2RDhBRDI0QTIxNjgxMTgyMkFCOERGMzNCQTEzOTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTgwODNDQzEzODBDMkE1RUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ZRfDhAAAGv0lEQVR42uxbC1BVVRQ9FJCBGiLy1cHAT5hUpGU5fRStCBt1Ks0sHWqyIRqzprJxYEiDaqbGGSlFo59ODiX9zGrGyqwMzdSUsoBELCFAMK34igKvtWVfPO96733vwfvx5u6ZNefe8z/7rHv2PvuBnzDFp2Ty/HWhSHYAl7t4qC5g7QWmyn1ObnMDeUiIOxkmgXxPLnLjWH79ikA4ngNNfniX+PdyIxcieQTYuKswfY0biPM4kqeAw8AUc9tcK3HDQ8U9qYniqsuiRMigi8/mtbadFqWVDSIz7ytrAmFz0uzs9zDIUszPeUAIMBHtC5B/xsVrGgnEMIFMcaEkT4oT2RnTRIC/tXEaGBQoGlvaNU+gt+3sewOgEKiWCfS3G8hjiptkaEiQyEyfeh557DVh1cBJg7pV0nMq42tT7b4jM24eKwYEnu/VtJ06Izq7LDBjZwwJlI3TZL09A6HeUYoBmCr3LUmIC7d6bzjRLDJytoi6403OdaLZsY0gMwYy/S7lBSAZTSYO+f/inc7CBCAM+AN5VXb2HYckGiDK/+nmm94AJOPJ7POJfAjzPtWLfkYgGSX5j9UGdSn4F406v/J7COuN5Gfkt7pj7YOCrSMAu3+pNiRPX25hryN5CPgEmM15lyA5AVxIvhjexyDNAoZL7bYjuR8KqdPo0w/JIuAZugioitsdmNt7SK4D3sI4z2mUZyN5kPSD8nlSPs07B1jM5FHkNMq20S0Q9cvsGH86khfpgqHK34dkKfr4RpWfiSSXiILn25G+BMwFlJBFC/JXoN3L7j6RTrV32KzT2zhQgFZQiclD8gqwjskjG85k4AMNpVO7IuA1Jg998bRZNVzFkeBYJBALhOqUh3J5pCqf5rxMOnmOEHl4I1N11qxeRwaSL5k8pP3fgAouprxtqLNAR5c0n/30gXFeJ+cHE6nQbr43mj1XBRJjeTPoWA5k5byv6BnKmKCqvwK4W3oehnbjACLgOFasK80WmeN0fn2YTC7GjmcyUdxpNXDQRh8TmYR+/JFEoY/xwBg2R/tY3wWoG6/RBc2BfMsZAAVfyJTeSDddLl/s7HXHjwgVSxZM7sHwyMFW5UkJ0Vbl068fZWjCHsPCZuuMlaXYZzvlPtT/VHK669E3KWAOZ9FvNT+x4olcT3L+StRdrnLYy1Dnezxe7eI4k/IxFWFMC49Np+d3DFvyLJ/Ae4B5aNspraEca0jBYykQzuvNULWvBG5AXdluFKNdPl1wgCucveiYiMFibkqibvno2KFnocj6zfsNT6AkYJYOwhycW5PGza0eSatkRhSZxV9bB/sOnhD68i38/CY2bWQvHO9b+HWVTB5p/eQfFkhhELU0q8ijiBI8DfK0uapraDI8gcghLtFp66ybkFbQMYnTg6xktwvGPQYSkPlZAtwF3In3vUg/Bt7lsIWRXCr5absN6u1UTDyRzs7bXZO3+Ds1DY2GBNpsbxzIyTKE00YP6+cJgEISTzMhrmXkYrOXQze5Bm1l5+E/g3ryBxLMlwXPEaK+URRtPefaTZ0UJ4YNCe55rzh6Qhwoqz13itT847w4kBNFUXi4JyfBfs9akIVuj9cAM4EHOB6Vg/wK1Nmk01zWbIzQj+hHcGqxQTS3SGX1SZH3zi7J5wmzIhCRRy535y3MEVGc87HYpGgn9GdRbZbDRAL2ABTDohvUAS6aY7QX0gmaYlAvmdMSHX+n34k3EOgz3nSay/M6dYId6E8xE4kcnJSdXX8mhZYjPFCDTC18/RZSYE+LdOQ0f8SvS7U+BI6uL+LXTcJHxOMmDMo/AuUW0tUfSMMzOaOrgL/YF6G4zEIHuvyBHWEKFeSjv43svE/gWEqCxuZSvIkiwRTI3AKUs25m8bxIdtgYN5djWXRj3Ym+6Kr+LX8YdENbyXGlCo4rCfMEcp48yvETknuBH0V3FLqYyVPrQF/05ynKTyXp3Af1R/EUijlpGfVbObSwjAlIPs1x4A2+PtPc1tj4ECrZzLVwXOlDPg2pH/pAovg2ewefbD5DoA0MR/5Yq5jbbJfyTkt9HdNpV8jlpSrlk0M5hYNxSui/kzczhW9G1G6rHScaObA3AZ9LYQMi46uiO6q9lwkmR5bplKLf9ug3r2Ypn07BF4Bp6LfNjrFpfokc76mTfLJyXtuVqHNI1ayE17ZFp9sqSa9eJ37eOCn+Vb9LKyDnYD/0gQTK8Rbyg2w5sKgziMdv6eP4ZI47+roOB8dME/b/kaCVrM6aKZISonre6Ypv6xbmlQQypf8QyPy3Ht+TdjeOZTEJ5Hvyhej+MxJXC/1nav7/AgwA/C1EFr3d9coAAAAASUVORK5CYII=";
const _imports_1 = "" + buildAssetsURL("bus2.CD1k8kJ3.png");
const _imports_0 = "" + buildAssetsURL("map.Rg7XGIgM.jpeg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Gmap",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultCenter = {
      lat: 18.265426666666666,
      lng: 102.62241633333333
    };
    const locations = ref([
      {
        title: "Dansavanh Casino Resort",
        // Image: Image1,
        image: "https://www.dansavanh.net/assets/images/fb2.png",
        position: {
          lat: 18.431522,
          lng: 102.648778
        }
      },
      {
        title: "Dansavanh Golf & Resort",
        //   Image: Image2,
        image: "https://www.dansavanh.net/assets/images/fb2.png",
        position: {
          lat: 18.394955,
          lng: 102.649904
        }
      },
      {
        title: "Dansavanh Vientiane Hotel",
        //   Image: Image3,
        image: "https://www.dansavanh.net/assets/images/fb2.png",
        position: {
          lat: 17.970802,
          lng: 102.568567
        }
      }
    ]);
    const selectedLocation = ref(null);
    const ShowInfo = (location) => {
      selectedLocation.value = location === selectedLocation.value ? null : location;
    };
    const MapLink = (lat, lng) => {
      const googleMapsUrl = `https://www.google.com/maps/place/${lat},${lng}`;
      (void 0).open(googleMapsUrl, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(GoogleMap), mergeProps({
        "api-key": unref(apiKey),
        style: { "width": "100%", "height": "550px" },
        center: defaultCenter,
        zoom: 10
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MarkerCluster), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locations), (location) => {
                    _push3(ssrRenderComponent(unref(CustomMarker), {
                      key: location,
                      options: { position: location.position, anchorPoint: "BOTTOM_CENTER" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${ssrRenderStyle({ "text-align": "center" })}"${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} width="50" height="50" style="${ssrRenderStyle({ "margin-top": "8px", "cursor": "pointer" })}"${_scopeId3}></div>`);
                          if (unref(selectedLocation) === location) {
                            _push4(ssrRenderComponent(unref(InfoWindow), {
                              options: { position: location.position }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div id="content"${_scopeId4}><div id="siteNotice"${_scopeId4}></div><h1 id="firstHeading" class="firstHeading"${_scopeId4}>${ssrInterpolate(location.title)}</h1><div id="bodyContent"${_scopeId4}><img${ssrRenderAttr("src", location.image)} style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId4}><p${_scopeId4}><a${_scopeId4}> - Navigate to here</a></p></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { id: "content" }, [
                                      createVNode("div", { id: "siteNotice" }),
                                      createVNode("h1", {
                                        id: "firstHeading",
                                        class: "firstHeading"
                                      }, toDisplayString(location.title), 1),
                                      createVNode("div", { id: "bodyContent" }, [
                                        createVNode("img", {
                                          src: location.image,
                                          style: { "width": "200px" }
                                        }, null, 8, ["src"]),
                                        createVNode("p", null, [
                                          createVNode("a", {
                                            onClick: ($event) => MapLink(location.position.lat, location.position.lng)
                                          }, " - Navigate to here", 8, ["onClick"])
                                        ])
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("div", { style: { "text-align": "center" } }, [
                              createVNode("img", {
                                onClick: ($event) => ShowInfo(location),
                                src: _imports_0,
                                width: "50",
                                height: "50",
                                style: { "margin-top": "8px", "cursor": "pointer" }
                              }, null, 8, ["onClick"])
                            ]),
                            unref(selectedLocation) === location ? (openBlock(), createBlock(unref(InfoWindow), {
                              key: 0,
                              options: { position: location.position }
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { id: "content" }, [
                                  createVNode("div", { id: "siteNotice" }),
                                  createVNode("h1", {
                                    id: "firstHeading",
                                    class: "firstHeading"
                                  }, toDisplayString(location.title), 1),
                                  createVNode("div", { id: "bodyContent" }, [
                                    createVNode("img", {
                                      src: location.image,
                                      style: { "width": "200px" }
                                    }, null, 8, ["src"]),
                                    createVNode("p", null, [
                                      createVNode("a", {
                                        onClick: ($event) => MapLink(location.position.lat, location.position.lng)
                                      }, " - Navigate to here", 8, ["onClick"])
                                    ])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["options"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locations), (location) => {
                      return openBlock(), createBlock(unref(CustomMarker), {
                        key: location,
                        options: { position: location.position, anchorPoint: "BOTTOM_CENTER" }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "text-align": "center" } }, [
                            createVNode("img", {
                              onClick: ($event) => ShowInfo(location),
                              src: _imports_0,
                              width: "50",
                              height: "50",
                              style: { "margin-top": "8px", "cursor": "pointer" }
                            }, null, 8, ["onClick"])
                          ]),
                          unref(selectedLocation) === location ? (openBlock(), createBlock(unref(InfoWindow), {
                            key: 0,
                            options: { position: location.position }
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { id: "content" }, [
                                createVNode("div", { id: "siteNotice" }),
                                createVNode("h1", {
                                  id: "firstHeading",
                                  class: "firstHeading"
                                }, toDisplayString(location.title), 1),
                                createVNode("div", { id: "bodyContent" }, [
                                  createVNode("img", {
                                    src: location.image,
                                    style: { "width": "200px" }
                                  }, null, 8, ["src"]),
                                  createVNode("p", null, [
                                    createVNode("a", {
                                      onClick: ($event) => MapLink(location.position.lat, location.position.lng)
                                    }, " - Navigate to here", 8, ["onClick"])
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["options"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["options"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MarkerCluster), null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(locations), (location) => {
                    return openBlock(), createBlock(unref(CustomMarker), {
                      key: location,
                      options: { position: location.position, anchorPoint: "BOTTOM_CENTER" }
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "text-align": "center" } }, [
                          createVNode("img", {
                            onClick: ($event) => ShowInfo(location),
                            src: _imports_0,
                            width: "50",
                            height: "50",
                            style: { "margin-top": "8px", "cursor": "pointer" }
                          }, null, 8, ["onClick"])
                        ]),
                        unref(selectedLocation) === location ? (openBlock(), createBlock(unref(InfoWindow), {
                          key: 0,
                          options: { position: location.position }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { id: "content" }, [
                              createVNode("div", { id: "siteNotice" }),
                              createVNode("h1", {
                                id: "firstHeading",
                                class: "firstHeading"
                              }, toDisplayString(location.title), 1),
                              createVNode("div", { id: "bodyContent" }, [
                                createVNode("img", {
                                  src: location.image,
                                  style: { "width": "200px" }
                                }, null, 8, ["src"]),
                                createVNode("p", null, [
                                  createVNode("a", {
                                    onClick: ($event) => MapLink(location.position.lat, location.position.lng)
                                  }, " - Navigate to here", 8, ["onClick"])
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["options"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["options"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/Gmap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const openNotificationWithIcon = (type) => {
      const noti = api;
      noti[type]({
        message: "Thank you! Your email is sent.",
        description: "Thank you! Your email is sent."
      });
    };
    const submit = () => {
      formState.user = {
        name: "",
        email: "",
        phone: "",
        message: ""
      };
      formState.subscriber = {
        email: ""
      };
      openNotificationWithIcon("success");
      (void 0).scrollTo({ top: 0, behavior: "smooth" });
    };
    const formState = reactive({
      user: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      subscriber: {
        email: ""
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_layout = __nuxt_component_0;
      const _component_a_row = __nuxt_component_1;
      const _component_a_col = __nuxt_component_2;
      const _component_a_layout_content = LayoutContent;
      const _component_CarOutlined = CarOutlined;
      const _component_PhoneOutlined = PhoneOutlined;
      const _component_RedEnvelopeOutlined = RedEnvelopeOutlined;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_a_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cover" data-v-3dba7139${_scopeId}><div class="bg-cover" data-v-3dba7139${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "left", "justify-content": "center", "background-color": "transparent" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 22 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headerT1" style="${ssrRenderStyle({ "font-size": "65px" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("contactTitle"))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", {
                            class: "headerT1",
                            style: { "font-size": "65px" }
                          }, toDisplayString(_ctx.$t("contactTitle")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, { span: 22 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="headerT2" style="${ssrRenderStyle({ "margin-top": "-20px" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("contactSubTitle"))}</h5>`);
                      } else {
                        return [
                          createVNode("h5", {
                            class: "headerT2",
                            style: { "margin-top": "-20px" }
                          }, toDisplayString(_ctx.$t("contactSubTitle")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h1", {
                          class: "headerT1",
                          style: { "font-size": "65px" }
                        }, toDisplayString(_ctx.$t("contactTitle")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h5", {
                          class: "headerT2",
                          style: { "margin-top": "-20px" }
                        }, toDisplayString(_ctx.$t("contactSubTitle")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "cover" }, [
                createVNode("div", { class: "bg-cover" }),
                createVNode(_component_a_row, { style: { "padding-top": "160px", "padding-bottom": "50px", "text-align": "left", "justify-content": "center", "background-color": "transparent" } }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h1", {
                          class: "headerT1",
                          style: { "font-size": "65px" }
                        }, toDisplayString(_ctx.$t("contactTitle")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 22 }, {
                      default: withCtx(() => [
                        createVNode("h5", {
                          class: "headerT2",
                          style: { "margin-top": "-20px" }
                        }, toDisplayString(_ctx.$t("contactSubTitle")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, { class: "max-width content-container" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "end",
              style: { "margin-top": "50px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "margin": "2rem 0 2rem" })}" data-v-3dba7139${_scopeId3}><span style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-3dba7139${_scopeId3}>HOME</span><span style="${ssrRenderStyle({ "margin": "0 10px 0 10px", "color": "#A9A9A9" })}" data-v-3dba7139${_scopeId3}>/</span><span style="${ssrRenderStyle({ "color": "#A9A9A9" })}" data-v-3dba7139${_scopeId3}>CONTACT</span></div>`);
                      } else {
                        return [
                          createVNode("div", { style: { "margin": "2rem 0 2rem" } }, [
                            createVNode("span", {
                              style: { "cursor": "pointer" },
                              onClick: ($event) => _ctx.$router.push(unref(localePath)("/"))
                            }, "HOME", 8, ["onClick"]),
                            createVNode("span", { style: { "margin": "0 10px 0 10px", "color": "#A9A9A9" } }, "/"),
                            createVNode("span", { style: { "color": "#A9A9A9" } }, "CONTACT")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a href="https://www.facebook.com/casino.dansavanh" target="_blank" data-v-3dba7139${_scopeId3}><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-3dba7139${_scopeId3}></a>`);
                      } else {
                        return [
                          createVNode("a", {
                            href: "https://www.facebook.com/casino.dansavanh",
                            target: "_blank"
                          }, [
                            createVNode("img", {
                              src: _imports_0$1,
                              alt: ""
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "margin": "2rem 0 2rem" } }, [
                          createVNode("span", {
                            style: { "cursor": "pointer" },
                            onClick: ($event) => _ctx.$router.push(unref(localePath)("/"))
                          }, "HOME", 8, ["onClick"]),
                          createVNode("span", { style: { "margin": "0 10px 0 10px", "color": "#A9A9A9" } }, "/"),
                          createVNode("span", { style: { "color": "#A9A9A9" } }, "CONTACT")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "https://www.facebook.com/casino.dansavanh",
                          target: "_blank"
                        }, [
                          createVNode("img", {
                            src: _imports_0$1,
                            alt: ""
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ minHeight: "280px" })}" data-v-3dba7139${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    span: 24,
                    class: "map-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3 data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("clickOnMarker"))}</h3>`);
                        _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h3", null, toDisplayString(_ctx.$t("clickOnMarker")), 1),
                          createVNode(_sfc_main$1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      span: 24,
                      class: "map-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("h3", null, toDisplayString(_ctx.$t("clickOnMarker")), 1),
                        createVNode(_sfc_main$1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    lg: 24,
                    class: "contact-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-box" data-v-3dba7139${_scopeId3}><h3 style="${ssrRenderStyle({ "margin-bottom": "15px" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("dLocation"))}</h3><h4 style="${ssrRenderStyle({ "margin-bottom": "15px" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("gettingHere"))}</h4><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-3dba7139${_scopeId3}> Wattay Airport \u2013 Look out for Dansavanh Meet &amp; Greet counter at the arrival hall. <br data-v-3dba7139${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-3dba7139${_scopeId3}> Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm<br data-v-3dba7139${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-3dba7139${_scopeId3}> Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval<br data-v-3dba7139${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-3dba7139${_scopeId3}> A private limousine can be arranged via VIP hotline<br data-v-3dba7139${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-3dba7139${_scopeId3}> Please <a href="https://wa.me/8562052241111" target="_blank" data-v-3dba7139${_scopeId3}><b data-v-3dba7139${_scopeId3}>click here</b></a> to contact us on WhatsApp:\xA0<span style="${ssrRenderStyle({ "font-family": "Calibri, sans-serif", "font-size": "11pt" })}" data-v-3dba7139${_scopeId3}><a href="https://wa.me/8562052241111" target="_blank" data-v-3dba7139${_scopeId3}><b data-v-3dba7139${_scopeId3}>+8562052241111</b></a></span><br data-v-3dba7139${_scopeId3}></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-3dba7139${_scopeId3}><span lang="EN" data-v-3dba7139${_scopeId3}>\xA0You may also contact us on\xA0<b data-v-3dba7139${_scopeId3}><a href="weixin://dl/chat?+85602058276666" target="_blank" data-v-3dba7139${_scopeId3}>+8560205827</a>5555</b></span></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-3dba7139${_scopeId3}><b data-v-3dba7139${_scopeId3}>Email: Marketing@dansavanh.com</b></p><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-3dba7139${_scopeId3}><a href="https://www.instagram.com/dansavanhnamngumresort/" target="_blank" data-v-3dba7139${_scopeId3}><b data-v-3dba7139${_scopeId3}>Follow us here on Instagram!</b></a></p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-box" }, [
                            createVNode("h3", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("dLocation")), 1),
                            createVNode("h4", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("gettingHere")), 1),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createTextVNode(" Wattay Airport \u2013 Look out for Dansavanh Meet & Greet counter at the arrival hall. "),
                              createVNode("br")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createTextVNode(" Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm"),
                              createVNode("br")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createTextVNode(" Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval"),
                              createVNode("br")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createTextVNode(" A private limousine can be arranged via VIP hotline"),
                              createVNode("br")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createTextVNode(" Please "),
                              createVNode("a", {
                                href: "https://wa.me/8562052241111",
                                target: "_blank"
                              }, [
                                createVNode("b", null, "click here")
                              ]),
                              createTextVNode(" to contact us on WhatsApp:\xA0"),
                              createVNode("span", { style: { "font-family": "Calibri, sans-serif", "font-size": "11pt" } }, [
                                createVNode("a", {
                                  href: "https://wa.me/8562052241111",
                                  target: "_blank"
                                }, [
                                  createVNode("b", null, "+8562052241111")
                                ])
                              ]),
                              createVNode("br")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createVNode("span", { lang: "EN" }, [
                                createTextVNode("\xA0You may also contact us on\xA0"),
                                createVNode("b", null, [
                                  createVNode("a", {
                                    href: "weixin://dl/chat?+85602058276666",
                                    target: "_blank"
                                  }, "+8560205827"),
                                  createTextVNode("5555")
                                ])
                              ])
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createVNode("b", null, "Email: Marketing@dansavanh.com")
                            ]),
                            createVNode("p", { style: { "text-align": "center" } }, [
                              createVNode("a", {
                                href: "https://www.instagram.com/dansavanhnamngumresort/",
                                target: "_blank"
                              }, [
                                createVNode("b", null, "Follow us here on Instagram!")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      lg: 24,
                      class: "contact-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h3", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("dLocation")), 1),
                          createVNode("h4", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("gettingHere")), 1),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Wattay Airport \u2013 Look out for Dansavanh Meet & Greet counter at the arrival hall. "),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" A private limousine can be arranged via VIP hotline"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Please "),
                            createVNode("a", {
                              href: "https://wa.me/8562052241111",
                              target: "_blank"
                            }, [
                              createVNode("b", null, "click here")
                            ]),
                            createTextVNode(" to contact us on WhatsApp:\xA0"),
                            createVNode("span", { style: { "font-family": "Calibri, sans-serif", "font-size": "11pt" } }, [
                              createVNode("a", {
                                href: "https://wa.me/8562052241111",
                                target: "_blank"
                              }, [
                                createVNode("b", null, "+8562052241111")
                              ])
                            ]),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("span", { lang: "EN" }, [
                              createTextVNode("\xA0You may also contact us on\xA0"),
                              createVNode("b", null, [
                                createVNode("a", {
                                  href: "weixin://dl/chat?+85602058276666",
                                  target: "_blank"
                                }, "+8560205827"),
                                createTextVNode("5555")
                              ])
                            ])
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("b", null, "Email: Marketing@dansavanh.com")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("a", {
                              href: "https://www.instagram.com/dansavanhnamngumresort/",
                              target: "_blank"
                            }, [
                              createVNode("b", null, "Follow us here on Instagram!")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_row, {
              justify: "center",
              gutter: 20
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, {
                    sm: 24,
                    md: 12,
                    lg: 8
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="icon_block" data-v-3dba7139${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_CarOutlined, { class: "icon" }, null, _parent4, _scopeId3));
                        _push4(`<h4 style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("shuttleBus"))}</h4><img class="img"${ssrRenderAttr("src", _imports_1)} data-v-3dba7139${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "icon_block" }, [
                            createVNode(_component_CarOutlined, { class: "icon" }),
                            createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("shuttleBus")), 1),
                            createVNode("img", {
                              class: "img",
                              src: _imports_1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    sm: 24,
                    md: 12,
                    lg: 8
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="icon_block" data-v-3dba7139${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_PhoneOutlined, { class: "icon" }, null, _parent4, _scopeId3));
                        _push4(`<h4 style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("tel"))}</h4><p style="${ssrRenderStyle({ "font-weight": "600 !important", "font-size": "16px" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("telInfo"))}<br data-v-3dba7139${_scopeId3}><br data-v-3dba7139${_scopeId3}><span class="nmr" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("tel1"))}:</span><span class="nmr2" data-v-3dba7139${_scopeId3}>+856 21 217 595</span><br data-v-3dba7139${_scopeId3}><span class="nmr" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("tel2"))}:</span><span class="nmr2" data-v-3dba7139${_scopeId3}>+856 20 5827 5555</span><br data-v-3dba7139${_scopeId3}><span class="nmr" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("tel3"))}:</span><span class="nmr2" data-v-3dba7139${_scopeId3}>+6684-604-0827</span></p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "icon_block" }, [
                            createVNode(_component_PhoneOutlined, { class: "icon" }),
                            createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("tel")), 1),
                            createVNode("p", { style: { "font-weight": "600 !important", "font-size": "16px" } }, [
                              createTextVNode(toDisplayString(_ctx.$t("telInfo")), 1),
                              createVNode("br"),
                              createVNode("br"),
                              createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel1")) + ":", 1),
                              createVNode("span", { class: "nmr2" }, "+856 21 217 595"),
                              createVNode("br"),
                              createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel2")) + ":", 1),
                              createVNode("span", { class: "nmr2" }, "+856 20 5827 5555"),
                              createVNode("br"),
                              createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel3")) + ":", 1),
                              createVNode("span", { class: "nmr2" }, "+6684-604-0827")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, {
                    sm: 24,
                    md: 12,
                    lg: 8
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="icon_block" data-v-3dba7139${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_RedEnvelopeOutlined, { class: "icon" }, null, _parent4, _scopeId3));
                        _push4(`<h4 style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("email"))}</h4><p style="${ssrRenderStyle({ "font-weight": "600 !important" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("emailInfo"))}<br data-v-3dba7139${_scopeId3}><br data-v-3dba7139${_scopeId3}> info@dansavanh.net </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "icon_block" }, [
                            createVNode(_component_RedEnvelopeOutlined, { class: "icon" }),
                            createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("email")), 1),
                            createVNode("p", { style: { "font-weight": "600 !important" } }, [
                              createTextVNode(toDisplayString(_ctx.$t("emailInfo")), 1),
                              createVNode("br"),
                              createVNode("br"),
                              createTextVNode(" info@dansavanh.net ")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_CarOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("shuttleBus")), 1),
                          createVNode("img", {
                            class: "img",
                            src: _imports_1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_PhoneOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("tel")), 1),
                          createVNode("p", { style: { "font-weight": "600 !important", "font-size": "16px" } }, [
                            createTextVNode(toDisplayString(_ctx.$t("telInfo")), 1),
                            createVNode("br"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel1")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+856 21 217 595"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel2")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+856 20 5827 5555"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel3")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+6684-604-0827")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_RedEnvelopeOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("email")), 1),
                          createVNode("p", { style: { "font-weight": "600 !important" } }, [
                            createTextVNode(toDisplayString(_ctx.$t("emailInfo")), 1),
                            createVNode("br"),
                            createVNode("br"),
                            createTextVNode(" info@dansavanh.net ")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_a_row, {
                justify: "end",
                style: { "margin-top": "50px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_col, { span: 24 }, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "margin": "2rem 0 2rem" } }, [
                        createVNode("span", {
                          style: { "cursor": "pointer" },
                          onClick: ($event) => _ctx.$router.push(unref(localePath)("/"))
                        }, "HOME", 8, ["onClick"]),
                        createVNode("span", { style: { "margin": "0 10px 0 10px", "color": "#A9A9A9" } }, "/"),
                        createVNode("span", { style: { "color": "#A9A9A9" } }, "CONTACT")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        href: "https://www.facebook.com/casino.dansavanh",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: ""
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { style: { minHeight: "280px" } }, [
                createVNode(_component_a_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      span: 24,
                      class: "map-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("h3", null, toDisplayString(_ctx.$t("clickOnMarker")), 1),
                        createVNode(_sfc_main$1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      lg: 24,
                      class: "contact-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-box" }, [
                          createVNode("h3", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("dLocation")), 1),
                          createVNode("h4", { style: { "margin-bottom": "15px" } }, toDisplayString(_ctx.$t("gettingHere")), 1),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Wattay Airport \u2013 Look out for Dansavanh Meet & Greet counter at the arrival hall. "),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Dansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" A private limousine can be arranged via VIP hotline"),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createTextVNode(" Please "),
                            createVNode("a", {
                              href: "https://wa.me/8562052241111",
                              target: "_blank"
                            }, [
                              createVNode("b", null, "click here")
                            ]),
                            createTextVNode(" to contact us on WhatsApp:\xA0"),
                            createVNode("span", { style: { "font-family": "Calibri, sans-serif", "font-size": "11pt" } }, [
                              createVNode("a", {
                                href: "https://wa.me/8562052241111",
                                target: "_blank"
                              }, [
                                createVNode("b", null, "+8562052241111")
                              ])
                            ]),
                            createVNode("br")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("span", { lang: "EN" }, [
                              createTextVNode("\xA0You may also contact us on\xA0"),
                              createVNode("b", null, [
                                createVNode("a", {
                                  href: "weixin://dl/chat?+85602058276666",
                                  target: "_blank"
                                }, "+8560205827"),
                                createTextVNode("5555")
                              ])
                            ])
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("b", null, "Email: Marketing@dansavanh.com")
                          ]),
                          createVNode("p", { style: { "text-align": "center" } }, [
                            createVNode("a", {
                              href: "https://www.instagram.com/dansavanhnamngumresort/",
                              target: "_blank"
                            }, [
                              createVNode("b", null, "Follow us here on Instagram!")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_row, {
                  justify: "center",
                  gutter: 20
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_CarOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("shuttleBus")), 1),
                          createVNode("img", {
                            class: "img",
                            src: _imports_1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_PhoneOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("tel")), 1),
                          createVNode("p", { style: { "font-weight": "600 !important", "font-size": "16px" } }, [
                            createTextVNode(toDisplayString(_ctx.$t("telInfo")), 1),
                            createVNode("br"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel1")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+856 21 217 595"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel2")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+856 20 5827 5555"),
                            createVNode("br"),
                            createVNode("span", { class: "nmr" }, toDisplayString(_ctx.$t("tel3")) + ":", 1),
                            createVNode("span", { class: "nmr2" }, "+6684-604-0827")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, {
                      sm: 24,
                      md: 12,
                      lg: 8
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "icon_block" }, [
                          createVNode(_component_RedEnvelopeOutlined, { class: "icon" }),
                          createVNode("h4", { style: { "font-weight": "700" } }, toDisplayString(_ctx.$t("email")), 1),
                          createVNode("p", { style: { "font-weight": "600 !important" } }, [
                            createTextVNode(toDisplayString(_ctx.$t("emailInfo")), 1),
                            createVNode("br"),
                            createVNode("br"),
                            createTextVNode(" info@dansavanh.net ")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_row, {
        justify: "center",
        style: { "background": "white", "padding": "100px 20px 100px 20px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center" style="${ssrRenderStyle({ "max-width": "750px", "margin": "auto" })}" data-v-3dba7139${_scopeId2}><h1 class="text-bold" style="${ssrRenderStyle({ "font-size": "40px" })}" data-v-3dba7139${_scopeId2}>${ssrInterpolate(_ctx.$t("contactForm"))}</h1><p style="${ssrRenderStyle({ "font-size": "20px" })}" class="text-thin" data-v-3dba7139${_scopeId2}>${ssrInterpolate(_ctx.$t("contactFormCaption"))}</p><img style="${ssrRenderStyle({ "width": "200px", "margin": "30px 0 30px" })}"${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-3dba7139${_scopeId2}></div><form data-v-3dba7139${_scopeId2}><input required${ssrRenderAttr("value", formState.user.name)} type="text" class="input"${ssrRenderAttr("placeholder", _ctx.$t("formName"))} data-v-3dba7139${_scopeId2}><input required${ssrRenderAttr("value", formState.user.phone)} type="text" class="input"${ssrRenderAttr("placeholder", _ctx.$t("formPhone"))} data-v-3dba7139${_scopeId2}><input required${ssrRenderAttr("value", formState.user.email)} type="email" class="input"${ssrRenderAttr("placeholder", _ctx.$t("formEmail"))} data-v-3dba7139${_scopeId2}><textarea required type="text" class="input" rows="6"${ssrRenderAttr("placeholder", _ctx.$t("formMessage"))} data-v-3dba7139${_scopeId2}>${ssrInterpolate(formState.user.message)}</textarea><div class="text-center" data-v-3dba7139${_scopeId2}><button class="btn btn-2 hover-slide-up" type="submit" data-v-3dba7139${_scopeId2}><span data-v-3dba7139${_scopeId2}>${ssrInterpolate(_ctx.$t("formSubmit"))}</span></button></div></form>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "text-center",
                      style: { "max-width": "750px", "margin": "auto" }
                    }, [
                      createVNode("h1", {
                        class: "text-bold",
                        style: { "font-size": "40px" }
                      }, toDisplayString(_ctx.$t("contactForm")), 1),
                      createVNode("p", {
                        style: { "font-size": "20px" },
                        class: "text-thin"
                      }, toDisplayString(_ctx.$t("contactFormCaption")), 1),
                      createVNode("img", {
                        style: { "width": "200px", "margin": "30px 0 30px" },
                        src: _imports_0$2,
                        alt: ""
                      })
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      withDirectives(createVNode("input", {
                        required: "",
                        "onUpdate:modelValue": ($event) => formState.user.name = $event,
                        type: "text",
                        class: "input",
                        placeholder: _ctx.$t("formName")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, formState.user.name]
                      ]),
                      withDirectives(createVNode("input", {
                        required: "",
                        "onUpdate:modelValue": ($event) => formState.user.phone = $event,
                        type: "text",
                        class: "input",
                        placeholder: _ctx.$t("formPhone")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, formState.user.phone]
                      ]),
                      withDirectives(createVNode("input", {
                        required: "",
                        "onUpdate:modelValue": ($event) => formState.user.email = $event,
                        type: "email",
                        class: "input",
                        placeholder: _ctx.$t("formEmail")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, formState.user.email]
                      ]),
                      withDirectives(createVNode("textarea", {
                        required: "",
                        "onUpdate:modelValue": ($event) => formState.user.message = $event,
                        type: "text",
                        class: "input",
                        rows: "6",
                        placeholder: _ctx.$t("formMessage")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, formState.user.message]
                      ]),
                      createVNode("div", { class: "text-center" }, [
                        createVNode("button", {
                          class: "btn btn-2 hover-slide-up",
                          type: "submit"
                        }, [
                          createVNode("span", null, toDisplayString(_ctx.$t("formSubmit")), 1)
                        ])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "text-center",
                    style: { "max-width": "750px", "margin": "auto" }
                  }, [
                    createVNode("h1", {
                      class: "text-bold",
                      style: { "font-size": "40px" }
                    }, toDisplayString(_ctx.$t("contactForm")), 1),
                    createVNode("p", {
                      style: { "font-size": "20px" },
                      class: "text-thin"
                    }, toDisplayString(_ctx.$t("contactFormCaption")), 1),
                    createVNode("img", {
                      style: { "width": "200px", "margin": "30px 0 30px" },
                      src: _imports_0$2,
                      alt: ""
                    })
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    withDirectives(createVNode("input", {
                      required: "",
                      "onUpdate:modelValue": ($event) => formState.user.name = $event,
                      type: "text",
                      class: "input",
                      placeholder: _ctx.$t("formName")
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, formState.user.name]
                    ]),
                    withDirectives(createVNode("input", {
                      required: "",
                      "onUpdate:modelValue": ($event) => formState.user.phone = $event,
                      type: "text",
                      class: "input",
                      placeholder: _ctx.$t("formPhone")
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, formState.user.phone]
                    ]),
                    withDirectives(createVNode("input", {
                      required: "",
                      "onUpdate:modelValue": ($event) => formState.user.email = $event,
                      type: "email",
                      class: "input",
                      placeholder: _ctx.$t("formEmail")
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, formState.user.email]
                    ]),
                    withDirectives(createVNode("textarea", {
                      required: "",
                      "onUpdate:modelValue": ($event) => formState.user.message = $event,
                      type: "text",
                      class: "input",
                      rows: "6",
                      placeholder: _ctx.$t("formMessage")
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, formState.user.message]
                    ]),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("button", {
                        class: "btn btn-2 hover-slide-up",
                        type: "submit"
                      }, [
                        createVNode("span", null, toDisplayString(_ctx.$t("formSubmit")), 1)
                      ])
                    ])
                  ], 32)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_layout_content, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_row, {
              class: "content-container subscription",
              justify: "center",
              style: { "height": "450px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center" data-v-3dba7139${_scopeId3}><h1 class="text-white" style="${ssrRenderStyle({ "font-size": "40px" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("newsLetter"))}</h1><p class="text-white" style="${ssrRenderStyle({ "font-size": "20px" })}" data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("newsLetterCaption"))}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-center" }, [
                            createVNode("h1", {
                              class: "text-white",
                              style: { "font-size": "40px" }
                            }, toDisplayString(_ctx.$t("newsLetter")), 1),
                            createVNode("p", {
                              class: "text-white",
                              style: { "font-size": "20px" }
                            }, toDisplayString(_ctx.$t("newsLetterCaption")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<form class="subscrip-form" style="${ssrRenderStyle({ "width": "100%" })}" data-v-3dba7139${_scopeId3}><div class="input-container" style="${ssrRenderStyle({ "max-width": "600px", "margin": "auto" })}" data-v-3dba7139${_scopeId3}><input required${ssrRenderAttr("value", formState.subscriber.email)} type="email" class="input"${ssrRenderAttr("placeholder", _ctx.$t("newsLetterEmail"))} data-v-3dba7139${_scopeId3}><button class="btn btn-2 hover-slide-up mail-btn" style="${ssrRenderStyle({ "background": "#6fb586", "height": "55px" })}" type="submit" data-v-3dba7139${_scopeId3}><span data-v-3dba7139${_scopeId3}>${ssrInterpolate(_ctx.$t("newsLetterSubmit"))}</span></button></div></form>`);
                      } else {
                        return [
                          createVNode("form", {
                            class: "subscrip-form",
                            style: { "width": "100%" },
                            onSubmit: withModifiers(submit, ["prevent"])
                          }, [
                            createVNode("div", {
                              class: "input-container",
                              style: { "max-width": "600px", "margin": "auto" }
                            }, [
                              withDirectives(createVNode("input", {
                                required: "",
                                "onUpdate:modelValue": ($event) => formState.subscriber.email = $event,
                                type: "email",
                                class: "input",
                                placeholder: _ctx.$t("newsLetterEmail")
                              }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                                [vModelText, formState.subscriber.email]
                              ]),
                              createVNode("button", {
                                class: "btn btn-2 hover-slide-up mail-btn",
                                style: { "background": "#6fb586", "height": "55px" },
                                type: "submit"
                              }, [
                                createVNode("span", null, toDisplayString(_ctx.$t("newsLetterSubmit")), 1)
                              ])
                            ])
                          ], 32)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("h1", {
                            class: "text-white",
                            style: { "font-size": "40px" }
                          }, toDisplayString(_ctx.$t("newsLetter")), 1),
                          createVNode("p", {
                            class: "text-white",
                            style: { "font-size": "20px" }
                          }, toDisplayString(_ctx.$t("newsLetterCaption")), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode("form", {
                          class: "subscrip-form",
                          style: { "width": "100%" },
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode("div", {
                            class: "input-container",
                            style: { "max-width": "600px", "margin": "auto" }
                          }, [
                            withDirectives(createVNode("input", {
                              required: "",
                              "onUpdate:modelValue": ($event) => formState.subscriber.email = $event,
                              type: "email",
                              class: "input",
                              placeholder: _ctx.$t("newsLetterEmail")
                            }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                              [vModelText, formState.subscriber.email]
                            ]),
                            createVNode("button", {
                              class: "btn btn-2 hover-slide-up mail-btn",
                              style: { "background": "#6fb586", "height": "55px" },
                              type: "submit"
                            }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("newsLetterSubmit")), 1)
                            ])
                          ])
                        ], 32)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_row, {
                class: "content-container subscription",
                justify: "center",
                style: { "height": "450px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_col, { span: 24 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("h1", {
                          class: "text-white",
                          style: { "font-size": "40px" }
                        }, toDisplayString(_ctx.$t("newsLetter")), 1),
                        createVNode("p", {
                          class: "text-white",
                          style: { "font-size": "20px" }
                        }, toDisplayString(_ctx.$t("newsLetterCaption")), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_col, { span: 24 }, {
                    default: withCtx(() => [
                      createVNode("form", {
                        class: "subscrip-form",
                        style: { "width": "100%" },
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", {
                          class: "input-container",
                          style: { "max-width": "600px", "margin": "auto" }
                        }, [
                          withDirectives(createVNode("input", {
                            required: "",
                            "onUpdate:modelValue": ($event) => formState.subscriber.email = $event,
                            type: "email",
                            class: "input",
                            placeholder: _ctx.$t("newsLetterEmail")
                          }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                            [vModelText, formState.subscriber.email]
                          ]),
                          createVNode("button", {
                            class: "btn btn-2 hover-slide-up mail-btn",
                            style: { "background": "#6fb586", "height": "55px" },
                            type: "submit"
                          }, [
                            createVNode("span", null, toDisplayString(_ctx.$t("newsLetterSubmit")), 1)
                          ])
                        ])
                      ], 32)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3dba7139"]]);

export { index as default };
//# sourceMappingURL=index-Ffx25lUn.mjs.map
