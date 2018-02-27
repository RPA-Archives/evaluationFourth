const Models = require('../../../models');

const getQuestions = () => Models.questions.findAll()
  .then((allQuestions) => {
    const QuestionSet = allQuestions;
    const promiseArray = [];
    QuestionSet.map((question) => {
      const newQuestion = {
        questionId: question.questionId,
        question: question.question,
      };
      const questionPromise = Models.options.findAll({
        where: {
          questionId: question.questionId,
        },
      })
        .then((allOptions) => {
          const optionObject = allOptions.map(eachOption => ({
            option: eachOption.option,
          }));
          newQuestion.options = optionObject;
          return newQuestion;
        })
        .then(options =>
          options);
      return promiseArray.push(questionPromise);
    });
    return Promise.all(promiseArray)
      .then(result => result);
  }).then(finalQuestions => finalQuestions);

module.exports = getQuestions;
