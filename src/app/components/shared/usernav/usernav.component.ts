import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SpotifyService } from '../../../services/spotify.service';
import { SearchService } from '../../../services/search.service';



@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styles: [
  ]
})
export class UsernavComponent implements OnInit {

  public userButton: boolean;
  public inputValue: string;
  public scrollControl: number;

  constructor( 
      private _spotify: SpotifyService, 
      private _search: SearchService,
      private location: Location,
      private router: Router
  ){
    this.userButton = false;
    this.inputValue = '';
  }

  ngOnInit(): void {
  }

  search( query: string ) {    
    this.inputValue = query;
    this.router.navigate([ '/search', query ]);

    if( query.length != 0 ) {
      this.searchTrack( query );
      this.searchArtist( query );
      this.searchAlbum( query );
      this.searchPlaylist( query );
    }
    else {
      this._search.reset();
    }
  }

  searchTrack( query: string ) {
    this._spotify.searchTracks( query )
      .subscribe( resp => {
        this._search.trackList = {
          'title': 'Canciones',
          'items': resp
        }
      });
  }

  searchArtist( query: string ) {
    this._spotify.searchArtist( query )
      .subscribe( resp => {
        this._search.artistList = {
          'title': 'Artistas',
          'items': resp
        }
      })
  }

  searchAlbum( query: string ) {
    this._spotify.searchAlbum( query )
      .subscribe( resp => {
        this._search.albumsSearch = {
          'title': 'Álbunes',
          'items': resp
        }
      });
  }

  searchPlaylist( query: string ) {
    this._spotify.searchPlaylist( query )
    .subscribe( resp => {      
      this._search.playlistsSearch = {
        'title': 'Playlists',
        'items': resp
      }
    });
  }

  navigateButton( back: boolean = true ): void {
    if( back ) this.location.back();
    else this.location.forward();
  }
}
