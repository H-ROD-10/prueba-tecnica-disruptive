import Joi from "joi";

export const signupSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
	username: Joi.string().alphanum().min(3).max(20).required(),
	role: Joi.string().valid("reader", "creator").required(),
});

export const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
});
