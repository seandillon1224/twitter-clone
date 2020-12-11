import mongoose, { Schema, Document, Model, model } from "mongoose";
import { IComment } from "./comment";
import { IUser } from "./user";

const { ObjectId } = mongoose.Schema.Types;

export interface IPost extends Document {
  text: string;
  user: IUser["_id"];
  comments?: [IComment["_id"]];
  active: boolean;
  createdAt: Date;
}

const PostSchema: Schema = new Schema({
  text: { type: String, required: true },
  user: { type: ObjectId, ref: "User" },
  comments: [{ type: ObjectId, ref: "Comment" }],
  active: {type: Boolean, default: true},

}, {timestamps: true});

const Post: Model<IPost> = mongoose.models.Post || model("Post", PostSchema);

export default Post;
