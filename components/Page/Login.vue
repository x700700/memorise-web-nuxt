<template>
  <div class="login-container">
    <LoginForm v-if="authChecked && !isLoggedIn" />
    <div v-if="authChecked && isLoggedIn" class="logout-button-contianer">
      <p>Logged in with: {{ nickName }}</p>
      <v-btn
          :disabled="duringLogout"
          :loading="duringLogout"
          color="deep-purple darken-1"
          class="btn-logout"
          @click="logout"
      >Logout
      </v-btn>
    </div>
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
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
    authChecked() {
      return this.$store.state.user.authChecked;
    },
    duringLogout() {
      return this.$store.state.user.duringFetch;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout');
    },
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

    .logout-button-contianer {
      .btn-logout {
        color: @white;
      }
    }
  }
</style>
