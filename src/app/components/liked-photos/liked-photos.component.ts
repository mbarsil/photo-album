import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PhotoAlbumReducers from '../../store/photo-album.reducers';

@Component({
  selector: 'app-liked-photos',
  templateUrl: './liked-photos.component.html',
  styleUrls: ['./liked-photos.component.scss']
})
export class LikedPhotosComponent implements OnInit {

  photosState: Observable<PhotoAlbumReducers.State>;

  constructor(private store: Store<PhotoAlbumReducers.AppState>) { }

  ngOnInit() {
    this.photosState =  this.store.select(state => state.photoAlbum);
  }

}
