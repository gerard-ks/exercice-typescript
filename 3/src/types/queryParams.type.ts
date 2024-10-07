export type QueryParams<RequiredParams = {
    search: string;  
}, OptionalParams = {
    sort: string;  
    page: number;  
    pageSize: number; 
}> = Required<RequiredParams> & Partial<OptionalParams>;
