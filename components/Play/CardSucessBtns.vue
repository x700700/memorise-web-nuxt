<template>
  <div class="card-sucess-btns">
    <div class="btn-container" :style="styleBtn" @click="nextCard()">
      Next
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    nextCard: {
      type: Function,
      required: true,
    },
    disable: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    styleBtn() {
      return {
        pointerEvents: this.disable ? 'none' : 'auto'
      };
    },
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/global-vars';

  .card-sucess-btns {

    .btn-container {
      text-align: center;
      cursor: pointer;
    }
  }
</style>
