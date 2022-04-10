import { Router } from 'express';
import authRouter from '../components/auth/auth.router';
import usersRouter from '../components/user/user.router';
import postRouter from '../components/post/post.router';
import photosRouter from '../components/photos/photos.router';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', usersRouter);

// Public
apiRouter.use('/posts/', postRouter);
apiRouter.use('/photos/', photosRouter);

export default apiRouter;
