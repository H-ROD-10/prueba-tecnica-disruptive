import Joi from "joi";

export const schemaCreateCategory = Joi.object({
	title: Joi.string().required(),
});

export const schemaDeleteCategory = Joi.object({
	_id: Joi.string().required(),
});
