import mongoose from "mongoose";

const CartModel = mongoose.Schema({
    screenshot: {
        require: false,
        type: String
    },
    name: {
        require: false,
        type: String
    },
    categories: [
        {
            require: false,
            type: String,
            default: []
        }
    ],
    description: {
        require: true,
        type: String,
    },
    websiteUrl: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
    verified: {
        require: true,
        type: Boolean,
        default: false
    }
})


const cartModel =
    mongoose.models && "carts" in mongoose.models
        ? mongoose.models.carts
        : mongoose.model("carts", CartModel);

export default cartModel;