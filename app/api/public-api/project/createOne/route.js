import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { NextResponse } from "next/server"


import fs from 'fs'
import path from 'path'
import { uid } from 'uid'
import puppeteer from 'puppeteer'



const MakeScrenshot = async (url) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1080,
        });
        await page.goto(url, { waitUntil: 'load' });
        const screenshotBuffer = await page.screenshot();

        const fileName = `${uid(20)}.jpg`

        const screenshotPath = path.join(path.dirname('./public/uploads/'), 'uploads', fileName);

        fs.writeFileSync(screenshotPath, screenshotBuffer);

        return fileName
    } catch (error) {
        console.error(error)
    }
}



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