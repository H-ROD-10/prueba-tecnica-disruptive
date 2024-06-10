import { categoryRepository } from "../repository/category.repository.js";
import cloudinary from "cloudinary";

export const categoryServices = {
	create: async (res, title) => {
		try {
			const { category } = await categoryRepository.create(title);

			if (!category) {
				return new Error("Error al crear la categoria");
			}

			res.status(201).json({
				success: true,
				message: "Creado correctamente",
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				success: false,
				message: "Error al crear la categoria",
				data: null,
			});
		}
	},

	update: async (res, id, title) => {
		try {
			const { category } = await categoryRepository.update(id, title);

			if (!category) {
				return new Error("Error al actualizar la categoria");
			}

			res.status(201).json({
				success: true,
				message: "Categoria actualizada correctamente",
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				success: false,
				message: "Error al actualizar la categoria",
				data: null,
			});
		}
	},

	delete: async (res, id) => {
		try {
			const { category } = await categoryRepository.delete(id);

			if (!category) {
				return new Error("Error al borrar la categoria");
			}

			res.status(201).json({
				success: true,
				message: "Eliminado correctamente",
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				success: false,
				message: "Error al borrar la categoria",
			});
		}
	},
	list: async (res, page, limit) => {
		try {
			const { categories } = await categoryRepository.list(page, limit);

			if (!categories) {
				throw new Error("Error al obtener las categorias");
			}

			res.status(200).json({
				success: true,
				message: "Categorias obtenidas correctamente",
				data: categories,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				success: false,
				message: "Error al obtener las categorias",
				data: null,
			});
		}
	},
	getById: async (res, id) => {
		try {
			const { category } = await categoryRepository.getById(id);
			if (!category) {
				throw new Error("Error al obtener la categoria");
			}
			res.status(200).json({
				success: true,
				message: "Categoria obtenida correctamente",
				data: category,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				success: false,
				message: "Error al obtener la categoria",
				data: null,
			});
		}
	},
	getByName: async (res, title) => {
		try {
			const { category } = await categoryRepository.getByName(title);

			if (!category) {
				throw new Error("Error al obtener la categoria");
			}
			res.status(200).json({
				success: true,
				message: "Categoria obtenida correctamente",
				data: category,
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: "Error al buscar la categoria por nombre",
				data: null,
			});
		}
	},
};
