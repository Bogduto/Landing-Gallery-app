import { NextResponse } from "next/server"

import userModel from "@/schemas/UserModel"
import connectMongodb from "@/connects/mongoose"

export async function GET(req, {params}) {  
    try {
        NextResponse.json({
            msg: "login"
        }, {
            status: 200
        })
    } catch (error) {
        throw new Error(error)
    }
}