import { topicServices } from "../services/topic.services.js";

export const topicController = {
	create: async (req, res) => {
		const { title, image } = req.body;
		return await topicServices.create(res, title, image);
	},
	update: async (req, res) => {
		const { _id } = req.params;
		const { title, image } = req.body;
		return await topicServices.update(res, _id, title, image);
	},
	list: async (req, res) => {
		const { page, limit } = req.query;
		return await topicServices.list(res, page, limit);
	},
	getById: async (req, res) => {
		const { _id } = req.params;
		return await topicServices.getById(res, _id);
	},
	delete: async (req, res) => {
		const { _id } = req.params;
		return await topicServices.delete(res, _id);
	},
	getByName: async (req, res) => {
		const { title } = req.query;
		return await topicServices.getByName(res, title);
	},
};
