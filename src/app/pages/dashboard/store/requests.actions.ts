import { createAction, props } from '@ngrx/store';
import { Request } from 'src/app/shared/models/shared.models';

export const fetchRequests = createAction('[FETCH REQUESTS] Fetching requests');

export const fetchRequestsSuccess = createAction(
  '[FETCH REQUESTS SUCCESS] Fetching requests - successful',
  props<{ requests: Request[] }>()
);
export const fetchRequestsFailure = createAction(
  '[FETCH REQUESTS ERROR] Fetching requests - failed'
);

export const addRequest = createAction(
  '[ADD REQUEST] Adding request',
  props<{ request: Request }>()
);
export const addRequestSuccess = createAction(
  '[ADD REQUEST] Adding request - successful'
);

export const deleteRequest = createAction(
  '[DELETE REQUEST] Deleting request',
  props<{ id: number }>()
);

export const deleteRequestSuccess = createAction(
  '[DELETE REQUEST SUCCESS] Deleting request - successful'
);
