<template>
  <div class="trainings-list-container">
    <p>Trainings List {{ list }}</p>
    <p>Trainings Count: {{ count }}</p>
    <br />
    <br />
    <div @click="btnClicked">
      <span>Open Modal</span>
    </div>
    <br />
    <p>bbb</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p><p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p><p>a</p><p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>bbb</p>
    <p>a</p>



    <MyModal name="meo-modal" header="Meo Modalo" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MyModal from '../tools/MyModal';

export default {
  components: {
    MyModal,
  },
  computed: mapState({
    count: state => state.trainings.list,
  }),
  methods: {
    btnClicked() {
      // eslint-disable-next-line no-console
      console.warn('clicked');
      this.$modal.show('meo-modal');
    },
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
