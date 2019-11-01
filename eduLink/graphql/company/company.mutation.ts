import { resolver } from 'graphql-sequelize';
import { Company } from '../../models';
import to from 'await-to-js';

export const Mutation = {
    createCompany: resolver(Company, {
        before: async (findOptions, { data }) => {
            let err, company;
            [err, company] = await to(Company.create(data) );
            if (err) {
                throw err;
            }
            findOptions.where = { id: company.id };
            return findOptions;
        },
        after: (company) => {
            // company.login = true;
            return company;
        }
    }),
    deleteCompany: resolver(Company, {
        before: async (findOptions, { id }) => {
            findOptions.where = { id };
            return findOptions;
        },
        after: async (company) => {
            if (company && company.id) {
                let err, _cpny;
                [err, _cpny] = await to(Company.destroy({ where: { id: company.id } }) );
                if (err) {
                    throw err;
                }
                console.log(_cpny);
                return company;
            }
            throw "Company does not exist";
        }
    }),
};
