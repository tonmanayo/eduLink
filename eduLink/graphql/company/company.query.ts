import { resolver } from 'graphql-sequelize';
import { Company } from '../../models';

export const Query = {
    getCompany: resolver(Company),
};
