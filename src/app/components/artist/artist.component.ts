import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit, OnDestroy {

  artist: any = '';
  topTracks: any;
  albums: any;
  artistsRelated: any;

  constructor( private activatedRoute: ActivatedRoute, private _spotifty: SpotifyService ) {
    this.activatedRoute.params.subscribe( param => {
      this.getTopTrackArtist( param.id );
      this.getAlbumsArtist( param.id );
      this.getArtistsRelated( param.id );

      this._spotifty.getArtist( param.id )
        .subscribe( resp => { 
          this.artist = resp;          
        });
    });
  }

  ngOnInit(): void {
    let userNav = document.querySelector('#userNav');
    userNav.classList.add('usernav__page-artist');
  }

  ngOnDestroy(): void {
    let userNav = document.querySelector('#userNav');
    userNav.classList.remove('usernav__page-artist');
  }

  getTopTrackArtist( id: string ) {
    this._spotifty.getTopTrackArtist( id )
      .subscribe( resp => {
        this.topTracks = {
          'title': 'Popular',
          items: resp
        }
      });
  }

  getAlbumsArtist( id: string ) {
    this._spotifty.getAlbumsArtist( id )
      .subscribe( albumsList => {
        this.albums = {
          'title': 'Discografía',
          'items': albumsList
        }
      });
  }

  getArtistsRelated( id: string ) {
    this._spotifty.getArtistsRelated( id )
      .subscribe( resp => {
        this.artistsRelated = {
          'title': 'A los fans también les gusta',
          'items': resp
        }
      });
  }

}
