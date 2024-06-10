/*
    * Author: Cedric Kirmayr
    * Last updated: 2021/07/25
    * Project 

*/

import { envs } from './adapters/envs.adapter';
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