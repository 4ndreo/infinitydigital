import React from "react";
import styles from "@/app/empresa/page.module.css";


const valor = [
    {
        title: 'Compromiso',
        description: 'Tenemos la convicción de que sólo comprometidos podemos lograr nuestros objetivos. Por eso, vivimos, respiramos y promovemos nuestra cultura organizacional. Sabemos que nuestros clientes merecen y necesitan siempre lo mejor de nosotros.',
        icon: 'iconHands',
    },
    {
        title: 'Hacerse cargo',
        description: 'El equipo es auto responsable de sus acciones. Cada miembro se hace cargo de sus responsabilidades y compromisos, con autonomía y confianza, entregando el espacio y los lineamientos específicos para que esto así sea. La palabra “culpa” no está dentro del lenguaje de nuestra cultura.',
        icon: 'iconLightbulb',
    },
    {
        title: 'ADN digital',
        description: 'Estamos convencidos de que la tecnología es un recurso valioso, pero que sólo cobra sentido cuando se pone al servicio de las sociedades. Por eso apostamos a la transformación digital y creamos <span class="font-bold">INFINITY DIGITAL</span>.',
        icon: 'iconAdn',
    },
    {
        title: 'Energía',
        description: 'Nos caracterizamos por ser un equipo con una fuerte motivación y entusiasmo, siempre movidos e innovando para lograr nuestra meta: que nuestros clientes estén satisfechos, en el menor tiempo posible, y sigan confiando en que estamos para acompañarlos en la implementación de nuevas tecnologías.',
        icon: 'iconEnergy',
    },
    {
        title: 'Iniciativa',
        description: 'Vivimos en tiempos movidos, pero <span class="font-bold">INFINITY DIGITAL</span>, al ser agencia joven, puede moverse con facilidad. Nos adaptamos fácilmente, adecuándonos para solucionar los problemas que van surgiendo y los que surgirán. Identificamos los problemas y desarrollamos, en conjunto, las mejores soluciones.',
        icon: 'iconFlag',
    },
    {
        title: 'Cercanía con el cliente',
        description: '<span class="font-bold">INFINITY DIGITAL</span> nació para ser un facilitador y para solucionar los problemas de nuestros clientes. Así, nos preocupamos por conocer a detalle las necesidades de nuestros clientes, con el objetivo de entregar el mejor servicio y cubrir la plenitud de sus requerimientos. Nos comprometemos en acompañarlos desde el primer contacto hasta la aplicación de la solución propuesta.',
        icon: 'iconStar',
    }
]



export default function Company() {

    return (
        <main>
            <div className="max-w-7xl px-10 m-auto mt-10 md:mt-24 lg:mt-32 text-textBlack">
                <div className={styles.bgEmpresa+" pt-52 lg:pt-0 mb-12 lg:mb-24 lg:pb-24"}>
                    <h1 className="text-4xl lg:text-[5rem] font-bold mb-4 lg:mb-16 mt-6 lg:mt-0">Quiénes somos</h1>
                    <p className="lg:w-2/5 text-[1.125rem]"><span className="block">Somos una consultora joven con un equipo multidisciplinario, experimentado y con gran potencial.</span>
                    Nos enfocamos en acompañar y brindar a nuestros clientes soluciones tecnológicas y de vanguardia para llevarlos al siguiente nivel, procurando brindar un servicio de calidad y aprovechando al máximo los beneficios de la tecnología de software para alcanzar así la transformación digital.</p>
                </div>
                <div className={styles.blobL + ' hidden lg:block'}></div>
                <div className="mb-12 lg:pl-56">
                    <h2 className="text-4xl lg:text-[2.5rem] font-bold mb-4 lg:mb-0">Nuestra cultura</h2>
                    <p className="text-[1.125rem] "><span className="block">Entendemos que quienes son parte de nuestro equipo son la pieza fundamental para lograr el éxito.</span>
                    A continuación, te contamos los pilares fundamentales de <span className="font-bold">INFINITY DIGITAL</span>:</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 mb-12 lg:mb-32">
                    <div className={styles.blueContainer+" rounded-t-lg lg:rounded-l-lg"}>
                        <h3 className="text-[1.5rem] font-bold mb-6">Misión</h3>
                        <p className="text-[1.125rem]">Nuestra misión es convertirnos en una empresa mundialmente reconocida y favorita en todos los sectores privados y públicos, logrando entregar soluciones a las necesidades que nos presenten.
                        Lo lograremos a través de la consolidación de un equipo de alto desempeño, caracterizado por ser enérgico y comprometido con nuestros clientes.</p>
                    </div>
                    <div className={styles.blueContainer+" rounded-b-lg lg:rounded-r-lg"}>
                        <h3 className="text-[1.5rem] font-bold mb-6">Visión</h3>
                        <p className="text-[1.125rem]">Nuestra visión es forjar conexiones sólidas y a largo plazo con clientes y colaboradores, consolidándonos como socios tecnológicos estratégicos. Nos destacamos al proporcionar servicios innovadores y disruptivos en el ámbito de la consultoría de IT, impulsando la excelencia y la transformación digital de manera integral.</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-[2.5rem] font-bold mb-4 lg:mb-16">Nuestros valores</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-y-20 mb-2 lg:mb-24 pb-12">
                        {valor.map((value, i) => (
                            <div key={i}>
                                <h4 className={styles[value.icon]+" text-[1.25rem] font-bold mb-4 pl-8"}>{value.title}</h4>
                                <p className="text-[1rem]" dangerouslySetInnerHTML={{ __html: value.description }}></p>
                            </div>
					    ))}
                    </div>
                </div>
            </div>
        </main>
    );
};