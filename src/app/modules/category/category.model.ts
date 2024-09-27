import { model, Schema } from "mongoose";
import { CategoryType } from "./category.interface";

const categorySchema = new Schema<CategoryType>(
  {
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    param: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Category = model("Category", categorySchema);

export default Category;
