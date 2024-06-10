import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: [true, "Porfavor ingresa un username unico."],
		required: [true, "Porfavor ingresa el username"],
		maxLength: [30, "El username no puede tener mas de 30 caracteres"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Porfavor ingresa el email"],
		unique: [true, "Porfavor ingresa un email unico."],
		validate: [validator.isEmail, "Porfavor ingresa un email valido"],
	},
	password: {
		type: String,
		required: [
			true,
			"Porfavor ingresa una contraseña, que debe contener al menos 8 caracteres",
		],
		minLength: [8, "La contraseña debe contener al menos 8 caracteres"],
		select: false,
	},

	role: {
		type: String,
		default: "reader",
		enum: ["reader", "admin", "creator"],
	},
	permissions: {
		type: Object,
		default: {
			create: false,
			read: true,
			update: false,
			delete: false,
		},
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

export const User = mongoose.model("User", userSchema);
