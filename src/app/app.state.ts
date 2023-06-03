export type ApiStatus = 'idle' | 'loading' | 'success' | 'error';

export type Sorter = {
  active: string;
  direction: 'asc' | 'desc' | ''
}

export type Pagination = {
  currentPage: number,
  perPage: number,
  totalPage: number,
}

export interface AppState {
  status: ApiStatus;
  pagination: Pagination;
  sorter: Sorter;
}