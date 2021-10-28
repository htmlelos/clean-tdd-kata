import { Router, Request, Response } from "express";
import {userValidator} from './user.validator'
import { userController } from "./user.controller";

const router = Router();

console.log('HERE!');


router.post(
  "/signup",
  // [
  //   userValidator
  // ],
  userController
);

export default router;
3