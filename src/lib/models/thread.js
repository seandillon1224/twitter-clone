import mongoose, { Schema } from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const ThreadSchema = new Schema({
    text: { type: String, required: true },
    owner: { type: ObjectId },

})


module.exports = mongoose.models.Thread || mongoose.model("Thread", ThreadSchema);