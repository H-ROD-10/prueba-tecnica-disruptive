import app from "./src/app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import connectDatabase from "./src/common/dataBase/dataBase.js";

// Handled Uncaught exceptions
process.on("uncaughtException", (err) => {
	console.log(`ERROR: ${err.message}`);
	console.log("Shutting down server due to uncaught exception");
	process.exit(1);
});

// Setting Config Upload file
dotenv.config({
	path: ".env",
});

//Connect to DataBase
connectDatabase();

//Setting Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
	console.log(
		`Server started on http://${host}:${port} in ${process.env.NODE_ENV} mode.`,
	);
});

// Promise Rejection
process.on("unhandledRejection", (err) => {
	console.log(`ERROR: ${err.message}`);
	console.log(
		"Se detuvo el servidor debido al rechazo de una promesa no gestionada",
	);
	server.close(() => {
		process.exit(1);
	});
});
