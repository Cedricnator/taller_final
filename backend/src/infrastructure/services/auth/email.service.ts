import nodemailer, { Transporter } from 'nodemailer';
import { SendMailOptions } from '../../types/email';

interface Options {
   emailService:        string,
   mailerEmail:         string,
   senderEmailPassword: string
}

export class EmailService {
   private transporter: Transporter;

   // eliminar dependencia oculta
   constructor(
      options: Options,
   ) {
      const { emailService, mailerEmail, senderEmailPassword } = options;
      this.transporter = nodemailer.createTransport({
         service: emailService,
         auth: {
            user: mailerEmail,
            pass: senderEmailPassword,
         }
      });
   }

   async sendEmail(options: SendMailOptions): Promise<boolean> {
      const { to, subject, htmlBody, attachements = [] } = options;
      try {
         await this.transporter.sendMail({
            to: to,
            subject: subject,
            html: htmlBody,
            attachments: attachements,
         });
         return true;
      } catch (error) {
         return false;
      }
   }
}
