import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-songsgroup',
  templateUrl: './songsgroup.component.html',
  styles: [
  ]
})
export class SongsgroupComponent implements OnInit {

  @Input() tracks: any;

  constructor() { }

  ngOnInit(): void { }

}
