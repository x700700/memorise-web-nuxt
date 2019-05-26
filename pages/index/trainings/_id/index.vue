<template>
  <TrainingEdit />
</template>

<script>
import TrainingEdit from '../../../../components/Page/TrainingEdit';
import { validateId } from '~/global/validations';

export default {
  components: {
    TrainingEdit
  },
  beforeMount() {
    if (!validateId(this.$route.params.id)) {
      console.error('wrong url. redirecting.');
      this.$router.push('/trainings');
    }
  },
}
</script>

<style lang="less" scoped>
.training-edit-route {
}
</style>
