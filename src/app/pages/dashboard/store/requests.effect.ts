import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Request } from 'src/app/shared/models/shared.models';

import {
  addRequest,
  addRequestSuccess,
  deleteRequest,
  deleteRequestSuccess,
  fetchRequests,
  fetchRequestsFailure,
  fetchRequestsSuccess,
} from './requests.actions';
import { RequestsService } from './requests.services';

@Injectable({ providedIn: 'root' })
export class RequestsEffects {
  constructor(
    private actions$: Actions,
    private requestsService: RequestsService
  ) {}

  public readonly fetchRequests$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchRequests),
      switchMap(() => this.requestsService.getRequests()),
      map(
        (data: Request[]) => fetchRequestsSuccess({ requests: data }),
        catchError(() => of(fetchRequestsFailure()))
      )
    );
  });

  public addRequest$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(addRequest),
      switchMap(({ request }) =>
        this.requestsService
          .addRequest(request)
          .pipe(map(() => addRequestSuccess()))
      )
    );
  });

  public deleteRequest$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteRequest),
      mergeMap(({ id }) =>
        this.requestsService
          .deleteRequest(id)
          .pipe(map(() => deleteRequestSuccess()))
      )
    );
  });
}
