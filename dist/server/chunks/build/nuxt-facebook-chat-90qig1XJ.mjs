import { defineComponent, h } from 'vue';

const nuxtFacebookChat = defineComponent({
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const fbProps = {
      class: "fb-customerchat",
      id: props.options.pageId || "",
      theme_color: props.options.themeColor || "#333333",
      logged_in_greeting: props.options.loggedInGreeting || "",
      logged_out_greeting: props.options.loggedOutGreeting || "",
      greeting_dialog_display: props.options.greetingDialogDisplay || "show",
      greeting_dialog_delay: props.options.greetingDialogDelay || "",
      ref: props.options.ref || ""
    };
    const fbLocale = props.options.locale || "en_US";
    const fbVersion = props.options.version || "v17.0";
    console.log({ fbProps, fbLocale, fbVersion });
    return () => h("div", fbProps);
  }
});

export { nuxtFacebookChat as default };
//# sourceMappingURL=nuxt-facebook-chat-90qig1XJ.mjs.map
