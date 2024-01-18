'use client';
import React, { useEffect } from "react";
import {Button, Input, Textarea, Select, SelectItem} from "@nextui-org/react";
import styles from "@/app/plans/[type]/page.module.css";

export default function Plans({params}: any) {

	const rubros = ["gastronomía", "salud"];
	const servicios = ["Desarrollo web", "Desarrollo de APIs", "Marketing digital"];
	const nEmpleados = ["1 a 10", "10 a 50", "50 a 200", "+200"];

	const [formEmpresa, setFormEmpresa] = React.useState('');
	const [formCantidad, setFormCantidad] = React.useState('');
	const [formRubro, setFormRubro] = React.useState('');
	const [formServicio, setFormServicio] = React.useState('');
	const [formObjetivo, setFormObjetivo] = React.useState('');
	const [formNombre, setFormNombre] = React.useState('');
	const [formTel, setFormTel] = React.useState('');
	const [formEmail, setFormEmail] = React.useState('');

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
	useEffect(()=>{
		switchBg()
	},[])

	function validateInput (param: string): boolean {

		return typeof param === "string" && param.length > 0 && param.length < 150 ? false : true
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
										type="text"
										label="Empresa"
										variant="bordered"
										classNames={{label: "!text-white", inputWrapper: "!border-white"}}
										onBlur={(e: any)=>{setFormEmpresa(e.target.value)}}
										isInvalid={validateInput(formEmpresa)}
										color={validateInput(formEmpresa) ? "danger" : "success"} />
									<Select 
										label="Cantidad de empleados" 
										variant="bordered"
										selectionMode="single"
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
										className="w-full"
										variant="bordered"
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
