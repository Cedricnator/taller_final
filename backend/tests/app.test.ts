import { envs } from '../src/adapters/envs';
import { Server } from '../src/presentation/server';

jest.mock('../src/presentation/server')

describe("Testing App.ts", () => {
    test("Should return true" , async() => {
        await import('../src/app');
        expect(Server).toHaveBeenCalledTimes(1);
        expect(Server).toHaveBeenCalledWith({
            port: envs.PORT,
            routes: expect.any(Function),
        });

        expect(Server.prototype.start).toHaveBeenCalledWith();
    })
})