export default class ServerError extends Error {
  constructor(stack: string) {
    const err = 'Server Internal Error';
    super(err);
    this.name = err;
    this.stack = stack;
  }
}
