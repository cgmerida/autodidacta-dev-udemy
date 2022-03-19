import { Router } from 'express';
import { AdapterRoute } from '../adapters/express.adapter';
import makeRegisterVehicleController from '../factories/vehicle';

const vehicleRouter = Router();

vehicleRouter.post('/register', AdapterRoute(makeRegisterVehicleController()));

export default vehicleRouter;
