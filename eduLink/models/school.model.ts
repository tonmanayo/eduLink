import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { User } from './user.model'
@Table({timestamps: true})
export class School extends Model<School> {

    @Column({primaryKey: true, autoIncrement: true})
    id: number;

    @Column
    name: string;

    @HasMany(() => User)
    users: User[];
}
