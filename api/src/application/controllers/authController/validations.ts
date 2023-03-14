import { body } from 'express-validator';

const validations = {
  authentication: [
    body('username').exists({ checkFalsy: true }).withMessage('must be valid'),
    body('password').exists({ checkFalsy: true }).withMessage('must be valid')
  ]
};

export default validations;
