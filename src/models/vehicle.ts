class Vehicle {
  private readonly _name: string;

  private readonly _model: string;

  private readonly _year: number;

  constructor(name: string, model: string, year: number) {
    this._name = name;
    this._model = model;
    this._year = year;
  }

  get name(): string {
    return this._name;
  }

  get model(): string {
    return this._model;
  }

  get year(): number {
    return this._year;
  }
}

export default Vehicle;
