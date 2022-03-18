import Joi from 'joi';
import IEmailValidator from '../interfaces/email-validator';

const emailSchema = Joi.string().email().lowercase().required();

export default class EmailValidatorAdapter implements IEmailValidator {
  isValid(email: string): boolean {
    try {
      Joi.assert(email, emailSchema);
      return true;
    } catch (err) {
      return false;
    }
  }
}
