import { ServerError } from '../errors/server';
import { HttpResponse } from '../interfaces/IHttp';

export const badRequestError = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: { message: error.message },
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
