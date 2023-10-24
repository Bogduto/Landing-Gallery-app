import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { unlink } from "fs";

export async function DELETE(req, {
    params
}) {
    try {
        const id = params.id
        const body = await req.json()

        await connectMongodb()

        const cart = await cartModel
        const findAndUpdateCart = await cart.deleteOne({ _id: body._id })

        unlink(`./public/uploads/${body.img}`, (error) => {
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