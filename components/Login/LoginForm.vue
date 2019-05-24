<template>
  <div class="login-form-container">
    <v-app id="login" class="v-app-class">
    <div class="login-playground">
      <div class="login-cloumn">
        <div class="title">
          <p>Sign-In memoRise</p>
        </div>
        <div @click="googleLoginPressed">
          <GoogleLogin :params="gloginParms" :onSuccess="onGloginSuccess" :onFailure="onGloginFailure">
            <p>Login via Google</p>
          </GoogleLogin>
        </div>
        <p>Or:</p>
        <br />
        <div class="inputs-container">
          <v-form
              ref="form"
              v-model="form"
              height="500px"
          >
            <v-text-field
                ref="username"
                v-model="username"
                :rules="[rules.required]"
                :error-messages="loginError"
                :disabled="gloginPressed"
                class="input-field"
                box
                clearable
                color="deep-purple"
                label="Username"
                style="min-height: 96px"
            ></v-text-field>
            <v-text-field
                v-model="password"
                :rules="[rules.required, rules.length(1)]"
                :disabled="gloginPressed"
                class="input-field"
                box
                clearable
                color="deep-purple"
                counter="6"
                label="Password"
                style="min-height: 96px"
                type="password"
            ></v-text-field>
          </v-form>
          <v-btn
              :disabled="!form"
              :loading="duringLogin"
              color="deep-purple lighten-4"
              class="btn-login"
              @click="login"
          >Login
          </v-btn>
        </div>
        <div class="buttons-containr">
        </div>
      </div>
    </div>
    </v-app>
  </div>
</template>

<script>
import $ from 'jquery';
import GoogleLogin from 'vue-google-login';
import consts from '../../global/consts';

export default {
  components: {
    GoogleLogin,
  },
  props: {
  },
  data: () => ({
    form: false,
    username: undefined,
    password: undefined,
    loginError: null,
    gloginPressed: false,
    gloginParms: {
      client_id: consts.GOOGLE_CLIENT_ID,
    },
    rules: {
      email: v => (v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Minimum ${len} characters required`,
      password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required'
    }
  }),
  computed: {
    duringLogin() {
      return this.$store.state.user.duringFetch;
    },
  },
  beforeUpdate() {
    this.loginError = this.$store.state.user.error;
    if (this.loginError && this.username) {
      this.loginError = null;
    }
    if (this.loginError) {
      this.$refs.username.focus();
    }
  },
  mounted() {
    // Supresss Material v-app min-height:
    $('.login-form-container .application--wrap').css('min-height', '0');

    // Start focus - Username field
    this.$refs.username.focus();
  },
  methods: {
    login() {
      const loginBody = {
        nickName: this.username,
        password: this.password
      };
      this.$refs.form.reset();
      this.$store.dispatch('user/login', loginBody);
    },
    googleLoginPressed() {
      this.gloginPressed = true;
      this.$refs.form.reset();
    },
    onGloginSuccess(googleUser) {
      const token = googleUser.getAuthResponse().id_token;
      // console.warn('token=', token);
      this.$store.dispatch('user/loginGoogle', token);

      this.gloginPressed = false;
    },
    onGloginFailure() {
      this.gloginPressed = false;
    },
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/vars';

  .login-form-container {
    width: fit-content;
    margin: 0 auto;
    background-color: white;

    .v-app-class {
      background-color: @grey-lightest;
      overflow: hidden;
    }

    .login-playground {
      background-color: white;
      margin-top: 2rem;
      border: 1px solid @grey-darkest;
      border-radius: @border-radius;
      font-weight: normal;

      @media (max-width: @max-mobile-width) {
        margin-top: 1rem;
        border-radius: 0;
      }

      .login-cloumn {
        display: flex;
        flex-direction: column;
        margin: 0 1rem;
        padding: 1rem;

        .title {
          flex-grow: 1;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: @mid-space;
          padding: @mid-space 1rem;
          padding-left: 0;
        }
        .inputs-container {
          width: 20rem;
          display: flex;
          flex-direction: column;

          @media (max-width: @max-mobile-width) {
            width: 18rem;
          }

          .input-field {
            padding-bottom: 1.5rem;
          }
          .btn-login {
            margin-top: 1.5rem;
            width: 80%;
            height: 45px;
            align-self: center;
          }
        }
        .buttons-containr {
          flex-grow: 1;
        }
      }
    }
  }
</style>
