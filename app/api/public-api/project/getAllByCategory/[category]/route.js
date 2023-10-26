import { NextResponse } from "next/server"
import cartModel from "@/schemas/CartModel"
import connectMongodb from "@/connects/mongoose"

export async function GET(req, { params }) {
    try {
        const category = params.category
        await connectMongodb()

        const cart = await cartModel

        const getAllByCategory = await cart.find({
            categories: {
                $gte: category
            }
        })

        return NextResponse.json({ msg: "msg", getAllByCategory }, { status: 200 })
    } catch (error) {
        throw new Error(error)
    }
}