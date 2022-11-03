import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import LoadScript from "vue-plugin-load-script";




Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app').app.use(LoadScript);

