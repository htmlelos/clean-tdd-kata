import { Router } from "express";
import { userExistsValidator, userSignupValidator } from "./user.validator";
import { userController } from "./user.controller";
import { validateRequestSchema } from "../middlewares/validate-request-schema";

const router = Router();

router.post(
  "/signup",
  userSignupValidator,
  userExistsValidator,
  validateRequestSchema,
  userController
);

export default router;
3;
