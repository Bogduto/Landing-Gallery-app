import { NextResponse } from "next/server"
import connectMongodb from "@/connects/mongoose"
import { getStorage, ref, deleteObject } from "firebase/storage";
import { storage } from "@/connects/firebase.config";

export async function POST(req, {
    params
}) {
    try {
        // Create a reference to the file to delete
        const desertRef = ref(storage, 'uploads/hello1.txt');

        await deleteObject(desertRef)
        return NextResponse.json({
            msg: "Project removed",

        }, {
            status: 410
        });
    } catch (error) {
        throw new Error(error)
    }
} 