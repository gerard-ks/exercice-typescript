import { Role } from "./role.type";

export type Permissions<T extends Role> = 
    T extends 'admin' ? ['create', 'read', 'update', 'delete'] :
    T extends 'editor' ? ['create', 'read', 'update'] :
    ['read'];
