<template>
  <div class="card-sucess-btns">
    <div class="btns-row">
      <div class="wrong-container">
        <div class="btn-wrong" :style="styleBtn" @click="doneWrong()">
          <font-awesome-icon icon="user-times" class="wrong-icon" />
        </div>
      </div>
      <div class="right-container">
        <div class="btn-right" :style="styleBtn" @click="doneRight()">
          <font-awesome-icon icon="user-check" class="right-icon" />
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
      margin: @mid-space 0;
      margin-bottom: 1rem;

      @media (max-width: @max-mobile-width) {
        margin: 1rem 0;
      }

      .right-container {
        .btn-right {
          background-color: @right-btn-light;
          border: 1px solid @right-btn-dark;

          .right-icon {
            color: @right-btn-dark;
          }

          &:hover {
            background-color: @right-btn-dark;
            border: 1px solid @success-btn-border-color;

            .right-icon {
              color: @right-btn-light;
            }
          }
          &:active {
            background-color: white;
          }
          @media (max-width: @max-mobile-width) {
            background-color: @right-btn-dark;
            border: 1px solid @success-btn-border-color;

            .right-icon {
              color: @right-btn-light;
            }
          }
        }
      }

      .wrong-container {
        .btn-wrong {
          background-color: @wrong-btn-light;
          border: 1px solid @wrong-btn-dark;

          .wrong-icon {
            color: @wrong-btn-dark;
          }

          &:hover {
            background-color: @wrong-btn-dark;
            border: 1px solid @success-btn-border-color;

            .wrong-icon {
              color: @wrong-btn-light;
            }
          }
          &:active {
            background-color: white;
          }
          @media (max-width: @max-mobile-width) {
            background-color: @wrong-btn-dark;
            border: 1px solid @success-btn-border-color;

            .wrong-icon {
              color: @wrong-btn-light;
            }
          }
        }
      }

      .btn-right, .btn-wrong {
        height: @success-btn-height;
        width: @success-btn-width;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .right-icon, .wrong-icon {
        font-size: 38px;
        transition: color 0.3s ease-in-out;
      }
    }

  }
</style>
