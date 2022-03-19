import ServerError from '../errors/server-errors';
import { HttpResponse } from '../interfaces/IHttp';

// eslint-disable-next-line import/prefer-default-export
export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

// eslint-disable-next-line import/prefer-default-export
export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
