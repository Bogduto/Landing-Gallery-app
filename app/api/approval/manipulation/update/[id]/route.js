import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"

export async function POST(req, { params }) {
    try {
        const id = params.id
        const body = await req.json()

        await connectMongodb()

        const cart = await cartModel
        const findAndUpdateCart = await cart.updateOne({ _id: id }, {
            $set: body
        })

        return NextResponse.json({ msg: "updated" }, { status: 200 })
    } catch (error) {
        throw new Error(error)
    }
} 