import { Request, Response } from "express";

export const userValidator = (
  req: Request,
  res: Response
) => {
  const {name, email} = req.body
  if (!name) {
    return res.status(400).json({message: 'name parameter must be defined'})
  }

  if (!email) {
    return res.status(400).json({message: 'email parameter must be defined'})
  }
};
