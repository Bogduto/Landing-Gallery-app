import { NextResponse } from "next/server"


export async function GET(req, res) {
    try {
        NextResponse.json({
            msg: "all posts"
        }, {status: 200})        
    } catch (error) {
        throw new Error(error)
    }
}