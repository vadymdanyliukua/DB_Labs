import express from 'express';
import morgan  from 'morgan';
import { config } from 'dotenv';
import { datasetsRouter } from './routes/dataset.routes.js';
config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/datasets', datasetsRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`API ready on http://localhost:${process.env.PORT || 3000}`),
);
