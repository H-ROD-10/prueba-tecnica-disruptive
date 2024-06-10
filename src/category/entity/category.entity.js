import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
	title: {
		type: String,
		unique: [true, "Porfavor ingresa un Titulo unico."],
		required: [true, "Porfavor ingresa el Titulo"],
		maxLength: [100, "El Titulo no puede tener mas de 100 caracteres"],
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	createdUp: {
		type: Date,
		default: Date.now(),
	},
});

export const Category = mongoose.model("Category", categorySchema);
