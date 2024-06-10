import { schemaCreateCategory, schemaDeleteCategory } from "./schema.js";

export const validateCreateCategory = (req, res, next) => {
	const { error, value } = schemaCreateCategory.validate(req.body);
	if (error) {
		const errorMessage = error.details[0].message;
		res.status(400).send({ error: errorMessage });
		return;
	}
	next();
};

export const validateDeleteCategory = (req, res, next) => {
	const { error, value } = schemaDeleteCategory.validate(req.params);
	if (error) {
		const errorMessage = error.details[0].message;
		res.status(400).send({ error: errorMessage });
		return;
	}
	next();
};
