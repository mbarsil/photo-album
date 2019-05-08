import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

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

  // photos: object[] = [];
  photosState: Observable<object[]>;
  searchTerm: string;

  constructor(private photoService: PhotoService, private store: Store<PhotoAlbumReducers.AppState>) { }

  ngOnInit() {
    this.photosState =  this.store.select('photos');
    this.retrievePhotos();
  }

  retrievePhotos() {
    this.photoService.get(this.searchTerm)
      .subscribe(
        (response) => {
          this.store.dispatch(new PhotoAlbumActions.SetPhotos(response.photos.photo));
          // this.photos = response.photos.photo && response.photos.photo;
          // console.log(this.photos);
        },
          (err) => console.log(err)
      );
  }

  onSearch(f: NgForm) {
    this.searchTerm = f.value.first;
    this.store.dispatch(new PhotoAlbumActions.SearchTerm(this.searchTerm));
    this.retrievePhotos();
  }

  onFavorite(index: number, url: string, title: string) {
    const photo = new Photo(title, url, true);
    this.store.dispatch(new PhotoAlbumActions.FavoritePhoto({index, photo}));
  }

}
