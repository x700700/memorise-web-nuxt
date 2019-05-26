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
  validate({ params }) {
    return validateId(params.id);
  },
}
</script>

<style lang="less" scoped>
  .training-practice-route {
  }
</style>
