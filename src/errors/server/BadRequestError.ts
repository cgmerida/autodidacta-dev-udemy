export default class BadRequestError extends Error {
  constructor(stack: string) {
    const err = 'Bad Request Error';
    super(err);
    this.message = err;
    this.stack = stack;
  }
}
