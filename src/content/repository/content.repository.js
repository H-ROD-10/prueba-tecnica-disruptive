import { Content } from "../entity/content.entity.js";

export const contentRepository = {
	create: async (title, rosource, categoryId, userId, topicId) => {
		const content = (
			await Content.create({
				title,
				rosource: rosource,
				category: categoryId,
				author: userId,
				topic: topicId,
			})
		).save();
		return {
			content,
		};
	},

	update: async (contentId, title, rosource, categoryId, userId, topicId) => {
		const content = (
			await Content.findByIdAndUpdate(contentId, {
				title,
				rosource: rosource,
				category: categoryId,
				author: userId,
				topic: topicId,
			})
		).save();
		return {
			content,
		};
	},

	delete: async (contentId) => {
		const content = await Content.findByIdAndDelete(contentId);
		return {
			content,
		};
	},
	list: async (query = undefined, page = 1, limit = 10) => {
		const skip = (page - 1) * limit;

		const filter =
			query.topic && query.category
				? { topic: query.topic, category: query.category }
				: query.topic
					? { topic: query.topic }
					: query.category
						? { category: query.category }
						: {};

		const contents = await Content.find(filter)
			.skip(skip)
			.limit(limit)
			.populate("category")
			.populate("author")
			.populate("topic");
		const count = await Content.countDocuments();

		return {
			contents,
			count,
		};
	},

	getById: async (id) => {
		const content = await Content.findById({ _id: id })
			.populate("category")
			.populate("topic")
			.populate("author");
		return {
			content,
		};
	},

	getByName: async (name) => {
		const content = await Content.findOne({ title: name })
			.populate("category")
			.populate("topic")
			.populate("author");
		return {
			content,
		};
	},
};
