import _ from 'lodash';

const practice = [
  { q: 'Cat', a: 'חתול' },
  { q: 'Home', a: 'בית' },
  { q: 'Smile', a: 'חיוך' },
  /*
  { q: 'Hirshfeld', a: 'שדה צבאים' },
  { q: 'Guy Weiss', a: 'לך תדע' },
   */
];


export default class cardsPack {

  constructor() {
    this.initialPack = _.cloneDeep(practice);
    this.currentPack = _.cloneDeep(this.initialPack.filter(x => x.q && x.a));
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
