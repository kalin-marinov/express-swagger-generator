import express from 'express';
import logger from 'morgan';

import { configureSwagger } from './config/swagger.config';
import { handleError } from './modules/error.module';

import indexRouter from './routes/index';
import authRouter from './routes/auth';



var app = express();
configureSwagger(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
  next(new Error('Not found'));
});

app.use(handleError);



export default app;
