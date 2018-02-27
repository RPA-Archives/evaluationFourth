const Server = require('../../src/server');

describe('Test for populate API', ()=>{
  test('should give success message', (done)=> {
    const options = {
      method: 'POST',
      url: '/populate',
    };
    Server.inject(options, (res) => {
      expect(res.statusCode).toBe(200);
      expect(res.payload).toBe('success');
      done();
    });
  })
})