import * as PhotoAlbumActions from './photo-album.actions';

import { Photo } from '../models/photo.model';

export interface AppState {
  photoAlbum: State;
}

export interface State {
  searchTerm: string;
  photos: Photo[];
}

const initialState: State = {
  searchTerm: '',
  photos: [
    new Photo('Sample photo 1', 'https://via.placeholder.com/350', false),
    new Photo('Sample photo 2', 'https://via.placeholder.com/350', false),
  ]
};

export function photoAlbumReducer(state = initialState, action: PhotoAlbumActions.PhotoAlbumActions) {
  switch (action.type) {
    case PhotoAlbumActions.FAVORITE_PHOTO:
      const {payload: { index: favIndex }} = action;
      const photo = state.photos[favIndex];
      const favoritedPhoto = {
        ...photo,
        ...action.payload.photo
      };
      const photos = [...state.photos];
      photos[favIndex] = favoritedPhoto;
      return {
        ...state,
        photos
      };
    case PhotoAlbumActions.SEARCH_TERM:
      const searchTerm = action.payload;
      return {
        ...state,
        searchTerm
      };
    default:
      return state;
  }
}

export class PhotoAlbumReducer {
}
