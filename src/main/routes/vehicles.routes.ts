import { Router } from 'express';

const vehicleRouter = Router();

vehicleRouter.post('/register', (req, res) => {
  res.sendStatus(200);
});

export default vehicleRouter;
