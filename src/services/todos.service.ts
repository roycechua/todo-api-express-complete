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
    const newTodo = await TodosModel.query().insert(todo).into('todos');
    return newTodo;
  }

  public async updateTodo(todoId: number, todo: Todo): Promise<Todo> {
    await TodosModel.query().update(todo).where('id', todoId).where('userId', todo.userId).into('todos');
    const updatedTodo = await TodosModel.query().findOne({ id: todoId });
    return updatedTodo;
  }

  public async deleteTodo(userId: number, todoId: number): Promise<Todo> {
    const deletedTodo = await TodosModel.query().findOne({ userId: userId });
    await TodosModel.query().delete().where('userId', userId).where('id', todoId);

    return deletedTodo;
  }
}
