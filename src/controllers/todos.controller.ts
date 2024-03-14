import { TODO_SUCCESS_MESSAGE } from '@/config/constants';
import { TodoService } from '@/services/todos.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class TodoController {
  public todo = Container.get(TodoService);

  public getTodos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: get all todos from db (don't forget to add limit and offset)
      const todos = await this.todo.getTodos();
      res.status(200).json({ data: todos, message: `get ${TODO_SUCCESS_MESSAGE}` });
    } catch (error) {
      next(error);
    }
  };

  public getTodosByUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO: get all todos of user by id (don't forget to add limit and offset)
      const userId = Number(req.params.id);
      const todos = await this.todo.getTodosByUser(userId);
      res.status(200).json({ data: todos, message: `get ${TODO_SUCCESS_MESSAGE}` });
    } catch (error) {
      next(error);
    }
  };

  public getTodoById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // get specific todo by id
      const todoId = Number(req.params.id);
      const todo = await this.todo.getTodoById(todoId);
      res.status(200).json({ data: todo, message: `get ${TODO_SUCCESS_MESSAGE}` });
    } catch (error) {
      next(error);
    }
  };

  public createTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const body = req.body;
      const newTodo = await this.todo.createTodo(body);
      res.status(200).json({ data: newTodo, message: `create ${TODO_SUCCESS_MESSAGE}` });
    } catch (error) {
      next(error);
    }
  };

  public updateTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todoId = Number(req.params.id);
      const body = req.body;
      const updatedTodo = await this.todo.updateTodo(todoId, body);
      res.status(200).json({ data: updatedTodo, message: `update ${TODO_SUCCESS_MESSAGE}` });
    } catch (error) {
      next(error);
    }
  };

  public deleteTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.userId);
      const todoId = Number(req.params.todoId);
      const deletedTodo = await this.todo.deleteTodo(userId, todoId)
      res.status(200).json({ data: deletedTodo, message: `delete ${TODO_SUCCESS_MESSAGE}` });
    } catch (error) {
      next(error);
    }
  };
}
