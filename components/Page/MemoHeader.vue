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
        <NuxtLink to="/logon">
          Logon
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
  @import '../../global/global-vars';

  .memo-header {

    .header-container {
      background-color: @grey-dark;
      height: 2rem;
      display: flex;
      flex-direction: row;
      align-items: center;

      .header-title {
        margin-left: @margin;
      }

      div {
        color: @grey-lightest;
        margin-right: 2rem;


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
