import { contentServices } from "../services/content.service.js";

export const contentController = {
	create: async (req, res) => {
		const { title, rosource, categoryId, topicId } = req.body;
		const userId = req.user.id;
		return await contentServices.create(
			res,
			title,
			rosource,
			categoryId,
			userId,
			topicId,
		);
	},
	update: async (req, res) => {
		const { _id: contentId } = req.params;
		const { title, rosource, categoryId, topicId } = req.body;
		const userId = req.user.id;
		return await contentServices.update(
			res,
			contentId,
			title,
			rosource,
			categoryId,
			userId,
			topicId,
		);
	},
	delete: async (req, res) => {
		const { contentId } = req.params;
		return await contentServices.delete(res, contentId);
	},

	list: async (req, res) => {
		const { categoryId, topicId, page, limit } = req.query;
		return await contentServices.list(res, categoryId, topicId, page, limit);
	},
	getById: async (req, res) => {
		const { _id: contentId } = req.params;
		return await contentServices.getById(res, contentId);
	},
	getByName: async (req, res) => {
		const { title } = req.query;
		return await contentServices.getByName(res, title);
	},
};
