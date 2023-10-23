import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
    try {
        const name = params.name

        await connectMongodb()
        const cart = await cartModel    
        const findAllResults = await cart.find({ name: { $regex: name, $options: 'i' }, verified: true })

        return NextResponse.json({
            msg: "success",
            result: findAllResults
        }, {
            status: 200
        })

    } catch (error) {
        throw new Error(error)
    }
}