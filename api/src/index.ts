import http from 'http';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';
import corsMiddleware from './middleware/corsMiddleware';
import NotFoundError from './errors/NotFoundError';

const app = express();

/** Logging */
app.use(morgan('dev'));
/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());

// Cors settings
app.use(corsMiddleware);

/** Routes */
app.use('/api/v1', routes);

// Every other route
app.use((req, res, next) => {
  next(new NotFoundError());
})

/** Error handling */
app.use(errorHandlerMiddleware);

/** Server */
const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
