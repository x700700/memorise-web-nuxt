<template>
  <div class="memo-header">
    <div class="header-title">
      memoRise
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>

.memo-header {
  @import '../../global/colors';

  background-color: @grey-dark;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;

  .header-title {
    color: @grey-lightest;
  }
}
</style>
