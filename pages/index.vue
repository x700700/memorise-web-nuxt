
<template>
  <div class="index-router">
    <div class="nav-left">
      <div class="nav-left-content">
      </div>
    </div>
    <div class="main-container">
      <div class="nav-top">
        <div class="nav-top-container">
          <MemoHeader />
        </div>
      </div>
      <div class="content">
        <NuxtChild :key="$route.params.id" />
      </div>
    </div>
    <div class="nav-right">
      <div class="nav-right-content">
      </div>
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
    // overflow: hidden;
  }
</style>

<style lang="less" scoped>
  @import '../global/global-vars';

  .index-router {
    background-color: @grey-lightest;

    .nav-left, .nav-right {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      vertical-align: baseline;
      background: transparent;
      height: 100%;

      .nav-left-content, .nav-right-content {
        position: fixed;
        z-index: 10;
        top: 0;
        width: @left-nav-width;
        height: 100%;
        padding: 10px 0 30px 0;
        background-color: @grey-lightest;
        color: @txt-dark;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        @media (max-width: @max-mobile-width) {
          display: none;
        }
      }
      .nav-left-content {
        left: 0;
      }
      .nav-right-content {
        right: 0;
      }
    }

    .main-container {
      margin-left: @left-nav-width;
      margin-right: @left-nav-width;
      min-width: 358px;

      @media (max-width: @max-mobile-width) {
        margin-left: 0;
        margin-right: 0;
      }

      .nav-top {
        z-index: 11;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        min-width: @max-mobile-width;
        height: @top-nav-height;
        padding-left: @left-nav-width;
        padding-right: @left-nav-width;
        box-sizing: border-box;
        pointer-events: none;

        @media (max-width: @max-mobile-width) {
          padding-left: 0;
          padding-right: 0;
        }

        .nav-top-container {
          pointer-events: auto;
        }
      }

      .content {
        display: block;
        padding-top: @top-nav-height;
        padding-bottom: @mid-space;
        background-color: @white;
        // max-width: 760px;
        // height: 95.8vh;
        // overflow-y: scroll;
        // margin: 0 auto 0 auto;

        @media (max-width: @max-mobile-width) {
          max-width: 100%;
        }
      }
    }
  }
</style>
