import * as PhotoAlbumActions from './photo-album.actions';

import { Photo } from '../../../models/photo.model';

export interface AppState {
  photos: State;
}

export interface State {
  photos: Photo[];
  editedPhoto: Photo;
  editedPhotoIndex: number;
}

const initialState: State = {
  photos: [
    new Photo('Sample photo 1', 'https://via.placeholder.com/350', false),
    new Photo('Sample photo 2', 'https://via.placeholder.com/350', false),
  ],
  editedPhoto: null,
  editedPhotoIndex: -1
};

export function photoAlbumReducer(state = initialState, action: PhotoAlbumActions.PhotoAlbumActions) {
  switch (action.type) {
    case PhotoAlbumActions.FAVORITE_PHOTO:
      const photo = state.photos[state.editedPhotoIndex];
      const favoritedPhoto = {
        ...photo,
        ...action.payload.photo
      };
      const photos = [...state.photos];
      photos[state.editedPhotoIndex] = favoritedPhoto;
      return {
        ...state,
        photos,
        editedPhoto: null,
        editedPhotoIndex: -1
      };
    default:
      return state;
  }
}

export class PhotoAlbumReducer {
}
