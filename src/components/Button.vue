<template>
  <button
    @click="handleClick"
    :style="`fontSize:${fontSize};width:${width};height:${height};lineHeight:${height};color:${textColor};background:${bgColor};borderRadius:${radius}`"
  >
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: '确定'
    },
    fontSize: {
      type: String,
      default: '15px'
    },
    height: {
      type: String,
      default: '30px'
    },
    width: {
      type: String,
      default: '100px'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    bgColor: {
      type: String,
      default: '#FF7477'
    },
    radius: {
      type: String,
      default: '80px'
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  },
}
</script>

<style lang="scss" scoped>
</style>