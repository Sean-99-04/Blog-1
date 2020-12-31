const express = require("express");
const router = express.Router();
const Article = require("./../models/models");
const formatDate = require("./../api/dateFormatting");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  Article.find({})
    .exec()
    .then((oldArticleObj) => {
      const newArticleObj = {
        articles: oldArticleObj.map((data) => {
          return {
            author: data.author,
            title: data.title,
            content: data.content,
            postedAt: formatDate(data.postedAt),
            source: data.source,
            tags: data.tags,
          };
        }),
      };

      res.render("articles", { articles: newArticleObj.articles });
    })
    .catch((err) => console.log(err));
});

router.get("/newArticle", (req, res) => {
  res.render("newArticle");
});

router.post("/newArticle", (req, res) => {
  const article = new Article({
    _id: new mongoose.Types.ObjectId(),
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    postedAt: new Date(),
    source: req.body.source,
    tags: req.body.tags,
  });

  // PRODUCTION
  //   article
  //     .save()
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));

  // DEVELOPMENT
  //   console.log(article);

  Article.find({})
    .exec()
    .then((oldArticleObj) => {
      const newArticleObj = {
        articles: oldArticleObj.map((data) => {
          return {
            author: data.author,
            title: data.title,
            content: data.content,
            postedAt: formatDate(data.postedAt),
            source: data.source,
            tags: data.tags,
          };
        }),
      };

      res.render("articles", { articles: newArticleObj.articles });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
