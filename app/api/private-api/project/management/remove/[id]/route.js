import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"

export async function DELETE(req, {
    params
}) {
    try {
        const id = params.id

        await connectMongodb()

        const cart = await cartModel
        const findAndUpdateCart = await cart.deleteOne({ _id: id })


        return NextResponse.json({ msg: "msg" }, { status: 200 })
    } catch (error) {
        throw new Error(error)
    }
} 