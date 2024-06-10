import { Topic } from "../entity/topic.entity.js";

export const topicRepository = {
	create: async (title, image) => {
		const topic = (
			await Topic.create({
				title,
				image: { public_id: image.public_id, url: image.url },
			})
		).save();
		return {
			topic,
		};
	},

	update: async (topicId, title, image) => {
		const topic = await Topic.findByIdAndUpdate(
			topicId,
			{
				title,
				image: { public_id: image.public_id, url: image.url },
			},
			{ new: true },
		);
		return {
			topic,
		};
	},
	updateCountContent: async (topicId) => {
		const topic = await Topic.findByIdAndUpdate(
			topicId,
			{
				$inc: { countContent: 1 },
			},
			{ new: true },
		);
		return {
			topic,
		};
	},
	list: async (page = 1, limit = 10) => {
		const skip = (page - 1) * limit;
		const topics = await Topic.find().skip(skip).limit(limit);
		const count = await Topic.countDocuments();
		return {
			topics,
			count,
		};
	},

	getById: async (id) => {
		const topic = await Topic.findById(id);
		return {
			topic,
		};
	},

	getByName: async (name) => {
		const topic = await Topic.findOne({ title: name });
		return {
			topic,
		};
	},

	delete: async (_id) => {
		const topic = await Topic.findByIdAndDelete({ _id });
		return {
			topic,
		};
	},
};
