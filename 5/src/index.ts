
import { DatabaseConfig } from "./interfaces/databaseConfig.interface";
import { ServerConfig } from "./interfaces/serverConfig.interface";
import { getConfig } from "./services/getConfig.service";

(() => {
    const dbConfig: DatabaseConfig = getConfig('database');
    console.log('Database Configuration:', dbConfig);

    const serverConfig: ServerConfig = getConfig('server');
    console.log('Server Configuration:', serverConfig);
})();
