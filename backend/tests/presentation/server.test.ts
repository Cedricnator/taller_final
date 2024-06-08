import { Server } from '../../src/presentation/server';
import express, { Router } from 'express';

describe("Testing server.ts", () => {
    let server: Server;
    let app: express.Application;
    let routes: Router;

    beforeEach(() => {
        routes = express.Router();
        app = express();
        app.use(express.json());
        app.use(routes);
        server = new Server({ port: 3000, routes });
    });

    afterEach(() => {
        server.close();
    });

    test("start() should start the server and listen on the specified port", async () => {
        await server.start();
        expect(server.app).toBeDefined();
    });

});