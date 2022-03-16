import { HttpRequest, HttpResponse } from "../../interface/http-interface";

export default class RegisterVehicle {
  // eslint-disable-next-line class-methods-use-this
  handle = (httpRequest: HttpRequest): HttpResponse => {
    const requiredProps = ["name", "model", "year", "color"];
    let msg = "";
    requiredProps.forEach((prop) => {
      if (!httpRequest.body[prop]) {
        msg += `${prop} `;
      }
    });
    if (msg.length) {
      return {
        statusCode: 400,
        body: new Error(`Error in: ${msg.trim().replace(/\s/gm, ", ")}`),
      };
    }
    // const { name, model, year } = httpRequest.body;
    return { statusCode: 200, body: { message: "success" } };
  };
}
