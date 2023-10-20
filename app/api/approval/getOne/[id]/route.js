import { NextResponse } from "next/server"


export async function GET(req, res) {
    try {


        // puppeteer lib for screenshot main page
        NextResponse.json({
            msg: "one post"
        }, {status: 200})        
    } catch (error) {
        throw new Error(error)
    }
}