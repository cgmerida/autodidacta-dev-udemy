import { Vehicle } from '../models/Vehicle';

export interface AddAccountVehicle {
  name: string;
  model: string;
  year: number;
  color: string;
  email: string;
}

export interface AddAccount {
  add: (vehicle: AddAccountVehicle) => Promise<Vehicle>;
}
