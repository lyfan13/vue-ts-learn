<template>
  <div class="home">
    <Button text="toast" @click="handleToast"/>
    <Button text="dialog" bgColor="#999" @click="handleDialog"/>
    <!-- <Dialog v-model="isShowDialog" @confirm="handleConfirm"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Dialog from '@/components/Dialog/Dialog.vue'

export default {
  name: 'home',
  components: {
    Dialog
  },
  data() {
    return {
      isShowDialog: false
    }
  },
  methods: {
    handleToast() {
      this.$toast('别跑！明天请你吃饭',1000,()=>console.log('callback'))
    },
    handleDialog(){
      console.log('handleDialog')
      // this.isShowDialog = true;
      this.$dialog({
        content:'逗你玩',
        callBack(){console.log('callback running')}
      })
      console.log(this.isShowDialog)
    },
    handleConfirm(){
      console.log('confirm')
      this.isShowDialog = false
    }
  },
}
</script>
