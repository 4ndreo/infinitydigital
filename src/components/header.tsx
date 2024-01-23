'use client'
import React from 'react'
import Link from 'next/link';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as UILink, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import styles from '../components/header.module.css';

import {useScrollPosition} from '@/hooks/useScrollPosition'
const Header = () => {
	const scrollPosition = useScrollPosition()
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScroll250, setIsScroll250] = React.useState(true);
  const pathName = window.location.pathname;
  const pathHash = window.location.hash;

	const menuItems = [
    {
      name: "Inicio",
			path: "/",
		},
		{
      name: "Servicios",
			path: "/#servicios",
		},
		{
      name: "Empresa",
			path: "#",
		},
		{
      name: "Contacto",
			path: "/#contacto",
		}
	];

  function handleScroll (e:number) {
    // console.log("scroll", pathName);
    e >= 250 ? setIsScroll250(false) : setIsScroll250(true)
  }

	return (

<Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} onScrollPositionChange={(e)=> {handleScroll(e)}} classNames={{base: isScroll250 && pathName === "/" ? styles.transparent : styles.navbarDark, wrapper: styles.wrapper + ' container px-10 xl:px-0 m-auto '}} isBlurred={!isScroll250} className='header'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden color-white"
        />
        <NavbarBrand>
          <p className={styles.brandText + " font-bold text-white"}>INFINITY DIGITAL</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="end">
	  {menuItems.map((item, index) => (
        <NavbarItem key={`${item.name}-${index}`}>
          <UILink isBlock href={item.path} className={pathHash===item.path || pathName === item.path ? styles.active : styles.inactive + ' text-white transition-all'}>
          {item.name}
          </UILink>
        </NavbarItem>

		))}

        <Button as={UILink} className={!isScroll250 || pathName!== '/' ? 'flex bg-ghostWhite hover:bg-[#EF55FF] hover:text-white font-bold' : 'hidden'} href="/#start">Comienza ahora</Button>

      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
			  index !== menuItems.length -1 ?
          <NavbarMenuItem key={`${item.name}-${index}`} >
            <UILink
              color='foreground'
              className="w-full"
              href={item.path}
              size="lg"
			  onClick={() => setIsMenuOpen(false) }
            >
              {item.name}
            </UILink>
          </NavbarMenuItem>
			:
          <NavbarMenuItem key={`${item.name}-${index}`}>
			     <Button as={UILink} className={!isScroll250 || pathName!== '/' ? 'flex bg-ghostWhite hover:bg-[#EF55FF] hover:text-white font-bold' : 'hidden'} href="/#start">Comienza ahora</Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

/*
		<Navbar onMenuOpenChange={setIsMenuOpen}>
      	<NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <UILink color="foreground" href='#home'>
		  Inicio
          </UILink>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#servicios">
		  Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contacto">
		  Contáctenos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#proyectos">
		  Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about">
		  Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
		  <Link color="foreground" href="#contacto">
			Comienza ahora
          </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
	  <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    	</Navbar>
*/


		// <header
		// 	className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${scrollPosition > 0 ? 'z-40 shadow bg-opacity-70 h-[100px] bg-black backdrop-blur-lg backdrop-filter' : 'shadow-none'
		// 		}`}
		// >
		// 	<div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-center content-center">
		// 		<a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0" href='/'>
		// 			<img src='/img/logo-infinity.svg' alt='logo digital infinity' className='h-auto w-[200px]' />
		// 			<span className="ml-3 text-xl"></span>
		// 		</a>
		// 		<nav className="md:ml-auto flex flex-wrap text-base text-white justify-center items-center content-center gap-10">
		// 			<a className="mr-5 hover:text-gray-200 hover:border-white hover:border-b-[1px]" href='#home'>Inicio</a>
		// 			<a className="mr-5 hover:text-gray-200 hover:border-white hover:border-b-[1px]" href='#servicios'>Servicios</a>
		// 			<a className="mr-5 hover:text-gray-200 hover:border-white hover:border-b-[1px]" href='#contacto'>Contáctenos</a>
		// 			<a className="mr-5 hover:text-gray-200 hover:border-white hover:border-b-[1px]" href='#proyectos'>Proyectos</a>
		// 			<a className="mr-5 hover:text-gray-200 hover:border-white hover:border-b-[1px]" href='#about'>Quienes Somos</a>
		// 		</nav>
		// 		<button className="h-[50px] inline-flex items-center bg-blue-200 bg-opacity-50 border-1 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
		// 			<p className='z-40 text-white font-bold hover:text-black'>Cotiza tu proyecto</p>
		// 		</button>
		// 	</div>
		// </header>
	)
}

export default Header
