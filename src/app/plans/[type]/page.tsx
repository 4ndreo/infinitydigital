import Image from 'next/image'

import HeroSection from '@/components/hero-section'
import Introduction from '@/components/introduction'
import Content from '@/components/content'
import Contact from '@/components/contact'
import Header from '@/components/header'
import PricingCards from '@/components/pricing-cards'

export default function Plans({type}: any) {
	return (
		<main>
			<h1>{type}</h1>
			<Header />
			<HeroSection />
			<div className="grey">
			<Introduction />
			<Content />
			</div>
			<PricingCards />
			<Contact />
		</main>
	)
}
