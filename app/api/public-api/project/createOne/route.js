import connectMongodb from "@/connects/mongoose"
import cartModel from "@/schemas/CartModel"
import { NextResponse } from "next/server"

import fs from 'fs'
import path from 'path'
import { uid } from 'uid'
import puppeteer from 'puppeteer'

const takeScreen = async (url) => {
    const browser = await puppeteer.launch({
        headless: "new", 
        args: ['--no-sandbox'],
        executablePath: `/usr/bin/google-chrome`,
    })

    const page = await browser.newPage()
    await page.goto(url, {waitUntil: "networkidle2"})

    await browser.close()

    return "Done"
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