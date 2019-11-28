<template>
  <div id="v-dialog" v-if="value">
    <div class="content">
      {{ content }}
    </div>
    <div class="btn-wrap">
      <div class="btn cancel" @click="handleCancel">取消</div>
      <div class="btn confirm" @click="handleConfirm">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    content: {
      type: String,
      default: '你真的确定吗？'
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timer: null,
      isShowDialog:false
    };
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue === true) {
        this.timer = window.setTimeout(() => {
          let el = document.querySelector('#v-dialog');
          el && el.classList.add('animate');
        }, 0);
      }else if(newValue===false){
        window.clearTimeout(this.timer)
        this.timer = null
      }
    }
  },
  methods: {
    handleConfirm() {
      this.$emit('confirm');
    },
    handleCancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style lang="scss" scoped>
#v-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) scale(0);
  transition: 0.1s;
  padding: 12px;
  color: white;
  // background: rgba($color: green, $alpha: .3);
  background: #ff7477;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.animate {
  transform: translate3d(-50%, -50%, 0) scale(1) !important;
}
.btn-wrap {
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  text-align: center;
}
.btn {
  flex: 1;
}
.cancel {
  color: black;
}
</style>
