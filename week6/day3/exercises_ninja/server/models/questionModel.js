const db = require("../config/db");

const getAllQuestions = async () => {
  return db("questions");
};

const getQuestionWithOptions = async (questionId) => {
  const question = await db("questions").where({ id: questionId }).first();
  const options = await db("question_options")
    .join("options", "question_options.option_id", "options.id")
    .where("question_options.question_id", questionId)
    .select("options.id", "options.option");
  return { ...question, options };
};

module.exports = { getAllQuestions, getQuestionWithOptions };
