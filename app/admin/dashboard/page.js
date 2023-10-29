import React from 'react'
// services
// import { getAllProjectsAdmin } from '@/services';
// components
import Carts from './components/carts'

export const revalidate = 0

const url = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api` : 'http://localhost:3000/api'

export const getAllProjectsAdmin = async () => {
    try {
        const carts = await fetch(`${url}/private-api/project/getAll`, {
            method: "GET",
        })

        const cartsJson = await carts.json()

        return cartsJson
    } catch (error) {
        console.log(error)
    }
}

const AdminDashboard = async () => {
    const data = await getAllProjectsAdmin();
    console.log(data)
    return (
        <div className="py-[40px] w-full minH-screen bg-white dark:bg-black">
            {data && <Carts data={data?.carts} />}
        </div>
    );
}

export default AdminDashboard