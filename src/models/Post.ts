import mongoose from "mongoose";

export type PostDocument = mongoose.Document & {
    content: string;
    senderId: string;
};

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    senderId: {
        type: String,
        required: true
    },
}, { timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
} });


export const Post = mongoose.model<PostDocument>("Post", postSchema);
export default Post