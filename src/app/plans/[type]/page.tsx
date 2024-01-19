'use client';
import React, {use, useEffect} from 'react';
import {Button, Input, Textarea, Select, SelectItem} from '@nextui-org/react';
import styles from '@/app/plans/[type]/page.module.css';

export default function Plans({params}: any) {
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
		telefono: '+5400000',
		email: '',
	});

	const type = params.type.replace('_', ' ').replace('%C3%B1', 'ñ');
	const [bgType, setBgType] = React.useState('');

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

	useEffect(() => {
		console.log(values);
	}, [values]);

	function isString(param: string): boolean {
		// console.log('parametro', param);
		return typeof param === 'string' && param.length >= 0 && param.length < 150
			? true
			: false;
	}

	function isPhone(param: string): boolean {
		let regExp = /^(?:\+?\d{2})?\+?\d{7,}$/
		// console.log(regExp.test(param))
		return regExp.test(param); 
		// return typeof param === 'number' && (param >= 1000000 || param === 0) ? true : false;
	}

	function isEmail(param: string): boolean {
		let regExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
		// console.log(regExp.test(param))
		return regExp.test(param); 
		// return typeof param === 'number' && (param >= 1000000 || param === 0) ? true : false;
	}

	function validateEmail(param: string): boolean {
		return typeof param === 'string' && param.includes('@') ? false : true;
	}

	return (
		<main className='bg-black'>
			<div className={styles[bgType] + ' max-w-7xl m-auto text-white h-full'}>
				<div className={styles.intro + ' pt-40'}>
					<h2 className={styles.title}>Elegiste el plan "{type}"</h2>
					<p className={styles.text}>
						Por favor danos más información para poder brindarte el mejor
						servicio.
					</p>
				</div>
				<div className='max-w-[45%]'>
					<form>
						<h3 className={styles.sectionTitle}>Empresa</h3>
						<div className={styles.sectionForm + ' transition-all'}>
							<div className='flex w-full flex-wrap md:flex-nowrap gap-10 mb-6'>
								<Input
									isRequired
									type='text'
									name='empresa'
									label='Empresa'
									variant='bordered'
									classNames={{
										label: '!text-white',
										inputWrapper: '!border-white',
									}}
									onBlur={(e: any) => {
										handleChange(e);
									}}
									isInvalid={!isString(values.empresa)}
									color={isString(values.empresa) ? 'success' : 'danger'}
									errorMessage={
										!isString(values.empresa) &&
										'Por favor ingresa el nombre de tu empresa'
									}
								/>
								<Select
									label='Cantidad de empleados'
									variant='bordered'
									selectionMode='single'
									onChange={(e: any) => {
										handleSelectionChange('nEmpleados', e);
									}}
									classNames={{label: '!text-white', trigger: '!border-white'}}>
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
									// name="rubro"
									className='w-full'
									variant='bordered'
									onChange={(e: any) => {
										handleSelectionChange('rubro', e);
									}}
									classNames={{label: '!text-white', trigger: '!border-white'}}>
									{rubros.map((rubro: string) => (
										<SelectItem key={rubro} value={rubro}>
											{rubro}
										</SelectItem>
									))}
								</Select>
							</div>
						</div>
						{
							values.empresa.length > 0 && values.nEmpleados.length > 0 && values.rubro.length > 0 ?
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
									onChange={(e: any) => {
										handleMultipleSelectionChange('servicio', e);
									}}
									classNames={{label: '!text-white', trigger: '!border-white'}}>
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
								onBlur={(e: any) => {
									handleChange(e);
								}}
								classNames={{
									label: '!text-white',
									inputWrapper: '!border-white',
								}}
								className='flex flex-wrap md:flex-nowrap w-auto'
							/>
						</div>
						</>
						:
						null
						}
						{
							values.servicio[0] !== '' && values.objetivo.length > 0 ?
							<>
						<h3 className={styles.sectionTitle}>Información de contacto</h3>
						<div className={styles.sectionForm + ' transition-all duration-500'}>
							<div className='flex w-full flex-wrap md:flex-nowrap gap-10 mb-6'>
								<Input
									type='text'
									label='Nombre completo'
									name='nombre'
									variant='bordered'
									onBlur={(e: any) => {
										handleChange(e);
									}}
									isInvalid={!isString(values.nombre)}
									color={isString(values.nombre) ? 'success' : 'danger'}
									errorMessage={
										!isString(values.nombre) &&
										'Por favor ingresa un nombre válido'
									}
									classNames={{
										label: '!text-white',
										inputWrapper: '!border-white',
									}}
								/>
								<Input
									type='tel'
									label='Teléfono'
									name='telefono'
									variant='bordered'
									onBlur={(e: any) => {
										handleChange(e);
									}}
									isInvalid={!isPhone(values.telefono)}
									color={isPhone(values.telefono) ? 'success' : 'danger'}
									errorMessage={
										!isPhone(values.telefono) &&
										'Por favor ingresa un teléfono válido'
									}
									classNames={{
										label: '!text-white',
										inputWrapper: '!border-white',
									}}
								/>
							</div>
							<Input
								type='email'
								label='Email'
								name='email'
								variant='bordered'
								onBlur={(e: any) => {
									handleChange(e);
								}}
								isInvalid={!isEmail(values.email)}
								color={isEmail(values.email) ? 'success' : 'danger'}
								errorMessage={
									!isEmail(values.email) &&
									'Por favor ingresa un email válido'
								}
								className='flex w-full flex-wrap md:flex-nowrap'
								classNames={{
									label: '!text-white',
									inputWrapper: '!border-white',
								}}
							/>
						</div>
						{
							isEmail(values.email) && isString(values.nombre) && isPhone(values.telefono) ?
						<Button className={styles.bttn + ' w-full mb-12'}>Enviar</Button>
						:
						null
						}
						</>
						:
						null
						}
						
					</form>
				</div>
			</div>
		</main>
	);
}
