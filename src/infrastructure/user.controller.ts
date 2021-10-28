import { Request, Response } from 'express'

export const userController = (req: Request, res: Response) => {
    console.log('--CONTROLLER--');
        
    return res.status(200);
}