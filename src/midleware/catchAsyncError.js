export default (func) => (req, res, next) => {
	try {
		return Promise.resolve(func(req, res, next));
	} catch (error) {
		next(error);
	}
};
