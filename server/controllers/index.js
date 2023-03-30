const {
  getArticles,
  getArticleById,
  getArticleCommentsById,
  postArticleCommentById,
} = require("./getArticles");
const getTopics = require("./getTopics");
const errorHandlerPSQL = require("./errorHandlerPSQL");
const errorHandlerCustom = require("./errorHandlerCustom");

module.exports = {
  getArticles,
  getArticleById,
  getTopics,
  errorHandlerCustom,
  errorHandlerPSQL,
  getArticleCommentsById,
  postArticleCommentById,
};
