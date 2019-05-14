<template>
  <div class="card-sucess-btns">
    <div class="btns-row">
      <div class="wrong-container">
        <div class="btn-wrong" :style="styleBtn" @click="doneWrong()">
        </div>
      </div>
      <div class="right-container">
        <div class="btn-right" :style="styleBtn" @click="doneRight()">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    doneRight: {
      type: Function,
      required: true,
    },
    doneWrong: {
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
        pointerEvents: this.disable ? 'none' : 'auto',
        // opacity: this.disable ? '0.4' : '1',
      };
    },
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/vars';

  .card-sucess-btns {

    .btns-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: @mid-space 1rem;
      margin-bottom: 1rem;

      @media (max-width: @max-mobile-width) {
        margin: 1rem 0;
      }

      .right-container {
        .btn-right {
          background-color: #bfe2c3;
          border: 1px solid #66c85b;

          &:hover {
            background-color: #66c85b;
            border: 1px solid #979797;
          }
          @media (max-width: @max-mobile-width) {
            background-color: #66c85b;
            border: 1px solid #979797;
          }
        }
      }

      .wrong-container {
        .btn-wrong {
          background-color: #edb8b7;
          border: 1px solid #e25050;

          &:hover {
            background-color: #e25050;
            border: 1px solid #979797;
          }
          @media (max-width: @max-mobile-width) {
            background-color: #e25050;
            border: 1px solid #979797;
          }
        }
      }

      .btn-right, .btn-wrong {
        height: @success-btn-height;
        width: @success-btn-width;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
      }
    }

  }
</style>
