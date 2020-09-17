import ApiServer from "./ApiServer";
import { Request, Response } from "express";
import pino from "pino";
import { ValidateFunction } from "ajv";
import { userValidator } from "./schemas";

const logger = pino();
const server = new ApiServer();
server.start();

const unauthorized = (req: Request, res: Response) => {
    res.status(401).json({msg: "not authorized"});
};

const invalid = (req: Request, res: Response) => {
    res.status(400).json({msg: "not valid"});
}

export function route(method: string, path: string): MethodDecorator {
    return function(target: Record<string, any>, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        //@ts-expect-error
        server.app[method](path, (req: Request, res: Response) => {
            res.status(200).json(descriptor.value(req, res));
        });
    }
}

export function logRoute(): MethodDecorator {
    return function(target: Record<string, any>, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const req = args[0] as Request;
            logger.info(`${req.url} ${req.method}`);
            return original.apply(this, args);
        }
    }
}

export function authenticate(apiKey: string): MethodDecorator {
    return function(target: Record<string, any>, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const req = args[0] as Request;
            const res = args[1] as Response;
            if (req.headers['x-api-key'] === apiKey) {
                return original.apply(this, args);
            }
            else {
                return unauthorized(req, res);
            }
        }
    }
}

export function validate(validateFn: ValidateFunction): MethodDecorator {
    return function(target: Record<string, any>, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const req = args[0] as Request;
            const res = args[1] as Response;
            if (validateFn(req.body)) {
                return original.apply(this, args);
            }
            else {
                //return invalid(req, res);
                res.status(400).json({ method: propertyKey, errors: validateFn.errors })
            }
        }
    }
}

class ApiRoutes {
    @logRoute()
    @route("get", "/")
    public indexRoute(req: Request, res: Response) {
        return {
            status: "ok"
        }
    }

    @logRoute()
    @route("get", "/user")
    @authenticate("this-is-an-api-key")
    public userRoute(req: Request, res: Response) {
        return {
            firstName: "Grace",
            lastName: "Hopper"
        }
    }

    @logRoute()
    @route("post", "/user")
    @authenticate("this-is-an-api-key")
    @validate(userValidator)
    public newUser(req: Request, res: Response) {
        return req.body;
    }
}

