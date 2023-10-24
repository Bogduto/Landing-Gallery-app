import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { NextResponse } from "next/server"
import puppeteer from 'puppeteer'
import MakeScrenshot from "@/utils/makeScreenshot"

export async function POST(req, res) {
    try {
        let body = await req.json()
        
        await connectMongodb()
        const pathName = await MakeScrenshot(body.websiteUrl)
        body.screenshot = pathName


        const cart = await cartModel
        const newCart = await cart.create(body)

        // ... remove image if cart is not created

        return NextResponse.json({
            msg: "created new cart",
            body
        }, {
            status: 201
        })
    } catch (error) {
        throw new Error(error)
    }
}