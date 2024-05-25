//*  Este archivo se encarga de crear el servidor, configurarlo y de iniciarlo.

import express, { Router } from 'express';

// Contrato para la creación del servidor
interface OptionsConstructor {
    port: number;
    routes: Router;
}

export class Server {
    private serverListener?: any;
    private readonly port:   number;
    private readonly routes: Router;

    public  readonly app = express();

    constructor( optionsConstructor: OptionsConstructor ) {
        const { port, routes } = optionsConstructor;
        this.port   = port;
        this.routes = routes;
    }

    async start(){

        //* Middlewares
        this.app.use(express.json());

        //* Routes
        this.app.use(this.routes);

        this.serverListener = this.app.listen(this.port, () => {
            console.log("=====================================")
            console.log(`Server listening on port ${this.port}`);
        })
    }

    public close(){
        this.serverListener?.close();
    }
}