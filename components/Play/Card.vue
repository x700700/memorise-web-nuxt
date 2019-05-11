<template>
  <div class="card-container" @click="rotateCard()">
    <div class="card-front-container" :style="styleCardFront">
      <div class="card-content">
        Cat
      </div>
    </div>
    <div class="card-back-container" :style="styleCardBack">
      <div class="card-content">
        חתול
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    cardFront: {
      type: Boolean,
      required: true,
    },
    rotateCard: {
      type: Function,
      required: true,
    },
  },
  computed: {
    styleCardFront() {
      return {
        maxWidth: this.cardFront ? '100%' : '0%',
        transition: !this.cardFront ? 'max-width 0.3s ease-in-out' : 'max-width 0.3s ease-in-out',
      };
    },
    styleCardBack() {
      return {
        maxWidth: !this.cardFront ? '100%' : '0%',
        transition: this.cardFront ? 'max-width 0.3s ease-in-out' : 'max-width 0.3s ease-in-out',
      };
    },
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/global-vars';

  .card-container {
    height: 100%;

    .card-front-container, .card-back-container {
      height: 100%;
      background-color: @grey-lightest;
      overflow: hidden;
      font-size: 32px;
      display: flex;

      .card-content {
        width: 100%;
        text-align: center;
        align-self: center;
      }
    }
    .card-front-container {
      margin-left: auto;
    }
    .card-back-container {
      transform: translateY(-100%);
      background-color: @card-back-bg;
    }
  }
</style>
