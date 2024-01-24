'use client'

import styles from '../components/pricing-cards.module.css';
import {Button, Image, Link} from "@nextui-org/react";

const PricingCard = ({
	type,
	description,
	ctaText,
	source,
	alt,
	name,
}: {
	type: string
	description: string
	ctaText: string
	source: string
	alt: string
	name: string
}) => (
	<div className={styles.card + " flex flex-col relative p-5 h-full mx-auto max-w-sm items-center bg-white rounded-lg border border-gray-300 shadow xl:p-8"}>
		{/* <img src={source} alt={alt} width={353} height={202}/> */}
		<Image
		alt={alt} width={'auto'} height={155}
		src={source}
		/>
		<h3 className={styles.cardName}>{name}</h3>
		<p className={styles.text+" sm:text-lg"}>{description}</p>
		<Button as={Link} href={'/plans/' + type} className={styles.bttn +" rounded-lg py-2.5 text-center justify-center"}>
			{ctaText}
		</Button>
	</div>
)

const PricingCards = () => {
	const cards = [
		{
			type: 'Pequeña_Escala',
			description: 'Transforma tu negocio o emprendimiento con nuestros servicios digitales diseñados a medida. Desde presencia en internet hasta soluciones de comercio electrónico y marketing digital, te ofrecemos un conjunto integral de herramientas para expandir tu alcance, mejorar la visibilidad y aumentar tus ingresos.',
			ctaText: 'Elegir plan',
			source: '/img/innovation-tech.svg',
			alt: 'pequeña escala',
			name: 'Pequeña Escala',
		},
		{
			type: 'Grandes_Empresas',
			description: 'Impulsa el crecimiento de tu empresa con nuestros servicios digitales de vanguardia. Nuestra gama completa de soluciones incluye desarrollo de software personalizado, estrategias de transformación digital y gestión de proyectos tecnológicos. Maximiza la eficiencia, optimiza tus procesos y asegura un crecimiento sostenible en el mundo digital.',
			ctaText: 'Elegir plan',
			source: '/img/grandes-empresas.svg',
			alt: 'grandes empresas',
			name: 'Grandes Empresas',
		},
		{
			type: 'Personalizado',
			description: 'Crea un camino único hacia el éxito con nuestro plan personalizado. Trabajaremos estrechamente contigo para entender tus objetivos, desafíos y visiones específicas. Desde la consultoría estratégica hasta la implementación de soluciones personalizadas, te proporcionaremos un plan digital que se adapte perfectamente a tus necesidades individuales, permitiéndote alcanzar tus metas de manera efectiva y a tu manera.',
			ctaText: 'Elegir plan',
			source: '/img/plan-personalizado.svg',
			alt: 'plan personalizado',
			name: 'Personalizado',
		}
	]

	return (
		<section className="bg-[#EFFDFF]" id="start">
			<div className="py-7 mx-auto max-w-7xl lg:py-24">
				<div className="mx-auto max-w-screen-md text-center mb-7 lg:mb-12">
					<h3 className={styles.title+" mb-4"}>
						Comienza a crecer
					</h3>
				</div>
				<div className="flex flex-wrap gap-6 xl:gap-10 2xl:p-0 p-8">
					{cards.map((card, i) => (
						<PricingCard key={i} {...card} />
					))}
				</div>
			</div>
		</section>
	)
}

export default PricingCards
