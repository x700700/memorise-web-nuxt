<template>
  <div class="card-container" :style="styleCardContainer" @click="rotateCard()">
    <img src="/card-back.png" class="card-bg">
    <div class="rotate-icon-container" :style="styleRotateContainer">
      <div class="rotate-icon-row" :style="styleRotateRow">
        <font-awesome-icon icon="sync" class="rotate-icon" />
      </div>
    </div>
    <div class="front-back-container">
      <div class="card-front-container" :style="styleCardFront">
        <div class="card-content" :style="styleCardContent">
          <p>{{ q }}</p>
        </div>
      </div>
      <div class="card-back-container" :style="styleCardBack">
        <div class="card-content" :style="styleCardContent">
          <p>{{ a }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const transitionWidth = 'max-width 0.2s ease-in-out';
const transitionFontSize = 'font-size 0.3s linear';
const transitionFontSizeBack = 'font-size 0.5s linear';

const transitionTranform = 'transform 0.2s linear 0.2s';
const transitionTranformBack = 'transform 0.3s ease-in';

export default {
  components: {
  },
  props: {
    q: {
      type: String,
      required: true,
    },
    a: {
      type: String,
      required: true,
    },
    cardFront: {
      type: Boolean,
      required: true,
    },
    rotateCard: {
      type: Function,
      required: true,
    },
    nextCardTransitionWidth: {
      type: Boolean,
      required: true,
    },
    nextCardTransitionFull: {
      type: Boolean,
      required: true,
    }
  },
  data: () => ({
    cardIsRotating: false,
  }),
  computed: {
    styleCardContainer() {
      return {
        boxShadow: this.nextCardTransitionWidth ? '0 0 8px 0 rgba(0, 0, 0, 0.6)' : undefined, //  '0 0 24px 0 rgba(0, 0, 0, .8)',
      };
    },
    styleRotateContainer() {
      return {
        display: this.cardIsRotating ? 'none' : 'initial',
      };
    },
    styleRotateRow() {
      return {
        opacity: this.cardIsRotating ? 0 : undefined,
      };
    },
    styleCardFront() {
      const fontAdjust = 32;
      return {
        maxWidth: this.cardFront && !this.nextCardTransitionWidth ? '100%' : '0%',
        marginLeft: this.nextCardTransitionFull ? '0px' : 'auto',
        fontSize: this.cardFront ? `${fontAdjust}px` : '1px',
        transition: !this.cardFront ? `${transitionWidth}, ${transitionFontSize}` : `${transitionWidth} 0.25s, ${transitionFontSizeBack}`,
      };
    },
    styleCardBack() {
      const fontAdjust = 32;
      return {
        maxWidth: !this.cardFront ? '100%' : '0%',
        marginLeft: this.nextCardTransitionFull ? '0px' : 'auto',
        fontSize: !this.cardFront || this.nextCardTransitionFull ? `${fontAdjust}px` : '1px',
        transition: this.cardFront ? `${transitionWidth}, ${transitionFontSize}` : `${transitionWidth} 0.25s, ${transitionFontSizeBack}`,
      };
    },
    styleCardContent() {
      return {
        transform: this.nextCardTransitionWidth ? 'translateX(-324px)' : 'none',
        transition: this.nextCardTransitionWidth ? transitionTranform : transitionTranformBack,
      }
    },
  },
  watch: {
    cardFront() {
      this.cardIsRotating = true;
      setTimeout(() => {
        this.cardIsRotating = false;
      }, 900);
    },
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/vars';

  .card-container {
    height: 100%;
    cursor: pointer;
    box-shadow: @shadow2;
    transition: box-shadow 0.3s ease-in-out;

    &:focus, &:active {
      outline: none;
    }

    &:hover {
      box-shadow: @shadow3;

      @media (max-width: @max-mobile-width) {
        box-shadow: @shadow2;
      }
      .rotate-icon-row.rotate-icon-row {
        opacity: 0.3;
      }
    }

    .card-bg {
      width: @card-size;
      height: @card-size;
      position: absolute;
      opacity: 0.15;
    }
    .rotate-icon-container {
      position: absolute;
      width: @card-size;
      z-index: 5;

      .rotate-icon-row {
        position: relative;
        display: flex;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;

        @media (max-width: @max-mobile-width) {
          display: none;
        }

        .rotate-icon {
          margin: @mid-space auto;
        }
      }
    }

    .front-back-container {
      height: 100%;
      position: relative;

      .card-front-container, .card-back-container {
        height: 100%;
        z-index: 2;
        margin: 0 auto;
        overflow: hidden;
        font-size: 32px;
        display: flex;
        justify-content: center;

        .card-content {
          min-width: @card-size;
          text-align: center;
          align-self: center;
          padding: @mid-space @mid-space;
          transition: transform 0.3s linear;


          &:focus, &:active {
            outline: 0;
          }
        }
      }

      .card-front-container {
        background-color: @card-front-bg;
      }
      .card-back-container {
        transform: translateY(-100%);
        background-color: @card-back-bg;
      }
    }
  }
</style>
