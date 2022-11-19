import { _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA";
import { _getQuestions } from "./_DATA";

export const saveQuestion = (question) => _saveQuestion(question);

export const saveQuestionAnswer = (answer) => _saveQuestionAnswer(answer);

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => {
      return { users, questions };
    })
    .catch((e) => console.log(e, "there where an error in fetch"));
}
