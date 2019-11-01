import { resolver } from 'graphql-sequelize';
import {Company} from '../../models';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export const Query = {
    getCompany: resolver(Company),
    getCompanies: resolver(Company, {
        before: async (findOptions, args) => {
            // filter the results
            if (args.query) {
                findOptions.where = {
                    name: {
                        [Op.iLike]: `%${args.query}%`
                    }
                };
            }
            // order by name column
            findOptions.order = [['name', 'ASC']];
            return findOptions

        },
        after: async (companies) => {
            return companies
        }
    }),
};
