import { resolver } from 'graphql-sequelize';
import { User } from '../../models';

export const UserMap = {
    school: resolver(User.associations.school),
    jwt: (user) => user.getJwt(),
};
