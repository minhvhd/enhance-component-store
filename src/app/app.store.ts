import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { AppState } from "./app.state";
import { EMPTY, switchMap } from "rxjs";

@Injectable()
export class AppStore extends ComponentStore<AppState> {
  readonly status$ = this.select(s => s.status);
  readonly pagination$ = this.select(s => s.pagination);
  readonly sorter$ = this.select(s => s.sorter);

  readonly fetchListTrigger$ = this.select(
    this.sorter$,
    this.pagination$,
    (sorter, pagination) => ({
      sorter,
      pagination
    })
  );

  readonly fetchList = this.effect<Omit<AppState, 'status'>>(
    $ => $.pipe(
      switchMap((res) => {
        console.log(res.sorter)
        return EMPTY;
      })
    )
  )

  ngrxOnStoreInit() {

  }
  
  constructor() {
    super()
  }
}

const initialState: AppState = {
  status: 'idle',
  sorter: {
    active: 'no',
    direction: 'asc',
  },
  pagination: {
    currentPage: 1,
    perPage: 5,
    totalPage: 10,
  }
}