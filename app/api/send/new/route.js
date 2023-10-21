import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { NextResponse } from "next/server"
import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { uid } from 'uid'

async function MakeScrenshot(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const screenshotBuffer = await page.screenshot();

    const fileName = `${uid(20)}.jpg`

    const screenshotPath = path.join(path.dirname('./public/uploads/'), 'uploads', fileName);

    fs.writeFileSync(screenshotPath, screenshotBuffer);

    return fileName
}

export async function POST(req, res) {
    try {
        let body = await req.json()
        const pathName = await MakeScrenshot(body.websiteUrl)
        body.screenshot = pathName

        await connectMongodb()
        const cart = await cartModel

        const newCart = await cart.create(body)

        return NextResponse.json({
            msg: "created new cart",
            body
        }, {
            status: 200
        })
    } catch (error) {
        throw new Error(error)
    }
}