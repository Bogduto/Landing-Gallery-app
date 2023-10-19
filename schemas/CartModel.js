import mongoose from "mongoose";

const CartModel = mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    categories: [
        {
            require: true,
            type: String,
            default: []
        }
    ],
    description: {
        require: true,
        type: String,
    },
    url: {
        require: true,
        type: String
    },
    email: {
        require: false,
        type: String
    }
})


const cartModel =
    mongoose.models && "carts" in mongoose.models
        ? mongoose.models.carts
        : mongoose.model("carts", CartModel);

export default cartModel;