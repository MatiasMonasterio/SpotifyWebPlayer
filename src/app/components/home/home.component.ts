import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  newRelease: any;
  featuredPlaylists: any;
  userPlaylists: any;

  constructor(private _spotify: SpotifyService ) {
    this.getNewReleases();
    this.getFeaturedPlaylists();
    this.getUserPlaylists();
  }

  getNewReleases(): void {
    this._spotify.getNewReleases()
      .subscribe( resp => {
        this.newRelease = {
          'title': 'Nuevos Lanzamientos',
          'items': resp
        }
      });
  }

  getFeaturedPlaylists(): void {
    this._spotify.getFeaturedPlaylists()
      .subscribe( resp => {
        this.featuredPlaylists = {
          'title': 'Listas Destacadas',
          'items': resp
        }
      });
  }

  getUserPlaylists(): void {
    this._spotify.getUserPlaylists()
      .subscribe( ( resp: Array<string> ) => {
        this.userPlaylists = {
          'title': 'Tus playlists',
          'items': resp.slice(0,5)
        }
      });
  }

  ngOnInit(): void {
    let userNav = document.querySelector('#userNav');
    userNav.classList.add('usernav__page-home');
  }

  ngOnDestroy(): void {
    let userNav = document.querySelector('#userNav');
    userNav.classList.remove('usernav__page-home');
  }

}
