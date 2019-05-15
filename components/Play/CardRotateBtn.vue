<template>
  <div class="card-rotate-btn-container">
    <div class="btn-container" @click="rotateCard()">
<!--      <font-awesome-icon icon="spinner" />-->
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    rotateCard: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/vars';

  .card-rotate-btn-container {

    .btn-container {
      text-align: center;
      cursor: pointer;

      .rotate-icon {
        width: 25px;
        height: 25px;
        color: orangered;
      }
    }
  }
</style>
