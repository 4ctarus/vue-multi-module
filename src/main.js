import Vue from "vue";
import { router, store } from "./services";
import { routes as financeRoutes } from "./modules/finance/services";
import { routes as prestaRoutes } from "./modules/presta/services";
import App from "./App.vue";

Vue.config.productionTip = false;

addRoutes('/finance', financeRoutes);
addRoutes('/presta', prestaRoutes);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

function addRoutes(prefix, routes) {
  routes.forEach((route) => {
    router.addRoute(!prefix ? route : {
      ...route,
      ...{
        path: `${prefix}${route.path}`
      }
    })
  });
}