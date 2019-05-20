<template>
  <div class="login-container">
    <GoogleLogin :params="gloginParms" :onSuccess="onGloginSuccess" :onFailure="onGloginFailure">Google Login</GoogleLogin>
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
import GoogleLogin from 'vue-google-login';
import LoginForm from '../Login/LoginForm';

export default {
  components: {
    LoginForm,
    GoogleLogin,
  },
  props: {
  },
  data: () => ({
    gloginParms: {
      client_id: '370816663715-toqg1i2f2kfif0jckraja1hrfka8plmb.apps.googleusercontent.com',
    }
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
    // Google login:
    // client id: 370816663715-toqg1i2f2kfif0jckraja1hrfka8plmb.apps.googleusercontent.com
    // client secret: sSHa5DYYx31gFowoGZf37yFl

    logout() {
      this.$store.dispatch('user/logout');
    },
    onGloginFailure() {},
    onGloginSuccess() {},
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
