import { B as Base, o as omit, b as baseProps, a as Typography, T as Title } from "./Title-CgfrIVWU.js";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode } from "vue";
import { b as warning } from "./useConfigInject-BAI3R2rN.js";
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
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
  warning(typeof ellipsis !== "object", "Typography.Link", "`ellipsis` only supports boolean value.");
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
  warning(typeof ellipsis !== "object" || !ellipsis || !("expandable" in ellipsis) && !("rows" in ellipsis), "Typography.Text", "`ellipsis` do not support `expandable` or `rows` props.");
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
export {
  Paragraph as P
};
//# sourceMappingURL=index-C-AAQvTb.js.map
