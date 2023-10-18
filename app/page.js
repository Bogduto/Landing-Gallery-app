import Carts from '@/components/HomePage/Carts/Carts.home'
import Header from '@/components/HomePage/Header/Header.home'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
        <Header />
        <Carts />
    </main>
  )
}
