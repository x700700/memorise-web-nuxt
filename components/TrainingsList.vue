<template>
  <div class="trainings-list-container">
    Trainings List
    <br />
    <div @click="btnClicked">
      <p>Open Modal</p>
    </div>
    <br />
    <PlayModal />
  </div>
</template>

<script>

import PlayModal from './Play/PlayModal';
export default {
  components: {
    PlayModal
  },
  methods: {
    btnClicked() {
      // eslint-disable-next-line no-console
      console.warn('clicked');
    },
  },
}
</script>

<style lang="scss" scoped>
.trainings-list-container {
  font-size: 22px;
}
</style>
