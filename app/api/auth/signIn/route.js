import { NextResponse } from "next/server"

import userModel from "@/schemas/UserModel"
import connectMongodb from "@/connects/mongoose"

import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

export async function POST(req, { params }) {
    try {
        const body = await req.json()

        await connectMongodb()

        const user = await userModel
        const findUser = await user.findOne({ name: params.name })

        if (!findUser) {
            NextResponse.json({
                msg: "login is not current"
            }, { status: 400 })
        }
        let passwordCompare = bcrypt.compare(body.password, findUser.password);
        if (!passwordCompare) {
            NextResponse.json({
                msg: "password is not current"
            }, { status: 400 })
        }

        const token = jwt.sign(findUser, 'supersecret', { expiresIn: 120 })

        NextResponse.json({
            msg: "logined",
            token
        }, {
            status: 200
        })
    } catch (error) {
        throw new Error(error)
    }
}