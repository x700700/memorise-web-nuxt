<template>
  <div class="training-edit-container">
    Edit Training id: {{ id }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {
  },
  validate({ params }) {
    console.warn('id length=', params.id.length);
    const looksLikeId = params.id.match(/^\w[^ _-]+$/g);
    if (params.id && params.id.length === 24 && looksLikeId) {
      return true;
    } else {
      console.error('wrong id');
      return false;
    }
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
