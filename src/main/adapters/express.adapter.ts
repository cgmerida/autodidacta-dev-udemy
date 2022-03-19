import { Request, Response } from 'express';
import IController from '../../interfaces/IController';
import { HttpRequest, HttpResponse } from '../../interfaces/IHttp';

// eslint-disable-next-line import/prefer-default-export
export const AdapterRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };

    const httpResponse: HttpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
