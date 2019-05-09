<template>
  <section class="container">
    <div>
      <p>memoRise</p>
      <br>

    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  head() {
    return {
      title: 'memoRise',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'memorise', name: 'memoRise', content: 'memoRise' }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  // margin: 0 auto;
  // min-height: 100vh;

  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

}
</style>
