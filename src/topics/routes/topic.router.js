import { Router } from "express";
import {
	authorizeRoles,
	isAuthenticated,
} from "../../midleware/authProtectRoute.js";
import { topicController } from "../controller/topic.controller.js";
import {
	validateCreateTopic,
	validateDeleteTopic,
} from "../validations/validateTopic.js";

const router = Router();

router
	.route("/topic/create")
	.post(
		isAuthenticated,
		authorizeRoles("admin"),
		validateCreateTopic,
		topicController.create,
	);

router
	.route("/topic/list")
	.get(
		isAuthenticated,
		authorizeRoles("admin", "creator", "reader"),
		topicController.list,
	);

router
	.route("/topic/:_id")
	.get(
		isAuthenticated,
		authorizeRoles("admin", "creator", "reader"),
		topicController.getById,
	)
	.put(
		isAuthenticated,
		authorizeRoles("admin"),
		validateCreateTopic,
		topicController.update,
	)
	.delete(
		isAuthenticated,
		authorizeRoles("admin"),
		validateDeleteTopic,
		topicController.delete,
	);

router
	.route("/topic")
	.get(
		isAuthenticated,
		authorizeRoles("admin", "creator", "reader"),
		topicController.getByName,
	);

export default router;
