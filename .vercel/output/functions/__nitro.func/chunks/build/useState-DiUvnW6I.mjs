import { ae as warningOnce } from './index-C3iUBhQ2.mjs';
import { ref } from 'vue';

const devWarning = (valid, component, message) => {
  warningOnce(valid, `[ant-design-vue: ${component}] ${message}`);
};
function useState(defaultStateValue) {
  const initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  const innerValue = ref(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}

export { devWarning as d, useState as u };
//# sourceMappingURL=useState-DiUvnW6I.mjs.map
