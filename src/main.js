import Vue from "vue";
import { router, store } from "./services";
import { routes as financeRoutes } from "./modules/finance/services";
import { routes as prestaRoutes } from "./modules/presta/services";
import App from "./App.vue";
import i18n from './i18n'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

Vue.use(Chakra)

Vue.config.productionTip = false;

addRoutes('/finance', financeRoutes);
addRoutes('/presta', prestaRoutes);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
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