import express, { json } from 'express';
import { connect } from 'mongoose';
import routes from './routes';

connect('mongodb://localhost:27017/shopapp').then(() => {
  const port = 3200;
  const app = express();

  app.use(json());

  app.use('/api', routes);

  app.get('/test', (_, res) => {
    res.send({ data: 'Different Message' });
  });

  app.get('/test/:message', function (req, res) {
    const { message } = req.params;
    res.send(`POST request with message: ${message}`);
  });

  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
});
