import HeroSection from '@/components/hero-section'
import Introduction from '@/components/introduction'
import Content from '@/components/content'
import Contact from '@/components/contact'
import PricingCards from '@/components/pricing-cards'

export default function Home() {
	return (
		<main>
			<HeroSection />
			<Introduction />
			<Content />
			<PricingCards />
			<Contact />
		</main>
	)
}
