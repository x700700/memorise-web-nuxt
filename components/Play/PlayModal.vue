<template>
  <div class="preplay-modal-container">
    <Modal class="preplay-modal"
           :width="width"
           :hide="!modalMounted"
    >
      <div class="center">
        Success
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '../tools/Modal';

export default {
  component: {
    Modal,
  },
  data() {
    return {
      height: '392px',
      width: '',
      modalMounted: false,
    };
  },
  mounted() {
    this.modalMounted = true;
  }
}
</script>

<style lang="scss" scoped>

  .preplay-modal-container {

  }
</style>
