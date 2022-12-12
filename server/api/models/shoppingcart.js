const mongoose = require("mongoose");

// Define schema
const Schema = mongoose.Schema;

const shoppingcartSchema = new Schema(
    {
        cartItems: [],
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

module.exports = mongoose.model("shoppingcart", shoppingcartSchema);
