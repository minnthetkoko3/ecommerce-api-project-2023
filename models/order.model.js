import mongoose from "mongoose";

const OrderSchema = mongoose.model(
  "Orders",
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
      amount: { type: Number, required: true },
      address: { type: Object, required: true },
      status: { type: String, default: "pending" },
    },
    { timestamps: true }
  )
);

export default OrderSchema;
