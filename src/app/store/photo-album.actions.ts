/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';

import { Photo } from '../interfaces/common.interfaces';

export const FAVORITE_PHOTO = 'FAVORITE_PHOTO';
export const SET_PHOTOS = 'SET_PHOTOS';
export const SEARCH_TERM = 'SEARCH_TERM';

export class FavoritePhoto implements Action {
  readonly type = FAVORITE_PHOTO;

  constructor(public payload: {index: number, photo: Photo}) {}
}

export class SetPhotos implements Action {
  readonly type = SET_PHOTOS;

  constructor(public payload: object[]) {}
}

export class SearchTerm implements Action {
  readonly type = SEARCH_TERM;

  constructor(public payload: string) {}
}

export type PhotoAlbumActions =
  FavoritePhoto | SearchTerm | SetPhotos;
