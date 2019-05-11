<template>
  <div class="card-container" @click="rotateCard()">
    {{ cardFront }}
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    cardFront: {
      type: Boolean,
      required: true,
    },
    rotateCard: {
      type: Function,
      required: true,
    },
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>

.memo-header {
  @import '../../global/global-vars';

  .card-container {

  }
}
</style>
