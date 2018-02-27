const fetchUserDetails = require('../../../src/utils/helpers/fetchUserDetails');
const Models = require('../../../models');

describe('Test for fetchUserDetails helper function', () => {
  beforeAll((done) => {
    Models.users.create({
      username: 'hahaha',
    }).then(() => {
      done();
    });
  });
  afterAll((done) => {
    Models.users.destroy({
      truncate: true,
    }).then(() => {
      done();
    });
  });
  test('Should return true existing user data', (done) => {
    const options = 'hahaha';
    fetchUserDetails(options).then((message) => {
      expect(Object.keys(message[0].dataValues).sort()).toEqual(['createdAt', 'id', 'userId', 'username', 'score', 'updatedAt'].sort());
      done();
    });
  });
});

describe('Test for fetchUserDetails helper function', () => {
  test('Should return null for non-existing user', (done) => {
    const options = 'hahaha';
    fetchUserDetails(options).then((message) => {
      expect(message).toEqual([]);
      done();
    });
  });
});
