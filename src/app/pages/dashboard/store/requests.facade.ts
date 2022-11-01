import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Request } from 'src/app/shared/models/shared.models';
import * as requestsActions from './requests.actions';
import * as requestsSelectors from './requests.selectors';
import { RequestsState } from './requests.state';

@Injectable({ providedIn: 'root' })
export class RequestsFacade {
  public readonly requests$: Observable<Request[]> = this.store.pipe(
    select(requestsSelectors.getRequests)
  );

  constructor(private readonly store: Store<RequestsState>) {}

  public loadRequests(): void {
    this.store.dispatch(requestsActions.fetchRequests());
  }

  public addRequest(request) {
    request.id = Math.floor(Math.random() * (1000 - 100) + 100);
    this.store.dispatch(requestsActions.addRequest({ request: request }));
  }

  public deleteRequest(id) {
    this.store.dispatch(requestsActions.deleteRequest({ id: id }));
  }
}
