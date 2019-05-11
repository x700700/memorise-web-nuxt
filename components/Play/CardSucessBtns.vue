<template>
  <div class="card-sucess-btns">
    <div class="btn-container" @click="nextCard()">
      Next
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    nextCard: {
      type: Function,
      required: true,
    },
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/global-vars';

  .card-sucess-btns {

    .btn-container {
      text-align: center;
      cursor: pointer;

    }
  }
</style>
