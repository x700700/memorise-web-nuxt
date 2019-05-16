<template>
  <div class="card-container" @click="rotateCard()">
    <img src="/card-back.png" class="card-bg">
    <div class="rotate-icon-container" :style="styleRotateIcon">
      <div class="rotate-icon-row">
        <font-awesome-icon icon="sync" class="rotate-icon" />
      </div>
    </div>
    <div class="front-back-container">
      <div class="card-front-container" :style="styleCardFront">
        <div class="card-content">
          {{ q }}
        </div>
      </div>
      <div class="card-back-container" :style="styleCardBack">
        <div class="card-content">
          {{ a }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const transitionWidth = 'max-width 0.2s ease-in-out';
const transitionFontSize = 'font-size 0.3s linear';
const transitionFontSizeSlower = 'font-size 0.5s linear';

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

  }),
  computed: {
    styleRotateIcon() {
      return {
        display: this.nextCardTransitionFull ? 'none' : 'initial',
      };
    },
    styleCardFront() {
      const fontAdjust = 32;
      return {
        maxWidth: this.cardFront && !this.nextCardTransitionWidth ? '100%' : '0%',
        marginLeft: this.nextCardTransitionFull ? '0px' : 'auto',
        fontSize: this.cardFront ? `${fontAdjust}px` : '1px',
        transition: !this.cardFront ? `${transitionWidth}, ${transitionFontSize}` : `${transitionWidth} 0.25s, ${transitionFontSizeSlower}`,
      };
    },
    styleCardBack() {
      const fontAdjust = 32;
      return {
        maxWidth: !this.cardFront ? '100%' : '0%',
        marginLeft: this.nextCardTransitionFull ? '0px' : 'auto',
        fontSize: !this.cardFront || this.nextCardTransitionFull ? `${fontAdjust}px` : '1px',
        transition: this.cardFront ? `${transitionWidth}, ${transitionFontSize}` : `${transitionWidth} 0.25s, ${transitionFontSizeSlower}`,
      };
    },
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/vars';

  .card-container {
    height: 100%;
    cursor: pointer;
    box-shadow: @shadow3;

    &:focus, &:active {
      outline: none;
    }

    &:hover {
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

        .card-content {
          width: 100%;
          text-align: center;
          align-self: center;

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
