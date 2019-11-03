import { resolver } from 'graphql-sequelize';
import { School } from '../../models';
import to from 'await-to-js';

export const Mutation = {
    createSchool: resolver(School, {
        before: async (findOptions, { data }) => {
            let err, school;
            [err, school] = await to(School.create(data) );
            if (err) {
                throw err;
            }
            findOptions.where = { id: school.id };
            return findOptions;
        },
        after: (school) => {
            // school.login = true;
            return school;
        }
    }),
    deleteSchool: resolver(School, {
        before: async (findOptions, { id }) => {
            findOptions.where = { id };
            return findOptions;
        },
        after: async (school) => {
            if (school && school.id) {
                let err, data;
                [err, data] = await to(School.destroy({ where: { id: school.id } }) );
                if (err) {
                    throw err;
                }
                console.log(data);
                return school;
            }
            throw "School does not exist";
        }
    }),
    updateSchool: resolver(School, {
        // TODO make a validation model to restrict updating fields
        before: async (findOptions, {data, id}) => {
            if (data && data.name) {
                let err, school;
                [err, school] = await to(School.update({...data}, { where: { id } }) );
                if (err) {
                    throw err;
                }
                console.log("school");
                console.log(school);
            }
            findOptions.where = { id };
            return findOptions;
        },
        after: async (school) => {
            return school;
        }
    }),
};
