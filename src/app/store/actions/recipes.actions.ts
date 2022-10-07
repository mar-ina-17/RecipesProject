import { Action } from '@ngrx/store';

export enum ActionTypes {
  Edit = '[Recipes Component] Edit',
  Save = '[Recipes Component] Save',
  Delete = '[Recipes Component] Delete',
}

export class Edit implements Action {
  readonly type = ActionTypes.Edit;
}

export class Save implements Action {
  readonly type = ActionTypes.Save;
}

export class Delete implements Action {
  readonly type = ActionTypes.Delete;
}
