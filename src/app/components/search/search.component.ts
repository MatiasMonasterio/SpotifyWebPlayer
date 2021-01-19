import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit, OnDestroy {

  constructor( private _spotify: SpotifyService, public _search: SearchService ) {  }

  ngOnInit(): void {
    let userNav = document.querySelector('#userNav');
    userNav.classList.add('usernav__page-search');
  }

  ngOnDestroy(): void {
    let userNav = document.querySelector('#userNav');
    userNav.classList.remove('usernav__page-search');
  }

}
