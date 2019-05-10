<template>
  <div class="preplay-modal-container">
    <modal name="hello-world">
      Hello Modal..!
    </modal>
  </div>
</template>

<script>

export default {
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
