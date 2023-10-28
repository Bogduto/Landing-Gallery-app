import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import mongoose from "mongoose"

export async function GET(req, res) {
    try {
        await connectMongodb()

        const cart = await cartModel

        const findAllCarts = await cart.find({ verified: true }).exec()

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