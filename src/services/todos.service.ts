import { Todo } from '@/interfaces/todo.interface';
import { TodosModel } from '@/models/todos.model';
import { Service } from 'typedi';

@Service()
export class TodoService {
  public async getTodos(): Promise<Todo[]> {
    const todos: Todo[] = await TodosModel.query().select();
    return todos;
  }

  public async getTodosByUser(userId: number): Promise<Todo[]> {
    const todos: Todo[] = await TodosModel.query().select().where('userId', userId);
    return todos;
  }

  public async getTodoById(todoId: number): Promise<Todo> {
    const todo: Todo = await TodosModel.query().select().findOne({ id: todoId });
    return todo;
  }

  public async createTodo(todo: Todo): Promise<Todo> {
    const newTodo = await TodosModel.query().insert(todo).returning['*'];
    return newTodo;
  }

  public async updateTodo(userId: number, todo: Todo): Promise<Todo> {
    const updatedTodo = await TodosModel.query().update(todo).where('userId', userId).returning['*'];
    return updatedTodo;
  }

  public async deleteTodo(userId: number, todoId: number): Promise<Todo> {
    const deletedTodo = await TodosModel.query().delete().where('userId', userId).returning['*']
    return deletedTodo
  }
}
