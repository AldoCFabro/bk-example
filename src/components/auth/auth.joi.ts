import Joi from 'joi';
import { configApp } from './../../config/app.config';
import jwt from 'jsonwebtoken';

export const loginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(2).max(8),
});

export const token = Joi.object({
  token: Joi.string().label('The Token').required(),
});
