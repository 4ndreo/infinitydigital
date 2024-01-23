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
          <div className={styles.info}>
            <ul>
              <li className="mb-2">
                <svg className={styles.svg} width="25" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      
<path d="M9.5 12.5C11.2259 12.5 12.625 11.1009 12.625 9.375C12.625 7.64911 11.2259 6.25 9.5 6.25C7.77411 6.25 6.375 7.64911 6.375 9.375C6.375 11.1009 7.77411 12.5 9.5 12.5Z" fill="#08E1FE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.875 10.25C18.875 4.025 14.4219 0 9.5 0C4.57812 0 0.125 4.025 0.125 10.25C0.125 14.4 3.25391 19.3125 9.5 25C15.7461 19.3125 18.875 14.4 18.875 10.25ZM15.75 10.1719C15.75 5.89219 12.7813 3.125 9.5 3.125C6.21875 3.125 3.25 5.89219 3.25 10.1719C3.25 13.025 5.33594 16.4023 9.5 20.3125C13.6641 16.4023 15.75 13.025 15.75 10.1719Z" fill="#08E1FE"/>
                </svg>
                <div className={styles.infoContain}>
                <h5 className={styles.infoName}>Ubicación</h5>
                <p className={styles.infoText}>Buenos Aires, Argentina.</p>
                </div>
              </li>
              <li className="mb-2">
              <svg className={styles.svg} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 20.3125C0 22.0312 1.40625 23.4375 3.125 23.4375H21.875C23.5938 23.4375 25 22.0312 25 20.3125V4.6875C25 3.1251 23.4375 1.5625 21.875 1.5626L3.125 1.5625C1.40625 1.5625 0 2.96875 0 4.6875V20.3125ZM3.125 4.6875H21.875V6.2501L12.5 10.8001L3.125 6.2501V4.6875ZM3.125 9.3751V20.3125H21.875V9.3751L12.5 14.2L3.125 9.3751Z" fill="#08E1FE"/>
              </svg>
              <div className={styles.infoContain}>
              <h5 className={styles.infoName}>E-mail</h5>
              <p className={styles.infoText}>info.infinitydigital@gmail.com</p>
              </div>
              </li>
              <li className="mb-2">
              <svg className={styles.svg} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24.9999L1.75729 18.5802C0.672915 16.701 0.103125 14.5708 0.104166 12.3864C0.107291 5.55728 5.66457 0 12.4927 0C15.8062 0.00104166 18.9166 1.29166 21.2562 3.63333C23.5947 5.97499 24.8822 9.08748 24.8812 12.3979C24.8781 19.2281 19.3208 24.7854 12.4927 24.7854C10.4198 24.7843 8.37706 24.2645 6.56769 23.277L0 24.9999ZM6.87186 21.0343C8.61769 22.0708 10.2844 22.6916 12.4885 22.6927C18.1635 22.6927 22.7864 18.0739 22.7895 12.3958C22.7916 6.70623 18.1906 2.09375 12.4968 2.09166C6.81769 2.09166 2.19791 6.7104 2.19583 12.3875C2.19479 14.7052 2.87395 16.4406 4.01457 18.2562L2.97395 22.0562L6.87186 21.0343ZM18.7333 15.3427C18.6562 15.2135 18.45 15.1364 18.1395 14.9812C17.8302 14.826 16.3083 14.0771 16.0239 13.9739C15.7406 13.8708 15.5343 13.8187 15.327 14.1291C15.1208 14.4385 14.5271 15.1364 14.3468 15.3427C14.1666 15.5489 13.9854 15.575 13.676 15.4198C13.3666 15.2646 12.3687 14.9385 11.1864 13.8833C10.2666 13.0625 9.64477 12.0489 9.46456 11.7385C9.28435 11.4291 9.44581 11.2614 9.59998 11.1073C9.73956 10.9687 9.90935 10.7458 10.0646 10.5646C10.2219 10.3854 10.2729 10.2562 10.3771 10.0489C10.4802 9.84269 10.4291 9.66144 10.351 9.50623C10.2729 9.35206 9.65415 7.82811 9.39685 7.20832C9.14477 6.60519 8.88956 6.68644 8.69998 6.67707L8.10623 6.66665C7.89998 6.66665 7.56457 6.74373 7.28123 7.05415C6.9979 7.36457 6.1979 8.11248 6.1979 9.63644C6.1979 11.1604 7.30728 12.6323 7.46144 12.8385C7.61665 13.0448 9.64373 16.1718 12.7489 17.5125C13.4875 17.8312 14.0646 18.0218 14.5135 18.1645C15.2552 18.4 15.9302 18.3666 16.4635 18.2875C17.0583 18.1989 18.2948 17.5385 18.5531 16.8156C18.8114 16.0916 18.8114 15.4718 18.7333 15.3427Z" fill="#08E1FE"/>
</svg>
              <div className={styles.infoContain}>
              <h5 className={styles.infoName}>WhatsApp</h5>
              <p className={styles.infoText}>+54 011 5490-6966</p>
              </div>
              </li>
              <li>
              <svg className={styles.svg} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_460_3407)">
<path d="M12.5 2.25098C15.8398 2.25098 16.2354 2.26562 17.5488 2.32422C18.7695 2.37793 19.4287 2.58301 19.8682 2.75391C20.4492 2.97852 20.8691 3.25195 21.3037 3.68652C21.7432 4.12598 22.0117 4.54102 22.2363 5.12207C22.4072 5.56152 22.6123 6.22559 22.666 7.44141C22.7246 8.75977 22.7393 9.15527 22.7393 12.4902C22.7393 15.8301 22.7246 16.2256 22.666 17.5391C22.6123 18.7598 22.4072 19.4189 22.2363 19.8584C22.0117 20.4395 21.7383 20.8594 21.3037 21.2939C20.8643 21.7334 20.4492 22.002 19.8682 22.2266C19.4287 22.3975 18.7646 22.6025 17.5488 22.6563C16.2305 22.7148 15.835 22.7295 12.5 22.7295C9.16016 22.7295 8.76465 22.7148 7.45117 22.6563C6.23047 22.6025 5.57129 22.3975 5.13184 22.2266C4.55078 22.002 4.13086 21.7285 3.69629 21.2939C3.25684 20.8545 2.98828 20.4395 2.76367 19.8584C2.59277 19.4189 2.3877 18.7549 2.33398 17.5391C2.27539 16.2207 2.26074 15.8252 2.26074 12.4902C2.26074 9.15039 2.27539 8.75488 2.33398 7.44141C2.3877 6.2207 2.59277 5.56152 2.76367 5.12207C2.98828 4.54102 3.26172 4.12109 3.69629 3.68652C4.13574 3.24707 4.55078 2.97852 5.13184 2.75391C5.57129 2.58301 6.23535 2.37793 7.45117 2.32422C8.76465 2.26562 9.16016 2.25098 12.5 2.25098ZM12.5 0C9.10645 0 8.68164 0.0146484 7.34863 0.0732422C6.02051 0.131836 5.10742 0.34668 4.31641 0.654297C3.49121 0.976562 2.79297 1.40137 2.09961 2.09961C1.40137 2.79297 0.976562 3.49121 0.654297 4.31152C0.34668 5.10742 0.131836 6.01562 0.0732422 7.34375C0.0146484 8.68164 0 9.10645 0 12.5C0 15.8936 0.0146484 16.3184 0.0732422 17.6514C0.131836 18.9795 0.34668 19.8926 0.654297 20.6836C0.976562 21.5088 1.40137 22.207 2.09961 22.9004C2.79297 23.5938 3.49121 24.0234 4.31152 24.3408C5.10742 24.6484 6.01562 24.8633 7.34375 24.9219C8.67676 24.9805 9.10156 24.9951 12.4951 24.9951C15.8887 24.9951 16.3135 24.9805 17.6465 24.9219C18.9746 24.8633 19.8877 24.6484 20.6787 24.3408C21.499 24.0234 22.1973 23.5938 22.8906 22.9004C23.584 22.207 24.0137 21.5088 24.3311 20.6885C24.6387 19.8926 24.8535 18.9844 24.9121 17.6563C24.9707 16.3232 24.9854 15.8984 24.9854 12.5049C24.9854 9.11133 24.9707 8.68652 24.9121 7.35352C24.8535 6.02539 24.6387 5.11231 24.3311 4.32129C24.0234 3.49121 23.5986 2.79297 22.9004 2.09961C22.207 1.40625 21.5088 0.976563 20.6885 0.65918C19.8926 0.351562 18.9844 0.136719 17.6562 0.078125C16.3184 0.0146484 15.8936 0 12.5 0Z" fill="#08E1FE"/>
<path d="M12.499 6.0791C8.9541 6.0791 6.07812 8.95508 6.07812 12.5C6.07812 16.0449 8.9541 18.9209 12.499 18.9209C16.0439 18.9209 18.9199 16.0449 18.9199 12.5C18.9199 8.95508 16.0439 6.0791 12.499 6.0791ZM12.499 16.665C10.1992 16.665 8.33398 14.7998 8.33398 12.5C8.33398 10.2002 10.1992 8.33496 12.499 8.33496C14.7988 8.33496 16.6641 10.2002 16.6641 12.5C16.6641 14.7998 14.7988 16.665 12.499 16.665Z" fill="#08E1FE"/>
<path d="M20.6738 5.8252C20.6738 6.65528 20 7.32422 19.1748 7.32422C18.3447 7.32422 17.6758 6.65039 17.6758 5.8252C17.6758 4.99512 18.3496 4.32617 19.1748 4.32617C20 4.32617 20.6738 5 20.6738 5.8252Z" fill="#08E1FE"/>
</g>
<defs>
<clipPath id="clip0_460_3407">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
</svg>
              <div className={styles.infoContain}>
              <h5 className={styles.infoName}>Instagram</h5>
              <p className={styles.infoText}>@infinitydigital.tech</p>
              </div>
              </li>
            </ul>
          </div>
          <div className={styles.form+" border-gray-300 shadow rounded-lg"}>
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
