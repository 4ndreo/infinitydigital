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

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              ¡Tienes un mensaje Nuevo!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
             Hola, 
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Tienes un email de <strong>{name}</strong>. El email de contacto es:{" "}
              {email}. Te enviaron el siguiente mensaje: <br />
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};