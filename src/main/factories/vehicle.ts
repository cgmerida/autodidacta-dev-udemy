import MailNodemailerProvider from '../../adapters/node-mailer';
import RegisterVehicle from '../../controllers/vehicles/register';
import DbAddAccount from '../../data/useCase/db-add-account';

const makeRegisterVehicleController = (): RegisterVehicle => {
  const mailer = new MailNodemailerProvider();
  const dbAddAccount = new DbAddAccount(mailer);
  const registerVehicle = new RegisterVehicle(dbAddAccount);

  return registerVehicle;
};
export default makeRegisterVehicleController;
