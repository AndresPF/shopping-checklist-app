import express, { json } from 'express';
import { connect } from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import routes from './routes';

connect(
  `mongodb+srv://andrespf:${process.env.DB_PASSWORD}@cluster-apf.vtn7b.mongodb.net/shopapp?retryWrites=true&w=majority`
).then(() => {
  const port = 3200;
  const app = express();

  app.use(json());
  app.use(cors());
  app.use('/api', routes);

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on ${port}`);
  });
});
