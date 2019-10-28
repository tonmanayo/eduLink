'use strict';

import { Sequelize } from 'sequelize-typescript';
import { ENV } from '../config';

export const sequelize = new Sequelize(ENV.DB_NAME, ENV.DB_USER, undefined, {
    host: ENV.DB_HOST,
    port: +ENV.DB_PORT,
    dialect: ENV.DB_DIALECT,
    password: ENV.DB_PASSWORD,
    logging: false,
    modelPaths: [__dirname + '/*.model.ts'],
    modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
    }
});

export { User } from './user.model'
export { Company } from './company.model'
