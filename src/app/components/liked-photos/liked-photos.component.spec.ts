import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedPhotosComponent } from './liked-photos.component';
import { MaterialModule } from '../../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { photoAlbumReducer } from '../../store/photo-album.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PhotoAlbumComponent } from '../photo-album/photo-album.component';

describe('LikedPhotosComponent', () => {
  let component: LikedPhotosComponent;
  let fixture: ComponentFixture<LikedPhotosComponent>;

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
    fixture = TestBed.createComponent(LikedPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
