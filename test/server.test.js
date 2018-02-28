const Server = require('../src/server');

describe('Test for Server', () => {
  test('should give success message', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    Server.inject(options, (res) => {
      expect(res.payload).toBe('Server Running');
      done();
    });
  });
});

