import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { NextResponse } from "next/server"

export async function POST(req, res) {
    try {
        const body = await req.json()
        await connectMongodb()

        const cart = await cartModel

        const newCart = await cart.create(body)

        return NextResponse.json({
            msg: "created new cart",
        }, {
            status: 200
        })
    } catch (error) {
        throw new Error(error)
    }
}