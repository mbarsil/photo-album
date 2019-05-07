import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoAlbumComponent} from './components/photo-album/photo-album.component';
import {LikedPhotosComponent} from './components/liked-photos/liked-photos.component';

const routes: Routes = [
  { path: 'photo-album',  component: PhotoAlbumComponent },
  { path: 'liked-photos', component: LikedPhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
