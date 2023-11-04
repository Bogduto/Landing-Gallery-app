import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { NextResponse } from "next/server"

import fs from 'fs'
import path from 'path'
import { uid } from 'uid'
import puppeteerExtra from 'puppeteer-extra'
import stealthPlugin from 'puppeteer-extra-plugin-stealth'
import chromium from '@sparticuz/chromium'


const takeScreen = async (url) => {
    puppeteerExtra.use(stealthPlugin())

    const browser = await puppeteerExtra.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage()
    await page.goto(url, { waitUntil: "networkidle2" })
    
    const buffer = await page.screenshot()

    // write jpg
    const filename = `${uid(16)}.jpg`
    const filepath = path.join(`./public/uploads/`, filename)

    await fs.writeFileSync(filepath, buffer)


    await browser.close()

    return filepath
}

export async function POST(req, res) {
    try {
        let body = await req.json()


        await connectMongodb()
        const done = await takeScreen('https://twitch.tv')
        body.screenshot = done


        // const cart = await cartModel
        // const newCart = await cart.create(body)

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