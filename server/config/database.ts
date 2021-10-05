import { DatabaseConfig } from './interfaces/db';
import * as dotenv from 'dotenv';

dotenv.config();
const databaseConfig: DatabaseConfig = {
  development: {
    type: 'postgres',
    database: process.env.DB_NAME,
    // define: {
    //   underscored: true,
    // },
    dialect: 'postgres',
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER || 'postgres',
  },
  production: {
    type: 'postgres',
    database: process.env.DB_NAME || 'elpaca',
    define: {
      underscored: true,
    },
    dialect: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    password: process.env.DB_PASSWORD || '',
    port: Number(process.env.DB_PORT) || 5432,
    seederStorage: 'sequelize',
    username: process.env.DB_USER || 'postgres',
    logging: true,
  },
  test: {
    type: 'postgres',
    database: process.env.DB_NAME || 'elpaca_test',
    define: {
      underscored: true,
    },
    dialect: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    password: process.env.DB_PASSWORD || '',
    port: Number(process.env.DB_PORT) || 5432,
    seederStorage: 'sequelize',
    username: process.env.DB_USER || 'postgres',
    logging: false,
  },
};

export default databaseConfig;
