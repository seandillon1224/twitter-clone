import mongoose, { model, Schema, Document, Model } from "mongoose";
import { IPost } from "./post";
import { IComment } from "./comment";

const { ObjectId } = mongoose.Schema.Types;

export interface IUser extends Document {
  name: string;
  avatar?: string;
  email: string;
  handle: string;
  settings: string;
  posts?: [IPost["_id"]];
  comments?: [IComment["_id"]];
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String },
  avatar: { type: String },
  email: { type: String },
  handle: { type: String },
  settings: { type: ObjectId, ref: "Settings" },
  posts: [{ type: ObjectId, ref: "Post" }],
  comments: [{ type: ObjectId, ref: "Comment" }],
  createdAt: { type: Date },
});

const User: Model<IUser> = mongoose.models.User || model("User", UserSchema);

export default User;
