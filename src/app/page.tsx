import Image from 'next/image'

import HeroSection from '@/components/hero-section'
import Content from '@/components/content'
import Feature from '@/components/feature'
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
			<Content />
			<PricingCards />
			<Feature />
			<Contact />
		</main>
	)
}
