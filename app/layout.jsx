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
			<body className={inter.className}>
				<main className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'>
					<div className='h-[72px]'>
						<Navbar />
					</div>
					<div className='h-[calc(100dvh-72px)]'>{children}</div>
				</main>
			</body>
		</html>
	)
}
