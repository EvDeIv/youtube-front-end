import React from 'react'
import Link from 'next/link'
import { FC } from 'react'
import Sidebar from '../../layout/sidebar/Sidebar'
import Line from '../../ui/Line'
import Header from '../../layout/header/Header'
import Recommended from './recommended/Recommended'
import WeaklyFutured from './weakly-featured/WeaklyFutured'
import RightSide from '../../layout/right-side/RightSide'
import Layout from '../../layout/Layout'
import { useAuth } from './../../../hooks/useAuth'

const Home: FC = () => {
	const { user } = useAuth()

	return (
		<Layout title='Youtube v2.0 - Best videos'>
			<div id='wrapper_content'>
				<div className='left_side'>
					<WeaklyFutured />
					<Line />
					<Recommended />
				</div>
				<RightSide />
			</div>
		</Layout>
	)
}

export default Home
