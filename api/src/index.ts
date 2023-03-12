import http from 'http';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import routes from './routes/auth';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';

const app = express();

/** Logging */
app.use(morgan('dev'));
/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
    return res.status(200).json({});
  }
  next();
});

/** Routes */
app.use('/api/v1', routes);

/** Error handling */
app.use(errorHandlerMiddleware);

/** Server */
const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
