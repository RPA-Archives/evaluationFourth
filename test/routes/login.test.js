const Server = require('../../src/server');
const Models = require('../../models');

describe('Test for login API', () => {
  beforeAll((done) => {
    Models.users.create({
      username: 'hahaha',
      socre: 0,
    })
      .then(() => {
        done();
      }).catch(console.log);
  });
  afterAll((done) => {
    Models.users.destroy({
      truncate: true,
      cascade: true,
    })
      .then(() => {
        done();
      }).catch(console.log);
  });
  test('should give correct status code for exisitng user', (done) => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        username: 'hahaha',
      },
    };
    Server.inject(options, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});
describe('Test for login API', () => {
  afterAll((done) => {
    Models.users.destroy({
      truncate: true,
      cascade: true,
    })
      .then(() => {
        done();
      }).catch(console.log);
  });

  test('should give correct status code for new user', (done) => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        username: 'hahaha',
      },
    };
    Server.inject(options, (res) => {
      expect(res.statusCode).toBe(201);
      done();
    });
  });
});
