import * as PhotoAlbumActions from './photo-album.actions';

import { FavPhoto, Photo } from '../interfaces/common.interfaces';

export interface AppState {
  photoAlbum: State;
}

export interface State {
  searchTerm: string;
  photos: Photo[];
  favorites: FavPhoto[];
}

const initialState: State = {
  searchTerm: '',
  photos: [
    {
      title: 'Sample photo 1',
      url_m: 'https://live.staticflickr.com/65535/40843306653_19f7c77edb.jpg'
    },
    {
      title: 'Sample photo 2',
      url_m: 'https://live.staticflickr.com/65535/47809581621_1bf4c53b03.jpg'
    }
  ],
  favorites: []
};

export function photoAlbumReducer(state = initialState, action: PhotoAlbumActions.PhotoAlbumActions) {
  switch (action.type) {
    case PhotoAlbumActions.FAVORITE_PHOTO:
      const { payload: { photo: likedPhoto }} = action;
      const favorites = [ ...state.favorites, likedPhoto ];

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
