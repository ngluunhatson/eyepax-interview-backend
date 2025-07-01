import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  soldQuantity: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
