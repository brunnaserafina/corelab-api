import express, { Express } from 'express';
import cors from 'cors';

const app: Express = express();

app
  .use(cors())
  .use(express.json())
  .get('/api/status', (req, res) => {
    res.send('Ok!');
  });

export function init(): Promise<Express> {
  return Promise.resolve(app);
}

export default app;
