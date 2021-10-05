import databaseConfig from './database';

const env = process.env.NODE_ENV || 'development';

const config = () => ({
  database: databaseConfig[env],
});

export default config;
