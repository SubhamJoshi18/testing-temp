import { Request, Response, Router } from 'express';
import { registerUser, loginUser } from '../controller/auth.controller';
import { verifyAuthenticated } from '../middleware/auth.middleware';
import limiter from '../config/rate.limit.config';
const authRouter: Router = Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

authRouter.get(
  '/user/test',
  limiter,
  verifyAuthenticated,
  (req: Request, res: Response) => {
    return res.status(201).json({
      message: 'User Authenticated',
    });
  }
);

export default authRouter;
