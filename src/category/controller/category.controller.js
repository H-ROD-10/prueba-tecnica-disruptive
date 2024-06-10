import { categoryServices } from "../services/category.services.js";
import cloudinary from "cloudinary";

export const catagoryController = {
	create: async (req, res) => {
		const { title } = req.body;
		//const { image } = req.files;

		return await categoryServices.create(res, title);
	},

	update: async (req, res) => {
		const { _id } = req.params;
		const { title } = req.body;
		//const { image } = req.files;
		return await categoryServices.update(res, _id, title);
	},

	delete: async (req, res) => {
		const { _id } = req.params;
		return await categoryServices.delete(res, _id);
	},

	list: async (req, res) => {
		const { page, limit } = req.query;
		return await categoryServices.list(res, page, limit);
	},

	getById: async (req, res) => {
		const { _id } = req.params;
		return await categoryServices.getById(res, _id);
	},

	getByName: async (req, res) => {
		const { title } = req.query;
		return await categoryServices.getByName(res, title);
	},
};
