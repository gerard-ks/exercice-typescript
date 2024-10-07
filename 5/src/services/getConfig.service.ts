import { Configurations } from "../types/configurations.type";

const configurations: Configurations = {
    database: {
        host: 'localhost',
        port: 5432,
        username: 'user',
        password: 'password',
    },
    server: {
        host: 'localhost',
        port: 3000,
        protocol: 'http',
    },
};

export function getConfig<T extends keyof Configurations>(key: T): Configurations[T] {
    return configurations[key];
}