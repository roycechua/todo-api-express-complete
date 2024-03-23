import request from 'supertest';
import { App } from '@/app';
import { CreateUserDto, UpdateUserDto } from '@dtos/users.dto';
import { UserRoute } from '@routes/users.route';
import { dbConnection } from '@/database';
import { UserModel } from '@/models/users.model';
import { createUser } from '@/factories/users';

beforeAll(async () => {
  await dbConnection('test');
  await UserModel.query().del();
});

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Users', () => {
  describe('[GET] /users', () => {
    it('response statusCode 200 / findAll', async () => {
      const userData: CreateUserDto = {
        email: 'test001@email.com',
        password: 'test123456',
      };
      await createUser(userData);
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);
      return request(app.getServer()).get(`${usersRoute.path}`).expect(200);
    });
  });

  describe('[GET] /users/:id', () => {
    it('response statusCode 200 / findOne', async () => {
      const userData: CreateUserDto = {
        email: 'test001@email.com',
        password: 'test123456',
      };
      const user = await createUser(userData);
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);
      return request(app.getServer()).get(`${usersRoute.path}/${user.id}`).expect(200);
    });
  });

  describe('[POST] /users', () => {
    it('response statusCode 201 / created', async () => {
      const userData: CreateUserDto = {
        email: 'test@email.com',
        password: 'test123456',
      };

      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);
      return request(app.getServer()).post(`${usersRoute.path}`).send(userData).expect(201);
    });
  });

  describe('[PUT] /users/:id', () => {
    it('response statusCode 200 / updated', async () => {
      const userData: CreateUserDto = {
        email: 'test001@email.com',
        password: 'test123456',
      };
      const user = await createUser(userData);
      const updateUserData: UpdateUserDto = {
        password: 'q1w2e3r4abcde',
      };

      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);
      return request(app.getServer()).put(`${usersRoute.path}/${user.id}`).send(updateUserData).expect(200);
    });
  });

  describe('[DELETE] /users/:id', () => {
    it('response statusCode 200 / deleted', async () => {
      const userData: CreateUserDto = {
        email: 'test001@email.com',
        password: 'test123456',
      };
      const user = await createUser(userData);
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);
      return request(app.getServer()).delete(`${usersRoute.path}/${user.id}`).expect(200);
    });
  });
});
