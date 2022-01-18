import { NextFunction, Request, Response } from "express";

export const userValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password, passwordConfirmation } = req.body;
  if (!name) {
    return res.status(400).json({ message: "name parameter must be defined" });
  }

  if (!email) {
    return res.status(400).json({ message: "email parameter must be defined" });
  }
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailformat)) {
    return res
      .status(400)
      .json({ message: "email isn't a valid e-mail address" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ message: "password parameter must be defined" });
  }

  if (!passwordConfirmation) {
    return res
      .status(400)
      .json({ message: "password confirmation parameter must be defined" });
  }

  if (password !== passwordConfirmation) {
    return res
      .status(400)
      .json({ message: "password and password confirmation must match" });
  }
  next();
};
