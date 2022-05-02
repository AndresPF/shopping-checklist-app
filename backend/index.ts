import express, { json } from 'express';
import { connect } from 'mongoose';
import routes from './routes';

connect('mongodb://localhost:27017/shopapp').then(() => {
  const port = 3200;
  const app = express();

  app.use(json());

  app.use('/api', routes);

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on ${port}`);
  });
});
