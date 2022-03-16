export default class InvalidArgument extends Error {
  constructor(public arg: string) {
    super(`Invalid Argument: ${arg}`);
  }
}
