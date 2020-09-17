import * as http from "http";
import express, { Request, Response, Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "reflect-metadata";

function api(name: string): ClassDecorator {
    return function(constructor: Function) {
        Reflect.defineMetadata("api:name", name, constructor);
    }
} 

@api("UserApi")
export default class ApiServer {
    private _app: Express;

    private _server: http.Server | undefined;

    get server(): http.Server | undefined {
        return this._server;
    }

    get app(): Express {
        return this._app;
    }

    constructor() {
        this._app = express();
        this.configureMiddleware();
    }

    public configureMiddleware() {
        this._app.use(bodyParser.json());

        this._app.options("*", cors());
    }

    public start() {
        const port = process.env.PORT || 8989;
        const apiName = Reflect.getMetadata("api:name", ApiServer);
        this._server = this._app.listen(port, () => {
            console.log(`${apiName} server is running on port: ${port}`);
        });
    }
}