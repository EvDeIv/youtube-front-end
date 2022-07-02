import { FC } from 'react'

const Slider: FC = () => {
	return (
		<div className='slider_wf'>
			<div className='video_item'>
				<div className='thumbnail'>
					<img src='img/main/1.jpg' alt='' />
					<time>16:55</time>
				</div>
				<div className='author'>Micheal Adams</div>
				<div className='name'>Day in my life: Summer ...</div>
				<div className='number_info'>
					<div className='views'>VIEWS 28.6K</div>
					<div className='date'>6DS AGO</div>
				</div>
			</div>

			<div className='video_item'>
				<div className='thumbnail'>
					<img src='img/main/2.jpg' alt='' />
					<time>07:23</time>
				</div>
				<div className='author'>Dollie Cross</div>
				<div className='name'>Day in my life: Summer ...</div>
				<div className='number_info'>
					<div className='views'>VIEWS 26.7K</div>
					<div className='date'>10DS AGO</div>
				</div>
			</div>

			<div className='video_item'>
				<div className='thumbnail'>
					<img src='img/main/3.jpg' alt='' />
					<time>16:55</time>
				</div>
				<div className='author'>Micheal Adams</div>
				<div className='name'>Day in my life: Summer ...</div>
				<div className='number_info'>
					<div className='views'>VIEWS 28.6K</div>
					<div className='date'>6DS AGO</div>
				</div>
			</div>
		</div>
	)
}

export default Slider
