const express = require("express");
const router = express.Router();
const Article = require("./../models/models");

router.get("/", (req, res) => {
  res.send("Router Page");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.post("/home", (req, res) => {
  const article = new Article({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    postedAt: new Date().toLocaleDateString(),
    source: req.body.source,
    tags: req.body.tags,
  });

  //   article
  //     .save()
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));
  console.log(article);
  res.render("home", {
    author: article.author,
    title: article.title,
    content: article.content,
    postedAt: article.postedAt,
    source: article.source,
    tags: article.tags,
  });
});

module.exports = router;
