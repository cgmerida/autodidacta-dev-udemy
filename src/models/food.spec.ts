import Food from "./food";

describe("Food Model", () => {
  const testFood = {
    name: "Eggs",
    description: "Box of eggs",
    price: 12.4,
    inventory: 25,
  };
  it("should create new Food with passed params", () => {
    const food = new Food(testFood);

    expect(food.name).toBe(testFood.name);
    expect(food.description).toBe(testFood.description);
    expect(food.price).toBe(testFood.price);
    expect(food.inventory).toBe(testFood.inventory);
  });
});
