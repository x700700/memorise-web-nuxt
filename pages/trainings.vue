<template>
  <div class="index-router">
    <p>memoRise</p>
    <br>
    <div>
    Route to:
      <ul>
        <li>
          <NuxtLink to="/trainings">
            Trainings List
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/trainings/123">
            Edit Training
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/trainings/123/practice">
            Practice Training
          </NuxtLink>
        </li>
      </ul>
    </div>
    <br />
    <div class="content">
      <NuxtChild />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.index-router {
  color: green;
}
</style>
