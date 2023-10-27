import React from 'react'
// services
import { getAllProjectsClientByCategory } from '@/services'
// components
import Carts from '@/components/HomePage/Carts/Carts.home'
import Header from '@/components/HomePage/Header/Header.home'
import CategoriesCarts from '@/components/Layout/Categories'



export default async function Home({ searchParams }) {
  const carts = await getAllProjectsClientByCategory(searchParams?.category)
  console.log(carts)
  return (
    <main className="">
      <CategoriesCarts />
      <Header />
      {
        carts && carts.carts ? <Carts data={carts?.carts} /> : <div className='w-full h-[500px] flex flex-row justify-center items-center text-center'>
          no results
        </div>
      }
    </main>
  )
}
