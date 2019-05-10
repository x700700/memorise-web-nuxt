<template>
  <div class="training-practice-route">
    <p>Practice Training id: {{ id }}</p>
    <Practice />
  </div>
</template>

<script>
import Practice from '~/components/Practice';

export default {
  components: {
    Practice,
  },
  validate({ params }) {
    return !isNaN(+params.id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
}
</script>

<style lang="less" scoped>
  .training-practice-route {
    font-size: 22px;
  }
</style>
