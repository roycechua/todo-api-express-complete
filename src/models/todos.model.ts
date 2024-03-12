import { Todo } from "@/interfaces/todo.interface";
import { Model } from "objection";
import { UserModel } from "./users.model";

export class TodosModel extends Model implements Todo {
  id!: number;
  userId!: number;
  title!: string;
  completed!: boolean;
  
  static tableName: string = 'todos';
  static idColumn: string | string[] = 'id';

  static get relationMappings() {
    return {
      assignees: {
        relation: Model.HasManyRelation,
        modelClass: UserModel,
        join: {
          from: 'todos.userId',
          to: 'users.id'
        }
      }
    }
  }
}
