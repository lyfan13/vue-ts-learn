import Dialog from './Dialog.vue'

const vDialog = {
  install(Vue: any) {
    Vue.component('Dialog', Dialog)

    function createDialog(content: string, callBack: any) {
      let VueDialog = Vue.extend({
        render(h: any) {
          let props = {
            content,
            value: true
          }
          return h('Dialog', { props })
        },
      })
      let vm = new VueDialog().$mount()
      vm.value = false
      console.log('vm',vm)
      let el = vm.$el
      console.log('el',el)
      document.body.appendChild(el) // 把生成的提示的dom插入body中
      // callBack && (typeof callBack === 'function') && callBack()
    }

    // 挂载到vue原型上，暴露四个方法
    // Vue.prototype.$dialog = (message: string, duration: number, callBack: any) => {
    //   const hasToast = !!(document.querySelector('#v-toast'))
    //   if(!hasToast) msg(message, duration, callBack)
    // }
    Vue.prototype.$dialog = (content:string,callBack:any)=>{
      const hasDialog = !!(document.querySelector('#v-dialog'))
      !hasDialog && createDialog(content,callBack)
    }
  }
}

export default vDialog