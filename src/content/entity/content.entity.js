import mongoose from "mongoose";
import validator from "validator";

const ContentSchema = new mongoose.Schema({
	title: {
		type: String,
		unique: [true, "Porfavor ingresa un Titulo unico."],
		required: [true, "Porfavor ingresa el Titulo"],
		maxLength: [100, "El Titulo no puede tener mas de 100 caracteres"],
		trim: true,
	},
	rosource: {
		type: String,
		required: [true, "Porfavor ingresa el link del recurso"],
		maxLength: [
			500,
			"El link del recurso no puede tener mas de 500 caracteres",
		],
		trim: true,
		validate: {
			validator: (value) => {
				return validator.isURL(value);
			},
			message: "El link del recurso no es válido",
		},
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
	},

	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},

	topic: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Topic",
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

export const Content = mongoose.model("Content", ContentSchema);
