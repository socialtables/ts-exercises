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

class ApiRoutes {
    public indexRoute(req: Request, res: Response) {
        return {
            status: "ok"
        }
    }

    public userRoute(req: Request, res: Response) {
        return {
            firstName: "Grace",
            lastName: "Hopper"
        }
    }

    public newUser(req: Request, res: Response) {
        return req.body;
    }
}

