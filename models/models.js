const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  author: String,
  title: String,
  content: String,
  postedAt: Date,
  source: String,
  tags: String,
});

module.exports = mongoose.model("Article", articleSchema, "articles");
