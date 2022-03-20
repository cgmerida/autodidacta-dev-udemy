import Mail from 'nodemailer/lib/mailer';
import nodemailer from 'nodemailer';
import { IAddEmailAccount, IMessage } from '../domain/useCase/add-email';

export default class MailNodemailerProvider implements IAddEmailAccount {
  private readonly transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOSTNAME,
      port: parseInt(process.env.SMTP_PORT, 10),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendMail(msg: IMessage): Promise<void> {
    return this.transporter.sendMail({
      to: {
        name: msg.to.name,
        address: msg.to.email,
      },
      from: {
        name: msg.from.name,
        address: msg.from.email,
      },
      subject: msg.subject,
      html: msg.body,
    });
  }
}
