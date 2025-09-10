export interface BaseResponse<T> {
  data: T;
  meta: {
    total: number;
    page: number;
    pageSize: number;
  };
}
