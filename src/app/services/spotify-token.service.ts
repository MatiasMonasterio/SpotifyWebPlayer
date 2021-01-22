import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyTokenService {

  private clientId: String;
  private clientSecret: String;
  private baseUrl: string;

  constructor( private http: HttpClient ) {
    this.clientId = 'e6664c40d9164345ba8eac717151cd74';
    this.clientSecret = '3ad8d5b8e9c2463397091c21509c1212';
    this.baseUrl = 'https://spotify-get-token.herokuapp.com/spotify'
  }

  getToken() {
    return this.http.get( `${ this.baseUrl }/${ this.clientId }/${ this.clientSecret }` )
      .pipe( map(( resp: any ) => resp.access_token));
  }
}
