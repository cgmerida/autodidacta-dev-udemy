import { AddAccount } from '../../domain/useCase/add-account';
import MissingFormalParameter from '../../errors/client-errors';
import {
  badRequestError,
  serverError,
  success,
} from '../../helpers/http-helper';
import IController from '../../interfaces/IController';
import { HttpRequest, HttpResponse } from '../../interfaces/IHttp';

export default class RegisterVehicle implements IController {
  constructor(private readonly addAccount: AddAccount) {
    this.addAccount = addAccount;
  }

  handle = async (httpRequest: HttpRequest): Promise<HttpResponse> => {
    const requiredProps = ['name', 'model', 'year', 'color'];
    try {
      const msg = this.validate(requiredProps, httpRequest.body);

      if (msg.length) {
        return badRequestError(new MissingFormalParameter(msg));
      }
    } catch (err) {
      return serverError(err);
    }
    const vehicle = await this.addAccount.add(httpRequest.body);
    return success(vehicle);
  };

  // eslint-disable-next-line class-methods-use-this
  private validate = (mandatoryProps, container) => {
    let msg = '';
    mandatoryProps.forEach((prop) => {
      if (!container[prop]) {
        msg += `${prop} `;
      }
    });

    return `${msg.trim().replace(/\s/gm, ', ')}`;
  };
}
