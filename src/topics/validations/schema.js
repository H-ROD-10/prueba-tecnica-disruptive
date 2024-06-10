import Joi from "joi";

export const schemaCreateTopic = Joi.object({
	title: Joi.string().required(),
	image: Joi.object({
		public_id: Joi.string().required(),
		url: Joi.string().required(),
	}).required(),
});

export const schemaDeleteTopic = Joi.object({
	_id: Joi.string().required(),
});
