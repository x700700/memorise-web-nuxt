
<template>
  <div class="index-router">
    <memo-rise />
  </div>
</template>

<script>
import MemoRise from '../components/Page/memoRise';
export default {
  components: {
    MemoRise,
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
  beforeMount() {
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

<style lang="less" scoped>
  @import '../global/vars';

  .index-router {
    background-color: @grey-lightest;
  }
</style>
