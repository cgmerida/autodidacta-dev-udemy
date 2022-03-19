export default class MissingFormalParameter extends Error {
  constructor(message: string) {
    super(`Error in parameter: ${message}`);
  }
}
