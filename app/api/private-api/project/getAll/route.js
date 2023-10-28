import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET(req, res) {
    try {
        await connectMongodb()

        const cart = await cartModel

        const findAllCarts = await cart.find({ verified: false }).exec()

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