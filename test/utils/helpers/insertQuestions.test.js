const insertQuestion = require('../../../src/utils/helpers/insertQuestion');
const Models = require('../../../models');

describe('Test for insertQuestion helper', () => {
  afterAll((done) => {
    Models.questions.destroy({
      truncate: true,
      cascade: true,
    }).then(() => {
      done();
    }).catch(console.log);
  });
  test('should insert Data into questions table', (done) => {
    const options = {
      questionId: 1,
      question: 'hello',
      answer: 'world',
    };
    insertQuestion(options)
      .then((res) => {
        expect(Object.keys(res.dataValues).sort()).toEqual(['answer', 'createdAt', 'id', 'question', 'questionId', 'updatedAt'].sort());
        done();
      });
  });
});
