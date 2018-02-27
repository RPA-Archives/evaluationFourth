const getQuestions = require('../../../src/utils/helpers/getQuestions');
const populate = require('../../../src/utils/helpers/populate');
const Models = require('../../../models');

describe('Test for getQuestions helper', () => {
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
    getQuestions().then((result) => {
      expect(result.length).not.toBe(0);
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

