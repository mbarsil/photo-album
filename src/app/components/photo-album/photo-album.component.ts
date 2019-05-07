import { Component, OnInit } from '@angular/core';
import { PhotoService} from '../../services/photo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss'],
  providers: [PhotoService]
})
export class PhotoAlbumComponent implements OnInit {

  photos: object[] = [];
  searchTerm: string;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.retrievePhotos();
  }

  retrievePhotos() {
    this.photoService.get(this.searchTerm)
      .subscribe(
        (response) => {
          this.photos = response.photos.photo && response.photos.photo;
          console.log(this.photos);
        },
          (err) => console.log(err)
      );
  }

  onSubmit(f: NgForm) {
    this.searchTerm = f.value.first;
    this.retrievePhotos();
  }

}
