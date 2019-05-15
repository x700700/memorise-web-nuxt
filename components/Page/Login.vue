<template>
  <div class="login-container">
    <div class="login-playground">
      <div class="login-cloumn">
        <div class="title">
          <p>Sign-In:</p>
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

        .title {
          flex-grow: 1;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: @mid-space;
          padding: @mid-space 1rem;
          padding-left: 0;
        }
        .buttons-containr {
          flex-grow: 1;
        }
      }
    }
  }
</style>
