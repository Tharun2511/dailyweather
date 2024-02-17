import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a username"],
            unique: true,
        },
        email: {
            type: String,
            required: [true, "Please provide a email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
        },
        favourites:{
            type: [String],
            default:[]
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
