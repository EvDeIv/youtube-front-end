import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Line from '@/components/ui/Line'

import { defaultValueAuthState } from '@/providers/AuthProvider'

import { AuthService } from '@/services/auth/auth.service'

import { useAuth } from '@/hooks/useAuth'

import ProfileInfo from './ProfileInfo'

const Sidebar: FC = () => {
	const { user, setData } = useAuth()

	return user ? (
		<section className='sidebar'>
			<Link href='/'>
				<a className='logo' rel='noreferrer'>
					<Image
						src={'http://localhost:3000/img/common/logo.png'}
						alt='Youtube'
						width={130}
						height={42}
					/>
				</a>
			</Link>
			<ProfileInfo />
			<Line />
			<ul className='mnu_sidebar'>
				<li>
					<a href='#'>
						<img src='img/common/multimedia.svg' alt='' />
						<b>Videos</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/video-camera.svg' alt='' />
						<b>Movies & Shows</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/gift.svg' alt='' />
						<b>Premium Contents</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/live-news.svg' alt='' />
						<b>Live</b>
					</a>
				</li>

				<div className='line_mnu'></div>

				<li>
					<a href='#'>
						<img src='img/common/calendar.svg' alt='' />
						<b>Subscribtions</b>
						<span className='number'>29 new</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/smartphone.svg' alt='' />
						<b>Library</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/like.svg' alt='' />
						<b>Liked Videos</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/time.svg' alt='' />
						<b>Watch Later</b>
					</a>
				</li>

				<div className='line_mnu'></div>

				<li>
					<a href='#'>
						<img src='img/common/adjust.svg' alt='' />
						<b>Settings</b>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='img/common/support.svg' alt='' />
						<b>Help & Report</b>
					</a>
				</li>
			</ul>

			<div className='switch_wrapper'>
				<label className='switch'>
					<input type='checkbox' defaultChecked />
					<span className='slider round'></span>
				</label>
				<p>Light On</p>
			</div>

			<button
				id='logout_btn'
				onClick={() => {
					AuthService.logout()
					setData && setData(defaultValueAuthState)
				}}
			>
				Logout
			</button>
			<div className='copy'>?? 2020 Youtube, LLC</div>
		</section>
	) : null
}

export default Sidebar
