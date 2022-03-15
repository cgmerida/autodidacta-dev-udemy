class Food {
  private readonly _name: string;

  private readonly _description: string;

  private readonly _price: number;

  constructor(name: string, description: string, price: number) {
    this._name = name;
    this._description = description;
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get price(): number {
    return this._price;
  }
}

export default Food;
