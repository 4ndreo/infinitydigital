'use client';
import React, { use, useEffect } from "react";
import {Button, Input, Textarea, Select, SelectItem} from "@nextui-org/react";
import styles from "@/app/plans/[type]/page.module.css";

export default function Plans({params}: any) {

	const rubros = ["gastronomía", "salud"];
	const servicios = ["Desarrollo web", "Desarrollo de APIs", "Marketing digital"];
	const nEmpleados = ["1 a 10", "10 a 50", "50 a 200", "+200"];

	const [values, setValues] = React.useState({
		empresa: "",
		nEmpleados: "",
		rubro: "",
		servicio: [""],
		name: "",
		phone: "",
		email: "",
	})

	const type = params.type.replace("_", " ").replace("%C3%B1", "ñ");
	const [bgType, setBgType] = React.useState('');

	function switchBg () {
		if (type === 'Grandes Empresas') {
			setBgType("bgBig")
		}
		if (type === 'Personalizado') {
			setBgType("bgCustom")
		}
		if (type === 'Pequeña Escala') {
			setBgType("bgSmall")
		}
	}

	function handleChange (e: any) {
		setValues({...values, [e.target.name ?? e[0]]: e.target.value})
	}

	function handleSelectionChange ( name: string, e: any) {
		console.log('AAAA', e.target.value.split(" ,"));
		setValues({...values, [name]: e.target.value.split(" ,")})
	}

	function handleMultipleSelectionChange ( name: string, e: any) {
		console.log('parametro', e.target.value.split(","));
		setValues({...values, [name]: e.target.value.split(",")})
	}
	
	useEffect(()=>{
		switchBg()
	},[])
	
	useEffect(()=>{
		console.log(values);
		
	}, [values])

	function isString (param: string): boolean {
		// console.log('parametro', param);
		return typeof param === "string" && param.length >= 0 && param.length < 150 ? true : false
	}

	function validatePhone (param: number): boolean {
		return typeof param === "number" && param >= 1000000 ? false : true
	}

	function validateEmail (param: string): boolean {
		return typeof param === "string" && param.includes("@") ? false : true
	}

	return (
		<section className="bg-black">
				<div className={styles[bgType] +" max-w-7xl m-auto text-white"}>
					<div className={styles.intro+" pt-40"}>
						<h2 className={styles.title}>Elegiste el plan "{type}"</h2>
						<p className={styles.text}>Por favor danos más información para poder brindarte el mejor servicio</p>
					</div>
					<div className="max-w-[45%]">
						<form>
							<h3 className={styles.sectionTitle}>Empresa</h3>
							<div className={styles.sectionForm}>
								<div className="flex w-full flex-wrap md:flex-nowrap gap-10 mb-6">
									<Input
										isRequired
										type="text"
										name="empresa"
										label="Empresa"
										variant="bordered"
										classNames={{label: "!text-white", inputWrapper: "!border-white"}}
										onBlur={(e: any)=>{handleChange(e)}}
										isInvalid={!isString(values.empresa)}
										color={isString(values.empresa) ? "success" : "danger" } 
										errorMessage={!isString(values.empresa) && "Por favor ingresa el nombre de tu empresa"}
									/>
									<Select 
										label="Cantidad de empleados" 
										variant="bordered"
										selectionMode="single"
										onSelectionChange={(e: any)=>{handleSelectionChange('nEmpleados', e)}}
										classNames={{label: "!text-white", trigger: "!border-white"}} >
											{nEmpleados.map((cantidad: string) => (
												<SelectItem key={cantidad} value={cantidad}>
													{cantidad}
												</SelectItem>
											))}
									</Select>
								</div>

								<div className="flex w-full flex-wrap md:flex-nowrap">
									<Select 
										label="Rubro" 
										// name="rubro"
										className="w-full"
										variant="bordered"
										onSelectionChange={(e: any)=>{handleSelectionChange('rubro', e)}}
										classNames={{label: "!text-white", trigger: "!border-white"}} >
										{rubros.map((rubro: string) => (
											<SelectItem key={rubro} value={rubro}>
												{rubro}
											</SelectItem>
										))}
									</Select>
								</div>
							</div>

							<h3 className={styles.sectionTitle}>Servicio</h3>
							<div className={styles.sectionForm}>
								<div className="flex w-full flex-wrap md:flex-nowrap mb-3">
										<Select 
											label="¿Qué servicio podemos ofrecerte?" 
											className="w-full"
											variant="bordered"
											selectionMode="multiple"
											description="Podés elegir más de uno"
											onChange={(e: any)=>{handleMultipleSelectionChange('servicio', e)}}
											classNames={{label: "!text-white", trigger: "!border-white"}} >
											{servicios.map((servicio: string) => (
												<SelectItem key={servicio} value={servicio}>
													{servicio}
												</SelectItem>
											))}
										</Select>
								</div>
					
								<Textarea
									variant="bordered"
									label="¿Cuál es tu objetivo?"
									labelPlacement="inside"
									minRows={50}
									onBlur={(e: any)=>{handleChange(e)}}
									isInvalid={!isString(values.empresa)}
									color={isString(values.empresa) ? "success" : "danger" } 
									errorMessage={!isString(values.empresa) && "Por favor ingresa el nombre de tu empresa"}
									classNames={{
										label: "!text-white",
										inputWrapper: "!border-white",
									  }}
									className="flex flex-wrap md:flex-nowrap w-auto" />

							</div>

							<h3 className={styles.sectionTitle}>Información de contacto</h3>
							<div className={styles.sectionForm}>
								<div className="flex w-full flex-wrap md:flex-nowrap gap-10 mb-6">
									<Input type="text" label="Nombre" variant="bordered" classNames={{label: "!text-white", inputWrapper: "!border-white"}} />
									<Input type="phone" label="Teléfono" variant="bordered" classNames={{label: "!text-white", inputWrapper: "!border-white"}} />
								</div>
								<Input type="email" label="Email" variant="bordered" className="flex w-full flex-wrap md:flex-nowrap" classNames={{label: "!text-white", inputWrapper: "!border-white"}} />
							</div>

							<Button className={styles.bttn+" w-full mb-12"}>Enviar</Button>
						</form>
					</div>
				</div>
		</section>
	)
}
