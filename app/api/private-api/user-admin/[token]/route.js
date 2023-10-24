import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function GET(req, { params }) {
    try {
        const token = params.token
        const getData = jwt.verify(token)
        NextResponse.json({
            data: getData
        }, {
            status: 200
        })
    } catch (error) {
        throw new Error(error)
    }
}