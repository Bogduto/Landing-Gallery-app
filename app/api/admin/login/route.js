import { NextResponse } from "next/server"

import userModel from "@/schemas/UserModel"
import connectMongodb from "@/connects/mongoose"

export async function GET(req, { params }) {
    try {
        await connectMongodb()

        const user = await userModel

        const findUser = await user.findOne({ username: params.username })

        NextResponse.json({
            msg: "login",
            user: findUser
        }, {
            status: 200
        })
    } catch (error) {
        throw new Error(error)
    }
}