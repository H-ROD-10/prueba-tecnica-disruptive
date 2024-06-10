import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
	title: {
		type: String,
		unique: [true, "Porfavor ingresa un Titulo unico."],
		required: [true, "Porfavor ingresa el Titulo"],
		maxLength: [100, "El Titulo no puede tener mas de 100 caracteres"],
		trim: true,
	},
	image: {
		public_id: {
			type: String,
			required: false,
		},
		url: {
			type: String,
			required: false,
		},
	},
	countContent: {
		type: Number,
		default: 0,
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

export const Topic = mongoose.model("Topic", topicSchema);
