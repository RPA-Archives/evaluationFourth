const Models = require('../../models');
const Server = require('../../src/server');

describe('Test for answer API when new user answer a question', () => {
  beforeEach((done) => {
    const options = {
      questionId: 1,
      userId: 1,
      answer: 'hey',
    };
    Models.answers.create(options)
      .then(() => {
        done();
      }).catch(console.log);
  });
  afterEach((done) => {
    Models.answers.destroy({
      truncate: true,
      cascade: true,
    })
      .then(() => {
        done();
      }).catch(console.log);
  });
  test('should update answer by user', (done) => {
    const options = {
      method: 'POST',
      url: '/answer',
      payload: {
        questionId: 1,
        userId: 1,
        answer: 'world',
      },
    };
    Server.inject(options, (res) => {
      expect(res.payload).toBe('done');
      done();
    });
  });
});
describe('Test for answer API when ols user answer a question', () => {
  test('should insert new answer by user', (done) => {
    const options = {
      method: 'POST',
      url: '/answer',
      payload: {
        questionId: 1,
        userId: 1,
        answer: 'world',
      },
    };
    Server.inject(options, (res) => {
      expect(res.payload).toBe('done');
      done();
    });
  });
});

