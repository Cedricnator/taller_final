import express from 'express';

export class Server {
    public readonly app = express();
    private serverListener?: any;
    private readonly port: number;

    constructor(port: number) {
        this.port = port;
    }

    async start(){

        //* Middlewares
        this.app.use(express.json());


        this.serverListener = this.app.listen(this.port, () => {
            console.log("=====================================")
            console.log(`Server listening on port ${this.port}`);
        })
    }

    public close(){
        this.serverListener?.close();
    }
}