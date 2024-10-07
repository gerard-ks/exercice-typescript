import { Permissions } from "../types/permission.type";
import { Role } from "../types/role.type";


export function getPermissions<T extends Role>(role: T): Permissions<T> {
    if (role === 'admin') {
        return ['create', 'read', 'update', 'delete'] as Permissions<T>;
    } else if (role === 'editor') {
        return ['create', 'read', 'update'] as Permissions<T>;
    } else if (role === 'viewer') {
        return ['read'] as Permissions<T>;
    } 
    throw new Error('Rôle invalide');
}