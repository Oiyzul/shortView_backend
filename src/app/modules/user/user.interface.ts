import { Types } from "mongoose";

export type UserType = {
  name: string;
  email: string
  designation: string;
  imgUrl: string;
  param?: string;
  posts?: Types.ObjectId[];
  comments?: Types.ObjectId[]
};

export type CommentType = {
  content: string;
  user: Types.ObjectId;
  postId: Types.ObjectId;
};
