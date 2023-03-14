import { body } from "express-validator";

const schema = {
  create: [
    body('name').exists({ checkFalsy: true }).withMessage('must be valid'),
    body('username')
      .exists({ checkFalsy: true }).withMessage('must be valid')
      .custom(value => !/\s/.test(value)).withMessage('must not have any spaces'),
    body('password').isLength({ min: 8 }).withMessage("must be at least 8 characters long"),
    body('email').isEmail().withMessage('must be a valid email'),
    body('role').isIn(['ROLE_ADMIN', 'ROLE_USER']).withMessage('must be "ROLE_ADMIN" or "ROLE_USER"'),
    body('active').isBoolean().withMessage('must be "true" or "false"')
  ]
}

export default schema;
