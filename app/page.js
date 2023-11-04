import React from 'react'
// services
import { getAllProjectsClientByCategory } from '@/services'
// components
import Carts from '@/components/HomePage/Carts/Carts.home'
import Header from '@/components/HomePage/Header/Header.home'
import CategoriesCarts from '@/components/Layout/Categories'



export default async function Home({ searchParams }) {
  const carts = await getAllProjectsClientByCategory(searchParams?.category, searchParams.slice ? searchParams.slice : 10)

  return (
    <main className="">
      <Header />
      <CategoriesCarts />
      <div className='min-h-screen'>
        {
          carts && carts.carts.length ? <Carts data={carts?.carts} /> : <div className='text-center'>
            no results
          </div>
        }
      </div>
    </main>
  )
}
