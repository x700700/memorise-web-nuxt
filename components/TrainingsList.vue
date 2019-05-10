<template>
  <div class="trainings-list-container">
    Trainings List
    <br />
    <br />
    <div @click="btnClicked">
      <p>Open Modal</p>
    </div>
    <br />
    <MyModal name="meo-modal" header="Meo Modalo" />
  </div>
</template>

<script>
import MyModal from './tools/MyModal';

export default {
  components: {
    MyModal,
  },
  methods: {
    btnClicked() {
      // eslint-disable-next-line no-console
      console.warn('clicked');
      this.$modal.show('meo-modal');
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
