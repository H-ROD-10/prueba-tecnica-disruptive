import { loginSchema, signupSchema } from "./schema.js";

export const validateSignup = (req, res, next) => {
	const { error, value } = signupSchema.validate(req.body);

	if (error) {
		const errorMessage = error.details[0].message;
		res.status(400).send({ error: errorMessage });
		return;
	}

	next();
};

export const validateLogin = (req, res, next) => {
	const { error, value } = loginSchema.validate(req.body);
	console.log(error);
	if (error) {
		const errorMessage = error.details[0].message;
		res.status(400).send({ error: errorMessage });
		return;
	}
	next();
};
