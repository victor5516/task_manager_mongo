import express from 'express';
import taskRoutes from './routes/task.routes'
import bodyParser from 'body-parser';
import exp from 'constants';
const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/v1', taskRoutes)

export default app;
