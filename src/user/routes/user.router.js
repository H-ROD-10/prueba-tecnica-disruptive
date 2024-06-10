/**
 * @swagger
 * name: Users endpoints
 * /signup:
 *   post:
 *     summary: new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: username
 *         schema:
 *           type: string
 *         description: Allow search users by keyword in username
 *         example: John
 *       - in: body
 *         name: email
 *         schema:
 *           type: string
 *         description: Allow search users by keyword in email
 *         example: Joh@
 *       - in: body
 *         name: password
 *         schema:
 *           type: string
 *         description: Allow search users by keyword in password
 *         example: 12we3jtyqw
 *       - in: body
 *         name: role
 *         schema:
 *           type: string
 *         description: Allow search users by keyword in role
 *         example: reader
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                   type: string
 *                   example: User created successfully
 *                success:
 *                   type: boolean
 *                   example: true
 *
 * /login:
 *   post:
 *     summary: login user and get token
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: email
 *         schema:
 *           type: string
 *         description: Allow search users by keyword in email
 *         example: Joh@
 *       - in: body
 *         name: password
 *         schema:
 *           type: string
 *         description: Allow search users by keyword in password
 *         example: 12we3jtyqw
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
 *                success:
 *                   type: boolean
 *                   example: true
 *                user:
 *                   type: object
 *                   example: {"_id": "6664f7f3cc3f3169f1505777", "username": "John", "email": "john-doe@", "role": "admin", "permissions": {craete: true, read: true, update: true, delete: true}, "createdAt": "2021-05-01T00:00:00.000Z", "updatedUp": "2021-05-01T00:00:00.000Z"}
 */

import { Router } from "express";
import { userController } from "../controller/user.controller.js";
import { validateLogin, validateSignup } from "../validations/validateUser.js";
import {
	authorizeRoles,
	isAuthenticated,
} from "../../midleware/authProtectRoute.js";

const router = Router();

router.route("/user/signup").post(validateSignup, userController.signup);

router.route("/user/login").post(validateLogin, userController.login);

router
	.route("/user/list")
	.get(isAuthenticated, authorizeRoles("admin"), userController.list);

router.route("/user/profile").get(isAuthenticated, userController.getMyProfile);

router
	.route("/user/update-role")
	.put(isAuthenticated, authorizeRoles("admin"), userController.updateRoleUser);

router
	.route("/user/delete/:_id")
	.delete(isAuthenticated, authorizeRoles("admin"), userController.delete);

export default router;
