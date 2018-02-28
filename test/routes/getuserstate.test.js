const Server = require('../../src/server');

describe('Test for getuserdetails API with new user', () => {
  test('should return empty array', (done) => {
    const options = {
      method: 'POST',
      url: '/getuserresponse',
      payload: {
        userId: 33,
      },
    };
    Server.inject(options, (res) => {
      console.log(res.payload.length);
      expect(res.payload).toEqual('[]');
      done();
    });
  });
});
// test for api with already exsiting user
