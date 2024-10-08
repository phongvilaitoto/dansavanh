import { effectScope, shallowReactive, reactive, getCurrentScope, hasInjectionContext, getCurrentInstance, inject, toRef, version as version$1, unref, ref, watchEffect, watch, h, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw, markRaw, nextTick, computed, onScopeDispose, toRefs, onServerPrefetch, toValue, defineAsyncComponent, defineComponent, Fragment, createVNode, Text, isVNode as isVNode$1, Comment, provide, triggerRef, Teleport, TransitionGroup, render, mergeProps, withCtx, renderSlot, useSSRContext, Suspense, Transition, withAsyncContext, onErrorCaptured, resolveDynamicComponent, createApp } from "vue";
import { $fetch } from "ofetch";
import { baseURL } from "#internal/nuxt/paths";
import { createHooks } from "hookable";
import { getContext } from "unctx";
import { sanitizeStatusCode, createError as createError$1, getRequestHeaders, getRequestHeader, setCookie, getCookie, deleteCookie } from "h3";
import { getActiveHead, CapoPlugin } from "unhead";
import { defineHeadPlugin, composableNames } from "@unhead/shared";
import { START_LOCATION, createMemoryHistory, createRouter as createRouter$1, RouterView } from "vue-router";
import { toRouteMatcher, createRouter } from "radix3";
import { defu } from "defu";
import { setupDevtoolsPlugin } from "@vue/devtools-api";
import destr from "destr";
import { klona } from "klona";
import { parse as parse$1 } from "cookie-es";
import { hash, isEqual as isEqual$1 } from "ohash";
import { GoogleMap, Marker } from "vue3-google-map";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
import _extends from "@babel/runtime/helpers/esm/extends";
import hash$1 from "@emotion/hash";
import unitless from "@emotion/unitless";
import { serialize as serialize$1, compile as compile$1, stringify } from "stylis";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { generate as generate$1 } from "@ant-design/colors";
import { TinyColor } from "@ctrl/tinycolor";
import LoadingOutlined from "@ant-design/icons-vue/es/icons/LoadingOutlined.js";
import ExclamationCircleFilled from "@ant-design/icons-vue/es/icons/ExclamationCircleFilled.js";
import CloseCircleFilled from "@ant-design/icons-vue/es/icons/CloseCircleFilled.js";
import CheckCircleFilled from "@ant-design/icons-vue/es/icons/CheckCircleFilled.js";
import InfoCircleFilled from "@ant-design/icons-vue/es/icons/InfoCircleFilled.js";
import { createTypes } from "vue-types";
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined.js";
import CheckCircleOutlined from "@ant-design/icons-vue/es/icons/CheckCircleOutlined.js";
import InfoCircleOutlined from "@ant-design/icons-vue/es/icons/InfoCircleOutlined.js";
import CloseCircleOutlined from "@ant-design/icons-vue/es/icons/CloseCircleOutlined.js";
import ExclamationCircleOutlined from "@ant-design/icons-vue/es/icons/ExclamationCircleOutlined.js";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const fetchDefaults = {};
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.13.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter$1(nuxtApp, $name, value);
    defineGetter$1(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter$1(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter$1(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key2 in provide2) {
        nuxtApp.provide(key2, provide2[key2]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter$1(obj, key2, val) {
  Object.defineProperty(obj, key2, { get: () => val });
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key2 = decodeQueryKey(s[1]);
    if (key2 === "__proto__" || key2 === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key2] === void 0) {
      object[key2] = value;
    } else if (Array.isArray(object[key2])) {
      object[key2].push(value);
    } else {
      object[key2] = [object[key2], value];
    }
  }
  return object;
}
function encodeQueryItem(key2, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key2);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key2)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key2)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function isEqual(a, b, options = {}) {
  if (!options.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!options.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!options.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}
const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash: hash2 } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash: hash2,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash2 = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash: hash2
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash2 = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash2;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  const global2 = options.global || typeof name !== "string";
  const mw = middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name);
    return;
  }
  if (global2) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name] = mw;
  }
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version$1[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && process.env.NODE_ENV !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key2, opts = {}) {
      if (!contexts[key2]) {
        contexts[key2] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key2];
      return contexts[key2];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis$1[globalKey] || (_globalThis$1[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const _routes = [
  {
    name: "casino___en",
    path: "/casino",
    component: () => import("./_nuxt/index-mSsFyY8C.js")
  },
  {
    name: "casino___th",
    path: "/th/casino",
    component: () => import("./_nuxt/index-mSsFyY8C.js")
  },
  {
    name: "casino___cn",
    path: "/cn/casino",
    component: () => import("./_nuxt/index-mSsFyY8C.js")
  },
  {
    name: "contact___en",
    path: "/contact",
    component: () => import("./_nuxt/index-Xv0qjNH_.js")
  },
  {
    name: "contact___th",
    path: "/th/contact",
    component: () => import("./_nuxt/index-Xv0qjNH_.js")
  },
  {
    name: "contact___cn",
    path: "/cn/contact",
    component: () => import("./_nuxt/index-Xv0qjNH_.js")
  },
  {
    name: "events-id___en",
    path: "/events/:id()",
    component: () => import("./_nuxt/_id_-B382xrRu.js")
  },
  {
    name: "events-id___th",
    path: "/th/events/:id()",
    component: () => import("./_nuxt/_id_-B382xrRu.js")
  },
  {
    name: "events-id___cn",
    path: "/cn/events/:id()",
    component: () => import("./_nuxt/_id_-B382xrRu.js")
  },
  {
    name: "events___en",
    path: "/events",
    component: () => import("./_nuxt/index-BkVb0Xxv.js")
  },
  {
    name: "events___th",
    path: "/th/events",
    component: () => import("./_nuxt/index-BkVb0Xxv.js")
  },
  {
    name: "events___cn",
    path: "/cn/events",
    component: () => import("./_nuxt/index-BkVb0Xxv.js")
  },
  {
    name: "experience-id___en",
    path: "/experience/:id()",
    component: () => import("./_nuxt/_id_-D57wd4r6.js")
  },
  {
    name: "experience-id___th",
    path: "/th/experience/:id()",
    component: () => import("./_nuxt/_id_-D57wd4r6.js")
  },
  {
    name: "experience-id___cn",
    path: "/cn/experience/:id()",
    component: () => import("./_nuxt/_id_-D57wd4r6.js")
  },
  {
    name: "experience___en",
    path: "/experience",
    component: () => import("./_nuxt/index-dJiY-RIo.js")
  },
  {
    name: "experience___th",
    path: "/th/experience",
    component: () => import("./_nuxt/index-dJiY-RIo.js")
  },
  {
    name: "experience___cn",
    path: "/cn/experience",
    component: () => import("./_nuxt/index-dJiY-RIo.js")
  },
  {
    name: "gallery___en",
    path: "/gallery",
    component: () => import("./_nuxt/gallery-M01pjCwv.js")
  },
  {
    name: "gallery___th",
    path: "/th/gallery",
    component: () => import("./_nuxt/gallery-M01pjCwv.js")
  },
  {
    name: "gallery___cn",
    path: "/cn/gallery",
    component: () => import("./_nuxt/gallery-M01pjCwv.js")
  },
  {
    name: "hotels-id___en",
    path: "/hotels/:id()",
    component: () => import("./_nuxt/_id_-BJPbVIlv.js")
  },
  {
    name: "hotels-id___th",
    path: "/th/hotels/:id()",
    component: () => import("./_nuxt/_id_-BJPbVIlv.js")
  },
  {
    name: "hotels-id___cn",
    path: "/cn/hotels/:id()",
    component: () => import("./_nuxt/_id_-BJPbVIlv.js")
  },
  {
    name: "hotels-golf___en",
    path: "/hotels/golf",
    component: () => import("./_nuxt/golf-BKMZ_sfp.js")
  },
  {
    name: "hotels-golf___th",
    path: "/th/hotels/golf",
    component: () => import("./_nuxt/golf-BKMZ_sfp.js")
  },
  {
    name: "hotels-golf___cn",
    path: "/cn/hotels/golf",
    component: () => import("./_nuxt/golf-BKMZ_sfp.js")
  },
  {
    name: "hotels___en",
    path: "/hotels",
    component: () => import("./_nuxt/index-Bwnbx7yT.js")
  },
  {
    name: "hotels___th",
    path: "/th/hotels",
    component: () => import("./_nuxt/index-Bwnbx7yT.js")
  },
  {
    name: "hotels___cn",
    path: "/cn/hotels",
    component: () => import("./_nuxt/index-Bwnbx7yT.js")
  },
  {
    name: "hotels-numngum___en",
    path: "/hotels/numngum",
    component: () => import("./_nuxt/numngum-BM5CDXWb.js")
  },
  {
    name: "hotels-numngum___th",
    path: "/th/hotels/numngum",
    component: () => import("./_nuxt/numngum-BM5CDXWb.js")
  },
  {
    name: "hotels-numngum___cn",
    path: "/cn/hotels/numngum",
    component: () => import("./_nuxt/numngum-BM5CDXWb.js")
  },
  {
    name: "hotels-vientaine-hotel___en",
    path: "/hotels/vientaine-hotel",
    component: () => import("./_nuxt/vientaine-hotel-CwhIxwYU.js")
  },
  {
    name: "hotels-vientaine-hotel___th",
    path: "/th/hotels/vientaine-hotel",
    component: () => import("./_nuxt/vientaine-hotel-CwhIxwYU.js")
  },
  {
    name: "hotels-vientaine-hotel___cn",
    path: "/cn/hotels/vientaine-hotel",
    component: () => import("./_nuxt/vientaine-hotel-CwhIxwYU.js")
  },
  {
    name: "index-test___en",
    path: "/index-test",
    component: () => import("./_nuxt/index-test-B96P0U09.js")
  },
  {
    name: "index-test___th",
    path: "/th/index-test",
    component: () => import("./_nuxt/index-test-B96P0U09.js")
  },
  {
    name: "index-test___cn",
    path: "/cn/index-test",
    component: () => import("./_nuxt/index-test-B96P0U09.js")
  },
  {
    name: "index___en",
    path: "/",
    component: () => import("./_nuxt/index-Dn4_XKXa.js")
  },
  {
    name: "index___th",
    path: "/th",
    component: () => import("./_nuxt/index-Dn4_XKXa.js")
  },
  {
    name: "index___cn",
    path: "/cn",
    component: () => import("./_nuxt/index-Dn4_XKXa.js")
  },
  {
    name: "invesment-project___en",
    path: "/invesment-project",
    component: () => import("./_nuxt/invesment-project-BfGRCsDM.js")
  },
  {
    name: "invesment-project___th",
    path: "/th/invesment-project",
    component: () => import("./_nuxt/invesment-project-BfGRCsDM.js")
  },
  {
    name: "invesment-project___cn",
    path: "/cn/invesment-project",
    component: () => import("./_nuxt/invesment-project-BfGRCsDM.js")
  },
  {
    name: "investment-project___en",
    path: "/investment-project",
    component: () => import("./_nuxt/index-CG4bt0qL.js")
  },
  {
    name: "investment-project___th",
    path: "/th/investment-project",
    component: () => import("./_nuxt/index-CG4bt0qL.js")
  },
  {
    name: "investment-project___cn",
    path: "/cn/investment-project",
    component: () => import("./_nuxt/index-CG4bt0qL.js")
  },
  {
    name: "more-career-id___en",
    path: "/more/career/:id()",
    component: () => import("./_nuxt/_id_-DOKZivAX.js")
  },
  {
    name: "more-career-id___th",
    path: "/th/more/career/:id()",
    component: () => import("./_nuxt/_id_-DOKZivAX.js")
  },
  {
    name: "more-career-id___cn",
    path: "/cn/more/career/:id()",
    component: () => import("./_nuxt/_id_-DOKZivAX.js")
  },
  {
    name: "more-career___en",
    path: "/more/career",
    component: () => import("./_nuxt/index-Bs5SNcjS.js")
  },
  {
    name: "more-career___th",
    path: "/th/more/career",
    component: () => import("./_nuxt/index-Bs5SNcjS.js")
  },
  {
    name: "more-career___cn",
    path: "/cn/more/career",
    component: () => import("./_nuxt/index-Bs5SNcjS.js")
  },
  {
    name: "more-news___en",
    path: "/more/news",
    component: () => import("./_nuxt/news-98awIIW-.js")
  },
  {
    name: "more-news___th",
    path: "/th/more/news",
    component: () => import("./_nuxt/news-98awIIW-.js")
  },
  {
    name: "more-news___cn",
    path: "/cn/more/news",
    component: () => import("./_nuxt/news-98awIIW-.js")
  },
  {
    name: "more-testimoniels___en",
    path: "/more/testimoniels",
    component: () => import("./_nuxt/testimoniels-Cg20_ErV.js")
  },
  {
    name: "more-testimoniels___th",
    path: "/th/more/testimoniels",
    component: () => import("./_nuxt/testimoniels-Cg20_ErV.js")
  },
  {
    name: "more-testimoniels___cn",
    path: "/cn/more/testimoniels",
    component: () => import("./_nuxt/testimoniels-Cg20_ErV.js")
  },
  {
    name: "near-by___en",
    path: "/near-by",
    component: () => import("./_nuxt/index-BxJIDk3p.js")
  },
  {
    name: "near-by___th",
    path: "/th/near-by",
    component: () => import("./_nuxt/index-BxJIDk3p.js")
  },
  {
    name: "near-by___cn",
    path: "/cn/near-by",
    component: () => import("./_nuxt/index-BxJIDk3p.js")
  },
  {
    name: "new___en",
    path: "/new",
    component: () => import("./_nuxt/index-D_eRBPDy.js")
  },
  {
    name: "new___th",
    path: "/th/new",
    component: () => import("./_nuxt/index-D_eRBPDy.js")
  },
  {
    name: "new___cn",
    path: "/cn/new",
    component: () => import("./_nuxt/index-D_eRBPDy.js")
  },
  {
    name: "news-id___en",
    path: "/news/:id()",
    component: () => import("./_nuxt/_id_-DUYeKpYR.js")
  },
  {
    name: "news-id___th",
    path: "/th/news/:id()",
    component: () => import("./_nuxt/_id_-DUYeKpYR.js")
  },
  {
    name: "news-id___cn",
    path: "/cn/news/:id()",
    component: () => import("./_nuxt/_id_-DUYeKpYR.js")
  },
  {
    name: "news___en",
    path: "/news",
    component: () => import("./_nuxt/index-Yd9LGQ4q.js")
  },
  {
    name: "news___th",
    path: "/th/news",
    component: () => import("./_nuxt/index-Yd9LGQ4q.js")
  },
  {
    name: "news___cn",
    path: "/cn/news",
    component: () => import("./_nuxt/index-Yd9LGQ4q.js")
  },
  {
    name: "offer-id___en",
    path: "/offer/:id()",
    component: () => import("./_nuxt/_id_-CquoMdC6.js")
  },
  {
    name: "offer-id___th",
    path: "/th/offer/:id()",
    component: () => import("./_nuxt/_id_-CquoMdC6.js")
  },
  {
    name: "offer-id___cn",
    path: "/cn/offer/:id()",
    component: () => import("./_nuxt/_id_-CquoMdC6.js")
  },
  {
    name: "offer___en",
    path: "/offer",
    component: () => import("./_nuxt/index-CJsVQIce.js")
  },
  {
    name: "offer___th",
    path: "/th/offer",
    component: () => import("./_nuxt/index-CJsVQIce.js")
  },
  {
    name: "offer___cn",
    path: "/cn/offer",
    component: () => import("./_nuxt/index-CJsVQIce.js")
  },
  {
    name: "tour-package-id___en",
    path: "/tour-package/:id()",
    component: () => import("./_nuxt/_id_-BwfwyB2p.js")
  },
  {
    name: "tour-package-id___th",
    path: "/th/tour-package/:id()",
    component: () => import("./_nuxt/_id_-BwfwyB2p.js")
  },
  {
    name: "tour-package-id___cn",
    path: "/cn/tour-package/:id()",
    component: () => import("./_nuxt/_id_-BwfwyB2p.js")
  },
  {
    name: "tour-package___en",
    path: "/tour-package",
    component: () => import("./_nuxt/index-BT8WshwL.js")
  },
  {
    name: "tour-package___th",
    path: "/th/tour-package",
    component: () => import("./_nuxt/index-BT8WshwL.js")
  },
  {
    name: "tour-package___cn",
    path: "/cn/tour-package",
    component: () => import("./_nuxt/index-BT8WshwL.js")
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve2) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve22) => setTimeout(resolve22, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve2(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter$1({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key2 in _route.value) {
      Object.defineProperty(route, key2, {
        get: () => _route.value[key2],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.matched.length === 0) {
          await nuxtApp.runWithContext(() => showError(createError$1({
            statusCode: 404,
            fatal: false,
            statusMessage: `Page not found: ${to.fullPath}`,
            data: {
              path: to.fullPath
            }
          })));
        } else if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key2 in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key2]) {
                middlewareEntries.add(key2);
              } else {
                middlewareEntries.delete(key2);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
function set(target, key2, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key2);
    target.splice(key2, 1, val);
    return val;
  }
  target[key2] = val;
  return val;
}
function del(target, key2) {
  if (Array.isArray(target)) {
    target.splice(key2, 1);
    return;
  }
  delete target[key2];
}
const isVue2 = false;
/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject$1(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const IS_CLIENT = false;
const saveAs = () => {
};
function toastMessage(message, type) {
  const piniaMessage = "🍍 " + message;
  if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
    __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
  } else if (type === "error") {
    console.error(piniaMessage);
  } else if (type === "warn") {
    console.warn(piniaMessage);
  } else {
    console.log(piniaMessage);
  }
}
function isPinia(o) {
  return "_a" in o && "install" in o;
}
function checkClipboardAccess() {
  if (!("clipboard" in void 0)) {
    toastMessage(`Your browser doesn't support the Clipboard API`, "error");
    return true;
  }
}
function checkNotFocusedError(error) {
  if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
    toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
    return true;
  }
  return false;
}
async function actionGlobalCopyState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    await (void 0).clipboard.writeText(JSON.stringify(pinia.state.value));
    toastMessage("Global state copied to clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalPasteState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    loadStoresState(pinia, JSON.parse(await (void 0).clipboard.readText()));
    toastMessage("Global state pasted from clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalSaveState(pinia) {
  try {
    saveAs(new Blob([JSON.stringify(pinia.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (error) {
    toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
let fileInput;
function getFileOpener() {
  if (!fileInput) {
    fileInput = (void 0).createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
  }
  function openFile() {
    return new Promise((resolve2, reject) => {
      fileInput.onchange = async () => {
        const files = fileInput.files;
        if (!files)
          return resolve2(null);
        const file = files.item(0);
        if (!file)
          return resolve2(null);
        return resolve2({ text: await file.text(), file });
      };
      fileInput.oncancel = () => resolve2(null);
      fileInput.onerror = reject;
      fileInput.click();
    });
  }
  return openFile;
}
async function actionGlobalOpenStateFile(pinia) {
  try {
    const open2 = getFileOpener();
    const result = await open2();
    if (!result)
      return;
    const { text, file } = result;
    loadStoresState(pinia, JSON.parse(text));
    toastMessage(`Global state imported from "${file.name}".`);
  } catch (error) {
    toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
function loadStoresState(pinia, state) {
  for (const key2 in state) {
    const storeState = pinia.state.value[key2];
    if (storeState) {
      Object.assign(storeState, state[key2]);
    } else {
      pinia.state.value[key2] = state[key2];
    }
  }
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
const PINIA_ROOT_ID = "_root";
function formatStoreForInspectorTree(store) {
  return isPinia(store) ? {
    id: PINIA_ROOT_ID,
    label: PINIA_ROOT_LABEL
  } : {
    id: store.$id,
    label: store.$id
  };
}
function formatStoreForInspectorState(store) {
  if (isPinia(store)) {
    const storeNames = Array.from(store._s.keys());
    const storeMap = store._s;
    const state2 = {
      state: storeNames.map((storeId) => ({
        editable: true,
        key: storeId,
        value: store.state.value[storeId]
      })),
      getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
        const store2 = storeMap.get(id);
        return {
          editable: false,
          key: id,
          value: store2._getters.reduce((getters, key2) => {
            getters[key2] = store2[key2];
            return getters;
          }, {})
        };
      })
    };
    return state2;
  }
  const state = {
    state: Object.keys(store.$state).map((key2) => ({
      editable: true,
      key: key2,
      value: store.$state[key2]
    }))
  };
  if (store._getters && store._getters.length) {
    state.getters = store._getters.map((getterName) => ({
      editable: false,
      key: getterName,
      value: store[getterName]
    }));
  }
  if (store._customProperties.size) {
    state.customProperties = Array.from(store._customProperties).map((key2) => ({
      editable: true,
      key: key2,
      value: store[key2]
    }));
  }
  return state;
}
function formatEventData(events) {
  if (!events)
    return {};
  if (Array.isArray(events)) {
    return events.reduce((data, event) => {
      data.keys.push(event.key);
      data.operations.push(event.type);
      data.oldValue[event.key] = event.oldValue;
      data.newValue[event.key] = event.newValue;
      return data;
    }, {
      oldValue: {},
      keys: [],
      operations: [],
      newValue: {}
    });
  } else {
    return {
      operation: formatDisplay(events.type),
      key: formatDisplay(events.key),
      oldValue: events.oldValue,
      newValue: events.newValue
    };
  }
}
function formatMutationType(type) {
  switch (type) {
    case MutationType.direct:
      return "mutation";
    case MutationType.patchFunction:
      return "$patch";
    case MutationType.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let isTimelineActive = true;
const componentStateTypes = [];
const MUTATIONS_LAYER_ID = "pinia:mutations";
const INSPECTOR_ID = "pinia";
const { assign: assign$1 } = Object;
const getStoreType = (id) => "🍍 " + id;
function registerPiniaDevtools(app, pinia) {
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app
  }, (api2) => {
    if (typeof api2.now !== "function") {
      toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api2.addTimelineLayer({
      id: MUTATIONS_LAYER_ID,
      label: `Pinia 🍍`,
      color: 15064968
    });
    api2.addInspector({
      id: INSPECTOR_ID,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            actionGlobalCopyState(pinia);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await actionGlobalPasteState(pinia);
            api2.sendInspectorTree(INSPECTOR_ID);
            api2.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            actionGlobalSaveState(pinia);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await actionGlobalOpenStateFile(pinia);
            api2.sendInspectorTree(INSPECTOR_ID);
            api2.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (nodeId) => {
            const store = pinia._s.get(nodeId);
            if (!store) {
              toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
            } else if (typeof store.$reset !== "function") {
              toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
            } else {
              store.$reset();
              toastMessage(`Store "${nodeId}" reset.`);
            }
          }
        }
      ]
    });
    api2.on.inspectComponent((payload, ctx) => {
      const proxy = payload.componentInstance && payload.componentInstance.proxy;
      if (proxy && proxy._pStores) {
        const piniaStores = payload.componentInstance.proxy._pStores;
        Object.values(piniaStores).forEach((store) => {
          payload.instanceData.state.push({
            type: getStoreType(store.$id),
            key: "state",
            editable: true,
            value: store._isOptionsAPI ? {
              _custom: {
                value: toRaw(store.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => store.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(store.$state).reduce((state, key2) => {
                state[key2] = store.$state[key2];
                return state;
              }, {})
            )
          });
          if (store._getters && store._getters.length) {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "getters",
              editable: false,
              value: store._getters.reduce((getters, key2) => {
                try {
                  getters[key2] = store[key2];
                } catch (error) {
                  getters[key2] = error;
                }
                return getters;
              }, {})
            });
          }
        });
      }
    });
    api2.on.getInspectorTree((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        let stores = [pinia];
        stores = stores.concat(Array.from(pinia._s.values()));
        payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
      }
    });
    globalThis.$pinia = pinia;
    api2.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return;
        }
        if (inspectedStore) {
          if (payload.nodeId !== PINIA_ROOT_ID)
            globalThis.$store = toRaw(inspectedStore);
          payload.state = formatStoreForInspectorState(inspectedStore);
        }
      }
    });
    api2.on.editInspectorState((payload, ctx) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return toastMessage(`store "${payload.nodeId}" not found`, "error");
        }
        const { path } = payload;
        if (!isPinia(inspectedStore)) {
          if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
            path.unshift("$state");
          }
        } else {
          path.unshift("state");
        }
        isTimelineActive = false;
        payload.set(inspectedStore, path, payload.state.value);
        isTimelineActive = true;
      }
    });
    api2.on.editComponentState((payload) => {
      if (payload.type.startsWith("🍍")) {
        const storeId = payload.type.replace(/^🍍\s*/, "");
        const store = pinia._s.get(storeId);
        if (!store) {
          return toastMessage(`store "${storeId}" not found`, "error");
        }
        const { path } = payload;
        if (path[0] !== "state") {
          return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
        }
        path[0] = "$state";
        isTimelineActive = false;
        payload.set(store, path, payload.state.value);
        isTimelineActive = true;
      }
    });
  });
}
function addStoreToDevtools(app, store) {
  if (!componentStateTypes.includes(getStoreType(store.$id))) {
    componentStateTypes.push(getStoreType(store.$id));
  }
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: true
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (api2) => {
    const now2 = typeof api2.now === "function" ? api2.now.bind(api2) : Date.now;
    store.$onAction(({ after, onError, name, args }) => {
      const groupId = runningActionId++;
      api2.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now2(),
          title: "🛫 " + name,
          subtitle: "start",
          data: {
            store: formatDisplay(store.$id),
            action: formatDisplay(name),
            args
          },
          groupId
        }
      });
      after((result) => {
        activeAction = void 0;
        api2.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛬 " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args,
              result
            },
            groupId
          }
        });
      });
      onError((error) => {
        activeAction = void 0;
        api2.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            logType: "error",
            title: "💥 " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args,
              error
            },
            groupId
          }
        });
      });
    }, true);
    store._customProperties.forEach((name) => {
      watch(() => unref(store[name]), (newValue, oldValue) => {
        api2.notifyComponentUpdate();
        api2.sendInspectorState(INSPECTOR_ID);
        if (isTimelineActive) {
          api2.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "Change",
              subtitle: name,
              data: {
                newValue,
                oldValue
              },
              groupId: activeAction
            }
          });
        }
      }, { deep: true });
    });
    store.$subscribe(({ events, type }, state) => {
      api2.notifyComponentUpdate();
      api2.sendInspectorState(INSPECTOR_ID);
      if (!isTimelineActive)
        return;
      const eventData = {
        time: now2(),
        title: formatMutationType(type),
        data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
        groupId: activeAction
      };
      if (type === MutationType.patchFunction) {
        eventData.subtitle = "⤵️";
      } else if (type === MutationType.patchObject) {
        eventData.subtitle = "🧩";
      } else if (events && !Array.isArray(events)) {
        eventData.subtitle = events.type;
      }
      if (events) {
        eventData.data["rawEvent(s)"] = {
          _custom: {
            display: "DebuggerEvent",
            type: "object",
            tooltip: "raw DebuggerEvent[]",
            value: events
          }
        };
      }
      api2.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: eventData
      });
    }, { detached: true, flush: "sync" });
    const hotUpdate = store._hotUpdate;
    store._hotUpdate = markRaw((newStore) => {
      hotUpdate(newStore);
      api2.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now2(),
          title: "🔥 " + store.$id,
          subtitle: "HMR update",
          data: {
            store: formatDisplay(store.$id),
            info: formatDisplay(`HMR update`)
          }
        }
      });
      api2.notifyComponentUpdate();
      api2.sendInspectorTree(INSPECTOR_ID);
      api2.sendInspectorState(INSPECTOR_ID);
    });
    const { $dispose } = store;
    store.$dispose = () => {
      $dispose();
      api2.notifyComponentUpdate();
      api2.sendInspectorTree(INSPECTOR_ID);
      api2.sendInspectorState(INSPECTOR_ID);
      api2.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
    };
    api2.notifyComponentUpdate();
    api2.sendInspectorTree(INSPECTOR_ID);
    api2.sendInspectorState(INSPECTOR_ID);
    api2.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
  });
}
let runningActionId = 0;
let activeAction;
function patchActionForGrouping(store, actionNames, wrapWithProxy) {
  const actions = actionNames.reduce((storeActions, actionName) => {
    storeActions[actionName] = toRaw(store)[actionName];
    return storeActions;
  }, {});
  for (const actionName in actions) {
    store[actionName] = function() {
      const _actionId = runningActionId;
      const trackedStore = wrapWithProxy ? new Proxy(store, {
        get(...args) {
          activeAction = _actionId;
          return Reflect.get(...args);
        },
        set(...args) {
          activeAction = _actionId;
          return Reflect.set(...args);
        }
      }) : store;
      activeAction = _actionId;
      const retValue = actions[actionName].apply(trackedStore, arguments);
      activeAction = void 0;
      return retValue;
    };
  }
}
function devtoolsPlugin({ app, store, options }) {
  if (store.$id.startsWith("__hot:")) {
    return;
  }
  store._isOptionsAPI = !!options.state;
  if (!store._p._testing) {
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
  }
  addStoreToDevtools(
    app,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    store
  );
}
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        if ((process.env.NODE_ENV !== "production" || false) && !(process.env.NODE_ENV === "test") && IS_CLIENT) {
          registerPiniaDevtools(app, pinia);
        }
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  if ((process.env.NODE_ENV !== "production" || false) && !(process.env.NODE_ENV === "test") && typeof Proxy !== "undefined") {
    pinia.use(devtoolsPlugin);
  }
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key2 in oldState) {
    const subPatch = oldState[key2];
    if (!(key2 in newState)) {
      continue;
    }
    const targetValue = newState[key2];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key2] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key2] = subPatch;
      }
    }
  }
  return newState;
}
const noop$2 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$2) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key2) => target.set(key2, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key2 in patchToApply) {
    if (!patchToApply.hasOwnProperty(key2))
      continue;
    const subPatch = patchToApply[key2];
    const targetValue = target[key2];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key2) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key2] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key2] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$2 } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!(process.env.NODE_ENV !== "production") || !hot)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = process.env.NODE_ENV !== "production" && hot ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      toRefs(ref(state ? state() : {}).value)
    ) : toRefs(pinia.state.value[id]);
    return assign$2(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (process.env.NODE_ENV !== "production" && name in localState) {
        console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign$2({ actions: {} }, options);
  if (process.env.NODE_ENV !== "production" && !pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = { deep: true };
  if (process.env.NODE_ENV !== "production" && !isVue2) {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!(process.env.NODE_ENV !== "production") || !hot)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (process.env.NODE_ENV !== "production") {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$2($state, newState);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    } : noop$2
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$2({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(process.env.NODE_ENV !== "production" || (process.env.NODE_ENV !== "production" || false) && !(process.env.NODE_ENV === "test") && IS_CLIENT ? assign$2(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    partialStore
    // must be added later
    // setupStore
  ) : partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
  for (const key2 in setupStore) {
    const prop = setupStore[key2];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (process.env.NODE_ENV !== "production" && hot) {
        set(hotState.value, key2, toRef(setupStore, key2));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key2];
          } else {
            mergeReactiveObjects(prop, initialState[key2]);
          }
        }
        {
          pinia.state.value[$id][key2] = prop;
        }
      }
      if (process.env.NODE_ENV !== "production") {
        _hmrPayload.state.push(key2);
      }
    } else if (typeof prop === "function") {
      const actionValue = process.env.NODE_ENV !== "production" && hot ? prop : action(prop, key2);
      {
        setupStore[key2] = actionValue;
      }
      if (process.env.NODE_ENV !== "production") {
        _hmrPayload.actions[key2] = prop;
      }
      optionsForPlugin.actions[key2] = prop;
    } else if (process.env.NODE_ENV !== "production") {
      if (isComputed(prop)) {
        _hmrPayload.getters[key2] = isOptionsStore ? (
          // @ts-expect-error
          options.getters[key2]
        ) : prop;
      }
    }
  }
  {
    assign$2(store, setupStore);
    assign$2(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => process.env.NODE_ENV !== "production" && hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (process.env.NODE_ENV !== "production" && hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign$2($state, state);
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject$1(newStateTarget) && isPlainObject$1(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const actionFn = newStore[actionName];
        set(store, actionName, action(actionFn, actionName));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? (
          // special handling of options api
          computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          })
        ) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key2) => {
        if (!(key2 in newStore._hmrPayload.getters)) {
          del(store, key2);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key2) => {
        if (!(key2 in newStore._hmrPayload.actions)) {
          del(store, key2);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  if ((process.env.NODE_ENV !== "production" || false) && !(process.env.NODE_ENV === "test") && IS_CLIENT) {
    const nonEnumerable = {
      writable: true,
      configurable: true,
      // avoid warning on devtools trying to display this property
      enumerable: false
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
      Object.defineProperty(store, p, assign$2({ value: store[p] }, nonEnumerable));
    });
  }
  pinia._p.forEach((extender) => {
    if ((process.env.NODE_ENV !== "production" || false) && !(process.env.NODE_ENV === "test") && IS_CLIENT) {
      const extensions = scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      }));
      Object.keys(extensions || {}).forEach((key2) => store._customProperties.add(key2));
      assign$2(store, extensions);
    } else {
      assign$2(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (process.env.NODE_ENV !== "production" && store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
// @__NO_SIDE_EFFECTS__
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && activePinia && activePinia._testing ? null : pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    if (process.env.NODE_ENV !== "production" && !activePinia) {
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      if (process.env.NODE_ENV !== "production") {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (process.env.NODE_ENV !== "production" && hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign$2({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    if (process.env.NODE_ENV !== "production" && IS_CLIENT) {
      const currentInstance = getCurrentInstance();
      if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache2 = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache2[id] = store;
      }
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    store = toRaw(store);
    const refs = {};
    for (const key2 in store) {
      const value = store[key2];
      if (isRef(value) || isReactive(value)) {
        refs[key2] = // ---
        toRef(store, key2);
      }
    }
    return refs;
  }
}
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key2, _handler, options = {}] = args;
  if (typeof key2 !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !import.meta.prerender || !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key2);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(_handler));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key2, promise);
    return promise;
  };
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key2] : nuxtApp.static.data[key2];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const initialCachedData = options.getCachedData(key2, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key2] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key2] ?? (_b[key2] = asyncDataDefaults.errorValue);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key2] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key2),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key2] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key2]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key2];
      }
      nuxtApp._asyncDataPromises[key2].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key2, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve2, reject) => {
        try {
          resolve2(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key2];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key2] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key2];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key2];
    });
    nuxtApp._asyncDataPromises[key2] = promise;
    return nuxtApp._asyncDataPromises[key2];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key2);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key2]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key2) {
  if (key2 in nuxtApp.payload.data) {
    nuxtApp.payload.data[key2] = void 0;
  }
  if (key2 in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key2] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key2]) {
    nuxtApp._asyncData[key2].data.value = void 0;
    nuxtApp._asyncData[key2].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key2].pending.value = false;
    nuxtApp._asyncData[key2].status.value = "idle";
  }
  if (key2 in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key2]) {
      nuxtApp._asyncDataPromises[key2].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key2] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key2 of keys) {
    newObj[key2] = obj[key2];
  }
  return newObj;
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key2 = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key2);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key2] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestHeaders(include) {
  const event = useRequestEvent();
  const _headers = event ? getRequestHeaders(event) : {};
  if (!include || !event) {
    return _headers;
  }
  const headers = /* @__PURE__ */ Object.create(null);
  for (const _key of include) {
    const key2 = _key.toLowerCase();
    const header = _headers[key2];
    if (header) {
      headers[key2] = header;
    }
  }
  return headers;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key2 = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform: transform2,
    pick: pick2,
    watch: watch2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform: transform2,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key2, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, "Request aborted as another request to the same endpoint was initiated.");
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort("Request aborted due to timeout."), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key2, value] of Object.entries(obj)) {
      unwrapped[toValue(key2)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key2) => key2 === name);
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual$1(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual$1(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse$1(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = pinia.state.value;
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const LazyNuxtFacebookChat = defineAsyncComponent(() => import("./_nuxt/nuxt-facebook-chat-90qig1XJ.js").then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["NuxtFacebookChat", LazyNuxtFacebookChat]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = false;
let mark;
let measure;
if (process.env.NODE_ENV !== "production") ;
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
function format$1(message, ...args) {
  if (args.length === 1 && isObject$1(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : "";
  });
}
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const generateFormatCacheKey = (locale2, key2, source) => friendlyJSONstringify({ l: locale2, k: key2, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function hasOwn$1(obj, key2) {
  return hasOwnProperty$1.call(obj, key2);
}
const isArray$1 = Array.isArray;
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction$1(val.then) && isFunction$1(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => {
  if (!isObject$1(val))
    return false;
  const proto = Object.getPrototypeOf(val);
  return proto === null || proto.constructor === Object;
};
const toDisplayString = (val) => {
  return val == null ? "" : isArray$1(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
  return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
}
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        if (j === i) {
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function incrementer(code2) {
  let current = code2;
  return () => ++current;
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const hasWarned = {};
function warnOnce(msg) {
  if (!hasWarned[msg]) {
    hasWarned[msg] = true;
    warn(msg);
  }
}
function createEmitter() {
  const events = /* @__PURE__ */ new Map();
  const emitter = {
    events,
    on(event, handler) {
      const handlers = events.get(event);
      const added = handlers && handlers.push(handler);
      if (!added) {
        events.set(event, [handler]);
      }
    },
    off(event, handler) {
      const handlers = events.get(event);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map((handler) => handler(payload));
      (events.get("*") || []).slice().map((handler) => handler(event, payload));
    }
  };
  return emitter;
}
const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray$1(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw new Error("Invalid value");
  }
  const stack = [{ src, des }];
  while (stack.length) {
    const { src: src2, des: des2 } = stack.pop();
    Object.keys(src2).forEach((key2) => {
      if (isObject$1(src2[key2]) && !isObject$1(des2[key2])) {
        des2[key2] = Array.isArray(src2[key2]) ? [] : {};
      }
      if (isNotObjectOrIsArray(des2[key2]) || isNotObjectOrIsArray(src2[key2])) {
        des2[key2] = src2[key2];
      } else {
        stack.push({ src: src2[key2], des: des2[key2] });
      }
    });
  }
}
function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;
  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;
  if (protoCheck) {
    return true;
  }
  const _encrypted = req.connection ? req.connection.encrypted : void 0;
  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;
  if (encryptedCheck) {
    return true;
  }
  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }
  return false;
}
const localeCodes = [
  "en",
  "th",
  "cn"
];
const localeLoaders = {
  "en": [{ key: "../lang/en.ts", load: () => import(
    "./_nuxt/en-DSd1M4oY.js"
    /* webpackChunkName: "locale_C_58_C_58_Users_MSII_Desktop_pj_dansavanh_lang_en_ts" */
  ), cache: false }],
  "th": [{ key: "../lang/th.ts", load: () => import(
    "./_nuxt/th-zbECunYE.js"
    /* webpackChunkName: "locale_C_58_C_58_Users_MSII_Desktop_pj_dansavanh_lang_th_ts" */
  ), cache: false }],
  "cn": [{ key: "../lang/cn.ts", load: () => import(
    "./_nuxt/cn-Dx-qLOTS.js"
    /* webpackChunkName: "locale_C_58_C_58_Users_MSII_Desktop_pj_dansavanh_lang_cn_ts" */
  ), cache: false }]
};
const vueI18nConfigs = [
  () => import(
    "./_nuxt/i18n.config-37-lSPQB.js"
    /* webpackChunkName: "i18n_config_bffaebcb" */
  )
];
const normalizedLocales = [
  {
    "code": "en",
    "files": [
      {
        "path": "C:/Users/MSII/Desktop/pj/dansavanh/lang/en.ts",
        "cache": false
      }
    ]
  },
  {
    "code": "th",
    "files": [
      {
        "path": "C:/Users/MSII/Desktop/pj/dansavanh/lang/th.ts",
        "cache": false
      }
    ]
  },
  {
    "code": "cn",
    "files": [
      {
        "path": "C:/Users/MSII/Desktop/pj/dansavanh/lang/cn.ts",
        "cache": false
      }
    ]
  }
];
const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n";
const parallelPlugin = false;
const isSSG = false;
const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n";
const DEFAULT_COOKIE_KEY = "i18n_redirected";
const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp";
function getNormalizedLocales(locales) {
  locales = locales || [];
  const normalized = [];
  for (const locale2 of locales) {
    if (isString$1(locale2)) {
      normalized.push({ code: locale2 });
    } else {
      normalized.push(locale2);
    }
  }
  return normalized;
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && "locale" in target && isRef(target.locale);
}
function isVueI18n(target) {
  return target != null && "__composer" in target;
}
function getI18nTarget(i18n) {
  return isI18nInstance(i18n) ? i18n.global : i18n;
}
function getComposer$3(i18n) {
  const target = getI18nTarget(i18n);
  if (isComposer(target)) return target;
  if (isVueI18n(target)) return target.__composer;
  return target;
}
function getLocale$1(i18n) {
  return unref(getI18nTarget(i18n).locale);
}
function getLocales(i18n) {
  return unref(getI18nTarget(i18n).locales);
}
function getLocaleCodes(i18n) {
  return unref(getI18nTarget(i18n).localeCodes);
}
function setLocale(i18n, locale2) {
  const target = getI18nTarget(i18n);
  if (isRef(target.locale)) {
    target.locale.value = locale2;
  } else {
    target.locale = locale2;
  }
}
function getRouteName(routeName) {
  if (isString$1(routeName)) return routeName;
  if (isSymbol(routeName)) return routeName.toString();
  return "(null)";
}
function getLocaleRouteName(routeName, locale2, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix,
  differentDomains
}) {
  const localizedRoutes = strategy !== "no_prefix" || differentDomains;
  let name = getRouteName(routeName) + (localizedRoutes ? routesNameSeparator + locale2 : "");
  if (locale2 === defaultLocale && strategy === "prefix_and_default") {
    name += routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name;
}
function resolveBaseUrl(baseUrl, context) {
  if (isFunction$1(baseUrl)) {
    return baseUrl(context);
  }
  return baseUrl;
}
function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
const DefaultBrowserLocaleMatcher = matchBrowserLocale;
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
const DefaultBrowerLocaleComparer = compareBrowserLocale;
function findBrowserLocale(locales, browserLocales, { matcher = DefaultBrowserLocaleMatcher, comparer = DefaultBrowerLocaleComparer } = {}) {
  const normalizedLocales2 = [];
  for (const l of locales) {
    const { code: code2 } = l;
    const language = l.language || code2;
    normalizedLocales2.push({ code: code2, language });
  }
  const matchedLocales = matcher(normalizedLocales2, browserLocales);
  if (matchedLocales.length > 1) {
    matchedLocales.sort(comparer);
  }
  return matchedLocales.length ? matchedLocales[0].code : "";
}
function getLocalesRegex(localeCodes2) {
  return new RegExp(`^/(${localeCodes2.join("|")})(?:/|$)`, "i");
}
const cacheMessages = /* @__PURE__ */ new Map();
async function loadVueI18nOptions(vueI18nConfigs2, nuxt) {
  const vueI18nOptions = { messages: {} };
  for (const configFile of vueI18nConfigs2) {
    const { default: resolver } = await configFile();
    const resolved = isFunction$1(resolver) ? await nuxt.runWithContext(async () => await resolver()) : resolver;
    deepCopy(resolved, vueI18nOptions);
  }
  return vueI18nOptions;
}
function makeFallbackLocaleCodes(fallback, locales) {
  let fallbackLocales = [];
  if (isArray$1(fallback)) {
    fallbackLocales = fallback;
  } else if (isObject$1(fallback)) {
    const targets = [...locales, "default"];
    for (const locale2 of targets) {
      if (fallback[locale2]) {
        fallbackLocales = [...fallbackLocales, ...fallback[locale2].filter(Boolean)];
      }
    }
  } else if (isString$1(fallback) && locales.every((locale2) => locale2 !== fallback)) {
    fallbackLocales.push(fallback);
  }
  return fallbackLocales;
}
async function loadInitialMessages(messages, localeLoaders2, options) {
  const { defaultLocale, initialLocale, localeCodes: localeCodes2, fallbackLocale, lazy } = options;
  if (lazy && fallbackLocale) {
    const fallbackLocales = makeFallbackLocaleCodes(fallbackLocale, [defaultLocale, initialLocale]);
    await Promise.all(fallbackLocales.map((locale2) => loadAndSetLocaleMessages(locale2, localeLoaders2, messages)));
  }
  const locales = lazy ? [...(/* @__PURE__ */ new Set()).add(defaultLocale).add(initialLocale)] : localeCodes2;
  await Promise.all(locales.map((locale2) => loadAndSetLocaleMessages(locale2, localeLoaders2, messages)));
  return messages;
}
async function loadMessage(locale2, { key: key2, load }) {
  let message = null;
  try {
    const getter = await load().then((r) => r.default || r);
    if (isFunction$1(getter)) {
      message = await getter(locale2);
    } else {
      message = getter;
      if (message != null && cacheMessages) {
        cacheMessages.set(key2, message);
      }
    }
  } catch (e) {
    console.error("Failed locale loading: " + e.message);
  }
  return message;
}
async function loadLocale(locale2, localeLoaders2, setter) {
  const loaders = localeLoaders2[locale2];
  if (loaders == null) {
    console.warn("Could not find messages for locale code: " + locale2);
    return;
  }
  const targetMessage = {};
  for (const loader of loaders) {
    let message = null;
    if (cacheMessages && cacheMessages.has(loader.key) && loader.cache) {
      message = cacheMessages.get(loader.key);
    } else {
      message = await loadMessage(locale2, loader);
    }
    if (message != null) {
      deepCopy(message, targetMessage);
    }
  }
  setter(locale2, targetMessage);
}
async function loadAndSetLocaleMessages(locale2, localeLoaders2, messages) {
  const setter = (locale22, message) => {
    const base = messages[locale22] || {};
    deepCopy(message, base);
    messages[locale22] = base;
  };
  await loadLocale(locale2, localeLoaders2, setter);
}
function split(str, index) {
  const result = [str.slice(0, index), str.slice(index)];
  return result;
}
function routeToObject(route) {
  const { fullPath, query, hash: hash2, name, path, params, meta, redirectedFrom, matched } = route;
  return {
    fullPath,
    params,
    query,
    hash: hash2,
    name,
    path,
    meta,
    matched,
    redirectedFrom
  };
}
function resolve({ router }, route, strategy, locale2) {
  var _a, _b;
  if (strategy !== "prefix") {
    return router.resolve(route);
  }
  const [rootSlash, restPath] = split(route.path, 1);
  const targetPath = `${rootSlash}${locale2}${restPath === "" ? restPath : `/${restPath}`}`;
  const _route = (_b = (_a = router.options) == null ? void 0 : _a.routes) == null ? void 0 : _b.find((r) => r.path === targetPath);
  if (_route == null) {
    return route;
  }
  const _resolvableRoute = assign({}, route, _route);
  _resolvableRoute.path = targetPath;
  return router.resolve(_resolvableRoute);
}
const RESOLVED_PREFIXED = /* @__PURE__ */ new Set(["prefix_and_default", "prefix_except_default"]);
function prefixable(options) {
  const { currentLocale, defaultLocale, strategy } = options;
  const isDefaultLocale = currentLocale === defaultLocale;
  return !(isDefaultLocale && RESOLVED_PREFIXED.has(strategy)) && // no prefix for any language
  !(strategy === "no_prefix");
}
const DefaultPrefixable = prefixable;
function getRouteBaseName(common, givenRoute) {
  const { routesNameSeparator } = common.runtimeConfig.public.i18n;
  const route = unref(givenRoute);
  if (route == null || !route.name) {
    return;
  }
  const name = getRouteName(route.name);
  return name.split(routesNameSeparator)[0];
}
function localePath(common, route, locale2) {
  var _a;
  if (typeof route === "string" && hasProtocol(route, { acceptRelative: true })) {
    return route;
  }
  const localizedRoute = resolveRoute(common, route, locale2);
  return localizedRoute == null ? "" : ((_a = localizedRoute.redirectedFrom) == null ? void 0 : _a.fullPath) || localizedRoute.fullPath;
}
function localeRoute(common, route, locale2) {
  const resolved = resolveRoute(common, route, locale2);
  return resolved ?? void 0;
}
function localeLocation(common, route, locale2) {
  const resolved = resolveRoute(common, route, locale2);
  return resolved ?? void 0;
}
function resolveRoute(common, route, locale2) {
  const { router, i18n } = common;
  const _locale = locale2 || getLocale$1(i18n);
  const { defaultLocale, strategy, trailingSlash } = common.runtimeConfig.public.i18n;
  const prefixable2 = extendPrefixable(common.runtimeConfig);
  let _route;
  if (isString$1(route)) {
    if (route[0] === "/") {
      const { pathname: path, search, hash: hash2 } = parsePath(route);
      const query = parseQuery(search);
      _route = { path, query, hash: hash2 };
    } else {
      _route = { name: route };
    }
  } else {
    _route = route;
  }
  let localizedRoute = assign({}, _route);
  const isRouteLocationPathRaw = (val) => "path" in val && !!val.path && !("name" in val);
  if (isRouteLocationPathRaw(localizedRoute)) {
    const resolvedRoute = resolve(common, localizedRoute, strategy, _locale);
    const resolvedRouteName = getRouteBaseName(common, resolvedRoute);
    if (isString$1(resolvedRouteName)) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, _locale, common.runtimeConfig.public.i18n),
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- FIXME
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
      localizedRoute.state = resolvedRoute.state;
    } else {
      if (prefixable2({ currentLocale: _locale, defaultLocale, strategy })) {
        localizedRoute.path = `/${_locale}${localizedRoute.path}`;
      }
      localizedRoute.path = trailingSlash ? withTrailingSlash(localizedRoute.path, true) : withoutTrailingSlash(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !("path" in localizedRoute)) {
      localizedRoute.name = getRouteBaseName(common, router.currentRoute.value);
    }
    localizedRoute.name = getLocaleRouteName(localizedRoute.name, _locale, common.runtimeConfig.public.i18n);
  }
  try {
    const resolvedRoute = router.resolve(localizedRoute);
    if (resolvedRoute.name) {
      return resolvedRoute;
    }
    return router.resolve(route);
  } catch (e) {
    if (typeof e === "object" && "type" in e && e.type === 1) {
      return null;
    }
  }
}
const DefaultSwitchLocalePathIntercepter = (path) => path;
function getLocalizableMetaFromDynamicParams(common, route) {
  var _a;
  if (common.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR) {
    return unref(common.metaState.value);
  }
  const meta = route.meta || {};
  return ((_a = unref(meta)) == null ? void 0 : _a[DEFAULT_DYNAMIC_PARAMS_KEY]) || {};
}
function switchLocalePath(common, locale2, _route) {
  const route = _route ?? common.router.currentRoute.value;
  const name = getRouteBaseName(common, route);
  if (!name) {
    return "";
  }
  const switchLocalePathIntercepter = extendSwitchLocalePathIntercepter(common.runtimeConfig);
  const routeCopy = routeToObject(route);
  const resolvedParams = getLocalizableMetaFromDynamicParams(common, route)[locale2];
  const baseRoute = { ...routeCopy, name, params: { ...routeCopy.params, ...resolvedParams } };
  const path = localePath(common, baseRoute, locale2);
  return switchLocalePathIntercepter(path, locale2);
}
function localeHead(common, {
  addDirAttribute = false,
  addSeoAttributes: seoAttributes = true,
  identifierAttribute: idAttribute = "hid"
}) {
  const { defaultDirection } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const i18n = getComposer$3(common.i18n);
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  if (unref(i18n.locales) == null || unref(i18n.baseUrl) == null) {
    return metaObject;
  }
  const locale2 = getLocale$1(common.i18n);
  const locales = getLocales(common.i18n);
  const currentLocale = getNormalizedLocales(locales).find((l) => l.code === locale2) || {
    code: locale2
  };
  const currentLanguage = currentLocale.language;
  const currentDir = currentLocale.dir || defaultDirection;
  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentDir;
  }
  if (seoAttributes && locale2 && unref(i18n.locales)) {
    if (currentLanguage) {
      metaObject.htmlAttrs.lang = currentLanguage;
    }
    metaObject.link.push(
      ...getHreflangLinks(common, unref(locales), idAttribute),
      ...getCanonicalLink(common, idAttribute, seoAttributes)
    );
    metaObject.meta.push(
      ...getOgUrl(common, idAttribute, seoAttributes),
      ...getCurrentOgLocale(currentLocale, currentLanguage, idAttribute),
      ...getAlternateOgLocales(unref(locales), currentLanguage, idAttribute)
    );
  }
  return metaObject;
}
function getBaseUrl() {
  const nuxtApp = useNuxtApp();
  const i18n = getComposer$3(nuxtApp.$i18n);
  return joinURL(unref(i18n.baseUrl), nuxtApp.$config.app.baseURL);
}
function getHreflangLinks(common, locales, idAttribute) {
  const baseUrl = getBaseUrl();
  const { defaultLocale, strategy } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const links = [];
  if (strategy === "no_prefix") return links;
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale2 of locales) {
    const localeLanguage = locale2.language;
    if (!localeLanguage) {
      console.warn("Locale `language` ISO code is required to generate alternate link");
      continue;
    }
    const [language, region] = localeLanguage.split("-");
    if (language && region && (locale2.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale2);
    }
    localeMap.set(localeLanguage, locale2);
  }
  for (const [language, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath(common, mapLocale.code);
    if (localePath2) {
      links.push({
        [idAttribute]: `i18n-alt-${language}`,
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: language
      });
    }
  }
  if (defaultLocale) {
    const localePath2 = switchLocalePath(common, defaultLocale);
    if (localePath2) {
      links.push({
        [idAttribute]: "i18n-xd",
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: "x-default"
      });
    }
  }
  return links;
}
function getCanonicalUrl(common, baseUrl, seoAttributes) {
  const route = common.router.currentRoute.value;
  const currentRoute = localeRoute(common, {
    ...route,
    path: void 0,
    name: getRouteBaseName(common, route)
  });
  if (!currentRoute) return "";
  let href = toAbsoluteUrl(currentRoute.path, baseUrl);
  const canonicalQueries = isObject$1(seoAttributes) && seoAttributes.canonicalQueries || [];
  const currentRouteQueryParams = currentRoute.query;
  const params = new URLSearchParams();
  for (const queryParamName of canonicalQueries) {
    if (queryParamName in currentRouteQueryParams) {
      const queryParamValue = currentRouteQueryParams[queryParamName];
      if (isArray$1(queryParamValue)) {
        queryParamValue.forEach((v) => params.append(queryParamName, v || ""));
      } else {
        params.append(queryParamName, queryParamValue || "");
      }
    }
  }
  const queryString = params.toString();
  if (queryString) {
    href = `${href}?${queryString}`;
  }
  return href;
}
function getCanonicalLink(common, idAttribute, seoAttributes) {
  const baseUrl = getBaseUrl();
  const href = getCanonicalUrl(common, baseUrl, seoAttributes);
  if (!href) return [];
  return [{ [idAttribute]: "i18n-can", rel: "canonical", href }];
}
function getOgUrl(common, idAttribute, seoAttributes) {
  const baseUrl = getBaseUrl();
  const href = getCanonicalUrl(common, baseUrl, seoAttributes);
  if (!href) return [];
  return [{ [idAttribute]: "i18n-og-url", property: "og:url", content: href }];
}
function getCurrentOgLocale(currentLocale, currentLanguage, idAttribute) {
  if (!currentLocale || !currentLanguage) return [];
  return [{ [idAttribute]: "i18n-og", property: "og:locale", content: hypenToUnderscore(currentLanguage) }];
}
function getAlternateOgLocales(locales, currentLanguage, idAttribute) {
  const alternateLocales = locales.filter((locale2) => locale2.language && locale2.language !== currentLanguage);
  return alternateLocales.map((locale2) => ({
    [idAttribute]: `i18n-og-alt-${locale2.language}`,
    property: "og:locale:alternate",
    content: hypenToUnderscore(locale2.language)
  }));
}
function hypenToUnderscore(str) {
  return (str || "").replace(/-/g, "_");
}
function toAbsoluteUrl(urlOrPath, baseUrl) {
  if (urlOrPath.match(/^https?:\/\//)) return urlOrPath;
  return joinURL(baseUrl, urlOrPath);
}
function createLocaleFromRouteGetter() {
  const { routesNameSeparator, defaultLocaleRouteNameSuffix } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const localesPattern = `(${localeCodes.join("|")})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  const regexpPath = getLocalesRegex(localeCodes);
  const getLocaleFromRoute = (route) => {
    if (isObject$1(route)) {
      if (route.name) {
        const name = isString$1(route.name) ? route.name : route.name.toString();
        const matches = name.match(regexpName);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      } else if (route.path) {
        const matches = route.path.match(regexpPath);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      }
    } else if (isString$1(route)) {
      const matches = route.match(regexpPath);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    }
    return "";
  };
  return getLocaleFromRoute;
}
function setCookieLocale(i18n, locale2) {
  return callVueI18nInterfaces(i18n, "setLocaleCookie", locale2);
}
function mergeLocaleMessage(i18n, locale2, messages) {
  return callVueI18nInterfaces(i18n, "mergeLocaleMessage", locale2, messages);
}
async function onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context) {
  return callVueI18nInterfaces(i18n, "onBeforeLanguageSwitch", oldLocale, newLocale, initial, context);
}
function onLanguageSwitched(i18n, oldLocale, newLocale) {
  return callVueI18nInterfaces(i18n, "onLanguageSwitched", oldLocale, newLocale);
}
function initCommonComposableOptions(i18n) {
  return {
    i18n: i18n ?? useNuxtApp().$i18n,
    router: useRouter(),
    runtimeConfig: /* @__PURE__ */ useRuntimeConfig(),
    metaState: useState("nuxt-i18n-meta", () => ({}))
  };
}
async function loadAndSetLocale(newLocale, i18n, runtimeI18n, initial = false) {
  const { differentDomains, skipSettingLocaleOnNavigate, lazy } = runtimeI18n;
  const opts = runtimeDetectBrowserLanguage(runtimeI18n);
  const nuxtApp = useNuxtApp();
  const oldLocale = getLocale$1(i18n);
  const localeCodes2 = getLocaleCodes(i18n);
  function syncCookie(locale2 = oldLocale) {
    if (opts === false || !opts.useCookie) return;
    if (skipSettingLocaleOnNavigate) return;
    setCookieLocale(i18n, locale2);
  }
  if (!newLocale) {
    syncCookie();
    return false;
  }
  if (!initial && differentDomains) {
    syncCookie();
    return false;
  }
  if (oldLocale === newLocale) {
    syncCookie();
    return false;
  }
  const localeOverride = await onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, nuxtApp);
  if (localeOverride && localeCodes2.includes(localeOverride)) {
    if (oldLocale === localeOverride) {
      syncCookie();
      return false;
    }
    newLocale = localeOverride;
  }
  if (lazy) {
    const i18nFallbackLocales = getVueI18nPropertyValue(i18n, "fallbackLocale");
    const setter = (locale2, message) => mergeLocaleMessage(i18n, locale2, message);
    if (i18nFallbackLocales) {
      const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
      await Promise.all(fallbackLocales.map((locale2) => loadLocale(locale2, localeLoaders, setter)));
    }
    await loadLocale(newLocale, localeLoaders, setter);
  }
  if (skipSettingLocaleOnNavigate) {
    return false;
  }
  syncCookie(newLocale);
  setLocale(i18n, newLocale);
  await onLanguageSwitched(i18n, oldLocale, newLocale);
  return true;
}
function createLogger(label) {
  return {
    log: console.log.bind(console, `${label}:`)
    // change to this after implementing logger across runtime code
    // log: console.log.bind(console, `[i18n:${label}]`)
  };
}
function detectLocale(route, routeLocaleGetter, initialLocaleLoader, detectLocaleContext, runtimeI18n) {
  const { strategy, defaultLocale, differentDomains, multiDomainLocales } = runtimeI18n;
  const { localeCookie } = detectLocaleContext;
  const _detectBrowserLanguage = runtimeDetectBrowserLanguage(runtimeI18n);
  createLogger("detectLocale");
  const initialLocale = isFunction$1(initialLocaleLoader) ? initialLocaleLoader() : initialLocaleLoader;
  const detectedBrowser = detectBrowserLanguage(route, detectLocaleContext, initialLocale);
  if (detectedBrowser.reason === DetectFailure.SSG_IGNORE) {
    return initialLocale;
  }
  if (detectedBrowser.locale && detectedBrowser.from != null) {
    return detectedBrowser.locale;
  }
  let detected = "";
  if (differentDomains || multiDomainLocales) {
    detected || (detected = getLocaleDomain(normalizedLocales, strategy, route));
  } else if (strategy !== "no_prefix") {
    detected || (detected = routeLocaleGetter(route));
  }
  const cookieLocale = _detectBrowserLanguage && _detectBrowserLanguage.useCookie && localeCookie;
  detected || (detected = cookieLocale || initialLocale || defaultLocale || "");
  return detected;
}
function detectRedirect({
  route,
  targetLocale,
  routeLocaleGetter,
  calledWithRouting = false
}) {
  const nuxtApp = useNuxtApp();
  const common = initCommonComposableOptions();
  const { strategy, differentDomains } = common.runtimeConfig.public.i18n;
  let redirectPath = "";
  const { fullPath: toFullPath } = route.to;
  if (!differentDomains && (calledWithRouting || strategy !== "no_prefix") && routeLocaleGetter(route.to) !== targetLocale) {
    const routePath = nuxtApp.$switchLocalePath(targetLocale) || nuxtApp.$localePath(toFullPath, targetLocale);
    if (isString$1(routePath) && routePath && !isEqual(routePath, toFullPath) && !routePath.startsWith("//")) {
      redirectPath = !(route.from && route.from.fullPath === routePath) ? routePath : "";
    }
  }
  if ((differentDomains || isSSG) && routeLocaleGetter(route.to) !== targetLocale) {
    const routePath = switchLocalePath(common, targetLocale, route.to);
    if (isString$1(routePath) && routePath && !isEqual(routePath, toFullPath) && !routePath.startsWith("//")) {
      redirectPath = routePath;
    }
  }
  return redirectPath;
}
function isRootRedirectOptions(rootRedirect) {
  return isObject$1(rootRedirect) && "path" in rootRedirect && "statusCode" in rootRedirect;
}
const useRedirectState = () => useState(NUXT_I18N_MODULE_ID + ":redirect", () => "");
function _navigate(redirectPath, status) {
  return navigateTo(redirectPath, { redirectCode: status });
}
async function navigate(args, { status = 302, enableNavigate = false } = {}) {
  const { nuxtApp, i18n, locale: locale2, route } = args;
  const { rootRedirect, differentDomains, multiDomainLocales, skipSettingLocaleOnNavigate, configLocales, strategy } = nuxtApp.$config.public.i18n;
  let { redirectPath } = args;
  if (route.path === "/" && rootRedirect) {
    if (isString$1(rootRedirect)) {
      redirectPath = "/" + rootRedirect;
    } else if (isRootRedirectOptions(rootRedirect)) {
      redirectPath = "/" + rootRedirect.path;
      status = rootRedirect.statusCode;
    }
    redirectPath = nuxtApp.$localePath(redirectPath, locale2);
    return _navigate(redirectPath, status);
  }
  if (multiDomainLocales && strategy === "prefix_except_default") {
    const host = getHost();
    const currentDomain = configLocales.find((locale22) => {
      var _a;
      if (typeof locale22 !== "string") {
        return (_a = locale22.defaultForDomains) == null ? void 0 : _a.find((domain) => domain === host);
      }
      return false;
    });
    const defaultLocaleForDomain = typeof currentDomain !== "string" ? currentDomain == null ? void 0 : currentDomain.code : void 0;
    if (route.path.startsWith(`/${defaultLocaleForDomain}`)) {
      return _navigate(route.path.replace(`/${defaultLocaleForDomain}`, ""), status);
    } else if (!route.path.startsWith(`/${locale2}`) && locale2 !== defaultLocaleForDomain) {
      const getLocaleFromRoute = createLocaleFromRouteGetter();
      const oldLocale = getLocaleFromRoute(route.path);
      if (oldLocale !== "") {
        return _navigate(`/${locale2 + route.path.replace(`/${oldLocale}`, "")}`, status);
      } else {
        return _navigate(`/${locale2 + (route.path === "/" ? "" : route.path)}`, status);
      }
    } else if (redirectPath && route.path !== redirectPath) {
      return _navigate(redirectPath, status);
    }
    return;
  }
  if (!differentDomains) {
    if (redirectPath) {
      return _navigate(redirectPath, status);
    }
  } else {
    const state = useRedirectState();
    if (state.value && state.value !== redirectPath) {
      {
        state.value = redirectPath;
      }
    }
  }
}
function injectNuxtHelpers(nuxt, i18n) {
  defineGetter(nuxt, "$i18n", getI18nTarget(i18n));
  defineGetter(nuxt, "$getRouteBaseName", wrapComposable(getRouteBaseName));
  defineGetter(nuxt, "$localePath", wrapComposable(localePath));
  defineGetter(nuxt, "$localeRoute", wrapComposable(localeRoute));
  defineGetter(nuxt, "$switchLocalePath", wrapComposable(switchLocalePath));
  defineGetter(nuxt, "$localeHead", wrapComposable(localeHead));
}
function extendPrefixable(runtimeConfig = /* @__PURE__ */ useRuntimeConfig()) {
  return (opts) => {
    return DefaultPrefixable(opts) && !runtimeConfig.public.i18n.differentDomains;
  };
}
function extendSwitchLocalePathIntercepter(runtimeConfig = /* @__PURE__ */ useRuntimeConfig()) {
  return (path, locale2) => {
    if (runtimeConfig.public.i18n.differentDomains) {
      const domain = getDomainFromLocale(locale2);
      if (domain) {
        return joinURL(domain, path);
      } else {
        return path;
      }
    } else {
      return DefaultSwitchLocalePathIntercepter(path);
    }
  };
}
function extendBaseUrl() {
  return () => {
    const ctx = useNuxtApp();
    const { baseUrl, defaultLocale, differentDomains } = ctx.$config.public.i18n;
    if (isFunction$1(baseUrl)) {
      const baseUrlResult = baseUrl(ctx);
      return baseUrlResult;
    }
    const localeCode = isFunction$1(defaultLocale) ? defaultLocale() : defaultLocale;
    if (differentDomains && localeCode) {
      const domain = getDomainFromLocale(localeCode);
      if (domain) {
        return domain;
      }
    }
    if (baseUrl) {
      return baseUrl;
    }
    return baseUrl;
  };
}
function formatMessage(message) {
  return NUXT_I18N_MODULE_ID + " " + message;
}
function callVueI18nInterfaces(i18n, name, ...args) {
  const target = getI18nTarget(i18n);
  const [obj, method] = [target, target[name]];
  return Reflect.apply(method, obj, [...args]);
}
function getVueI18nPropertyValue(i18n, name) {
  const target = getI18nTarget(i18n);
  return unref(target[name]);
}
function defineGetter(obj, key2, val) {
  Object.defineProperty(obj, key2, { get: () => val });
}
function wrapComposable(fn, common = initCommonComposableOptions()) {
  return (...args) => fn(common, ...args);
}
function parseAcceptLanguage(input) {
  return input.split(",").map((tag) => tag.split(";")[0]);
}
function getBrowserLocale() {
  let ret;
  {
    const header = useRequestHeaders(["accept-language"]);
    const accept = header["accept-language"];
    if (accept) {
      ret = findBrowserLocale(normalizedLocales, parseAcceptLanguage(accept));
    }
  }
  return ret;
}
function getI18nCookie() {
  const detect = runtimeDetectBrowserLanguage();
  const cookieKey = detect && detect.cookieKey || DEFAULT_COOKIE_KEY;
  const date = /* @__PURE__ */ new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: "/",
    sameSite: detect && detect.cookieCrossOrigin ? "none" : "lax",
    secure: detect && detect.cookieCrossOrigin || detect && detect.cookieSecure
  };
  if (detect && detect.cookieDomain) {
    cookieOptions.domain = detect.cookieDomain;
  }
  return useCookie(cookieKey, cookieOptions);
}
function getLocaleCookie(cookieRef, detect, defaultLocale) {
  if (detect === false || !detect.useCookie) {
    return;
  }
  const localeCode = cookieRef.value ?? void 0;
  if (localeCode == null) {
    return;
  }
  if (localeCodes.includes(localeCode)) {
    return localeCode;
  }
  if (defaultLocale) {
    cookieRef.value = defaultLocale;
    return defaultLocale;
  }
  cookieRef.value = void 0;
  return;
}
function setLocaleCookie(cookieRef, locale2, detect) {
  if (detect === false || !detect.useCookie) {
    return;
  }
  cookieRef.value = locale2;
}
var DetectFailure = /* @__PURE__ */ ((DetectFailure2) => {
  DetectFailure2["NOT_FOUND"] = "not_found_match";
  DetectFailure2["FIRST_ACCESS"] = "first_access_only";
  DetectFailure2["NO_REDIRECT_ROOT"] = "not_redirect_on_root";
  DetectFailure2["NO_REDIRECT_NO_PREFIX"] = "not_redirect_on_no_prefix";
  DetectFailure2["SSG_IGNORE"] = "detect_ignore_on_ssg";
  return DetectFailure2;
})(DetectFailure || {});
const DefaultDetectBrowserLanguageFromResult = { locale: "" };
function detectBrowserLanguage(route, detectLocaleContext, locale2 = "") {
  createLogger("detectBrowserLanguage");
  const _detect = runtimeDetectBrowserLanguage();
  if (!_detect) {
    return DefaultDetectBrowserLanguageFromResult;
  }
  const { strategy } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const { ssg, callType, firstAccess, localeCookie } = detectLocaleContext;
  if (!firstAccess) {
    return {
      locale: strategy === "no_prefix" ? locale2 : "",
      reason: "first_access_only"
      /* FIRST_ACCESS */
    };
  }
  const { redirectOn, alwaysRedirect, useCookie: useCookie2, fallbackLocale } = _detect;
  const path = isString$1(route) ? route : route.path;
  if (strategy !== "no_prefix") {
    if (redirectOn === "root" && path !== "/") {
      return {
        locale: "",
        reason: "not_redirect_on_root"
        /* NO_REDIRECT_ROOT */
      };
    }
    if (redirectOn === "no prefix" && !alwaysRedirect && path.match(getLocalesRegex(localeCodes))) {
      return {
        locale: "",
        reason: "not_redirect_on_no_prefix"
        /* NO_REDIRECT_NO_PREFIX */
      };
    }
  }
  let from;
  const cookieMatch = useCookie2 && localeCookie || void 0;
  if (useCookie2) {
    from = "cookie";
  }
  const browserMatch = getBrowserLocale();
  if (!cookieMatch) {
    from = "navigator_or_header";
  }
  const matchedLocale = cookieMatch || browserMatch;
  const resolved = matchedLocale || fallbackLocale || "";
  if (!matchedLocale && fallbackLocale) {
    from = "fallback";
  }
  return { locale: resolved, from };
}
function getHost() {
  let host;
  {
    const header = useRequestHeaders(["x-forwarded-host", "host"]);
    let detectedHost;
    if ("x-forwarded-host" in header) {
      detectedHost = header["x-forwarded-host"];
    } else if ("host" in header) {
      detectedHost = header["host"];
    }
    host = isArray$1(detectedHost) ? detectedHost[0] : detectedHost;
  }
  return host;
}
function getLocaleDomain(locales, strategy, route) {
  let host = getHost() || "";
  if (host) {
    let matchingLocale;
    const matchingLocales = locales.filter((locale2) => {
      if (locale2 && locale2.domain) {
        let domain = locale2.domain;
        if (hasProtocol(locale2.domain)) {
          domain = locale2.domain.replace(/(http|https):\/\//, "");
        }
        return domain === host;
      } else if (Array.isArray(locale2 == null ? void 0 : locale2.domains)) {
        return locale2.domains.includes(host);
      }
      return false;
    });
    if (matchingLocales.length === 1) {
      matchingLocale = matchingLocales[0];
    } else if (matchingLocales.length > 1) {
      if (strategy === "no_prefix") {
        console.warn(
          formatMessage(
            "Multiple matching domains found! This is not supported for no_prefix strategy in combination with differentDomains!"
          )
        );
        matchingLocale = matchingLocales[0];
      } else {
        if (route) {
          const routePath = isObject$1(route) ? route.path : isString$1(route) ? route : "";
          if (routePath && routePath !== "") {
            const matches = routePath.match(getLocalesRegex(matchingLocales.map((l) => l.code)));
            if (matches && matches.length > 1) {
              matchingLocale = matchingLocales.find((l) => l.code === matches[1]);
            }
          }
        }
        if (!matchingLocale) {
          matchingLocale = matchingLocales.find(
            (l) => Array.isArray(l.defaultForDomains) ? l.defaultForDomains.includes(host) : l.domainDefault
          );
        }
      }
    }
    if (matchingLocale) {
      return matchingLocale.code;
    } else {
      host = "";
    }
  }
  return host;
}
function getDomainFromLocale(localeCode) {
  var _a, _b, _c, _d, _e, _f;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  const host = getHost();
  const config = runtimeConfig.public.i18n;
  const lang = normalizedLocales.find((locale2) => locale2.code === localeCode);
  const domain = ((_b = (_a = config == null ? void 0 : config.locales) == null ? void 0 : _a[localeCode]) == null ? void 0 : _b.domain) || (lang == null ? void 0 : lang.domain) || ((_e = (_d = (_c = config == null ? void 0 : config.locales) == null ? void 0 : _c[localeCode]) == null ? void 0 : _d.domains) == null ? void 0 : _e.find((v) => v === host)) || ((_f = lang == null ? void 0 : lang.domains) == null ? void 0 : _f.find((v) => v === host));
  if (domain) {
    if (hasProtocol(domain, { strict: true })) {
      return domain;
    }
    let protocol;
    {
      const {
        node: { req }
      } = useRequestEvent(nuxtApp);
      protocol = req && isHTTPS(req) ? "https:" : "http:";
    }
    return protocol + "//" + domain;
  }
  console.warn(formatMessage("Could not find domain name for locale " + localeCode));
}
const runtimeDetectBrowserLanguage = (opts = (/* @__PURE__ */ useRuntimeConfig()).public.i18n) => {
  if ((opts == null ? void 0 : opts.detectBrowserLanguage) === false) return false;
  return opts == null ? void 0 : opts.detectBrowserLanguage;
};
/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function createPosition(line, column, offset) {
  return { line, column, offset };
}
function createLocation(start, end, source) {
  const loc = { start, end };
  return loc;
}
const CompileWarnCodes = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
};
const warnMessages$2 = {
  [CompileWarnCodes.USE_MODULO_SYNTAX]: `Use modulo before '{{0}}'.`
};
function createCompileWarn(code2, loc, ...args) {
  const msg = process.env.NODE_ENV !== "production" ? format$1(warnMessages$2[code2], ...args || []) : code2;
  const message = { message: String(msg), code: code2 };
  if (loc) {
    message.location = loc;
  }
  return message;
}
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
};
const errorMessages$2 = {
  // tokenizer error messages
  [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
  [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
  [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
  [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
  [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
  [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
  [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
  [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
  [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
  [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
  // parser error messages
  [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
  [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`,
  // generator error messages
  [CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE]: `unhandled codegen node type: '{0}'`,
  // minimizer error messages
  [CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE]: `unhandled mimifier node type: '{0}'`
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = process.env.NODE_ENV !== "production" ? format$1((messages || errorMessages$2)[code2] || "", ...args || []) : code2;
  const error = new SyntaxError(String(msg));
  error.code = code2;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
function defaultOnError(error) {
  throw error;
}
const RE_HTML_TAG = /<\/?[\w\s="/.':;#-\/]+>/;
const detectHtmlTag = (source) => RE_HTML_TAG.test(source);
const CHAR_SP = " ";
const CHAR_CR = "\r";
const CHAR_LF = "\n";
const CHAR_LS = String.fromCharCode(8232);
const CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = (index2) => _buf[index2] === CHAR_CR && _buf[index2 + 1] === CHAR_LF;
  const isLF = (index2) => _buf[index2] === CHAR_LF;
  const isPS = (index2) => _buf[index2] === CHAR_PS;
  const isLS = (index2) => _buf[index2] === CHAR_LS;
  const isLineEnd = (index2) => isCRLF(index2) || isLF(index2) || isPS(index2) || isLS(index2);
  const index = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index)) {
      _index++;
    }
    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset)) {
      _peekOffset++;
    }
    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset = 0) {
    _peekOffset = offset;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index) {
      next();
    }
    _peekOffset = 0;
  }
  return {
    index,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset,
    resetPeek,
    skipToPeek
  };
}
const EOF = void 0;
const DOT = ".";
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
  const location = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 14,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 14,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: ""
  };
  const context = () => _context;
  const { onError } = options;
  function emitError(code2, pos, offset, ...args) {
    const ctx = context();
    pos.column += offset;
    pos.offset += offset;
    if (onError) {
      const loc = location ? createLocation(ctx.startLoc, pos) : null;
      const err = createCompileError(code2, loc, {
        domain: ERROR_DOMAIN$3,
        args
      });
      onError(err);
    }
  }
  function getToken(context2, type, value) {
    context2.endLoc = currentPosition();
    context2.currentType = type;
    const token = { type };
    if (location) {
      token.loc = createLocation(context2.startLoc, context2.endLoc);
    }
    if (value != null) {
      token.value = value;
    }
    return token;
  }
  const getEndToken = (context2) => getToken(
    context2,
    14
    /* TokenTypes.EOF */
  );
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    } else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return "";
    }
  }
  function peekSpaces(scnr) {
    let buf = "";
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc === 95;
  }
  function isNumberStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function isNamedIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ch = scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 8) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ".";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 9) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context2) {
    const { currentType } = context2;
    if (!(currentType === 8 || currentType === 12)) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ":";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 10) {
      return false;
    }
    const fn = () => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return isIdentifierStart(scnr.peek());
      } else if (ch === "@" || ch === "%" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) {
        return false;
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn();
      } else {
        return isTextStart(scnr, false);
      }
    };
    const ret = fn();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "|";
    scnr.resetPeek();
    return ret;
  }
  function detectModuloStart(scnr) {
    const spaces = peekSpaces(scnr);
    const ret = scnr.currentPeek() === "%" && scnr.peek() === "{";
    scnr.resetPeek();
    return {
      isModulo: ret,
      hasSpace: spaces.length > 0
    };
  }
  function isTextStart(scnr, reset = true) {
    const fn = (hasSpace = false, prev = "", detectModulo = false) => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return prev === "%" ? false : hasSpace;
      } else if (ch === "@" || !ch) {
        return prev === "%" ? true : hasSpace;
      } else if (ch === "%") {
        scnr.peek();
        return fn(hasSpace, "%", true);
      } else if (ch === "|") {
        return prev === "%" || detectModulo ? true : !(prev === CHAR_SP || prev === CHAR_LF);
      } else if (ch === CHAR_SP) {
        scnr.peek();
        return fn(true, CHAR_SP, detectModulo);
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn(true, CHAR_LF, detectModulo);
      } else {
        return true;
      }
    };
    const ret = fn();
    reset && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn) {
    const ch = scnr.currentChar();
    if (ch === EOF) {
      return EOF;
    }
    if (fn(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function isIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36;
  }
  function takeIdentifierChar(scnr) {
    return takeChar(scnr, isIdentifier);
  }
  function isNamedIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36 || // $
    cc === 45;
  }
  function takeNamedIdentifierChar(scnr) {
    return takeChar(scnr, isNamedIdentifier);
  }
  function isDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function takeDigit(scnr) {
    return takeChar(scnr, isDigit);
  }
  function isHexDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57 || // 0-9
    cc >= 65 && cc <= 70 || // A-F
    cc >= 97 && cc <= 102;
  }
  function takeHexDigit(scnr) {
    return takeChar(scnr, isHexDigit);
  }
  function getDigits(scnr) {
    let ch = "";
    let num = "";
    while (ch = takeDigit(scnr)) {
      num += ch;
    }
    return num;
  }
  function readModulo(scnr) {
    skipSpaces(scnr);
    const ch = scnr.currentChar();
    if (ch !== "%") {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
    }
    scnr.next();
    return "%";
  }
  function readText(scnr) {
    let buf = "";
    while (true) {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) {
        break;
      } else if (ch === "%") {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else {
          break;
        }
      } else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else if (isPluralStart(scnr)) {
          break;
        } else {
          buf += ch;
          scnr.next();
        }
      } else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let name = "";
    while (ch = takeNamedIdentifierChar(scnr)) {
      name += ch;
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return name;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = "";
    if (scnr.currentChar() === "-") {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    } else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return value;
  }
  function isLiteral2(ch) {
    return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    eat(scnr, `'`);
    let ch = "";
    let literal = "";
    while (ch = takeChar(scnr, isLiteral2)) {
      if (ch === "\\") {
        literal += readEscapeSequence(scnr);
      } else {
        literal += ch;
      }
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      if (current === CHAR_LF) {
        scnr.next();
        eat(scnr, `'`);
      }
      return literal;
    }
    eat(scnr, `'`);
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case "\\":
      case `'`:
        scnr.next();
        return `\\${ch}`;
      case "u":
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case "U":
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return "";
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = "";
    for (let i = 0; i < digits; i++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function isInvalidIdentifier(ch) {
    return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let identifiers = "";
    while (ch = takeChar(scnr, isInvalidIdentifier)) {
      identifiers += ch;
    }
    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = "";
    let name = "";
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    return name;
  }
  function readLinkedRefer(scnr) {
    const fn = (buf) => {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "%" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) {
        return buf;
      } else if (ch === CHAR_SP) {
        return buf;
      } else if (ch === CHAR_LF || ch === DOT) {
        buf += ch;
        scnr.next();
        return fn(buf);
      } else {
        buf += ch;
        scnr.next();
        return fn(buf);
      }
    };
    return fn("");
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(
      scnr,
      "|"
      /* TokenChars.Pipe */
    );
    skipSpaces(scnr);
    return plural;
  }
  function readTokenInPlaceholder(scnr, context2) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        if (context2.braceNest >= 1) {
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          2,
          "{"
          /* TokenChars.BraceLeft */
        );
        skipSpaces(scnr);
        context2.braceNest++;
        return token;
      case "}":
        if (context2.braceNest > 0 && context2.currentType === 2) {
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
        context2.braceNest--;
        context2.braceNest > 0 && skipSpaces(scnr);
        if (context2.inLinked && context2.braceNest === 0) {
          context2.inLinked = false;
        }
        return token;
      case "@":
        if (context2.braceNest > 0) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        token = readTokenInLinked(scnr, context2) || getEndToken(context2);
        context2.braceNest = 0;
        return token;
      default: {
        let validNamedIdentifier = true;
        let validListIdentifier = true;
        let validLiteral = true;
        if (isPluralStart(scnr)) {
          if (context2.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (context2.braceNest > 0 && (context2.currentType === 5 || context2.currentType === 6 || context2.currentType === 7)) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          context2.braceNest = 0;
          return readToken(scnr, context2);
        }
        if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
          token = getToken(context2, 5, readNamedIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
          token = getToken(context2, 6, readListIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validLiteral = isLiteralStart(scnr, context2)) {
          token = getToken(context2, 7, readLiteral(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
          token = getToken(context2, 13, readInvalidIdentifier(scnr));
          emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
          skipSpaces(scnr);
          return token;
        }
        break;
      }
    }
    return token;
  }
  function readTokenInLinked(scnr, context2) {
    const { currentType } = context2;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 8 || currentType === 9 || currentType === 12 || currentType === 10) && (ch === CHAR_LF || ch === CHAR_SP)) {
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
    }
    switch (ch) {
      case "@":
        scnr.next();
        token = getToken(
          context2,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        );
        context2.inLinked = true;
        return token;
      case ".":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context2);
        }
        if (isLinkedModifierStart(scnr, context2)) {
          skipSpaces(scnr);
          return getToken(context2, 12, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context2)) {
          skipSpaces(scnr);
          if (ch === "{") {
            return readTokenInPlaceholder(scnr, context2) || token;
          } else {
            return getToken(context2, 11, readLinkedRefer(scnr));
          }
        }
        if (currentType === 8) {
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        context2.braceNest = 0;
        context2.inLinked = false;
        return readToken(scnr, context2);
    }
  }
  function readToken(scnr, context2) {
    let token = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (context2.braceNest > 0) {
      return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
    }
    if (context2.inLinked) {
      return readTokenInLinked(scnr, context2) || getEndToken(context2);
    }
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      case "}":
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      default: {
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        const { isModulo, hasSpace } = detectModuloStart(scnr);
        if (isModulo) {
          return hasSpace ? getToken(context2, 0, readText(scnr)) : getToken(context2, 4, readModulo(scnr));
        }
        if (isTextStart(scnr)) {
          return getToken(context2, 0, readText(scnr));
        }
        break;
      }
    }
    return token;
  }
  function nextToken() {
    const { currentType, offset, startLoc, endLoc } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(
        _context,
        14
        /* TokenTypes.EOF */
      );
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context
  };
}
const ERROR_DOMAIN$2 = "parser";
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case `\\\\`:
      return `\\`;
    case `\\'`:
      return `'`;
    default: {
      const codePoint = parseInt(codePoint4 || codePoint6, 16);
      if (codePoint <= 55295 || codePoint >= 57344) {
        return String.fromCodePoint(codePoint);
      }
      return "�";
    }
  }
}
function createParser(options = {}) {
  const location = options.location !== false;
  const { onError, onWarn } = options;
  function emitError(tokenzer, code2, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onError) {
      const loc = location ? createLocation(start, end) : null;
      const err = createCompileError(code2, loc, {
        domain: ERROR_DOMAIN$2,
        args
      });
      onError(err);
    }
  }
  function emitWarn(tokenzer, code2, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onWarn) {
      const loc = location ? createLocation(start, end) : null;
      onWarn(createCompileWarn(code2, loc, args));
    }
  }
  function startNode(type, offset, loc) {
    const node = { type };
    if (location) {
      node.start = offset;
      node.end = offset;
      node.loc = { start: loc, end: loc };
    }
    return node;
  }
  function endNode(node, offset, pos, type) {
    if (location) {
      node.end = offset;
      if (node.loc) {
        node.loc.end = pos;
      }
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(5, offset, loc);
    node.index = parseInt(index, 10);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key2, modulo) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(4, offset, loc);
    node.key = key2;
    if (modulo === true) {
      node.modulo = true;
    }
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(9, offset, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(8, offset, loc);
    if (token.type !== 12) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = "";
      endNode(node, offset, loc);
      return {
        nextConsumeToken: token,
        node
      };
    }
    if (token.value == null) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    node.value = token.value || "";
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 9) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    if (token.type !== 10) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    token = tokenizer.nextToken();
    if (token.type === 2) {
      token = tokenizer.nextToken();
    }
    switch (token.type) {
      case 11:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
        break;
      case 5:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseNamed(tokenizer, token.value || "");
        break;
      case 6:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseList(tokenizer, token.value || "");
        break;
      case 7:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLiteral(tokenizer, token.value || "");
        break;
      default: {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
        const nextContext = tokenizer.context();
        const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
        emptyLinkedKeyNode.value = "";
        endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
        linkedNode.key = emptyLinkedKeyNode;
        endNode(linkedNode, nextContext.offset, nextContext.startLoc);
        return {
          nextConsumeToken: token,
          node: linkedNode
        };
      }
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
    const node = startNode(2, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    let modulo = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseText(tokenizer, token.value || ""));
          break;
        case 6:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseList(tokenizer, token.value || ""));
          break;
        case 4:
          modulo = true;
          break;
        case 5:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseNamed(tokenizer, token.value || "", !!modulo));
          if (modulo) {
            emitWarn(tokenizer, CompileWarnCodes.USE_MODULO_SYNTAX, context.lastStartLoc, 0, getTokenCaption(token));
            modulo = null;
          }
          break;
        case 7:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseLiteral(tokenizer, token.value || ""));
          break;
        case 8: {
          const parsed = parseLinked(tokenizer);
          node.items.push(parsed.node);
          nextToken = parsed.nextConsumeToken || null;
          break;
        }
      }
    } while (context.currentType !== 14 && context.currentType !== 1);
    const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1, offset, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage) {
        hasEmptyMessage = msg.items.length === 0;
      }
      node.cases.push(msg);
    } while (context.currentType !== 14);
    if (hasEmptyMessage) {
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const { offset, startLoc } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 14) {
      return msgNode;
    } else {
      return parsePlural(tokenizer, offset, startLoc, msgNode);
    }
  }
  function parse2(source) {
    const tokenizer = createTokenizer(source, assign({}, options));
    const context = tokenizer.context();
    const node = startNode(0, context.offset, context.startLoc);
    if (location && node.loc) {
      node.loc.source = source;
    }
    node.body = parseResource(tokenizer);
    if (options.onCacheKey) {
      node.cacheKey = options.onCacheKey(source);
    }
    if (context.currentType !== 14) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return { parse: parse2 };
}
function getTokenCaption(token) {
  if (token.type === 14) {
    return "EOF";
  }
  const name = (token.value || "").replace(/\r?\n/gu, "\\n");
  return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
  const _context = {
    ast,
    helpers: /* @__PURE__ */ new Set()
  };
  const context = () => _context;
  const helper = (name) => {
    _context.helpers.add(name);
    return name;
  };
  return { context, helper };
}
function traverseNodes(nodes, transformer) {
  for (let i = 0; i < nodes.length; i++) {
    traverseNode(nodes[i], transformer);
  }
}
function traverseNode(node, transformer) {
  switch (node.type) {
    case 1:
      traverseNodes(node.cases, transformer);
      transformer.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      traverseNodes(node.items, transformer);
      break;
    case 6: {
      const linked = node;
      traverseNode(linked.key, transformer);
      transformer.helper(
        "linked"
        /* HelperNameMap.LINKED */
      );
      transformer.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function transform(ast, options = {}) {
  const transformer = createTransformer(ast);
  transformer.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  );
  ast.body && traverseNode(ast.body, transformer);
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
  const body = ast.body;
  if (body.type === 2) {
    optimizeMessageNode(body);
  } else {
    body.cases.forEach((c) => optimizeMessageNode(c));
  }
  return ast;
}
function optimizeMessageNode(message) {
  if (message.items.length === 1) {
    const item = message.items[0];
    if (item.type === 3 || item.type === 9) {
      message.static = item.value;
      delete item.value;
    }
  } else {
    const values = [];
    for (let i = 0; i < message.items.length; i++) {
      const item = message.items[i];
      if (!(item.type === 3 || item.type === 9)) {
        break;
      }
      if (item.value == null) {
        break;
      }
      values.push(item.value);
    }
    if (values.length === message.items.length) {
      message.static = join(values);
      for (let i = 0; i < message.items.length; i++) {
        const item = message.items[i];
        if (item.type === 3 || item.type === 9) {
          delete item.value;
        }
      }
    }
  }
}
const ERROR_DOMAIN$1 = "minifier";
function minify(node) {
  node.t = node.type;
  switch (node.type) {
    case 0: {
      const resource = node;
      minify(resource.body);
      resource.b = resource.body;
      delete resource.body;
      break;
    }
    case 1: {
      const plural = node;
      const cases = plural.cases;
      for (let i = 0; i < cases.length; i++) {
        minify(cases[i]);
      }
      plural.c = cases;
      delete plural.cases;
      break;
    }
    case 2: {
      const message = node;
      const items = message.items;
      for (let i = 0; i < items.length; i++) {
        minify(items[i]);
      }
      message.i = items;
      delete message.items;
      if (message.static) {
        message.s = message.static;
        delete message.static;
      }
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const valueNode = node;
      if (valueNode.value) {
        valueNode.v = valueNode.value;
        delete valueNode.value;
      }
      break;
    }
    case 6: {
      const linked = node;
      minify(linked.key);
      linked.k = linked.key;
      delete linked.key;
      if (linked.modifier) {
        minify(linked.modifier);
        linked.m = linked.modifier;
        delete linked.modifier;
      }
      break;
    }
    case 5: {
      const list = node;
      list.i = list.index;
      delete list.index;
      break;
    }
    case 4: {
      const named = node;
      named.k = named.key;
      delete named.key;
      break;
    }
    default:
      if (process.env.NODE_ENV !== "production") {
        throw createCompileError(CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: ERROR_DOMAIN$1,
          args: [node.type]
        });
      }
  }
  delete node.type;
}
const ERROR_DOMAIN = "parser";
function createCodeGenerator(ast, options) {
  const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
  const location = options.location !== false;
  const _context = {
    filename,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0
  };
  if (location && ast.loc) {
    _context.source = ast.loc.source;
  }
  const context = () => _context;
  function push(code2, node) {
    _context.code += code2;
  }
  function _newline(n, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : "";
    push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = (key2) => `_${key2}`;
  const needIndent = () => _context.needIndent;
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent
  };
}
function generateLinkedNode(generator, node) {
  const { helper } = generator;
  generator.push(`${helper(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(`, `);
    generateNode(generator, node.modifier);
    generator.push(`, _type`);
  } else {
    generator.push(`, undefined, _type`);
  }
  generator.push(`)`);
}
function generateMessageNode(generator, node) {
  const { helper, needIndent } = generator;
  generator.push(`${helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i = 0; i < length; i++) {
    generateNode(generator, node.items[i]);
    if (i === length - 1) {
      break;
    }
    generator.push(", ");
  }
  generator.deindent(needIndent());
  generator.push("])");
}
function generatePluralNode(generator, node) {
  const { helper, needIndent } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.cases[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(", ");
    }
    generator.deindent(needIndent());
    generator.push(`])`);
  }
}
function generateResource(generator, node) {
  if (node.body) {
    generateNode(generator, node.body);
  } else {
    generator.push("null");
  }
}
function generateNode(generator, node) {
  const { helper } = generator;
  switch (node.type) {
    case 0:
      generateResource(generator, node);
      break;
    case 1:
      generatePluralNode(generator, node);
      break;
    case 2:
      generateMessageNode(generator, node);
      break;
    case 6:
      generateLinkedNode(generator, node);
      break;
    case 8:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "list"
        /* HelperNameMap.LIST */
      )}(${node.index}))`, node);
      break;
    case 4:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3:
      generator.push(JSON.stringify(node.value), node);
      break;
    default:
      if (process.env.NODE_ENV !== "production") {
        throw createCompileError(CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: ERROR_DOMAIN,
          args: [node.type]
        });
      }
  }
}
const generate = (ast, options = {}) => {
  const mode = isString$1(options.mode) ? options.mode : "normal";
  const filename = isString$1(options.filename) ? options.filename : "message.intl";
  const sourceMap = !!options.sourceMap;
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
  const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    mode,
    filename,
    sourceMap,
    breakLineCode,
    needIndent
  });
  generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${join(helpers.map((s) => `${s}: _${s}`), ", ")} } = ctx`);
    generator.newline();
  }
  generator.push(`return `);
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push(`}`);
  delete ast.helpers;
  const { code: code2, map } = generator.context();
  return {
    ast,
    code: code2,
    map: map ? map.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function baseCompile$1(source, options = {}) {
  const assignedOptions = assign({}, options);
  const jit = !!assignedOptions.jit;
  const enalbeMinify = !!assignedOptions.minify;
  const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  if (!jit) {
    transform(ast, assignedOptions);
    return generate(ast, assignedOptions);
  } else {
    enambeOptimize && optimize(ast);
    enalbeMinify && minify(ast);
    return { ast, code: "" };
  }
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function initFeatureFlags$1() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
const pathStateMachine = [];
pathStateMachine[
  0
  /* States.BEFORE_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    0
    /* States.BEFORE_PATH */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  1
  /* States.IN_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1
    /* States.IN_PATH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  2
  /* States.BEFORE_IDENT */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  3
  /* States.IN_IDENT */
] = {
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1,
    1
    /* Actions.PUSH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2,
    1
    /* Actions.PUSH */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    1
    /* Actions.PUSH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    1
    /* Actions.PUSH */
  ]
};
pathStateMachine[
  4
  /* States.IN_SUB_PATH */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ],
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* PathCharTypes.RIGHT_BRACKET */
  ]: [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key2;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* Actions.APPEND */
  ] = () => {
    if (key2 === void 0) {
      key2 = newChar;
    } else {
      key2 += newChar;
    }
  };
  actions[
    1
    /* Actions.PUSH */
  ] = () => {
    if (key2 !== void 0) {
      keys.push(key2);
      key2 = void 0;
    }
  };
  actions[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* Actions.APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* Actions.APPEND */
      ]();
    } else {
      subPathDepth = 0;
      if (key2 === void 0) {
        return false;
      }
      key2 = formatSubPath(key2);
      if (key2 === false) {
        return false;
      } else {
        actions[
          1
          /* Actions.PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions[
        0
        /* Actions.APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c = path[index];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap[
      "l"
      /* PathCharTypes.ELSE */
    ] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject$1(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject$1(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    if (isFunction$1(last)) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale2 = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject$1(options.pluralRules) && isString$1(locale2) && isFunction$1(options.pluralRules[locale2]) ? options.pluralRules[locale2] : pluralDefault;
  const orgPluralRule = isObject$1(options.pluralRules) && isString$1(locale2) && isFunction$1(options.pluralRules[locale2]) ? pluralDefault : void 0;
  const plural = (messages) => {
    return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || {};
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key2) => _named[key2];
  function message(key2) {
    const msg = isFunction$1(options.messages) ? options.messages(key2) : isObject$1(options.messages) ? options.messages[key2] : false;
    return !msg ? options.parent ? options.parent.message(key2) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction$1(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction$1(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString$1(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key2, ...args) => {
    const [arg1, arg2] = args;
    let type2 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject$1(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      } else if (isString$1(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString$1(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString$1(arg2)) {
        type2 = arg2 || type2;
      }
    }
    const ret = message(key2)(ctx);
    const msg = (
      // The message in vnode resolved with linked are returned as an array by processor.nomalize
      type2 === "vnode" && isArray$1(ret) && modifier ? ret[0] : ret
    );
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    [
      "list"
      /* HelperNameMap.LIST */
    ]: list,
    [
      "named"
      /* HelperNameMap.NAMED */
    ]: named,
    [
      "plural"
      /* HelperNameMap.PLURAL */
    ]: plural,
    [
      "linked"
      /* HelperNameMap.LINKED */
    ]: linked,
    [
      "message"
      /* HelperNameMap.MESSAGE */
    ]: message,
    [
      "type"
      /* HelperNameMap.TYPE */
    ]: type,
    [
      "interpolate"
      /* HelperNameMap.INTERPOLATE */
    ]: interpolate,
    [
      "normalize"
      /* HelperNameMap.NORMALIZE */
    ]: normalize,
    [
      "values"
      /* HelperNameMap.VALUES */
    ]: assign({}, _list, _named)
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version2, meta) {
  devtools && devtools.emit("i18n:init", {
    timestamp: Date.now(),
    i18n,
    version: version2,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const code$1$1 = CompileWarnCodes.__EXTEND_POINT__;
const inc$1$1 = incrementer(code$1$1);
const CoreWarnCodes = {
  NOT_FOUND_KEY: code$1$1,
  // 2
  FALLBACK_TO_TRANSLATE: inc$1$1(),
  // 3
  CANNOT_FORMAT_NUMBER: inc$1$1(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: inc$1$1(),
  // 5
  CANNOT_FORMAT_DATE: inc$1$1(),
  // 6
  FALLBACK_TO_DATE_FORMAT: inc$1$1(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: inc$1$1(),
  // 8
  __EXTEND_POINT__: inc$1$1()
  // 9
};
const warnMessages$1 = {
  [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
  [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
  [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
  [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: `This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.`
};
function getWarnMessage$1(code2, ...args) {
  return format$1(warnMessages$1[code2], ...args);
}
const code$2 = CompileErrorCodes.__EXTEND_POINT__;
const inc$2 = incrementer(code$2);
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$2,
  // 17
  INVALID_DATE_ARGUMENT: inc$2(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: inc$2(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: inc$2(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: inc$2(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: inc$2(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: inc$2(),
  // 23
  __EXTEND_POINT__: inc$2()
  // 24
};
function createCoreError(code2) {
  return createCompileError(code2, null, process.env.NODE_ENV !== "production" ? { messages: errorMessages$1 } : void 0);
}
const errorMessages$1 = {
  [CoreErrorCodes.INVALID_ARGUMENT]: "Invalid arguments",
  [CoreErrorCodes.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function getLocale(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
function resolveLocale(locale2) {
  if (isString$1(locale2)) {
    return locale2;
  } else {
    if (isFunction$1(locale2)) {
      if (locale2.resolvedOnce && _resolveLocale != null) {
        return _resolveLocale;
      } else if (locale2.constructor.name === "Function") {
        const resolve2 = locale2();
        if (isPromise(resolve2)) {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        }
        return _resolveLocale = resolve2;
      } else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
      }
    } else {
      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
    }
  }
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray$1(fallback) ? fallback : isObject$1(fallback) ? Object.keys(fallback) : isString$1(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString$1(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray$1(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray$1(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString$1(defaults) ? [defaults] : defaults;
    if (isArray$1(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean(follow); i++) {
    const locale2 = block[i];
    if (isString$1(locale2)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale2, blocks) {
  let follow;
  const tokens = locale2.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale2 = target.replace(/!/g, "");
      chain.push(locale2);
      if ((isArray$1(blocks) || isPlainObject(blocks)) && blocks[locale2]) {
        follow = blocks[locale2];
      }
    }
  }
  return follow;
}
const VERSION$1 = "9.14.1";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === "text" && isString$1(val) ? val.toUpperCase() : type === "vnode" && isObject$1(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === "text" && isString$1(val) ? val.toLowerCase() : type === "vnode" && isObject$1(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === "text" && isString$1(val) ? capitalize(val) : type === "vnode" && isObject$1(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const onWarn = isFunction$1(options.onWarn) ? options.onWarn : warn;
  const version2 = isString$1(options.version) ? options.version : VERSION$1;
  const locale2 = isString$1(options.locale) || isFunction$1(options.locale) ? options.locale : DEFAULT_LOCALE;
  const _locale = isFunction$1(locale2) ? DEFAULT_LOCALE : locale2;
  const fallbackLocale = isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages = isPlainObject(options.messages) ? options.messages : { [_locale]: {} };
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale]: {} };
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction$1(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction$1(options.messageCompiler) ? options.messageCompiler : _compiler;
  if (process.env.NODE_ENV !== "production" && true && true && isFunction$1(options.messageCompiler)) {
    warnOnce(getWarnMessage$1(CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  }
  const messageResolver = isFunction$1(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction$1(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject$1(options.fallbackContext) ? options.fallbackContext : void 0;
  const internalOptions = options;
  const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale: locale2,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  if (process.env.NODE_ENV !== "production") {
    context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
  }
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version2, __meta);
  }
  return context;
}
function isTranslateFallbackWarn(fallback, key2) {
  return fallback instanceof RegExp ? fallback.test(key2) : fallback;
}
function isTranslateMissingWarn(missing, key2) {
  return missing instanceof RegExp ? missing.test(key2) : missing;
}
function handleMissing(context, key2, locale2, missingWarn, type) {
  const { missing, onWarn } = context;
  if (process.env.NODE_ENV !== "production") {
    const emitter = context.__v_emitter;
    if (emitter) {
      emitter.emit("missing", {
        locale: locale2,
        key: key2,
        type,
        groupId: `${type}:${key2}`
      });
    }
  }
  if (missing !== null) {
    const ret = missing(context, locale2, key2, type);
    return isString$1(ret) ? ret : key2;
  } else {
    if (process.env.NODE_ENV !== "production" && isTranslateMissingWarn(missingWarn, key2)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.NOT_FOUND_KEY, { key: key2, locale: locale2 }));
    }
    return key2;
  }
}
function updateFallbackLocale(ctx, locale2, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale2);
}
function isAlmostSameLocale(locale2, compareLocale) {
  if (locale2 === compareLocale)
    return false;
  return locale2.split("-")[0] === compareLocale.split("-")[0];
}
function isImplicitFallback(targetLocale, locales) {
  const index = locales.indexOf(targetLocale);
  if (index === -1) {
    return false;
  }
  for (let i = index + 1; i < locales.length; i++) {
    if (isAlmostSameLocale(targetLocale, locales[i])) {
      return true;
    }
  }
  return false;
}
function format(ast) {
  const msg = (ctx) => formatParts(ctx, ast);
  return msg;
}
function formatParts(ctx, ast) {
  const body = ast.b || ast.body;
  if ((body.t || body.type) === 1) {
    const plural = body;
    const cases = plural.c || plural.cases;
    return ctx.plural(cases.reduce((messages, c) => [
      ...messages,
      formatMessageParts(ctx, c)
    ], []));
  } else {
    return formatMessageParts(ctx, body);
  }
}
function formatMessageParts(ctx, node) {
  const _static = node.s || node.static;
  if (_static) {
    return ctx.type === "text" ? _static : ctx.normalize([_static]);
  } else {
    const messages = (node.i || node.items).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
    return ctx.normalize(messages);
  }
}
function formatMessagePart(ctx, node) {
  const type = node.t || node.type;
  switch (type) {
    case 3: {
      const text = node;
      return text.v || text.value;
    }
    case 9: {
      const literal = node;
      return literal.v || literal.value;
    }
    case 4: {
      const named = node;
      return ctx.interpolate(ctx.named(named.k || named.key));
    }
    case 5: {
      const list = node;
      return ctx.interpolate(ctx.list(list.i != null ? list.i : list.index));
    }
    case 6: {
      const linked = node;
      const modifier = linked.m || linked.modifier;
      return ctx.linked(formatMessagePart(ctx, linked.k || linked.key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
    }
    case 7: {
      const linkedKey = node;
      return linkedKey.v || linkedKey.value;
    }
    case 8: {
      const linkedModifier = node;
      return linkedModifier.v || linkedModifier.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${type}`);
  }
}
const WARN_MESSAGE = `Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.`;
function checkHtmlMessage(source, warnHtmlMessage) {
  if (warnHtmlMessage && detectHtmlTag(source)) {
    warn(format$1(WARN_MESSAGE, { source }));
  }
}
const defaultOnCacheKey = (message) => message;
let compileCache = /* @__PURE__ */ Object.create(null);
function onCompileWarn(_warn) {
  if (_warn.code === CompileWarnCodes.USE_MODULO_SYNTAX) {
    warn(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${_warn.message})`);
  }
}
const isMessageAST = (val) => isObject$1(val) && (val.t === 0 || val.type === 0) && ("b" in val || "body" in val);
function baseCompile(message, options = {}) {
  let detectError = false;
  const onError = options.onError || defaultOnError;
  options.onError = (err) => {
    detectError = true;
    onError(err);
  };
  return { ...baseCompile$1(message, options), detectError };
}
function compile(message, context) {
  if (process.env.NODE_ENV !== "production") {
    context.onWarn = onCompileWarn;
  }
  if (isString$1(message)) {
    const warnHtmlMessage = isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
    process.env.NODE_ENV !== "production" && checkHtmlMessage(message, warnHtmlMessage);
    const onCacheKey = context.onCacheKey || defaultOnCacheKey;
    const cacheKey = onCacheKey(message);
    const cached = compileCache[cacheKey];
    if (cached) {
      return cached;
    }
    const { ast, detectError } = baseCompile(message, {
      ...context,
      location: process.env.NODE_ENV !== "production",
      jit: true
    });
    const msg = format(ast);
    return !detectError ? compileCache[cacheKey] = msg : msg;
  } else {
    if (process.env.NODE_ENV !== "production" && !isMessageAST(message)) {
      warn(`the message that is resolve with key '${context.key}' is not supported for jit compilation`);
      return () => message;
    }
    const cacheKey = message.cacheKey;
    if (cacheKey) {
      const cached = compileCache[cacheKey];
      if (cached) {
        return cached;
      }
      return compileCache[cacheKey] = format(message);
    } else {
      return format(message);
    }
  }
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction$1(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
  const [key2, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString$1(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key2 : key2 : fallbackFormat ? !messageCompiler ? () => key2 : key2 : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale2 = getLocale(context, options);
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key2, locale2, fallbackLocale, fallbackWarn, missingWarn) : [
    key2,
    locale2,
    messages[locale2] || {}
  ];
  let format2 = formatScope;
  let cacheBaseKey = key2;
  if (!resolvedMessage && !(isString$1(format2) || isMessageAST(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString$1(format2) || isMessageAST(format2) || isMessageFunction(format2)) || !isString$1(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key2;
  }
  if (process.env.NODE_ENV !== "production" && isString$1(format2) && context.messageCompiler == null) {
    warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key2}'.`);
    return key2;
  }
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key2, targetLocale, format2, cacheBaseKey, onError) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key2) : messaged;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const payloads = {
      timestamp: Date.now(),
      key: isString$1(key2) ? key2 : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString$1(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, /* @__PURE__ */ getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray$1(options.list)) {
    options.list = options.list.map((item) => isString$1(item) ? escapeHtml(item) : item);
  } else if (isObject$1(options.named)) {
    Object.keys(options.named).forEach((key2) => {
      if (isString$1(options.named[key2])) {
        options.named[key2] = escapeHtml(options.named[key2]);
      }
    });
  }
}
function resolveMessageFormat(context, key2, locale2, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale2);
  let message = {};
  let targetLocale;
  let format2 = null;
  let from = locale2;
  let to = null;
  const type = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (process.env.NODE_ENV !== "production" && locale2 !== targetLocale && !isAlmostSameLocale(locale2, targetLocale) && isTranslateFallbackWarn(fallbackWarn, key2)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_TRANSLATE, {
        key: key2,
        target: targetLocale
      }));
    }
    if (process.env.NODE_ENV !== "production" && locale2 !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key: key2,
          from,
          to,
          groupId: `${type}:${key2}`
        });
      }
    }
    message = messages[targetLocale] || {};
    let start = null;
    let startTag;
    let endTag;
    if (process.env.NODE_ENV !== "production" && inBrowser) {
      start = (void 0).performance.now();
      startTag = "intlify-message-resolve-start";
      endTag = "intlify-message-resolve-end";
    }
    if ((format2 = resolveValue2(message, key2)) === null) {
      format2 = message[key2];
    }
    if (process.env.NODE_ENV !== "production" && inBrowser) {
      const end = (void 0).performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start && format2) {
        emitter.emit("message-resolve", {
          type: "message-resolve",
          key: key2,
          message: format2,
          time: end - start,
          groupId: `${type}:${key2}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message resolve", startTag, endTag);
      }
    }
    if (isString$1(format2) || isMessageAST(format2) || isMessageFunction(format2)) {
      break;
    }
    if (!isImplicitFallback(targetLocale, locales)) {
      const missingRet = handleMissing(
        context,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        key2,
        targetLocale,
        missingWarn,
        type
      );
      if (missingRet !== key2) {
        format2 = missingRet;
      }
    }
    from = to;
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key2, targetLocale, format2, cacheBaseKey, onError) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key2;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key2;
    return msg2;
  }
  let start = null;
  let startTag;
  let endTag;
  if (process.env.NODE_ENV !== "production" && inBrowser) {
    start = (void 0).performance.now();
    startTag = "intlify-message-compilation-start";
    endTag = "intlify-message-compilation-end";
  }
  const msg = messageCompiler(format2, getCompileContext(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, onError));
  if (process.env.NODE_ENV !== "production" && inBrowser) {
    const end = (void 0).performance.now();
    const emitter = context.__v_emitter;
    if (emitter && start) {
      emitter.emit("message-compilation", {
        type: "message-compilation",
        message: format2,
        time: end - start,
        groupId: `${"translate"}:${key2}`
      });
    }
    if (startTag && endTag && mark && measure) {
      mark(endTag);
      measure("intlify message compilation", startTag, endTag);
    }
  }
  msg.locale = targetLocale;
  msg.key = key2;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  let start = null;
  let startTag;
  let endTag;
  if (process.env.NODE_ENV !== "production" && inBrowser) {
    start = (void 0).performance.now();
    startTag = "intlify-message-evaluation-start";
    endTag = "intlify-message-evaluation-end";
  }
  const messaged = msg(msgCtx);
  if (process.env.NODE_ENV !== "production" && inBrowser) {
    const end = (void 0).performance.now();
    const emitter = context.__v_emitter;
    if (emitter && start) {
      emitter.emit("message-evaluation", {
        type: "message-evaluation",
        value: messaged,
        time: end - start,
        groupId: `${"translate"}:${msg.key}`
      });
    }
    if (startTag && endTag && mark && measure) {
      mark(endTag);
      measure("intlify message evaluation", startTag, endTag);
    }
  }
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString$1(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key2 = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString$1(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray$1(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString$1(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign(options, arg3);
  }
  return [key2, options];
}
function getCompileContext(context, locale2, key2, source, warnHtmlMessage, onError) {
  return {
    locale: locale2,
    key: key2,
    warnHtmlMessage,
    onError: (err) => {
      onError && onError(err);
      if (process.env.NODE_ENV !== "production") {
        const _source = getSourceForCodeFrame(source);
        const message = `Message compilation error: ${err.message}`;
        const codeFrame = err.location && _source && generateCodeFrame(_source, err.location.start.offset, err.location.end.offset);
        const emitter = context.__v_emitter;
        if (emitter && _source) {
          emitter.emit("compile-error", {
            message: _source,
            error: err.message,
            start: err.location && err.location.start.offset,
            end: err.location && err.location.end.offset,
            groupId: `${"translate"}:${key2}`
          });
        }
        console.error(codeFrame ? `${message}
${codeFrame}` : message);
      } else {
        throw err;
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale2, key2, source2)
  };
}
function getSourceForCodeFrame(source) {
  if (isString$1(source)) {
    return source;
  } else {
    if (source.loc && source.loc.source) {
      return source.loc.source;
    }
  }
}
function getMessageContextOptions(context, locale2, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key2) => {
    let val = resolveValue2(message, key2);
    if (val == null && fallbackContext) {
      const [, , message2] = resolveMessageFormat(fallbackContext, key2, locale2, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue2(message2, key2);
    }
    if (isString$1(val) || isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key2, locale2, val, key2, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale: locale2,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
const intlDefined = typeof Intl !== "undefined";
const Availabilities = {
  dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
  numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
};
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  if (process.env.NODE_ENV !== "production" && !Availabilities.dateTimeFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_DATE));
    return MISSING_RESOLVE_VALUE;
  }
  const [key2, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale2 = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale2
  );
  if (!isString$1(key2) || key2 === "") {
    return new Intl.DateTimeFormat(locale2, overrides).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale2;
  let to = null;
  const type = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (process.env.NODE_ENV !== "production" && locale2 !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key2)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, {
        key: key2,
        target: targetLocale
      }));
    }
    if (process.env.NODE_ENV !== "production" && locale2 !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key: key2,
          from,
          to,
          groupId: `${type}:${key2}`
        });
      }
    }
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key2];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key2, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject(format2) || !isString$1(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key2;
  }
  let id = `${targetLocale}__${key2}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  let value;
  if (isString$1(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString$1(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key2) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key2)) {
        overrides[key2] = arg2[key2];
      } else {
        options[key2] = arg2[key2];
      }
    });
  }
  if (isString$1(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale2, format2) {
  const context = ctx;
  for (const key2 in format2) {
    const id = `${locale2}__${key2}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  if (process.env.NODE_ENV !== "production" && !Availabilities.numberFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_NUMBER));
    return MISSING_RESOLVE_VALUE;
  }
  const [key2, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale2 = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale2
  );
  if (!isString$1(key2) || key2 === "") {
    return new Intl.NumberFormat(locale2, overrides).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale2;
  let to = null;
  const type = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (process.env.NODE_ENV !== "production" && locale2 !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key2)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, {
        key: key2,
        target: targetLocale
      }));
    }
    if (process.env.NODE_ENV !== "production" && locale2 !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key: key2,
          from,
          to,
          groupId: `${type}:${key2}`
        });
      }
    }
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key2];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key2, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject(format2) || !isString$1(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key2;
  }
  let id = `${targetLocale}__${key2}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString$1(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key2) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key2)) {
        overrides[key2] = arg2[key2];
      } else {
        options[key2] = arg2[key2];
      }
    });
  }
  if (isString$1(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale2, format2) {
  const context = ctx;
  for (const key2 in format2) {
    const id = `${locale2}__${key2}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
{
  initFeatureFlags$1();
}
/*!
  * vue-i18n v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.14.1";
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
const code$1 = CoreWarnCodes.__EXTEND_POINT__;
const inc$1 = incrementer(code$1);
const I18nWarnCodes = {
  FALLBACK_TO_ROOT: code$1,
  // 9
  NOT_SUPPORTED_PRESERVE: inc$1(),
  // 10
  NOT_SUPPORTED_FORMATTER: inc$1(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
  // 14
  NOT_FOUND_PARENT_SCOPE: inc$1(),
  // 15
  IGNORE_OBJ_FLATTEN: inc$1(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: inc$1(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: inc$1()
  // 18
};
const warnMessages = {
  [I18nWarnCodes.FALLBACK_TO_ROOT]: `Fall back to {type} '{key}' with root locale.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE]: `Not supported 'preserve'.`,
  [I18nWarnCodes.NOT_SUPPORTED_FORMATTER]: `Not supported 'formatter'.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: `Not supported 'preserveDirectiveContent'.`,
  [I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX]: `Not supported 'getChoiceIndex'.`,
  [I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE]: `Component name legacy compatible: '{name}' -> 'i18n'`,
  [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: `Not found parent scope. use the global scope.`,
  [I18nWarnCodes.IGNORE_OBJ_FLATTEN]: `Ignore object flatten: '{key}' key has an string value`,
  [I18nWarnCodes.NOTICE_DROP_ALLOW_COMPOSITION]: `'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze`,
  [I18nWarnCodes.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: `'translateExistCompatible' option will be dropped in the next major version.`
};
function getWarnMessage(code2, ...args) {
  return format$1(warnMessages[code2], ...args);
}
const code = CoreErrorCodes.__EXTEND_POINT__;
const inc = incrementer(code);
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: code,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: inc(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: inc(),
  // 26
  NOT_INSTALLED: inc(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  // 28
  // directive module errors
  REQUIRED_VALUE: inc(),
  // 29
  INVALID_VALUE: inc(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: inc(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: inc(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  // 37
  // for enhancement
  __EXTEND_POINT__: inc()
  // 38
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, process.env.NODE_ENV !== "production" ? { messages: errorMessages, args } : void 0);
}
const errorMessages = {
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [I18nErrorCodes.INVALID_ARGUMENT]: "Invalid argument",
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [I18nErrorCodes.NOT_INSTALLED]: "Need to install with `app.use` function",
  [I18nErrorCodes.UNEXPECTED_ERROR]: "Unexpected error",
  [I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [I18nErrorCodes.REQUIRED_VALUE]: `Required in value: {0}`,
  [I18nErrorCodes.INVALID_VALUE]: `Invalid value`,
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: `Cannot setup vue-devtools plugin`,
  [I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [I18nErrorCodes.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
};
const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const EnableEmitter = /* @__PURE__ */ makeSymbol("__enableEmitter");
const DisableEmitter = /* @__PURE__ */ makeSymbol("__disableEmitter");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
const DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
function handleFlatJson(obj) {
  if (!isObject$1(obj)) {
    return obj;
  }
  for (const key2 in obj) {
    if (!hasOwn$1(obj, key2)) {
      continue;
    }
    if (!key2.includes(".")) {
      if (isObject$1(obj[key2])) {
        handleFlatJson(obj[key2]);
      }
    } else {
      const subKeys = key2.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        if (!isObject$1(currentObj[subKeys[i]])) {
          process.env.NODE_ENV !== "production" && warn(getWarnMessage(I18nWarnCodes.IGNORE_OBJ_FLATTEN, {
            key: subKeys[i]
          }));
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i]];
      }
      if (!hasStringValue) {
        currentObj[subKeys[lastIndex]] = obj[key2];
        delete obj[key2];
      }
      if (isObject$1(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale2, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages) ? messages : isArray$1(__i18n) ? {} : { [locale2]: {} };
  if (isArray$1(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale22, resource } = custom;
        if (locale22) {
          ret[locale22] = ret[locale22] || {};
          deepCopy(resource, ret[locale22]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString$1(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key2 in ret) {
      if (hasOwn$1(ret, key2)) {
        handleFlatJson(ret[key2]);
      }
    }
  }
  return ret;
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
  let messages = isObject$1(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(gl.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale2) => {
      gl.mergeLocaleMessage(locale2, messages[locale2]);
    });
  }
  {
    if (isObject$1(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale2) => {
          gl.mergeDateTimeFormat(locale2, options.datetimeFormats[locale2]);
        });
      }
    }
    if (isObject$1(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale2) => {
          gl.mergeNumberFormat(locale2, options.numberFormats[locale2]);
        });
      }
    }
  }
}
function createTextNode(key2) {
  return createVNode(Text, null, key2, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
const NOOP_RETURN_ARRAY = () => [];
const NOOP_RETURN_FALSE = () => false;
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale2, key2, type) => {
    return missing(locale2, key2, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = /* @__NO_SIDE_EFFECTS__ */ () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root, __injectWithOption } = options;
  const _isGlobal = __root === void 0;
  const flatJson = options.flatJson;
  const _ref = shallowRef;
  const translateExistCompatible = !!options.translateExistCompatible;
  if (process.env.NODE_ENV !== "production") {
    if (translateExistCompatible && true) {
      warnOnce(getWarnMessage(I18nWarnCodes.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
    }
  }
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString$1(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString$1(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = _ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction$1(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction$1(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    if (process.env.NODE_ENV !== "production") {
      ctxOptions.__v_emitter = isPlainObject(_context) ? _context.__v_emitter : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale2 = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction$1(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function isResolvedTranslateMessage(type, arg) {
    return type !== "translate" || !arg.resolvedMessage;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    try {
      if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
        /* @__PURE__ */ setAdditionalMeta(/* @__PURE__ */ getMetaInfo());
      }
      if (!_isGlobal) {
        _context.fallbackContext = __root ? getFallbackContext() : void 0;
      }
      ret = fn(_context);
    } finally {
      if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) ;
      if (!_isGlobal) {
        _context.fallbackContext = void 0;
      }
    }
    if (warnType !== "translate exists" && // for not `te` (e.g `t`)
    isNumber(ret) && ret === NOT_REOSLVED || warnType === "translate exists" && !ret) {
      const [key2, arg2] = argumentParser();
      if (process.env.NODE_ENV !== "production" && __root && isString$1(key2) && isResolvedTranslateMessage(warnType, arg2)) {
        if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key2) || isTranslateMissingWarn(_missingWarn, key2))) {
          warn(getWarnMessage(I18nWarnCodes.FALLBACK_TO_ROOT, {
            key: key2,
            type: warnType
          }));
        }
        if (process.env.NODE_ENV !== "production") {
          const { __v_emitter: emitter } = _context;
          if (emitter && _fallbackRoot) {
            emitter.emit("fallback", {
              type: warnType,
              key: key2,
              to: "global",
              groupId: `${warnType}:${key2}`
            });
          }
        }
      }
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key2);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key2) => key2, (val) => isString$1(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$1(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$1(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$1(val));
  }
  function normalize(values) {
    return values.map((val) => isString$1(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function translateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[TranslateVNodeSymbol](...args),
      (key2) => [createTextNode(key2)],
      (val) => isArray$1(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[NumberPartsSymbol](...args),
      NOOP_RETURN_ARRAY,
      (val) => isString$1(val) || isArray$1(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[DatetimePartsSymbol](...args),
      NOOP_RETURN_ARRAY,
      (val) => isString$1(val) || isArray$1(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key2, locale22) {
    return wrapWithDeps(() => {
      if (!key2) {
        return false;
      }
      const targetLocale = isString$1(locale22) ? locale22 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      const resolved = _context.messageResolver(message, key2);
      return !translateExistCompatible ? isMessageAST(resolved) || isMessageFunction(resolved) || isString$1(resolved) : resolved != null;
    }, () => [key2], "translate exists", (root) => {
      return Reflect.apply(root.te, root, [key2, locale22]);
    }, NOOP_RETURN_FALSE, (val) => isBoolean(val));
  }
  function resolveMessages(key2) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key2);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key2) {
    const messages2 = resolveMessages(key2);
    return messages2 != null ? messages2 : __root ? __root.tm(key2) || {} : {};
  }
  function getLocaleMessage(locale22) {
    return _messages.value[locale22] || {};
  }
  function setLocaleMessage(locale22, message) {
    if (flatJson) {
      const _message = { [locale22]: message };
      for (const key2 in _message) {
        if (hasOwn$1(_message, key2)) {
          handleFlatJson(_message[key2]);
        }
      }
      message = _message[locale22];
    }
    _messages.value[locale22] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage2(locale22, message) {
    _messages.value[locale22] = _messages.value[locale22] || {};
    const _message = { [locale22]: message };
    if (flatJson) {
      for (const key2 in _message) {
        if (hasOwn$1(_message, key2)) {
          handleFlatJson(_message[key2]);
        }
      }
    }
    message = _message[locale22];
    deepCopy(message, _messages.value[locale22]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale22) {
    return _datetimeFormats.value[locale22] || {};
  }
  function setDateTimeFormat(locale22, format2) {
    _datetimeFormats.value[locale22] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale22, format2);
  }
  function mergeDateTimeFormat(locale22, format2) {
    _datetimeFormats.value[locale22] = assign(_datetimeFormats.value[locale22] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale22, format2);
  }
  function getNumberFormat(locale22) {
    return _numberFormats.value[locale22] || {};
  }
  function setNumberFormat(locale22, format2) {
    _numberFormats.value[locale22] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale22, format2);
  }
  function mergeNumberFormat(locale22, format2) {
    _numberFormats.value[locale22] = assign(_numberFormats.value[locale22] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale22, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale: locale2,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage: mergeLocaleMessage2,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  if (process.env.NODE_ENV !== "production") {
    composer[EnableEmitter] = (emitter) => {
      _context.__v_emitter = emitter;
    };
    composer[DisableEmitter] = () => {
      _context.__v_emitter = void 0;
    };
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        // prettier-ignore
        ...current.type === Fragment ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key2) => {
      const slot = slots[key2];
      if (slot) {
        arg[key2] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key2) => key2 !== "_");
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString$1(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign({}, attrs);
      const tag = isString$1(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  }
});
const Translation = TranslationImpl;
function isVNode(target) {
  return isArray$1(target) && !isString$1(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString$1(props.format)) {
      options.key = props.format;
    } else if (isObject$1(props.format)) {
      if (isString$1(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray$1(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (isString$1(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign({}, attrs);
    const tag = isString$1(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[NumberPartsSymbol](...args)
    ));
  }
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[DatetimePartsSymbol](...args)
    ));
  }
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    if (process.env.NODE_ENV !== "production" && modifiers.preserve) {
      warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE));
    }
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString$1(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale: locale2, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString$1(locale2)) {
    options.locale = locale2;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (process.env.NODE_ENV !== "production" && globalInstall && useI18nComponentName) {
    warn(getWarnMessage(I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE, {
      name: Translation.name
    }));
  }
  if (globalInstall) {
    [!useI18nComponentName ? Translation.name : "i18n", "I18nT"].forEach((name) => app.component(name, Translation));
    [NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
    [DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
const VueDevToolsLabels = {
  [
    "vue-devtools-plugin-vue-i18n"
    /* VueDevToolsIDs.PLUGIN */
  ]: "Vue I18n devtools",
  [
    "vue-i18n-resource-inspector"
    /* VueDevToolsIDs.CUSTOM_INSPECTOR */
  ]: "I18n Resources",
  [
    "vue-i18n-timeline"
    /* VueDevToolsIDs.TIMELINE */
  ]: "Vue I18n"
};
const VueDevToolsPlaceholders = {
  [
    "vue-i18n-resource-inspector"
    /* VueDevToolsIDs.CUSTOM_INSPECTOR */
  ]: "Search for scopes ..."
};
const VueDevToolsTimelineColors = {
  [
    "vue-i18n-timeline"
    /* VueDevToolsIDs.TIMELINE */
  ]: 16764185
};
const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
let devtoolsApi;
async function enableDevTools(app, i18n) {
  return new Promise((resolve2, reject) => {
    try {
      setupDevtoolsPlugin({
        id: "vue-devtools-plugin-vue-i18n",
        label: VueDevToolsLabels[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
        app
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (api2) => {
        devtoolsApi = api2;
        api2.on.visitComponentTree(({ componentInstance, treeNode }) => {
          updateComponentTreeTags(componentInstance, treeNode, i18n);
        });
        api2.on.inspectComponent(({ componentInstance, instanceData }) => {
          if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
            if (i18n.mode === "legacy") {
              if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            } else {
              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
          }
        });
        api2.addInspector({
          id: "vue-i18n-resource-inspector",
          label: VueDevToolsLabels[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: VueDevToolsPlaceholders[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        });
        api2.on.getInspectorTree((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            registerScope(payload, i18n);
          }
        });
        const roots = /* @__PURE__ */ new Map();
        api2.on.getInspectorState(async (payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            api2.unhighlightElement();
            inspectScope(payload, i18n);
            if (payload.nodeId === "global") {
              if (!roots.has(payload.app)) {
                const [root] = await api2.getComponentInstances(payload.app);
                roots.set(payload.app, root);
              }
              api2.highlightElement(roots.get(payload.app));
            } else {
              const instance = getComponentInstance(payload.nodeId, i18n);
              instance && api2.highlightElement(instance);
            }
          }
        });
        api2.on.editInspectorState((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            editScope(payload, i18n);
          }
        });
        api2.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: VueDevToolsLabels[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: VueDevToolsTimelineColors[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        });
        resolve2(true);
      });
    } catch (e) {
      console.error(e);
      reject(false);
    }
  });
}
function getI18nScopeLable(instance) {
  return instance.type.name || instance.type.displayName || instance.type.__file || "Anonymous";
}
function updateComponentTreeTags(instance, treeNode, i18n) {
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
    if (instance.vnode.el.__VUE_I18N__ !== global2) {
      const tag = {
        label: `i18n (${getI18nScopeLable(instance)} Scope)`,
        textColor: 0,
        backgroundColor: 16764185
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type,
    key: "locale",
    editable: true,
    value: composer.locale.value
  });
  instanceData.state.push({
    type,
    key: "availableLocales",
    editable: false,
    value: composer.availableLocales
  });
  instanceData.state.push({
    type,
    key: "fallbackLocale",
    editable: true,
    value: composer.fallbackLocale.value
  });
  instanceData.state.push({
    type,
    key: "inheritLocale",
    editable: true,
    value: composer.inheritLocale
  });
  instanceData.state.push({
    type,
    key: "messages",
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  });
  {
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
}
function getLocaleMessageValue(messages) {
  const value = {};
  Object.keys(messages).forEach((key2) => {
    const v = messages[key2];
    if (isFunction$1(v) && "source" in v) {
      value[key2] = getMessageFunctionDetails(v);
    } else if (isMessageAST(v) && v.loc && v.loc.source) {
      value[key2] = v.loc.source;
    } else if (isObject$1(v)) {
      value[key2] = getLocaleMessageValue(v);
    } else {
      value[key2] = v;
    }
  });
  return value;
}
const ESC = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function escape(s) {
  return s.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a) {
  return ESC[a] || a;
}
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${argString}`
    }
  };
}
function registerScope(payload, i18n) {
  payload.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  for (const [keyInstance, instance] of i18n.__instances) {
    const composer = i18n.mode === "composition" ? instance : instance.__composer;
    if (global2 === composer) {
      continue;
    }
    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${getI18nScopeLable(keyInstance)} Scope`
    });
  }
}
function getComponentInstance(nodeId, i18n) {
  let instance = null;
  if (nodeId !== "global") {
    for (const [component, composer] of i18n.__instances.entries()) {
      if (composer.id.toString() === nodeId) {
        instance = component;
        break;
      }
    }
  }
  return instance;
}
function getComposer$1(nodeId, i18n) {
  if (nodeId === "global") {
    return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  } else {
    const instance = Array.from(i18n.__instances.values()).find((item) => item.id.toString() === nodeId);
    if (instance) {
      return i18n.mode === "composition" ? instance : instance.__composer;
    } else {
      return null;
    }
  }
}
function inspectScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    payload.state = makeScopeInspectState(composer);
  }
  return null;
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = "Locale related info";
  const localeStates = [
    {
      type: localeType,
      key: "locale",
      editable: true,
      value: composer.locale.value
    },
    {
      type: localeType,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    },
    {
      type: localeType,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    },
    {
      type: localeType,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    }
  ];
  state[localeType] = localeStates;
  const localeMessagesType = "Locale messages info";
  const localeMessagesStates = [
    {
      type: localeMessagesType,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    }
  ];
  state[localeMessagesType] = localeMessagesStates;
  {
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
  }
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && "groupId" in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
      }
    });
  }
}
function editScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    const [field] = payload.path;
    if (field === "locale" && isString$1(payload.state.value)) {
      composer.locale.value = payload.state.value;
    } else if (field === "fallbackLocale" && (isString$1(payload.state.value) || isArray$1(payload.state.value) || isObject$1(payload.state.value))) {
      composer.fallbackLocale.value = payload.state.value;
    } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
      composer.inheritLocale = payload.state.value;
    }
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = /* @__PURE__ */ makeSymbol(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  if (process.env.NODE_ENV !== "production") ;
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      // mode
      get mode() {
        return "composition";
      },
      // allowComposition
      get allowComposition() {
        return __allowComposition;
      },
      // install plugin
      async install(app, ...options2) {
        if ((process.env.NODE_ENV !== "production" || false) && true) {
          app.__VUE_I18N__ = i18n;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (isPlainObject(options2[0])) {
          const opts = options2[0];
          i18n.__composerExtend = opts.__composerExtend;
          i18n.__vueI18nExtend = opts.__vueI18nExtend;
        }
        let globalReleaseHandler = null;
        if (__globalInjection) {
          globalReleaseHandler = injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          globalReleaseHandler && globalReleaseHandler();
          i18n.dispose();
          unmountApp();
        };
        if ((process.env.NODE_ENV !== "production" || false) && true) {
          const ret = await enableDevTools(app, i18n);
          if (!ret) {
            throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          }
          const emitter = createEmitter();
          {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      // global accessor
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      // @internal
      __instances,
      // @internal
      __getInstance,
      // @internal
      __setInstance,
      // @internal
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
  }
  const i18n = getI18nInstance(instance);
  const gl = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      if (process.env.NODE_ENV !== "production") {
        warn(getWarnMessage(I18nWarnCodes.NOT_FOUND_PARENT_SCOPE));
      }
      composer2 = gl;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (gl) {
      composerOptions.__root = gl;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
    }
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null) {
    return null;
  }
  {
    return !useComponent ? target.parent : target.vnode.ctx || target.parent;
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    delete app.config.globalProperties.$i18n;
    globalExportMethods.forEach((method) => {
      delete app.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
{
  initFeatureFlags();
}
{
  registerMessageCompiler(compile);
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
if (process.env.NODE_ENV !== "production") ;
function useLocalePath() {
  return wrapComposable(localePath);
}
function useSwitchLocalePath() {
  return wrapComposable(switchLocalePath);
}
const switch_locale_path_ssr_5csfIgkrBP = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin:switch-locale-path-ssr",
  dependsOn: ["i18n:plugin"],
  setup(nuxt) {
    if (nuxt.$config.public.i18n.experimental.switchLocalePathLinkSSR !== true) return;
    const switchLocalePath2 = useSwitchLocalePath();
    const switchLocalePathLinkWrapperExpr = new RegExp(
      [
        `<!--${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-\\[(\\w+)\\]-->`,
        `.+?`,
        `<!--/${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-->`
      ].join(""),
      "g"
    );
    nuxt.hook("app:rendered", (ctx) => {
      var _a;
      if (((_a = ctx.renderResult) == null ? void 0 : _a.html) == null) return;
      ctx.renderResult.html = ctx.renderResult.html.replaceAll(
        switchLocalePathLinkWrapperExpr,
        (match, p1) => match.replace(/href="([^"]+)"/, `href="${encodeURI(switchLocalePath2(p1 ?? ""))}"`)
      );
    });
  }
});
function extendI18n(i18n, {
  locales = [],
  localeCodes: localeCodes2 = [],
  baseUrl = "",
  hooks = {},
  context = {}
} = {}) {
  const scope = effectScope();
  const orgInstall = i18n.install;
  i18n.install = (vue, ...options) => {
    const pluginOptions = isPluginOptions(options[0]) ? assign({}, options[0]) : { inject: true };
    if (pluginOptions.inject == null) {
      pluginOptions.inject = true;
    }
    const orgComposerExtend = pluginOptions.__composerExtend;
    pluginOptions.__composerExtend = (localComposer) => {
      const globalComposer2 = getComposer$3(i18n);
      localComposer.locales = computed(() => globalComposer2.locales.value);
      localComposer.localeCodes = computed(() => globalComposer2.localeCodes.value);
      localComposer.baseUrl = computed(() => globalComposer2.baseUrl.value);
      let orgComposerDispose;
      if (isFunction$1(orgComposerExtend)) {
        orgComposerDispose = Reflect.apply(orgComposerExtend, pluginOptions, [localComposer]);
      }
      return () => {
        orgComposerDispose && orgComposerDispose();
      };
    };
    if (i18n.mode === "legacy") {
      const orgVueI18nExtend = pluginOptions.__vueI18nExtend;
      pluginOptions.__vueI18nExtend = (vueI18n) => {
        extendVueI18n(vueI18n, hooks.onExtendVueI18n);
        let orgVueI18nDispose;
        if (isFunction$1(orgVueI18nExtend)) {
          orgVueI18nDispose = Reflect.apply(orgVueI18nExtend, pluginOptions, [vueI18n]);
        }
        return () => {
          orgVueI18nDispose && orgVueI18nDispose();
        };
      };
    }
    options[0] = pluginOptions;
    Reflect.apply(orgInstall, i18n, [vue, ...options]);
    const globalComposer = getComposer$3(i18n);
    scope.run(() => {
      extendComposer(globalComposer, { locales, localeCodes: localeCodes2, baseUrl, hooks, context });
      if (i18n.mode === "legacy" && isVueI18n(i18n.global)) {
        extendVueI18n(i18n.global, hooks.onExtendVueI18n);
      }
    });
    const app = vue;
    const exported = i18n.mode === "composition" ? app.config.globalProperties.$i18n : null;
    if (exported) {
      extendExportedGlobal(exported, globalComposer, hooks.onExtendExportedGlobal);
    }
    if (pluginOptions.inject) {
      const common = initCommonComposableOptions(i18n);
      vue.mixin({
        methods: {
          getRouteBaseName: wrapComposable(getRouteBaseName, common),
          resolveRoute: wrapComposable(resolveRoute, common),
          localePath: wrapComposable(localePath, common),
          localeRoute: wrapComposable(localeRoute, common),
          localeLocation: wrapComposable(localeLocation, common),
          switchLocalePath: wrapComposable(switchLocalePath, common),
          localeHead: wrapComposable(localeHead, common)
        }
      });
    }
    if (app.unmount) {
      const unmountApp = app.unmount;
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
  return scope;
}
function extendComposer(composer, options) {
  const { locales, localeCodes: localeCodes2, baseUrl, context } = options;
  const _locales = ref(locales);
  const _localeCodes = ref(localeCodes2);
  const _baseUrl = ref("");
  composer.locales = computed(() => _locales.value);
  composer.localeCodes = computed(() => _localeCodes.value);
  composer.baseUrl = computed(() => _baseUrl.value);
  {
    _baseUrl.value = resolveBaseUrl(baseUrl, context);
  }
  if (options.hooks && options.hooks.onExtendComposer) {
    options.hooks.onExtendComposer(composer);
  }
}
function extendPropertyDescriptors(composer, exported, hook) {
  const properties = [
    {
      locales: {
        get() {
          return composer.locales.value;
        }
      },
      localeCodes: {
        get() {
          return composer.localeCodes.value;
        }
      },
      baseUrl: {
        get() {
          return composer.baseUrl.value;
        }
      }
    }
  ];
  hook && properties.push(hook(composer));
  for (const property of properties) {
    for (const [key2, descriptor] of Object.entries(property)) {
      Object.defineProperty(exported, key2, descriptor);
    }
  }
}
function extendExportedGlobal(exported, g, hook) {
  extendPropertyDescriptors(g, exported, hook);
}
function extendVueI18n(vueI18n, hook) {
  const c = getComposer$3(vueI18n);
  extendPropertyDescriptors(c, vueI18n, hook);
}
function isPluginOptions(options) {
  return isObject$1(options) && ("inject" in options || "__composerExtend" in options || "__vueI18nExtend" in options);
}
const i18n_sq1MuCrqbC = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin",
  parallel: parallelPlugin,
  async setup(nuxt) {
    let __temp, __restore;
    const route = useRoute();
    const { vueApp: app } = nuxt;
    const nuxtContext = nuxt;
    const host = getHost();
    const { configLocales, defaultLocale, multiDomainLocales, strategy } = nuxtContext.$config.public.i18n;
    const hasDefaultForDomains = configLocales.some(
      (l) => typeof l !== "string" && Array.isArray(l.defaultForDomains)
    );
    let defaultLocaleDomain;
    if (defaultLocale) {
      defaultLocaleDomain = defaultLocale;
    } else if (hasDefaultForDomains) {
      const findDefaultLocale = configLocales.find(
        (l) => typeof l === "string" || !Array.isArray(l.defaultForDomains) ? false : l.defaultForDomains.includes(host ?? "")
      );
      defaultLocaleDomain = (findDefaultLocale == null ? void 0 : findDefaultLocale.code) ?? "";
    } else {
      defaultLocaleDomain = "";
    }
    if (multiDomainLocales && (strategy === "prefix_except_default" || strategy === "prefix_and_default")) {
      const router = useRouter();
      router.getRoutes().forEach((route2) => {
        var _a;
        if ((_a = route2.name) == null ? void 0 : _a.toString().includes("___default")) {
          const routeNameLocale = route2.name.toString().split("___")[1];
          if (routeNameLocale !== defaultLocaleDomain) {
            router.removeRoute(route2.name);
          } else {
            const newRouteName = route2.name.toString().replace("___default", "");
            route2.name = newRouteName;
          }
        }
      });
    }
    const runtimeI18n = { ...nuxtContext.$config.public.i18n, defaultLocale: defaultLocaleDomain };
    runtimeI18n.baseUrl = extendBaseUrl();
    const _detectBrowserLanguage = runtimeDetectBrowserLanguage();
    const vueI18nOptions = ([__temp, __restore] = executeAsync(() => loadVueI18nOptions(vueI18nConfigs, useNuxtApp())), __temp = await __temp, __restore(), __temp);
    vueI18nOptions.messages = vueI18nOptions.messages || {};
    vueI18nOptions.fallbackLocale = vueI18nOptions.fallbackLocale ?? false;
    const getLocaleFromRoute = createLocaleFromRouteGetter();
    const getDefaultLocale = (locale2) => locale2 || vueI18nOptions.locale || "en-US";
    const localeCookie = getI18nCookie();
    let initialLocale = detectLocale(
      route,
      getLocaleFromRoute,
      getDefaultLocale(runtimeI18n.defaultLocale),
      {
        ssg: "normal",
        callType: "setup",
        firstAccess: true,
        localeCookie: getLocaleCookie(localeCookie, _detectBrowserLanguage, runtimeI18n.defaultLocale)
      },
      runtimeI18n
    );
    vueI18nOptions.messages = ([__temp, __restore] = executeAsync(() => loadInitialMessages(vueI18nOptions.messages, localeLoaders, {
      localeCodes,
      initialLocale,
      lazy: runtimeI18n.lazy,
      defaultLocale: runtimeI18n.defaultLocale,
      fallbackLocale: vueI18nOptions.fallbackLocale
    })), __temp = await __temp, __restore(), __temp);
    initialLocale = getDefaultLocale(initialLocale);
    const i18n = createI18n({ ...vueI18nOptions, locale: initialLocale });
    let notInitialSetup = true;
    const isInitialLocaleSetup = (locale2) => initialLocale !== locale2 && notInitialSetup;
    extendI18n(i18n, {
      locales: runtimeI18n.configLocales,
      localeCodes,
      baseUrl: runtimeI18n.baseUrl,
      context: nuxtContext,
      hooks: {
        onExtendComposer(composer) {
          composer.strategy = runtimeI18n.strategy;
          composer.localeProperties = computed(
            () => normalizedLocales.find((l) => l.code === composer.locale.value) || { code: composer.locale.value }
          );
          composer.setLocale = async (locale2) => {
            const localeSetup = isInitialLocaleSetup(locale2);
            const modified = await loadAndSetLocale(locale2, i18n, runtimeI18n, localeSetup);
            if (modified && localeSetup) {
              notInitialSetup = false;
            }
            const redirectPath = await nuxtContext.runWithContext(
              () => detectRedirect({
                route: { to: route },
                targetLocale: locale2,
                routeLocaleGetter: getLocaleFromRoute
              })
            );
            await nuxtContext.runWithContext(
              async () => await navigate(
                {
                  nuxtApp: nuxtContext,
                  i18n,
                  redirectPath,
                  locale: locale2,
                  route
                },
                { enableNavigate: true }
              )
            );
          };
          composer.loadLocaleMessages = async (locale2) => {
            const setter = (locale22, message) => mergeLocaleMessage(i18n, locale22, message);
            await loadLocale(locale2, localeLoaders, setter);
          };
          composer.differentDomains = runtimeI18n.differentDomains;
          composer.defaultLocale = runtimeI18n.defaultLocale;
          composer.getBrowserLocale = () => getBrowserLocale();
          composer.getLocaleCookie = () => getLocaleCookie(localeCookie, _detectBrowserLanguage, runtimeI18n.defaultLocale);
          composer.setLocaleCookie = (locale2) => setLocaleCookie(localeCookie, locale2, _detectBrowserLanguage);
          composer.onBeforeLanguageSwitch = (oldLocale, newLocale, initialSetup, context) => nuxt.callHook("i18n:beforeLocaleSwitch", { oldLocale, newLocale, initialSetup, context });
          composer.onLanguageSwitched = (oldLocale, newLocale) => nuxt.callHook("i18n:localeSwitched", { oldLocale, newLocale });
          composer.finalizePendingLocaleChange = async () => {
            if (!i18n.__pendingLocale) {
              return;
            }
            setLocale(i18n, i18n.__pendingLocale);
            if (i18n.__resolvePendingLocalePromise) {
              await i18n.__resolvePendingLocalePromise();
            }
            i18n.__pendingLocale = void 0;
          };
          composer.waitForPendingLocaleChange = async () => {
            if (i18n.__pendingLocale && i18n.__pendingLocalePromise) {
              await i18n.__pendingLocalePromise;
            }
          };
        },
        onExtendExportedGlobal(g) {
          return {
            strategy: {
              get() {
                return g.strategy;
              }
            },
            localeProperties: {
              get() {
                return g.localeProperties.value;
              }
            },
            setLocale: {
              get() {
                return async (locale2) => Reflect.apply(g.setLocale, g, [locale2]);
              }
            },
            differentDomains: {
              get() {
                return g.differentDomains;
              }
            },
            defaultLocale: {
              get() {
                return g.defaultLocale;
              }
            },
            getBrowserLocale: {
              get() {
                return () => Reflect.apply(g.getBrowserLocale, g, []);
              }
            },
            getLocaleCookie: {
              get() {
                return () => Reflect.apply(g.getLocaleCookie, g, []);
              }
            },
            setLocaleCookie: {
              get() {
                return (locale2) => Reflect.apply(g.setLocaleCookie, g, [locale2]);
              }
            },
            onBeforeLanguageSwitch: {
              get() {
                return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(g.onBeforeLanguageSwitch, g, [oldLocale, newLocale, initialSetup, context]);
              }
            },
            onLanguageSwitched: {
              get() {
                return (oldLocale, newLocale) => Reflect.apply(g.onLanguageSwitched, g, [oldLocale, newLocale]);
              }
            },
            finalizePendingLocaleChange: {
              get() {
                return () => Reflect.apply(g.finalizePendingLocaleChange, g, []);
              }
            },
            waitForPendingLocaleChange: {
              get() {
                return () => Reflect.apply(g.waitForPendingLocaleChange, g, []);
              }
            }
          };
        },
        onExtendVueI18n(composer) {
          return {
            strategy: {
              get() {
                return composer.strategy;
              }
            },
            localeProperties: {
              get() {
                return composer.localeProperties.value;
              }
            },
            setLocale: {
              get() {
                return async (locale2) => Reflect.apply(composer.setLocale, composer, [locale2]);
              }
            },
            loadLocaleMessages: {
              get() {
                return async (locale2) => Reflect.apply(composer.loadLocaleMessages, composer, [locale2]);
              }
            },
            differentDomains: {
              get() {
                return composer.differentDomains;
              }
            },
            defaultLocale: {
              get() {
                return composer.defaultLocale;
              }
            },
            getBrowserLocale: {
              get() {
                return () => Reflect.apply(composer.getBrowserLocale, composer, []);
              }
            },
            getLocaleCookie: {
              get() {
                return () => Reflect.apply(composer.getLocaleCookie, composer, []);
              }
            },
            setLocaleCookie: {
              get() {
                return (locale2) => Reflect.apply(composer.setLocaleCookie, composer, [locale2]);
              }
            },
            onBeforeLanguageSwitch: {
              get() {
                return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(composer.onBeforeLanguageSwitch, composer, [
                  oldLocale,
                  newLocale,
                  initialSetup,
                  context
                ]);
              }
            },
            onLanguageSwitched: {
              get() {
                return (oldLocale, newLocale) => Reflect.apply(composer.onLanguageSwitched, composer, [oldLocale, newLocale]);
              }
            },
            finalizePendingLocaleChange: {
              get() {
                return () => Reflect.apply(composer.finalizePendingLocaleChange, composer, []);
              }
            },
            waitForPendingLocaleChange: {
              get() {
                return () => Reflect.apply(composer.waitForPendingLocaleChange, composer, []);
              }
            }
          };
        }
      }
    });
    const pluginOptions = {
      __composerExtend: (c) => {
        const g = getComposer$3(i18n);
        c.strategy = g.strategy;
        c.localeProperties = computed(() => g.localeProperties.value);
        c.setLocale = g.setLocale;
        c.differentDomains = g.differentDomains;
        c.getBrowserLocale = g.getBrowserLocale;
        c.getLocaleCookie = g.getLocaleCookie;
        c.setLocaleCookie = g.setLocaleCookie;
        c.onBeforeLanguageSwitch = g.onBeforeLanguageSwitch;
        c.onLanguageSwitched = g.onLanguageSwitched;
        c.finalizePendingLocaleChange = g.finalizePendingLocaleChange;
        c.waitForPendingLocaleChange = g.waitForPendingLocaleChange;
        return () => {
        };
      }
    };
    app.use(i18n, pluginOptions);
    injectNuxtHelpers(nuxtContext, i18n);
    let routeChangeCount = 0;
    addRouteMiddleware(
      "locale-changing",
      /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
        let __temp2, __restore2;
        const locale2 = detectLocale(
          to,
          getLocaleFromRoute,
          () => {
            return getLocale$1(i18n) || getDefaultLocale(runtimeI18n.defaultLocale);
          },
          {
            ssg: "normal",
            callType: "routing",
            firstAccess: routeChangeCount === 0,
            localeCookie: getLocaleCookie(localeCookie, _detectBrowserLanguage, runtimeI18n.defaultLocale)
          },
          runtimeI18n
        );
        const localeSetup = isInitialLocaleSetup(locale2);
        const modified = ([__temp2, __restore2] = executeAsync(() => loadAndSetLocale(locale2, i18n, runtimeI18n, localeSetup)), __temp2 = await __temp2, __restore2(), __temp2);
        if (modified && localeSetup) {
          notInitialSetup = false;
        }
        const redirectPath = ([__temp2, __restore2] = executeAsync(() => nuxtContext.runWithContext(
          () => detectRedirect({
            route: { to, from },
            targetLocale: locale2,
            routeLocaleGetter: runtimeI18n.strategy === "no_prefix" ? () => locale2 : getLocaleFromRoute,
            calledWithRouting: true
          })
        )), __temp2 = await __temp2, __restore2(), __temp2);
        routeChangeCount++;
        return [__temp2, __restore2] = executeAsync(() => nuxtContext.runWithContext(
          async () => navigate({ nuxtApp: nuxtContext, i18n, redirectPath, locale: locale2, route: to })
        )), __temp2 = await __temp2, __restore2(), __temp2;
      }),
      { global: true }
    );
  }
});
const vue_google_maps_obX6kp47OW = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("GoogleMap", GoogleMap);
  nuxtApp.vueApp.component("Marker", Marker);
  nuxtApp.provide("apiKey", apiKey);
});
const apiKey = "AIzaSyC6NsCxLuN120Gy8IkZrqEFhq9JSPkPWD8";
const plugins = [
  unhead_KgADcZ0jPj,
  plugin$1,
  revive_payload_server_eJ33V7gbc6,
  plugin,
  components_plugin_KR1HBZs4kY,
  switch_locale_path_ssr_5csfIgkrBP,
  i18n_sq1MuCrqbC,
  vue_google_maps_obX6kp47OW
];
const isFunction = (val) => typeof val === "function";
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const onRE = /^on[^a-z]/;
const isOn = (key2) => onRE.test(key2);
const cacheStringFunction = (fn) => {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key2) => hasOwnProperty.call(val, key2);
function resolvePropValue(options, props, key2, value) {
  const opt = options[key2];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      value = opt.type !== Function && isFunction(defaultValue) ? defaultValue() : defaultValue;
    }
    if (opt.type === Boolean) {
      if (!hasOwn(props, key2) && !hasDefault) {
        value = false;
      } else if (value === "") {
        value = true;
      }
    }
  }
  return value;
}
function renderHelper(v) {
  let props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let defaultV = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof v === "function") {
    return v(props);
  }
  return v !== null && v !== void 0 ? v : defaultV;
}
function wrapPromiseFn(openFn) {
  let closeFn;
  const closePromise = new Promise((resolve2) => {
    closeFn = openFn(() => {
      resolve2(true);
    });
  });
  const result = () => {
    closeFn === null || closeFn === void 0 ? void 0 : closeFn();
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}
function classNames() {
  const classes = [];
  for (let i = 0; i < arguments.length; i++) {
    const value = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (!value) continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray(value)) {
      for (let i2 = 0; i2 < value.length; i2++) {
        const inner = classNames(value[i2]);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }
  return classes.join(" ");
}
const isValid = (value) => {
  return value !== void 0 && value !== null && value !== "";
};
const splitAttrs = (attrs) => {
  const allAttrs = Object.keys(attrs);
  const eventAttrs = {};
  const onEvents = {};
  const extraAttrs = {};
  for (let i = 0, l = allAttrs.length; i < l; i++) {
    const key2 = allAttrs[i];
    if (isOn(key2)) {
      eventAttrs[key2[2].toLowerCase() + key2.slice(3)] = attrs[key2];
      onEvents[key2] = attrs[key2];
    } else {
      extraAttrs[key2] = attrs[key2];
    }
  }
  return {
    onEvents,
    events: eventAttrs,
    extraAttrs
  };
};
const parseStyleText = function() {
  let cssText = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  let camel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const res = {};
  const listDelimiter = /;(?![^(]*\))/g;
  const propertyDelimiter = /:(.+)/;
  if (typeof cssText === "object") return cssText;
  cssText.split(listDelimiter).forEach(function(item) {
    if (item) {
      const tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        const k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};
const hasProp = (instance, prop) => {
  return instance[prop] !== void 0;
};
const skipFlattenKey = Symbol("skipFlatten");
const flattenChildren = function() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  let filterEmpty2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const temp = Array.isArray(children) ? children : [children];
  const res = [];
  temp.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...flattenChildren(child, filterEmpty2));
    } else if (child && child.type === Fragment) {
      if (child.key === skipFlattenKey) {
        res.push(child);
      } else {
        res.push(...flattenChildren(child.children, filterEmpty2));
      }
    } else if (child && isVNode$1(child)) {
      if (filterEmpty2 && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty2) {
        res.push(child);
      }
    } else if (isValid(child)) {
      res.push(child);
    }
  });
  return res;
};
const getSlot = function(self2) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (isVNode$1(self2)) {
    if (self2.type === Fragment) {
      return name === "default" ? flattenChildren(self2.children) : [];
    } else if (self2.children && self2.children[name]) {
      return flattenChildren(self2.children[name](options));
    } else {
      return [];
    }
  } else {
    const res = self2.$slots[name] && self2.$slots[name](options);
    return flattenChildren(res);
  }
};
const findDOMNode = (instance) => {
  var _a;
  let node = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);
  while (node && !node.tagName) {
    node = node.nextSibling;
  }
  return node;
};
const getOptionProps = (instance) => {
  const res = {};
  if (instance.$ && instance.$.vnode) {
    const props = instance.$.vnode.props || {};
    Object.keys(instance.$props).forEach((k) => {
      const v = instance.$props[k];
      const hyphenateKey = hyphenate(k);
      if (v !== void 0 || hyphenateKey in props) {
        res[k] = v;
      }
    });
  } else if (isVNode$1(instance) && typeof instance.type === "object") {
    const originProps = instance.props || {};
    const props = {};
    Object.keys(originProps).forEach((key2) => {
      props[camelize(key2)] = originProps[key2];
    });
    const options = instance.type.props || {};
    Object.keys(options).forEach((k) => {
      const v = resolvePropValue(options, props, k, props[k]);
      if (v !== void 0 || k in props) {
        res[k] = v;
      }
    });
  }
  return res;
};
const getComponent = function(instance) {
  let prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : instance;
  let execute = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  let com = void 0;
  if (instance.$) {
    const temp = instance[prop];
    if (temp !== void 0) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else {
      com = instance.$slots[prop];
      com = execute && com ? com(options) : com;
    }
  } else if (isVNode$1(instance)) {
    const temp = instance.props && instance.props[prop];
    if (temp !== void 0 && instance.props !== null) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else if (instance.type === Fragment) {
      com = instance.children;
    } else if (instance.children && instance.children[prop]) {
      com = instance.children[prop];
      com = execute && com ? com(options) : com;
    }
  }
  if (Array.isArray(com)) {
    com = flattenChildren(com);
    com = com.length === 1 ? com[0] : com;
    com = com.length === 0 ? void 0 : com;
  }
  return com;
};
function getEvents() {
  let ele = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let on = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  let props = {};
  if (ele.$) {
    props = _extends(_extends({}, props), ele.$attrs);
  } else {
    props = _extends(_extends({}, props), ele.props);
  }
  return splitAttrs(props)[on ? "onEvents" : "events"];
}
function getStyle$1(ele, camel) {
  const props = (isVNode$1(ele) ? ele.props : ele.$attrs) || {};
  let style = props.style || {};
  if (typeof style === "string") {
    style = parseStyleText(style, camel);
  }
  return style;
}
function isFragment(c) {
  return c.length === 1 && c[0].type === Fragment;
}
function isEmptyElement(c) {
  return c && (c.type === Comment || c.type === Fragment && c.children.length === 0 || c.type === Text && c.children.trim() === "");
}
function filterEmpty() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const res = [];
  children.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if ((child === null || child === void 0 ? void 0 : child.type) === Fragment) {
      res.push(...filterEmpty(child.children));
    } else {
      res.push(child);
    }
  });
  return res.filter((c) => !isEmptyElement(c));
}
function isValidElement(element) {
  if (Array.isArray(element) && element.length === 1) {
    element = element[0];
  }
  return element && element.__v_isVNode && typeof element.type !== "symbol";
}
function getPropsSlot(slots, props) {
  let prop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var _a, _b;
  return (_a = props[prop]) !== null && _a !== void 0 ? _a : (_b = slots[prop]) === null || _b === void 0 ? void 0 : _b.call(slots);
}
const tuple = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
const tupleNum = function() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return args;
};
const withInstall = (comp) => {
  const c = comp;
  c.install = function(app) {
    app.component(c.displayName || c.name, comp);
  };
  return comp;
};
function eventType() {
  return {
    type: [Function, Array]
  };
}
function objectType(defaultVal) {
  return {
    type: Object,
    default: defaultVal
  };
}
function booleanType(defaultVal) {
  return {
    type: Boolean,
    default: defaultVal
  };
}
function functionType(defaultVal) {
  return {
    type: Function,
    default: defaultVal
  };
}
function anyType(defaultVal, required) {
  const type = {
    validator: () => true,
    default: defaultVal
  };
  return required ? type : type;
}
function arrayType(defaultVal) {
  return {
    type: Array,
    default: defaultVal
  };
}
function stringType(defaultVal) {
  return {
    type: String,
    default: defaultVal
  };
}
function someType(types, defaultVal) {
  return types ? {
    type: types,
    default: defaultVal
  } : anyType(defaultVal);
}
const defaultIconPrefixCls = "anticon";
const GlobalFormContextKey = Symbol("GlobalFormContextKey");
const useProvideGlobalForm = (state) => {
  provide(GlobalFormContextKey, state);
};
const configProviderProps = () => ({
  iconPrefixCls: String,
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: objectType(),
  input: objectType(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: objectType(),
  pageHeader: objectType(),
  componentSize: {
    type: String
  },
  componentDisabled: {
    type: Boolean,
    default: void 0
  },
  direction: {
    type: String,
    default: "ltr"
  },
  space: objectType(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: true
  },
  form: objectType(),
  pagination: objectType(),
  theme: objectType(),
  select: objectType(),
  wave: objectType()
});
const configProviderKey = Symbol("configProvider");
const defaultConfigProvider = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `ant-${suffixCls}` : "ant";
  },
  iconPrefixCls: computed(() => defaultIconPrefixCls),
  getPopupContainer: computed(() => () => (void 0).body),
  direction: computed(() => "ltr")
};
const useConfigContextInject = () => {
  return inject(configProviderKey, defaultConfigProvider);
};
const useConfigContextProvider = (props) => {
  return provide(configProviderKey, props);
};
const DisabledContextKey = Symbol("DisabledContextKey");
const useInjectDisabled = () => {
  return inject(DisabledContextKey, ref(void 0));
};
const useProviderDisabled = (disabled) => {
  const parentDisabled = useInjectDisabled();
  provide(DisabledContextKey, computed(() => {
    var _a;
    return (_a = disabled.value) !== null && _a !== void 0 ? _a : parentDisabled.value;
  }));
  return disabled;
};
const enUS = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
const locale$3 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const locale$2 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const locale$1 = {
  lang: _extends({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, locale$3),
  timePickerLocale: _extends({}, locale$2)
};
const typeTemplate = "${label} is not a valid ${type}";
const localeValues = {
  locale: "en",
  Pagination: enUS,
  DatePicker: locale$1,
  TimePicker: locale$2,
  Calendar: locale$1,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
};
const LocaleReceiver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const localeData = inject("localeData", {});
    const locale2 = computed(() => {
      const {
        componentName = "global",
        defaultLocale
      } = props;
      const locale3 = defaultLocale || localeValues[componentName || "global"];
      const {
        antLocale
      } = localeData;
      const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends(_extends({}, typeof locale3 === "function" ? locale3() : locale3), localeFromContext || {});
    });
    const localeCode = computed(() => {
      const {
        antLocale
      } = localeData;
      const localeCode2 = antLocale && antLocale.locale;
      if (antLocale && antLocale.exist && !localeCode2) {
        return localeValues.locale;
      }
      return localeCode2;
    });
    return () => {
      const children = props.children || slots.default;
      const {
        antLocale
      } = localeData;
      return children === null || children === void 0 ? void 0 : children(locale2.value, localeCode.value, antLocale);
    };
  }
});
function useLocaleReceiver(componentName, defaultLocale, propsLocale) {
  const localeData = inject("localeData", {});
  const componentLocale = computed(() => {
    const {
      antLocale
    } = localeData;
    const locale2 = unref(defaultLocale) || localeValues[componentName];
    const localeFromContext = antLocale ? antLocale[componentName] : {};
    return _extends(_extends(_extends({}, typeof locale2 === "function" ? locale2() : locale2), localeFromContext || {}), unref(propsLocale) || {});
  });
  return [componentLocale];
}
const SPLIT = "%";
class Entity {
  constructor(instanceId) {
    this.cache = /* @__PURE__ */ new Map();
    this.instanceId = instanceId;
  }
  get(keys) {
    return this.cache.get(Array.isArray(keys) ? keys.join(SPLIT) : keys) || null;
  }
  update(keys, valueFn) {
    const path = Array.isArray(keys) ? keys.join(SPLIT) : keys;
    const prevValue = this.cache.get(path);
    const nextValue = valueFn(prevValue);
    if (nextValue === null) {
      this.cache.delete(path);
    } else {
      this.cache.set(path, nextValue);
    }
  }
}
const ATTR_TOKEN = "data-token-hash";
const ATTR_MARK = "data-css-hash";
const ATTR_CACHE_PATH = "data-cache-path";
const CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
  const cssinjsInstanceId = Math.random().toString(12).slice(2);
  return new Entity(cssinjsInstanceId);
}
const StyleContextKey = Symbol("StyleContextKey");
const getCache = () => {
  var _a, _b, _c;
  const instance = getCurrentInstance();
  let cache2;
  if (instance && instance.appContext) {
    const globalCache = (_c = (_b = (_a = instance.appContext) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.globalProperties) === null || _c === void 0 ? void 0 : _c.__ANTDV_CSSINJS_CACHE__;
    if (globalCache) {
      cache2 = globalCache;
    } else {
      cache2 = createCache();
      if (instance.appContext.config.globalProperties) {
        instance.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = cache2;
      }
    }
  } else {
    cache2 = createCache();
  }
  return cache2;
};
const defaultStyleContext = {
  cache: createCache(),
  defaultCache: true,
  hashPriority: "low"
};
const useStyleInject = () => {
  const cache2 = getCache();
  return inject(StyleContextKey, shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache: cache2
  })));
};
const useStyleProvider = (props) => {
  const parentContext = useStyleInject();
  const context = shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache: createCache()
  }));
  watch([() => unref(props), parentContext], () => {
    const mergedContext = _extends({}, parentContext.value);
    const propsValue = unref(props);
    Object.keys(propsValue).forEach((key2) => {
      const value = propsValue[key2];
      if (propsValue[key2] !== void 0) {
        mergedContext[key2] = value;
      }
    });
    const {
      cache: cache2
    } = propsValue;
    mergedContext.cache = mergedContext.cache || createCache();
    mergedContext.defaultCache = !cache2 && parentContext.value.defaultCache;
    context.value = mergedContext;
  }, {
    immediate: true
  });
  provide(StyleContextKey, context);
  return context;
};
const styleProviderProps = () => ({
  autoClear: booleanType(),
  /** @private Test only. Not work in production. */
  mock: stringType(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: objectType(),
  /** Tell children that this context is default generated context */
  defaultCache: booleanType(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: stringType(),
  /** Tell cssinjs where to inject style in */
  container: someType(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: booleanType(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: arrayType(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: arrayType()
});
const StyleProvider = withInstall(defineComponent({
  name: "AStyleProvider",
  inheritAttrs: false,
  props: styleProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useStyleProvider(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
}));
function useProdHMR() {
  return false;
}
let webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
const useHMR = process.env.NODE_ENV === "production" ? useProdHMR : useDevHMR;
if (process.env.NODE_ENV !== "production" && typeof module !== "undefined" && module && module.hot && false) {
  const win = void 0;
  if (typeof win.webpackHotUpdate === "function") {
    const originWebpackHotUpdate = win.webpackHotUpdate;
    win.webpackHotUpdate = function() {
      webpackHMR = true;
      setTimeout(() => {
        webpackHMR = false;
      }, 0);
      return originWebpackHotUpdate(...arguments);
    };
  }
}
function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
  const styleContext = useStyleInject();
  const fullPathStr = shallowRef("");
  const res = shallowRef();
  watchEffect(() => {
    fullPathStr.value = [prefix, ...keyPath.value].join("%");
  });
  const HMRUpdate = useHMR();
  const clearCache = (pathStr) => {
    styleContext.value.cache.update(pathStr, (prevCache) => {
      const [times = 0, cache2] = prevCache || [];
      const nextCount = times - 1;
      if (nextCount === 0) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache2, false);
        return null;
      }
      return [times - 1, cache2];
    });
  };
  watch(fullPathStr, (newStr, oldStr) => {
    if (oldStr) clearCache(oldStr);
    styleContext.value.cache.update(newStr, (prevCache) => {
      const [times = 0, cache2] = prevCache || [];
      let tmpCache = cache2;
      if (process.env.NODE_ENV !== "production" && cache2 && HMRUpdate) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(tmpCache, HMRUpdate);
        tmpCache = null;
      }
      const mergedCache = tmpCache || cacheFn();
      return [times + 1, mergedCache];
    });
    res.value = styleContext.value.cache.get(fullPathStr.value)[1];
  }, {
    immediate: true
  });
  return res;
}
function canUseDom() {
  return false;
}
function contains(root, n) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n);
  }
  return false;
}
const MARK_KEY = `vc-util-key`;
const containerCache = /* @__PURE__ */ new Map();
function getMark() {
  let {
    mark: mark2
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  if (mark2) {
    return mark2.startsWith("data-") ? mark2 : `data-${mark2}`;
  }
  return MARK_KEY;
}
function getContainer$1(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = (void 0).querySelector("head");
  return head || (void 0).body;
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter((node) => node.tagName === "STYLE");
}
function injectCSS(css) {
  {
    return null;
  }
}
function findExistNode(key2) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const container = getContainer$1(option);
  return findStyles(container).find((node) => node.getAttribute(getMark(option)) === key2);
}
function removeCSS(key2) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const existNode = findExistNode(key2, option);
  if (existNode) {
    const container = getContainer$1(option);
    container.removeChild(existNode);
  }
}
function syncRealContainer(container, option) {
  const cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(void 0, cachedRealContainer)) {
    const placeholderStyle = injectCSS();
    const {
      parentNode
    } = placeholderStyle;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key2) {
  let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _a, _b, _c;
  const container = getContainer$1(option);
  syncRealContainer(container);
  const existNode = findExistNode(key2, option);
  if (existNode) {
    if (((_a = option.csp) === null || _a === void 0 ? void 0 : _a.nonce) && existNode.nonce !== ((_b = option.csp) === null || _b === void 0 ? void 0 : _b.nonce)) {
      existNode.nonce = (_c = option.csp) === null || _c === void 0 ? void 0 : _c.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  const newNode = injectCSS();
  newNode.setAttribute(getMark(option), key2);
  return newNode;
}
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
class ThemeCache {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(derivativeOption) {
    let updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let cache2 = {
      map: this.cache
    };
    derivativeOption.forEach((derivative2) => {
      var _a;
      if (!cache2) {
        cache2 = void 0;
      } else {
        cache2 = (_a = cache2 === null || cache2 === void 0 ? void 0 : cache2.map) === null || _a === void 0 ? void 0 : _a.get(derivative2);
      }
    });
    if ((cache2 === null || cache2 === void 0 ? void 0 : cache2.value) && updateCallTimes) {
      cache2.value[1] = this.cacheCallTimes++;
    }
    return cache2 === null || cache2 === void 0 ? void 0 : cache2.value;
  }
  get(derivativeOption) {
    var _a;
    return (_a = this.internalGet(derivativeOption, true)) === null || _a === void 0 ? void 0 : _a[0];
  }
  has(derivativeOption) {
    return !!this.internalGet(derivativeOption);
  }
  set(derivativeOption, value) {
    if (!this.has(derivativeOption)) {
      if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
        const [targetKey] = this.keys.reduce((result, key2) => {
          const [, callTimes] = result;
          if (this.internalGet(key2)[1] < callTimes) {
            return [key2, this.internalGet(key2)[1]];
          }
          return result;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(targetKey);
      }
      this.keys.push(derivativeOption);
    }
    let cache2 = this.cache;
    derivativeOption.forEach((derivative2, index) => {
      if (index === derivativeOption.length - 1) {
        cache2.set(derivative2, {
          value: [value, this.cacheCallTimes++]
        });
      } else {
        const cacheValue = cache2.get(derivative2);
        if (!cacheValue) {
          cache2.set(derivative2, {
            map: /* @__PURE__ */ new Map()
          });
        } else if (!cacheValue.map) {
          cacheValue.map = /* @__PURE__ */ new Map();
        }
        cache2 = cache2.get(derivative2).map;
      }
    });
  }
  deleteByPath(currentCache, derivatives) {
    var _a;
    const cache2 = currentCache.get(derivatives[0]);
    if (derivatives.length === 1) {
      if (!cache2.map) {
        currentCache.delete(derivatives[0]);
      } else {
        currentCache.set(derivatives[0], {
          map: cache2.map
        });
      }
      return (_a = cache2.value) === null || _a === void 0 ? void 0 : _a[0];
    }
    const result = this.deleteByPath(cache2.map, derivatives.slice(1));
    if ((!cache2.map || cache2.map.size === 0) && !cache2.value) {
      currentCache.delete(derivatives[0]);
    }
    return result;
  }
  delete(derivativeOption) {
    if (this.has(derivativeOption)) {
      this.keys = this.keys.filter((item) => !sameDerivativeOption(item, derivativeOption));
      return this.deleteByPath(this.cache, derivativeOption);
    }
    return void 0;
  }
}
ThemeCache.MAX_CACHE_SIZE = 20;
ThemeCache.MAX_CACHE_OFFSET = 5;
let warned = {};
function warning$1(valid, message) {
  if (process.env.NODE_ENV !== "production" && !valid && console !== void 0) {
    console.error(`Warning: ${message}`);
  }
}
function note(valid, message) {
  if (process.env.NODE_ENV !== "production" && !valid && console !== void 0) {
    console.warn(`Note: ${message}`);
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$1, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
function noop$1() {
}
let warning = noop$1;
if (process.env.NODE_ENV !== "production") {
  warning = (valid, component, message) => {
    warningOnce(valid, `[ant-design-vue: ${component}] ${message}`);
    if (process.env.NODE_ENV === "test") {
      resetWarned();
    }
  };
}
let uuid = 0;
class Theme {
  constructor(derivatives) {
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      warning(derivatives.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function.");
    }
    uuid += 1;
  }
  getDerivativeToken(token) {
    return this.derivatives.reduce((result, derivative2) => derivative2(token, result), void 0);
  }
}
const cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}
const flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token) {
  let str = flattenTokenCache.get(token) || "";
  if (!str) {
    Object.keys(token).forEach((key2) => {
      const value = token[key2];
      str += key2;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && typeof value === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    flattenTokenCache.set(token, str);
  }
  return str;
}
function token2key(token, salt) {
  return hash$1(`${salt}_${flattenToken(token)}`);
}
function supportSelector(styleStr, handleElement, supportCheck) {
  return false;
}
let canLayer = void 0;
function supportLayer() {
  if (canLayer === void 0) {
    canLayer = supportSelector();
  }
  return canLayer;
}
const EMPTY_OVERRIDE = {};
const isProduction = process.env.NODE_ENV === "production";
const isPrerender = process.env.NODE_ENV === "prerender";
const hashPrefix = !isProduction && !isPrerender ? "css-dev-only-do-not-override" : "css";
const tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
const TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  const tokenKeyList = Array.from(tokenKeys.keys());
  const cleanableKeyList = tokenKeyList.filter((key2) => {
    const count = tokenKeys.get(key2) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach((key2) => {
      tokenKeys.delete(key2);
    });
  }
}
const getComputedToken = (originToken, overrideToken, theme, format2) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  let mergedDerivativeToken = _extends(_extends({}, derivativeToken), overrideToken);
  if (format2) {
    mergedDerivativeToken = format2(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
function useCacheToken(theme, tokens) {
  let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ref({});
  const style = useStyleInject();
  const mergedToken = computed(() => _extends({}, ...tokens.value));
  const tokenStr = computed(() => flattenToken(mergedToken.value));
  const overrideTokenStr = computed(() => flattenToken(option.value.override || EMPTY_OVERRIDE));
  const cachedToken = useClientCache("token", computed(() => [option.value.salt || "", theme.value.id, tokenStr.value, overrideTokenStr.value]), () => {
    const {
      salt = "",
      override = EMPTY_OVERRIDE,
      formatToken: formatToken2,
      getComputedToken: compute
    } = option.value;
    const mergedDerivativeToken = compute ? compute(mergedToken.value, override, theme.value) : getComputedToken(mergedToken.value, override, theme.value, formatToken2);
    const tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    recordCleanToken(tokenKey);
    const hashId = `${hashPrefix}-${hash$1(tokenKey)}`;
    mergedDerivativeToken._hashId = hashId;
    return [mergedDerivativeToken, hashId];
  }, (cache2) => {
    var _a;
    cleanTokenStyle(cache2[0]._tokenKey, (_a = style.value) === null || _a === void 0 ? void 0 : _a.cache.instanceId);
  });
  return cachedToken;
}
function lintWarning(message, info) {
  const {
    path,
    parentSelectors
  } = info;
  warningOnce(false, `[Ant Design Vue CSS-in-JS] ${path ? `Error in '${path}': ` : ""}${message}${parentSelectors.length ? ` Selector info: ${parentSelectors.join(" -> ")}` : ""}`);
}
const linter$1 = (key2, value, info) => {
  if (key2 === "content") {
    const contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    const contentValues = ["normal", "none", "initial", "inherit", "unset"];
    if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
      lintWarning(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${value}"'\`.`, info);
    }
  }
};
const linter = (key2, value, info) => {
  if (key2 === "animation") {
    if (info.hashId && value !== "none") {
      lintWarning(`You seem to be using hashed animation '${value}', in which case 'animationName' with Keyframe as value is recommended.`, info);
    }
  }
};
const ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
const CSS_FILE_STYLE = "_FILE_STYLE__";
function serialize(cachePathMap2) {
  return Object.keys(cachePathMap2).map((path) => {
    const hash2 = cachePathMap2[path];
    return `${path}:${hash2}`;
  }).join(";");
}
let cachePathMap;
function prepare() {
  if (!cachePathMap) {
    cachePathMap = {};
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  const hash2 = cachePathMap[path];
  let styleStr = null;
  if (hash2 && canUseDom()) {
    {
      styleStr = CSS_FILE_STYLE;
    }
  }
  return [styleStr, hash2];
}
const isClientSide = canUseDom();
const SKIP_CHECK = "_skip_check_";
const MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr) {
  const serialized = serialize$1(compile$1(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return typeof value === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key2, hashId, hashPriority) {
  if (!hashId) {
    return key2;
  }
  const hashClassName = `.${hashId}`;
  const hashSelector = hashPriority === "low" ? `:where(${hashClassName})` : hashClassName;
  const keys = key2.split(",").map((k) => {
    var _a;
    const fullPath = k.trim().split(/\s+/);
    let firstPath = fullPath[0] || "";
    const htmlElement = ((_a = firstPath.match(/^\w+/)) === null || _a === void 0 ? void 0 : _a[0]) || "";
    firstPath = `${htmlElement}${hashSelector}${firstPath.slice(htmlElement.length)}`;
    return [firstPath, ...fullPath.slice(1)].join(" ");
  });
  return keys.join(",");
}
const globalEffectStyleKeys = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" ? () => globalEffectStyleKeys.clear() : void 0;
const parseStyle = function(interpolation) {
  let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let {
    root,
    injectHash,
    parentSelectors
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: true,
    parentSelectors: []
  };
  const {
    hashId,
    layer,
    path,
    hashPriority,
    transformers = [],
    linters = []
  } = config;
  let styleStr = "";
  let effectStyle = {};
  function parseKeyframes(keyframes) {
    const animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      const [parsedStr] = parseStyle(keyframes.style, config, {
        root: false,
        parentSelectors
      });
      effectStyle[animationName] = `@keyframes ${keyframes.getName(hashId)}${parsedStr}`;
    }
  }
  function flattenList(list) {
    let fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach((item) => {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  const flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach((originStyle) => {
    const style = typeof originStyle === "string" && !root ? {} : originStyle;
    if (typeof style === "string") {
      styleStr += `${style}
`;
    } else if (style._keyframe) {
      parseKeyframes(style);
    } else {
      const mergedStyle = transformers.reduce((prev, trans) => {
        var _a;
        return ((_a = trans === null || trans === void 0 ? void 0 : trans.visit) === null || _a === void 0 ? void 0 : _a.call(trans, prev)) || prev;
      }, style);
      Object.keys(mergedStyle).forEach((key2) => {
        var _a;
        const value = mergedStyle[key2];
        if (typeof value === "object" && value && (key2 !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          let subInjectHash = false;
          let mergedKey = key2.trim();
          let nextRoot = false;
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key2, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          const [parsedStr, childEffectStyle] = parseStyle(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [...parentSelectors, mergedKey]
          });
          effectStyle = _extends(_extends({}, effectStyle), childEffectStyle);
          styleStr += `${mergedKey}${parsedStr}`;
        } else {
          let appendStyle = function(cssKey, cssValue) {
            if (process.env.NODE_ENV !== "production" && (typeof value !== "object" || !(value === null || value === void 0 ? void 0 : value[SKIP_CHECK]))) {
              [linter$1, linter, ...linters].forEach((linter2) => linter2(cssKey, cssValue, {
                path,
                hashId,
                parentSelectors
              }));
            }
            const styleName = cssKey.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
            let formatValue = cssValue;
            if (!unitless[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = `${formatValue}px`;
            }
            if (cssKey === "animationName" && (cssValue === null || cssValue === void 0 ? void 0 : cssValue._keyframe)) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += `${styleName}:${formatValue};`;
          };
          const actualValue = (_a = value === null || value === void 0 ? void 0 : value.value) !== null && _a !== void 0 ? _a : value;
          if (typeof value === "object" && (value === null || value === void 0 ? void 0 : value[MULTI_VALUE]) && Array.isArray(actualValue)) {
            actualValue.forEach((item) => {
              appendStyle(key2, item);
            });
          } else {
            appendStyle(key2, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = `{${styleStr}}`;
  } else if (layer && supportLayer()) {
    const layerCells = layer.split(",");
    const layerName = layerCells[layerCells.length - 1].trim();
    styleStr = `@layer ${layerName} {${styleStr}}`;
    if (layerCells.length > 1) {
      styleStr = `@layer ${layer}{%%%:%}${styleStr}`;
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return hash$1(`${path.join("%")}${styleStr}`);
}
function useStyleRegister(info, styleFn) {
  const styleContext = useStyleInject();
  const tokenKey = computed(() => info.value.token._tokenKey);
  const fullPath = computed(() => [tokenKey.value, ...info.value.path]);
  let isMergedClientSide = isClientSide;
  if (process.env.NODE_ENV !== "production" && styleContext.value.mock !== void 0) {
    isMergedClientSide = styleContext.value.mock === "client";
  }
  useClientCache(
    "style",
    fullPath,
    // Create cache if needed
    () => {
      const {
        path,
        hashId,
        layer,
        nonce,
        clientOnly,
        order = 0
      } = info.value;
      const cachePath = fullPath.value.join("|");
      if (existPath(cachePath)) {
        const [inlineCacheStyleStr, styleHash] = getStyleAndHash(cachePath);
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey.value, styleHash, {}, clientOnly, order];
        }
      }
      const styleObj = styleFn();
      const {
        hashPriority,
        container,
        transformers,
        linters,
        cache: cache2
      } = styleContext.value;
      const [parsedStyle, effectStyle] = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer,
        path: path.join("-"),
        transformers,
        linters
      });
      const styleStr = normalizeStyle(parsedStyle);
      const styleId = uniqueHash(fullPath.value, styleStr);
      if (isMergedClientSide) {
        const mergedCSSConfig = {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: order
        };
        const nonceStr = typeof nonce === "function" ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        const style = updateCSS(styleStr, styleId, mergedCSSConfig);
        style[CSS_IN_JS_INSTANCE] = cache2.instanceId;
        style.setAttribute(ATTR_TOKEN, tokenKey.value);
        if (process.env.NODE_ENV !== "production") {
          style.setAttribute(ATTR_CACHE_PATH, fullPath.value.join("|"));
        }
        Object.keys(effectStyle).forEach((effectKey) => {
          if (!globalEffectStyleKeys.has(effectKey)) {
            globalEffectStyleKeys.add(effectKey);
            updateCSS(normalizeStyle(effectStyle[effectKey]), `_effect-${effectKey}`, {
              mark: ATTR_MARK,
              prepend: "queue",
              attachTo: container
            });
          }
        });
      }
      return [styleStr, tokenKey.value, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    (_ref, fromHMR) => {
      let [, , styleId] = _ref;
      if ((fromHMR || styleContext.value.autoClear) && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    }
  );
  return (node) => {
    return node;
  };
}
function extractStyle(cache2) {
  let plain = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const matchPrefix = `style%`;
  const styleKeys = Array.from(cache2.cache.keys()).filter((key2) => key2.startsWith(matchPrefix));
  const effectStyles = {};
  const cachePathMap2 = {};
  let styleText = "";
  function toStyleStr(style, tokenKey, styleId) {
    let customizeAttrs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const attrs = _extends(_extends({}, customizeAttrs), {
      [ATTR_TOKEN]: tokenKey,
      [ATTR_MARK]: styleId
    });
    const attrStr = Object.keys(attrs).map((attr) => {
      const val = attrs[attr];
      return val ? `${attr}="${val}"` : null;
    }).filter((v) => v).join(" ");
    return plain ? style : `<style ${attrStr}>${style}</style>`;
  }
  const orderStyles = styleKeys.map((key2) => {
    const cachePath = key2.slice(matchPrefix.length).replace(/%/g, "|");
    const [styleStr, tokenKey, styleId, effectStyle, clientOnly, order] = cache2.cache.get(key2)[1];
    if (clientOnly) {
      return null;
    }
    const sharedAttrs = {
      "data-vc-order": "prependQueue",
      "data-vc-priority": `${order}`
    };
    let keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs);
    cachePathMap2[cachePath] = styleId;
    if (effectStyle) {
      Object.keys(effectStyle).forEach((effectKey) => {
        if (!effectStyles[effectKey]) {
          effectStyles[effectKey] = true;
          keyStyleText += toStyleStr(normalizeStyle(effectStyle[effectKey]), tokenKey, `_effect-${effectKey}`, sharedAttrs);
        }
      });
    }
    const ret = [order, keyStyleText];
    return ret;
  }).filter((o) => o);
  orderStyles.sort((o1, o2) => o1[0] - o2[0]).forEach((_ref2) => {
    let [, style] = _ref2;
    styleText += style;
  });
  styleText += toStyleStr(`.${ATTR_CACHE_MAP}{content:"${serialize(cachePathMap2)}";}`, void 0, void 0, {
    [ATTR_CACHE_MAP]: ATTR_CACHE_MAP
  });
  return styleText;
}
class Keyframe {
  constructor(name, style) {
    this._keyframe = true;
    this.name = name;
    this.style = style;
  }
  getName() {
    let hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return hashId ? `${hashId}-${this.name}` : this.name;
  }
}
const version = "4.2.5";
const genControlHeight = (token) => {
  const {
    controlHeight
  } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    sizeXL: sizeUnit * (sizeStep + 4),
    sizeLG: sizeUnit * (sizeStep + 2),
    sizeMD: sizeUnit * (sizeStep + 1),
    sizeMS: sizeUnit * sizeStep,
    size: sizeUnit * sizeStep,
    sizeSM: sizeUnit * (sizeStep - 1),
    sizeXS: sizeUnit * (sizeStep - 2),
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}
const defaultPresetColors = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
const seedToken = _extends(_extends({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false
});
function genColorMapToken(seed2, _ref) {
  let {
    generateColorPalettes: generateColorPalettes2,
    generateNeutralColorPalettes: generateNeutralColorPalettes2
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed2;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  return _extends(_extends({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase > 16 ? 16 : radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
function genCommonMapToken(token) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token;
  return _extends({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, genRadius(borderRadius));
}
const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
const generateColorPalettes = (baseColor) => {
  const colors = generate$1(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor$1(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
    colorFill: getAlphaColor$1(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.pow(2.71828, i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}
const genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
function derivative(token) {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = generate$1(token[colorKey]);
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = _extends(_extends({}, prev), cur);
    return prev;
  }, {});
  return _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, token), colorPalettes), genColorMapToken(token, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken(token.fontSize)), genSizeMapToken(token)), genControlHeight(token)), genCommonMapToken(token));
}
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new TinyColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var __rest$6 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function formatToken(derivativeToken) {
  const {
    override
  } = derivativeToken, restToken = __rest$6(derivativeToken, ["override"]);
  const overrideTokens = _extends({}, override);
  Object.keys(seedToken).forEach((token) => {
    delete overrideTokens[token];
  });
  const mergedToken = _extends(_extends({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  const screenXXXL = 2e3;
  const aliasToken = _extends(_extends(_extends({}, mergedToken), {
    colorLink: mergedToken.colorInfoText,
    colorLinkHover: mergedToken.colorInfoHover,
    colorLinkActive: mergedToken.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    screenXXLMax: screenXXXL - 1,
    screenXXXL,
    screenXXXLMin: screenXXXL,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), overrideTokens);
  return aliasToken;
}
const textEllipsis = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
const resetComponent = (token) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: token.fontFamily
});
const resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
});
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
});
const genLinkStyle = (token) => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${token.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: token.colorLinkHover
    },
    "&:active": {
      color: token.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
const genCommonStyle = (token, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [rootPrefixSelector]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
const genFocusOutline = (token) => ({
  outline: `${token.lineWidthBold}px solid ${token.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
});
const genFocusStyle = (token) => ({
  "&:focus-visible": _extends({}, genFocusOutline(token))
});
function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return (_prefixCls) => {
    const prefixCls = computed(() => _prefixCls === null || _prefixCls === void 0 ? void 0 : _prefixCls.value);
    const [theme, token, hashId] = useToken();
    const {
      getPrefixCls,
      iconPrefixCls
    } = useConfigContextInject();
    const rootPrefixCls = computed(() => getPrefixCls());
    const sharedInfo = computed(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: ["Shared", rootPrefixCls.value]
      };
    });
    useStyleRegister(sharedInfo, () => [{
      // Link
      "&": genLinkStyle(token.value)
    }]);
    const componentInfo = computed(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: [component, prefixCls.value, iconPrefixCls.value]
      };
    });
    return [useStyleRegister(componentInfo, () => {
      const {
        token: proxyToken,
        flush
      } = statisticToken(token.value);
      const defaultComponentToken = typeof getDefaultToken === "function" ? getDefaultToken(proxyToken) : getDefaultToken;
      const mergedComponentToken = _extends(_extends({}, defaultComponentToken), token.value[component]);
      const componentCls = `.${prefixCls.value}`;
      const mergedToken = merge(proxyToken, {
        componentCls,
        prefixCls: prefixCls.value,
        iconCls: `.${iconPrefixCls.value}`,
        antCls: `.${rootPrefixCls.value}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId: hashId.value,
        prefixCls: prefixCls.value,
        rootPrefixCls: rootPrefixCls.value,
        iconPrefixCls: iconPrefixCls.value,
        overrideComponentToken: token.value[component]
      });
      flush(component, mergedComponentToken);
      return [genCommonStyle(token.value, prefixCls.value), styleInterpolation];
    }), hashId];
  };
}
const enableStatistic = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC !== "undefined";
let recording = true;
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return _extends({}, ...objs);
  }
  recording = false;
  const ret = {};
  objs.forEach((obj) => {
    const keys = Object.keys(obj);
    keys.forEach((key2) => {
      Object.defineProperty(ret, key2, {
        configurable: true,
        enumerable: true,
        get: () => obj[key2]
      });
    });
  });
  recording = true;
  return ret;
}
function noop() {
}
function statisticToken(token) {
  let tokenKeys2;
  let proxy = token;
  let flush = noop;
  if (enableStatistic) {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys2.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      ({
        global: Array.from(tokenKeys2),
        component: componentToken
      });
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush
  };
}
const defaultTheme = createTheme(derivative);
const defaultConfig = {
  token: seedToken,
  hashed: true
};
const DesignTokenContextKey = Symbol("DesignTokenContext");
const globalDesignTokenApi = shallowRef();
const useDesignTokenProvider = (value) => {
  provide(DesignTokenContextKey, value);
  watch(value, () => {
    globalDesignTokenApi.value = unref(value);
    triggerRef(globalDesignTokenApi);
  }, {
    immediate: true,
    deep: true
  });
};
const DesignTokenProvider = defineComponent({
  props: {
    value: objectType()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useDesignTokenProvider(computed(() => props.value));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
function useToken() {
  const designTokenContext = inject(DesignTokenContextKey, computed(() => globalDesignTokenApi.value || defaultConfig));
  const salt = computed(() => `${version}-${designTokenContext.value.hashed || ""}`);
  const mergedTheme = computed(() => designTokenContext.value.theme || defaultTheme);
  const cacheToken = useCacheToken(mergedTheme, computed(() => [seedToken, designTokenContext.value.token]), computed(() => ({
    salt: salt.value,
    override: _extends({
      override: designTokenContext.value.token
    }, designTokenContext.value.components),
    formatToken
  })));
  return [mergedTheme, computed(() => cacheToken.value[0]), computed(() => designTokenContext.value.hashed ? cacheToken.value[1] : "")];
}
const Empty$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token] = useToken();
    const themeStyle = computed(() => {
      const bgColor = new TinyColor(token.value.colorBgBase);
      if (bgColor.toHsl().l < 0.5) {
        return {
          opacity: 0.65
        };
      }
      return {};
    });
    return () => createVNode("svg", {
      "style": themeStyle.value,
      "width": "184",
      "height": "152",
      "viewBox": "0 0 184 152",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("g", {
      "transform": "translate(24 31.67)"
    }, [createVNode("ellipse", {
      "fill-opacity": ".8",
      "fill": "#F5F5F7",
      "cx": "67.797",
      "cy": "106.89",
      "rx": "67.797",
      "ry": "12.668"
    }, null), createVNode("path", {
      "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      "fill": "#AEB8C2"
    }, null), createVNode("path", {
      "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      "fill": "url(#linearGradient-1)",
      "transform": "translate(13.56)"
    }, null), createVNode("path", {
      "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      "fill": "#F5F5F7"
    }, null), createVNode("path", {
      "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      "fill": "#DCE0E6"
    }, null)]), createVNode("path", {
      "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      "fill": "#DCE0E6"
    }, null), createVNode("g", {
      "transform": "translate(149.65 15.383)",
      "fill": "#FFF"
    }, [createVNode("ellipse", {
      "cx": "20.654",
      "cy": "3.167",
      "rx": "2.849",
      "ry": "2.815"
    }, null), createVNode("path", {
      "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Empty$2.PRESENTED_IMAGE_DEFAULT = true;
const Simple = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token] = useToken();
    const color = computed(() => {
      const {
        colorFill,
        colorFillTertiary,
        colorFillQuaternary,
        colorBgContainer
      } = token.value;
      return {
        borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexString(),
        shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexString(),
        contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexString()
      };
    });
    return () => createVNode("svg", {
      "width": "64",
      "height": "41",
      "viewBox": "0 0 64 41",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      "transform": "translate(0 1)",
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("ellipse", {
      "fill": color.value.shadowColor,
      "cx": "32",
      "cy": "33",
      "rx": "32",
      "ry": "7"
    }, null), createVNode("g", {
      "fill-rule": "nonzero",
      "stroke": color.value.borderColor
    }, [createVNode("path", {
      "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), createVNode("path", {
      "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      "fill": color.value.contentColor
    }, null)])])]);
  }
});
Simple.PRESENTED_IMAGE_SIMPLE = true;
const genSharedEmptyStyle = (token) => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      "&-normal": {
        marginBlock: marginXL,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: marginXS,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
const useStyle$3 = genComponentStyleHook("Empty", (token) => {
  const {
    componentCls,
    controlHeightLG
  } = token;
  const emptyToken = merge(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});
var __rest$5 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const emptyProps = () => ({
  prefixCls: String,
  imageStyle: objectType(),
  image: anyType(),
  description: anyType()
});
const Empty = defineComponent({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: emptyProps(),
  setup(props, _ref) {
    let {
      slots = {},
      attrs
    } = _ref;
    const {
      direction,
      prefixCls: prefixClsRef
    } = useConfigInject("empty", props);
    const [wrapSSR, hashId] = useStyle$3(prefixClsRef);
    return () => {
      var _a, _b;
      const prefixCls = prefixClsRef.value;
      const _c = _extends(_extends({}, props), attrs), {
        image: mergedImage = ((_a = slots.image) === null || _a === void 0 ? void 0 : _a.call(slots)) || h(Empty$2),
        description = ((_b = slots.description) === null || _b === void 0 ? void 0 : _b.call(slots)) || void 0,
        imageStyle,
        class: className = ""
      } = _c, restProps = __rest$5(_c, ["image", "description", "imageStyle", "class"]);
      const image = typeof mergedImage === "function" ? mergedImage() : mergedImage;
      const isNormal = typeof image === "object" && "type" in image && image.type.PRESENTED_IMAGE_SIMPLE;
      return wrapSSR(createVNode(LocaleReceiver, {
        "componentName": "Empty",
        "children": (locale2) => {
          const des = typeof description !== "undefined" ? description : locale2.description;
          const alt = typeof des === "string" ? des : "empty";
          let imageNode = null;
          if (typeof image === "string") {
            imageNode = createVNode("img", {
              "alt": alt,
              "src": image
            }, null);
          } else {
            imageNode = image;
          }
          return createVNode("div", _objectSpread({
            "class": classNames(prefixCls, className, hashId.value, {
              [`${prefixCls}-normal`]: isNormal,
              [`${prefixCls}-rtl`]: direction.value === "rtl"
            })
          }, restProps), [createVNode("div", {
            "class": `${prefixCls}-image`,
            "style": imageStyle
          }, [imageNode]), des && createVNode("p", {
            "class": `${prefixCls}-description`
          }, [des]), slots.default && createVNode("div", {
            "class": `${prefixCls}-footer`
          }, [filterEmpty(slots.default())])]);
        }
      }, null));
    };
  }
});
Empty.PRESENTED_IMAGE_DEFAULT = () => h(Empty$2);
Empty.PRESENTED_IMAGE_SIMPLE = () => h(Simple);
const Empty$1 = withInstall(Empty);
const DefaultRenderEmpty = (props) => {
  const {
    prefixCls
  } = useConfigInject("empty", props);
  const renderHtml = (componentName) => {
    switch (componentName) {
      case "Table":
      case "List":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE,
          "class": `${prefixCls.value}-small`
        }, null);
      default:
        return createVNode(Empty$1, null, null);
    }
  };
  return renderHtml(props.componentName);
};
function renderEmpty(componentName) {
  return createVNode(DefaultRenderEmpty, {
    "componentName": componentName
  }, null);
}
const SizeContextKey = Symbol("SizeContextKey");
const useInjectSize = () => {
  return inject(SizeContextKey, ref(void 0));
};
const useProviderSize = (size) => {
  const parentSize = useInjectSize();
  provide(SizeContextKey, computed(() => size.value || parentSize.value));
  return size;
};
const useConfigInject = (name, props) => {
  const sizeContext = useInjectSize();
  const disabledContext = useInjectDisabled();
  const configProvider = inject(configProviderKey, _extends(_extends({}, defaultConfigProvider), {
    renderEmpty: (name2) => h(DefaultRenderEmpty, {
      componentName: name2
    })
  }));
  const prefixCls = computed(() => configProvider.getPrefixCls(name, props.prefixCls));
  const direction = computed(() => {
    var _a, _b;
    return (_a = props.direction) !== null && _a !== void 0 ? _a : (_b = configProvider.direction) === null || _b === void 0 ? void 0 : _b.value;
  });
  const iconPrefixCls = computed(() => {
    var _a;
    return (_a = props.iconPrefixCls) !== null && _a !== void 0 ? _a : configProvider.iconPrefixCls.value;
  });
  const rootPrefixCls = computed(() => configProvider.getPrefixCls());
  const autoInsertSpaceInButton = computed(() => {
    var _a;
    return (_a = configProvider.autoInsertSpaceInButton) === null || _a === void 0 ? void 0 : _a.value;
  });
  const renderEmpty2 = configProvider.renderEmpty;
  const space = configProvider.space;
  const pageHeader = configProvider.pageHeader;
  const form = configProvider.form;
  const getTargetContainer = computed(() => {
    var _a, _b;
    return (_a = props.getTargetContainer) !== null && _a !== void 0 ? _a : (_b = configProvider.getTargetContainer) === null || _b === void 0 ? void 0 : _b.value;
  });
  const getPopupContainer = computed(() => {
    var _a, _b, _c;
    return (_b = (_a = props.getContainer) !== null && _a !== void 0 ? _a : props.getPopupContainer) !== null && _b !== void 0 ? _b : (_c = configProvider.getPopupContainer) === null || _c === void 0 ? void 0 : _c.value;
  });
  const dropdownMatchSelectWidth = computed(() => {
    var _a, _b;
    return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = configProvider.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
  });
  const virtual = computed(() => {
    var _a;
    return (props.virtual === void 0 ? ((_a = configProvider.virtual) === null || _a === void 0 ? void 0 : _a.value) !== false : props.virtual !== false) && dropdownMatchSelectWidth.value !== false;
  });
  const size = computed(() => props.size || sizeContext.value);
  const autocomplete = computed(() => {
    var _a, _b, _c;
    return (_a = props.autocomplete) !== null && _a !== void 0 ? _a : (_c = (_b = configProvider.input) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.autocomplete;
  });
  const disabled = computed(() => {
    var _a;
    return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
  });
  const csp = computed(() => {
    var _a;
    return (_a = props.csp) !== null && _a !== void 0 ? _a : configProvider.csp;
  });
  const wave = computed(() => {
    var _a, _b;
    return (_a = props.wave) !== null && _a !== void 0 ? _a : (_b = configProvider.wave) === null || _b === void 0 ? void 0 : _b.value;
  });
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    getPopupContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty: renderEmpty2,
    virtual,
    dropdownMatchSelectWidth,
    rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete,
    csp,
    iconPrefixCls,
    disabled,
    select: configProvider.select,
    wave
  };
};
const PropTypes = createTypes({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
PropTypes.extend([{
  name: "looseBool",
  getter: true,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: true,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: true,
  type: null
}]);
function getMotion$1(_ref) {
  let {
    prefixCls,
    animation,
    transitionName: transitionName2
  } = _ref;
  if (animation) {
    return {
      name: `${prefixCls}-${animation}`
    };
  }
  if (transitionName2) {
    return {
      name: transitionName2
    };
  }
  return {};
}
tuple("bottomLeft", "bottomRight", "topLeft", "topRight");
const getTransitionDirection = (placement) => {
  if (placement !== void 0 && (placement === "topLeft" || placement === "topRight")) {
    return `slide-down`;
  }
  return `slide-up`;
};
const getTransitionProps = function(transitionName2) {
  let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const transitionProps = transitionName2 ? _extends({
    name: transitionName2,
    appear: true,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${transitionName2}-enter ${transitionName2}-enter-prepare ${transitionName2}-enter-start`,
    enterActiveClass: `${transitionName2}-enter ${transitionName2}-enter-prepare`,
    enterToClass: `${transitionName2}-enter ${transitionName2}-enter-active`,
    leaveFromClass: ` ${transitionName2}-leave`,
    leaveActiveClass: `${transitionName2}-leave ${transitionName2}-leave-active`,
    leaveToClass: `${transitionName2}-leave ${transitionName2}-leave-active`
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};
const getTransitionGroupProps = function(transitionName2) {
  let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const transitionProps = transitionName2 ? _extends({
    name: transitionName2,
    appear: true,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: `${transitionName2}`,
    appearToClass: `${transitionName2}-appear ${transitionName2}-appear-active`,
    enterFromClass: `${transitionName2}-appear ${transitionName2}-enter ${transitionName2}-appear-prepare ${transitionName2}-enter-prepare`,
    enterActiveClass: `${transitionName2}`,
    enterToClass: `${transitionName2}-enter ${transitionName2}-appear ${transitionName2}-appear-active ${transitionName2}-enter-active`,
    leaveActiveClass: `${transitionName2} ${transitionName2}-leave`,
    leaveToClass: `${transitionName2}-leave-active`
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};
const getTransitionName = (rootPrefixCls, motion, transitionName2) => {
  if (transitionName2 !== void 0) {
    return transitionName2;
  }
  return `${rootPrefixCls}-${motion}`;
};
const PortalContextKey = Symbol("PortalContextKey");
const useProvidePortal = function(instance) {
  let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: true
  };
  provide(PortalContextKey, {
    inTriggerContext: config.inTriggerContext,
    shouldRender: computed(() => {
      const {
        sPopupVisible,
        popupRef,
        forceRender,
        autoDestroy
      } = instance || {};
      let shouldRender = false;
      if (sPopupVisible || popupRef || forceRender) {
        shouldRender = true;
      }
      if (!sPopupVisible && autoDestroy) {
        shouldRender = false;
      }
      return shouldRender;
    })
  });
};
const useInjectPortal = () => {
  useProvidePortal({}, {
    inTriggerContext: false
  });
  const portalContext = inject(PortalContextKey, {
    shouldRender: computed(() => false),
    inTriggerContext: false
  });
  return {
    shouldRender: computed(() => portalContext.shouldRender.value || portalContext.inTriggerContext === false)
  };
};
const Portal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: false,
  props: {
    getContainer: PropTypes.func.isRequired,
    didUpdate: Function
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    let container;
    const {
      shouldRender
    } = useInjectPortal();
    const stopWatch = watch(shouldRender, () => {
      if (shouldRender.value && !container) {
        container = props.getContainer();
      }
      if (container) {
        stopWatch();
      }
    });
    return () => {
      var _a;
      if (!shouldRender.value) return null;
      {
        return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      }
    };
  }
});
let runtimeLocale = _extends({}, localeValues.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends(_extends({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = _extends({}, localeValues.Modal);
  }
}
const ANT_MARK = "internalMark";
const LocaleProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    warning(props.ANT_MARK__ === ANT_MARK, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const state = reactive({
      antLocale: _extends(_extends({}, props.locale), {
        exist: true
      }),
      ANT_MARK__: ANT_MARK
    });
    provide("localeData", state);
    watch(() => props.locale, (locale2) => {
      changeConfirmLocale(locale2 && locale2.Modal);
      state.antLocale = _extends(_extends({}, locale2), {
        exist: true
      });
    }, {
      immediate: true
    });
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
LocaleProvider.install = function(app) {
  app.component(LocaleProvider.name, LocaleProvider);
  return app;
};
const locale = withInstall(LocaleProvider);
const Notice = defineComponent({
  name: "Notice",
  inheritAttrs: false,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    let closeTimer;
    let isUnMounted = false;
    const duration = computed(() => props.duration === void 0 ? 4.5 : props.duration);
    const startCloseTimer = () => {
      if (duration.value && !isUnMounted) {
        closeTimer = setTimeout(() => {
          close();
        }, duration.value * 1e3);
      }
    };
    const clearCloseTimer = () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
    };
    const close = (e) => {
      if (e) {
        e.stopPropagation();
      }
      clearCloseTimer();
      const {
        onClose,
        noticeKey
      } = props;
      if (onClose) {
        onClose(noticeKey);
      }
    };
    const restartCloseTimer = () => {
      clearCloseTimer();
      startCloseTimer();
    };
    watch([duration, () => props.updateMark, () => props.visible], (_ref2, _ref3) => {
      let [preDuration, preUpdateMark, preVisible] = _ref2;
      let [newDuration, newUpdateMark, newVisible] = _ref3;
      if (preDuration !== newDuration || preUpdateMark !== newUpdateMark || preVisible !== newVisible && newVisible) {
        restartCloseTimer();
      }
    }, {
      flush: "post"
    });
    return () => {
      var _a, _b;
      const {
        prefixCls,
        closable,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots),
        onClick,
        holder
      } = props;
      const {
        class: className,
        style
      } = attrs;
      const componentClass = `${prefixCls}-notice`;
      const dataOrAriaAttributeProps = Object.keys(attrs).reduce((acc, key2) => {
        if (key2.startsWith("data-") || key2.startsWith("aria-") || key2 === "role") {
          acc[key2] = attrs[key2];
        }
        return acc;
      }, {});
      const node = createVNode("div", _objectSpread({
        "class": classNames(componentClass, className, {
          [`${componentClass}-closable`]: closable
        }),
        "style": style,
        "onMouseenter": clearCloseTimer,
        "onMouseleave": startCloseTimer,
        "onClick": onClick
      }, dataOrAriaAttributeProps), [createVNode("div", {
        "class": `${componentClass}-content`
      }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)]), closable ? createVNode("a", {
        "tabindex": 0,
        "onClick": close,
        "class": `${componentClass}-close`
      }, [closeIcon || createVNode("span", {
        "class": `${componentClass}-close-x`
      }, null)]) : null]);
      if (holder) {
        return createVNode(Teleport, {
          "to": holder
        }, {
          default: () => node
        });
      }
      return node;
    };
  }
});
var __rest$4 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
let seed$1 = 0;
const now$1 = Date.now();
function getUuid$1() {
  const id = seed$1;
  seed$1 += 1;
  return `rcNotification_${now$1}_${id}`;
}
const Notification$1 = defineComponent({
  name: "Notification",
  inheritAttrs: false,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(props, _ref) {
    let {
      attrs,
      expose,
      slots
    } = _ref;
    const hookRefs = /* @__PURE__ */ new Map();
    const notices = ref([]);
    const transitionProps = computed(() => {
      const {
        prefixCls,
        animation = "fade"
      } = props;
      let name = props.transitionName;
      if (!name && animation) {
        name = `${prefixCls}-${animation}`;
      }
      return getTransitionGroupProps(name);
    });
    const add = (originNotice, holderCallback) => {
      const key2 = originNotice.key || getUuid$1();
      const notice2 = _extends(_extends({}, originNotice), {
        key: key2
      });
      const {
        maxCount: maxCount2
      } = props;
      const noticeIndex = notices.value.map((v) => v.notice.key).indexOf(key2);
      const updatedNotices = notices.value.concat();
      if (noticeIndex !== -1) {
        updatedNotices.splice(noticeIndex, 1, {
          notice: notice2,
          holderCallback
        });
      } else {
        if (maxCount2 && notices.value.length >= maxCount2) {
          notice2.key = updatedNotices[0].notice.key;
          notice2.updateMark = getUuid$1();
          notice2.userPassKey = key2;
          updatedNotices.shift();
        }
        updatedNotices.push({
          notice: notice2,
          holderCallback
        });
      }
      notices.value = updatedNotices;
    };
    const remove = (removeKey) => {
      notices.value = toRaw(notices.value).filter((_ref2) => {
        let {
          notice: {
            key: key2,
            userPassKey
          }
        } = _ref2;
        const mergedKey = userPassKey || key2;
        return mergedKey !== removeKey;
      });
    };
    expose({
      add,
      remove,
      notices
    });
    return () => {
      var _a;
      const {
        prefixCls,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots, {
          prefixCls
        })
      } = props;
      const noticeNodes = notices.value.map((_ref3, index) => {
        let {
          notice: notice2,
          holderCallback
        } = _ref3;
        const updateMark = index === notices.value.length - 1 ? notice2.updateMark : void 0;
        const {
          key: key2,
          userPassKey
        } = notice2;
        const {
          content
        } = notice2;
        const noticeProps = _extends(_extends(_extends({
          prefixCls,
          closeIcon: typeof closeIcon === "function" ? closeIcon({
            prefixCls
          }) : closeIcon
        }, notice2), notice2.props), {
          key: key2,
          noticeKey: userPassKey || key2,
          updateMark,
          onClose: (noticeKey) => {
            var _a2;
            remove(noticeKey);
            (_a2 = notice2.onClose) === null || _a2 === void 0 ? void 0 : _a2.call(notice2);
          },
          onClick: notice2.onClick
        });
        if (holderCallback) {
          return createVNode("div", {
            "key": key2,
            "class": `${prefixCls}-hook-holder`,
            "ref": (div) => {
              if (typeof key2 === "undefined") {
                return;
              }
              if (div) {
                hookRefs.set(key2, div);
                holderCallback(div, noticeProps);
              } else {
                hookRefs.delete(key2);
              }
            }
          }, null);
        }
        return createVNode(Notice, _objectSpread(_objectSpread({}, noticeProps), {}, {
          "class": classNames(noticeProps.class, props.hashId)
        }), {
          default: () => [typeof content === "function" ? content({
            prefixCls
          }) : content]
        });
      });
      const className = {
        [prefixCls]: 1,
        [attrs.class]: !!attrs.class,
        [props.hashId]: true
      };
      return createVNode("div", {
        "class": className,
        "style": attrs.style || {
          top: "65px",
          left: "50%"
        }
      }, [createVNode(TransitionGroup, _objectSpread({
        "tag": "div"
      }, transitionProps.value), {
        default: () => [noticeNodes]
      })]);
    };
  }
});
Notification$1.newInstance = function newNotificationInstance(properties, callback) {
  const _a = properties || {}, {
    name = "notification",
    getContainer: getContainer2,
    appContext,
    prefixCls: customizePrefixCls,
    rootPrefixCls: customRootPrefixCls,
    transitionName: customTransitionName,
    hasTransitionName: hasTransitionName2,
    useStyle: useStyle2
  } = _a, props = __rest$4(_a, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]);
  const div = (void 0).createElement("div");
  if (getContainer2) {
    const root = getContainer2();
    root.appendChild(div);
  } else {
    (void 0).body.appendChild(div);
  }
  const Wrapper = defineComponent({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(_props, _ref4) {
      let {
        attrs
      } = _ref4;
      const notiRef = shallowRef();
      const prefixCls = computed(() => globalConfigForApi.getPrefixCls(name, customizePrefixCls));
      const [, hashId] = useStyle2(prefixCls);
      return () => {
        const global2 = globalConfigForApi;
        const rootPrefixCls = global2.getRootPrefixCls(customRootPrefixCls, prefixCls.value);
        const transitionName2 = hasTransitionName2 ? customTransitionName : `${prefixCls.value}-${customTransitionName}`;
        return createVNode(ConfigProvider, _objectSpread(_objectSpread({}, global2), {}, {
          "prefixCls": rootPrefixCls
        }), {
          default: () => [createVNode(Notification$1, _objectSpread(_objectSpread({
            "ref": notiRef
          }, attrs), {}, {
            "prefixCls": prefixCls.value,
            "transitionName": transitionName2,
            "hashId": hashId.value
          }), null)]
        });
      };
    }
  });
  const vm = createVNode(Wrapper, props);
  vm.appContext = appContext || vm.appContext;
  render(vm, div);
};
let seed = 0;
const now = Date.now();
function getUuid() {
  const id = seed;
  seed += 1;
  return `rcNotification_${now}_${id}`;
}
const Notification = defineComponent({
  name: "HookNotification",
  inheritAttrs: false,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const hookRefs = /* @__PURE__ */ new Map();
    const notices = computed(() => props.notices);
    const transitionProps = computed(() => {
      let name = props.transitionName;
      if (!name && props.animation) {
        switch (typeof props.animation) {
          case "string":
            name = props.animation;
            break;
          case "function":
            name = props.animation().name;
            break;
          case "object":
            name = props.animation.name;
            break;
          default:
            name = `${props.prefixCls}-fade`;
            break;
        }
      }
      return getTransitionGroupProps(name);
    });
    const remove = (key2) => props.remove(key2);
    const placements = ref({});
    watch(notices, () => {
      const nextPlacements = {};
      Object.keys(placements.value).forEach((placement) => {
        nextPlacements[placement] = [];
      });
      props.notices.forEach((config) => {
        const {
          placement = "topRight"
        } = config.notice;
        if (placement) {
          nextPlacements[placement] = nextPlacements[placement] || [];
          nextPlacements[placement].push(config);
        }
      });
      placements.value = nextPlacements;
    });
    const placementList = computed(() => Object.keys(placements.value));
    return () => {
      var _a;
      const {
        prefixCls,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots, {
          prefixCls
        })
      } = props;
      const noticeNodes = placementList.value.map((placement) => {
        var _a2, _b;
        const noticesForPlacement = placements.value[placement];
        const classes = (_a2 = props.getClassName) === null || _a2 === void 0 ? void 0 : _a2.call(props, placement);
        const styles = (_b = props.getStyles) === null || _b === void 0 ? void 0 : _b.call(props, placement);
        const noticeNodesForPlacement = noticesForPlacement.map((_ref2, index) => {
          let {
            notice: notice2,
            holderCallback
          } = _ref2;
          const updateMark = index === notices.value.length - 1 ? notice2.updateMark : void 0;
          const {
            key: key2,
            userPassKey
          } = notice2;
          const {
            content
          } = notice2;
          const noticeProps = _extends(_extends(_extends({
            prefixCls,
            closeIcon: typeof closeIcon === "function" ? closeIcon({
              prefixCls
            }) : closeIcon
          }, notice2), notice2.props), {
            key: key2,
            noticeKey: userPassKey || key2,
            updateMark,
            onClose: (noticeKey) => {
              var _a3;
              remove(noticeKey);
              (_a3 = notice2.onClose) === null || _a3 === void 0 ? void 0 : _a3.call(notice2);
            },
            onClick: notice2.onClick
          });
          if (holderCallback) {
            return createVNode("div", {
              "key": key2,
              "class": `${prefixCls}-hook-holder`,
              "ref": (div) => {
                if (typeof key2 === "undefined") {
                  return;
                }
                if (div) {
                  hookRefs.set(key2, div);
                  holderCallback(div, noticeProps);
                } else {
                  hookRefs.delete(key2);
                }
              }
            }, null);
          }
          return createVNode(Notice, _objectSpread(_objectSpread({}, noticeProps), {}, {
            "class": classNames(noticeProps.class, props.hashId)
          }), {
            default: () => [typeof content === "function" ? content({
              prefixCls
            }) : content]
          });
        });
        const className = {
          [prefixCls]: 1,
          [`${prefixCls}-${placement}`]: 1,
          [attrs.class]: !!attrs.class,
          [props.hashId]: true,
          [classes]: !!classes
        };
        function onAfterLeave() {
          var _a3;
          if (noticesForPlacement.length > 0) {
            return;
          }
          Reflect.deleteProperty(placements.value, placement);
          (_a3 = props.onAllRemoved) === null || _a3 === void 0 ? void 0 : _a3.call(props);
        }
        return createVNode("div", {
          "key": placement,
          "class": className,
          "style": attrs.style || styles || {
            top: "65px",
            left: "50%"
          }
        }, [createVNode(TransitionGroup, _objectSpread(_objectSpread({
          "tag": "div"
        }, transitionProps.value), {}, {
          "onAfterLeave": onAfterLeave
        }), {
          default: () => [noticeNodesForPlacement]
        })]);
      });
      return createVNode(Portal, {
        "getContainer": props.getContainer
      }, {
        default: () => [noticeNodes]
      });
    };
  }
});
var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const defaultGetContainer$1 = () => (void 0).body;
let uniqueKey = 0;
function mergeConfig() {
  const clone = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key2) => {
        const val = obj[key2];
        if (val !== void 0) {
          clone[key2] = val;
        }
      });
    }
  });
  return clone;
}
function useNotification$1() {
  let rootConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: getContainer2 = defaultGetContainer$1,
    motion,
    prefixCls,
    maxCount: maxCount2,
    getClassName,
    getStyles,
    onAllRemoved
  } = rootConfig, shareConfig = __rest$3(rootConfig, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]);
  const notices = shallowRef([]);
  const notificationsRef = shallowRef();
  const add = (originNotice, holderCallback) => {
    const key2 = originNotice.key || getUuid();
    const notice2 = _extends(_extends({}, originNotice), {
      key: key2
    });
    const noticeIndex = notices.value.map((v) => v.notice.key).indexOf(key2);
    const updatedNotices = notices.value.concat();
    if (noticeIndex !== -1) {
      updatedNotices.splice(noticeIndex, 1, {
        notice: notice2,
        holderCallback
      });
    } else {
      if (maxCount2 && notices.value.length >= maxCount2) {
        notice2.key = updatedNotices[0].notice.key;
        notice2.updateMark = getUuid();
        notice2.userPassKey = key2;
        updatedNotices.shift();
      }
      updatedNotices.push({
        notice: notice2,
        holderCallback
      });
    }
    notices.value = updatedNotices;
  };
  const removeNotice = (removeKey) => {
    notices.value = notices.value.filter((_ref) => {
      let {
        notice: {
          key: key2,
          userPassKey
        }
      } = _ref;
      const mergedKey = userPassKey || key2;
      return mergedKey !== removeKey;
    });
  };
  const destroy = () => {
    notices.value = [];
  };
  const contextHolder = () => createVNode(Notification, {
    "ref": notificationsRef,
    "prefixCls": prefixCls,
    "maxCount": maxCount2,
    "notices": notices.value,
    "remove": removeNotice,
    "getClassName": getClassName,
    "getStyles": getStyles,
    "animation": motion,
    "hashId": rootConfig.hashId,
    "onAllRemoved": onAllRemoved,
    "getContainer": getContainer2
  }, null);
  const taskQueue = shallowRef([]);
  const api2 = {
    open: (config) => {
      const mergedConfig = mergeConfig(shareConfig, config);
      if (mergedConfig.key === null || mergedConfig.key === void 0) {
        mergedConfig.key = `vc-notification-${uniqueKey}`;
        uniqueKey += 1;
      }
      taskQueue.value = [...taskQueue.value, {
        type: "open",
        config: mergedConfig
      }];
    },
    close: (key2) => {
      taskQueue.value = [...taskQueue.value, {
        type: "close",
        key: key2
      }];
    },
    destroy: () => {
      taskQueue.value = [...taskQueue.value, {
        type: "destroy"
      }];
    }
  };
  watch(taskQueue, () => {
    if (taskQueue.value.length) {
      taskQueue.value.forEach((task) => {
        switch (task.type) {
          case "open":
            add(task.config);
            break;
          case "close":
            removeNotice(task.key);
            break;
          case "destroy":
            destroy();
            break;
        }
      });
      taskQueue.value = [];
    }
  });
  return [api2, contextHolder];
}
const genMessageStyle = (token) => {
  const {
    componentCls,
    iconCls,
    boxShadowSecondary,
    colorBgElevated,
    colorSuccess,
    colorError,
    colorWarning,
    colorInfo,
    fontSizeLG,
    motionEaseInOutCirc,
    motionDurationSlow,
    marginXS,
    paddingXS,
    borderRadiusLG,
    zIndexPopup,
    // Custom token
    messageNoticeContentPadding
  } = token;
  const messageMoveIn = new Keyframe("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: paddingXS,
      transform: "translateY(0)",
      opacity: 1
    }
  });
  const messageMoveOut = new Keyframe("MessageMoveOut", {
    "0%": {
      maxHeight: token.height,
      padding: paddingXS,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        position: "fixed",
        top: marginXS,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: zIndexPopup,
        [`${componentCls}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
          animationName: messageMoveIn,
          animationDuration: motionDurationSlow,
          animationPlayState: "paused",
          animationTimingFunction: motionEaseInOutCirc
        },
        [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${componentCls}-move-up-leave`]: {
          animationName: messageMoveOut,
          animationDuration: motionDurationSlow,
          animationPlayState: "paused",
          animationTimingFunction: motionEaseInOutCirc
        },
        [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [`${componentCls}-notice`]: {
        padding: paddingXS,
        textAlign: "center",
        [iconCls]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: marginXS,
          fontSize: fontSizeLG
        },
        [`${componentCls}-notice-content`]: {
          display: "inline-block",
          padding: messageNoticeContentPadding,
          background: colorBgElevated,
          borderRadius: borderRadiusLG,
          boxShadow: boxShadowSecondary,
          pointerEvents: "all"
        },
        [`${componentCls}-success ${iconCls}`]: {
          color: colorSuccess
        },
        [`${componentCls}-error ${iconCls}`]: {
          color: colorError
        },
        [`${componentCls}-warning ${iconCls}`]: {
          color: colorWarning
        },
        [`
        ${componentCls}-info ${iconCls},
        ${componentCls}-loading ${iconCls}`]: {
          color: colorInfo
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${componentCls}-notice-pure-panel`]: {
        padding: 0,
        textAlign: "start"
      }
    }
  ];
};
const useStyle$2 = genComponentStyleHook("Message", (token) => {
  const combinedToken = merge(token, {
    messageNoticeContentPadding: `${(token.controlHeightLG - token.fontSize * token.lineHeight) / 2}px ${token.paddingSM}px`
  });
  return [genMessageStyle(combinedToken)];
}, (token) => ({
  height: 150,
  zIndexPopup: token.zIndexPopupBase + 10
}));
const TypeIcon = {
  info: createVNode(InfoCircleFilled, null, null),
  success: createVNode(CheckCircleFilled, null, null),
  error: createVNode(CloseCircleFilled, null, null),
  warning: createVNode(ExclamationCircleFilled, null, null),
  loading: createVNode(LoadingOutlined, null, null)
};
const PureContent$1 = defineComponent({
  name: "PureContent",
  inheritAttrs: false,
  props: ["prefixCls", "type", "icon"],
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      var _a;
      return createVNode("div", {
        "class": classNames(`${props.prefixCls}-custom-content`, `${props.prefixCls}-${props.type}`)
      }, [props.icon || TypeIcon[props.type], createVNode("span", null, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
    };
  }
});
defineComponent({
  name: "PurePanel",
  inheritAttrs: false,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(props, _ref2) {
    let {
      slots,
      attrs
    } = _ref2;
    var _a;
    const {
      getPrefixCls
    } = useConfigContextInject();
    const prefixCls = computed(() => props.prefixCls || getPrefixCls("message"));
    const [, hashId] = useStyle$2(prefixCls);
    return createVNode(Notice, _objectSpread(_objectSpread({}, attrs), {}, {
      "prefixCls": prefixCls.value,
      "class": classNames(hashId.value, `${prefixCls.value}-notice-pure-panel`),
      "noticeKey": "pure",
      "duration": null
    }), {
      default: () => [createVNode(PureContent$1, {
        "prefixCls": prefixCls.value,
        "type": props.type,
        "icon": props.icon
      }, {
        default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
      })]
    });
  }
});
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DEFAULT_OFFSET$1 = 8;
const DEFAULT_DURATION$1 = 3;
const Holder$1 = defineComponent({
  name: "Holder",
  inheritAttrs: false,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved", "animation", "staticGetContainer"],
  setup(props, _ref) {
    let {
      expose
    } = _ref;
    var _a, _b;
    const {
      getPrefixCls,
      getPopupContainer
    } = useConfigInject("message", props);
    const prefixCls = computed(() => getPrefixCls("message", props.prefixCls));
    const [, hashId] = useStyle$2(prefixCls);
    const getStyles = () => {
      var _a2;
      const top = (_a2 = props.top) !== null && _a2 !== void 0 ? _a2 : DEFAULT_OFFSET$1;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof top === "number" ? `${top}px` : top
      };
    };
    const getClassName = () => classNames(hashId.value, props.rtl ? `${prefixCls.value}-rtl` : "");
    const getNotificationMotion = () => {
      var _a2;
      return getMotion$1({
        prefixCls: prefixCls.value,
        animation: (_a2 = props.animation) !== null && _a2 !== void 0 ? _a2 : `move-up`,
        transitionName: props.transitionName
      });
    };
    const mergedCloseIcon = createVNode("span", {
      "class": `${prefixCls.value}-close-x`
    }, [createVNode(CloseOutlined, {
      "class": `${prefixCls.value}-close-icon`
    }, null)]);
    const [api2, holder] = useNotification$1({
      //@ts-ignore
      getStyles,
      prefixCls: prefixCls.value,
      getClassName,
      motion: getNotificationMotion,
      closable: false,
      closeIcon: mergedCloseIcon,
      duration: (_a = props.duration) !== null && _a !== void 0 ? _a : DEFAULT_DURATION$1,
      getContainer: (_b = props.staticGetContainer) !== null && _b !== void 0 ? _b : getPopupContainer.value,
      maxCount: props.maxCount,
      onAllRemoved: props.onAllRemoved
    });
    expose(_extends(_extends({}, api2), {
      prefixCls,
      hashId
    }));
    return holder;
  }
});
let keyIndex = 0;
function useInternalMessage(messageConfig) {
  const holderRef = shallowRef(null);
  const holderKey = Symbol("messageHolderKey");
  const close = (key2) => {
    var _a;
    (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.close(key2);
  };
  const open = (config) => {
    if (!holderRef.value) {
      const fakeResult = () => {
      };
      fakeResult.then = () => {
      };
      return fakeResult;
    }
    const {
      open: originOpen,
      prefixCls,
      hashId
    } = holderRef.value;
    const noticePrefixCls = `${prefixCls}-notice`;
    const {
      content,
      icon,
      type,
      key: key2,
      class: className,
      onClose
    } = config, restConfig = __rest$2(config, ["content", "icon", "type", "key", "class", "onClose"]);
    let mergedKey = key2;
    if (mergedKey === void 0 || mergedKey === null) {
      keyIndex += 1;
      mergedKey = `antd-message-${keyIndex}`;
    }
    return wrapPromiseFn((resolve2) => {
      originOpen(_extends(_extends({}, restConfig), {
        key: mergedKey,
        content: () => createVNode(PureContent$1, {
          "prefixCls": prefixCls,
          "type": type,
          "icon": typeof icon === "function" ? icon() : icon
        }, {
          default: () => [typeof content === "function" ? content() : content]
        }),
        placement: "top",
        // @ts-ignore
        class: classNames(type && `${noticePrefixCls}-${type}`, hashId, className),
        onClose: () => {
          onClose === null || onClose === void 0 ? void 0 : onClose();
          resolve2();
        }
      }));
      return () => {
        close(mergedKey);
      };
    });
  };
  const destroy = (key2) => {
    var _a;
    if (key2 !== void 0) {
      close(key2);
    } else {
      (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.destroy();
    }
  };
  const wrapAPI = {
    open,
    destroy
  };
  const keys = ["info", "success", "warning", "error", "loading"];
  keys.forEach((type) => {
    const typeOpen = (jointContent, duration, onClose) => {
      let config;
      if (jointContent && typeof jointContent === "object" && "content" in jointContent) {
        config = jointContent;
      } else {
        config = {
          content: jointContent
        };
      }
      let mergedDuration;
      let mergedOnClose;
      if (typeof duration === "function") {
        mergedOnClose = duration;
      } else {
        mergedDuration = duration;
        mergedOnClose = onClose;
      }
      const mergedConfig = _extends(_extends({
        onClose: mergedOnClose,
        duration: mergedDuration
      }, config), {
        type
      });
      return open(mergedConfig);
    };
    wrapAPI[type] = typeOpen;
  });
  return [wrapAPI, () => createVNode(Holder$1, _objectSpread(_objectSpread({
    "key": holderKey
  }, messageConfig), {}, {
    "ref": holderRef
  }), null)];
}
function useMessage(messageConfig) {
  return useInternalMessage(messageConfig);
}
let defaultDuration$1 = 3;
let defaultTop$1;
let messageInstance;
let key = 1;
let localPrefixCls = "";
let transitionName = "move-up";
let hasTransitionName = false;
let getContainer = () => (void 0).body;
let maxCount$1;
let rtl$1 = false;
function getKeyThenIncreaseKey() {
  return key++;
}
function setMessageConfig(options) {
  if (options.top !== void 0) {
    defaultTop$1 = options.top;
    messageInstance = null;
  }
  if (options.duration !== void 0) {
    defaultDuration$1 = options.duration;
  }
  if (options.prefixCls !== void 0) {
    localPrefixCls = options.prefixCls;
  }
  if (options.getContainer !== void 0) {
    getContainer = options.getContainer;
    messageInstance = null;
  }
  if (options.transitionName !== void 0) {
    transitionName = options.transitionName;
    messageInstance = null;
    hasTransitionName = true;
  }
  if (options.maxCount !== void 0) {
    maxCount$1 = options.maxCount;
    messageInstance = null;
  }
  if (options.rtl !== void 0) {
    rtl$1 = options.rtl;
  }
}
function getMessageInstance(args, callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  Notification$1.newInstance({
    appContext: args.appContext,
    prefixCls: args.prefixCls || localPrefixCls,
    rootPrefixCls: args.rootPrefixCls,
    transitionName,
    hasTransitionName,
    style: {
      top: defaultTop$1
    },
    getContainer: getContainer || args.getPopupContainer,
    maxCount: maxCount$1,
    name: "message",
    useStyle: useStyle$2
  }, (instance) => {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  });
}
const typeToIcon$2 = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
  loading: LoadingOutlined
};
const typeList = Object.keys(typeToIcon$2);
function notice$1(args) {
  const duration = args.duration !== void 0 ? args.duration : defaultDuration$1;
  const target = args.key || getKeyThenIncreaseKey();
  const closePromise = new Promise((resolve2) => {
    const callback = () => {
      if (typeof args.onClose === "function") {
        args.onClose();
      }
      return resolve2(true);
    };
    getMessageInstance(args, (instance) => {
      instance.notice({
        key: target,
        duration,
        style: args.style || {},
        class: args.class,
        content: (_ref) => {
          let {
            prefixCls
          } = _ref;
          const Icon = typeToIcon$2[args.type];
          const iconNode = Icon ? createVNode(Icon, null, null) : "";
          const messageClass = classNames(`${prefixCls}-custom-content`, {
            [`${prefixCls}-${args.type}`]: args.type,
            [`${prefixCls}-rtl`]: rtl$1 === true
          });
          return createVNode("div", {
            "class": messageClass
          }, [typeof args.icon === "function" ? args.icon() : args.icon || iconNode, createVNode("span", null, [typeof args.content === "function" ? args.content() : args.content])]);
        },
        onClose: callback,
        onClick: args.onClick
      });
    });
  });
  const result = () => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}
function isArgsProps(content) {
  return Object.prototype.toString.call(content) === "[object Object]" && !!content.content;
}
const api$1 = {
  open: notice$1,
  config: setMessageConfig,
  destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        const {
          removeNotice
        } = messageInstance;
        removeNotice(messageKey);
      } else {
        const {
          destroy
        } = messageInstance;
        destroy();
        messageInstance = null;
      }
    }
  }
};
function attachTypeApi(originalApi, type) {
  originalApi[type] = (content, duration, onClose) => {
    if (isArgsProps(content)) {
      return originalApi.open(_extends(_extends({}, content), {
        type
      }));
    }
    if (typeof duration === "function") {
      onClose = duration;
      duration = void 0;
    }
    return originalApi.open({
      content,
      duration,
      type,
      onClose
    });
  };
}
typeList.forEach((type) => attachTypeApi(api$1, type));
api$1.warn = api$1.warning;
api$1.useMessage = useMessage;
const genNotificationPlacementStyle = (token) => {
  const {
    componentCls,
    width,
    notificationMarginEdge
  } = token;
  const notificationTopFadeIn = new Keyframe("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  });
  const notificationBottomFadeIn = new Keyframe("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  });
  const notificationLeftFadeIn = new Keyframe("antNotificationLeftFadeIn", {
    "0%": {
      right: {
        _skip_check_: true,
        value: width
      },
      opacity: 0
    },
    "100%": {
      right: {
        _skip_check_: true,
        value: 0
      },
      opacity: 1
    }
  });
  return {
    [`&${componentCls}-top, &${componentCls}-bottom`]: {
      marginInline: 0
    },
    [`&${componentCls}-top`]: {
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationName: notificationTopFadeIn
      }
    },
    [`&${componentCls}-bottom`]: {
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationName: notificationBottomFadeIn
      }
    },
    [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: notificationMarginEdge,
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationName: notificationLeftFadeIn
      }
    }
  };
};
const genNotificationStyle = (token) => {
  const {
    iconCls,
    componentCls,
    // .ant-notification
    boxShadowSecondary,
    fontSizeLG,
    notificationMarginBottom,
    borderRadiusLG,
    colorSuccess,
    colorInfo,
    colorWarning,
    colorError,
    colorTextHeading,
    notificationBg,
    notificationPadding,
    notificationMarginEdge,
    motionDurationMid,
    motionEaseInOut,
    fontSize,
    lineHeight,
    width,
    notificationIconSize
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const notificationFadeIn = new Keyframe("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: true,
        value: width
      },
      opacity: 0
    },
    "100%": {
      left: {
        _skip_check_: true,
        value: 0
      },
      opacity: 1
    }
  });
  const notificationFadeOut = new Keyframe("antNotificationFadeOut", {
    "0%": {
      maxHeight: token.animationMaxHeight,
      marginBottom: notificationMarginBottom,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token)), {
        position: "fixed",
        zIndex: token.zIndexPopup,
        marginInlineEnd: notificationMarginEdge,
        [`${componentCls}-hook-holder`]: {
          position: "relative"
        },
        [`&${componentCls}-top, &${componentCls}-bottom`]: {
          [`${componentCls}-notice`]: {
            marginInline: "auto auto"
          }
        },
        [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
          [`${componentCls}-notice`]: {
            marginInlineEnd: "auto",
            marginInlineStart: 0
          }
        },
        //  animation
        [`${componentCls}-fade-enter, ${componentCls}-fade-appear`]: {
          animationDuration: token.motionDurationMid,
          animationTimingFunction: motionEaseInOut,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${componentCls}-fade-leave`]: {
          animationTimingFunction: motionEaseInOut,
          animationFillMode: "both",
          animationDuration: motionDurationMid,
          animationPlayState: "paused"
        },
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: notificationFadeIn,
          animationPlayState: "running"
        },
        [`${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
          animationName: notificationFadeOut,
          animationPlayState: "running"
        }
      }), genNotificationPlacementStyle(token)), {
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${componentCls}-notice-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [noticeCls]: {
        position: "relative",
        width,
        maxWidth: `calc(100vw - ${notificationMarginEdge * 2}px)`,
        marginBottom: notificationMarginBottom,
        marginInlineStart: "auto",
        padding: notificationPadding,
        overflow: "hidden",
        lineHeight,
        wordWrap: "break-word",
        background: notificationBg,
        borderRadius: borderRadiusLG,
        boxShadow: boxShadowSecondary,
        [`${componentCls}-close-icon`]: {
          fontSize,
          cursor: "pointer"
        },
        [`${noticeCls}-message`]: {
          marginBottom: token.marginXS,
          color: colorTextHeading,
          fontSize: fontSizeLG,
          lineHeight: token.lineHeightLG
        },
        [`${noticeCls}-description`]: {
          fontSize
        },
        [`&${noticeCls}-closable ${noticeCls}-message`]: {
          paddingInlineEnd: token.paddingLG
        },
        [`${noticeCls}-with-icon ${noticeCls}-message`]: {
          marginBottom: token.marginXS,
          marginInlineStart: token.marginSM + notificationIconSize,
          fontSize: fontSizeLG
        },
        [`${noticeCls}-with-icon ${noticeCls}-description`]: {
          marginInlineStart: token.marginSM + notificationIconSize,
          fontSize
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${noticeCls}-icon`]: {
          position: "absolute",
          fontSize: notificationIconSize,
          lineHeight: 0,
          // icon-font
          [`&-success${iconCls}`]: {
            color: colorSuccess
          },
          [`&-info${iconCls}`]: {
            color: colorInfo
          },
          [`&-warning${iconCls}`]: {
            color: colorWarning
          },
          [`&-error${iconCls}`]: {
            color: colorError
          }
        },
        [`${noticeCls}-close`]: {
          position: "absolute",
          top: token.notificationPaddingVertical,
          insetInlineEnd: token.notificationPaddingHorizontal,
          color: token.colorIcon,
          outline: "none",
          width: token.notificationCloseButtonSize,
          height: token.notificationCloseButtonSize,
          borderRadius: token.borderRadiusSM,
          transition: `background-color ${token.motionDurationMid}, color ${token.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: token.colorIconHover,
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContent
          }
        },
        [`${noticeCls}-btn`]: {
          float: "right",
          marginTop: token.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${noticeCls}-pure-panel`]: {
        margin: 0
      }
    }
  ];
};
const useStyle$1 = genComponentStyleHook("Notification", (token) => {
  const notificationPaddingVertical = token.paddingMD;
  const notificationPaddingHorizontal = token.paddingLG;
  const notificationToken = merge(token, {
    // default.less variables
    notificationBg: token.colorBgElevated,
    notificationPaddingVertical,
    notificationPaddingHorizontal,
    // index.less variables
    notificationPadding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`,
    notificationMarginBottom: token.margin,
    notificationMarginEdge: token.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: token.fontSizeLG * token.lineHeightLG,
    notificationCloseButtonSize: token.controlHeightLG * 0.55
  });
  return [genNotificationStyle(notificationToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase + 50,
  width: 384
}));
function getCloseIcon(prefixCls, closeIcon) {
  return closeIcon || createVNode("span", {
    "class": `${prefixCls}-close-x`
  }, [createVNode(CloseOutlined, {
    "class": `${prefixCls}-close-icon`
  }, null)]);
}
({
  info: createVNode(InfoCircleFilled, null, null),
  success: createVNode(CheckCircleFilled, null, null),
  error: createVNode(CloseCircleFilled, null, null),
  warning: createVNode(ExclamationCircleFilled, null, null),
  loading: createVNode(LoadingOutlined, null, null)
});
const typeToIcon$1 = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled
};
function PureContent(_ref) {
  let {
    prefixCls,
    icon,
    type,
    message,
    description,
    btn
  } = _ref;
  let iconNode = null;
  if (icon) {
    iconNode = createVNode("span", {
      "class": `${prefixCls}-icon`
    }, [renderHelper(icon)]);
  } else if (type) {
    const Icon = typeToIcon$1[type];
    iconNode = createVNode(Icon, {
      "class": `${prefixCls}-icon ${prefixCls}-icon-${type}`
    }, null);
  }
  return createVNode("div", {
    "class": classNames({
      [`${prefixCls}-with-icon`]: iconNode
    }),
    "role": "alert"
  }, [iconNode, createVNode("div", {
    "class": `${prefixCls}-message`
  }, [message]), createVNode("div", {
    "class": `${prefixCls}-description`
  }, [description]), btn && createVNode("div", {
    "class": `${prefixCls}-btn`
  }, [btn])]);
}
defineComponent({
  name: "PurePanel",
  inheritAttrs: false,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(props) {
    const {
      getPrefixCls
    } = useConfigInject("notification", props);
    const prefixCls = computed(() => props.prefixCls || getPrefixCls("notification"));
    const noticePrefixCls = computed(() => `${prefixCls.value}-notice`);
    const [, hashId] = useStyle$1(prefixCls);
    return () => {
      return createVNode(Notice, _objectSpread(_objectSpread({}, props), {}, {
        "prefixCls": prefixCls.value,
        "class": classNames(hashId.value, `${noticePrefixCls.value}-pure-panel`),
        "noticeKey": "pure",
        "duration": null,
        "closable": props.closable,
        "closeIcon": getCloseIcon(prefixCls.value, props.closeIcon)
      }), {
        default: () => [createVNode(PureContent, {
          "prefixCls": noticePrefixCls.value,
          "icon": props.icon,
          "type": props.type,
          "message": props.message,
          "description": props.description,
          "btn": props.btn
        }, null)]
      });
    };
  }
});
function getPlacementStyle(placement, top, bottom) {
  let style;
  top = typeof top === "number" ? `${top}px` : top;
  bottom = typeof bottom === "number" ? `${bottom}px` : bottom;
  switch (placement) {
    case "top":
      style = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top,
        bottom: "auto"
      };
      break;
    case "topLeft":
      style = {
        left: 0,
        top,
        bottom: "auto"
      };
      break;
    case "topRight":
      style = {
        right: 0,
        top,
        bottom: "auto"
      };
      break;
    case "bottom":
      style = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom
      };
      break;
    case "bottomLeft":
      style = {
        left: 0,
        top: "auto",
        bottom
      };
      break;
    default:
      style = {
        right: 0,
        top: "auto",
        bottom
      };
      break;
  }
  return style;
}
function getMotion(prefixCls) {
  return {
    name: `${prefixCls}-fade`
  };
}
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DEFAULT_OFFSET = 24;
const DEFAULT_DURATION = 4.5;
const Holder = defineComponent({
  name: "Holder",
  inheritAttrs: false,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(props, _ref) {
    let {
      expose
    } = _ref;
    const {
      getPrefixCls,
      getPopupContainer
    } = useConfigInject("notification", props);
    const prefixCls = computed(() => props.prefixCls || getPrefixCls("notification"));
    const getStyles = (placement) => {
      var _a, _b;
      return getPlacementStyle(placement, (_a = props.top) !== null && _a !== void 0 ? _a : DEFAULT_OFFSET, (_b = props.bottom) !== null && _b !== void 0 ? _b : DEFAULT_OFFSET);
    };
    const [, hashId] = useStyle$1(prefixCls);
    const getClassName = () => classNames(hashId.value, {
      [`${prefixCls.value}-rtl`]: props.rtl
    });
    const getNotificationMotion = () => getMotion(prefixCls.value);
    const [api2, holder] = useNotification$1({
      prefixCls: prefixCls.value,
      getStyles,
      getClassName,
      motion: getNotificationMotion,
      closable: true,
      closeIcon: getCloseIcon(prefixCls.value),
      duration: DEFAULT_DURATION,
      getContainer: () => {
        var _a, _b;
        return ((_a = props.getPopupContainer) === null || _a === void 0 ? void 0 : _a.call(props)) || ((_b = getPopupContainer.value) === null || _b === void 0 ? void 0 : _b.call(getPopupContainer)) || (void 0).body;
      },
      maxCount: props.maxCount,
      hashId: hashId.value,
      onAllRemoved: props.onAllRemoved
    });
    expose(_extends(_extends({}, api2), {
      prefixCls: prefixCls.value,
      hashId
    }));
    return holder;
  }
});
function useInternalNotification(notificationConfig) {
  const holderRef = shallowRef(null);
  const holderKey = Symbol("notificationHolderKey");
  const open = (config) => {
    if (!holderRef.value) {
      return;
    }
    const {
      open: originOpen,
      prefixCls,
      hashId
    } = holderRef.value;
    const noticePrefixCls = `${prefixCls}-notice`;
    const {
      message,
      description,
      icon,
      type,
      btn,
      class: className
    } = config, restConfig = __rest$1(config, ["message", "description", "icon", "type", "btn", "class"]);
    return originOpen(_extends(_extends({
      placement: "topRight"
    }, restConfig), {
      content: () => createVNode(PureContent, {
        "prefixCls": noticePrefixCls,
        "icon": typeof icon === "function" ? icon() : icon,
        "type": type,
        "message": typeof message === "function" ? message() : message,
        "description": typeof description === "function" ? description() : description,
        "btn": typeof btn === "function" ? btn() : btn
      }, null),
      // @ts-ignore
      class: classNames(type && `${noticePrefixCls}-${type}`, hashId, className)
    }));
  };
  const destroy = (key2) => {
    var _a, _b;
    if (key2 !== void 0) {
      (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.close(key2);
    } else {
      (_b = holderRef.value) === null || _b === void 0 ? void 0 : _b.destroy();
    }
  };
  const wrapAPI = {
    open,
    destroy
  };
  const keys = ["success", "info", "warning", "error"];
  keys.forEach((type) => {
    wrapAPI[type] = (config) => open(_extends(_extends({}, config), {
      type
    }));
  });
  return [wrapAPI, () => createVNode(Holder, _objectSpread(_objectSpread({
    "key": holderKey
  }, notificationConfig), {}, {
    "ref": holderRef
  }), null)];
}
function useNotification(notificationConfig) {
  return useInternalNotification(notificationConfig);
}
const notificationInstance = {};
let defaultDuration = 4.5;
let defaultTop = "24px";
let defaultBottom = "24px";
let defaultPrefixCls$1 = "";
let defaultPlacement = "topRight";
let defaultGetContainer = () => (void 0).body;
let defaultCloseIcon = null;
let rtl = false;
let maxCount;
function setNotificationConfig(options) {
  const {
    duration,
    placement,
    bottom,
    top,
    getContainer: getContainer2,
    closeIcon,
    prefixCls
  } = options;
  if (prefixCls !== void 0) {
    defaultPrefixCls$1 = prefixCls;
  }
  if (duration !== void 0) {
    defaultDuration = duration;
  }
  if (placement !== void 0) {
    defaultPlacement = placement;
  }
  if (bottom !== void 0) {
    defaultBottom = typeof bottom === "number" ? `${bottom}px` : bottom;
  }
  if (top !== void 0) {
    defaultTop = typeof top === "number" ? `${top}px` : top;
  }
  if (getContainer2 !== void 0) {
    defaultGetContainer = getContainer2;
  }
  if (closeIcon !== void 0) {
    defaultCloseIcon = closeIcon;
  }
  if (options.rtl !== void 0) {
    rtl = options.rtl;
  }
  if (options.maxCount !== void 0) {
    maxCount = options.maxCount;
  }
}
function getNotificationInstance(_ref, callback) {
  let {
    prefixCls: customizePrefixCls,
    placement = defaultPlacement,
    getContainer: getContainer2 = defaultGetContainer,
    top,
    bottom,
    closeIcon = defaultCloseIcon,
    appContext
  } = _ref;
  const {
    getPrefixCls
  } = globalConfig();
  const prefixCls = getPrefixCls("notification", customizePrefixCls || defaultPrefixCls$1);
  const cacheKey = `${prefixCls}-${placement}-${rtl}`;
  const cacheInstance = notificationInstance[cacheKey];
  if (cacheInstance) {
    Promise.resolve(cacheInstance).then((instance) => {
      callback(instance);
    });
    return;
  }
  const notificationClass = classNames(`${prefixCls}-${placement}`, {
    [`${prefixCls}-rtl`]: rtl === true
  });
  Notification$1.newInstance({
    name: "notification",
    prefixCls: customizePrefixCls || defaultPrefixCls$1,
    useStyle: useStyle$1,
    class: notificationClass,
    style: getPlacementStyle(placement, top !== null && top !== void 0 ? top : defaultTop, bottom !== null && bottom !== void 0 ? bottom : defaultBottom),
    appContext,
    getContainer: getContainer2,
    closeIcon: (_ref2) => {
      let {
        prefixCls: prefixCls2
      } = _ref2;
      const closeIconToRender = createVNode("span", {
        "class": `${prefixCls2}-close-x`
      }, [renderHelper(closeIcon, {}, createVNode(CloseOutlined, {
        "class": `${prefixCls2}-close-icon`
      }, null))]);
      return closeIconToRender;
    },
    maxCount,
    hasTransitionName: true
  }, (notification) => {
    notificationInstance[cacheKey] = notification;
    callback(notification);
  });
}
const typeToIcon = {
  success: CheckCircleOutlined,
  info: InfoCircleOutlined,
  error: CloseCircleOutlined,
  warning: ExclamationCircleOutlined
};
function notice(args) {
  const {
    icon,
    type,
    description,
    message,
    btn
  } = args;
  const duration = args.duration === void 0 ? defaultDuration : args.duration;
  getNotificationInstance(args, (notification) => {
    notification.notice({
      content: (_ref3) => {
        let {
          prefixCls: outerPrefixCls
        } = _ref3;
        const prefixCls = `${outerPrefixCls}-notice`;
        let iconNode = null;
        if (icon) {
          iconNode = () => createVNode("span", {
            "class": `${prefixCls}-icon`
          }, [renderHelper(icon)]);
        } else if (type) {
          const Icon = typeToIcon[type];
          iconNode = () => createVNode(Icon, {
            "class": `${prefixCls}-icon ${prefixCls}-icon-${type}`
          }, null);
        }
        return createVNode("div", {
          "class": iconNode ? `${prefixCls}-with-icon` : ""
        }, [iconNode && iconNode(), createVNode("div", {
          "class": `${prefixCls}-message`
        }, [!description && iconNode ? createVNode("span", {
          "class": `${prefixCls}-message-single-line-auto-margin`
        }, null) : null, renderHelper(message)]), createVNode("div", {
          "class": `${prefixCls}-description`
        }, [renderHelper(description)]), btn ? createVNode("span", {
          "class": `${prefixCls}-btn`
        }, [renderHelper(btn)]) : null]);
      },
      duration,
      closable: true,
      onClose: args.onClose,
      onClick: args.onClick,
      key: args.key,
      style: args.style || {},
      class: args.class
    });
  });
}
const api = {
  open: notice,
  close(key2) {
    Object.keys(notificationInstance).forEach((cacheKey) => Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
      instance.removeNotice(key2);
    }));
  },
  config: setNotificationConfig,
  destroy() {
    Object.keys(notificationInstance).forEach((cacheKey) => {
      Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
        instance.destroy();
      });
      delete notificationInstance[cacheKey];
    });
  }
};
const iconTypes = ["success", "info", "warning", "error"];
iconTypes.forEach((type) => {
  api[type] = (args) => api.open(_extends(_extends({}, args), {
    type
  }));
});
api.warn = api.warning;
api.useNotification = useNotification;
function getStyle(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate$1(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");
    const primaryColor = new TinyColor(theme.primaryColor);
    const primaryColors = generate$1(primaryColor.toRgbString());
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c) => c.lighten(35));
    variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c) => c.lighten(20));
    variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c) => c.tint(20));
    variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c) => c.tint(50));
    variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c) => c.setAlpha(c.getAlpha() * 0.3));
    variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c) => c.darken(2));
  }
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }
  const cssList = Object.keys(variables).map((key2) => `--${globalPrefixCls}-${key2}: ${variables[key2]};`);
  return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
  getStyle(globalPrefixCls, theme);
  {
    warning(false, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
  }
}
const useStyle = (iconPrefixCls) => {
  const [theme, token] = useToken();
  return useStyleRegister(computed(() => ({
    theme: theme.value,
    token: token.value,
    hashId: "",
    path: ["ant-design-icons", iconPrefixCls.value]
  })), () => [{
    [`.${iconPrefixCls.value}`]: _extends(_extends({}, resetIcon()), {
      [`.${iconPrefixCls.value} .${iconPrefixCls.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function useTheme(theme, parentTheme) {
  const themeConfig = computed(() => (theme === null || theme === void 0 ? void 0 : theme.value) || {});
  const parentThemeConfig = computed(() => themeConfig.value.inherit === false || !(parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.value) ? defaultConfig : parentTheme.value);
  const mergedTheme = computed(() => {
    if (!(theme === null || theme === void 0 ? void 0 : theme.value)) {
      return parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.value;
    }
    const mergedComponents = _extends({}, parentThemeConfig.value.components);
    Object.keys(theme.value.components || {}).forEach((componentName) => {
      mergedComponents[componentName] = _extends(_extends({}, mergedComponents[componentName]), theme.value.components[componentName]);
    });
    return _extends(_extends(_extends({}, parentThemeConfig.value), themeConfig.value), {
      token: _extends(_extends({}, parentThemeConfig.value.token), themeConfig.value.token),
      components: mergedComponents
    });
  });
  return mergedTheme;
}
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const defaultPrefixCls = "ant";
function getGlobalPrefixCls() {
  return globalConfigForApi.prefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalConfigForApi.iconPrefixCls || defaultIconPrefixCls;
}
const globalConfigBySet = reactive({});
const globalConfigForApi = reactive({});
watchEffect(() => {
  _extends(globalConfigForApi, globalConfigBySet);
  globalConfigForApi.prefixCls = getGlobalPrefixCls();
  globalConfigForApi.iconPrefixCls = getGlobalIconPrefixCls();
  globalConfigForApi.getPrefixCls = (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${globalConfigForApi.prefixCls}-${suffixCls}` : globalConfigForApi.prefixCls;
  };
  globalConfigForApi.getRootPrefixCls = () => {
    if (globalConfigForApi.prefixCls) {
      return globalConfigForApi.prefixCls;
    }
    return getGlobalPrefixCls();
  };
});
let stopWatchEffect;
const setGlobalConfig = (params) => {
  if (stopWatchEffect) {
    stopWatchEffect();
  }
  stopWatchEffect = watchEffect(() => {
    _extends(globalConfigBySet, reactive(params));
    _extends(globalConfigForApi, reactive(params));
  });
  if (params.theme) {
    registerTheme(getGlobalPrefixCls(), params.theme);
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    if (globalConfigForApi.prefixCls) {
      return globalConfigForApi.prefixCls;
    }
    return getGlobalPrefixCls();
  }
});
const ConfigProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: false,
  props: configProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const parentContext = useConfigContextInject();
    const getPrefixCls = (suffixCls, customizePrefixCls) => {
      const {
        prefixCls = "ant"
      } = props;
      if (customizePrefixCls) return customizePrefixCls;
      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    };
    const iconPrefixCls = computed(() => props.iconPrefixCls || parentContext.iconPrefixCls.value || defaultIconPrefixCls);
    const shouldWrapSSR = computed(() => iconPrefixCls.value !== parentContext.iconPrefixCls.value);
    const csp = computed(() => {
      var _a;
      return props.csp || ((_a = parentContext.csp) === null || _a === void 0 ? void 0 : _a.value);
    });
    const wrapSSR = useStyle(iconPrefixCls);
    const mergedTheme = useTheme(computed(() => props.theme), computed(() => {
      var _a;
      return (_a = parentContext.theme) === null || _a === void 0 ? void 0 : _a.value;
    }));
    const renderEmptyComponent = (name) => {
      const renderEmpty$1 = props.renderEmpty || slots.renderEmpty || parentContext.renderEmpty || renderEmpty;
      return renderEmpty$1(name);
    };
    const autoInsertSpaceInButton = computed(() => {
      var _a, _b;
      return (_a = props.autoInsertSpaceInButton) !== null && _a !== void 0 ? _a : (_b = parentContext.autoInsertSpaceInButton) === null || _b === void 0 ? void 0 : _b.value;
    });
    const locale$12 = computed(() => {
      var _a;
      return props.locale || ((_a = parentContext.locale) === null || _a === void 0 ? void 0 : _a.value);
    });
    watch(locale$12, () => {
      globalConfigBySet.locale = locale$12.value;
    }, {
      immediate: true
    });
    const direction = computed(() => {
      var _a;
      return props.direction || ((_a = parentContext.direction) === null || _a === void 0 ? void 0 : _a.value);
    });
    const space = computed(() => {
      var _a, _b;
      return (_a = props.space) !== null && _a !== void 0 ? _a : (_b = parentContext.space) === null || _b === void 0 ? void 0 : _b.value;
    });
    const virtual = computed(() => {
      var _a, _b;
      return (_a = props.virtual) !== null && _a !== void 0 ? _a : (_b = parentContext.virtual) === null || _b === void 0 ? void 0 : _b.value;
    });
    const dropdownMatchSelectWidth = computed(() => {
      var _a, _b;
      return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = parentContext.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
    });
    const getTargetContainer = computed(() => {
      var _a;
      return props.getTargetContainer !== void 0 ? props.getTargetContainer : (_a = parentContext.getTargetContainer) === null || _a === void 0 ? void 0 : _a.value;
    });
    const getPopupContainer = computed(() => {
      var _a;
      return props.getPopupContainer !== void 0 ? props.getPopupContainer : (_a = parentContext.getPopupContainer) === null || _a === void 0 ? void 0 : _a.value;
    });
    const pageHeader = computed(() => {
      var _a;
      return props.pageHeader !== void 0 ? props.pageHeader : (_a = parentContext.pageHeader) === null || _a === void 0 ? void 0 : _a.value;
    });
    const input = computed(() => {
      var _a;
      return props.input !== void 0 ? props.input : (_a = parentContext.input) === null || _a === void 0 ? void 0 : _a.value;
    });
    const pagination = computed(() => {
      var _a;
      return props.pagination !== void 0 ? props.pagination : (_a = parentContext.pagination) === null || _a === void 0 ? void 0 : _a.value;
    });
    const form = computed(() => {
      var _a;
      return props.form !== void 0 ? props.form : (_a = parentContext.form) === null || _a === void 0 ? void 0 : _a.value;
    });
    const select = computed(() => {
      var _a;
      return props.select !== void 0 ? props.select : (_a = parentContext.select) === null || _a === void 0 ? void 0 : _a.value;
    });
    const componentSize = computed(() => props.componentSize);
    const componentDisabled = computed(() => props.componentDisabled);
    const wave = computed(() => {
      var _a, _b;
      return (_a = props.wave) !== null && _a !== void 0 ? _a : (_b = parentContext.wave) === null || _b === void 0 ? void 0 : _b.value;
    });
    const configProvider = {
      csp,
      autoInsertSpaceInButton,
      locale: locale$12,
      direction,
      space,
      virtual,
      dropdownMatchSelectWidth,
      getPrefixCls,
      iconPrefixCls,
      theme: computed(() => {
        var _a, _b;
        return (_a = mergedTheme.value) !== null && _a !== void 0 ? _a : (_b = parentContext.theme) === null || _b === void 0 ? void 0 : _b.value;
      }),
      renderEmpty: renderEmptyComponent,
      getTargetContainer,
      getPopupContainer,
      pageHeader,
      input,
      pagination,
      form,
      select,
      componentSize,
      componentDisabled,
      transformCellText: computed(() => props.transformCellText),
      wave
    };
    const memoTheme = computed(() => {
      const _a = mergedTheme.value || {}, {
        algorithm,
        token
      } = _a, rest = __rest(_a, ["algorithm", "token"]);
      const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : void 0;
      return _extends(_extends({}, rest), {
        theme: themeObj,
        token: _extends(_extends({}, seedToken), token)
      });
    });
    const validateMessagesRef = computed(() => {
      var _a, _b;
      let validateMessages = {};
      if (locale$12.value) {
        validateMessages = ((_a = locale$12.value.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = localeValues.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
      }
      if (props.form && props.form.validateMessages) {
        validateMessages = _extends(_extends({}, validateMessages), props.form.validateMessages);
      }
      return validateMessages;
    });
    useConfigContextProvider(configProvider);
    useProvideGlobalForm({
      validateMessages: validateMessagesRef
    });
    useProviderSize(componentSize);
    useProviderDisabled(componentDisabled);
    const renderProvider = (legacyLocale) => {
      var _a, _b;
      let childNode = shouldWrapSSR.value ? wrapSSR((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) : (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots);
      if (props.theme) {
        const _childNode = /* @__PURE__ */ function() {
          return childNode;
        }();
        childNode = createVNode(DesignTokenProvider, {
          "value": memoTheme.value
        }, {
          default: () => [_childNode]
        });
      }
      return createVNode(locale, {
        "locale": locale$12.value || legacyLocale,
        "ANT_MARK__": ANT_MARK
      }, {
        default: () => [childNode]
      });
    };
    watchEffect(() => {
      if (direction.value) {
        api$1.config({
          rtl: direction.value === "rtl"
        });
        api.config({
          rtl: direction.value === "rtl"
        });
      }
    });
    return () => createVNode(LocaleReceiver, {
      "children": (_, __, legacyLocale) => renderProvider(legacyLocale)
    }, null);
  }
});
ConfigProvider.config = setGlobalConfig;
ConfigProvider.install = function(app) {
  app.component(ConfigProvider.name, ConfigProvider);
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AExtractStyle",
  __ssrInlineRender: true,
  setup(__props) {
    const cache2 = createCache();
    const app = useNuxtApp();
    app.hook("app:rendered", () => {
      useHead({
        style: [extractStyle(cache2, true)]
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StyleProvider), mergeProps({ cache: unref(cache2) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@ant-design-vue/nuxt/dist/runtime/components/AExtractStyle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key2 in props.route) {
      Object.defineProperty(route, key2, {
        get: () => previousKey === props.renderKey ? props.route[key2] : previousRoute[key2],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key2 = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key2) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key2;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key2 || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key2 || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const useMainStore = /* @__PURE__ */ defineStore("mainStore", () => {
  const main = reactive({});
  const cookieSelectedIdx = useCookie("selectedIdx");
  const selectedIdx = ref(0);
  const isOddFunc = (n) => {
    return n % 2 !== 0;
  };
  watch(() => selectedIdx.value, () => {
    cookieSelectedIdx.value = selectedIdx.value.toString();
  });
  if (cookieSelectedIdx.value) {
    selectedIdx.value = parseInt(cookieSelectedIdx.value);
  }
  return { main, selectedIdx, isOddFunc };
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = /* @__PURE__ */ useRuntimeConfig();
    reactive({});
    const { main } = storeToRefs(useMainStore());
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(config.public.apiBase + "/getDMain", "$siNM9WAguS")), __temp = await __temp, __restore(), __temp);
    Object.assign(main.value, data.value.dMain);
    useHead({
      title: "DANSAVANH",
      meta: [{ name: "description", content: "DANSAVANH" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_extract_style = _sfc_main$3;
      const _component_a_config_provider = ConfigProvider;
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_a_extract_style, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_config_provider, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtPage)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_config_provider, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtPage)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import("./_nuxt/error-404-Cxz5vOym.js"));
    const _Error = defineAsyncComponent(() => import("./_nuxt/error-500-C05KJXV_.js"));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);
export {
  stringType as $,
  useFetch as A,
  warning as B,
  findDOMNode as C,
  getMotion$1 as D,
  flattenChildren as E,
  filterEmpty as F,
  contains as G,
  getTransitionProps as H,
  getOptionProps as I,
  booleanType as J,
  canUseDom as K,
  Portal as L,
  useProvidePortal as M,
  getComponent as N,
  hasProp as O,
  PropTypes as P,
  getEvents as Q,
  getSlot as R,
  Keyframe as S,
  getPropsSlot as T,
  objectType as U,
  resetComponent as V,
  isValidElement as W,
  isFragment as X,
  getTransitionName as Y,
  getStyle$1 as Z,
  clearFix as _,
  useRouter as a,
  eventType as a0,
  anyType as a1,
  useInjectDisabled as a2,
  LocaleReceiver as a3,
  tupleNum as a4,
  warning$1 as a5,
  warningOnce as a6,
  noteOnce as a7,
  textEllipsis as a8,
  resetIcon as a9,
  functionType as aa,
  getTransitionDirection as ab,
  DefaultRenderEmpty as ac,
  splitAttrs as ad,
  genFocusOutline as ae,
  genFocusStyle as af,
  useLocaleReceiver as ag,
  enUS as ah,
  arrayType as ai,
  skipFlattenKey as aj,
  isValid as ak,
  navigateTo as b,
  useNuxtApp as c,
  useRuntimeConfig as d,
  entry$1 as default,
  withoutTrailingSlash as e,
  useConfigInject as f,
  genComponentStyleHook as g,
  hasProtocol as h,
  classNames as i,
  joinURL as j,
  useToken as k,
  withInstall as l,
  merge as m,
  nuxtLinkDefaults as n,
  apiKey as o,
  parseQuery as p,
  useLocalePath as q,
  resolveRouteObject as r,
  someType as s,
  tuple as t,
  useHead as u,
  api as v,
  withTrailingSlash as w,
  useRoute as x,
  useMainStore as y,
  storeToRefs as z
};
//# sourceMappingURL=server.mjs.map
