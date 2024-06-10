import {
	schemaCreateContent,
	schemaDeleteContent,
	schemaSearchByName,
} from "./schema.js";

export const validateCreateContent = (req, res, next) => {
	const { error, value } = schemaCreateContent.validate(req.body);
	if (error) {
		const errorMessage = error.details[0].message;
		res.status(400).send({ error: errorMessage });
		return;
	}
	next();
};

export const validateDeleteContent = (req, res, next) => {
	const { error, value } = schemaDeleteContent.validate(req.params);
	if (error) {
		const errorMessage = error.details[0].message;
		res.status(400).send({ error: errorMessage });
		return;
	}
	next();
};

export const validateSearchByName = (req, res, next) => {
	const { error, value } = schemaSearchByName.validate(req.query);
	if (error) {
		res.status(400).send({ error: error.details[0].message });
		return;
	}
	next();
};
