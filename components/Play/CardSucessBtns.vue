<template>
  <div class="card-sucess-btns">
    <div class="btns-row">
      <div class="wrong-container">
        <v-btn dark color="red lighten-2" class="btn-wrong" :style="styleBtn" @click="doneWrong()">
          <font-awesome-icon icon="user-times" class="wrong-icon" />
        </v-btn>
      </div>
      <div class="right-container">
        <v-btn dark color="green lighten-2" class="btn-right" :style="styleBtn" @click="doneRight()">
          <font-awesome-icon icon="user-check" class="right-icon" />
        </v-btn>
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
        opacity: this.disable ? '0.7' : '1',
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
        margin: 2.5rem 0;
      }

      .right-container {
        .btn-right {
          border: 1px solid @right-btn-dark;

          .right-icon {
            color: @right-btn-dark;
          }

          &:hover {
            .right-icon {
              color: @right-btn-light;
            }
          }
          @media (max-width: @max-mobile-width) {
            .right-icon {
              color: @right-btn-light;
            }
          }
        }
      }

      .wrong-container {
        .btn-wrong {
          border: 1px solid @wrong-btn-dark;

          .wrong-icon {
            color: @wrong-btn-dark;
          }

          &:hover {
            .wrong-icon {
              color: @wrong-btn-light;
            }
          }
          @media (max-width: @max-mobile-width) {
            .wrong-icon {
              color: @wrong-btn-light;
            }
          }
        }
      }

      .btn-right, .btn-wrong {
        height: @success-btn-height;
        width: @success-btn-width;
        margin: 0;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .right-icon, .wrong-icon {
        font-size: 38px;
      }
    }

  }
</style>
