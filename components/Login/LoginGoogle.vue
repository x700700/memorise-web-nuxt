<template>
  <div class="login-google-container">
    <div @click="pressed">
      <GoogleLogin :params="gloginParms" :on-success="onGloginSuccess" :on-failure="onGloginFailure">
        <p>Login via Google</p>
      </GoogleLogin>
    </div>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import consts from '../../global/consts';

export default {
  components: {
    GoogleLogin,
  },
  props: {
    pressed: {
      type: Function,
      required: true,
    },
    ended: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    gloginParms: {
      client_id: consts.GOOGLE_CLIENT_ID,
    },
  }),
  computed: {
    duringLogin() {
      return this.$store.state.user.duringFetch;
    },
  },
  methods: {
    onGloginSuccess(googleUser) {
      const token = googleUser.getAuthResponse().id_token;
      // console.warn('token=', token);
      this.$store.dispatch('user/loginGoogle', token);

      this.ended();
    },
    onGloginFailure() {
      this.ended();
    },
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/vars';

  .login-google-container {

  }
</style>
