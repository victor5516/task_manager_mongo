import express from 'express';
import taskRoutes from './routes/task.routes'
import bodyParser from 'body-parser';
import { handleResponse } from '../handlers/response.handler';
import { handleError } from '../handlers/error.handler';

const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/v1', taskRoutes)
//app.use('api/v1', userRoutes)
app.use(handleResponse)
app.use(handleError)

export default app;
