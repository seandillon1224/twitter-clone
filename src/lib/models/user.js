import mongoose, { Schema } from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new Schema({
    name: {type: String},
    avatar : {type : String},
    email: { type : String},
    handle: {type : String},
    settings: { type: ObjectId, ref : 'Settings'},
    posts: [{type: ObjectId, ref: 'Post'}],
    comments: [{type: ObjectId , ref: 'Comment'}],
  
},
{timestamps : true}
)


module.exports = mongoose.models.User || mongoose.model("User", UserSchema);