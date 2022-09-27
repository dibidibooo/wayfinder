import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {fas} from '@fortawesome/free-solid-svg-icons'
// import {fab} from '@fortawesome/free-brands-svg-icons'
// import {fag} from '@fortawesome/free-regular-svg-icons'

Vue.config.productionTip = false
// library.add(fas, fab)

new Vue({
  store,
  router,
  // FontAwesomeIcon,
  render: h => h(App)
}).$mount('#app')
