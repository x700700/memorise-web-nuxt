<template>
  <EditTraining />
</template>

<script>
import EditTraining from '../../../../components/Page/TrainingEdit';
import { validateId } from '~/global/validations';

export default {
  components: {
    EditTraining
  },
  validate({ params }) {
    return validateId(params.id);
  },
}
</script>

<style lang="less" scoped>
.training-edit-route {
}
</style>
