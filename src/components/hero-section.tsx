'use client'
import { Button } from '@nextui-org/react';
import styles from '../components/hero.module.css';


const HeroSection = () => {
	return (
		<section className="text-gray-600 body-font bg-[url('/img/computer-alt.png')] bg-no-repeat bg-center bg-cover h-[80vh]" id='home'>
			<div className="container ms-auto h-full w-5/12 flex items-center">
				<div className="text-left lg:w-full w-[900px]">
					<h1 className="title-font sm:text-6xl text-3xl mb-20 tracking-tighter font-bold text-white sm:leading-snug">
						<span className='block mb-10'>Innovamos en IT</span>
						<span className='block'>Creando Oportunidades <span className={styles.colorAnimated}>Infinitas</span></span>
						
					</h1>
					<Button className='bg-white hover:bg-[#EF55FF] hover:text-white text-gray-800 font-extrabold py-6 px-10 text-xl'>
						Comienza ahora
					</Button>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
