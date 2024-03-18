import { TodoController } from '@/controllers/todos.controller';
import { CreateTodoDto, UpdateTodoDto } from '@/dtos/todos.dto';
import { Routes } from '@/interfaces/routes.interface';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { ValidationMiddleware } from '@/middlewares/validation.middleware';
import { Router } from 'express';

export class TodoRoute implements Routes {
  public path = '/todos';
  public router = Router();
  public todo = new TodoController();

  constructor() {
    this.router.use(AuthMiddleware);
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.todo.getTodos);
    this.router.get(`${this.path}/:id(\\d+)`, this.todo.getTodoById);
    this.router.get(`${this.path}/user/:id(\\d+)`, this.todo.getTodosByUser);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateTodoDto), this.todo.createTodo);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateTodoDto), this.todo.updateTodo);
    this.router.delete(`${this.path}/:userId(\\d+)/:todoId(\\d+)`, this.todo.deleteTodo);
  }
}
