const {
  getArticles,
  getArticleById,
  getArticleCommentsById,
  postArticleCommentById,
  patchArticleVotes,
} = require("./getArticles");
const deleteCommentById = require("./commentControllers");
const getUsers = require("./userControllers");
const getTopics = require("./getTopics");
const getEndpoints = require("./endpointsController");
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
  patchArticleVotes,
  deleteCommentById,
  getUsers,
  getEndpoints,
};
