<template>
  <div class="training-practice-route">
    Practice Training id: {{ id }}
  </div>
</template>

<script>

export default {
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
.training-practice-route {
  font-size: 22px;
}
</style>
