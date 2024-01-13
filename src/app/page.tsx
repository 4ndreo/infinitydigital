import Image from 'next/image'

import HeroSection from '@/components/hero-section'
import Introduction from '@/components/introduction'
import Content from '@/components/content'
import Contact from '@/components/contact'
import Header from '@/components/header'
import PricingCards from '@/components/pricing-cards'

export default function Home() {
	return (
		<main>
				<Header />
			<div className="bg-[url('/bg-image.jpg')] bg-no-repeat bg-center bg-cover h-screen opacity-90">
				<HeroSection />
			</div>
			<div className="grey">
			<Introduction />
			<Content />
			</div>
			<PricingCards />
			<Contact />
		</main>
	)
}
