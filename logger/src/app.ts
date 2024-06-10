import { envs }              from './adapters';
import { MongoDataBase } from './data';
import { AppRoutes, Server } from './presentation';

// Funcion anonima autoinvocada, debe esperar a que se ejecute el main
(async () => {
    main();
})();

async function main() {
    await MongoDataBase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName:   envs.MONGO_DB_NAME
    })
    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    })
    server.start();
}