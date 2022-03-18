import express from 'express';
import 'dotenv/config';
import appRoutes from './app.routes';
// import { config as dotenv } from 'dotenv';

const app = express();
app.use('/api/v1', appRoutes);

export default app;
