<template>
  <div class="lunch">
    <h1 class="date">{{ date }}</h1>
    <div class="content">
      <h2>今天中午吃啥</h2>
      <h1 class="food">{{ foodList[foodIndex] }}</h1>
      <Button :text="!timer ? '开始' : '结束'" @click="handleRandom" />
    </div>
    <ul class="list" :style="`height:${ulHeight}`">
      <li v-if="!isListExpanded" @click="isListExpanded = true">show列表</li>
      <li class="food" v-for="(item, index) in foodList" :key="index">
        {{ item }}
        <span class="del" @click="handleDel(index)">-</span>
      </li>
      <li v-if="isListExpanded" @click="isListExpanded = false">fold列表</li>
    </ul>
    <template v-if="isListExpanded">
      <div
        class="add"
        @click="isShowInput = !isShowInput"
        :class="{ animate: isShowInput }"
      >
        +
      </div>
      <input v-model="food" type="text" :class="{ movex: isShowInput }" />
      <div class="btn" v-if="food&&isShowInput" @click="handleAdd">添加</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Lunch',
  data() {
    return {
      foodList: [
        '桂林米粉',
        '桂林米粉',
        '快城',
        '桂林米粉',
        '瓦罐汤饭',
        '酸菜鱼粉/饭'
      ],
      food: null,
      foodIndex: 0,
      timer: null,
      date: null,
      dateTimer: null,
      isListExpanded: false,
      isShowInput: false
    };
  },
  computed: {
    ulHeight() {
      let _height = this.isListExpanded ? 30 * (this.foodList.length + 1) : 30;
      return `${_height}px`;
    }
  },
  mounted() {
    // this.date = new Date();
    this.dateTimer = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  destroyed() {
    if (this.dateTimer) clearInterval(this.dateTimer);
  },
  methods: {
    handleDel(index) {
      this.foodList.splice(index, 1);
    },
    handleAdd() {
      this.foodList.push(this.food);
      this.$toast('添加成功');
      this.food = null;
      this.isShowInput = false;
    },
    handleRandom() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.foodIndex = Math.floor(Math.random() * this.foodList.length);
          console.log(this.foodIndex);
        }, 100);
      } else {
        clearInterval(this.timer);
        if (this.foodList[this.foodIndex] === '桂林米粉')
          this.$toast('整天就知道吃粉你个傻逼', 2000);
        this.timer = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.lunch {
  width: 100vw;
  height: 100vh;
  background-image: url('/images/tofu.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba($color: #000000, $alpha: 0.2);
    z-index: 1;
  }
  .date {
    position: absolute;
    top: 20px;
    color: white;
    z-index: 2;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    color: white;
    z-index: 2;
    h2,
    h1 {
      margin-bottom: 10px;
    }
  }
  .list {
    position: absolute;
    bottom: 12px;
    left: 12px;
    z-index: 2;
    color: white;
    background: #ff7477;
    border-radius: 10px;
    transition: 0.3s;
    overflow: hidden;
    li {
      // padding:5px;
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      padding: 0 12px;
    }
    .food {
      position: relative;
      .del {
        display: block;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        background: #67359e;
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
      }
    }
  }
  .add {
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 12px;
    left: 130px;
    background: rgba($color: #000000, $alpha: 0.5);
    border-radius: 50%;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    color: white;
    transition: 0.5s;
    z-index: 2;
  }
  input {
    position: absolute;
    background: transparent;
    border-bottom: 1px solid #ff7477;
    z-index: 2;
    width: 0px;
    bottom: 17px;
    left: 130px;
    transition: 0.5s;
  }
  .movex {
    width: 150px;
  }
  .animate {
    transform: translateX(160px) rotate(225deg);
  }
  .btn {
    position: absolute;
    bottom: 17px;
    height: 20px;
    left: 250px;
    color: white;
    z-index: 2;
    background: rgba($color: #000000, $alpha: 0.5);
    line-height: 20px;
    text-align: center;
    border-radius: 10px;
    padding: 0 2px;
  }
}
</style>
