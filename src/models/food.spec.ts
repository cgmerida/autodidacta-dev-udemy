import Food from "./food";

describe("Food Model", () => {
  const testFood = { name: "Eggs", description: "Box of eggs", price: 12.4 };
  it("should create new Food with passed params", () => {
    const food = new Food(testFood.name, testFood.description, testFood.price);

    expect(food.name).toBe(testFood.name);
    expect(food.description).toBe(testFood.description);
    expect(food.price).toBe(testFood.price);
  });
});
