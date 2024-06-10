import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import errorMidleware from "./midleware/error.js";

// Import all routes
import userRoute from "./user/routes/user.router.js";
import categoryRoute from "./category/routes/category.router.js";
import topicRoute from "./topics/routes/topic.router.js";
import contentRoute from "./content/routes/content.routes.js";
import swaggerRoute from "./swagger/routes/swagger.routes.js";

const app = express();

dotenv.config({
	path: "config/config.env",
});

const options = {
	origin: [true, "https://ecomerce-electronic.vercel.app/"],
	methods: ["GET", "HEAD", "PUT", "POST", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
	optionsSuccessStatus: 200,
};

app.use(helmet());
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

app.use("/api/v1", userRoute);
app.use("/api/v1", topicRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", contentRoute);
app.use("/api/v1", swaggerRoute);

// Midleware error handler
app.use(errorMidleware);

export default app;
