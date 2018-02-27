const insertOptions = require('../../../src/utils/helpers/insertOptions');
const Models = require('../../../models');

describe('Test for insertQuestion helper', () => {
  afterAll((done) => {
    Models.options.destroy({
      truncate: true,
      cascade: true,
    }).then(() => {
      done();
    }).catch(console.log);
  });
  test('should insert Data into questions table', (done) => {
    const options = [
      { questionId: 123, option: 'Palikir' },
      { questionId: 123, option: 'Antananarivo' },
      { questionId: 123, option: 'Ngerulmud' },
      { questionId: 123, option: 'Warsaw' },
    ];
    insertOptions(options)
      .then((res) => {
        expect(res.length).toBe(4);
        done();
      });
  });
});
