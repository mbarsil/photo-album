import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import * as PhotoAlbumReducers from '../../store/photo-album.reducers';

const EMPTY_FAVORITES_MSG = 'You don\'t have any favorite photos yet';
const POPULATED_FAVORITES_MSG = 'Here you have your favorite photos';

@Component({
  selector: 'app-liked-photos',
  templateUrl: './liked-photos.component.html',
  styleUrls: ['./liked-photos.component.scss']
})
export class LikedPhotosComponent implements OnInit, OnDestroy {
  message: string;
  photosState: Observable<PhotoAlbumReducers.State>;
  private subscription: Subscription;

  constructor(
    private store: Store<PhotoAlbumReducers.AppState>
  ) { }

  ngOnInit(): void {
    this.photosState =  this.store.select(state => state.photoAlbum);
    this.updateMessage();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateMessage() {
    this.subscription = this.photosState.subscribe(
      (response: any) => {
        this.message = response.favorites.length > 0 ?
          POPULATED_FAVORITES_MSG :
          EMPTY_FAVORITES_MSG;
      },
      (err: any) => console.error(err)
    );
  }
}
