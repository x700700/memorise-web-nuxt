<template>
  <div class="login-container">
    <p>Logged in with: {{ nickName }}</p>
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
    nickName() {
      return this.$store.state.user.nickName;
    },
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
    text-align: center;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: -1rem;
  }
</style>
