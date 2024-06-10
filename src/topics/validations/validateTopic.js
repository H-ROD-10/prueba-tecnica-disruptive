import { schemaCreateTopic, schemaDeleteTopic } from "./schema.js";

export const validateCreateTopic = (req, res, next) => {
	const { error, value } = schemaCreateTopic.validate(req.body);
	if (error) {
		const errorMessage = error.details[0].message;
		res.status(400).send({ error: errorMessage });
		return;
	}
	next();
};

export const validateDeleteTopic = (req, res, next) => {
	const { error, value } = schemaDeleteTopic.validate(req.params);
	if (error) {
		const errorMessage = error.details[0].message;
		res.status(400).send({ error: errorMessage });
		return;
	}
	next();
};
