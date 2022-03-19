import { AddAccount } from '../../domain/useCase/add-account';
import MissingFormalParameter from '../../errors/client-errors';
import { serverError, success } from '../../helpers/http-helper';
import IController from '../../interfaces/IController';
import { HttpRequest, HttpResponse } from '../../interfaces/IHttp';

export default class RegisterVehicle implements IController {
  constructor(private readonly addAccount: AddAccount) {
    this.addAccount = addAccount;
  }

  // eslint-disable-next-line class-methods-use-this
  handle = async (httpRequest: HttpRequest): Promise<HttpResponse> => {
    const requiredProps = ['name', 'model', 'year', 'color'];
    try {
      let msg = '';
      requiredProps.forEach((prop) => {
        if (!httpRequest.body[prop]) {
          msg += `${prop} `;
        }
      });
      if (msg.length) {
        return {
          statusCode: 400,
          body: new MissingFormalParameter(
            `${msg.trim().replace(/\s/gm, ', ')}`
          ),
        };
      }
    } catch (err) {
      serverError(err);
    }
    const vehicle = await this.addAccount.add(httpRequest.body);
    return success(vehicle);
  };
}
