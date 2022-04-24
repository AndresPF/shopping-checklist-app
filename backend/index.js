import express, { json } from 'express';

const port = 3200;
const app = express();

app.use(json());

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
