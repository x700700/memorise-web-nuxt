<template>
  <div class="training-edit-container">
    <br />
    <div v-for="ex in exercises" :key="ex.id">
      <p>{{ ex.question }} - {{ ex.answer }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';

export default {
  components: {
  },
  computed: mapState({
    id() {
      return this.$route.params.id;
    },
    training: state => state.training.editedTraining,
    exercises: state => state.training.editedTraining && state.training.editedTraining.exercises && _.values(state.training.editedTraining.exercises),
  }),
  beforeMount() {
    this.$store.dispatch('training/loadTraining', { id: this.id, edited: true });
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
@import '../../global/vars';

.trainings-edit-container {
  font-size: 22px;
}
</style>
