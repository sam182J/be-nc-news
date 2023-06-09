const {
  fetchArticleById,
  fetchArticles,
  fetchArticleCommentsById,
  checkArticleExists,
  createArticleCommentById,
  editArticleVotes,
} = require("./ArticleModels");
const fetchTopics = require("./fetchTopics");
const fetchUsers = require("./userModels");
const fetchEndpoints = require("./endPointsModel");
const removeCommentById = require("./commentModels");
module.exports = {
  fetchTopics,
  fetchArticleById,
  fetchArticles,
  fetchArticleCommentsById,
  checkArticleExists,
  createArticleCommentById,
  editArticleVotes,
  removeCommentById,
  fetchUsers,
  fetchEndpoints,
};
