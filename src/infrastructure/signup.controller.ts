import { Request, Response } from "express";

export const signupController = (req: Request, res: Response) => {
  return res.status(200).json({ message: "signed up" });
};
