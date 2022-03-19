import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  name: { type: 'string' },
  model: { type: 'string' },
  year: { type: 'number' },
  color: { type: 'string' },
});

export default vehicleSchema;

export class Vehicle {
  name: string;

  model: string;

  year: number;

  color: string;
}
