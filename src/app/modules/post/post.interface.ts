import { Types } from "mongoose";

export type PostType = {
  title: string;
  content: string;
  author: string;
  param: string;
  designation: string;
  comments?: Types.ObjectId[];
  imgUrl: string;
  category: string;
  user: Types.ObjectId;
  likes?: number;
  dislikes?: number;
  views?: number;
};

export type CommentType = {
  content: string;
  user: Types.ObjectId;
  postId: Types.ObjectId;
};
