// Use to catch and return errors in routes properly when node refuses to handle them.
import Promise = require('bluebird');
import { Request, Response } from 'express';

/**
 * Wraps a request handler or middleware in a way that should ensure that any errors are propagated correctly to the caller.
 * @param handler the handler to wrap. Must return a promise.
 * @return {Function} the wrapped handler function.
 */
export function wrap(handler: (req: Request, res: Response) => Promise<any>) {
    return function (req: Request, res: Response) {
        return Promise.try(() => handler(req, res)).catch(getErrorHandler(res));
    };
}

/**
 * Generates an error handler for a response.
 * @param res the response to use to propagate the error.
 * @return {Function} the error handler function.
 */
export function getErrorHandler(res: Response) {
    return (err: Error & { code?: number }) => {
        console.log(err.code);
        const code = err.code || 500;
        res.status(code);
        res.send(err);
    };
}
