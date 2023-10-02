import Image from "next/image"; // Import the Image component
import { Urbanist } from 'next/font/google'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'
import CheckoutProvider from '@/providers/checkout-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'StreamPay Store',
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
        {/* Replace <img> with <Image /> */}
        <Image
          src="/streampay.svg" // Provide the path relative to the "public" directory
          alt="StreamPay Logo"
          width={400} // Adjust width as needed
          height={300} // Adjust height as needed
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
