const Server = require('../../src/server');
const Models = require('../../models');

describe('Test for populate API', () => {
  afterAll((done) => {
    Models.questions.destroy({
      truncate: true,
      cascade: true,
    })
      .then(() => {
        Models.options.destroy({
          truncate: true,
          cascade: true,
        });
      })
      .then(() => {
        done();
      }).catch(console.log);
  });
  test('should give success message', (done) => {
    const options = {
      method: 'POST',
      url: '/populate',
    };
    Server.inject(options, (res) => {
      expect(res.statusCode).toBe(201);
      expect(res.payload).toBe('Success');
      done();
    });
  });
});

