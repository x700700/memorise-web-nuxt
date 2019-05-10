<template>
  <div class="my-modal">
    <modal :name="name">
      <div class="modal-container">
        <div class="modal-column">
          <div class="modal-header">
            {{ header }}
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>


  .my-modal {
    .modal-container {
      .modal-column {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

        .modal-header {
          min-height: 50px;
          background-color: #7F828B;
          color: black;
          font-size: 14px;
          font-weight: bolder;
        }
        .modal-body {

        }
      }
    }
  }
</style>
