const getFormPayload = require('../../../src/utils/helpers/getFormPayload');

describe('Test for getFormPayload helper function', () => {
  test('Should return user data object', (done) => {
    const options = {};
    options.payload = {
      username: 'hahahaha',
    };
    expect(typeof getFormPayload(options)).toBe('object');
    done();
  });
  test('Should return user data object from string', (done) => {
    const options = {};
    options.payload = JSON.stringify({
      username: 'hahahaha',
    });
    expect(typeof getFormPayload(options)).toBe('object');
    done();
  });
});
