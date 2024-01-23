import React from "react";
import styles from "@/app/empresa/page.module.css";


const valor = [
    {
        title: 'Compromiso',
        description: 'Tenemos la convicción de que sólo comprometidos podemos lograr nuestros objetivos. Por eso, vivimos, respiramos y promovemos nuestra cultura organizacional. Sabemos que nuestros clientes merecen y necesitan siempre lo mejor de nosotros.',
    },
    {
        title: 'Hacerse cargo',
        description: 'El equipo es auto responsable de sus acciones. Cada miembro se hace cargo de sus responsabilidades y compromisos, con autonomía y confianza, entregando el espacio y los lineamientos específicos para que esto así sea. La palabra “culpa” no está dentro del lenguaje de nuestra cultura.',
    },
    {
        title: 'ADN digital',
        description: 'Estamos convencidos de que la tecnología es un recurso valioso, pero que sólo cobra sentido cuando se pone al servicio de las sociedades. Por eso apostamos a la transformación digital y creamos INFINITY DIGITAL.',
    },
    {
        title: 'Energía',
        description: 'Nos caracterizamos por ser un equipo con una fuerte motivación y entusiasmo, siempre movidos e innovando para lograr nuestra meta: que nuestros clientes estén satisfechos, en el menor tiempo posible, y sigan confiando en que estamos para acompáñalos en la implementación de nuevas tecnologías.',
    },
    {
        title: 'Iniciativa',
        description: 'Vivimos en tiempos movidos, pero INFINITY DIGITAL, al ser agencia joven, puede moverse con facilidad. Nos adaptamos fácilmente, adecuándonos para solucionar los problemas que van surgiendo y los que surgirán. Identificamos los problemas y desarrollamos, en conjunto, las mejores soluciones.',
    },
    {
        title: 'Cercanía con el cliente',
        description: 'INFINITY DIGITAL nació para ser un facilitador y para solucionar los problemas de nuestros clientes. Así, nos preocupamos de conocer a detalle las necesidades de nuestros clientes, con el objetivo de entregar el mejor servicio y cubrir la plenitud de sus requerimientos. Nos comprometemos en acompañarlos desde el primer contacto hasta la aplicación de la solución propuesta.',
    }
]

const ValuesCards = ({
    title,
    description,
}: {
    title: string
    description: string
}) => (
        <div className="w-[320px] h-[210px] inline-block">
            <h5 className="text-[1.25rem] font-bold mb-4">{title}</h5>
            <p className="text-[1rem]">{description}</p>
        </div>
);

export default function Company() {

    return (
        <main>
            <div className="max-w-7xl m-auto mt-32 text-textBlack">
                <div className="mb-48">
                    <h2 className=" text-[5rem] font-bold mb-16">Quiénes somos</h2>
                    <p className={styles.introText+" text-[1.125rem]"}>Somos una consultora joven con un equipo multidisciplinario, experimentado y con gran potencial.<br/>
                    Nos enfocamos en acompañar y brindar a nuestros clientes soluciones tecnológicas y de vanguardia para llevarlos al siguiente nivel, procurando brindar un servicio de calidad y aprovechando al máximo los beneficios de la tecnología de software para alcanzar así la transformación digital.</p>
                </div>
                <div className="mb-9 pl-[241px]">
                    <h3 className="text-[2.5rem] font-bold">Nuestra cultura</h3>
                    <p className="text-[1.125rem] ">Entendemos que quienes son parte de nuestro equipo son la pieza fundamental para lograr el éxito.<br/>
                    A continuación, te contamos los pilares fundamentales de <b>INFINITY DIGITAL</b>:</p>
                </div>
                <div className="flex gap-2 mb-32">
                    <div className={styles.blueContainer}>
                        <h4 className="text-[1.5rem] font-bold mb-6">Misión</h4>
                        <p className="text-[1.125rem]">Nuestra misión es convertirnos en una empresa mundialmente reconocida y favorita en todos los sectores privados y públicos, logrando entregar soluciones a las necesidades que nos presenten.
                        Lo lograremos a través de la consolidación de un equipo de alto desempeño, caracterizado por ser enérgico y comprometido con nuestros clientes.</p>
                    </div>
                    <div className={styles.blueContainer}>
                        <h4 className="text-[1.5rem] font-bold mb-6">Visión</h4>
                        <p className="text-[1.125rem]">Nuestra visión es forjar conexiones sólidas y a largo plazo con clientes y colaboradores, consolidándonos como socios tecnológicos estratégicos. Nos destacamos al proporcionar servicios innovadores y disruptivos en el ámbito de la consultoría de IT, impulsando la excelencia y la transformación digital de manera integral.</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-[2.5rem] font-bold mb-16">Nuestros valores</h3>
                    <div className="grid grid-cols-3 gap-y-20 mb-16">
                        {valor.map((value, i) => (
						    <ValuesCards key={i} {...value} />
					    ))};
                    </div>
                </div>
            </div>
        </main>
    );
};