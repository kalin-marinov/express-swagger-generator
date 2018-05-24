import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';

import { configureSwagger } from './config/swagger.config';

console.log('starting');

import indexRouter from './routes/index';

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(new Error('Not found'));
});

// error handler
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

configureSwagger(app);


export default app;
