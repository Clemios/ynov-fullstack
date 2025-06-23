import { Pool } from 'pg';

const pool = new Pool({
  host: 'user_db', // Docker network hostname
  port: 5432,
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'user',
  database: process.env.DB_NAME || 'user_db'
});

export default pool;
