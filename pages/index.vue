
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
  @import '../global/global-vars.less';

  html {
    // height: 100%;
  }
  body {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

    color: @txt-dark;
    // height: 100%;
    // min-height: 100%;
    overflow: hidden;
  }
</style>

<style lang="less" scoped>
  @import '../global/global-vars';

  .index-router {
    background-color: @grey-lightest;

    .content {
      max-width: 760px;
      height: 95.8vh;
      overflow-y: scroll;
      background-color: @white;
      margin: 0 auto 0 auto;
      padding: @margin;

      @media (max-width: @max-mobile-width) {
        max-width: 100%;
      }
    }
  }
</style>
