'use client';
import React, {useState, useEffect} from 'react';
import {Button, Input, Textarea, Select, SelectItem} from '@nextui-org/react';
import styles from '@/app/plans/[type]/page.module.css';

import { ToastContainer, toast } from "react-toastify";
import Loader from '@/components/loader';

export default function Plans({params}: any) {
	const [isLoading, setIsLoading] = useState(false);
	const [contactForm, setContactForm]: any = useState(false);
	const rubros = ['Agricultura y ganadería',
		'Alimentos y bebidas',
		'Automotriz',
		'Construcción',
		'Educación',
		'Energía',
		'Finanzas',
		'Salud',
		'Tecnología',
		'Turismo',
		'Transporte',
		'Manufactura',
		'Medios de comunicación',
		'Servicios profesionales',
		'Comercio minorista',
		'Telecomunicaciones',
		'Otro'];
	const servicios = [
		'Desarrollo web',
		'Desarrollo de APIs',
		'Marketing digital',
	];
	const nEmpleados = ['1 a 10', '10 a 50', '50 a 200', '+200'];

	const [values, setValues] = React.useState({
		empresa: '',
		nEmpleados: '',
		rubro: '',
		servicio: [''],
		objetivo: '',
		nombre: '',
		telefono: '',
		email: '',
	});

	const type = params.type.replace('_', ' ').replace('%C3%B1', 'ñ');
	const [bgType, setBgType] = React.useState('');

	async function handleSubmit() {
		try {
			const message = 
			`
			<div style="color: white">
				<ul>
					<li>Nombre: ${values.nombre}</li>
					<li>Plan elegido: ${type}</li>
					<li>Servicios solicitados: ${values.servicio.join(', ')}</li>
					<li>Rubro: ${values.rubro}</li>
					<li>Nombre de la empresa: ${values.empresa}</li>
					<li>Cantidad de empleados: ${values.nEmpleados}</li>
					<li>Objetivo: ${values.objetivo}</li>
					<li>E-mail: <a href="mailto:${values.email}" style="color: white">${values.email}</a></li>
					<li>Teléfono: ${values.telefono}</li>
				</ul>
			</div>
			`
			;

			setIsLoading(true);
			await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({email: values.email, nombre: values.nombre, message}),
			}).then((res) => {
				if(res.ok) {
				  toast.success('Formulario enviado con éxito');
				  resetForm();
				} else {
				  toast.error('Error al enviar el formulario. Intente nuevamente.');
				}
			  }).finally(()=> {
				setIsLoading(false);
			  }) 
		} catch (error) {
			toast.error('Error al enviar el formulario. Intente nuevamente.');
		}
	}

	function formIsValid() {
		return isEmail(values.email) &&
		isString(values.nombre) &&
		isString(values.objetivo) &&
		isPhone(values.telefono)
	}

	function switchBg() {
		if (type === 'Grandes Empresas') {
			setBgType('bgBig');
		}
		if (type === 'Personalizado') {
			setBgType('bgCustom');
		}
		if (type === 'Pequeña Escala') {
			setBgType('bgSmall');
		}
	}

	function handleChange(e: any) {
		setValues({...values, [e.target.name]: e.target.value});
	}

	function handleSelectionChange(name: string, e: any) {
		setValues({...values, [name]: e.target.value});
	}

	function handleMultipleSelectionChange(name: string, e: any) {
		setValues({...values, [name]: e.target.value.split(',')});
	}

	useEffect(() => {
		switchBg();
	}, []);

	function resetForm() {
		contactForm.reset();
		setValues({empresa: '',
		nEmpleados: '',
		rubro: '',
		servicio: [''],
		objetivo: '',
		nombre: '',
		telefono: '',
		email: '',});
	  }

	function isString(param: string): boolean {
		// console.log('parametro', param);
		return typeof param === 'string' && param.length > 0 && param.length < 150
			? true
			: false;
	}

	function isPhone(param: string): boolean {
		let regExp = /^(?:\+?\d{2})?\+?\d{1,}(\s*|\-*)\d{1,}(\s*|\-*)\d{1,}(\s*|\-*)\d{1,}(\s*|\-*)\d{1,}(\s*|\-*)\d{1,}(\s*|\-*)\d{1,}$/;
		return regExp.test(param);
	}

	function isEmail(param: string): boolean {
		let regExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
		return regExp.test(param);
	}

	return (
		<main className={styles.formBg+' text-textBlack'}>
			<ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
			<div className='max-w-7xl m-auto h-full md:flex md:justify-between  px-10'>
				<div className='mt-10 md:mt-32 w-full block md:max-w-[35%] md:flex'>
					<div className={styles[bgType] +' pt-56 sm:pt-80 md:pt-0 md:pb-64 lg:pb-96 h-fit'}>
						<h1 className={styles.title+" mb-8"}>Elegiste el plan {type}</h1>
						<p className={styles.text}>
						Por favor danos más información para poder brindarte el mejor
						servicio.
						</p>
					</div>
				</div>
				<div className='block w-full md:w-[45%] mt-32'>
					<form ref={(el) => setContactForm(el)} autoComplete="off">
						<h2 className={styles.sectionTitle}>Empresa</h2>
						<div className={styles.sectionForm + ' transition-all'}>
							<div className='flex w-full flex-wrap md:flex-nowrap gap-10 mb-6'>
								<Input
									isRequired
									type='text'
									name='empresa'
									label='Empresa'
									variant='bordered'
									classNames={{inputWrapper:'bg-white'}}
									onChange={(e: any) => {
										handleChange(e);
									}}
									isInvalid={!isString(values.empresa) && values.empresa.length > 3}
									errorMessage={
										!isString(values.empresa) &&
										values.empresa.length > 3 &&
										'Por favor ingresa el nombre de tu empresa'
									}
								/>
								<Select
									label='Cantidad de empleados'
									variant='bordered'
									selectionMode='single'
									classNames={{trigger:'bg-white'}}
									onChange={(e: any) => {
										handleSelectionChange('nEmpleados', e);
									}}
									>
									{nEmpleados.map((cantidad: string) => (
										<SelectItem key={cantidad} value={cantidad}>
											{cantidad}
										</SelectItem>
									))}
								</Select>
							</div>

							<div className='flex w-full flex-wrap md:flex-nowrap'>
								<Select
									label='Rubro'
									className='w-full'
									variant='bordered'
									classNames={{trigger:'bg-white'}}
									onChange={(e: any) => {
										handleSelectionChange('rubro', e);
									}}
									>
									{rubros.map((rubro: string) => (
										<SelectItem key={rubro} value={rubro}>
											{rubro}
										</SelectItem>
									))}
								</Select>
							</div>
						</div>
						{values.empresa.length > 0 &&
						values.nEmpleados.length > 0 &&
						values.rubro.length > 0 ? (
							<>
								<h2 className={styles.sectionTitle}>Servicio</h2>
								<div className={styles.sectionForm + ' transition-all h-fit'}>
									<div className='flex w-full flex-wrap md:flex-nowrap mb-3'>
										<Select
											label='¿Qué servicio podemos ofrecerte?'
											className='w-full'
											variant='bordered'
											selectionMode='multiple'
											description='Podés elegir más de uno'
											classNames={{trigger:'bg-white'}}
											onChange={(e: any) => {
												handleMultipleSelectionChange('servicio', e);
											}}
											>
											{servicios.map((servicio: string) => (
												<SelectItem key={servicio} value={servicio}>
													{servicio}
												</SelectItem>
											))}
										</Select>
									</div>

									<Textarea
										variant='bordered'
										name='objetivo'
										label='¿Cuál es tu objetivo?'
										labelPlacement='inside'
										minRows={50}
										classNames={{inputWrapper:'bg-white'}}
										onChange={(e: any) => {
											handleChange(e);
										}}
										className='flex flex-wrap md:flex-nowrap w-auto'
									/>
								</div>
							</>
						) : null}
						{values.servicio[0] !== '' && values.objetivo.length > 0 ? (
							<>
								<h2 className={styles.sectionTitle}>Información de contacto</h2>
								<div
									className={
										styles.sectionForm + ' transition-all duration-500'
									}>
									<div className='flex w-full flex-wrap md:flex-nowrap gap-10 mb-6'>
										<Input
											type='text'
											label='Nombre completo'
											name='nombre'
											variant='bordered'
											classNames={{inputWrapper:'bg-white'}}
											onChange={(e: any) => {
												handleChange(e);
											}}
											isInvalid={!isString(values.nombre) && values.nombre.length > 3}
											errorMessage={
												!isString(values.nombre) && values.nombre.length > 3 &&
												'Por favor ingresa un nombre válido'
											}
										/>
										<Input
											type='tel'
											label='Teléfono'
											name='telefono'
											variant='bordered'
											classNames={{inputWrapper:'bg-white'}}
											onChange={(e: any) => {
												handleChange(e);
											}}
											isInvalid={!isPhone(values.telefono) && values.telefono.length > 0}
											errorMessage={
												!isPhone(values.telefono) &&
												values.telefono.length > 0 &&
												'Por favor ingresa un teléfono válido'
											}
										/>
									</div>
									<Input
										type='email'
										label='Email'
										name='email'
										variant='bordered'
										classNames={{inputWrapper:'bg-white'}}
										onChange={(e: any) => {
											handleChange(e);
										}}
										isInvalid={!isEmail(values.email) && values.email.length > 0}
										errorMessage={
											!isEmail(values.email) &&
											values.email.length > 0 &&
											'Por favor ingresa un email válido'
										}
										className='flex w-full flex-wrap md:flex-nowrap'
									/>
								</div>

									<Button disabled={!formIsValid() || isLoading} className={styles.bttn + ' w-full mb-12'} onClick={() =>handleSubmit()}>
									{isLoading ? <Loader /> : 'Enviar'}
									</Button>
							</>
						) : null}
					</form>
				</div>
			</div>
		</main>
	);
}
