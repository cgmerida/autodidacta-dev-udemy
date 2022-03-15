import Vehicle from "./vehicle";

describe("Vehicle Model", () => {
  const testVehicle = { name: "Nissan", model: "DXT", year: 2020 };
  it("should create a new vehicle with passed params", () => {
    const vehicle = new Vehicle(
      testVehicle.name,
      testVehicle.model,
      testVehicle.year
    );

    expect(vehicle.name).toBe(testVehicle.name);
    expect(vehicle.model).toBe(testVehicle.model);
    expect(vehicle.year).toBe(testVehicle.year);
  });
});
