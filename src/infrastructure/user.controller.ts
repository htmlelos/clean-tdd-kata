import { Request, Response } from 'express'

export const userController = (req: Request, res: Response) => {     
    const body = req.body;
    return res.sendStatus(200);
}