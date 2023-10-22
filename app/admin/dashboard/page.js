import React from 'react'
// services
import { getAllProjectsAdmin } from '@/services';
// components
import Carts from './components/carts'

const AdminDashboard = async () => {
    const data = await getAllProjectsAdmin();
    return (
        <div className="py-[40px] w-full minH-screen bg-white dark:bg-black">
            {data && <Carts data={data?.carts} />}
        </div>
    );
}

export default AdminDashboard