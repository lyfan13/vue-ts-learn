<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      @click="handleClick"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Button text="haha" @click="handleClick"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Button
  },
  methods: {
    handleClick() {
      this.$toast('别跑！明天请你吃饭',1000,()=>console.log('callback'))
    }
  },
}
</script>
