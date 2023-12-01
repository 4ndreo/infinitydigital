import React from "react";
import Image from 'next/image';
import desarrolloImage from "../utils/img/desarrollo-web.png";
import apiImage from "../utils/img/api-medida.png";
import marketingDigital from "../utils/img/campana-digital.png";

const Content = () => {
  return (
    <section className="text-gray-600 body-font" id="servicios">
      <div className="h-[70px]"></div>
      <div className=" w-full px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Servicios
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Ofrecemos asesoramiento experto en áreas clave, como transformación digital, desarrollo de software, ciberseguridad y análisis de datos. Colaboramos estrechamente con nuestros clientes para proporcionar soluciones tecnológicas que no solo resuelven los desafíos presentes, sino que también anticipan y preparan para los futuros cambios del mercado.
          </p>
        </div>
        <div className="flex flex-wrap-m-4 justify-center ">
          <div className="xl:w-[20%] md:w-[10%] h-[100px] p-4 ">
            <div className="border border-gray-200 p-6 rounded-lg flex flex-col  text-center justify-center">
              <div className=" shake-left-right w-full h-auto flex-row gap-4 flex flex-col justify-center items-center">
              <Image src={desarrolloImage} alt="Desarrollo web" width={150} height={150} />
              </div>
              <h2 className="text-[30px] text-gray-900 font-medium title-font mb-2">
                Desarrollo Web
              </h2>
            </div>
          </div>
          <div className="xl:w-[20%] md:w-[10%] h-[100px] p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="shake-left-right w-full h-auto inline-flex items-center justify-center mb-5">
              <Image src={apiImage} alt="api a medida" width={132} height={132} />
              </div>
              <h2 className="text-[30px] text-gray-900 font-medium title-font mb-2 text-center ">
                Desarrollo de APIs
              </h2>
            </div>
          </div>
          <div className="xl:w-[20%] md:w-[10%] h-[100px] p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="shake-left-right w-full h-auto inline-flex items-center justify-center mb-5">
              <Image src={marketingDigital} alt="api a medida" width={132} height={132} />
              </div>
              <h2 className="text-[30px] text-center text-gray-900 font-medium title-font mb-2">
                Marketing Digital
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[200px]"></div>
    </section>
  );
};

export default Content;
