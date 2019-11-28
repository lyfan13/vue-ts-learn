<template>
  <div id="Dialog">
    <div class="container">
      <p class="content">{{content}}</p>
      <div class="btn-wrap">
        <div class="btn cancel" @click="handleCancel">{{cancelText}}</div>
        <div class="btn confirm" @click="handleConfirm">{{confirmText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Dialog',
    props: {
      confirmText: {
        type: String,
        default: '确定'
      },
      cancelText:{
        type:String,
        default:'取消'
      },
      content:{
        type:String,
        default:'确定不再考虑一下？'
      },
      duration:{
        type:Number,
        default:1000
      }
    },
    methods: {
      handleConfirm() {
        this.$emit('on-confirm')
      },
      handleCancel(){
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="scss" scoped>
#Dialog{
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: .6);
}
.container{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate3d(-50%,-50%,0);
  background: white;
  border-radius: 8px;
  font-size: 15px;
}
.content{
  padding: 25px 20px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.btn-wrap{
  display: flex;
}
.btn{
  flex:1;
  text-align: center;
  padding: 12px 0;
}
.cancel{
  color:#999;
  border-right: 1px solid #ddd;
}
</style>