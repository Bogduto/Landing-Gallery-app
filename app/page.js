import React from 'react'
// services
import { getAllProjectsClientByCategory } from '@/services'
// components
import Carts from '@/components/HomePage/Carts/Carts.home'
import Header from '@/components/HomePage/Header/Header.home'
import CategoriesCarts from '@/components/Layout/Categories'



export default async function Home({ searchParams }) {
  const carts = await getAllProjectsClientByCategory(searchParams?.category)
  return (
    <main className="">
      <Header />
      <CategoriesCarts />
      <div className='min-h-screen'>
        {
          carts ? <Carts data={carts?.carts} /> : null 
        }
      </div>
    </main>
  )
}
