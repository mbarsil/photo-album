import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbumComponent } from './photo-album.component';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { photoAlbumReducer } from '../../store/photo-album.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LikedPhotosComponent } from '../liked-photos/liked-photos.component';

describe('PhotoAlbumComponent', () => {
  let component: PhotoAlbumComponent;
  let fixture: ComponentFixture<PhotoAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        StoreModule.forRoot({photoAlbum: photoAlbumReducer}),
        StoreDevtoolsModule.instrument(),
      ],
      declarations: [ PhotoAlbumComponent, LikedPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
