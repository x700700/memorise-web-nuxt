<template>
  <div class="trainings-list-route">
    <TrainingsList />
  </div>
</template>

<script>
import TrainingsList from '../../../components/TrainingsList';

export default {
  components: {
    TrainingsList,
  },
}
</script>

<style lang="scss" scoped>
.trainings-list-route {
  font-size: 22px;
}
</style>
