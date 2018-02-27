const createUser = require('../../../src/utils/helpers/createUser');
const Models = require('../../../models');

describe('Test for createUser helper function', () => {
  afterAll((done) => {
    Models.users.destroy({
      truncate: true,
    }).then(() => {
      done();
    });
  });
  test('Should return create new user', (done) => {
    const options = 'hahaha';
    createUser(options).then((message) => {
      expect(Object.keys(message.dataValues).sort()).toEqual(['createdAt', 'id', 'userId', 'username', 'score', 'updatedAt'].sort());
      done();
    });
  });
});
