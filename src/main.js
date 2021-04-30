import { createApp } from "vue";

import App from "./App.vue";
import store from "./store/index.js";
import router from "./router.js";
import "tailwindcss/tailwind.css";
import { ObserveVisibility } from "vue-observe-visibility";

import SideInfo from "./components/ui/SideInfo.vue";
import ClosePanelButton from "./components/ui/ClosePanelButton.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.directive("observe-visibility", {
  beforeMount: (el, binding, vnode) => {
    vnode.context = binding.instance;
    ObserveVisibility.bind(el, binding, vnode);
  },
  update: ObserveVisibility.update,
  unmounted: ObserveVisibility.unbind,
});

app.component("side-info", SideInfo);
app.component("close-panel-button", ClosePanelButton);

app.mount("#app");
