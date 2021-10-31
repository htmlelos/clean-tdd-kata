import { body, Meta } from "express-validator";
import { UserRepository } from "./user.repository";

export const userSignupValidator = [
  body("username").notEmpty().withMessage("name parameter must be defined"),
  body("email")
    .notEmpty()
    .withMessage("email parameter must be defined")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("email isn't a valid e-mail address"),
  // .bail()
  body("password")
    .notEmpty()
    .withMessage("password parameter must be defined")
    .not()
    .custom(
      (value: string, { req }: Meta) => req.body.passwordConfirmation !== value
    )
    .withMessage("password and passwordConfirmation does not match"),
  body("passwordConfirmation")
    .notEmpty()
    .withMessage("password confirmation parameter must be defined"),
];

export const userExistsValidator = [
  body("email").custom(async (value: string, { req }: Meta) => {
    const userRepository = new UserRepository();
    const user = await userRepository.userExists(req.body.email);
    if (user) {
      throw new Error("already exist a user with the email provided");
    }
  }),
];
