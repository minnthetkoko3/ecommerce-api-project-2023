import mongoose from "mongoose";

const ProductSchema = mongoose.model(
  "products",
  new mongoose.Schema(
    {
      title: { type: String, require: true },
      desc: { type: String, require: true },
      img: { type: String, require: true },
      categories: { type: String, require: true },
      size: { type: String, require: true },
      color: { type: String, require: true },
      price: { type: String, require: true },
    },
    { timestamps: true }
  )
);

export default ProductSchema;
