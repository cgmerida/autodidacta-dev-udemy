import mongoose from 'mongoose';
import 'dotenv/config';

const { MONGODB_USER, MONGODB_PASS, MONGODB_HOST, MONGODB_DB } = process.env;
export default async (): Promise<void> => {
  const url = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}/${MONGODB_DB}`;
  try {
    await mongoose.connect(url, { autoCreate: true });
    console.log('mongoose connected');
  } catch (err) {
    console.log(err);
  }
};
