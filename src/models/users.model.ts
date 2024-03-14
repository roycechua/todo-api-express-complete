import { Model, ModelObject } from 'objection';
import { User } from '@interfaces/users.interface';
import { TodosModel } from './todos.model';

export class UserModel extends Model implements User {
  id!: number;
  email!: string;
  password!: string;

  static tableName = 'users'; // database table name
  static idColumn = 'id'; // id column name

  static get relationMappings() {
    return {
      todos: {
        relation: Model.HasManyRelation,
        modelClass: TodosModel,
        join: {
          from: 'users.id',
          to: 'posts.userId',
        },
      },
    };
  }
}

export type UserShape = ModelObject<UserModel>;
