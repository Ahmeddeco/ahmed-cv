import { socials } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'

const SocialIcons = () => {
	return (
		<>
			{socials.map(({ icon, title, url }) => {
				return (
					<Link href={url} key={title} target='_blank'>
						<Image src={icon} alt={title} width={24} height={24} />
					</Link>
				)
			})}
		</>
	)
}

export default SocialIcons
