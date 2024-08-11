'use client'

import Link from 'next/link'
import { useState } from 'react'
import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'
import { burgerMenu, closeMenu } from '@/constant'

const Navbar = () => {
	const [open, setOpen] = useState(false)

	return (
		<header className=' flex items-center justify-between container h-[72px]'>
			{/* ---------------------------------- logo ---------------------------------- */}
			<div className='w-1/3'>
				<Link
					href='/'
					className='text-sm bg-black rounded-md p-2 font-semibold flex items-center justify-center w-fit'
				>
					<span className='text-white mr-1 font-black px-1 '>AHMED</span>
					<span className='w-12 rounded bg-white text-black px-1 font-semibold'>
						.Dev
					</span>
				</Link>
			</div>
			{/* ------------------------------ dektop links ------------------------------ */}
			<nav className='hidden md:flex gap-4 w-1/3'>
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
					className='flex flex-col w-10 h-8 justify-between z-50 relative '
					onClick={() => setOpen(!open)}
				>
					{!open ? (
						<div className='text-2xl text-black'>{burgerMenu} </div>
					) : (
						<div className='text-2xl text-white'>{closeMenu} </div>
					)}
				</button>
				{/* -------------------------------- menu list ------------------------------- */}
				{open && (
					<nav className='absolute top-0 left-0 w-screen bg-black text-white flex flex-col h-screen items-center justify-center gap-8 text-4xl'>
						{/* ------------------------------ mobile links ------------------------------ */}
						<NavLinks />
						{/* --------------------------- mobile social icons -------------------------- */}
						<div className='flex items-center justify-center gap-4 w-1/3 '>
							<SocialIcons />
						</div>
					</nav>
				)}
			</nav>
		</header>
	)
}

export default Navbar
