import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

Vue.config.productionTip = false
Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
