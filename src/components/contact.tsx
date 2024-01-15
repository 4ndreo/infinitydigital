'use client';
import React from "react";
import ContactForm from "./form";
import {Input, Textarea} from "@nextui-org/react";
import styles from '../components/contact.module.css';

const Contact = () => {
  return (
    <section className="body-font mt-10 max-w-7xl m-auto" id="contacto">
      <div className="container px-5 py-24 mx-auto">
        <div className={styles.titleContainer+" flex flex-col text-center mb-16"}>
          <h3 className={styles.title+" sm:text-3xl mb-4"}>
            Contáctanos
          </h3>
          <p className={styles.text+" lg:w-2/3 mx-auto"}>
          Para ponerse en contacto con nosotros, complete el formulario disponible aquí o utilice cualquiera de los siguientes datos de contacto
          </p>
        </div>
        <div className={styles.contactContainer+" justify-center"}>
          <div className={styles.info}>
            <ul>
              <li className="mb-14">
                <h5 className={styles.infoName}>Ubicación</h5>
                <p className={styles.infoText}>Buenos Aires, Argentina.</p>
              </li>
              <li className="mb-14">
              <h5 className={styles.infoName}>E-mail</h5>
              <p className={styles.infoText}>info.infinitydigital@gmail.com</p>
              </li>
              <li className="mb-14">
              <h5 className={styles.infoName}>WhatsApp</h5>
              <p className={styles.infoText}>+54 9 11 9999-9999</p>
              </li>
              <li>
              <h5 className={styles.infoName}>Instagram</h5>
              <p className={styles.infoText}>@infinitydigital</p>
              </li>
            </ul>
          </div>
          <div className={styles.form+" border-gray-300 shadow rounded-lg"}>
            <form>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-7 mt-9 mb-5">
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
            <button className={styles.bttn+" h-12 mb-9 mx-7 rounded-lg"}>
              Enviar
            </button>
            </form>
            {/* <div className="flex w-full flex-wrap md:flex-nowrap pb-7 max-w-full">
              <a href="" className= {styles.bttn +" border border-gray-900  px-auto py-2.5 text-center"}>
                Enviar
              </a>
            </div> */}
            
          </div>
        </div>
        {/* <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            
            <ContactForm />
          </div>

          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
          </div>

        </div> */}
        
      </div>
    </section>
  );
};

export default Contact;
