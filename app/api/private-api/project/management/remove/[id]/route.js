import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
// firebase
import { storage } from "@/connects/firebase.config"
import { ref, deleteObject } from "firebase/storage";


export async function DELETE(req, {
    params
}) {
    try {
        const id = params.id
        await connectMongodb()

        const cart = await cartModel
        const findAndUpdateCart = await cart.findByIdAndRemove({ _id: id })

        if (!findAndUpdateCart) console.error("not found or data is null")

        // delet
        const imageName = findAndUpdateCart.screenshotName
        const desertRef = ref(storage, `uploads/${imageName}`);

        await deleteObject(desertRef)

        return NextResponse.json({
            msg: "Project removed",
        }, {
            status: 410
        });
    } catch (error) {
        throw new Error(error)
    }
} 