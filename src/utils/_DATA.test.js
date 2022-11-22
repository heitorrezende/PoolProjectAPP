import {
  _getUsers,
  users as _users,
  _saveQuestion,
  _saveQuestionAnswer,
  formatDate,
} from "./_DATA";

describe("_DATA", () => {
  it("should return a user object", async () => {
    await expect(_getUsers()).resolves.toEqual(_users);
  });

  it("should return correct fields on _saveQuestion", async () => {
    const question = {
      optionOneText: "test option one",
      optionTwoText: "test option two",
      author: "test author",
    };

    let result = await _saveQuestion(question);
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("timestamp");
    expect(result).toHaveProperty("author");
    expect(result).toHaveProperty("optionOne");
    expect(result).toHaveProperty("optionTwo");
    expect(typeof result.id).toBe("string");
    expect(typeof result.timestamp).toBe("number");
    expect(result.author).toBe("test author");
    expect(result.optionOne).toHaveProperty("votes");
    expect(result.optionOne).toHaveProperty("text");
    expect(result.optionTwo).toHaveProperty("votes");
    expect(result.optionTwo).toHaveProperty("text");
    expect(result.optionOne.votes).toEqual([]);
    expect(result.optionTwo.votes).toEqual([]);
    expect(result.optionOne.text).toBe("test option one");
    expect(result.optionTwo.text).toBe("test option two");
  });
  it('Should return error on _saveQuestion if "optionOneText" is not provided', async () => {
    const question = {
      optionTwoText: "test option",
      author: "test author",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("Should return correct fields on _saveQuestionAnswer when correct fields are passed", async () => {
    const answer = {
      loggedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };
    await expect(_saveQuestionAnswer(answer)).resolves.toEqual(true);
  });
  it("Should return error on _saveQuestionAnswer when incorrect fields are passed", async () => {
    const answer = {
      loggedUser: "sarahedo",
      answer: "optionOne",
    };
    await expect(_saveQuestionAnswer(answer)).rejects.toEqual(
      "Please provide loggedUser, qid, and answer"
    );
  });

  it("Should return formatted date and time", () => {
    const date = new Date(2020, 1, 2, 1, 2, 1);
    const result = formatDate(date);
    expect(result).toBe("1:02:AM | 02/02/2020");
  });
});
