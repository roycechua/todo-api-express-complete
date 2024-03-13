import { TodoController } from '@/controllers/todos.controller';
import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';

export class TodoRoute implements Routes {
  public path = '/todos';
  public router = Router();
  public todo = new TodoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.todo.getAllTodos);
    this.router.get(`${this.path}/:id(\\d+)`, this.todo.getTodoById);
    this.router.get(`${this.path}/user/:id(\\d+)`, this.todo.getTodosByUser);
    this.router.post(`${this.path}`, this.todo.createTodo);
    this.router.put(`${this.path}/:id(\\d+)`, this.todo.updateTodo);
    this.router.delete(`${this.path}/:id(\\d+)`, this.todo.deleteTodo);
  }
}
