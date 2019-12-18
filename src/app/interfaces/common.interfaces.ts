export interface Photo {
  title: string;
  url_m: string;
}

export interface FavPhoto extends Photo {
  favorite: boolean;
}

export interface FlickrResponse {
  photos: FickerPhotoPage;
  stat: string;
}

export interface FickerPhotoPage {
  page: number;
  pages: number;
  perpage: number;
  photo: FlickerPhoto[];
  total: string;
}

export interface FlickerPhoto extends Photo {
  farm: number;
  height_m: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  width_m: number;
}
