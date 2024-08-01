'use client'

import { links, socials } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'

const Navbar = () => {
	const [open, setOpen] = useState(false)

	return (
		<header className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
			{/* ---------------------------------- logo ---------------------------------- */}
			<div className=''>
				<Link
					href='/'
					className='text-sm bg-black rounded-md p-2 font-semibold flex items-center justify-center'
				>
					<span className='text-white mr-1 font-black px-1'>AHMED</span>
					<span className='w-12 rounded bg-white text-black px-1 font-semibold'>
						.Dev
					</span>
				</Link>
			</div>
			{/* ------------------------------ dektop links ------------------------------ */}
			<nav className='hidden md:flex gap-4'>
				<NavLinks />
			</nav>
			{/* --------------------------- dektop social icons -------------------------- */}
			<nav className='md:flex items-center justify-center gap-4 hidden'>
				<SocialIcons />
			</nav>
			{/*  ------------------------------- mobile nav -------------------------------  */}
			<nav className='md:hidden'>
				{/* ------------------------------ menu button ----------------------------- */}
				<button
					className='flex flex-col w-10 h-8 justify-between z-50 relative'
					onClick={() => setOpen(!open)}
				>
					<div className='w-10 h-1 bg-white rounded'></div>
					<div className='w-10 h-1 bg-white rounded'></div>
					<div className='w-10 h-1 bg-white rounded'></div>
				</button>
				{/* -------------------------------- menu list ------------------------------- */}
				{open && (
					<nav className='absolute top-0 left-0 w-screen bg-black text-white flex flex-col h-screen items-center justify-center gap-8 text-4xl'>
						{/* ------------------------------ mobile links ------------------------------ */}
						<NavLinks />
						{/* --------------------------- mobile social icons -------------------------- */}
						<div className='flex items-center justify-center gap-4 '>
							<SocialIcons />
						</div>
					</nav>
				)}
			</nav>
		</header>
	)
}

export default Navbar
