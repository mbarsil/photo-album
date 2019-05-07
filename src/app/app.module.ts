import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { PhotoAlbumComponent } from './components/photo-album/photo-album.component';
import { LikedPhotosComponent } from './components/liked-photos/liked-photos.component';
import { photoAlbumReducer } from './components/photo-album/store/photo-album.reducers';

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
    StoreModule.forRoot({photoAlbumReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
