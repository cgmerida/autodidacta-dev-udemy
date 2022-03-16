import RegisterVehicle from "./register";
import MissingFormalParameter from "../../errors/client-errors";

describe("Register Vehicle", () => {
  let httpRequest;

  beforeEach(() => {
    httpRequest = {
      body: {
        name: "Nissan",
        model: "DXT",
        year: 2021,
        color: "blue",
      },
    };
  });

  it("should return 400 if no name passed", () => {
    const sut = new RegisterVehicle();
    delete httpRequest.body.name;

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter("name"));
  });

  it("should return 400 if no model passed", () => {
    const sut = new RegisterVehicle();
    delete httpRequest.body.model;

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter("model"));
  });

  it("should return 400 if no year passed", () => {
    const sut = new RegisterVehicle();
    delete httpRequest.body.year;

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter("year"));
  });

  it("should return 400 if no color passed", () => {
    const sut = new RegisterVehicle();
    delete httpRequest.body.color;

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter("color"));
  });
});
