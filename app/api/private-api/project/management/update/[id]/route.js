import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"

export async function POST(req, { params }) {
    try {
        const id = params.id
        const body = await req.json()

        // new data
        let newData = {}

        for (const item of Object.keys(body)) {
            if (item == "categories") continue
            newData[item] = body[item]
        }

        await connectMongodb()
        
        
        const cart = await cartModel
        const findAndUpdateCart = await cart.updateOne({ _id: id }, {
            $set: newData,
            $push: {
                categories: body.categories.map((item, key) => item.text)
            }
        })

        return NextResponse.json({ msg: "updated" }, { status: 200 })
    } catch (error) {
        throw new Error(error)
    }
} 