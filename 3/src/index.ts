import { buildQueryString } from "./applications/buildQueryString.application";
import { QueryParams } from "./types/queryParams.type";


(() => {
    const params: QueryParams = {
    search: 'typescript', 
    sort: 'asc',           
    page: 1 
    };

    const queryString = buildQueryString(params);
    console.log(queryString);
})();