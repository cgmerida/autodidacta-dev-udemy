/* eslint-disable class-methods-use-this */
export default class RegisterVehicle {
  handle = (httpRequest) => {
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
    return true;
  };
}
