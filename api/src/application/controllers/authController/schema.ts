import { body } from 'express-validator';

const schema = {
  authentication: [
    body('username').exists({ checkFalsy: true }).withMessage('must be valid'),
    body('password').exists({ checkFalsy: true }).withMessage('must be valid')
  ]
};

export default schema;
