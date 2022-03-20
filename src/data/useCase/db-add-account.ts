import vehicleService from '../../service/vehicle.service';
import {
  AddAccount,
  AddAccountVehicle,
} from '../../domain/useCase/add-account';
import MailNodemailerProvider from '../../adapters/node-mailer';

export default class DbAddAccount implements AddAccount {
  constructor(
    private readonly mailNodemailerProvider: MailNodemailerProvider
  ) {}

  async add(vehicle: AddAccountVehicle) {
    const newVehicle: AddAccountVehicle = await vehicleService.create(vehicle);

    this.mailNodemailerProvider.sendMail({
      to: {
        name: vehicle.name,
        email: vehicle.email,
      },
      from: {
        name: 'Gerardo Mérida',
        email: 'gmeridarn@gmail.com',
      },
      subject: 'Vehicle Registered',
      body: '<p>Welcome to your dealer!!</p>',
    });

    return Promise.resolve(newVehicle);
  }
}
