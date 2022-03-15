import RegisterVehicle from "./register";

describe("Register Vehicle", () => {
  it("should return 400 if no name passed", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        // name: "Nissan",
        model: "DXT",
        year: 2021,
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Error in: name"));
  });

  it("should return 400 if no model passed", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: "Nissan",
        // model: "DXT",
        year: 2021,
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Error in: model"));
  });

  it("should return 400 if no year passed", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: "Nissan",
        model: "DXT",
        // year: 2021,
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Error in: year"));
  });
});
