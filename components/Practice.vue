<template>
  <div class="practice-container">
    <div class="practice-playground">
      <div class="practice-cloumn">
        <div class="title">
        </div>
        <div class="card-rotate">
        </div>
        <div class="card-container">
        </div>
        <div class="buttons-containr">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
  @import '../global/global-vars';

  .practice-container {
    width: fit-content;

    .practice-playground {
      .practice-cloumn {
        display: flex;
        flex-direction: column;

        .title {
          flex-grow: 1;
          height: 2rem;
          background-color: orange;
        }
        .card-rotate {
          flex-grow: 1;
          height: 2rem;
          background-color: cornflowerblue;
        }
        .card-container {
          height: 326px;
          width: 326px;
          border: 1px solid @grey-darkest;
        }
        .buttons-containr {
          flex-grow: 1;
          height: 2rem;
          background-color: orange;
        }
      }
    }
  }
</style>
