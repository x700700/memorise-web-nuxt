<template>
  <div class="trainings-list-container">
    <div v-for="training in trainingsList" :key="training.id">
      <div class="training">
        <div class="button" @click="editTraining(training)">
          Edit
        </div>
        <div class="button" @click="playTraining(training)">
          Play
        </div>
        <p>{{ training.name }}</p>
      </div>
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
    trainingsList: state => _.values(state.trainings.dictionary),
  }),
  beforeMount() {
    this.$store.dispatch('trainings/loadTrainings');
  },
  methods: {
    editTraining(training) {
      const url = `/trainings/${training.id}`;
      console.debug('redirect to: ', url);
      this.$router.push(url);
    },
    playTraining(training) {
      const url = `/trainings/${training.id}/practice`;
      console.debug('redirect to: ', url);
      this.$router.push(url);
    },
    /*
    openModal() {
      this.$modal.show('meo-modal');
    },
     */
  },
}
</script>

<style lang="less" scoped>
@import '../../global/vars';

.trainings-list-container {
  font-size: 22px;

  .training {
    display: flex;
    flex-direction: row;

    p, div {
      margin: @mid-space;
    }
    .button {
      background-color: orange;
      cursor: pointer;
    }
  }
}
</style>
