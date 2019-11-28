<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      @click="handleClick"
    >
    <Button text="haha" @click="handleClick"/>
    <Button text="显示dialog" bgColor="#f84d90" @click="showDialog"/>
    <Dialog v-if="isShowDialog" @cancel="isShowDialog = false" content="你好傻逼哈哈哈哈"/>
    <i class="icon">&#xe8bf;</i>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'
import Dialog from '@/components/Dialog/Dialog.vue'

export default {
  name: 'home',
  components: {
    Button,
    Dialog
  },
  data() {
    return {
      isShowDialog: false
    }
  },
  methods: {
    handleClick() {
      this.$toast('别跑！明天请你吃饭',1000,()=>console.log('callback'))
    },
    showDialog(){
      console.log('showDialog')
      this.isShowDialog = true;
    }
  },
}
</script>
