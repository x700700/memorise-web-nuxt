<template>
  <div class="memo-header">
    <div class="header-container">
      <div class="header-title">
        memoRise
      </div>
      <div>
        <NuxtLink to="/">
          Root
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/login">
          Login
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/trainings">
          Trainings
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/trainings/123">
          Edit
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/trainings/123/practice">
          Practice
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
  @import '../../global/vars';

  .memo-header {

    .header-container {
      background-color: @grey-dark;
      color: @txt-light;
      height: @top-nav-height;
      display: flex;
      flex-direction: row;
      align-items: center;

      @media (max-width: @max-mobile-width) {
        height: @top-nav-height-mobile;
      }

      .header-title {
        margin-left: @mid-space;
      }

      div {
        margin-right: 1.5rem;

        @media (max-width: @max-mobile-width) {
          margin-right: 1rem;
          font-size: 12px;
        }

        a {
          color: @txt-light;
          text-decoration: none;

          &:visited {
            color: @txt-light;
          }
        }
      }
    }
  }
</style>
