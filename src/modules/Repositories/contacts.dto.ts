import { body } from 'express-validator';

export const validateContact = [
  body('email')
    .optional({ nullable: true })
    .isEmail().withMessage('Invalid email format'),
  
  body('phoneNumber').optional({ nullable: true })
    .isString().notEmpty().withMessage('Phone number is required'),
];
