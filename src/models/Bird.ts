import IBird from "../interfaces/IBird";

export default class Bird {
  constructor(public bird: IBird) {}

  fly() {
    return this.bird.name;
  }
}
