<template>
  <div class="practice-container">
    <p>Practice Training id: {{ id }}</p>
    <div class="practice-playground">
      <div class="practice-cloumn">
        <div class="title">
        </div>
        <div class="card-rotate">
          <CardRotateBtn :rotate-card="rotateCard" />
        </div>
        <div class="practice-card">
          <Card :card-front="cardFront" :rotate-card="rotateCard" />
        </div>
        <div class="buttons-containr">
          <CardSucessBtns :next-card="nextCard" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Play/Card';
import CardRotateBtn from './Play/CardRotateBtn';
import CardSucessBtns from './Play/CardSucessBtns';

/*
const training = [
  { q: 'Cat', a: 'חתול' },
  { q: 'Home', a: 'בית' },
];
 */

export default {
  components: {
    CardSucessBtns,
    CardRotateBtn,
    Card
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    cardFront: true,
  }),
  methods: {
    rotateCard() {
      this.cardFront = !this.cardFront;
    },
    nextCard() {
      console.warn('next Card')
    },
  },
}
</script>

<style lang="less" scoped>
  @import '../global/global-vars';

  .practice-container {
    width: fit-content;
    margin: 0 auto;

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
          // background-color: cornflowerblue;
        }
        .practice-card {
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
