import { NextResponse } from "next/server"
import cartModel from "@/schemas/CartModel"
import connectMongodb from "@/connects/mongoose"

export const revalidate = true

export async function GET(req, { params }) {
    try {
        const category = params.category
        await connectMongodb()
        
        const cart = await cartModel

        const getAllByCategory = await cart.find({
            verified: true,
            categories: {
                $regex: category
            }
        })

        return NextResponse.json({ msg: "msg", carts: getAllByCategory }, { status: 200 })
    } catch (error) {
        throw new Error(error)
    }
}