<template>
  <div class="card-rotate-btn-container">
    <div class="btn-container" @click="rotateCard()">
      <font-awesome-icon :icon="icon" />
<!--      <font-awesome-icon class="rotate-icon" icon="camera"/>-->
<!--       <img class="rotate-icon" src="~assets/user-placeholder.svg" width="25px" height="25px" />-->
    </div>
  </div>
</template>

<script>
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default {
  components: {
  },
  props: {
    rotateCard: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    icon: faSpinner,
  }),
  methods: {
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/vars';

  .card-rotate-btn-container {

    .btn-container {
      text-align: center;
      cursor: pointer;

      .rotate-icon {
        width: 25px;
        height: 25px;
        color: orangered;
      }
    }
  }
</style>
