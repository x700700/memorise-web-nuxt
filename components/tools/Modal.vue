<template>
  <div class="modal-container">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div v-if="hide" class="dimmer">
          ...
        </div>
        <div class="modal-container" :style="modalStyle">
          <div class="modal-body">
            <slot>
              default body
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ['width', 'padding', 'height', 'minHeight', 'hide'],
  computed: {
    modalStyle: function () {
      return {
        width: `${this.width || '380'}px`,
        padding: this.padding || '30px 30px',
        height: this.height || 'auto',
        minHeight: this.minHeight || 'auto',
        visibility: this.hide ? 'hidden' : 'visible',
      };
    },
  },
}
</script>
<style lang="scss" scoped>

  .modal-container {
      .modal-mask {
          position: fixed;
          z-index: 9998;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: table;
          transition: opacity .3s ease;
      }

      .modal-wrapper {
          display: table-cell;
          vertical-align: middle;
      }

      @keyframes rotation {
          from {
              transform: rotate(0deg);
          }
          to {
              transform: rotate(359deg);
          }
      }

      .dimmer {
          position: fixed;
          top: 40%;
          left: calc(50% - 32px);

          .icon-dimmer {
              color: white;
              font-size: 64px;
              font-weight: 600;
              animation: rotation 2s infinite linear;
          }
      }

      .modal-container {
          width: 380px;
          margin: 0px auto;
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
          transition: all .3s ease;
          border: 1px solid black;
          position: relative;
      }

      @media only screen and (max-width: 600px) {
          .modal-container {
              width: 95% !important;
          }
      }

      .modal-body {
          margin: 5px 0 0 0;
      }

      .modal-default-button {
          float: right;
      }

      .modal-enter {
          opacity: 0;
      }

      .modal-leave-active {
          opacity: 0;
      }

      .modal-enter .modal-container,
      .modal-leave-active .modal-container {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
      }
  }
</style>
