import { Express } from 'express';
import cors from '../middleware/cors';
import jsonParser from '../middleware/json-parser';

export default (app: Express) => {
  const mds = [jsonParser, cors];
  mds.forEach((m) => {
    app.use(m);
  });
};
