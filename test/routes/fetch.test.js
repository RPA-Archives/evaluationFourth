const populate = require('../../src/utils/helpers/populate');
const Models = require('../../models');
const Server = require('../../src/server');

describe('Test for fetch API when database is populated', () => {
  beforeEach((done) => {
    populate()
      .then(() => {
        done();
      }).catch(console.log);
  });
  afterEach((done) => {
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
  test('should give non zero object', (done) => {
    const options = {
      method: 'GET',
      url: '/fetch',
    };
    Server.inject(options, (res) => {
      expect(res.length).not.toBe(0);
      done();
    });
  });
  test('should give object as return type', (done) => {
    populate().then((result) => {
      expect(typeof result).toBe('object');
      done();
    });
  });
});
describe('Test for fetch API when database is not populated', () => {
  afterEach((done) => {
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
  test('should give non zero object', (done) => {
    const options = {
      method: 'GET',
      url: '/fetch',
    };
    Server.inject(options, (res) => {
      expect(res.length).not.toBe(0);
      done();
    });
  });
  test('should give object as return type', (done) => {
    populate().then((result) => {
      expect(typeof result).toBe('object');
      done();
    });
  });
});

