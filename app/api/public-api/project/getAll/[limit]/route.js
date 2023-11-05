import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import mongoose from "mongoose"

export const revalidate = true

export async function GET(req, {params}) {
    try {
        await connectMongodb()
        const slicedIndex = params.limit

        const cart = await cartModel

        const findAllCarts = await cart.find({ verified: true }).limit(slicedIndex).exec()

        return NextResponse.json({
            msg: "get all carts",
            carts: findAllCarts
        }, {
            status: 200
        })
    } catch (error) {
        throw new Error(error)
    }
}