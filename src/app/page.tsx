import Image from 'next/image'

import HeroSection from '@/components/hero-section'
import Content from '@/components/content'
import Feature from '@/components/feature'
import Contact from '@/components/contact'
import Header from '@/components/header'

export default function Home() {
	return (
		<main>
			<div className="bg-[url('/bg-image.png')] bg-no-repeat bg-center bg-cover h-screen">
				<Header />
				<HeroSection />
			</div>
			<Content />
			<Feature />
			<Contact />
		</main>
	)
}
