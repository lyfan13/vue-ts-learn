import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.css'
import vToast from './components/Toast/index'

Vue.config.productionTip = false
Vue.use(vToast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
