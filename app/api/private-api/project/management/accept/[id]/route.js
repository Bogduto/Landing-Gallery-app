import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"

export async function PUT(req, {
    params
}) {
    try {
        const id = params.id

        await connectMongodb()

        const cart = await cartModel

        const findAndUpdateCart = await cart.updateOne({ _id: id }, {
            $set: { verified: true }
        })

        return NextResponse.json({ msg: "updated status" }, { status: 200 })
    } catch (error) {
        throw new Error(error)
    }
} 