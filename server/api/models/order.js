const mongoose = require("mongoose");

// Define schema
const Schema = mongoose.Schema;

const ordersSchema = new Schema(
  {
    products: [],
    order_total: {
      type: Number,
      trim: true,
    },
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

module.exports = mongoose.model("orders", ordersSchema);
