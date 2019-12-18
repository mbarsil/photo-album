import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photos = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  get(searchText: string) {
    let params = new HttpParams();

    params = params.append('api_key', '8fa254190ec943ff6dd2558a1dbbbe74');
    params = params.append('text', searchText);
    params = params.append('extras', 'url_m');
    params = params.append('format', 'json');
    params = params.append('nojsoncallback', '1');
    params = params.append('method', 'flickr.photos.search');

    return this.http.get('https://api.flickr.com/services/rest', { params });
  }
}
