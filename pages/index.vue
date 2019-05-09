
<template>
  <div class="index-router">
    <p>memoRise</p>
    <br>
    <div>
      Route to:
      <ul>
        <li>
          <NuxtLink to="/">
            Root
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/logon">
            Logon
          </NuxtLink>
        </li>
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
      <NuxtChild :key="$route.params.id" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'memoRise',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'memorise', name: 'memoRise', content: 'memoRise' }
      ]
    }
  },
  mounted() {
    if (this.$route.fullPath === '/') {
      this.$router.push('/logon');
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
.index-router {
  color: cornflowerblue;
}
</style>
