import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { unlink } from "fs";

export async function POST(req, {
    params
}) {
    try {
    

        await connectMongodb()

        const cart = await cartModel
        const findAndUpdateCart = await cart.findOneAndRemove({ _id: body._id })

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