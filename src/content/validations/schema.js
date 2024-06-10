import Joi from "joi";

export const schemaCreateContent = Joi.object({
	title: Joi.string().required(),
	rosource: Joi.string().required(),
	categoryId: Joi.string().required(),
	topicId: Joi.string().required(),
});

export const schemaDeleteContent = Joi.object({
	_id: Joi.string().required(),
});

export const schemaSearchByName = Joi.object({
	title: Joi.string().required(),
});
