//*  Este archivo se encarga de crear el servidor, configurarlo y de iniciarlo.

import express, { Router } from 'express';
import { MorganAdapter } from '../adapters';

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
        this.app.use(MorganAdapter.morganMiddleware())

        //* CORS
        this.app.use((req, res, next) => {
            res.append('Access-Control-Allow-Origin', ['*']);
            res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            next()
        })

        //* Routes
        this.app.use(this.routes);

        //* Puerto en que escucha el servidor
        this.serverListener = this.app.listen(this.port, () => {
            console.log("=====================================")
            console.log(`Server listening on port ${this.port}`);
        })
        
    }

    public close(){
        this.serverListener?.close();
    }
}