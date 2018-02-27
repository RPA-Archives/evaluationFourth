const isDBEmpty = require('../../../src/utils/helpers/isDBEmpty');
const Models = require('../../../models');
const populate = require('../../../src/utils/helpers/populate');

describe('Test for isdbempty helper', () => {
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
  test('should return true for empty db', (done) => {
    isDBEmpty()
      .then((res) => {
        expect(res).toBe(true);
        done();
      });
  });
});
describe('Test for isdbempty helper', () => {
  beforeAll((done) => {
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
  test('should return false for populated db', (done) => {
    isDBEmpty()
      .then((res) => {
        expect(res).toBe(false);
        done();
      });
  });
});
