import Carts from '@/components/HomePage/Carts/Carts.home'
import Header from '@/components/HomePage/Header/Header.home'

const handleGetAllCarts = async () => {
  try {
    const carts = await fetch(`http://localhost:3000/api/send/getAll/`, {
      method: "GET",
      cache: "no-cache",
    })

    const cartsJson = await carts.json()

    return cartsJson
  } catch (error) {
    console.error(error)
  }
}

export default async function Home() {
  const carts = await handleGetAllCarts()
  return (
    <main className="">
        <Header />
        <Carts data={carts?.carts} />
    </main>
  )
}
