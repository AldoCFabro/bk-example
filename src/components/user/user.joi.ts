import Joi from 'joi';
import mongoose, { Types } from 'mongoose';

export const createUserSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(2).max(8),
  confirmPassword: Joi.string().required().min(2).max(8),
  role: Joi.string().valid('ADMIN', 'USER').optional().default('USER'),
});

export const updateUserSchema = Joi.object({
  userName: Joi.string(),
});

export const getAllUserSchema = Joi.object({
  limit: Joi.number().default(10).optional(),
  skip: Joi.number().default(0).optional(),
  sort: Joi.string().default('-1').valid('-1', '1').optional(),
});
