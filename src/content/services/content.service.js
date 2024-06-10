import { contentRepository } from "../repository/content.repository.js";
import { topicServices } from "../../topics/services/topic.services.js";

export const contentServices = {
	create: async (res, title, rosource, categoryId, userId, topicId) => {
		try {
			const { content } = await contentRepository.create(
				title,
				rosource,
				categoryId,
				userId,
				topicId,
			);

			if (!content) {
				throw new Error("Error al crear el contenido");
			}

			res.status(201).json({
				success: true,
				message: "Creado correctamente",
			});

			await topicServices.updateCountContent(topicId);
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.message,
			});
		}
	},

	update: async (
		res,
		contentId,
		title,
		rosource,
		categoryId,
		userId,
		topicId,
	) => {
		try {
			const { content } = await contentRepository.getById(contentId);

			if (content?.author?._id.toString() !== userId.toString()) {
				throw new Error("No estas autorizado para actualizar este contenido");
			}

			const { content: updated } = await contentRepository.update(
				contentId,
				title,
				rosource,
				categoryId,
				userId,
				topicId,
			);

			if (!updated) {
				throw new Error("Error al actualizar el contenido");
			}

			res.status(201).json({
				success: true,
				message: "Actualizado correctamente",
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.message,
			});
		}
	},

	delete: async (res, contentId) => {
		try {
			const { content } = await contentRepository.delete(contentId);

			if (!content) {
				throw new Error("Error al eliminar el contenido");
			}

			res.status(201).json({
				success: true,
				message: "Eliminado correctamente",
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.message,
			});
		}
	},

	list: async (res, categoryId, topicId, page, limit) => {
		try {
			const query = {
				category: null,
				topic: null,
			};

			if (categoryId !== null && categoryId !== "") {
				query.category = categoryId;
			}
			if (topicId !== null && topicId !== "") {
				query.topic = topicId;
			}
			const { contents } = await contentRepository.list(query, page, limit);

			if (!contents) {
				throw new Error("Error al obtener los contenidos");
			}

			res.status(200).json({
				success: true,
				message: "Contenidos obtenidos correctamente",
				data: contents,
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.message,
				data: null,
			});
		}
	},

	getById: async (res, contentId) => {
		try {
			const { content } = await contentRepository.getById(contentId);

			if (!content) {
				throw new Error("Error al obtener el contenido");
			}

			res.status(200).json({
				success: true,
				message: "Contenido obtenido correctamente",
				data: content,
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.message,
				data: null,
			});
		}
	},
	getByName: async (res, title) => {
		try {
			const { content } = await contentRepository.getByName(title);

			if (!content) {
				throw new Error("Error al obtener el contenido");
			}

			res.status(200).json({
				success: true,
				message: "Contenido obtenido correctamente",
				data: content,
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.message,
				data: null,
			});
		}
	},
};
