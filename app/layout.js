import './globals.css'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Footer from '@/components/Layout/Footer/Footer'
import Template from './template'
import { Unbounded, Roboto } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css';

const roboto = Roboto({
  weight: ['400', "300", "700", "500"],
  subsets: ['latin', "cyrillic"],
})

export const metadata = {
  title: 'Landing Gallery',
  description: 'Landing Gallery clone',
}


export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${roboto.className} w-full h-full bg-white dark:bg-black`}>
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
