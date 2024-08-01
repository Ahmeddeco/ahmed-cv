import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'AHMED PORTFOLIO',
	description: 'Ahmed Abdelfattah portfolio app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-gradient-to-b from-blue-100 to-red-100 `}
			>
				<Navbar />
				<main className='w-screen h-[calc(100dvh-72px)] container  '>
					{children}
				</main>
			</body>
		</html>
	)
}
