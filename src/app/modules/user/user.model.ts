import { model, Schema } from "mongoose";
import { UserType } from "./user.interface";

const categorySchema = new Schema<UserType>(
  {
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    param: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Category = model("Category", categorySchema);

export default Category;
