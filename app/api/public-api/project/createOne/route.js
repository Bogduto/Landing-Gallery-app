import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { NextResponse } from "next/server"

import fs from 'fs'
import path from 'path'
import { uid } from 'uid'
import puppeteer from 'puppeteer'



export async function POST(req, res) {
    try {
        let body = await req.json()


        const browser = await puppeteer.launch({headless: 'new'});
        const page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1080,
        });
        await page.goto(body.websiteUrl, { waitUntil: 'load' });
        const screenshotBuffer = await page.screenshot();

        const fileName = `${uid(20)}.jpg`

        const screenshotPath = await path.join(path.dirname('./public/uploads/'), 'uploads', fileName);

        await fs.writeFileSync(screenshotPath, screenshotBuffer);


        await connectMongodb()
        body.screenshot = fileName


        const cart = await cartModel
        const newCart = await cart.create(body)

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