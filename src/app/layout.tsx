import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import {Inter} from 'next/font/google';
// import * as Inter from '../../public/fonts/Inter-VariableFont_slnt,wght.ttf';
import {Providers} from './providers';

import Footer from '@/components/footer';
import Header from '@/components/header';
const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'Infinity Digital',
	description:
		'Infinity Digital es una agencia de desarrollo web y marketing digital en Argentina para el mundo.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='es'>
			<head>
			<link rel="icon" href="/favicon.ico" sizes="any" />
				{/* <Script src='https://unpkg.com/akar-icons-fonts' /> */}
			</head>

			<body className={inter.className}>
				<Providers>
					<div className='layout'>
						<Header />
						{children}
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
