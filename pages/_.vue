<template>
  <div class="not-found-route">
  </div>
</template>

<script>

export default {
  beforeMount() {
    this.$router.push('/');
  }
}
</script>

<style lang="less" scoped>
.not-found-route {
}
</style>
