import RegisterVehicle from '../../controllers/vehicles/register';
import DbAddAccount from '../../data/useCase/db-add-account';

const makeRegisterVehicleController = (): RegisterVehicle => {
  const dbAddAccount = new DbAddAccount();
  const registerVehicle = new RegisterVehicle(dbAddAccount);

  return registerVehicle;
};
export default makeRegisterVehicleController;
