import Vehicle from "./vehicle";

describe("Vehicle Model", () => {
  const testVehicle = {
    name: "Nissan",
    model: "DXT",
    year: 2020,
    price: 25.2,
    inventory: true,
  };
  it("should create a new vehicle with passed params", () => {
    const vehicle = new Vehicle(testVehicle);

    expect(vehicle.name).toBe(testVehicle.name);
    expect(vehicle.model).toBe(testVehicle.model);
    expect(vehicle.year).toBe(testVehicle.year);
    expect(vehicle.price).toBe(testVehicle.price);
    expect(vehicle.inventory).toBe(testVehicle.inventory);
  });
});
