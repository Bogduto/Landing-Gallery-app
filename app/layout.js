import './globals.css'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Footer from '@/components/Layout/Footer/Footer'
import Template from './template'

export const metadata = {
  title: 'Landing Gallery',
  description: 'Landing Gallery clone',
  icons: "/favicon.ico"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Template>
        <body className='bg-white dark:bg-black'>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Template>
    </html>
  )
}
