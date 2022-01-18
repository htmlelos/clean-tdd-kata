import { Router, Request, Response } from "express";
import { userValidator } from "./user.validator";
import { signupController } from "./signup.controller";

const router = Router();

router.post("/signup", [userValidator], signupController);

export default router;
3;
