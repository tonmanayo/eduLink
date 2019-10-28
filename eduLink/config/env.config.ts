import * as dotEnv from 'dotenv';
dotEnv.config();
import { Dialect } from 'sequelize'

const dialect: Dialect = process.env.DB_DIALECT as Dialect || 'postgres';

export const ENV = {
    PORT: process.env.PORT || '3000',

    DB_HOST: process.env.DB_HOST || '127.0.0.1',
    DB_PORT: process.env.DB_PORT || '3306',
    DB_NAME: process.env.DB_NAME || 'postgres',
    DB_USER: process.env.DB_USER || 'tmack',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_DIALECT: dialect,
    JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || 'secureKey',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1y',
};
