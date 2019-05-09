import * as PhotoAlbumActions from './photo-album.actions';

import { Photo } from '../models/photo.model';

export interface AppState {
  photoAlbum: State;
}

export interface State {
  searchTerm: string;
  photos: object[];
  favorites: Photo[];
}

const initialState: State = {
  searchTerm: '',
  photos: [
    new Photo('Sample photo 1', 'https://via.placeholder.com/350', false),
    new Photo('Sample photo 2', 'https://via.placeholder.com/350', false),
  ],
  favorites: []
};

export function photoAlbumReducer(state = initialState, action: PhotoAlbumActions.PhotoAlbumActions) {
  switch (action.type) {
    case PhotoAlbumActions.FAVORITE_PHOTO:
      const {payload: { index: favIndex , photo: likedPhoto}} = action;
      const favorites = [...state.favorites, likedPhoto];
      return {
        ...state,
        favorites
      };
    case PhotoAlbumActions.SET_PHOTOS:
      return {
        ...state,
        photos: [...action.payload]
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
