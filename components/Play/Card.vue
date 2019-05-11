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

const transitionWidth = 'max-width 0.3s ease-in-out';

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
      const fontAdjust = 32;
      return {
        maxWidth: this.cardFront ? '100%' : '0%',
        fontSize: this.cardFront ? `${fontAdjust}px` : '1px',
        transition: !this.cardFront ? `${transitionWidth}, font-size 0.3s linear` : `${transitionWidth} 0.25s, font-size 0.5s linear`,
      };
    },
    styleCardBack() {
      const fontAdjust = 32;
      return {
        maxWidth: !this.cardFront ? '100%' : '0%',
        fontSize: !this.cardFront ? `${fontAdjust}px` : '1px',
        transition: this.cardFront ? `${transitionWidth}, font-size 0.3s linear` : `${transitionWidth} 0.25s, font-size 0.5s linear`,
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
      margin: 0 auto;
      overflow: hidden;
      font-size: 32px;
      display: flex;

      .card-content {
        width: 100%;
        text-align: center;
        align-self: center;
      }
    }
    .card-back-container {
      transform: translateY(-100%);
      background-color: @card-back-bg;
    }
  }
</style>
