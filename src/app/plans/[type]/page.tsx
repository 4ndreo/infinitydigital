'use client';
import React, {useState, useEffect} from 'react';
import {Button, Input, Textarea, Select, SelectItem} from '@nextui-org/react';
import styles from '@/app/plans/[type]/page.module.css';

import { ToastContainer, toast } from "react-toastify";

export default function Plans({params}: any) {
	const [isLoading, setIsLoading] = useState(false);
	const rubros = ['gastronomía', 'salud'];
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
			"Hola, soy <b>" + values.nombre + "</b>, me gustaría obtener una propuesta sobre para el plan " + type + 
			"</ul> Estoy buscando un servicio de " + values.servicio.join(', ') + " para mi empresa de " + values.rubro + " llamada " + values.empresa + ", que tiene " + values.nEmpleados + " empleados, ya que mi objetivo es: \"" + values.objetivo + "\". Mi email de contacto es: " + values.email + " y mi teléfono es: " + values.telefono + "."
			;


			setIsLoading(true);
			// Send email using Nodemailer
			await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({email: values.email, nombre: values.nombre, message}),
			});

			// Reset the form
			// resetForm();

			// Show success message or redirect to a thank you page
			console.log('El email se envio con éxito!');
		} catch (error) {
			// Handle error
			console.error('Error al enviar el email:', error);
		} finally {
			// setSubmitting(false);
			toast.success('Formulario completado con éxito!');
			setIsLoading(false);
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
	// function handlePhone(e: any) {
	// 	if (isPhone(e.target.value)) {
	// 		setValues({...values, [e.target.name]: e.target.value});
	// 	}
	// }

	function handleSelectionChange(name: string, e: any) {
		setValues({...values, [name]: e.target.value});
	}

	function handleMultipleSelectionChange(name: string, e: any) {
		setValues({...values, [name]: e.target.value.split(',')});
	}

	useEffect(() => {
		switchBg();
	}, []);


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
			<div className='max-w-7xl m-auto h-full flex justify-between'>
				<div className='mt-32 max-w-[35%] flex'>
					<div className={styles[bgType] +' h-[650px]'}>
						<h2 className={styles.title+" mb-8"}>Elegiste el plan {type}</h2>
						<p className={styles.text}>
						Por favor danos más información para poder brindarte el mejor
						servicio.
						</p>
					</div>
				</div>
				<div className='min-w-[45%] mt-32'>
					<form autoComplete="off">
						<h3 className={styles.sectionTitle}>Empresa</h3>
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
								<h3 className={styles.sectionTitle}>Servicio</h3>
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
								<h3 className={styles.sectionTitle}>Información de contacto</h3>
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

									<Button disabled={!formIsValid()} className={styles.bttn + ' w-full mb-12'} onClick={() =>handleSubmit()}>
										Enviar
									</Button>
							</>
						) : null}
					</form>
				</div>
			</div>
		</main>
	);
}
