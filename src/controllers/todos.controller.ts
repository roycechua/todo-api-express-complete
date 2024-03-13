import { NextFunction, Request, Response } from 'express';

export class TodoController {
  public getAllTodos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // get all todos from db (don't forget to add limit and offset)
      res.status(200).json({ data: {}, message: '' })
    } catch (error) {
      next(error);
    }
  };

  public getTodosByUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // get all todos of user by id (don't forget to add limit and offset)
      res.status(200).json({ data: {}, message: '' })
    } catch (error) {
      next(error);
    }
  }

  public getTodoById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // get specific todo by id
      res.status(200).json({ data: {}, message: '' })
    } catch (error) {
      next(error);
    }
  }

  public createTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // get payload from req.body
      // create todo in db 
      // return response data and message successful 
      res.status(200).json({ data: {}, message: '' })
    } catch (error) {
      next(error);
    }
  } 

   public updateTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // get id from req params
      // get payload from req.body
      // update todo in db 
      // return response data and message successful 
      res.status(200).json({ data: {}, message: '' })
    } catch (error) {
      next(error);
    }
   }

    public deleteTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // get id from req params
      // delete todo in db
      // return response data and message successful 
      res.status(200).json({ data: {}, message: '' })
    } catch (error) {
      next(error);
    }
  } 
}
