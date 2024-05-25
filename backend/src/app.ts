import { Server }from './presentation';

// Funcion anonima autoinvocada, debe esperar a que se ejecute el main
(async () => {
    main();
})();

async function main() {
    const server = new Server(3000)
    server.start();
}