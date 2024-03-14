import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { TodoRoute } from './routes/todos.route';

ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new TodoRoute()]);

app.listen();
