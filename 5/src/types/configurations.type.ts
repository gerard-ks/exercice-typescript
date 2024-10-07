import { DatabaseConfig } from "../interfaces/databaseConfig.interface";
import { ServerConfig } from "../interfaces/serverConfig.interface";

export type Configurations = {
    database: DatabaseConfig;
    server: ServerConfig;
};