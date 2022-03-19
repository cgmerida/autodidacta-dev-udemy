import { HttpRequest, HttpResponse } from './IHttp';

export default interface IController {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
