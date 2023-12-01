import React from 'react'

const HeroSection = () => {
	return (
		<section className="text-gray-600 body-font" id='home'>
			<div className="container mx-auto flex px-5 py-52 items-center justify-center flex-col gap-10 w-full">
				<div className="text-center lg:w-full w-[900px]">
					<h1 className="title-font sm:text-[75px] text-3xl mb-[40px] tracking-tighter font-bold text-white">
						Comienza con nosotros
					</h1>
					<div className="flex justify-center">
						<button className="inline-flex text-white hover:text-black bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-200 rounded text-lg">Cotiza tu proyecto</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
