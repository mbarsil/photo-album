import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { Observable, Subscription } from 'rxjs';

import * as PhotoAlbumActions from '../../store/photo-album.actions';
import * as PhotoAlbumReducers from '../../store/photo-album.reducers';

import { FlickrResponse, FavPhoto, FlickerPhoto, Photo } from '../../interfaces/common.interfaces';

import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss'],
  providers: [ PhotoService ]
})
export class PhotoAlbumComponent implements OnInit, OnDestroy {
  photosState: Observable<PhotoAlbumReducers.State>;
  searchTerm: Observable<string>;
  private subscription: Subscription;

  constructor(
    private photoService: PhotoService,
    private store: Store<PhotoAlbumReducers.AppState>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.photosState =  this.store.select(state => state.photoAlbum);
    this.searchTerm =  this.store.select(state => state.photoAlbum.searchTerm);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSearch(f: NgForm): void {
    this.store.dispatch(new PhotoAlbumActions.SearchTerm(f.value.first));
    this.retrievePhotos(f.value.first);
  }

  onFavorite(index: number, url: string, title: string): void {
    const photo: FavPhoto = {
      title,
      url_m: url,
      favorite: true
    };

    this.snackBar.open('Photo liked!', '', { duration: 1000});
    this.store.dispatch(new PhotoAlbumActions.FavoritePhoto({index, photo}));
  }

  private retrievePhotos(term: string): void {
    this.subscription = this.photoService.get(term)
      .subscribe(
        (response: FlickrResponse) => {
          this.updateAppState(response);
        },
        (err: any) => console.error(err)
      );
  }

  private updateAppState({ photos: { photo }}: FlickrResponse): void {
    const filteredResponse = photo.map((photoItem: FlickerPhoto) => {
      const { title, url_m } = photoItem;
      const reducedPhoto: Photo = { title, url_m };

      return reducedPhoto;
    });

    this.store
      .dispatch(new PhotoAlbumActions.SetPhotos(filteredResponse));
  }
}
