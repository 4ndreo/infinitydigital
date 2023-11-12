import React from 'react'

const HeroSection = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-52 items-center justify-center flex-col gap-10">
				<div className="text-center lg:w-2/3 w-full">
					<h1 className="title-font sm:text-6xl text-3xl mb-4 tracking-tighter font-bold text-white">
						Comienza con nosotros
					</h1>
					<p className="mb-10 mt-10 leading-relaxed tracking-tight text-white/90">
						Nos enorgullece liderar la transformación digital al ofrecer soluciones innovadoras y adaptadas a los desafíos empresariales actuales. Nuestro equipo de expertos apasionados combina conocimientos técnicos avanzados con un enfoque estratégico, proporcionando asesoramiento integral que impulsa la eficiencia operativa y el crecimiento sostenible. Desde la implementación de tecnologías emergentes hasta la optimización de procesos existentes, trabajamos codo a codo con nuestros clientes para convertir sus visiones en realidades digitales, allanando el camino hacia un futuro empresarial más inteligente y resiliente.
					</p>
					<div className="flex justify-center">
						<button className="inline-flex text-white hover:text-black bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-200 rounded text-lg">Cotiza tu proyecto</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
