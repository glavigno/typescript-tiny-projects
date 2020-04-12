import { Request, Response } from 'express';
import { get, controller, post, bodyValidator } from './decorators/index';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
      <label>Email</label>
      <input name="email" type="email" />
      </div>
      <div>
      <label>Password</label>
      <input name="password" type="password" />
      </div>
      <button>Submit</button>
      </form>
      `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'password') {
      req.session = { isLoggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    if (req.session && req.session.isLoggedIn) {
      req.session = undefined;
      res.redirect('/');
    }
  }
}
