<template>
  <div class="login-container">
    <LoginForm />
  </div>
</template>

<script>

import LoginForm from '../Login/LoginForm';
export default {
  components: {
    LoginForm,
  },
  props: {
  },
  data: () => ({
  }),
  computed: {
  },
  beforeUpdate() {
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/vars';

  .login-container {

  }
</style>
