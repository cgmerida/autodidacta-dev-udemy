import express from 'express';
import 'dotenv/config';
import apiRoutes from './app.routes';
import middleware from './middleware';
// import { config as dotenv } from 'dotenv';

const app = express();

middleware(app);

app.use('/api/v1', apiRoutes);

export default app;
