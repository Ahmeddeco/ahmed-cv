import { socials } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'

const SocialIcons = () => {
	return (
		<>
			{socials.map(({ icon, title, url }) => {
				return (
					<Link href={url} key={title} target='_blank'>
						<div className='text-white md:text-black text-4xl '>{icon}</div>
					</Link>
				)
			})}
		</>
	)
}

export default SocialIcons
