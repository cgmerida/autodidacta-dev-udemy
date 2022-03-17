import Joi from 'joi';
import EmailValidatorAdapter from './email-validator';

// jest.mock('joi');

describe('Email validate', () => {
  const email = 'test@test.com';
  const spyAssert = jest.spyOn(Joi, 'assert').mockImplementation();
  it('should validate correct email', () => {
    const sut = new EmailValidatorAdapter();

    const isValid = sut.isValid(email);

    expect(spyAssert).toHaveBeenCalledWith(email, expect.any(Object));
    expect(isValid).toBeTruthy();
  });
  it('should reject incorrect email', () => {
    spyAssert.mockImplementationOnce(() => {
      throw new Error('Error');
    });
    const sut = new EmailValidatorAdapter();

    const isValid = sut.isValid(email);

    expect(spyAssert).toHaveBeenCalledWith(email, expect.any(Object));
    expect(isValid).toBeFalsy();
  });
});
