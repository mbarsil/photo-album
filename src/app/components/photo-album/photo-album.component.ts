import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import {MatSnackBar} from '@angular/material';

import { PhotoService } from '../../services/photo.service';
import * as PhotoAlbumActions from '../../store/photo-album.actions';
import * as PhotoAlbumReducers from '../../store/photo-album.reducers';
import { Photo } from '../../models/photo.model';



@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss'],
  providers: [PhotoService]
})
export class PhotoAlbumComponent implements OnInit {

  photosState: Observable<PhotoAlbumReducers.State>;
  searchTerm: Observable<string>;

  constructor(
    private photoService: PhotoService,
    private store: Store<PhotoAlbumReducers.AppState>,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.photosState =  this.store.select(state => state.photoAlbum);
    this.searchTerm =  this.store.select(state => state.photoAlbum.searchTerm);
  }

  retrievePhotos(term: string) {
    this.photoService.get(term)
      .subscribe(
        (response) => {
          this.store.dispatch(new PhotoAlbumActions.SetPhotos((<any>response).photos.photo));
        },
        (err) => console.log(err)
      );
  }

  onSearch(f: NgForm) {
    this.store.dispatch(new PhotoAlbumActions.SearchTerm(f.value.first));
    this.retrievePhotos(f.value.first);
  }

  onFavorite(index: number, url: string, title: string) {
    const photo = new Photo(title, url, true);
    this.snackBar.open('Photo liked!', '', { duration: 1000});
    this.store.dispatch(new PhotoAlbumActions.FavoritePhoto({index, photo}));
  }

}
