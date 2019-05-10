<template>
  <div class="trainings-list-container">
    Trainings List
    <br />
    <br />
    <div @click="btnClicked">
      <p>Open Modal</p>
    </div>
    <br />
    <modal name="hello-world">
      Hello Amigo..!
    </modal>
  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
    btnClicked() {
      // eslint-disable-next-line no-console
      console.warn('clicked');
      this.$modal.show('hello-world');
    },
  },
}
</script>

<style lang="scss" scoped>
.trainings-list-container {
  font-size: 22px;

  p {
    cursor: pointer;
  }
}
</style>
