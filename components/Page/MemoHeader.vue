<template>
  <div class="memo-header">
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

.memo-header {
  @import '../../global/colors';

  background-color: @grey-dark;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;

  div {
    color: @grey-lightest;
    margin-right: 2rem;


    @media only screen and (max-width: 600px) {
      margin-right: 1rem;
      font-size: 12px;
    }
  }
  .header-title {

  }
}
</style>
