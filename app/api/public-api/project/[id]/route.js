import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
    try {
        const name = params.id

        await connectMongodb()

        const cart = await cartModel

        const findOneCart = await cart.findOne({ name })
        
        return NextResponse.json({
            msg: "get one cart",
            cart: findOneCart
        }, {
            status: 200
        })
    } catch (error) {
        throw new Error(error)
    }
}