import { createApp } from "vue";
import { router } from "@/router";
import pinia from "@/pinia";
import App from "@/App.vue";
import "@/style.scss";

createApp(App).use(router).use(pinia).mount("#app");
