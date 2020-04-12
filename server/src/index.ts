import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['azertyuiop'] }));
app.use(AppRouter.getInstance());

app.listen(3000, 'localhost', () => {
  console.log('Listening on port 3000');
});
