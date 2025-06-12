const coreValues = [
	{
		title: 'Our Vision',
		description:
			'To be the best business association in Africa on driving competitiveness and business growth.',
		image: '/images/vision.png'
	},
	{
		title: 'Our Mission',
		description:
			'To carry out proactive support services with the view to contributing substantially to the growth and development of industry in Ghana.',
		image: '/images/mission.png'
	},
	{
		title: 'Our Values',
		description:
			'In line with our mission and vision, we are guided by our core values; Diversity, Integrity, Accountability.',
		image: '/images/benefit-diamond.png'
	}
]

export const CoreValues = () => {
	return (
		<section className='mx-auto grid max-w-6xl grid-cols-1 gap-8 bg-[#F5F5F5] px-4 py-16 sm:grid-cols-2 lg:grid-cols-3'>
			{coreValues.map(value => (
				<div
					className='rounded-lg bg-white p-6 text-center shadow-md'
					key={value.title}
				>
					<img
						alt={value.title}
						className='mx-auto mb-4 w-1/2 text-6xl text-red-500'
						src={value.image}
					/>
					<h3 className='mb-2 font-semibold text-xl'>{value.title}</h3>
					<p className='text-base text-gray-600'>{value.description}</p>
				</div>
			))}
		</section>
	)
}
