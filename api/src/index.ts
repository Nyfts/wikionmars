import http from 'http';
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import morgan from 'morgan';
import routes from '@application/routes';
import NotFoundError from '@application/errors/NotFoundError';
import corsMiddleware from '@infrastructure/middleware/corsMiddleware';
import errorHandlerMiddleware from '@infrastructure/middleware/errorHandlerMiddleware';

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
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError());
});

/** Error handling */
app.use(errorHandlerMiddleware);

/** Server */
const httpServer = http.createServer(app);
const PORT = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
