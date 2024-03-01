'use client';
import {Button, Link} from '@nextui-org/react';
import styles from '../components/hero.module.css';

const HeroSection = () => {
	return (
		<section
			className="text-gray-600 body-font bg-[url('/img/computer-alt-sm.png')] md:bg-[url('/img/computer-alt.png')] bg-no-repeat bg-center bg-cover h-[50vh] md:h-[80vh] relative"
			id='home'>
			<div className='container m-auto md:m-0 md:ms-auto h-full md:w-5/12 flex items-center'>
				<div className='text-center md:text-left lg:w-full w-[900px]'>
					<h1 className='title-font xl:text-5xl md:text-4xl text-3xl mb-10 lg:mb-20 tracking-tight font-bold text-white sm:leading-snug max-w-xl'>
						<span className='block mb-5 lg:mb-10'>Innovamos en IT</span>
						<span className='block'>
							Creando Oportunidades{' '}
							<span className={styles.colorAnimated}>Infinitas</span>
						</span>
					</h1>
					<Button as={Link} href={'#start'} className='bg-ghostWhite hover:bg-[#EF55FF] hover:text-white font-extrabold py-5 px-11 text-xl h-[unset]'>
						Comienza ahora
					</Button>
				</div>
			</div>
			<div className={styles.blobR + ' hidden lg:block'}></div>
		</section>
	);
};

export default HeroSection;
