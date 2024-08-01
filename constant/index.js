import heroImage from '@/public/hero.png'
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
	FaWindowClose,
	FaBars,
} from 'react-icons/fa'

export const closeMenu = <FaWindowClose />
export const burgerMenu = <FaBars />

export const links = [
	{ url: '/', title: 'Home' },
	{ url: '/about', title: 'About' },
	{ url: '/portfolio', title: 'Portfolio' },
	{ url: '/contact', title: 'Contact' },
]

export const socials = [
	{
		title: 'facebook',
		icon: <FaFacebookSquare />,
		url: 'https://www.facebook.com/profile.php?id=100085118445619',
	},
	{
		title: 'github',
		icon: <FaGithubSquare />,
		url: 'https://github.com/Ahmeddeco',
	},
	{
		title: 'instagram',
		icon: <FaInstagramSquare />,
		url: 'https://www.instagram.com/decodesigndecodesign/',
	},
	{
		title: 'linkedin',
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/ahmed-mohamed-32ab9a298/',
	},
]
