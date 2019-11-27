<template>
  <div>
    <Button text="slide" @click="handleSlide" />
    <div v-slide="show">
        hahada
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
    name:'about',
    components: {
        Button,
    },
    data() {
        return {
            isShowSlide: false,
            show:false
        }
    },
    methods: {
        handleSlide() {
            this.show = !this.show
        }
    },
};
</script>

<style lang="scss" scoped></style>
