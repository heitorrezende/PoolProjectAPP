export const FETCH_QUESTIONS = "FETCH_QUESTIONS";

export const fetchQuestions = (questions) => {
  return { type: FETCH_QUESTIONS, questions };
};
