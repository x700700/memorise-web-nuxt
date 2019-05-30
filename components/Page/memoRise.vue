
<template>
  <div class="memorise-container">
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
import { getData } from 'nuxt-storage/local-storage';
import Axios from '../../global/myAxios';
import MemoHeader from './MemoHeader';

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
  data: () => ({
    routedToLogin: false,
  }),
  computed: {
    authChecked() {
      return this.$store.state.user.authChecked;
    },
  },
  watch: {
    authChecked() {
      if (!this.routedToLogin && this.$store.state.user.authChecked && !this.$store.state.user.isLoggedIn) {
        this.routedToLogin = true;
        console.error('Not signed in - routed to /login');
        this.$router.push('/login');
      }
    },
  },
  beforeMount() {
    Axios.initAxios(this.$axios, this.$router);
    const jwtToken = getData('jwtToken');
    Axios.setToken(jwtToken);
    this.$store.dispatch('user/auth');
  },
  mounted() {
    /*
    if (this.$route.fullPath === '/') {
      this.$router.push('/login');
    }
     */
  },
}
</script>

<style lang="less">
  @import '../../global/vars.less';

  html {
    height: 100%;
  }
  body {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

    height: 100%;
    min-height: 100%;
    color: @txt-dark;
    background-color: @body-bg;

    @media (max-width: @max-mobile-width) {
      // background-color: @white;
    }
  }
</style>

<style lang="less" scoped>
  @import '../../global/vars';

  .memorise-container {
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
        background-color: @banners-bg;
        padding: 10px 0 30px 0;
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
          height: @top-nav-height-mobile;
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
        background-color: @grey-lightest;
        height: 100%;
        min-height: 100%;

        @media (max-width: @max-mobile-width) {
          // background-color: @white;
          padding-top: @top-nav-height-mobile;
          max-width: 100%;
        }
      }
    }
  }
</style>
