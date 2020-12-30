const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: String,
  postedAt: Date,
  source: String,
  tags: String,
});

module.exports = mongoose.model("Article", articleSchema);
