<template>
  <div class="practice-container">
    <!--    <p>Practice Training id: {{ id }}</p>-->
    <div class="practice-playground">
      <div class="practice-cloumn">
        <div class="title">
        </div>
        <div class="card-rotate">
          <CardRotateBtn :rotate-card="rotateCard" />
        </div>
        <div class="practice-card">
          <Card :q="q" :a="a"
                :card-front="cardFront" :rotate-card="rotateCard"
                :next-card-transition-width="nextCardTransitionWidth" :next-card-transition-full="nextCardTransitionFull" />
        </div>
        <div class="buttons-containr">
          <CardSucessBtns :next-card="nextCard" :disable="nextCardTransitionFull" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardsPeck from '../global/cardsPeck';
import Card from './Play/Card';
import CardRotateBtn from './Play/CardRotateBtn';
import CardSucessBtns from './Play/CardSucessBtns';

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
    cardNumber: 0,
    cardFront: true,
    nextCardTransitionWidth: false,
    nextCardTransitionFull: false,
    cardsPack: null,
  }),
  computed: {
    q() {
      return this.cardsPack.top().q;
    },
    a() {
      return this.cardsPack.top().a;
    },
  },
  beforeMount() {
    this.cardsPack = new cardsPeck();
  },
  methods: {
    rotateCard() {
      this.cardFront = !this.cardFront;
    },
    nextCard() {
      this.nextCardTransitionFull = true;
      this.nextCardTransitionWidth = true;
      this.cardFront = true;

      // Todo - JQuery Slide - get cb when css transition
      // make width css transition work
      setTimeout(() => {
        this.cardNumber += 1;
        this.cardsPack.nextCard();
        this.nextCardTransitionWidth = false;
        setTimeout(() => {
          this.nextCardTransitionFull = false;
        }, 500);
      }, 500);
    },
  },
}
</script>

<style lang="less" scoped>
  @import '../global/vars';

  .practice-container {
    width: fit-content;
    margin: 0 auto;
    background-color: white;

    .practice-playground {
      margin-top: 2rem;
      border: 1px solid @grey-darkest;
      border-radius: @border-radius;

      @media (max-width: @max-mobile-width) {
        margin-top: 1rem;
        border: none;
        border-radius: 0;
      }

      .practice-cloumn {
        display: flex;
        flex-direction: column;

        .title {
          flex-grow: 1;
          height: 2rem;
          // background-color: orange;
        }
        .card-rotate {
          flex-grow: 1;
          height: 2rem;
          margin-bottom: 1rem;
          // background-color: cornflowerblue;
        }
        .practice-card {
          height: 326px;
          width: 326px;
          border: 1px solid @grey-darkest;
          margin: 1rem;
          // border-radius: @border-radius;

          @media (max-width: @max-mobile-width) {
            margin: 0;
          }

          &:focus, &:active {
            outline: none;
          }
        }
        .buttons-containr {
          flex-grow: 1;
          height: 2rem;
          margin-top: 1rem;
          // background-color: orange;
        }
      }
    }
  }
</style>
