export interface Todo {
  id?: number,
  userId: number,
  title: string,
  description?: string,
  completed?: boolean,
  createdAt?: string,
  updatedAt?: string
}
