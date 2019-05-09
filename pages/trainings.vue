<template>
  <div class="container">
    <p>memoRise</p>
    <br>
    <div>
    Route to:
      <ul>
        <li>
          <NuxtLink to="/trainings">
            Trainings List
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/trainings/123">
            Edit Training
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/trainings/123/practice">
            Practice Training
          </NuxtLink>
        </li>
      </ul>
    </div>
    <br />
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
