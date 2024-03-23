import { Model } from 'objection';
import Knex from 'knex';
import { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = async (environment = 'development') => {
  const dbConfig = {
    test: {
      client: 'mysql',
      connection: {
        charset: 'utf8',
        timezone: 'UTC',
        user: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT,
        database: 'test',
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
    development: {
      client: 'mysql',
      connection: {
        charset: 'utf8',
        timezone: 'UTC',
        user: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT,
        database: DB_DATABASE,
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
  };

  await Model.knex(Knex(dbConfig[environment]));
};
