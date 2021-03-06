import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { photoAlbumReducer } from './store/photo-album.reducers';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { PhotoAlbumComponent } from './components/photo-album/photo-album.component';
import { LikedPhotosComponent } from './components/liked-photos/liked-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoAlbumComponent,
    LikedPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot({ photoAlbum: photoAlbumReducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
