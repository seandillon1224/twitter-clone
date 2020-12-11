import mongoose, { Schema, Document, model, Model } from "mongoose";
import { IUser } from "./user";
import { IPost } from "./post";

const { ObjectId } = mongoose.Schema.Types;

export interface IComment extends Document {
  text: string;
  post: IPost["_id"];
  user: IUser["_id"];
  comments?: [IComment["_id"]];
  createdAt: Date;
}

const CommentSchema: Schema = new Schema({
  text: { type: String, required: true },
  post: { type: ObjectId, ref: "Post" },
  user: { type: ObjectId, ref: "User" },
  comments: [{ type: ObjectId, ref: "Comment" }],
  createdAt: { type: Date },
});

const Comment : Model<IComment> = mongoose.models.Comment || model("Comment", CommentSchema);

export default Comment;