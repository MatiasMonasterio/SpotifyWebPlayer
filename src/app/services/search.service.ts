import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  trackList: any;
  artistList: any;
  albumsSearch: any;
  playlistsSearch: any;

  constructor() { }

  reset() {
    this.trackList = '';
    this.artistList = '';
    this.albumsSearch = '';
    this.playlistsSearch = '';
  }

}
