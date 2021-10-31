import { NextFunction, Request, Response } from "express"
import { Result, ValidationError, validationResult } from "express-validator"
import HttpException from "../exceptions/HttpException";

export function validateRequestSchema(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined {
    const errors:Result<ValidationError> = validationResult(req);    
    if (!errors.isEmpty()) {
        // throw new HttpException(400, errors);
        console.log('->',errors.array);        
        return res.status(400).json(errors)
    }

    next()
}