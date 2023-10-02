import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image';

import './globals.css'
import CheckoutProvider from '@/providers/checkout-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'StreamPay™',
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
				{children}
				<Footer />
			</body>
		</html>
	);
}