import nodemailer from "nodemailer";
import SMPTransport from "nodemailer-smtp-transport";

export const smtpEmail = 'franjandreo@gmail.com';
export const smtpPassword = 'lrol yzfs hqla jggu';

export const transporter = nodemailer.createTransport(
  SMPTransport({
    service: "gmail",
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  })
);
