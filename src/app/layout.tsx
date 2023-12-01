import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

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
			<head><script src="https://unpkg.com/akar-icons-fonts"></script></head>
			<body className={inter.className}>
				{children}
				<Footer />
				
			</body>
		</html>
	)
}
