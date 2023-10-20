import mongoose from "mongoose";

const UserModel = mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    email: {
        require: false,
        type: String
    },
    rule: {
        type: String,
        require: true,
        default: "admin"
    },
    password: {
        require: true,
        type: String
    }
})


const userModel =
    mongoose.models && "users" in mongoose.models
        ? mongoose.models.users
        : mongoose.model("users", UserModel);

export default userModel;