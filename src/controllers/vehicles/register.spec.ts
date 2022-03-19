import RegisterVehicle from './register';
import MissingFormalParameter from '../../errors/client-errors';
import DbAddAccount from '../../data/useCase/db-add-account';

describe('Register Vehicle', () => {
  let httpRequest;
  const dbAddAccount = new DbAddAccount();

  beforeEach(() => {
    httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2021,
        color: 'blue',
      },
    };
  });

  it('should return 400 if no name passed', async () => {
    const sut = new RegisterVehicle(dbAddAccount);
    delete httpRequest.body.name;

    const httpResponse = await sut.handle(httpRequest);
    console.log(httpResponse);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual({
      message: new MissingFormalParameter('name').message,
    });
  });

  it('should return 400 if no model passed', async () => {
    const sut = new RegisterVehicle(dbAddAccount);
    delete httpRequest.body.model;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual({
      message: new MissingFormalParameter('model').message,
    });
  });

  it('should return 400 if no year passed', async () => {
    const sut = new RegisterVehicle(dbAddAccount);
    delete httpRequest.body.year;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual({
      message: new MissingFormalParameter('year').message,
    });
  });

  it('should return 400 if no color passed', async () => {
    const sut = new RegisterVehicle(dbAddAccount);
    delete httpRequest.body.color;

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual({
      message: new MissingFormalParameter('color').message,
    });
  });
});
