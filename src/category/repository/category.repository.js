import { Category } from "../entity/category.entity.js";

export const categoryRepository = {
	create: async (title) => {
		const category = (
			await Category.create({
				title,
				//image: { public_id: image.public_id, url: image.url },
			})
		).save();
		return {
			category,
		};
	},
	update: async (categoryId, title) => {
		const category = await Category.findByIdAndUpdate(
			categoryId,
			{
				title,
				//image: { public_id: image.public_id, url: image.url },
			},
			{ new: true },
		);
		return {
			category,
		};
	},
	delete: async (categoryId) => {
		const category = await Category.findByIdAndDelete(categoryId);
		return {
			category,
		};
	},
	getById: async (categoryId) => {
		const category = await Category.findById({ _id: categoryId });
		return {
			category,
		};
	},

	list: async (page = 1, limit = 10) => {
		const skip = (page - 1) * limit;
		const categories = await Category.find().skip(skip).limit(limit);
		const count = await Category.countDocuments();
		return {
			categories,
			count,
		};
	},
	getByName: async (title) => {
		const category = await Category.findOne({ title: title });
		return {
			category,
		};
	},
};
