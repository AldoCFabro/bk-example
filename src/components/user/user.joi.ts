import Joi from 'joi';

export const createUserSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(2).max(8),
  confirmPassword: Joi.string().required().min(2).max(8),
  role: Joi.array()
    .items(Joi.string().required().valid('ADMIN', 'USER'))
    .optional()
    .default('USER'),
});

export const updateUserSchema = Joi.object({
  userName: Joi.string(),
  email: Joi.string().email(),
  enabled: Joi.boolean().optional(),
  role: Joi.array().items(Joi.string().required().allow('ADMIN', 'USER')),
});

export const getAllUserSchema = Joi.object({
  limit: Joi.number().default(10).optional(),
  skip: Joi.number().default(0).optional(),
  sort: Joi.string().default('-1').valid('-1', '1').optional(),
});
