const fetchdataByUrl = require('../../../src/utils/helpers/fetchdataByUrl');

describe('Test for fetch data helper', () => {
  test('should give data', (done) => {
    fetchdataByUrl('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions')
      .then((res) => {
        expect(typeof JSON.parse(res)).toBe('object');
        done();
      });
  });
});
