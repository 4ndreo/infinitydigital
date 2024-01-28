'use client';
import React, {useState} from "react";
import {Button, Input, Textarea} from "@nextui-org/react";
import styles from '../components/contact.module.css';
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = React.useState({
		nombre: '',
		empresa: '',
		email: '',
		telefono: '',
		consulta: '',
	});

  async function handleSubmit() {
		try {
			const message = 
      `<div>
        <ul>
          <li>Nombre: ${values.nombre}</li>
          <li>Empresa: ${values.empresa}</li>
          <li>E-mail: ${values.email}</li>
          <li>Teléfono: ${values.telefono}</li>
          <li>Consulta: ${values.consulta}</li>
        </ul>
      </div>`
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
      toast.error('Error al enviar el formulario. Intente nuevamente.');
			console.error('Error al enviar el email:', error);
		} finally {
			// setSubmitting(false);
			toast.success('Formulario enviado con éxito');
			setIsLoading(false);
		}
	}

  function formIsValid() {
		return isEmail(values.email) &&
		isString(values.nombre) &&
		isString(values.consulta) &&
		isPhone(values.telefono)
	}
  
  function handleChange(e: any) {
		setValues({...values, [e.target.name]: e.target.value});
	}

  function isString(param: string): boolean {
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
    <section className="body-font relative" id="contacto">
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
        theme="dark" />
      <div className="max-w-7xl m-auto">

      <div className={styles.blobL + ' hidden lg:block'}></div>
      <div className="container py-20 mx-auto px-10">
        <div className={styles.titleContainer+" flex flex-col text-center mb-16"}>
          <h3 className={styles.title+" sm:text-3xl mb-4"}>
            Contáctanos
          </h3>
          <p className={styles.text+" lg:w-2/3 mx-auto"}>
          Para ponerte en contacto con nosotros, completa el formulario disponible aquí o utiliza cualquiera de los siguientes datos de contacto.
          </p>
        </div>
        <div className={styles.contactContainer+" justify-between container lg:flex-row flex-col"}>
          <div className='w-full lg:w-[50%] mb-9 lg:mb-0'>
            <ul className={styles.grid}>
              <li className="mb-6">
                <div className={styles.infoContain}>
                <h5 className={`${styles.infoName} ${styles.iconLocation}`}>Ubicación</h5>
                <p className={styles.infoText}>Buenos Aires, Argentina.</p>
                </div>
              </li>
              <li className="mb-6">
              <div className={styles.infoContain}>
              <h5 className={`${styles.infoName} ${styles.iconMail}`}>E-mail</h5>
              <p className={styles.infoText}>info.infinitydigital@gmail.com</p>
              </div>
              </li>
              <li className="mb-6">
              
              <div className={styles.infoContain}>
              <h5 className={`${styles.infoName} ${styles.iconWhatsapp}`}>WhatsApp</h5>
              <p className={styles.infoText}>+54 011 5490-6966</p>
              </div>
              </li>
              <li>
              <div className={styles.infoContain}>
              <h5 className={`${styles.infoName} ${styles.iconInstagram}`}>Instagram</h5>
              <p className={styles.infoText}>@infinitydigital.tech</p>
              </div>
              </li>
            </ul>
          </div>
          <div className={styles.form + " w-full lg:w-[50%] border-gray-300 shadow rounded-lg mb-5"}>
            <form className="my-9 px-7" autoComplete="off">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-7 mb-5">
              <Input 
                type="text"
                label="Nombre"
                name="nombre"
                variant="bordered"
                onChange={(e: any) => {
                  handleChange(e);
                }}
                isInvalid={!isString(values.nombre) && values.nombre.length > 0}
                errorMessage={
                  !isString(values.nombre) &&
                  values.nombre.length > 3 &&
                  'Por favor ingresa tu nombre'
                } />
              <Input
                type="text"
                label="Empresa"
                variant="bordered"  />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-7 mb-5">
              <Input
              type="email"
              label="Email"
              name="email"
              variant="bordered"
              onChange={(e: any) => {
                handleChange(e);
              }}
              isInvalid={!isEmail(values.email) && values.email.length > 0}
              errorMessage={
                !isEmail(values.email) &&
                values.email.length > 0 &&
                'Por favor ingresa un email válido'
              }  />
              <Input
              type="tel"
              label="Número"
              name="telefono"
              variant="bordered"
              onChange={(e: any) => {
                handleChange(e);
              }}
              isInvalid={!isPhone(values.telefono) && values.telefono.length > 0}
              errorMessage={
                !isPhone(values.telefono) &&
                values.telefono.length > 0 &&
                'Por favor ingresa un teléfono válido'
              } />
            </div>
            <Textarea
              variant="bordered"
              label="¿En qué podemos ayudarte?"
              name="consulta"
              labelPlacement="inside"
              classNames={{base: '!mx-0 w-full'}}
              className="flex flex-wrap md:flex-nowrap mb-5 w-auto mx-7"
              onChange={(e: any) => {
                handleChange(e);
              }} />
            <Button className={styles.bttn+" h-12 rounded-lg w-full"} disabled={!formIsValid()} onClick={()=>handleSubmit()}>
              Enviar
            </Button>
            </form>
          </div>
        </div>        
      </div>
      </div>
    </section>
  );
};

export default Contact;
