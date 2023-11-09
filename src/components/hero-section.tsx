import React from 'react'

const HeroSection = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-52 items-center justify-center flex-col">
				<div className="text-center lg:w-2/3 w-full">
					<h1 className="title-font sm:text-6xl text-3xl mb-4 tracking-tighter font-bold text-white">
						Data to enrich your online business
					</h1>
					<p className="mb-8 leading-relaxed tracking-tight text-white/90">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magnam aliquam eveniet sunt
						aperiam minus perspiciatis deserunt ipsum iusto. Architecto aperiam quis quod ab ad, incidunt
						accusamus fugit sapiente nobis?
					</p>
					<div className="flex justify-center">
						<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							Button
						</button>
						<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
