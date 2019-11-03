import { resolver } from 'graphql-sequelize';
import {School} from '../../models';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export const Query = {
    getSchool: resolver(School),
    getSchools: resolver(School, {
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
        after: async (schools) => {
            return schools
        }
    }),
};
