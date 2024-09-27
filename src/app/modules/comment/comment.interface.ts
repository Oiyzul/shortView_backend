import { Types } from "mongoose";

export type CommentType = {
  content: string;
  user: Types.ObjectId;
  username: string;
  post: Types.ObjectId;
};
