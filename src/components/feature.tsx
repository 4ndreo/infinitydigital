import React from 'react'

const Feature = () => {
  return (
    <section className="text-gray-600 body-font" id='proyectos'>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Nuestros clientes
          </h1>
          <p className="text-base leading-relaxed w-full xl:w-full lg:w-3/4 mx-auto text-gray-500s">
          Nos enorgullece forjar relaciones sólidas y exitosas con una diversidad de clientes líderes en la industria. Nuestra trayectoria en el mundo de la consultoría IT ha sido marcada por la confianza depositada en nosotros por empresas innovadoras y visionarias. Desde startups ágiles hasta corporaciones establecidas, hemos colaborado con organizaciones de diversos tamaños y sectores. Cada cliente es único, y nos comprometemos a ofrecer soluciones personalizadas que impulsan la excelencia tecnológica y generan un impacto positivo en sus operaciones. Descubre cómo hemos contribuido al éxito de nuestros clientes y cómo podemos ser tu socio estratégico en la transformación digital.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="rotate-scale-up w-full h-auto inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src='\img\proyecto_1.jpg'/>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Cliente
              </h2>
              <p className="leading-relaxed text-base">
                Descripción del proyecto
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="rotate-scale-up w-full h-auto inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src='\img\proyecto_1.jpg'/>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Cliente
              </h2>
              <p className="leading-relaxed text-base">
                Descripción del proyecto
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="rotate-scale-up w-full h-auto inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src='\img\proyecto_1.jpg'/>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Cliente
              </h2>
              <p className="leading-relaxed text-base">
                Descripción del proyecto
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature