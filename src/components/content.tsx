'use client';
import React from 'react';
// import desarrolloImage from "../utils/img/desarrollo-web.png";
// import apiImage from "../utils/img/api-medida.png";
// import marketingDigital from "../utils/img/campana-digital.png";
import apiImg from '@/utils/img/API.svg';
import desWebImg from '@/utils/img/Web.svg';
import marketingImg from '@/utils/img/Marketing.svg';
import Image from 'next/image';
import {Card, CardHeader, CardFooter, CardBody} from '@nextui-org/react';
import styles from '../components/content.module.css';

const Content = () => {
	return (
		<section className='body-font max-w-7xl m-auto' id='servicios'>
			<div className='h-[70px]'></div>
			<div className=' w-full py-24 mx-auto'>
				<div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
					<h3 className={styles.title + ' sm:text-3xl tracking-tight'}>
						Servicios
					</h3>
				</div>
				<div className='flex flex-wrap flex-col md:flex-row md:justify-around lg:justify-between m-auto 2xl:p-0 p-8 gap-10'>
					<Card className={styles.card + ' m-auto overflow-visible block'}>
						<CardHeader className='flex-col items-start'>
							<Image
								className={styles.img + ' object-cover'}
								src={desWebImg}
								alt='desarrollo web'
							/>
						</CardHeader>

						<CardBody className='p-2'>
							<h4 className={styles.cardTitle}>Desarrollo Web</h4>
						</CardBody>

						<CardFooter className='overflow-visible justify-start p-2'>
							<p className={styles.cardInfo}>
								Diseño y programación de sitios interactivos para experiencias
								online atractivas y funcionales.
							</p>
						</CardFooter>
					</Card>

					<Card className={styles.card + ' m-auto overflow-visible block'}>
						<CardHeader className='flex-col items-start'>
							<Image
								className={styles.img + ' object-cover'}
								src={apiImg}
								alt='api a medida'
							/>
						</CardHeader>

						<CardBody className='p-2'>
							<h4 className={styles.cardTitle}>Desarrollo de APIs</h4>
						</CardBody>

						<CardFooter className='overflow-visible justify-start p-2'>
							<p className={styles.cardInfo}>
								Creación y gestión de interfaces para conectar sistemas y
								facilitar el intercambio de datos de manera eficiente.
							</p>
						</CardFooter>
					</Card>

					<Card className={styles.card + ' m-auto overflow-visible block'}>
						<CardHeader className='flex-col items-start'>
							<Image
								className={styles.img + ' object-cover'}
								src={marketingImg}
								alt='marketing digital'
							/>
						</CardHeader>

						<CardBody className='p-2'>
							<h4 className={styles.cardTitle}>Marketing Digital</h4>
						</CardBody>

						<CardFooter className='overflow-visible justify-start p-2'>
							<p className={styles.cardInfo}>
								Implementación de estrategias online para promocionar marcas,
								productos o servicios, aprovechando plataformas digitales y
								redes sociales.
							</p>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Content;
