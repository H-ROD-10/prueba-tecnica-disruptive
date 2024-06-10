import { topicRepository } from "../repository/topic.repository.js";

export const topicServices = {
	create: async (res, title, image) => {
		try {
			const { topic } = await topicRepository.create(title, image);

			if (!topic) {
				throw new Error("Error al crear el topico");
			}

			res.status(201).json({
				success: true,
				message: "Creado correctamente",
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.error.message,
			});
		}
	},
	update: async (res, topicId, title, image) => {
		try {
			const { topic } = await topicRepository.update(topicId, title, image);

			if (!topic) {
				throw new Error("Error al actualizar el topico");
			}

			res.status(201).json({
				success: true,
				message: "Actualizado correctamente",
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.error.message,
			});
		}
	},
	delete: async (res, _id) => {
		try {
			const { topic } = await topicRepository.delete(_id);

			if (!topic) {
				throw new Error("Error al eliminar el topico");
			}

			res.status(201).json({
				success: true,
				message: "Eliminado correctamente",
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.error.message,
			});
		}
	},
	updateCountContent: async (topicId) => {
		try {
			const { topic } = await topicRepository.updateCountContent(topicId);

			if (!topic) {
				throw new Error("Error al actualizar el topico");
			}

			return topic;
		} catch (error) {
			throw new Error(error.error.message);
		}
	},
	list: async (res, page, limit) => {
		try {
			const { topics, count } = await topicRepository.list(page, limit);

			if (!topics) {
				throw new Error("Error al obtener los topicos");
			}

			res.status(200).json({
				success: true,
				message: "Operacion exitosa",
				data: { topics, count },
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.error.message,
				data: null,
			});
		}
	},
	getById: async (res, topicId) => {
		try {
			const { topic } = await topicRepository.getById(topicId);

			if (!topic) {
				throw new Error("Error al obtener el topico");
			}

			res.status(200).json({
				success: true,
				message: "Operacion exitosa",
				data: topic,
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.error.message,
				data: null,
			});
		}
	},
	getByName: async (res, title) => {
		try {
			const { topic } = await topicRepository.getByName(title);

			if (!topic) {
				throw new Error("Error al obtener el topico");
			}

			res.status(200).json({
				success: true,
				message: "Operacion exitosa",
				data: topic,
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: "Error al buscar el topico por nombre",
				data: null,
			});
		}
	},
};
