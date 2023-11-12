'use client'
import React from 'react'

import { useScrollPosition } from '@/hooks/useScrollPosition'
const Header = () => {
	const scrollPosition = useScrollPosition()

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${scrollPosition > 0 ? 'z-40 shadow bg-opacity-70 h-[100px] bg-black backdrop-blur-lg backdrop-filter' : 'shadow-none'
				}`}
		>
			<div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-center content-center">
				<a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0" href='/'>
					<img src='/img/logo-infinity.svg' alt='logo digital infinity' className='h-auto w-[200px]' />
					<span className="ml-3 text-xl"></span>
				</a>
				<nav className="md:ml-auto flex flex-wrap text-base text-white justify-center items-center content-center gap-10">
					<a className="mr-5 hover:text-gray-200 hover:border-white hover:border-b-[1px]" href='#home'>Inicio</a>
					<a className="mr-5 hover:text-gray-200 hover:border-white hover:border-b-[1px]" href='#servicios'>Servicios</a>
					<a className="mr-5 hover:text-gray-200 hover:border-white hover:border-b-[1px]" href='#'>Contáctenos</a>
					<a className="mr-5 hover:text-gray-200 hover:border-white hover:border-b-[1px]" href='#'>Proyectos</a>
					<a className="mr-5 hover:text-gray-200 hover:border-white hover:border-b-[1px]" href='#'>Quienes Somos</a>
				</nav>
				<button className="h-[50px] inline-flex items-center bg-blue-200 bg-opacity-50 border-1 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
					<p className='z-40 text-white font-bold hover:text-black'>Cotiza tu proyecto</p>
				</button>
			</div>
		</header>
	)
}

export default Header
