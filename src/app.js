import express from 'express';
import logger from 'morgan';
import routes from './routes';

const app = express();
app.disable('x-powered-by');

app.use(logger('dev', {
  skip: () => app.get('env') === 'test',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Route Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, _req, res) => {
  res
    .status(err.status || 500)
    .render('error', {
      message: err.message,
    });
});

export default app;
