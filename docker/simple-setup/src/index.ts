import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from 'express';

const boostrap = async () => {
  // const connection = await createConnection();
  const app = express();
  app.get('/hello', (req, res) => {
      res.status(200).send('world');
  });
  app.listen(3000, () => {
      console.log('Server running at port 3000');
  })
};

boostrap();