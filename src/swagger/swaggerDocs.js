import swaggerDocs from "swagger-jsdoc";

const options = {
	swaggerDefinition: {
		openapi: "3.0.0", // OAS version
		info: {
			title: "Disruptive API",
			version: "1.0.0", // Your API version
			description: "API parte de prueba tecnica",
		},
		servers: [
			{ url: "http://localhost:8000/api/v1" }, // Adjust base URL if needed
		],
	},
	apis: [
		"src/user/routes/user.router.js",
		"src/content/routes/content.routes.js",
		"src/category/routes/category.router.js",
		"src/topics/routes/topic.router.js",
	], // Path to your route handler files
};

export const espec = swaggerDocs(options);
