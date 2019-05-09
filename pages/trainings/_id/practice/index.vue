<template>
  <div class="training-container">
    Practice Training id: {{ id }}
  </div>
</template>

<script>

export default {
  name: 'Trainings',
  validate({ params }) {
    return !isNaN(+params.id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
}
</script>

<style lang="scss" scoped>
.training-container {
  font-size: 22px;
  color: darkred;
}
</style>
