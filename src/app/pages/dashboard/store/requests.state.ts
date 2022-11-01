import { Request } from 'src/app/shared/models/request.model';
export const REQUESTS_FEATURE_NAME = 'requests';

export interface RequestsState {
  requests: Request[];
  isReady: boolean;
}

export const initialState: RequestsState = {
  requests: [{ recipeName: 'Tacos', user: 'usr@abv.bg' }],
  isReady: false,
};
