import { NextResponse } from "next/server"
import cartModel from "@/schemas/CartModel"
import connectMongodb from "@/connects/mongoose"

export async function GET(req, { params }) {
    try {
        const category = params.category
        await connectMongodb()
        const cart = await cartModel

        const getAll = await cart.find({
            verified: true,
            categories: {
                $regex: category
            }
        })

        return NextResponse.json({ msg: "msg", carts: getAll }, { status: 200 })
    } catch (error) {
        throw new Error(error)
    }
}