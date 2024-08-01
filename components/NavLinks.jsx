import { links } from '@/constant'
import Link from 'next/link'

const NavLinks = () => {
	return (
		<>
			{links.map(({ title, url }) => (
				<Link href={url} key={title}>
					{title}
				</Link>
			))}
		</>
	)
}
export default NavLinks
