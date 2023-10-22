import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"


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

    }
}