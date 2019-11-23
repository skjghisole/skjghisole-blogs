import mongoose from "mongoose";

export type UserDocument = mongoose.Document & {
    credentials: {
        firstName: string;
        lastName: string;
    };

    email: string;
    password: string;
};

const userSchema = new mongoose.Schema({
    credentials: {
        firstName: String,
        lastName: String
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        require: true,
        type: String
    }
}, { timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
} });


export const User = mongoose.model<UserDocument>("User", userSchema);
export default User