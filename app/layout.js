import './globals.css'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Footer from '@/components/Layout/Footer/Footer'

export const metadata = {
  title: 'Landing Gallery',
  description: 'Landing Gallery clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
