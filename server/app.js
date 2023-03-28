const express = require("express");
const {
  getTopics,
  getArticleById,
  errorHandlerPSQL,
  errorHandlerCustom,
  getArticles,
} = require("./controllers");

const app = express();

app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticleById);
app.get("/api/articles", getArticles);

app.use(errorHandlerPSQL);
app.use(errorHandlerCustom);

app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Path not found!" });
});
module.exports = app;
