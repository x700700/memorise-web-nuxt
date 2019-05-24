<template>
  <div class="trainings-list-container">
    <div v-for="training in list" :key="training.id">
      <p>{{ training.name }}</p>
    </div>
    <MyModal name="meo-modal" header="Meo Modalo" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';
import MyModal from '../tools/MyModal';

export default {
  components: {
    MyModal,
  },
  computed: mapState({
    list: state => _.values(state.trainings.dictionary),
  }),
  beforeMount() {
    this.$store.dispatch('trainings/loadTrainings');
  },
  methods: {
    /*
    openModal() {
      this.$modal.show('meo-modal');
    },
     */
  },
}
</script>

<style lang="less" scoped>
.trainings-list-container {
  font-size: 22px;

  span {
    cursor: pointer;
  }
}
</style>
