<template>
  <div id="toast" v-if="isShowToast">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: 'hi,你来啦~'
    },
  },
  data() {
    return {
      isShowToast: true
    }
  },
}
</script>

<style lang="scss" scoped>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  padding: 10px 15px;
  text-align: center;
  border-radius: 4px;
  background: rgba(0,0,0,.6);
  color:white;
}
</style>