import supertest from 'supertest';
import app from '../config/app';

describe('cors', () => {
  it('should open cors', async () => {
    const testUrl = '/test_cors';
    app.get(testUrl, (req, res) => {
      res.send();
    });

    await supertest(app)
      .get(testUrl)
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-headers', '*')
      .expect('access-control-allow-methods', '*');
  });
});
