import * as dotenv from 'dotenv';

dotenv.config();

export const credentials = {
  email: process.env.USER_EMAIL || '',
  password: process.env.USER_PASSWORD || '',
};