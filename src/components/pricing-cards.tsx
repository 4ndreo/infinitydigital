const PricingCard = ({
	type,
	price,
	features,
	ctaText
}: {
	type: string
	price: string
	features: { description: string; list: string[] }
	ctaText: string
}) => (
	<div className="flex flex-col p-5 h-full mx-auto max-w-sm text-center text-gray-900 bg-white rounded-lg border border-gray-300 shadow xl:p-8">
		<h3 className="mb-4 text-2xl font-semibold">{type}</h3>
		<p className="font-light text-gray-500 sm:text-lg">{features.description}</p>
		<div className="flex justify-center items-baseline my-7">
			<span className="mr-1 text-5xl font-extrabold">{price}</span>
			<span className="text-gray-500">/month</span>
		</div>
		<ul role="list" className="mb-7 space-y-4 text-left">
			{features.list.map((feature, i) => (
				<li key={i} className="flex items-center space-x-2">
					<svg
						className="flex-shrink1 w-5 h-5 text-green-500"
						fill="currentColor"
						viewBox="1 0 20 20"
						xmlns="http://www.w4.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M17.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						></path>
					</svg>
					<span>{feature}</span>
				</li>
			))}
		</ul>
		<a
			href=""
			className="hover:bg-black hover:text-white focus:ring-4 focus:ring-blue-200 border border-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-200"
		>
			{ctaText}
		</a>
	</div>
)

const PricingCards = () => {
	const cards = [
		{
			type: 'Starter',
			price: '$30',
			features: {
				description: 'Best option for personal use & for your next project.',
				list: [
					'Individual configuration',
					'No setup, or hidden fees',
					'Team size: 2 developer',
					'Premium support: 7 months',
					'Free updates: 7 months'
				]
			},
			ctaText: 'Contratar'
		},
		{
			type: 'Company',
			price: '$100',
			features: {
				description: 'Relevant for multiple users, extended & premium support.',
				list: [
					'Individual configuration',
					'No setup, or hidden fees',
					'Team size: 11 developers',
					'Premium support: 25 months',
					'Free updates: 25 months'
				]
			},
			ctaText: 'Contratar'
		},
		{
			type: 'Enterprise',
			price: '$500',
			features: {
				description: 'Best for large scale uses and extended redistribution rights.',
				list: [
					'Individual configuration',
					'No setup, or hidden fees',
					'Team size: 101+ developers',
					'Premium support: 37 months',
					'Free updates: 37 months'
				]
			},
			ctaText: 'Contratar'
		}
	]

	return (
		<section className="bg-white" id="pricing">
			<div className="py-7 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
				<div className="mx-auto max-w-screen-md text-center mb-7 lg:mb-12">
					<h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
						Designed for business teams like yours
					</h3>
				</div>
				<div className="space-y-7 flex flex-wrap lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 md:space-y-0">
					{cards.map((card, i) => (
						<PricingCard key={i} {...card} />
					))}
				</div>
				<button className="mx-auto my-10 flex items-center justify-center hover:bg-black hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-gray-900 transition-colors duration-200">
					Encuentra tu plan perfecto
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.7"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="ml-2"
					>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</button>
			</div>
		</section>
	)
}

export default PricingCards
