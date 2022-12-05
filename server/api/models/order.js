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
    deliveryFirstName: {
      type: String,
      trim: true,
    },
    deliveryLastName: {
      type: String,
      trim: true,
    },
    deliveryPhoneNumber: {
      type: String,
      trim: true,
    },
    street: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    zip: {
      type: String,
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
