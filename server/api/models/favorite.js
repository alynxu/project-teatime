const mongoose = require("mongoose");

// Define schema
const Schema = mongoose.Schema;

const favoriteSchema = new Schema(
  {
    items: [],
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("favorite", favoriteSchema);
