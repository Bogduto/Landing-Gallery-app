import { NextResponse } from "next/server";
import { unlink } from "fs";
export async function DELETE(req, res) {
    try {
        const body = await req.json()

        unlink(`./public/uploads/${body.img}`, (error) => {
            if (error) {
                throw new Error(error);
            }
        });

        return NextResponse.json({
            msg: "removed",
        }, {
            status: 410
        });
    } catch (error) {
        throw new Error(error);
    }
}
