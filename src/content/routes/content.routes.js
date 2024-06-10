import { Router } from "express";
import { contentController } from "../controller/content.controller.js";
import {
	authorizeRoles,
	isAuthenticated,
} from "../../midleware/authProtectRoute.js";
import {
	validateCreateContent,
	validateDeleteContent,
	validateSearchByName,
} from "../validations/validateContent.js";

const router = Router();

router
	.route("/content/create")
	.post(
		isAuthenticated,
		authorizeRoles("admin", "creator"),
		validateCreateContent,
		contentController.create,
	);

router
	.route("/content/list")
	.get(
		isAuthenticated,
		authorizeRoles("admin", "creator", "reader"),
		contentController.list,
	);

router
	.route("/content/:_id")
	.get(
		isAuthenticated,
		authorizeRoles("admin", "creator", "reader"),
		contentController.getById,
	)
	.put(
		isAuthenticated,
		authorizeRoles("admin", "creator"),
		validateCreateContent,
		contentController.update,
	)
	.delete(
		isAuthenticated,
		authorizeRoles("admin"),
		validateDeleteContent,
		contentController.delete,
	);

router
	.route("/content")
	.get(
		isAuthenticated,
		authorizeRoles("admin", "creator", "reader"),
		validateSearchByName,
		contentController.getByName,
	);

export default router;
