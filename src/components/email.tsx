import React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";
import { Image } from "@nextui-org/react";

interface EmailProps {
  title: string;
  name: string;
  email: string;
  message: string;
  type: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
  title,
  name,
  email,
  message,
  type
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Image src="/img/logos/infinity-digital-logo-cropped.svg" alt="" width={200} ></Image>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              {title}
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              {type === 'cliente' ?
              <p>Los datos de la consulta son los siguientes</p>
              : null
              }
              <p className="text-[1rem]" dangerouslySetInnerHTML={{ __html: message }}></p>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};