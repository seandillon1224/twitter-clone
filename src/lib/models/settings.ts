import mongoose, { Schema, Document, Model, model } from "mongoose";
import { IUser } from "./user";

const { ObjectId } = mongoose.Schema.Types;

export interface ISettings extends Document {
  user: IUser["_id"];
  ads: boolean;
  active: boolean;
  dateUpdated: Date;
}

const SettingsSchema: Schema = new Schema({
  user: { type: ObjectId, ref: "User" },
  ads: {type: Boolean, default: true},
  active: {type: Boolean, default: true},
  dateUpdated: {type: Date}
});

const Settings: Model<ISettings> = mongoose.models.Settings || model("Settings", SettingsSchema);

export default Settings;
