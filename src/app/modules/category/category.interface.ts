import { Types } from "mongoose";

export type CategoryType = {
  name: string;
  imgUrl: string;
  param: string;
};

export type CommentType = {
  content: string;
  user: Types.ObjectId;
  postId: Types.ObjectId;
};
