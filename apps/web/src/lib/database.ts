import { drizzle as drizzleServerless } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const {
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_OVER_HTTP
} = process.env;

const connection = connect({
  host: DATABASE_HOST,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD
});

const db = drizzleServerless(connection);

export default db;
