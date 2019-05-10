
<template>
  <div class="index-router">
    <MemoHeader />
    <div class="content">
      <NuxtChild :key="$route.params.id" />
    </div>
  </div>
</template>

<script>
import MemoHeader from '../components/Page/MemoHeader';
export default {
  components: {
    MemoHeader
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
  mounted() {
    /*
    if (this.$route.fullPath === '/') {
      this.$router.push('/logon');
    }
     */
  },
}
</script>

<style lang="less">
  @import '../global/colors.less';

  body {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

    color: @txt-dark;
  }
</style>

<style lang="less" scoped>
.index-router {
}
</style>
