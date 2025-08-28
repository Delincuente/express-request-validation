import { body } from "express-validator";

export const createUserValidation = [
    body("name")
        .notEmpty().withMessage("Enter name")
        .isLength({min:3}).withMessage("Name must be at least 3 chars long"),
    body("email")
        .notEmpty().withMessage("Enter email")
        .isEmail().withMessage("Enter valid email"),
    body("password")
        .notEmpty().withMessage("Enter password")
        .isLength({min:6}).withMessage("Password must be at least 3 chars long")
]