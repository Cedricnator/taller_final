import { envs } from './adapters/envs';
import { AppRoutes, Server }from './presentation';

// Funcion anonima autoinvocada, debe esperar a que se ejecute el main
(async () => {
    main();
})();

async function main() {
    const server = new Server({
        port:   envs.PORT,
        routes: AppRoutes.routes
    })
    server.start();
}