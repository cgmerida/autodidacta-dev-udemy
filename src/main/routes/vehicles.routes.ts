import { Router } from 'express';

const vehicleRouter = Router();

vehicleRouter.post('/register', (req, res) => {
  console.log(req.body);

  res.sendStatus(200);
});

export default vehicleRouter;
