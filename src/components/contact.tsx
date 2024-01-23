'use client';
import React from "react";
import ContactForm from "./form";
import {Button, Input, Textarea} from "@nextui-org/react";
import styles from '../components/contact.module.css';
import locationImg from '@/utils/img/ubicacion.svg';

const Contact = () => {


  

  return (
    <section className="body-font relative" id="contacto">
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
        <div className={styles.contactContainer+" justify-between container md:flex-row flex-col"}>
          <div className={'w-full lg:w-[45%]'}>
            <ul>
              <li className="mb-2">
                <div className={styles.infoContain}>
                <h5 className={`${styles.infoName} ${styles.iconLocation}`}>Ubicación</h5>
                <p className={styles.infoText}>Buenos Aires, Argentina.</p>
                </div>
              </li>
              <li className="mb-2">
              <div className={styles.infoContain}>
              <h5 className={`${styles.infoName} ${styles.iconMail}`}>E-mail</h5>
              <p className={styles.infoText}>info.infinitydigital@gmail.com</p>
              </div>
              </li>
              <li className="mb-2">
              
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
          <div className={styles.form + " 'w-full lg:w-[50%]' border-gray-300 shadow rounded-lg"}>
            <form className="my-9">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-7 mb-5">
              <Input type="text" label="Nombre" variant="bordered" className="ml-7"/>
              <Input type="text" label="Empresa" variant="bordered" className="mr-7" />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-7 mb-5">
              <Input type="email" label="Email" variant="bordered" className="ml-7" />
              <Input type="phone" label="Número" variant="bordered" className="mr-7"/>
            </div>
            <Textarea
              variant="bordered"
              label="¿En qué podemos ayudarte?"
              labelPlacement="inside"
              className="flex flex-wrap md:flex-nowrap mb-5 w-auto mx-7" />
            <Button className={styles.bttn+" h-12 mx-7 rounded-lg"}>
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
