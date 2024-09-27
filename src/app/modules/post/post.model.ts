import { model, Schema } from "mongoose";
import { PostType } from "./post.interface";

const postSchema = new Schema<PostType>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    param: { type: String, required: true, unique: true },
    designation: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    imgUrl: { type: String, required: true },
    category: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

export default Post;
