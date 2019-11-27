import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.css'
import vToast from './components/Toast/index'
import vDialog from './components/Dialog/index'
import Button from '@/components/Button.vue'
Vue.config.productionTip = false
Vue.use(vToast)
Vue.use(vDialog)
Vue.directive('slide',{
    bind:(el,binding)=>{
        el.style.background = 'blue'
        el.style.height = '50vh'
        el.style.width = '100vw'
        el.style.position = 'fixed'
        el.style.top = '10vh'
        el.style.transition = '.3s'
        el.style.transform = 'translateX(-100vw)'
        el.style.color = binding.value
        console.log('binding',binding)
        console.log('bindingvalue',binding.value)
    },
    update:(el,binding)=>{
        el.style.color = binding.value
        let moveX = binding.value ? '0' : '100vw'
        el.style.transform = `translateX(-${moveX})`
    }
})
Vue.component('Button',Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
