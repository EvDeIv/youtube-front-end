import { FC, PropsWithChildren } from 'react'

import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import WeaklyFutured from './../pages/home/weakly-featured/WeaklyFutured'
import Line from './../ui/Line'
import Recommended from './../pages/home/recommended/Recommended'
import RightSide from './right-side/RightSide'
import Head from 'next/head'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<main id='youtube_main'>
					<Sidebar />
					<section className='content'>
						<Header />
						<div className='content-wrapper'>{children}</div>
					</section>
				</main>
			</Head>
		</>
	)
}

export default Layout
