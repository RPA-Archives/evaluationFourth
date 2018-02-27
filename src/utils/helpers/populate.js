const fetchDataByUrl = require('./fetchdataByUrl');
const insertQuestion = require('./insertQuestion');
const insertOptions = require('./insertOptions');

const populate = () => fetchDataByUrl('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions')
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
          return insertOptions(optionArray);
        });
      promiseArray.push(eachPromise);
    });
    return Promise.all(promiseArray)
      .then(result => result);
  });
module.exports = populate;
