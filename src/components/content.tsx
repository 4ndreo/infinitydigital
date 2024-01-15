'use client';
import React from "react";
import desarrolloImage from "../utils/img/desarrollo-web.png";
import apiImage from "../utils/img/api-medida.png";
import marketingDigital from "../utils/img/campana-digital.png";
import Image from "next/image";
import {Card, CardHeader, CardFooter, CardBody} from "@nextui-org/react";
import styles from '../components/content.module.css';


const Content = () => {
  return (
    <section className="body-font max-w-7xl m-auto" id="servicios">
      <div className="h-[70px]"></div>
      <div className=" w-full py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h3 className={styles.title+" sm:text-3xl tracking-tight"}>
            Servicios
          </h3>
        </div>
        <div className="block lg:flex flex-wrap justify-between m-auto">

          <Card className={styles.cardBorder + " overflow-visible block"}>

            <CardHeader className="flex-col items-center">
            <Image
                className="object-cover rounded-xl"
                src={desarrolloImage} alt="Desarrollo web" width={132} height={132}
                />              
            </CardHeader>
            <CardBody></CardBody>
            <CardFooter className="overflow-visible py-2 justify-center text-center">
              <h4 className={styles.cardTitle}>Desarrollo Web</h4>
            </CardFooter>
          </Card>

          <Card className={styles.cardBorder+ " overflow-visible block"}>
            <CardHeader className="flex-col items-center">
            <Image
                className="object-cover rounded-xl"
                 src={apiImage} alt="api a medida" width={132} height={132}
              />              
            </CardHeader>
            <CardBody></CardBody>
            <CardFooter className="overflow-visible py-2 justify-center text-center">
              <h4 className={styles.cardTitle}>Desarrollo de APIs</h4>
            </CardFooter>
          </Card>

          <Card className={styles.cardBorder+ " overflow-visible block"}>
            <CardHeader className="flex-col items-center">
            <Image
                className="object-cover rounded-xl"
                 src={marketingDigital} alt="api a medida" width={132} height={132}
              />              
            </CardHeader>
            <CardBody></CardBody>
            <CardFooter className="overflow-visible py-2 justify-center text-center">
              <h4 className={styles.cardTitle}>Marketing Digital</h4>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};


export default Content;
