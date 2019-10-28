import { resolver } from 'graphql-sequelize';
import { User } from '../../models';

export const UserMap = {
    company: resolver(User.associations.company),
    jwt: (user) => user.getJwt(),
};
