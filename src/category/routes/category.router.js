import { Router } from "express";
import {
	authorizeRoles,
	isAuthenticated,
} from "../../midleware/authProtectRoute.js";
import { catagoryController } from "../controller/category.controller.js";
import {
	validateCreateCategory,
	validateDeleteCategory,
} from "../validations/validateCategory.js";

const router = Router();

router
	.route("/category/create")
	.post(
		isAuthenticated,
		authorizeRoles("admin"),
		validateCreateCategory,
		catagoryController.create,
	);

router
	.route("/category/list")
	.get(
		isAuthenticated,
		authorizeRoles("admin", "creator"),
		catagoryController.list,
	);

router
	.route("/category/:_id")
	.get(
		isAuthenticated,
		authorizeRoles("admin", "creator"),
		catagoryController.getById,
	)
	.put(
		isAuthenticated,
		authorizeRoles("admin"),
		validateCreateCategory,
		catagoryController.update,
	)
	.delete(
		isAuthenticated,
		authorizeRoles("admin"),
		validateDeleteCategory,
		catagoryController.delete,
	);

router
	.route("/category")
	.get(
		isAuthenticated,
		authorizeRoles("admin", "creator"),
		catagoryController.getByName,
	);

export default router;
