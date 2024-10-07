import { getPermissions } from "./services/getPermissions.service";
import { Permissions } from "./types/permission.type";

((): void => {
    const adminPermissions: Permissions<'admin'> = getPermissions<'admin'>('admin');
    const editorPermissions: Permissions<'editor'> = getPermissions<'editor'>('editor');
    const viewerPermissions: Permissions<'viewer'> = getPermissions<'viewer'>('viewer');

    console.log(adminPermissions);
    console.log(editorPermissions);
    console.log(viewerPermissions);
})();