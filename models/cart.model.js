import mongoose from "mongoose";

const CartSchema = mongoose.model(
  "carts",
  new mongoose.Schema(
    {
      userId: { type: String, require: true },
      product: [
        {
          productId: {
            type: String,
          },
          qty: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
    { timestamps: true }
  )
);

export default CartSchema;
