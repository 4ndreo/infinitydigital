import styles from '../components/pricing-cards.module.css';
import smallComp from '@/utils/img/pequeñas-empresas.svg';
import bigComp from '@/utils/img/grandes-empresas.svg';
import persPlan from '@/utils/img/plan-personalizado.svg';

const PricingCard = ({
	type,
	description,
	ctaText,
	source,
	alt,
}: {
	type: string
	description: string
	ctaText: string
	source: string
	alt: string
}) => (
	<div className={styles.card + " flex flex-col relative p-5 h-full mx-auto max-w-sm items-center bg-white rounded-lg border border-gray-300 shadow xl:p-8"}>
		<img src={source} alt={alt} width={353} height={202}/>
		<h3 className={styles.type}>{type}</h3>
		<p className={styles.text+" sm:text-lg"}>{description}</p>
		<a href="" className= {styles.bttn +" border border-gray-900 rounded-lg py-2.5 text-center"}>
			{ctaText}
		</a>
	</div>
)

const PricingCards = () => {
	const cards = [
		{
			type: 'Pequeña Escala',
			description: 'Transforma tu negocio o emprendimiento con nuestros servicios digitales diseñados a medida. Desde presencia en internet hasta soluciones de comercio electrónico y marketing digital, te ofrecemos un conjunto integral de herramientas para expandir tu alcance, mejorar la visibilidad y aumentar tus ingresos.',
			ctaText: 'Elegir plan',
			source: smallComp,
			alt: 'pequeña escala',
		},
		{
			type: 'Grandes Empresas',
			description: 'Impulsa el crecimiento de tu empresa con nuestros servicios digitales de vanguardia. Nuestra gama completa de soluciones incluye desarrollo de software personalizado, estrategias de transformación digital y gestión de proyectos tecnológicos. Maximiza la eficiencia, optimiza tus procesos y asegura un crecimiento sostenible en el mundo digital.',
			ctaText: 'Elegir plan',
			source: bigComp,
			alt: 'grandes empresas',
		},
		{
			type: 'Plan Personalizado',
			description: 'Crea un camino único hacia el éxito con nuestro plan personalizado. Trabajaremos estrechamente contigo para entender tus objetivos, desafíos y visiones específicas. Desde la consultoría estratégica hasta la implementación de soluciones personalizadas, te proporcionaremos un plan digital que se adapte perfectamente a tus necesidades individuales, permitiéndote alcanzar tus metas de manera efectiva y a tu manera.',
			ctaText: 'Elegir plan',
			source: persPlan,
			alt: 'plan personalizado',
		}
	]

	return (
		<section className="bg-white" id="pricing">
			<div className="py-7 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
				<div className="mx-auto max-w-screen-md text-center mb-7 lg:mb-12">
					<h3 className={styles.title+" mb-4"}>
						Comienza a crecer
					</h3>
				</div>
				<div className="space-y-7 flex flex-wrap lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 md:space-y-0">
					{cards.map((card, i) => (
						<PricingCard key={i} {...card} />
					))}
				</div>
			</div>
		</section>
	)
}

export default PricingCards
