<template>
  <div class="login-container">
    <div class="login-playground">
      <div class="login-cloumn">
        <div class="title">
          <p>Sign-In memoRise</p>
        </div>
        <div class="inputs-container">
          <v-text-field
              class="input-field"
              box
              clearable
              color="deep-purple"
              label="Username"
              style="min-height: 96px"
          ></v-text-field>
          <v-text-field
              class="input-field"
              box
              clearable
              color="deep-purple"
              counter="6"
              label="Password"
              style="min-height: 96px"
              type="password"
          ></v-text-field>
        </div>
        <div class="buttons-containr">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
  },
  data: () => ({
  }),
  computed: {
  },
  beforeMount() {
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/vars';

  .login-container {
    width: fit-content;
    margin: 0 auto;
    background-color: white;

    .login-playground {
      margin-top: 2rem;
      border: 1px solid @grey-darkest;
      border-radius: @border-radius;

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

          .input-field {
            padding-bottom: 1.5rem;
          }
        }
        .buttons-containr {
          flex-grow: 1;
        }
      }
    }
  }
</style>
