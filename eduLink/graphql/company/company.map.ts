import { resolver } from 'graphql-sequelize';
import { Company } from '../../models';

export const CompanyMap = {
    users: resolver(Company.associations.users),
};
