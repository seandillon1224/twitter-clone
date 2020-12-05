import mongoose, { Schema, Document, Model, model } from "mongoose";
import { IComment } from "./comment";
import { IUser } from "./user";

const { ObjectId } = mongoose.Schema.Types;

export interface IPost extends Document {
  text: string;
  own: boolean;
  user: IUser["_id"];
  comments?: [IComment["_id"]];
  date: Date;
}

const PostSchema: Schema = new Schema({
  text: { type: String, required: true },
  own: { type: Boolean, default: true },
  user: { type: ObjectId, ref: "User" },
  comments: [{ type: ObjectId, ref: "Comment" }],
  date: { type: Date },
});

const Post: Model<IPost> = mongoose.models.Post || model("Post", PostSchema);

export default Post;
