import supertest from 'supertest';
import app from '../config/app';

describe('json-parser', () => {
  it('should parse request body', async () => {
    const testUrl = '/json-parser-test';
    const obj = {
      test: 'test',
      num: 123,
      bool: true,
    };

    app.post(testUrl, (req, res) => {
      res.json(req.body);
    });

    let res = await supertest(app).post(testUrl).send(obj);

    expect(res.body).toEqual(obj);
  });
});
