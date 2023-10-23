import React from 'react'
// services
import { getAllProjectsClient } from '@/services'
// components
import Carts from '@/components/HomePage/Carts/Carts.home'
import Header from '@/components/HomePage/Header/Header.home'
import CategoriesCarts from '@/components/Layout/Categories'



export default async function Home() {
  const carts = await getAllProjectsClient()
  return (
    <main className="">
        <CategoriesCarts />
        <Header />
        <Carts data={carts?.carts} />
    </main>
  )
}
