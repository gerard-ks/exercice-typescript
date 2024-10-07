import { QueryParams } from "../types/queryParams.type";

export function buildQueryString(params: QueryParams): string {
  const query: string[] = [];

  query.push(`search=${params.search}`);


  if (params.sort !== undefined) {
    query.push(`sort=${params.sort}`);
  }

  if (params.page !== undefined) {
    query.push(`page=${params.page}`);
  }

  if (params.pageSize !== undefined) {
    query.push(`pageSize=${params.pageSize}`);
  }

  return query.join('&');
}