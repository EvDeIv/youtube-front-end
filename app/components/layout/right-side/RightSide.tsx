import React from 'react'
import { FC } from 'react'

import Line from './../../ui/Line'
import MostPopularVideos from './most-popular-videos/MostPopularVideos'
import TopChannels from './top-channels/TopChannels'

const RightSide: FC = () => {
	return (
		<div className='right_side'>
			<MostPopularVideos />
			<Line />
			<TopChannels />
		</div>
	)
}

export default RightSide
