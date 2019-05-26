<template>
  <div class="training-practice-route">
    <Practice />
  </div>
</template>

<script>
import Practice from '~/components/Page/Practice';
import { validateId } from '~/global/validations';

export default {
  components: {
    Practice,
  },
  beforeMount() {
    if (!validateId(this.$route.params.id)) {
      console.error('wrong url. redirecting.');
      this.$router.push('/trainings');
    }
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
  .training-practice-route {
  }
</style>
