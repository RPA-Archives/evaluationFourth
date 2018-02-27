const fetchDataByUrl = require('../utils/helpers/fetchdataByUrl');
const insertQuestion = require('../../src/utils/helpers/insertQuestion');
const insertOptions = require('../../src/utils/helpers/insertOptions');

module.exports = {
  method: 'POST',
  path: '/populate',
  handler: (req, res) => {
    fetchDataByUrl('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions')
      .then((allQuestions) => {
        const allQuestionsArray = JSON.parse(allQuestions).allQuestions;
        const promiseArray = [];
        allQuestionsArray.map((question) => {
          const newQuestion = question;
          const eachPromise = fetchDataByUrl(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/${newQuestion.questionId}`)
            .then((correctAnswer) => {
              const { answer } = JSON.parse(correctAnswer);
              const eachQuestion = {
                questionId: question.questionId,
                question: question.question,
                answer,
              };
              return insertQuestion(eachQuestion);
            })
            .then(() => {
              const optionArray = [];
              const numberOfOptions = Object.keys(newQuestion).length - 2;
              for (let i = 1; i <= numberOfOptions; i += 1) {
                const eachOption = `option${i}`;
                optionArray.push({ questionId: newQuestion.questionId, option: question[eachOption] });
              }
              console.log(optionArray);
              return insertOptions(optionArray);
            });
          promiseArray.push(eachPromise);
        });
        Promise.all(promiseArray)
          .then(() => {
            res('Success').code(201);
          });
      });
  },
};
