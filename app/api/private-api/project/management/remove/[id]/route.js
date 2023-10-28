import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { unlink } from "fs";
export async function DELETE(req, {
    params
}) {
    try {
        const id = params.id
        await connectMongodb()

        const cart = await cartModel
        const findAndUpdateCart = await cart.findByIdAndRemove({ _id: id })

        if (!findAndUpdateCart) console.error("not found or data is null")

        const imageName = findAndUpdateCart.screenshot
        unlink(`./public/uploads/${imageName}`, (error) => {
            if (error) {
                throw new Error(error);
            }
        });

        return NextResponse.json({
            msg: "Project removed",
        }, {
            status: 410
        });
    } catch (error) {
        throw new Error(error)
    }
} 