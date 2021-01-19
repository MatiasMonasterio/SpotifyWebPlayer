import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  userPlaylists: Array<string>;

  constructor( private _spotify: SpotifyService ) {
    this.getUserPlaylists();
  }

  ngOnInit(): void {
  }

  getUserPlaylists(): void {
    this._spotify.getUserPlaylists()
      .subscribe( ( resp: Array<string> ) => this.userPlaylists = resp );
  }

}
