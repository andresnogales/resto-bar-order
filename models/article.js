const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    type: { type: String, required: true },

    price: {
      type: Number,
      required: true,
    },

    picture: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const articleModel = mongoose.model("articles", articleSchema);

module.exports = articleModel;
