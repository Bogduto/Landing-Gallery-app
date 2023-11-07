import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { NextResponse } from "next/server"

export const revalidate = true

export async function GET(req, { params }) {
    try {
        const name = params.name

        await connectMongodb()

        const cart = await cartModel

        const findOneCart = await cart.findOne({ name })

        if (findOneCart) {
            return NextResponse.json({
                msg: "get one cart",
                cart: findOneCart
            }, {
                status: 200
            })
        }
        
        return NextResponse.json({
            msg: "not found",
            cart: findOneCart
        }, {
            status: 404
        })
    } catch (error) {
        throw new Error(error)
    }
}