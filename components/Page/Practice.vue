<template>
  <div class="practice-container">
    <div class="practice-playground" v-if="loaded">
      <div class="practice-cloumn">
        <div class="title">
          <p>Animals Vocabulary</p>
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
          <CardSucessBtns :done-right="nextCard" :done-wrong="nextCard" :disable="nextCardTransitionFull" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardsPack from '../../global/cardsPack';
import Card from '../Play/Card';
import CardRotateBtn from '../Play/CardRotateBtn';
import CardSucessBtns from '../Play/CardSucessBtns';

export default {
  components: {
    CardSucessBtns,
    CardRotateBtn,
    Card
  },
  props: {
  },
  data: () => ({
    cardNumber: 0,
    cardFront: true,
    nextCardTransitionWidth: false,
    nextCardTransitionFull: false,
    cardsPack: null,
    loaded: false,
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
    q() {
      return this.cardsPack && this.cardsPack.top() && this.cardsPack.top().question;
    },
    a() {
      return this.cardsPack && this.cardsPack.top() && this.cardsPack.top().answer;
    },
    training() {
      return this.$store.state.training.playedTraining;
    },
  },
  watch: {
    training() {
      const trn = this.$store.state.training.playedTraining;
      if (!this.loaded && trn) {
        console.warn('hi');
        this.cardsPack = new cardsPack(trn);
        this.loaded = true;
        // Todo Post-MVP - Make 5 second tooltip on the card - 'Click me to flip side' (instead of rotate button)
      }
    },
  },
  beforeMount() {
    this.$store.dispatch('training/loadTraining', { id: this.id, played: true });
  },
  methods: {
    rotateCard() {
      this.cardFront = !this.cardFront;
    },
    nextCard() {
      this.nextCardTransitionFull = true;
      this.nextCardTransitionWidth = true;
      this.cardFront = true;

      // Todo Post-MVP - JQuery Slide - get cb when css transition
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
  @import '../../global/vars';

  .practice-container {
    font-size: 22px;
    width: fit-content;
    margin: 0 auto;
    background-color: white;
    transform: scale(1.15) translateY(2rem);

    @media (max-width: @max-mobile-width) {
      transform: scale(1) translateY(0);
    }

    .practice-playground {
      margin-top: 2rem;
      border: 1px solid @grey-darkest;
      border-radius: @border-radius;

      @media (max-width: @max-mobile-width) {
        margin-top: 1rem;
        // border: none;
        border-radius: 0;
      }

      .practice-cloumn {
        display: flex;
        flex-direction: column;
        margin: 0 1rem;

        .title {
          flex-grow: 1;
          font-family: fantasy;
          font-size: 16px;
          font-weight: bold;
          margin-top: @mid-space;
          padding: @mid-space 1rem;
          padding-left: 0;

          @media (max-width: @max-mobile-width) {
            margin-bottom: @mid-space;
          }
        }
        .card-rotate {
          flex-grow: 1;
        }
        .practice-card {
          height: 326px;
          width: 326px;
          border: 1px solid @grey-light;
          margin: 1rem 0;
          transition: border 0.9s ease-in-out;

          &:hover {
            border: 1px solid @grey-darkest;
          }
          @media (max-width: @max-mobile-width) {
            margin: 0;
            &:hover {
              border: 1px solid @grey-darkest;
            }

          }
          &:focus, &:active {
            outline: none;
          }
        }
        .buttons-containr {
          flex-grow: 1;
        }
      }
    }
  }
</style>
