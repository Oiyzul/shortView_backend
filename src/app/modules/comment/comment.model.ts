import { model, Schema } from "mongoose";
import {  CommentType } from "./comment.interface";

const commentSchema = new Schema<CommentType>(
  {
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true },
    username: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);

export default Comment;
