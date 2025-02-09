import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();
console.log('🔍 DATABASE_URL:', process.env.DATABASE_URL);

const pgp = pgPromise();
export const db = pgp({
  connectionString: process.env.DATABASE_URL || '', 
  ssl: process.env.DATABASE_URL?.includes('neon.tech') ? { rejectUnauthorized: false } : undefined,
});
