import { Urbanist } from 'next/font/google'
import Link from 'next/link'; // Import Link from Next.js

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'
import CheckoutProvider from '@/providers/checkout-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'StreamPay™ Store',
  description: 'Connecting people, creating possibilities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <CheckoutProvider />
        <Navbar />
        {/* Add the logo and link here */}
        <Link href="/">
          <a>
            <img src="/public/streampay.svg" alt="StreamPay™ Store Logo" />
          </a>
        </Link>
        {children}
        <Footer />
      </body>
    </html>
  );
}
