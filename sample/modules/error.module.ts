import { Request, Response, NextFunction } from "express";
import { IMessageResponse } from '../@types/api/IMessageResponse';

/**
 * Captures all errors thrown by promises and passes them to the next middleware
 * @param fn Must be a promise / async function, accepting the standard  (req, res, next?) arguments
 */
let wrap = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
    (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);


function handleError(err: Error, req: Request, res: Response, next: NextFunction) {
    let status = 500;
    if (err.message.toLocaleLowerCase().includes("unauthorized")) status = 401;
    if (err.message.toLowerCase().includes("not found")) status = 404;

    let result: IMessageResponse = { message: err.message };
    res.status(status).json(result);
}


export { wrap, handleError };