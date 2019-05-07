import { Action } from '@ngrx/store';

import { Photo } from '../../../models/photo.model';

export const FAVORITE_PHOTO = 'FAVORITE_PHOTO';

export class AddIngredient implements Action {
  readonly type = FAVORITE_PHOTO;

  constructor(public payload: Photo) {}
}

export type PhotoAlbumActions =
  AddIngredient;
