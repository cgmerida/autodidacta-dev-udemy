import { HttpRequest, HttpResponse } from "../../interface/http-interface";

export default class RegisterVehicle {
  // eslint-disable-next-line class-methods-use-this
  handle = (httpRequest: HttpRequest): HttpResponse => {
    const { name, model, year } = httpRequest.body;
    if (!name || !model || !year) {
      const error = `${!name ? "name" : ""} ${!model ? "model" : ""} ${
        !year ? "year" : ""
      }`
        .trim()
        .replace(/\s/gm, ", ");
      return {
        statusCode: 400,
        body: new Error(`Error in: ${error}`),
      };
    }
    return { statusCode: 200, body: { message: "success" } };
  };
}
