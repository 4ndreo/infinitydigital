import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Script from 'next/script';
import { Inter } from 'next/font/google'

import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Infinity Digital',
	description: 'Infinity Digital es una agencia de desarrollo web y marketing digital en Argentina para el mundo.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<head><Script src="https://unpkg.com/akar-icons-fonts" /></head>
			<body className={inter.className}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
