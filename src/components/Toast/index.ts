import Toast from './Toast.vue'

const vToast = {
  duration: 1000, // 显示的时间 ms
  // animateTime: 300, // 动画时间,表示这个组件切换show的动画时间
  install(Vue:any) {
    Vue.component('Toast', Toast)
    function msg(message:string,duration:number, callBack:any) {
      const _duration = duration || 1000
      console.log('Toast',Toast)
      let VueMessage = Vue.extend({
        render(h:any) {
          let props = {
            message: message,
            isShowToast: false
          }
          return h('Toast', {props})
        },
      })
      let newToast = new VueMessage()
      let vm = newToast.$mount()
      let el = vm.$el
      document.body.appendChild(el) // 把生成的提示的dom插入body中
      vm.isShowToast = true
        vm.isShowToast = false  //隐藏提示组件，此时会有300ms的动画效果，等动画效果过了再从body中移除dom
        let t2 = setTimeout(() => {
          clearTimeout(t2)
          vm.isShowToast = false
          document.body.removeChild(el) //从body中移除dom
          newToast.$destroy()
          vm = null // 设置为null，好让js垃圾回收算法回收，释放内存
          callBack && (typeof callBack === 'function') && callBack() 
      }, _duration)
    }

// 挂载到vue原型上，暴露四个方法
    Vue.prototype.$toast = (message:string,duration:number,callBack:any)=>{
      msg(message,duration,callBack)
    }
  }
}

export default vToast