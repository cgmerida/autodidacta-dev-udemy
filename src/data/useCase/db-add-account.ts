import { Vehicle } from '../../domain/models/Vehicle';
import vehicleService from '../../service/vehicle.service';

import {
  AddAccount,
  AddAccountVehicle,
} from '../../domain/useCase/add-account';

export default class DbAddAccount implements AddAccount {
  // eslint-disable-next-line class-methods-use-this
  add(vehicle: AddAccountVehicle): Promise<Vehicle> {
    return vehicleService.create(vehicle);
  }
}
