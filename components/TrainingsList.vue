<template>
  <div class="trainings-list-container">
    Trainings List
    <div @click="btnClicked">
      <p>Open Modal</p>
    </div>
  </div>
</template>

<script>

export default {
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
