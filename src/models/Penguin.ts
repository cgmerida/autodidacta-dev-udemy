import Bird from "./Bird";

export default class Penguin extends Bird {
  fly(): any {
    throw new Error("I cannot fly");
  }

  swim() {
    return "I can swim";
  }
}
