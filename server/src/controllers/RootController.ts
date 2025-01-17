import { Request, Response, NextFunction } from 'express';
import { controller, get, use } from './decorators/index';

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.isLoggedIn) next();
  else res.status(403).send('Error');
};

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.isLoggedIn) {
      res.send(`
      <div>
      <h1>You are logged in</h1>
      <a href="/auth/logout">Logout</a>
      </div>
      `);
    } else {
      res.send(`
      <div>
      <h1>You are not logged in</h1>
      <a href="/auth/login">Login</a>
      </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to you loggedin user');
  }
}
