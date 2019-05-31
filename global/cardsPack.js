import _ from 'lodash';
// import { cardsPackStub } from '../stubs/cardsPack';

export default class cardsPack {

  constructor(training) {
    const exercises = training && training.exercises && _.values(training.exercises);
    // console.warn('cardsPack - exercises = ', exercises);
    this.initialPack = _.cloneDeep(exercises);
    this.currentPack = _.cloneDeep(this.initialPack.filter(x => x.question && x.answer));
    this.nextPack = [];
    this.validate();
  }

  validate = () => {
    if (!this.initialPack || this.initialPack.length === 0) {
      throw new Error('cards pack is empty');
    }
  };

  top = () => {
    return this.currentPack[0];
  };

  nextCard = () => {
    let packFinished = false;
    if (this.currentPack.length === 0 && this.nextPack.length === 0) {
      console.warn('fin');
      packFinished = true;
    } else {
      packFinished = false;
      this.nextPack.unshift(this.currentPack.splice(0, 1)[0]);
      if (this.currentPack.length === 0) {
        this.currentPack = _.cloneDeep(this.nextPack);
        this.currentPack = _.shuffle(this.currentPack.slice(1));
        this.currentPack.push(this.nextPack[0]);
        this.nextPack = [];
      }
    }
    return packFinished;
  }
}
