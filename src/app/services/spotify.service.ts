import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SpotifyTokenService } from './spotify-token.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseUrl: string;
  private tokenAPI: string;

  constructor( private http: HttpClient, private _spotifyToken: SpotifyTokenService ) {
    this.baseUrl = 'https://api.spotify.com/v1/';
  }

  init() {
    if( !this.tokenAPI ) {
      return this._spotifyToken.getToken()
      .pipe( map( token => {this.tokenAPI = `Bearer ${ token }`; console.log( this.tokenAPI )} ));
    } 
    
    else return of([]);
  }

  getNewReleases(): Observable<any> {
    let urlAPI = `${this.baseUrl}browse/new-releases?limit=5`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI)

    return this.http.get( urlAPI, {headers: autorization} )
      .pipe( map( data => data['albums'].items ));
  }

  getFeaturedPlaylists(): Observable<any> {
    let urlAPI = `${this.baseUrl}browse/featured-playlists?limit=5`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI);

    return this.http.get( urlAPI, { headers: autorization } )
      .pipe( map( data => data['playlists'].items) );
  }

  getArtist( id: string ): Observable<any> {
    let urlAPI = `${this.baseUrl}artists/${id}`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI);

    return this.http.get( urlAPI, { headers: autorization } )
  }

  getTopTrackArtist( id: string ): Observable<any> {
    let urlAPI = `${this.baseUrl}artists/${id}/top-tracks?market=ES`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI);

    return this.http.get( urlAPI, { headers: autorization } )
      .pipe( map( data => data['tracks'] ) );
  }

  getAlbumsArtist( id: string ): Observable<any> {
    let urlAPI = `${this.baseUrl}artists/${id}/albums?offset=0&limit=5`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI);

    return this.http.get( urlAPI, { headers: autorization } )
      .pipe( map( data => data['items'] ) );
  }

  getArtistsRelated( id: string ): Observable<any> {
    let urlAPI = `${this.baseUrl}artists/${id}/related-artists`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI);

    return this.http.get( urlAPI, { headers: autorization } )
      .pipe( map( data => data['artists'].slice(0,5) ));
  }

  searchTracks( value: string ): Observable<any> {
    let urlAPI = `${this.baseUrl}search?q=${value}&type=track&limit=5`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI);

    return this.http.get( urlAPI, { headers: autorization } )
      .pipe( map( data => data['tracks'].items ));

  }

  searchArtist( value: string ): Observable<any> {
    let urlAPI = `${this.baseUrl}search?q=${value}&type=artist&market=ES&limit=5`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI);

    return this.http.get( urlAPI, { headers: autorization } )
      .pipe( map( data => data['artists'].items ))
  }

  searchAlbum( value: string ): Observable<any> {
    let urlAPI = `${this.baseUrl}search?q=${value}&type=album&market=ES&limit=5`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI);

    return this.http.get( urlAPI, { headers: autorization } )
    .pipe( map( data => data['albums'].items ))
  }

  searchPlaylist( value: string ): Observable<any> {
    let urlAPI = `${this.baseUrl}search?q=${value}&type=playlist&limit=5`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI);

    return this.http.get( urlAPI, { headers: autorization } )
    .pipe( map( data => data['playlists'].items ))
  }

  getUserPlaylists( ): Observable<any> {
    let userIdMe = '11127091402';
    let urlAPI = `${this.baseUrl}users/${userIdMe}/playlists`;
    let autorization = new HttpHeaders().set('Authorization', this.tokenAPI);

    return this.http.get( urlAPI, { headers: autorization } )
    .pipe( map( data => data['items'] ));
  }

}
