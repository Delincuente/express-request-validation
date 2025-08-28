import express from "express";
const router = express.Router();

import userController, { createUser } from "../controllers/user.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { createUserValidation } from "../middlewares/userValidation.middleware.js";

router.get('/', userController.userController);
router.post('/', [createUserValidation, validate], createUser);
router.get('/:id', userController.details);


export default router;