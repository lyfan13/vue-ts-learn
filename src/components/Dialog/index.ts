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
      let el = vm.$el
      document.body.appendChild(el) // 把生成的提示的dom插入body中
      let t2 = setTimeout(() => {
        clearTimeout(t2)
        el.classList.add('animate')
        console.log('www',el,t2)
      }, 100);
      document.querySelectorAll('.btn')[1].addEventListener('click',(ev)=>{
        ev.preventDefault()
        el.classList.remove('animate')
        let t3 = setTimeout(() => {
          clearTimeout(t3)
          document.body.removeChild(el)
        }, 100);
        callBack && callBack()
      })
    }
    interface IDialog{
      content:string,
      callBack:any
    }
    Vue.prototype.$dialog = (obj:IDialog)=>{
      const hasDialog = !!(document.querySelector('#v-dialog'))
      !hasDialog && createDialog(obj.content,obj.callBack)
    }
  }
}

export default vDialog