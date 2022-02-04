const express = require("express");
const router = express.Router();

const Article = require("../models/article");

router.get("/getallarticles", async (req, res) => {
  try {
    const articles = await Article.find({});
    res.send(articles);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
