<template>
  <div class="container">
    <p>memoRise</p>
    <br>
    <div>
    Route to:
      <NuxtLink to="/trainings/123">
        Trainings
      </NuxtLink>
    </div>
    <div class="content">
      <NuxtChild />
    </div>
  </div>
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
<style>
  body {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
</style>
<style lang="scss" scoped>
.container {

  .content {
    display: inline-block;
  }
}
</style>
