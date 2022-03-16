export default class MissingFormalParameter extends Error {
  constructor(public name: string) {
    super(`Error in parameter: ${name}`);
  }
}
