<template>
  <div class="card-rotate-btn-container">
    <div class="btn-container" @click="rotateCard()">
      Rotate
      <!-- <img class="rotate-icon" src="~assets/man-forgot.svg" width="25px" height="25px" />-->
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
  methods: {
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/global-vars';

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
