import './globals.css'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Footer from '@/components/Layout/Footer/Footer'
import Template from './template'
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({
  weight: ['400', "300", "700", "600", "500"],
  subsets: ['latin', "cyrillic"],
})

export const metadata = {
  title: 'Landing Gallery',
  description: 'Landing Gallery clone',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${unbounded.className} w-full h-full bg-white dark:bg-black`}>
        <Template>
          <div className='w-full h-full flex flex-col justify-between'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </Template>
      </body>
    </html>
  )
}
