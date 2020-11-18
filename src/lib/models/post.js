import mongoose, { Schema } from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const PostSchema = new Schema({
    text: { type: String, required: true },
    own: {type : Boolean, default: true},
    user: { type: ObjectId, ref: 'User' },
    comments:  [{ type : ObjectId, ref: 'Comment' }],
    date: {type : Date}
})


module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);