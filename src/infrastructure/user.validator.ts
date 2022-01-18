import { NextFunction, Request, Response } from "express";

export const userValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(400).json({ message: "name parameter must be defined" });
  }

  if (!email) {
    return res.status(400).json({ message: "email parameter must be defined" });
  }
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailformat)) {
    return res.status(200).json({ message: "email is invalid" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ message: "password parameter must be defined" });
  }
  next();
};
