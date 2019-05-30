<template>
  <div class="training-edit-container">
    Edit Training id: {{ id }}
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
    this.$store.dispatch('training/loadEditedTraining', { id: this.id });
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
