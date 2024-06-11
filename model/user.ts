// models/user.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    picture: string;
    createdAt: Date;
}

const UserSchema: Schema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    username: { type: String },
    email: { type: String },
    picture: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
