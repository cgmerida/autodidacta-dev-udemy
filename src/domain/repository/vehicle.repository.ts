import mongoose from 'mongoose';
import vehicleSchema from '../models/Vehicle';

export default mongoose.model('vehicle', vehicleSchema);
