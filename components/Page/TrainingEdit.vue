<template>
  <div class="training-edit-container">
    Edit Training id: {{ id }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import { validateId } from '../../global/validations';

export default {
  components: {
  },
  computed: mapState({
    id() {
      return this.$route.params.id;
    }
    // trainingsList: state => _.values(state.trainings.dictionary),
  }),
  beforeMount() {
    // this.$store.dispatch('trainings/loadTrainings');
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
