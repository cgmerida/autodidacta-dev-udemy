import VehicleHelper from '../helpers/vehicle-model-helper';

class Vehicle {
  constructor(private readonly vehicle: VehicleHelper) {}

  get name(): string {
    return this.vehicle.name;
  }

  get model(): string {
    return this.vehicle.model;
  }

  get year(): number {
    return this.vehicle.year;
  }

  get price(): number {
    return this.vehicle.price;
  }

  get inventory(): boolean {
    return this.vehicle.inventory;
  }
}

export default Vehicle;
