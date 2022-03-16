import FoodHelper from "../helpers/food-model-helper";

class Food {
  constructor(private readonly food: FoodHelper) {}

  public get name(): string {
    return this.food.name;
  }

  public get description(): string {
    return this.food.description;
  }

  public get price(): number {
    return this.food.price;
  }

  public get inventory(): number {
    return this.food.inventory;
  }
}

export default Food;
