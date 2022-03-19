import { Vehicle } from '../domain/models/Vehicle';
import vehicleRepository from '../domain/repository/vehicle.repository';

export class VehicleServiceClass {
  async create(vehicle: Vehicle) {
    return vehicleRepository.create(vehicle);
  }
}

export default new VehicleServiceClass();
